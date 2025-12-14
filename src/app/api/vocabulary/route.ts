import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { calculateSRS, getQualityFromPerformance } from "@/lib/srs"

// GET - Fetch vocabulary for review or all
export async function GET(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const userId = session.user.id
    const { searchParams } = new URL(request.url)
    const mode = searchParams.get("mode") // "review", "learning", "all"
    const level = searchParams.get("level")
    const limit = parseInt(searchParams.get("limit") || "20")

    const now = new Date()

    const whereClause: Record<string, unknown> = { userId }

    if (mode === "review") {
      // Get words due for review
      whereClause.nextReview = { lte: now }
      whereClause.isLearning = false
    } else if (mode === "learning") {
      // Get words currently being learned
      whereClause.isLearning = true
    }

    if (level) {
      whereClause.vocabulary = {
        level,
      }
    }

    const userVocabulary = await prisma.userVocabulary.findMany({
      where: whereClause,
      include: {
        vocabulary: true,
      },
      orderBy: mode === "review" 
        ? { nextReview: "asc" }
        : { createdAt: "desc" },
      take: limit,
    })

    // Also get count of due words
    const dueCount = await prisma.userVocabulary.count({
      where: {
        userId,
        nextReview: { lte: now },
      },
    })

    // Get count of mastered words
    const masteredCount = await prisma.userVocabulary.count({
      where: {
        userId,
        isMastered: true,
      },
    })

    // Get total vocabulary count
    const totalCount = await prisma.userVocabulary.count({
      where: { userId },
    })

    return NextResponse.json({
      vocabulary: userVocabulary.map(uv => ({
        id: uv.id,
        word: uv.vocabulary.word,
        translation: uv.vocabulary.translation,
        gender: uv.vocabulary.gender,
        plural: uv.vocabulary.plural,
        example: uv.vocabulary.example,
        exampleTrans: uv.vocabulary.exampleTrans,
        phonetic: uv.vocabulary.phonetic,
        audioUrl: uv.vocabulary.audioUrl,
        level: uv.vocabulary.level,
        partOfSpeech: uv.vocabulary.partOfSpeech,
        // SRS data
        easeFactor: uv.easeFactor,
        interval: uv.interval,
        repetitions: uv.repetitions,
        nextReview: uv.nextReview,
        isLearning: uv.isLearning,
        isMastered: uv.isMastered,
        correctCount: uv.correctCount,
        totalReviews: uv.totalReviews,
      })),
      stats: {
        dueCount,
        masteredCount,
        totalCount,
        learningCount: totalCount - masteredCount,
      },
    })
  } catch (error) {
    console.error("Vocabulary API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch vocabulary" },
      { status: 500 }
    )
  }
}

// POST - Review a vocabulary word (SRS update)
export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const userId = session.user.id
    const body = await request.json()
    const { 
      userVocabularyId, 
      isCorrect, 
      timeSpent, 
      hintUsed = false,
      attempts = 1 
    } = body

    if (!userVocabularyId) {
      return NextResponse.json(
        { error: "userVocabularyId is required" },
        { status: 400 }
      )
    }

    // Get current vocabulary state
    const userVocab = await prisma.userVocabulary.findUnique({
      where: { id: userVocabularyId },
    })

    if (!userVocab || userVocab.userId !== userId) {
      return NextResponse.json(
        { error: "Vocabulary not found" },
        { status: 404 }
      )
    }

    // Calculate quality based on performance
    const quality = getQualityFromPerformance(
      isCorrect,
      timeSpent,
      10, // expected time in seconds
      hintUsed,
      attempts
    )

    // Calculate new SRS values
    const srsResult = calculateSRS({
      quality,
      currentEaseFactor: userVocab.easeFactor,
      currentInterval: userVocab.interval,
      currentRepetitions: userVocab.repetitions,
    })

    // Determine if word is mastered (reviewed successfully 5+ times with interval > 21 days)
    const isMastered = srsResult.repetitions >= 5 && srsResult.interval >= 21

    // Update vocabulary
    const updated = await prisma.userVocabulary.update({
      where: { id: userVocabularyId },
      data: {
        easeFactor: srsResult.easeFactor,
        interval: srsResult.interval,
        repetitions: srsResult.repetitions,
        nextReview: srsResult.nextReview,
        lastReview: new Date(),
        isLearning: !isMastered && srsResult.repetitions < 3,
        isMastered,
        totalReviews: { increment: 1 },
        correctCount: isCorrect ? { increment: 1 } : undefined,
      },
    })

    // Award XP for review
    const xpEarned = isCorrect ? (isMastered ? 15 : 10) : 2
    await prisma.user.update({
      where: { id: userId },
      data: {
        xpPoints: { increment: xpEarned },
      },
    })

    return NextResponse.json({
      success: true,
      xpEarned,
      nextReview: srsResult.nextReview,
      interval: srsResult.interval,
      isMastered,
      stats: {
        easeFactor: srsResult.easeFactor,
        repetitions: srsResult.repetitions,
        correctRate: updated.totalReviews > 0 
          ? Math.round((updated.correctCount / updated.totalReviews) * 100)
          : 0,
      },
    })
  } catch (error) {
    console.error("Vocabulary review error:", error)
    return NextResponse.json(
      { error: "Failed to update vocabulary" },
      { status: 500 }
    )
  }
}

// PUT - Add new vocabulary to user's list
export async function PUT(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const userId = session.user.id
    const body = await request.json()
    const { vocabularyId } = body

    if (!vocabularyId) {
      return NextResponse.json(
        { error: "vocabularyId is required" },
        { status: 400 }
      )
    }

    // Check if vocabulary exists
    const vocab = await prisma.vocabulary.findUnique({
      where: { id: vocabularyId },
    })

    if (!vocab) {
      return NextResponse.json(
        { error: "Vocabulary not found" },
        { status: 404 }
      )
    }

    // Check if already added
    const existing = await prisma.userVocabulary.findUnique({
      where: {
        userId_vocabularyId: {
          userId,
          vocabularyId,
        },
      },
    })

    if (existing) {
      return NextResponse.json(
        { error: "Vocabulary already in your list" },
        { status: 400 }
      )
    }

    // Add to user's vocabulary
    const userVocab = await prisma.userVocabulary.create({
      data: {
        userId,
        vocabularyId,
        nextReview: new Date(), // Review immediately
      },
      include: {
        vocabulary: true,
      },
    })

    return NextResponse.json({
      success: true,
      vocabulary: {
        id: userVocab.id,
        word: userVocab.vocabulary.word,
        translation: userVocab.vocabulary.translation,
      },
    })
  } catch (error) {
    console.error("Add vocabulary error:", error)
    return NextResponse.json(
      { error: "Failed to add vocabulary" },
      { status: 500 }
    )
  }
}

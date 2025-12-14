import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

// GET - Fetch user progress
export async function GET() {
  try {
    const session = await auth()
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const userId = session.user.id

    // Get user with all progress data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        currentLevel: true,
        xpPoints: true,
        streak: true,
        longestStreak: true,
        dailyGoal: true,
        lastActiveAt: true,
        progress: {
          include: {
            lesson: {
              select: {
                id: true,
                title: true,
                titleDe: true,
                level: true,
                xpReward: true,
              },
            },
          },
          orderBy: {
            updatedAt: "desc",
          },
          take: 10,
        },
        vocabulary: {
          where: {
            isMastered: true,
          },
          select: {
            id: true,
          },
        },
        achievements: {
          include: {
            achievement: true,
          },
          orderBy: {
            unlockedAt: "desc",
          },
          take: 5,
        },
        studySessions: {
          orderBy: {
            startedAt: "desc",
          },
          take: 7,
          select: {
            id: true,
            type: true,
            xpEarned: true,
            duration: true,
            startedAt: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Calculate statistics
    const completedLessons = user.progress.filter(p => p.completed).length
    const totalXpFromSessions = user.studySessions.reduce((sum, s) => sum + s.xpEarned, 0)
    const totalTimeMinutes = user.studySessions.reduce((sum, s) => sum + s.duration, 0)
    const masteredWords = user.vocabulary.length

    // Get today's XP
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const todayXp = user.studySessions
      .filter(s => new Date(s.startedAt) >= today)
      .reduce((sum, s) => sum + s.xpEarned, 0)

    return NextResponse.json({
      level: user.currentLevel,
      xp: user.xpPoints,
      streak: user.streak,
      longestStreak: user.longestStreak,
      dailyGoal: user.dailyGoal,
      todayXp,
      totalXp: totalXpFromSessions, // Use calculated XP from sessions
      completedLessons,
      masteredWords,
      totalTime: `${Math.floor(totalTimeMinutes / 60)}h ${totalTimeMinutes % 60}m`,
      recentProgress: user.progress,
      recentAchievements: user.achievements.map(a => ({
        id: a.id,
        name: a.achievement.name,
        description: a.achievement.description,
        icon: a.achievement.icon,
        unlockedAt: a.unlockedAt,
      })),
      weeklyActivity: user.studySessions.map(s => ({
        date: s.startedAt,
        xp: s.xpEarned,
        duration: s.duration,
        type: s.type,
      })),
    })
  } catch (error) {
    console.error("Progress API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch progress" },
      { status: 500 }
    )
  }
}

// POST - Update progress (after completing exercise/lesson)
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
    const { lessonId, exerciseId: _exerciseId, xpEarned, isCorrect, timeSpent } = body
    
    // Note: exerciseId can be used for detailed tracking in future
    void _exerciseId

    // Start a study session or add to existing
    let studySession = await prisma.studySession.findFirst({
      where: {
        userId,
        endedAt: null,
      },
    })

    if (!studySession) {
      studySession = await prisma.studySession.create({
        data: {
          userId,
          type: lessonId ? "lesson" : "practice",
        },
      })
    }

    // Update user XP
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        xpPoints: { increment: xpEarned || 0 },
        lastActiveAt: new Date(),
      },
    })

    // Update study session
    await prisma.studySession.update({
      where: { id: studySession.id },
      data: {
        xpEarned: { increment: xpEarned || 0 },
        duration: { increment: timeSpent || 0 },
      },
    })

    // Update lesson progress if lessonId provided
    if (lessonId) {
      await prisma.userProgress.upsert({
        where: {
          userId_lessonId: {
            userId,
            lessonId,
          },
        },
        update: {
          score: { increment: isCorrect ? 10 : 0 },
          timeSpent: { increment: timeSpent || 0 },
          attempts: { increment: 1 },
        },
        create: {
          userId,
          lessonId,
          score: isCorrect ? 10 : 0,
          timeSpent: timeSpent || 0,
        },
      })
    }

    // Check for streak update
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const streakRecord = await prisma.streakHistory.upsert({
      where: {
        userId_date: {
          userId,
          date: today,
        },
      },
      update: {
        xpEarned: { increment: xpEarned || 0 },
        goalMet: updatedUser.xpPoints >= updatedUser.dailyGoal,
      },
      create: {
        userId,
        date: today,
        xpEarned: xpEarned || 0,
        goalMet: updatedUser.xpPoints >= updatedUser.dailyGoal,
      },
    })

    return NextResponse.json({
      success: true,
      xpTotal: updatedUser.xpPoints,
      streak: updatedUser.streak,
      goalMet: streakRecord.goalMet,
    })
  } catch (error) {
    console.error("Progress update error:", error)
    return NextResponse.json(
      { error: "Failed to update progress" },
      { status: 500 }
    )
  }
}

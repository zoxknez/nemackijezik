import { NextRequest, NextResponse } from "next/server"
import { generateExercises, ExerciseType } from "@/lib/ai/claude"
import { auth } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await auth()
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { 
      topic, 
      level = "A1", 
      exerciseType, 
      count = 5 
    } = body

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      )
    }

    const exercises = await generateExercises(
      topic,
      level,
      exerciseType as ExerciseType | undefined,
      count
    )

    return NextResponse.json({ exercises })
  } catch (error) {
    console.error("Exercise generation API error:", error)
    return NextResponse.json(
      { error: "Failed to generate exercises" },
      { status: 500 }
    )
  }
}

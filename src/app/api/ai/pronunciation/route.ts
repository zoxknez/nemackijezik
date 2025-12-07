import { NextRequest, NextResponse } from "next/server"
import { getPronunciationFeedback } from "@/lib/ai/speech"
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

    const formData = await request.formData()
    const audioFile = formData.get("audio") as File | null
    const expectedText = formData.get("expectedText") as string | null

    if (!audioFile || !expectedText) {
      return NextResponse.json(
        { error: "Audio file and expected text are required" },
        { status: 400 }
      )
    }

    const arrayBuffer = await audioFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const feedback = await getPronunciationFeedback(buffer, expectedText)
    
    return NextResponse.json(feedback)
  } catch (error) {
    console.error("Pronunciation API error:", error)
    return NextResponse.json(
      { error: "Failed to assess pronunciation" },
      { status: 500 }
    )
  }
}

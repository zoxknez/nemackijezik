import { NextRequest, NextResponse } from "next/server"
import { textToSpeech, getPronunciationFeedback } from "@/lib/ai/speech"
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
    const { text, voice = "nova" } = body

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const audioBuffer = await textToSpeech(text, voice)
    
    // Return as base64 encoded audio
    const base64Audio = Buffer.from(audioBuffer).toString("base64")
    
    return NextResponse.json({ 
      audio: base64Audio,
      format: "mp3"
    })
  } catch (error) {
    console.error("TTS API error:", error)
    return NextResponse.json(
      { error: "Failed to generate speech" },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server"
import { translateText, translateBatch, detectLanguage } from "@/lib/ai/deepl"
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
    const { text, texts, from, to, detectOnly } = body

    // Detect language only
    if (detectOnly && text) {
      const detected = await detectLanguage(text)
      return NextResponse.json({ language: detected })
    }

    // Batch translation
    if (texts && Array.isArray(texts)) {
      const translations = await translateBatch(texts, from, to)
      return NextResponse.json({ translations })
    }

    // Single translation
    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const translation = await translateText(text, from, to)
    return NextResponse.json({ translation })
  } catch (error) {
    console.error("Translation API error:", error)
    return NextResponse.json(
      { error: "Failed to translate" },
      { status: 500 }
    )
  }
}

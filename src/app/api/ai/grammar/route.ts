import { NextRequest, NextResponse } from "next/server"
import { checkGermanText } from "@/lib/ai/claude"
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
    const { text, userLevel = "A1" } = body

    if (!text) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const result = await checkGermanText(text, userLevel)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Grammar check API error:", error)
    return NextResponse.json(
      { error: "Failed to check grammar" },
      { status: 500 }
    )
  }
}

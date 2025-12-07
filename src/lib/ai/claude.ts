import Anthropic from "@anthropic-ai/sdk"
import { AI_CONFIG, TUTOR_SYSTEM_PROMPTS } from "./config"

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: AI_CONFIG.anthropic.apiKey,
})

export type TutorContext = "general" | "grammar" | "vocabulary" | "conversation"

export interface Message {
  role: "user" | "assistant"
  content: string
}

export interface TutorResponse {
  message: string
  suggestions?: string[]
  corrections?: Array<{
    original: string
    corrected: string
    explanation: string
  }>
}

/**
 * Chat with AI Tutor (Claude Sonnet 4)
 */
export async function chatWithTutor(
  messages: Message[],
  context: TutorContext = "general",
  userLevel: string = "A1"
): Promise<TutorResponse> {
  const systemPrompt = `${TUTOR_SYSTEM_PROMPTS[context]}

NIVO UČENIKA: ${userLevel}
Prilagodi složenost objašnjenja ovom nivou.`

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: AI_CONFIG.anthropic.maxTokens,
      system: systemPrompt,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    })

    const content = response.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    return {
      message: content.text,
    }
  } catch (error) {
    console.error("Claude API error:", error)
    throw new Error("Greška u komunikaciji sa AI tutorom")
  }
}

/**
 * Check and correct German text
 */
export async function checkGermanText(
  text: string,
  userLevel: string = "A1"
): Promise<TutorResponse> {
  const systemPrompt = `Analiziraj ovaj nemački tekst i daj povratne informacije NA SRPSKOM JEZIKU.

1. Ispitaj gramatiku, pravopis i stil
2. Označi sve greške
3. Objasni svaku grešku jednostavno
4. Daj ispravljenu verziju
5. Prilagodi objašnjenja nivou ${userLevel}

Odgovori u JSON formatu:
{
  "message": "Opšti komentar",
  "corrections": [
    {
      "original": "pogrešan tekst",
      "corrected": "ispravan tekst",
      "explanation": "objašnjenje na srpskom"
    }
  ],
  "suggestions": ["sugestija 1", "sugestija 2"]
}`

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: AI_CONFIG.anthropic.maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: text }],
    })

    const content = response.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    // Parse JSON response
    try {
      const parsed = JSON.parse(content.text)
      return parsed as TutorResponse
    } catch {
      // If not valid JSON, return as regular message
      return { message: content.text }
    }
  } catch (error) {
    console.error("Claude API error:", error)
    throw new Error("Greška pri proveri teksta")
  }
}

/**
 * Generate exercise explanation
 */
export async function explainExercise(
  question: string,
  correctAnswer: string,
  userAnswer: string,
  userLevel: string = "A1"
): Promise<string> {
  const systemPrompt = `Objasni ovu vežbu nemačkog jezika NA SRPSKOM.
  
NIVO UČENIKA: ${userLevel}

1. Objasni zašto je tačan odgovor ispravan
2. Ako je korisnikov odgovor pogrešan, objasni grešku
3. Daj dodatne primere istog pravila
4. Budi ohrabrujući i konstruktivan`

  const userMessage = `
Pitanje: ${question}
Tačan odgovor: ${correctAnswer}
Odgovor učenika: ${userAnswer}
Da li je tačno: ${userAnswer === correctAnswer ? "Da" : "Ne"}
`

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    })

    const content = response.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    return content.text
  } catch (error) {
    console.error("Claude API error:", error)
    throw new Error("Greška pri generisanju objašnjenja")
  }
}

/**
 * Generate personalized vocabulary mnemonics
 */
export async function generateMnemonic(
  word: string,
  translation: string
): Promise<string> {
  const systemPrompt = `Kreiraj mnemonički trik za pamćenje ove nemačke reči.
  
Trik treba da:
1. Poveže nemačku reč sa srpskom asocijacijom
2. Bude lak za pamćenje
3. Bude smešan ili upečatljiv
4. Uključi sliku ili scenu koju učenik može zamisliti

Odgovori NA SRPSKOM, kratko i jasno.`

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: 300,
      system: systemPrompt,
      messages: [
        { role: "user", content: `Reč: ${word}\nPrevod: ${translation}` },
      ],
    })

    const content = response.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    return content.text
  } catch (error) {
    console.error("Claude API error:", error)
    throw new Error("Greška pri generisanju trika za pamćenje")
  }
}

export type ExerciseType = 
  | "multiple-choice"
  | "fill-blank"
  | "translation"
  | "word-order"
  | "dictation"
  | "conjugation"
  | "article"
  | "case"

export interface GeneratedExercise {
  id: string
  type: ExerciseType
  question: string
  questionDe?: string
  options?: string[]
  correctAnswer: string | string[]
  hint?: string
  explanation?: string
}

/**
 * Generate exercises based on topic
 */
export async function generateExercises(
  topic: string,
  level: string = "A1",
  exerciseType?: ExerciseType,
  count: number = 5
): Promise<GeneratedExercise[]> {
  const typeInstruction = exerciseType 
    ? `Generiši samo "${exerciseType}" tip vežbi.`
    : `Kombinuj različite tipove: multiple-choice, fill-blank, translation, word-order.`

  const systemPrompt = `Ti si generator vežbi za učenje nemačkog jezika.

TEMA: ${topic}
NIVO: ${level}
BROJ VEŽBI: ${count}

${typeInstruction}

Odgovori u JSON formatu kao niz objekata:
[
  {
    "id": "1",
    "type": "multiple-choice",
    "question": "Pitanje na srpskom",
    "questionDe": "Opciono nemački tekst",
    "options": ["opcija1", "opcija2", "opcija3", "opcija4"],
    "correctAnswer": "tačna opcija",
    "hint": "Pomoć",
    "explanation": "Objašnjenje na srpskom"
  }
]

Za fill-blank, koristi ___ za prazninu.
Za translation, correctAnswer može biti niz prihvatljivih odgovora.
Objašnjenja piši NA SRPSKOM.`

  try {
    const response = await anthropic.messages.create({
      model: AI_CONFIG.anthropic.model,
      max_tokens: 3000,
      system: systemPrompt,
      messages: [
        { role: "user", content: `Generiši ${count} vežbi za temu "${topic}" na nivou ${level}.` },
      ],
    })

    const content = response.content[0]
    if (content.type !== "text") {
      throw new Error("Unexpected response type")
    }

    // Extract JSON from response
    const jsonMatch = content.text.match(/\[[\s\S]*\]/)
    if (!jsonMatch) {
      throw new Error("Invalid response format")
    }

    const exercises = JSON.parse(jsonMatch[0]) as GeneratedExercise[]
    return exercises
  } catch (error) {
    console.error("Claude API error:", error)
    throw new Error("Greška pri generisanju vežbi")
  }
}

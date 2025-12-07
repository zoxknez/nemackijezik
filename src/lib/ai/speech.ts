import { AI_CONFIG, VOICE_CONFIGS } from "./config"

/**
 * Text-to-Speech using ElevenLabs
 * High-quality German voice synthesis
 */
export async function textToSpeech(
  text: string,
  speed: "standard" | "slow" | "expressive" = "standard"
): Promise<ArrayBuffer> {
  const voiceSettings = VOICE_CONFIGS[speed]

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${AI_CONFIG.elevenlabs.voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": AI_CONFIG.elevenlabs.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          model_id: AI_CONFIG.elevenlabs.model,
          voice_settings: voiceSettings,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`ElevenLabs API error: ${error}`)
    }

    return await response.arrayBuffer()
  } catch (error) {
    console.error("ElevenLabs TTS error:", error)
    throw new Error("Greška pri generisanju zvuka")
  }
}

/**
 * Speech-to-Text using Deepgram Nova-3
 * Best accuracy for German language
 */
export async function speechToText(
  audioBuffer: ArrayBuffer,
  language: string = "de"
): Promise<{
  transcript: string
  confidence: number
  words?: Array<{
    word: string
    start: number
    end: number
    confidence: number
  }>
}> {
  try {
    const response = await fetch(
      `https://api.deepgram.com/v1/listen?model=${AI_CONFIG.deepgram.model}&language=${language}&punctuate=true&diarize=false`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${AI_CONFIG.deepgram.apiKey}`,
          "Content-Type": "audio/wav",
        },
        body: audioBuffer,
      }
    )

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Deepgram API error: ${error}`)
    }

    const data = await response.json()
    const result = data.results.channels[0].alternatives[0]

    return {
      transcript: result.transcript,
      confidence: result.confidence,
      words: result.words,
    }
  } catch (error) {
    console.error("Deepgram STT error:", error)
    throw new Error("Greška pri prepoznavanju govora")
  }
}

/**
 * Compare user pronunciation with correct pronunciation
 */
export async function analyzePronunciation(
  userAudio: ArrayBuffer,
  targetText: string
): Promise<{
  transcript: string
  score: number
  feedback: string
  wordScores?: Array<{
    word: string
    expected: string
    score: number
  }>
}> {
  const result = await speechToText(userAudio, "de")

  // Simple comparison - in production, use more sophisticated analysis
  const normalizedTranscript = result.transcript.toLowerCase().trim()
  const normalizedTarget = targetText.toLowerCase().trim()

  // Calculate word-level scores
  const userWords = normalizedTranscript.split(/\s+/)
  const targetWords = normalizedTarget.split(/\s+/)

  let correctWords = 0
  const wordScores = targetWords.map((expected, i) => {
    const spoken = userWords[i] || ""
    const isCorrect = spoken === expected
    if (isCorrect) correctWords++

    return {
      word: spoken,
      expected,
      score: isCorrect ? 1 : 0,
    }
  })

  const score = targetWords.length > 0
    ? Math.round((correctWords / targetWords.length) * 100)
    : 0

  // Generate feedback in Serbian
  let feedback: string
  if (score >= 90) {
    feedback = "🎉 Odličan izgovor! Skoro savršeno!"
  } else if (score >= 70) {
    feedback = "👍 Dobar izgovor! Malo vežbe i biće savršeno."
  } else if (score >= 50) {
    feedback = "💪 Solidno! Pokušaj da izgovoriš svaku reč jasnije."
  } else {
    feedback = "🎯 Hajde da pokušamo ponovo. Slušaj pažljivo i ponovi."
  }

  return {
    transcript: result.transcript,
    score,
    feedback,
    wordScores,
  }
}

/**
 * Generate audio for vocabulary word with example sentence
 */
export async function generateVocabularyAudio(
  word: string,
  example?: string
): Promise<{
  wordAudio: ArrayBuffer
  exampleAudio?: ArrayBuffer
}> {
  const wordAudio = await textToSpeech(word, "slow")

  let exampleAudio: ArrayBuffer | undefined
  if (example) {
    exampleAudio = await textToSpeech(example, "standard")
  }

  return { wordAudio, exampleAudio }
}

/**
 * Get available ElevenLabs voices for German
 */
export async function getAvailableVoices(): Promise<
  Array<{
    id: string
    name: string
    preview_url?: string
  }>
> {
  try {
    const response = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: {
        "xi-api-key": AI_CONFIG.elevenlabs.apiKey,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to get voices")
    }

    const data = await response.json()
    return data.voices.map((v: { voice_id: string; name: string; preview_url?: string }) => ({
      id: v.voice_id,
      name: v.name,
      preview_url: v.preview_url,
    }))
  } catch (error) {
    console.error("Error fetching voices:", error)
    return []
  }
}

import { AI_CONFIG } from "./config"

interface TranslationResult {
  text: string
  detectedSourceLanguage?: string
}

/**
 * Translate text using DeepL API
 * Note: Serbian (SR) is FREE in DeepL beta!
 */
export async function translate(
  text: string,
  targetLang: "DE" | "SR",
  sourceLang?: "DE" | "SR"
): Promise<TranslationResult> {
  const params = new URLSearchParams({
    text,
    target_lang: targetLang,
  })

  if (sourceLang) {
    params.append("source_lang", sourceLang)
  }

  try {
    const response = await fetch(`${AI_CONFIG.deepl.baseUrl}/translate`, {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${AI_CONFIG.deepl.apiKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`DeepL API error: ${error}`)
    }

    const data = await response.json()
    const translation = data.translations[0]

    return {
      text: translation.text,
      detectedSourceLanguage: translation.detected_source_language,
    }
  } catch (error) {
    console.error("DeepL translation error:", error)
    throw new Error("Greška pri prevođenju")
  }
}

/**
 * Translate Serbian to German
 */
export async function translateToGerman(text: string): Promise<string> {
  const result = await translate(text, "DE", "SR")
  return result.text
}

/**
 * Translate German to Serbian
 */
export async function translateToSerbian(text: string): Promise<string> {
  const result = await translate(text, "SR", "DE")
  return result.text
}

/**
 * Batch translate multiple texts
 */
export async function batchTranslate(
  texts: string[],
  targetLang: "DE" | "SR"
): Promise<string[]> {
  const results = await Promise.all(
    texts.map((text) => translate(text, targetLang))
  )
  return results.map((r) => r.text)
}

/**
 * Get translation with alternatives
 */
export async function getTranslationWithContext(
  text: string,
  targetLang: "DE" | "SR"
): Promise<{
  main: string
  formal?: string
  informal?: string
}> {
  const main = await translate(text, targetLang)

  // For German, we might want formal/informal versions
  // This is a simplified version - Claude could provide better alternatives
  return {
    main: main.text,
  }
}

/**
 * Check if DeepL API is available
 */
export async function checkDeepLStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${AI_CONFIG.deepl.baseUrl}/usage`, {
      headers: {
        Authorization: `DeepL-Auth-Key ${AI_CONFIG.deepl.apiKey}`,
      },
    })
    return response.ok
  } catch {
    return false
  }
}

/**
 * Get DeepL usage statistics
 */
export async function getDeepLUsage(): Promise<{
  characterCount: number
  characterLimit: number
}> {
  try {
    const response = await fetch(`${AI_CONFIG.deepl.baseUrl}/usage`, {
      headers: {
        Authorization: `DeepL-Auth-Key ${AI_CONFIG.deepl.apiKey}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to get usage")
    }

    const data = await response.json()
    return {
      characterCount: data.character_count,
      characterLimit: data.character_limit,
    }
  } catch (error) {
    console.error("DeepL usage error:", error)
    throw new Error("Greška pri dobijanju statistike")
  }
}

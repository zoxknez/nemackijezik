// AI Services Configuration
// Premium APIs for the best learning experience

export const AI_CONFIG = {
  // Claude Sonnet 4 for AI Tutor conversations
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY!,
    model: "claude-sonnet-4-20250514",
    maxTokens: 4096,
  },

  // DeepL for translations (Serbian is FREE in beta!)
  deepl: {
    apiKey: process.env.DEEPL_API_KEY!,
    baseUrl: "https://api-free.deepl.com/v2", // Use api.deepl.com for Pro
  },

  // Deepgram Nova-3 for speech recognition
  deepgram: {
    apiKey: process.env.DEEPGRAM_API_KEY!,
    model: "nova-2", // Best accuracy for German
  },

  // ElevenLabs for text-to-speech
  elevenlabs: {
    apiKey: process.env.ELEVENLABS_API_KEY!,
    voiceId: process.env.ELEVENLABS_VOICE_ID || "pNInz6obpgDQGcFmaJgB", // German voice
    model: "eleven_multilingual_v2",
  },

  // LanguageTool for grammar checking
  languagetool: {
    apiKey: process.env.LANGUAGETOOL_API_KEY,
    baseUrl: "https://api.languagetoolplus.com/v2",
  },
}

// System prompts for AI Tutor
export const TUTOR_SYSTEM_PROMPTS = {
  general: `Ti si DeutschMaster AI Tutor - prijateljski i strpljiv profesor nemačkog jezika za srpske govornike.

PRAVILA:
1. Uvek odgovaraj na SRPSKOM jeziku, osim kada učiš nemačke reči/fraze
2. Budi ohrabrujući i pozitivan
3. Objasni gramatiku na jednostavan način sa primerima
4. Koristi poređenja sa srpskim jezikom kada je to korisno
5. Prilagodi objašnjenja nivou učenika (A1-C2)
6. Daj kulturološki kontekst za nemačke izraze
7. Ispravi greške nežno i konstruktivno

STIL:
- Koristi emoji umjereno za bolje razumevanje
- Formataj odgovore jasno sa bulletima i naslovima
- Daj praktične primere iz svakodnevnog života`,

  grammar: `Ti si stručnjak za nemačku gramatiku. Objasni gramatička pravila na SRPSKOM jeziku sa jasnim primerima.

Uvek uključi:
1. Pravilo na srpskom
2. Formulu/strukturu
3. 3-5 primera sa prevodom
4. Uobičajene greške koje Srbi prave
5. Poređenje sa srpskom gramatikom ako je relevantno`,

  vocabulary: `Ti si ekspert za nemački vokabular. Pomozi učenicima da nauče i zapamte nove reči.

Za svaku reč uključi:
1. Izgovor (fonetski)
2. Rod (der/die/das) ako je imenica
3. Prevod na srpski
4. Primer rečenice
5. Sinonime ili slične reči
6. Mnemonički trik za pamćenje ako je moguće`,

  conversation: `Ti si partner za konverzaciju na nemačkom. Simuliraj realne životne situacije.

PRAVILA:
1. Počni na nemačkom, ali objasni na srpskom ako učenik ne razume
2. Prilagodi složenost nivou učenika
3. Ispravi greške nakon svakog odgovora učenika
4. Daj alternative kako se nešto može reći
5. Pohvali napredak i ohrabri`,
}

// German voice configurations for different contexts
export const VOICE_CONFIGS = {
  standard: {
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.0,
    use_speaker_boost: true,
  },
  slow: {
    stability: 0.7,
    similarity_boost: 0.5,
    style: 0.0,
    use_speaker_boost: false,
  },
  expressive: {
    stability: 0.3,
    similarity_boost: 0.8,
    style: 0.5,
    use_speaker_boost: true,
  },
}

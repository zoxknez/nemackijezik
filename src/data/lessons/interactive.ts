import { Lesson } from '../types'

// ============================================
// NUMBERS LESSON - Using Image Association
// ============================================
export const numbersLesson: Lesson = {
  id: "numbers-1",
  title: "Brojevi 1-10",
  titleDe: "Zahlen 1-10",
  description: "Nauči osnovne brojeve kroz vizuelnu asocijaciju.",
  level: "A1",
  unit: 1,
  order: 8,
  duration: 8,
  xpReward: 60,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Brojevi", "Vizualno učenje"],
  exercises: [
    {
      id: "num-intro",
      type: "learn-card",
      question: "Nemački brojevi",
      questionDe: "Die deutschen Zahlen",
      explanation: "Brojevi su fundamentalni deo svakog jezika. U ovoj lekciji ćeš naučiti brojeve od 1 do 10 kroz vizuelne asocijacije.",
      audioText: "eins, zwei, drei, vier, fünf"
    },
    {
      id: "num-1",
      type: "image-association",
      question: "eins",
      questionDe: "eins",
      explanation: "eins = jedan",
      imageOptions: [
        { emoji: "1️⃣", text: "jedan", isCorrect: true },
        { emoji: "2️⃣", text: "dva", isCorrect: false },
        { emoji: "3️⃣", text: "tri", isCorrect: false },
        { emoji: "4️⃣", text: "četiri", isCorrect: false }
      ]
    },
    {
      id: "num-2",
      type: "image-association",
      question: "drei",
      questionDe: "drei",
      explanation: "drei = tri",
      imageOptions: [
        { emoji: "2️⃣", text: "dva", isCorrect: false },
        { emoji: "3️⃣", text: "tri", isCorrect: true },
        { emoji: "5️⃣", text: "pet", isCorrect: false },
        { emoji: "7️⃣", text: "sedam", isCorrect: false }
      ]
    },
    {
      id: "num-3",
      type: "image-association",
      question: "fünf",
      questionDe: "fünf",
      explanation: "fünf = pet (pazi na umlaut!)",
      imageOptions: [
        { emoji: "4️⃣", text: "četiri", isCorrect: false },
        { emoji: "5️⃣", text: "pet", isCorrect: true },
        { emoji: "6️⃣", text: "šest", isCorrect: false },
        { emoji: "8️⃣", text: "osam", isCorrect: false }
      ]
    },
    {
      id: "num-4",
      type: "image-association",
      question: "sieben",
      questionDe: "sieben",
      explanation: "sieben = sedam",
      imageOptions: [
        { emoji: "6️⃣", text: "šest", isCorrect: false },
        { emoji: "7️⃣", text: "sedam", isCorrect: true },
        { emoji: "8️⃣", text: "osam", isCorrect: false },
        { emoji: "9️⃣", text: "devet", isCorrect: false }
      ]
    },
    {
      id: "num-5",
      type: "image-association",
      question: "zehn",
      questionDe: "zehn",
      explanation: "zehn = deset",
      imageOptions: [
        { emoji: "8️⃣", text: "osam", isCorrect: false },
        { emoji: "9️⃣", text: "devet", isCorrect: false },
        { emoji: "🔟", text: "deset", isCorrect: true },
        { emoji: "1️⃣", text: "jedan", isCorrect: false }
      ]
    },
    {
      id: "num-memory",
      type: "memory-match",
      question: "Memory igra",
      questionDe: "Gedächtnisspiel",
      explanation: "Pronađi parove brojeva!",
      memoryPairs: [
        { id: "m1", german: "eins", translation: "1" },
        { id: "m2", german: "zwei", translation: "2" },
        { id: "m3", german: "drei", translation: "3" },
        { id: "m4", german: "vier", translation: "4" }
      ]
    },
    {
      id: "num-timed",
      type: "timed-challenge",
      question: "Brzi test!",
      questionDe: "Schnelltest!",
      explanation: "Prevedi brojeve što brže možeš!",
      timeLimit: 45,
      pairs: [
        { de: "eins", sr: "jedan" },
        { de: "zwei", sr: "dva" },
        { de: "drei", sr: "tri" },
        { de: "vier", sr: "četiri" },
        { de: "fünf", sr: "pet" },
        { de: "sechs", sr: "šest" },
        { de: "sieben", sr: "sedam" },
        { de: "acht", sr: "osam" }
      ]
    }
  ]
}

// ============================================
// COLORS LESSON - Image Association & Memory
// ============================================
export const colorsLesson: Lesson = {
  id: "colors-1",
  title: "Boje",
  titleDe: "Die Farben",
  description: "Nauči boje kroz vizuelne asocijacije i igre.",
  level: "A1",
  unit: 1,
  order: 9,
  duration: 10,
  xpReward: 70,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Boje", "Vizualno učenje", "Igre"],
  exercises: [
    {
      id: "col-intro",
      type: "learn-card",
      question: "Boje na nemačkom",
      questionDe: "Die Farben",
      explanation: "Boje (die Farben) su imenice ženskog roda u množini. Pojedinačne boje su uglavnom pridevci i ne menjaju se po rodu kada su sami.",
      audioText: "rot, blau, grün, gelb"
    },
    {
      id: "col-1",
      type: "image-association",
      question: "rot",
      questionDe: "rot",
      explanation: "rot = crveno",
      imageOptions: [
        { emoji: "🔴", text: "crveno", isCorrect: true },
        { emoji: "🔵", text: "plavo", isCorrect: false },
        { emoji: "🟢", text: "zeleno", isCorrect: false },
        { emoji: "🟡", text: "žuto", isCorrect: false }
      ]
    },
    {
      id: "col-2",
      type: "image-association",
      question: "blau",
      questionDe: "blau",
      explanation: "blau = plavo",
      imageOptions: [
        { emoji: "🔴", text: "crveno", isCorrect: false },
        { emoji: "🔵", text: "plavo", isCorrect: true },
        { emoji: "🟤", text: "braon", isCorrect: false },
        { emoji: "⚫", text: "crno", isCorrect: false }
      ]
    },
    {
      id: "col-3",
      type: "image-association",
      question: "grün",
      questionDe: "grün",
      explanation: "grün = zeleno (pazi na umlaut!)",
      imageOptions: [
        { emoji: "🟢", text: "zeleno", isCorrect: true },
        { emoji: "🟡", text: "žuto", isCorrect: false },
        { emoji: "🟠", text: "narandžasto", isCorrect: false },
        { emoji: "🟣", text: "ljubičasto", isCorrect: false }
      ]
    },
    {
      id: "col-4",
      type: "image-association",
      question: "schwarz",
      questionDe: "schwarz",
      explanation: "schwarz = crno",
      imageOptions: [
        { emoji: "⚪", text: "belo", isCorrect: false },
        { emoji: "🔵", text: "plavo", isCorrect: false },
        { emoji: "⚫", text: "crno", isCorrect: true },
        { emoji: "🟤", text: "braon", isCorrect: false }
      ]
    },
    {
      id: "col-memory",
      type: "memory-match",
      question: "Parovi boja",
      questionDe: "Farbpaare",
      explanation: "Pronađi parove boja!",
      memoryPairs: [
        { id: "c1", german: "rot", translation: "🔴" },
        { id: "c2", german: "blau", translation: "🔵" },
        { id: "c3", german: "grün", translation: "🟢" },
        { id: "c4", german: "gelb", translation: "🟡" },
        { id: "c5", german: "schwarz", translation: "⚫" },
        { id: "c6", german: "weiß", translation: "⚪" }
      ]
    },
    {
      id: "col-chain",
      type: "word-chain",
      question: "Lanac boja",
      questionDe: "rot",
      explanation: "Napravi lanac reči - svaka sledeća počinje zadnjim slovom prethodne.",
      chainWords: ["türkis", "silber", "rosa", "azurblau"]
    }
  ]
}

// ============================================
// ANIMALS LESSON - Word Chain & Timed
// ============================================
export const animalsLesson: Lesson = {
  id: "animals-1",
  title: "Životinje",
  titleDe: "Die Tiere",
  description: "Nauči nazive životinja kroz lanac reči i brze testove.",
  level: "A1",
  unit: 2,
  order: 10,
  duration: 12,
  xpReward: 80,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Životinje", "Vokabular", "Igre"],
  exercises: [
    {
      id: "ani-intro",
      type: "learn-card",
      question: "Životinje na nemačkom",
      questionDe: "Die Tiere",
      explanation: "Životinje (die Tiere) imaju različite članove: der Hund (pas), die Katze (mačka), das Pferd (konj). Obrati pažnju na rod!",
      audioText: "der Hund, die Katze, das Pferd"
    },
    {
      id: "ani-img-1",
      type: "image-association",
      question: "der Hund",
      questionDe: "der Hund",
      explanation: "der Hund = pas (muški rod)",
      imageOptions: [
        { emoji: "🐕", text: "pas", isCorrect: true },
        { emoji: "🐈", text: "mačka", isCorrect: false },
        { emoji: "🐦", text: "ptica", isCorrect: false },
        { emoji: "🐟", text: "riba", isCorrect: false }
      ]
    },
    {
      id: "ani-img-2",
      type: "image-association",
      question: "die Katze",
      questionDe: "die Katze",
      explanation: "die Katze = mačka (ženski rod)",
      imageOptions: [
        { emoji: "🐕", text: "pas", isCorrect: false },
        { emoji: "🐈", text: "mačka", isCorrect: true },
        { emoji: "🐇", text: "zec", isCorrect: false },
        { emoji: "🐢", text: "kornjača", isCorrect: false }
      ]
    },
    {
      id: "ani-img-3",
      type: "image-association",
      question: "der Vogel",
      questionDe: "der Vogel",
      explanation: "der Vogel = ptica (muški rod)",
      imageOptions: [
        { emoji: "🐦", text: "ptica", isCorrect: true },
        { emoji: "🐝", text: "pčela", isCorrect: false },
        { emoji: "🦋", text: "leptir", isCorrect: false },
        { emoji: "🐟", text: "riba", isCorrect: false }
      ]
    },
    {
      id: "ani-chain",
      type: "word-chain",
      question: "Lanac životinja",
      questionDe: "Hund",
      explanation: "Napravi lanac reči!",
      chainWords: ["Delfin", "Nilpferd", "Drache", "Elefant", "Tiger"]
    },
    {
      id: "ani-memory",
      type: "memory-match",
      question: "Memory životinje",
      questionDe: "Tier-Memory",
      explanation: "Pronađi parove!",
      memoryPairs: [
        { id: "a1", german: "Hund", translation: "🐕" },
        { id: "a2", german: "Katze", translation: "🐈" },
        { id: "a3", german: "Vogel", translation: "🐦" },
        { id: "a4", german: "Fisch", translation: "🐟" },
        { id: "a5", german: "Pferd", translation: "🐴" },
        { id: "a6", german: "Kuh", translation: "🐄" }
      ]
    },
    {
      id: "ani-timed",
      type: "timed-challenge",
      question: "Brzi test životinja!",
      questionDe: "Tier-Schnelltest!",
      explanation: "Prevedi životinje što brže!",
      timeLimit: 60,
      pairs: [
        { de: "Hund", sr: "pas" },
        { de: "Katze", sr: "mačka" },
        { de: "Vogel", sr: "ptica" },
        { de: "Fisch", sr: "riba" },
        { de: "Pferd", sr: "konj" },
        { de: "Kuh", sr: "krava" },
        { de: "Schwein", sr: "svinja" },
        { de: "Schaf", sr: "ovca" },
        { de: "Huhn", sr: "kokoška" },
        { de: "Ente", sr: "patka" }
      ]
    }
  ]
}

// ============================================
// FOOD LESSON - Audio Sentences & Memory
// ============================================
export const foodLesson: Lesson = {
  id: "food-1",
  title: "Hrana i piće",
  titleDe: "Essen und Trinken",
  description: "Nauči vokabular hrane kroz slušanje rečenica.",
  level: "A1",
  unit: 2,
  order: 11,
  duration: 15,
  xpReward: 90,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Hrana", "Piće", "Rečenice"],
  exercises: [
    {
      id: "food-intro",
      type: "learn-card",
      question: "Hrana i piće",
      questionDe: "Essen und Trinken",
      explanation: "U ovoj lekciji ćeš naučiti osnovne reči za hranu i piće, kao i kako naručiti u restoranu.",
      audioText: "Ich möchte essen und trinken."
    },
    {
      id: "food-img-1",
      type: "image-association",
      question: "das Brot",
      questionDe: "das Brot",
      explanation: "das Brot = hleb (srednji rod)",
      imageOptions: [
        { emoji: "🍞", text: "hleb", isCorrect: true },
        { emoji: "🍕", text: "pica", isCorrect: false },
        { emoji: "🍔", text: "hamburger", isCorrect: false },
        { emoji: "🥐", text: "kroasan", isCorrect: false }
      ]
    },
    {
      id: "food-img-2",
      type: "image-association",
      question: "der Apfel",
      questionDe: "der Apfel",
      explanation: "der Apfel = jabuka (muški rod!)",
      imageOptions: [
        { emoji: "🍎", text: "jabuka", isCorrect: true },
        { emoji: "🍊", text: "pomorandža", isCorrect: false },
        { emoji: "🍋", text: "limun", isCorrect: false },
        { emoji: "🍇", text: "grožđe", isCorrect: false }
      ]
    },
    {
      id: "food-audio-1",
      type: "audio-sentence",
      question: "Naruči kafu",
      questionDe: "Bestellen Sie einen Kaffee",
      explanation: "Ja bih jednu kafu, molim.",
      targetSentence: "Ich hätte gerne einen Kaffee, bitte."
    },
    {
      id: "food-audio-2",
      type: "audio-sentence",
      question: "Pitaj za meni",
      questionDe: "Fragen Sie nach der Speisekarte",
      explanation: "Mogu li dobiti jelovnik?",
      targetSentence: "Könnte ich bitte die Speisekarte haben?"
    },
    {
      id: "food-audio-3",
      type: "audio-sentence",
      question: "Zatraži račun",
      questionDe: "Bitten Sie um die Rechnung",
      explanation: "Račun, molim.",
      targetSentence: "Die Rechnung, bitte."
    },
    {
      id: "food-memory",
      type: "memory-match",
      question: "Memory hrana",
      questionDe: "Essen-Memory",
      explanation: "Pronađi parove!",
      memoryPairs: [
        { id: "f1", german: "Brot", translation: "🍞" },
        { id: "f2", german: "Apfel", translation: "🍎" },
        { id: "f3", german: "Käse", translation: "🧀" },
        { id: "f4", german: "Wasser", translation: "💧" },
        { id: "f5", german: "Kaffee", translation: "☕" },
        { id: "f6", german: "Bier", translation: "🍺" }
      ]
    },
    {
      id: "food-timed",
      type: "timed-challenge",
      question: "Brzi test hrane!",
      questionDe: "Essen-Schnelltest!",
      explanation: "Prevedi što brže!",
      timeLimit: 50,
      pairs: [
        { de: "Brot", sr: "hleb" },
        { de: "Wasser", sr: "voda" },
        { de: "Milch", sr: "mleko" },
        { de: "Kaffee", sr: "kafa" },
        { de: "Tee", sr: "čaj" },
        { de: "Bier", sr: "pivo" },
        { de: "Wein", sr: "vino" },
        { de: "Apfel", sr: "jabuka" }
      ]
    }
  ]
}

// ============================================
// DAILY PHRASES LESSON - Audio Sentences
// ============================================
export const phrasesLesson: Lesson = {
  id: "phrases-1",
  title: "Svakodnevne fraze",
  titleDe: "Alltägliche Redewendungen",
  description: "Nauči korisne fraze za svakodnevnu komunikaciju.",
  level: "A1",
  unit: 2,
  order: 12,
  duration: 12,
  xpReward: 85,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Fraze", "Komunikacija", "Slušanje"],
  exercises: [
    {
      id: "phr-intro",
      type: "learn-card",
      question: "Svakodnevne fraze",
      questionDe: "Alltägliche Redewendungen",
      explanation: "Ove fraze ćeš koristiti svaki dan! Slušaj pažljivo i ponavljaj naglas.",
      audioText: "Guten Morgen! Wie geht es Ihnen?"
    },
    {
      id: "phr-audio-1",
      type: "audio-sentence",
      question: "Pozdravi ujutru",
      questionDe: "Morgengruß",
      explanation: "Dobro jutro!",
      targetSentence: "Guten Morgen!"
    },
    {
      id: "phr-audio-2",
      type: "audio-sentence",
      question: "Pitaj kako si",
      questionDe: "Frage nach dem Befinden",
      explanation: "Kako ste? (formalno)",
      targetSentence: "Wie geht es Ihnen?"
    },
    {
      id: "phr-audio-3",
      type: "audio-sentence",
      question: "Odgovori na kako si",
      questionDe: "Antwort auf die Frage",
      explanation: "Dobro sam, hvala. A Vi?",
      targetSentence: "Mir geht es gut, danke. Und Ihnen?"
    },
    {
      id: "phr-audio-4",
      type: "audio-sentence",
      question: "Pozdravi uveče",
      questionDe: "Abendgruß",
      explanation: "Dobro veče!",
      targetSentence: "Guten Abend!"
    },
    {
      id: "phr-audio-5",
      type: "audio-sentence",
      question: "Pozdravi na odlasku",
      questionDe: "Verabschiedung",
      explanation: "Doviđenja!",
      targetSentence: "Auf Wiedersehen!"
    },
    {
      id: "phr-audio-6",
      type: "audio-sentence",
      question: "Izvini se",
      questionDe: "Entschuldigung",
      explanation: "Izvините, molim Vas.",
      targetSentence: "Entschuldigung, bitte."
    },
    {
      id: "phr-audio-7",
      type: "audio-sentence",
      question: "Zahvali se",
      questionDe: "Danksagung",
      explanation: "Puno vam hvala!",
      targetSentence: "Vielen Dank!"
    },
    {
      id: "phr-audio-8",
      type: "audio-sentence",
      question: "Kaži da ne razumeš",
      questionDe: "Sag, dass du nicht verstehst",
      explanation: "Ne razumem.",
      targetSentence: "Ich verstehe nicht."
    }
  ]
}

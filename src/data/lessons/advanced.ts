import { Lesson } from '../types'

// ============================================
// BODY PARTS LESSON - Categories & Picture Description
// ============================================
export const bodyPartsLesson: Lesson = {
  id: "body-parts-1",
  title: "Delovi tela",
  titleDe: "Körperteile",
  description: "Nauči nazive delova tela kroz kategorije i opise.",
  level: "A1",
  unit: 3,
  order: 13,
  duration: 12,
  xpReward: 80,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Telo", "Kategorije", "Opis"],
  exercises: [
    {
      id: "body-intro",
      type: "learn-card",
      question: "Delovi tela",
      questionDe: "Die Körperteile",
      explanation: "Delovi tela su imenice sa različitim članovima: der Kopf (glava), die Hand (ruka), das Auge (oko). Naučićeš najvažnije delove kroz interaktivne vežbe.",
      audioText: "der Kopf, die Hand, das Auge"
    },
    {
      id: "body-img-1",
      type: "image-association",
      question: "der Kopf",
      questionDe: "der Kopf",
      explanation: "der Kopf = glava (muški rod)",
      imageOptions: [
        { emoji: "🧠", text: "glava", isCorrect: true },
        { emoji: "🦶", text: "stopalo", isCorrect: false },
        { emoji: "✋", text: "ruka", isCorrect: false },
        { emoji: "👂", text: "uho", isCorrect: false }
      ]
    },
    {
      id: "body-img-2",
      type: "image-association",
      question: "das Auge",
      questionDe: "das Auge",
      explanation: "das Auge = oko (srednji rod)",
      imageOptions: [
        { emoji: "👁️", text: "oko", isCorrect: true },
        { emoji: "👄", text: "usta", isCorrect: false },
        { emoji: "👃", text: "nos", isCorrect: false },
        { emoji: "👂", text: "uho", isCorrect: false }
      ]
    },
    {
      id: "body-categories",
      type: "word-categories",
      question: "Sortiraj delove tela",
      questionDe: "Sortiere die Körperteile",
      explanation: "Sortiraj reči u kategorije: Glava i Telo",
      categories: [
        { name: "Kopf (Glava)", words: ["Auge", "Nase", "Ohr", "Mund"] },
        { name: "Körper (Telo)", words: ["Arm", "Bein", "Hand", "Fuß"] }
      ],
      wordsToSort: ["Auge", "Arm", "Nase", "Bein", "Ohr", "Hand", "Mund", "Fuß"]
    },
    {
      id: "body-picture",
      type: "picture-description",
      question: "Opiši lice",
      questionDe: "Beschreibe das Gesicht",
      explanation: "Koje delove lica vidiš?",
      pictureEmoji: "👩",
      options: ["Auge", "Nase", "Mund", "Ohr", "Haar"],
      hint: "Pomisli na oči, nos, usta..."
    },
    {
      id: "body-memory",
      type: "memory-match",
      question: "Memory - delovi tela",
      questionDe: "Körperteile-Memory",
      explanation: "Pronađi parove!",
      memoryPairs: [
        { id: "b1", german: "Kopf", translation: "🧠" },
        { id: "b2", german: "Hand", translation: "✋" },
        { id: "b3", german: "Fuß", translation: "🦶" },
        { id: "b4", german: "Auge", translation: "👁️" },
        { id: "b5", german: "Ohr", translation: "👂" },
        { id: "b6", german: "Nase", translation: "👃" }
      ]
    }
  ]
}

// ============================================
// WEATHER LESSON - Picture Description & Dictation
// ============================================
export const weatherLesson: Lesson = {
  id: "weather-1",
  title: "Vreme",
  titleDe: "Das Wetter",
  description: "Nauči kako da govoriš o vremenu na nemačkom.",
  level: "A1",
  unit: 3,
  order: 14,
  duration: 10,
  xpReward: 70,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Vreme", "Priroda", "Opis"],
  exercises: [
    {
      id: "weather-intro",
      type: "learn-card",
      question: "Kako je vreme?",
      questionDe: "Wie ist das Wetter?",
      explanation: "Da pitaš 'Kako je vreme?' kažeš 'Wie ist das Wetter?'. Odgovori koriste 'Es ist...' (Je/Ono je...).",
      audioText: "Wie ist das Wetter heute?"
    },
    {
      id: "weather-img-1",
      type: "image-association",
      question: "Es ist sonnig",
      questionDe: "Es ist sonnig",
      explanation: "sonnig = sunčano",
      imageOptions: [
        { emoji: "☀️", text: "sunčano", isCorrect: true },
        { emoji: "🌧️", text: "kišovito", isCorrect: false },
        { emoji: "❄️", text: "snežno", isCorrect: false },
        { emoji: "☁️", text: "oblačno", isCorrect: false }
      ]
    },
    {
      id: "weather-img-2",
      type: "image-association",
      question: "Es regnet",
      questionDe: "Es regnet",
      explanation: "regnen = padati kiša. Es regnet = Pada kiša",
      imageOptions: [
        { emoji: "🌧️", text: "kiša", isCorrect: true },
        { emoji: "☀️", text: "sunce", isCorrect: false },
        { emoji: "💨", text: "vetar", isCorrect: false },
        { emoji: "🌈", text: "duga", isCorrect: false }
      ]
    },
    {
      id: "weather-picture",
      type: "picture-description",
      question: "Opiši vreme",
      questionDe: "Beschreibe das Wetter",
      explanation: "Šta vidiš na slici?",
      pictureEmoji: "⛈️",
      options: ["Regen", "Blitz", "Donner", "Sturm", "Gewitter"],
      hint: "Oluja, kiša, grom..."
    },
    {
      id: "weather-dictation-1",
      type: "dictation",
      question: "Diktat - Vreme",
      questionDe: "Diktation",
      explanation: "Danas je sunčano i toplo.",
      dictationSentence: "Heute ist es sonnig und warm."
    },
    {
      id: "weather-audio",
      type: "audio-sentence",
      question: "Pitaj za vreme",
      questionDe: "Frage nach dem Wetter",
      explanation: "Kako je vreme danas?",
      targetSentence: "Wie ist das Wetter heute?"
    },
    {
      id: "weather-categories",
      type: "word-categories",
      question: "Dobro ili loše vreme?",
      questionDe: "Gutes oder schlechtes Wetter?",
      explanation: "Sortiraj vremenske uslove",
      categories: [
        { name: "Gutes Wetter ☀️", words: ["sonnig", "warm", "schön", "heiß"] },
        { name: "Schlechtes Wetter 🌧️", words: ["kalt", "regnerisch", "stürmisch", "neblig"] }
      ],
      wordsToSort: ["sonnig", "kalt", "warm", "regnerisch", "schön", "stürmisch", "heiß", "neblig"]
    }
  ]
}

// ============================================
// GERMAN CASES LESSON - Case Practice
// ============================================
export const casesLesson: Lesson = {
  id: "cases-1",
  title: "Nemački padeži",
  titleDe: "Die deutschen Fälle",
  description: "Nauči osnove nemačkih padeža: Nominativ i Akkusativ.",
  level: "A2",
  unit: 1,
  order: 15,
  duration: 15,
  xpReward: 100,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Gramatika", "Padeži", "Članovi"],
  exercises: [
    {
      id: "cases-intro",
      type: "learn-card",
      question: "Nemački padeži",
      questionDe: "Die deutschen Fälle",
      explanation: "Nemački ima 4 padeža: Nominativ (ko?), Akkusativ (koga? šta?), Dativ (kome?), Genitiv (čiji?). Počećemo sa Nominativ i Akkusativ.",
      audioText: "der Mann, den Mann, dem Mann, des Mannes"
    },
    {
      id: "cases-nom-1",
      type: "case-practice",
      question: "Nominativ - ko/šta?",
      questionDe: "Mann",
      explanation: "U Nominativu, muški rod ima član 'der'. Der Mann ist groß. (Čovek je visok.)",
      caseName: "Nominativ",
      caseArticles: [
        { article: "der", isCorrect: true },
        { article: "den", isCorrect: false },
        { article: "dem", isCorrect: false },
        { article: "des", isCorrect: false }
      ]
    },
    {
      id: "cases-nom-2",
      type: "case-practice",
      question: "Nominativ - ko/šta?",
      questionDe: "Frau",
      explanation: "U Nominativu, ženski rod ima član 'die'. Die Frau ist nett. (Žena je ljubazna.)",
      caseName: "Nominativ",
      caseArticles: [
        { article: "die", isCorrect: true },
        { article: "der", isCorrect: false },
        { article: "den", isCorrect: false },
        { article: "das", isCorrect: false }
      ]
    },
    {
      id: "cases-akk-intro",
      type: "learn-card",
      question: "Akkusativ",
      questionDe: "Der Akkusativ",
      explanation: "Akkusativ se koristi za direktni objekt (koga? šta?). Samo MUŠKI rod menja član: der → den. Ženski i srednji ostaju isti!",
      audioText: "Ich sehe den Mann. Ich sehe die Frau. Ich sehe das Kind."
    },
    {
      id: "cases-akk-1",
      type: "case-practice",
      question: "Akkusativ - koga? šta?",
      questionDe: "Mann",
      explanation: "U Akkusativu, muški rod menja 'der' u 'den'. Ich sehe den Mann. (Vidim čoveka.)",
      caseName: "Akkusativ",
      caseArticles: [
        { article: "den", isCorrect: true },
        { article: "der", isCorrect: false },
        { article: "dem", isCorrect: false },
        { article: "das", isCorrect: false }
      ]
    },
    {
      id: "cases-akk-2",
      type: "case-practice",
      question: "Akkusativ - koga? šta?",
      questionDe: "Buch",
      explanation: "U Akkusativu, srednji rod ostaje 'das'. Ich lese das Buch. (Čitam knjigu.)",
      caseName: "Akkusativ",
      caseArticles: [
        { article: "das", isCorrect: true },
        { article: "den", isCorrect: false },
        { article: "die", isCorrect: false },
        { article: "dem", isCorrect: false }
      ]
    },
    {
      id: "cases-error",
      type: "error-correction",
      question: "Pronađi grešku",
      questionDe: "Finde den Fehler",
      explanation: "Posle 'sehe' (vidim) koristi se Akkusativ. Muški rod: der → den.",
      errorSentence: "Ich sehe der Hund",
      errorPosition: 2,
      correctAnswer: "den"
    },
    {
      id: "cases-dictation",
      type: "dictation",
      question: "Diktat - Akkusativ",
      questionDe: "Akkusativ-Diktation",
      explanation: "Ja vidim čoveka i ženu.",
      dictationSentence: "Ich sehe den Mann und die Frau."
    }
  ]
}

// ============================================
// DAILY ROUTINE LESSON - Audio & Dictation
// ============================================
export const dailyRoutineLesson: Lesson = {
  id: "daily-routine-1",
  title: "Dnevna rutina",
  titleDe: "Tagesablauf",
  description: "Nauči da opišeš svoj tipičan dan na nemačkom.",
  level: "A1",
  unit: 3,
  order: 16,
  duration: 12,
  xpReward: 85,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Svakodnevica", "Glagoli", "Vreme"],
  exercises: [
    {
      id: "routine-intro",
      type: "learn-card",
      question: "Moj dan",
      questionDe: "Mein Tag",
      explanation: "Da opišeš dnevnu rutinu, koristićeš povratne glagole i vremenske izraze poput 'um 7 Uhr' (u 7 sati).",
      audioText: "Ich wache um sieben Uhr auf."
    },
    {
      id: "routine-audio-1",
      type: "audio-sentence",
      question: "Buđenje",
      questionDe: "Aufwachen",
      explanation: "Ja se budim u 7 sati.",
      targetSentence: "Ich wache um sieben Uhr auf."
    },
    {
      id: "routine-audio-2",
      type: "audio-sentence",
      question: "Doručak",
      questionDe: "Frühstück",
      explanation: "Ja doručkujem u 8 sati.",
      targetSentence: "Ich frühstücke um acht Uhr."
    },
    {
      id: "routine-audio-3",
      type: "audio-sentence",
      question: "Odlazak na posao",
      questionDe: "Zur Arbeit gehen",
      explanation: "Ja idem na posao u 9 sati.",
      targetSentence: "Ich gehe um neun Uhr zur Arbeit."
    },
    {
      id: "routine-dictation-1",
      type: "dictation",
      question: "Diktat - Jutro",
      questionDe: "Morgen-Diktation",
      explanation: "Ujutru pijem kafu.",
      dictationSentence: "Am Morgen trinke ich Kaffee."
    },
    {
      id: "routine-dictation-2",
      type: "dictation",
      question: "Diktat - Veče",
      questionDe: "Abend-Diktation",
      explanation: "Uveče gledam televiziju.",
      dictationSentence: "Am Abend sehe ich fern."
    },
    {
      id: "routine-categories",
      type: "word-categories",
      question: "Jutro ili veče?",
      questionDe: "Morgens oder abends?",
      explanation: "Sortiraj aktivnosti",
      categories: [
        { name: "Morgens (Ujutru)", words: ["aufwachen", "frühstücken", "duschen", "anziehen"] },
        { name: "Abends (Uveče)", words: ["fernsehen", "schlafen", "Abendessen", "entspannen"] }
      ],
      wordsToSort: ["aufwachen", "fernsehen", "frühstücken", "schlafen", "duschen", "Abendessen", "anziehen", "entspannen"]
    },
    {
      id: "routine-sentence",
      type: "sentence-builder",
      question: "Napravi rečenicu",
      questionDe: "Bilde den Satz",
      explanation: "Ja idem u školu u deset sati.",
      segments: ["Ich", "gehe", "um", "zehn", "Uhr", "in", "die", "Schule"],
      correctAnswer: "Ich gehe um zehn Uhr in die Schule"
    }
  ]
}

// ============================================
// HOBBIES LESSON - Various Exercises
// ============================================
export const hobbiesLesson: Lesson = {
  id: "hobbies-1",
  title: "Hobiji",
  titleDe: "Hobbys",
  description: "Nauči da govoriš o hobijima i slobodnom vremenu.",
  level: "A1",
  unit: 3,
  order: 17,
  duration: 10,
  xpReward: 75,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Hobiji", "Slobodno vreme", "Interesi"],
  exercises: [
    {
      id: "hobby-intro",
      type: "learn-card",
      question: "Tvoji hobiji",
      questionDe: "Deine Hobbys",
      explanation: "Da pitaš nekoga o hobijima, kažeš 'Was sind deine Hobbys?' (Koji su tvoji hobiji?) ili 'Was machst du gern?' (Šta voliš da radiš?).",
      audioText: "Was sind deine Hobbys? Ich spiele gern Fußball."
    },
    {
      id: "hobby-img-1",
      type: "image-association",
      question: "Fußball spielen",
      questionDe: "Fußball spielen",
      explanation: "Fußball spielen = igrati fudbal",
      imageOptions: [
        { emoji: "⚽", text: "fudbal", isCorrect: true },
        { emoji: "🏀", text: "košarka", isCorrect: false },
        { emoji: "🎾", text: "tenis", isCorrect: false },
        { emoji: "🏊", text: "plivanje", isCorrect: false }
      ]
    },
    {
      id: "hobby-img-2",
      type: "image-association",
      question: "Musik hören",
      questionDe: "Musik hören",
      explanation: "Musik hören = slušati muziku",
      imageOptions: [
        { emoji: "🎧", text: "muzika", isCorrect: true },
        { emoji: "📚", text: "čitanje", isCorrect: false },
        { emoji: "🎮", text: "igrice", isCorrect: false },
        { emoji: "🎨", text: "slikanje", isCorrect: false }
      ]
    },
    {
      id: "hobby-audio",
      type: "audio-sentence",
      question: "Moj hobi",
      questionDe: "Mein Hobby",
      explanation: "Moj hobi je čitanje.",
      targetSentence: "Mein Hobby ist Lesen."
    },
    {
      id: "hobby-categories",
      type: "word-categories",
      question: "Sport ili umetnost?",
      questionDe: "Sport oder Kunst?",
      explanation: "Sortiraj hobije",
      categories: [
        { name: "Sport 🏃", words: ["Fußball", "Schwimmen", "Tennis", "Joggen"] },
        { name: "Kunst 🎨", words: ["Malen", "Musik", "Tanzen", "Theater"] }
      ],
      wordsToSort: ["Fußball", "Malen", "Schwimmen", "Musik", "Tennis", "Tanzen", "Joggen", "Theater"]
    },
    {
      id: "hobby-timed",
      type: "timed-challenge",
      question: "Brzi test hobija!",
      questionDe: "Hobby-Schnelltest!",
      explanation: "Prevedi hobije što brže!",
      timeLimit: 45,
      pairs: [
        { de: "lesen", sr: "čitati" },
        { de: "schwimmen", sr: "plivati" },
        { de: "kochen", sr: "kuvati" },
        { de: "tanzen", sr: "plesati" },
        { de: "singen", sr: "pevati" },
        { de: "malen", sr: "slikati" }
      ]
    }
  ]
}

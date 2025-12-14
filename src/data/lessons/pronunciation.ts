import { Lesson } from '../types'

export const pronunciationLesson: Lesson = {
  id: "pronunciation-masterclass-1",
  title: "Izgovor i Struktura",
  titleDe: "Aussprache und Struktur",
  description: "Vežbaj razliku između sličnih zvukova i gradi rečenice.",
  level: "A1",
  unit: 1,
  order: 3,
  duration: 10,
  xpReward: 100,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Izgovor", "Red reči", "Minimalni parovi"],
  exercises: [
    {
      id: "p1-intro",
      type: "learn-card",
      question: "Nemački samoglasnici",
      questionDe: "Die Vokale",
      explanation: "Neki nemački samoglasnici nemaju ekvivalent u srpskom jeziku. Danas ćemo vežbati 'Ü' i 'U'. 'Ü' se izgovara tako što namestite usta za 'U', a kažete 'I'.",
      audioText: "Übung macht den Meister."
    },
    {
      id: "p1-pair-1",
      type: "minimal-pairs",
      question: "Koju reč čuješ?",
      questionDe: "Welches Wort hörst du?",
      explanation: "Slušaj pažljivo razliku između 'fühlen' (osećati) i 'Fohlen' (ždrebe).",
      audioText: "fühlen",
      pairOptions: [
        { text: "fühlen", isCorrect: true, soundText: "fühlen" },
        { text: "Fohlen", isCorrect: false, soundText: "Fohlen" }
      ],
      correctAnswer: "fühlen"
    },
    {
      id: "p1-pair-2",
      type: "minimal-pairs",
      question: "Koju reč čuješ?",
      questionDe: "Welches Wort hörst du?",
      explanation: "Razlika između 'Tür' (vrata) i 'Tor' (kapija/gol).",
      audioText: "Tor",
      pairOptions: [
        { text: "Tür", isCorrect: false, soundText: "Tür" },
        { text: "Tor", isCorrect: true, soundText: "Tor" }
      ],
      correctAnswer: "Tor"
    },
    {
      id: "p1-sb-intro",
      type: "learn-card",
      question: "Red reči u rečenici",
      questionDe: "Wortstellung",
      explanation: "U nemačkoj izjavnoj rečenici, glagol je uvek na drugom mestu. Subjekt može biti prvi ili treći.",
      audioText: "Ich lerne Deutsch."
    },
    {
      id: "p1-sb-1",
      type: "sentence-builder",
      question: "Sastavi rečenicu",
      questionDe: "Bilde den Satz",
      explanation: "Glagol 'lerne' mora biti na drugom mestu.",
      segments: ["Ich", "lerne", "Deutsch", "heute"],
      correctAnswer: "Ich lerne heute Deutsch"
    },
    {
      id: "p1-sb-2",
      type: "sentence-builder",
      question: "Sastavi rečenicu",
      questionDe: "Bilde den Satz",
      explanation: "Kada rečenica počinje sa 'Danas' (Heute), glagol i dalje ostaje na drugom mestu, pa subjekt ide posle njega.",
      segments: ["Heute", "lerne", "ich", "Deutsch"],
      correctAnswer: "Heute lerne ich Deutsch"
    },
    {
      id: "p1-dictation-1",
      type: "listening",
      question: "Napiši ono što čuješ",
      questionDe: "Schreib was du hörst",
      explanation: "Slušaj pažljivo i napiši rečenicu. Pazi na veliko slovo.",
      audioText: "Ich lerne Deutsch",
      correctAnswer: "Ich lerne Deutsch"
    }
  ]
}

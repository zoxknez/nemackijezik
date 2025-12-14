import { Lesson } from '../types'

export const grammarLesson: Lesson = {
  id: "grammar-verbs-1",
  title: "Glagol 'sein' (biti)",
  titleDe: "Das Verb 'sein'",
  description: "Nauči konjugaciju najvažnijeg nemačkog glagola.",
  level: "A1",
  unit: 2,
  order: 6,
  duration: 12,
  xpReward: 80,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Glagoli", "Konjugacija", "sein"],
  exercises: [
    {
      id: "gr1-intro",
      type: "learn-card",
      question: "Glagol 'sein'",
      questionDe: "Das Verb 'sein'",
      explanation: "Glagol 'sein' (biti) je jedan od najvažnijih glagola u nemačkom. Koristi se za opisivanje stanja, identiteta i osobina. Nepravilan je, pa ga moraš naučiti napamet.",
      audioText: "Ich bin, du bist, er ist",
      correctAnswer: "continue"
    },
    {
      id: "gr1-conj-1",
      type: "conjugation",
      question: "Konjugiraj: sein",
      questionDe: "Konjugiere: sein",
      explanation: "ich + sein = bin",
      conjugationVerb: "sein",
      conjugationPronoun: "ich",
      conjugationTense: "Präsens (Sadašnje vreme)",
      correctAnswer: "bin"
    },
    {
      id: "gr1-conj-2",
      type: "conjugation",
      question: "Konjugiraj: sein",
      questionDe: "Konjugiere: sein",
      explanation: "du + sein = bist",
      conjugationVerb: "sein",
      conjugationPronoun: "du",
      conjugationTense: "Präsens (Sadašnje vreme)",
      correctAnswer: "bist"
    },
    {
      id: "gr1-conj-3",
      type: "conjugation",
      question: "Konjugiraj: sein",
      questionDe: "Konjugiere: sein",
      explanation: "er/sie/es + sein = ist",
      conjugationVerb: "sein",
      conjugationPronoun: "er",
      conjugationTense: "Präsens (Sadašnje vreme)",
      correctAnswer: "ist"
    },
    {
      id: "gr1-conj-4",
      type: "conjugation",
      question: "Konjugiraj: sein",
      questionDe: "Konjugiere: sein",
      explanation: "wir + sein = sind",
      conjugationVerb: "sein",
      conjugationPronoun: "wir",
      conjugationTense: "Präsens (Sadašnje vreme)",
      correctAnswer: "sind"
    },
    {
      id: "gr1-error-1",
      type: "error-correction",
      question: "Pronađi grešku",
      questionDe: "Finde den Fehler",
      explanation: "Pazi na konjugaciju glagola 'sein'.",
      errorSentence: "Ich bist aus Deutschland",
      errorPosition: 1,
      correctAnswer: "bin"
    },
    {
      id: "gr1-cloze-1",
      type: "cloze-test",
      question: "Ich ___ Lehrer und du ___ Student",
      questionDe: "Popuni praznine",
      explanation: "Koristi odgovarajuće oblike glagola 'sein'.",
      blankIndices: [1, 5],
      wordBank: ["bin", "bist", "ist", "sind"],
      correctAnswer: "completed"
    }
  ]
}

export const readingLesson: Lesson = {
  id: "reading-1",
  title: "Moja porodica",
  titleDe: "Meine Familie",
  description: "Čitanje sa razumevanjem - upoznaj Anu i njenu porodicu.",
  level: "A1",
  unit: 2,
  order: 7,
  duration: 10,
  xpReward: 70,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Čitanje", "Porodica", "Razumevanje"],
  exercises: [
    {
      id: "rd1-story",
      type: "story-mode",
      question: "Meine Familie",
      questionDe: "Moja porodica",
      explanation: "Pročitaj tekst i odgovori na pitanja.",
      storyText: `Hallo! Ich heiße Anna. Ich bin 25 Jahre alt und komme aus Berlin.

Meine Familie ist nicht sehr groß. Mein Vater heißt Thomas und ist 55 Jahre alt. Er ist Lehrer. Meine Mutter heißt Maria und ist 52 Jahre alt. Sie ist Ärztin.

Ich habe einen Bruder. Er heißt Max und ist 22 Jahre alt. Max studiert Informatik in München.

Wir haben auch einen Hund. Er heißt Bruno und ist sehr süß!`,
      storyQuestions: [
        {
          question: "Wie alt ist Anna?",
          options: ["22 Jahre", "25 Jahre", "52 Jahre", "55 Jahre"],
          correct: 1
        },
        {
          question: "Was ist Annas Vater von Beruf?",
          options: ["Arzt", "Student", "Lehrer", "Informatiker"],
          correct: 2
        },
        {
          question: "Wo studiert Max?",
          options: ["Berlin", "Hamburg", "München", "Köln"],
          correct: 2
        },
        {
          question: "Wie heißt der Hund?",
          options: ["Max", "Thomas", "Bruno", "Anna"],
          correct: 2
        }
      ],
      correctAnswer: "completed"
    }
  ]
}

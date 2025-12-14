import { Lesson } from '../types'

export const dialogueLesson: Lesson = {
  id: "dialogue-1",
  title: "Upoznajmo se",
  titleDe: "Kennenlernen",
  description: "Nauči kako da se predstaviš i vodiš osnovni razgovor.",
  level: "A1",
  unit: 1,
  order: 4,
  duration: 10,
  xpReward: 100,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Pozdravi", "Predstavljanje"],
  exercises: [
    {
      id: "d1-intro",
      type: "learn-card",
      question: "Kako se zoveš?",
      questionDe: "Wie heißt du?",
      explanation: "Kada upoznaješ nekoga, možeš reći 'Ich heiße...' (Zovem se...) ili 'Ich bin...' (Ja sam...).",
      audioText: "Wie heißt du? Ich heiße Anna.",
      correctAnswer: "continue"
    },
    {
      id: "d1-dialogue-1",
      type: "dialogue",
      question: "Razgovor: U parku",
      questionDe: "Gespräch: Im Park",
      explanation: "Ti si Markus. Odaberi prave odgovore da nastaviš razgovor.",
      correctAnswer: "completed",
      dialogueLines: [
        {
          speaker: "Anna",
          text: "Hallo!",
          translation: "Zdravo!",
          audio: "Hallo"
        },
        {
          speaker: "Me",
          text: "Hallo! Wie heißt du?",
          translation: "Zdravo! Kako se zoveš?",
          isUser: true,
          options: [
            { text: "Hallo! Wie heißt du?", isCorrect: true },
            { text: "Tschüss!", isCorrect: false, feedback: "To znači 'Ćao' (na odlasku)." }
          ]
        },
        {
          speaker: "Anna",
          text: "Ich heiße Anna. Und du?",
          translation: "Zovem se Anna. A ti?",
          audio: "Ich heiße Anna. Und du?"
        },
        {
          speaker: "Me",
          text: "Ich bin Markus.",
          translation: "Ja sam Markus.",
          isUser: true,
          options: [
            { text: "Ich bin Markus.", isCorrect: true },
            { text: "Du bist Markus.", isCorrect: false, feedback: "'Du bist' znači 'Ti si'." }
          ]
        },
        {
          speaker: "Anna",
          text: "Freut mich, Markus!",
          translation: "Drago mi je, Markus!",
          audio: "Freut mich, Markus!"
        },
        {
          speaker: "Me",
          text: "Freut mich auch!",
          translation: "Drago mi je takođe!",
          isUser: true,
          options: [
            { text: "Freut mich auch!", isCorrect: true },
            { text: "Nein, danke.", isCorrect: false, feedback: "To znači 'Ne, hvala'." }
          ]
        }
      ]
    },
    {
      id: "d1-sb-1",
      type: "sentence-builder",
      question: "Sastavi rečenicu",
      questionDe: "Bilde den Satz",
      explanation: "Pazi na red reči.",
      segments: ["Ich", "heiße", "Markus", "und", "du"],
      correctAnswer: "Ich heiße Markus und du"
    }
  ]
}

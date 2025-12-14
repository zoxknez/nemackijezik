import { Lesson } from '../types'

export const wordBuildingLesson: Lesson = {
  id: "word-building-1",
  title: "Građenje reči",
  titleDe: "Wortbildung",
  description: "Vežbaj pravopis sastavljanjem reči od slova.",
  level: "A1",
  unit: 1,
  order: 5,
  duration: 5,
  xpReward: 50,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Pravopis", "Vokabular"],
  exercises: [
    {
      id: "wb-intro",
      type: "learn-card",
      question: "Pravopis je važan",
      questionDe: "Rechtschreibung ist wichtig",
      explanation: "U nemačkom jeziku, imenice se uvek pišu velikim slovom. U ovoj lekciji ćeš vežbati sastavljanje reči od ponuđenih slova.",
      audioText: "Rechtschreibung ist wichtig."
    },
    {
      id: "wb-1",
      type: "word-build",
      question: "Sastavi reč: Prijatelj",
      questionDe: "Bilde das Wort: Freund",
      explanation: "Pazi na redosled slova.",
      letters: ["F", "r", "e", "u", "n", "d"],
      correctAnswer: "Freund"
    },
    {
      id: "wb-2",
      type: "word-build",
      question: "Sastavi reč: Škola",
      questionDe: "Bilde das Wort: Schule",
      explanation: "Sch se čita kao Š.",
      letters: ["S", "c", "h", "u", "l", "e"],
      correctAnswer: "Schule"
    },
    {
      id: "wb-3",
      type: "word-build",
      question: "Sastavi reč: Hvala",
      questionDe: "Bilde das Wort: Danke",
      explanation: "Jednostavna reč za kraj.",
      letters: ["D", "a", "n", "k", "e"],
      correctAnswer: "Danke"
    }
  ]
}

import { Lesson } from "@/data/types"

export const introLesson: Lesson = {
  id: "intro-1",
  title: "Uvod u Nemački: Ritam i Zvuk",
  titleDe: "Einführung: Rhythmus und Klang",
  description: "Nauči osnove izgovora kroz ritam i muziku jezika, bez prevodjenja.",
  level: "A1",
  unit: 1,
  order: 0, // First lesson
  duration: 10,
  xpReward: 100,
  isLocked: false,
  isCompleted: false,
  progress: 0,
  topics: ["Izgovor", "Ritam", "Članovi"],
  exercises: [
    {
      id: "intro-1-1",
      type: "learn-card",
      question: "Dobrodošli!",
      explanation: "U ovoj lekciji nećemo prevoditi. Slušaj ritam i zvuk reči. Poveži zvuk sa bojama.",
      correctAnswer: "continue"
    },
    {
      id: "intro-1-2",
      type: "rhythm-practice",
      question: "Hallo! Wie geht es dir?",
      rhythmPattern: ". - . - . -",
      correctAnswer: "continue",
      explanation: "Slušaj ritam rečenice. Kratki i dugi slogovi."
    },
    {
      id: "intro-1-3",
      type: "back-chaining",
      question: "Entschuldigung",
      syllables: ["Ent", "schul", "di", "gung"],
      correctAnswer: "continue",
      explanation: "Vežbamo izgovor dugačke reči od kraja ka početku."
    },
    {
      id: "intro-1-4",
      type: "speed-drill",
      question: "Ich lerne Deutsch jeden Tag.",
      speeds: [
        { speed: 0.8, label: "Polako" },
        { speed: 1.0, label: "Normalno" },
        { speed: 1.2, label: "Brzo" },
        { speed: 1.5, label: "Jako brzo" },
        { speed: 1.0, label: "Normalno" }
      ],
      correctAnswer: "continue",
      explanation: "Prati tempo i pokušaj da izgovoriš rečenicu."
    },
    {
      id: "intro-1-5",
      type: "gender-game",
      question: "Čovek",
      questionDe: "Mann",
      image: "/images/man.png", // Placeholder
      gender: "der",
      color: "blue",
      correctAnswer: "der",
      explanation: "Muški rod (Der) je plave boje."
    },
    {
      id: "intro-1-6",
      type: "gender-game",
      question: "Žena",
      questionDe: "Frau",
      image: "/images/woman.png", // Placeholder
      gender: "die",
      color: "red",
      correctAnswer: "die",
      explanation: "Ženski rod (Die) je crvene boje."
    },
    {
      id: "intro-1-7",
      type: "gender-game",
      question: "Dete",
      questionDe: "Kind",
      image: "/images/child.png", // Placeholder
      gender: "das",
      color: "green",
      correctAnswer: "das",
      explanation: "Srednji rod (Das) je zelene boje."
    }
  ]
}

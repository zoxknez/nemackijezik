import { Lesson } from '../types'

export const rhymeLessons: Lesson[] = [
  {
    id: "rhyme-1",
    title: "Brojalica: Eins, zwei, Polizei",
    titleDe: "Kinderreim: Eins, zwei, Polizei",
    description: "Nauči brojeve kroz poznatu dečiju brojalicu.",
    level: "A1",
    unit: 1,
    order: 2, // After intro and A1-1
    duration: 5,
    xpReward: 30,
    isLocked: false,
    isCompleted: false,
    progress: 0,
    topics: ["Brojevi", "Ritam", "Zabava"],
    exercises: [
      {
        id: "rhyme-1-1",
        type: "rhythm-practice",
        question: "Eins, zwei, Polizei",
        rhythmPattern: ". - . - . -",
        lyrics: [
          { text: "Eins, zwei, Polizei", translation: "Jedan, dva, policija", time: 2 },
          { text: "Drei, vier, Offizier", translation: "Tri, četiri, oficir", time: 2 },
          { text: "Fünf, sechs, alte Hex", translation: "Pet, šest, stara veštica", time: 2 },
          { text: "Sieben, acht, gute Nacht", translation: "Sedam, osam, laku noć", time: 2 },
          { text: "Neun, zehn, auf Wiederseh'n", translation: "Devet, deset, doviđenja", time: 2 }
        ],
        correctAnswer: "continue",
        explanation: "Slušaj i prati tekst. Pokušaj da uhvatiš ritam."
      },
      {
        id: "rhyme-1-2",
        type: "matching",
        question: "Poveži brojeve",
        pairs: [
          { de: "Eins", sr: "Jedan" },
          { de: "Zwei", sr: "Dva" },
          { de: "Drei", sr: "Tri" },
          { de: "Vier", sr: "Četiri" },
          { de: "Fünf", sr: "Pet" }
        ],
        correctAnswer: "matching-check",
        explanation: "Naučili smo brojeve od 1 do 5."
      }
    ]
  }
]

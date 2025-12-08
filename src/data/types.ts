// ==========================================
// LESSON & EXERCISE TYPES
// ==========================================

export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export type ExerciseType = 
  | "vocabulary" 
  | "multiple-choice" 
  | "fill-blank" 
  | "translation" 
  | "listening" 
  | "matching"
  | "learn-card"   // Instructional card
  | "flashcard"    // Interactive flashcard
  | "gender-game"  // Gender color association game
  | "word-build"   // Build word from letters

export interface Exercise {
  id: string
  type: ExerciseType
  question: string         // Used as Title for learn-card
  questionDe?: string      // Used as German text for learn-card
  options?: string[]
  correctAnswer: string | string[]
  hint?: string
  explanation: string      // Used as detailed explanation for learn-card
  audioText?: string       // For listening exercises
  pairs?: { de: string; sr: string }[]  // For matching exercises
  image?: string           // Optional image/icon
  color?: string           // For gender association (blue/red/green/yellow)
  gender?: "der" | "die" | "das"  // For gender-game
  letters?: string[]       // For word-build game
}

export interface Lesson {
  id: string
  title: string
  titleDe: string
  description: string
  level: Level
  unit: number
  order: number
  duration: number    // minutes
  xpReward: number
  isLocked: boolean
  isCompleted: boolean
  progress: number
  topics: string[]
  exercises: Exercise[]
}

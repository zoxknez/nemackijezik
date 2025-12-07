// Extended user type for our app
export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export interface ExtendedUser {
  id: string
  name: string | null
  email: string | null
  image: string | null
  level?: Level
  xp?: number
  streak?: number
  dailyGoal?: number
}

export interface UserStats {
  level: Level
  xp: number
  xpForNextLevel: number
  streak: number
  dailyGoal: number
  todayXp: number
  wordsLearned: number
  lessonsCompleted: number
  totalTime: string
}

export interface Lesson {
  id: string
  title: string
  description?: string
  level: Level
  order: number
  xpReward: number
  progress?: number
  completed?: boolean
}

export interface Vocabulary {
  id: string
  word: string
  translation: string
  example?: string
  audioUrl?: string
  level: Level
  gender?: "M" | "F" | "N"
  partOfSpeech?: string
}

export interface UserVocabulary {
  id: string
  vocabularyId: string
  vocabulary: Vocabulary
  repetitions: number
  easeFactor: number
  interval: number
  nextReviewAt: Date
  lastReviewedAt?: Date
}

export interface Exercise {
  id: string
  type: 
    | "MULTIPLE_CHOICE"
    | "FILL_BLANK"
    | "TRANSLATION_SR_DE"
    | "TRANSLATION_DE_SR"
    | "LISTENING"
    | "SPEAKING"
    | "MATCHING"
    | "WORD_ORDER"
    | "DICTATION"
    | "ARTICLE_GENDER"
    | "VERB_CONJUGATION"
    | "CASE_SELECTION"
    | "CONVERSATION"
  question: string
  correctAnswer: string
  options?: string[]
  audioUrl?: string
  hint?: string
  explanation?: string
  xpReward: number
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  xpReward: number
  category: string
  rarity: "common" | "rare" | "epic" | "legendary"
  unlockedAt?: Date
}

export interface StudySession {
  id: string
  type: "LESSON" | "REVIEW" | "PRACTICE"
  startedAt: Date
  endedAt?: Date
  xpEarned: number
  score?: number
  correctAnswers: number
  totalQuestions: number
}

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
  | "speed-drill"  // Accelerating reading practice
  | "back-chaining" // Syllable breakdown practice
  | "rhythm-practice" // Sound and rhythm focus
  | "listen-record" // Listen to audio and record yourself
  | "minimal-pairs" // Distinguish between similar sounds
  | "sentence-builder" // Drag and drop sentence construction
  | "dialogue" // Interactive conversation simulation
  | "error-correction" // Find and fix errors in sentences
  | "conjugation" // Verb conjugation practice
  | "cloze-test" // Fill in blanks from word bank
  | "story-mode" // Reading comprehension with questions
  | "image-association" // Match words with images/emojis
  | "word-chain" // Chain words by first/last letters
  | "memory-match" // Memory card matching game
  | "timed-challenge" // Speed vocabulary challenge
  | "audio-sentence" // Listen and repeat full sentence
  | "word-categories" // Sort words into categories
  | "picture-description" // Describe what you see
  | "dictation" // Listen and write what you hear
  | "case-practice" // German case (Nominativ, Akkusativ, Dativ, Genitiv) practice

export interface Exercise {
  id: string
  type: ExerciseType
  question: string         // Used as Title for learn-card
  questionDe?: string      // Used as German text for learn-card
  options?: string[]
  correctAnswer?: string | string[] // Optional for learn-card type
  hint?: string
  explanation: string      // Used as detailed explanation for learn-card
  audioText?: string       // For listening exercises
  pairs?: { de: string; sr: string }[]  // For matching exercises
  image?: string           // Optional image/icon
  color?: string           // For gender association (blue/red/green/yellow)
  gender?: "der" | "die" | "das"  // For gender-game
  letters?: string[]       // For word-build game
  syllables?: string[]     // For back-chaining
  speeds?: { speed: number; label: string }[] // For speed drills
  rhythmPattern?: string   // Visual representation of rhythm
  pairOptions?: { text: string; isCorrect: boolean; soundText: string }[] // For minimal pairs
  segments?: string[] // For sentence builder
  noTranslation?: boolean  // Flag to hide translation initially
  lyrics?: { text: string; translation: string; time: number }[] // For songs/rhymes
  dialogueLines?: { 
    speaker: string; 
    text: string; 
    translation: string; 
    audio?: string; 
    isUser?: boolean; 
    options?: { text: string; isCorrect: boolean; feedback?: string }[] 
  }[] // For dialogue exercises
  errorSentence?: string // For error-correction
  errorPosition?: number // Index of word with error
  conjugationVerb?: string // Base verb for conjugation
  conjugationPronoun?: string // Subject pronoun
  conjugationTense?: string // Tense name
  wordBank?: string[] // For cloze-test
  blankIndices?: number[] // Positions of blanks in sentence
  storyText?: string // For story-mode reading
  storyQuestions?: { question: string; options: string[]; correct: number }[] // Questions about story
  imageOptions?: { emoji: string; text: string; isCorrect: boolean }[] // For image-association
  chainWords?: string[] // For word-chain game
  memoryPairs?: { id: string; german: string; translation: string }[] // For memory-match
  timeLimit?: number // Time limit in seconds for timed challenges
  targetSentence?: string // Full sentence for audio-sentence
  categories?: { name: string; words: string[] }[] // For word-categories
  wordsToSort?: string[] // Words to sort into categories
  pictureEmoji?: string // For picture-description
  caseName?: string // For case-practice (Nominativ, Akkusativ, etc)
  caseArticles?: { article: string; isCorrect: boolean }[] // Options for case practice
  dictationSentence?: string // For dictation exercise
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

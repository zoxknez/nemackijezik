// Core types for the application

export type Gender = 'der' | 'die' | 'das'

export type ExerciseType = 
  | 'minimal_pairs' 
  | 'backwards_shadowing' 
  | 'tpr' 
  | 'alphabet'
  | 'hearing_calibration'
  | 'articulation'

export type ModuleType = 
  | 'hearing' 
  | 'articulation' 
  | 'words' 
  | 'sentences' 
  | 'alphabet'

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  progressLevel: string
  audioSettings?: AudioSettings
}

export interface AudioSettings {
  volume: number
  playbackSpeed: number
  hearingCalibration?: {
    leftEar: number
    rightEar: number
  }
}

export interface Lesson {
  id: string
  lessonNumber: number
  title: string
  level: string
  durationMinutes: number
  orderIndex: number
}

export interface LessonModule {
  id: string
  lessonId: string
  moduleType: ModuleType
  moduleOrder: number
  config: ModuleConfig
}

export interface ModuleConfig {
  [key: string]: any
}

export interface Exercise {
  id: string
  moduleId: string
  exerciseType: ExerciseType
  audioUrl: string
  correctAnswer: any
  visualConfig: VisualConfig
}

export interface VisualConfig {
  colors?: {
    primary?: string
    secondary?: string
  }
  effects?: {
    type: 'fall' | 'pulse' | 'bounce'
    duration?: number
  }
  gender?: Gender
}

export interface MinimalPairExercise extends Exercise {
  exerciseType: 'minimal_pairs'
  config: {
    pair1: { word: string; audio: string; image?: string }
    pair2: { word: string; audio: string; image?: string }
    correctAnswer: 'left' | 'right'
  }
}

export interface GenderVisualization {
  gender: Gender
  color: string
  effect: 'fall' | 'pulse' | 'bounce'
}

export interface AudioSegment {
  text: string
  startTime: number
  endTime: number
  phonetic: string
}

export interface Word {
  id: string
  germanWord: string
  phonetic: string
  gender: Gender
  audioUrl: string
  waveformData?: number[]
  backwardsSegments?: AudioSegment[]
}

export interface Sentence {
  id: string
  germanText: string
  phoneticGuide: string
  intonationPattern: number[]
  tprActions?: TPRAction[]
  audioUrl: string
}

export interface TPRAction {
  word: string
  action: 'tilt_down' | 'tilt_up' | 'brighten' | 'dim'
  description: string
}

export interface UserProgress {
  id: string
  userId: string
  exerciseId: string
  completed: boolean
  score: number
  attempts: number
  audioRecordingUrl?: string
  aiFeedback?: AIFeedback
  completedAt?: string
}

export interface AIFeedback {
  accuracy: number
  pronunciation: number
  rhythm: number
  feedback: string
  suggestions: string[]
}

export interface ExerciseConfig {
  [key: string]: any
}


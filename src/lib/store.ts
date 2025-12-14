import { create } from "zustand"
import { persist } from "zustand/middleware"
import { calculateSRS } from "./srs"

// ===== USER STORE =====
interface UserState {
  user: {
    id: string
    name: string
    email: string
    image?: string
    level: string
    xp: number
    streak: number
    dailyGoal: number
    todayXp: number
  } | null
  isLoading: boolean
  
  setUser: (user: UserState["user"]) => void
  addXp: (amount: number) => void
  incrementStreak: () => void
  resetStreak: () => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isLoading: true,
      
      setUser: (user) => set({ user, isLoading: false }),
      
      addXp: (amount) =>
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                xp: state.user.xp + amount,
                todayXp: state.user.todayXp + amount,
              }
            : null,
        })),
      
      incrementStreak: () =>
        set((state) => ({
          user: state.user
            ? { ...state.user, streak: state.user.streak + 1 }
            : null,
        })),
      
      resetStreak: () =>
        set((state) => ({
          user: state.user ? { ...state.user, streak: 0 } : null,
        })),
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      logout: () => set({ user: null, isLoading: false }),
    }),
    {
      name: "user-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
)

// ===== STUDY SESSION STORE =====
interface StudyState {
  sessionId: string | null
  sessionType: "lesson" | "review" | "practice" | null
  currentExerciseIndex: number
  totalExercises: number
  correctAnswers: number
  incorrectAnswers: number
  xpEarned: number
  startTime: Date | null
  
  startSession: (type: StudyState["sessionType"], totalExercises: number) => void
  nextExercise: () => void
  recordAnswer: (isCorrect: boolean, xp: number) => void
  endSession: () => { 
    duration: number
    score: number 
    xpEarned: number 
  }
  resetSession: () => void
}

export const useStudyStore = create<StudyState>((set, get) => ({
  sessionId: null,
  sessionType: null,
  currentExerciseIndex: 0,
  totalExercises: 0,
  correctAnswers: 0,
  incorrectAnswers: 0,
  xpEarned: 0,
  startTime: null,
  
  startSession: (type, totalExercises) =>
    set({
      sessionId: crypto.randomUUID(),
      sessionType: type,
      currentExerciseIndex: 0,
      totalExercises,
      correctAnswers: 0,
      incorrectAnswers: 0,
      xpEarned: 0,
      startTime: new Date(),
    }),
  
  nextExercise: () =>
    set((state) => ({
      currentExerciseIndex: Math.min(
        state.currentExerciseIndex + 1,
        state.totalExercises - 1
      ),
    })),
  
  recordAnswer: (isCorrect, xp) =>
    set((state) => ({
      correctAnswers: state.correctAnswers + (isCorrect ? 1 : 0),
      incorrectAnswers: state.incorrectAnswers + (isCorrect ? 0 : 1),
      xpEarned: state.xpEarned + xp,
    })),
  
  endSession: () => {
    const state = get()
    const duration = state.startTime
      ? Math.floor((new Date().getTime() - state.startTime.getTime()) / 1000)
      : 0
    const total = state.correctAnswers + state.incorrectAnswers
    const score = total > 0 ? Math.round((state.correctAnswers / total) * 100) : 0
    
    return { duration, score, xpEarned: state.xpEarned }
  },
  
  resetSession: () =>
    set({
      sessionId: null,
      sessionType: null,
      currentExerciseIndex: 0,
      totalExercises: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      xpEarned: 0,
      startTime: null,
    }),
}))

// ===== UI STORE =====
interface UIState {
  isSidebarOpen: boolean
  isSoundEnabled: boolean
  isAnimationsEnabled: boolean
  theme: "light" | "dark" | "system"
  
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  toggleSound: () => void
  toggleAnimations: () => void
  setTheme: (theme: UIState["theme"]) => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      isSidebarOpen: true,
      isSoundEnabled: true,
      isAnimationsEnabled: true,
      theme: "system",
      
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      
      setSidebarOpen: (open) => set({ isSidebarOpen: open }),
      
      toggleSound: () =>
        set((state) => ({ isSoundEnabled: !state.isSoundEnabled })),
      
      toggleAnimations: () =>
        set((state) => ({ isAnimationsEnabled: !state.isAnimationsEnabled })),
      
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "ui-storage",
    }
  )
)

// ===== VOCABULARY REVIEW STORE =====
interface VocabReviewState {
  queue: Array<{
    id: string
    word: string
    translation: string
    example: string
    audioUrl?: string
  }>
  currentIndex: number
  isFlipped: boolean
  
  setQueue: (queue: VocabReviewState["queue"]) => void
  flipCard: () => void
  nextCard: () => void
  previousCard: () => void
  reset: () => void
}

export const useVocabReviewStore = create<VocabReviewState>((set) => ({
  queue: [],
  currentIndex: 0,
  isFlipped: false,
  
  setQueue: (queue) => set({ queue, currentIndex: 0, isFlipped: false }),
  
  flipCard: () => set((state) => ({ isFlipped: !state.isFlipped })),
  
  nextCard: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, state.queue.length - 1),
      isFlipped: false,
    })),
  
  previousCard: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
      isFlipped: false,
    })),
  
  reset: () => set({ queue: [], currentIndex: 0, isFlipped: false }),
}))

// ===== VOCABULARY PROGRESS STORE (SRS) =====
interface WordProgress {
  id: string
  word: string
  translation: string
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: number // timestamp
  lastReview: number // timestamp
}

interface VocabularyState {
  words: Record<string, WordProgress>
  addWord: (id: string, word: string, translation: string) => void
  reviewWord: (id: string, quality: number) => void
  getDueWords: () => WordProgress[]
}

export const useVocabularyStore = create<VocabularyState>()(
  persist(
    (set, get) => ({
      words: {},
      
      addWord: (id, word, translation) => set((state) => {
        if (state.words[id]) return state // Already exists
        return {
          words: {
            ...state.words,
            [id]: {
              id,
              word,
              translation,
              easeFactor: 2.5,
              interval: 0,
              repetitions: 0,
              nextReview: Date.now(),
              lastReview: 0
            }
          }
        }
      }),

      reviewWord: (id, quality) => set((state) => {
        const word = state.words[id]
        if (!word) return state

        const srsResult = calculateSRS({
          quality,
          currentEaseFactor: word.easeFactor,
          currentInterval: word.interval,
          currentRepetitions: word.repetitions
        })

        const nextReviewDate = new Date()
        nextReviewDate.setDate(nextReviewDate.getDate() + srsResult.interval)

        return {
          words: {
            ...state.words,
            [id]: {
              ...word,
              easeFactor: srsResult.easeFactor,
              interval: srsResult.interval,
              repetitions: srsResult.repetitions,
              nextReview: nextReviewDate.getTime(),
              lastReview: Date.now()
            }
          }
        }
      }),

      getDueWords: () => {
        const state = get()
        const now = Date.now()
        return Object.values(state.words).filter(w => w.nextReview <= now)
      }
    }),
    {
      name: "vocabulary-storage"
    }
  )
)

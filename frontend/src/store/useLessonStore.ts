import { create } from 'zustand'
import { Lesson, LessonModule, Exercise, UserProgress } from '@/types'

interface LessonState {
  currentLesson: Lesson | null
  currentModule: LessonModule | null
  currentExercise: Exercise | null
  progress: UserProgress[]
  isLoading: boolean
  setCurrentLesson: (lesson: Lesson) => void
  setCurrentModule: (module: LessonModule) => void
  setCurrentExercise: (exercise: Exercise) => void
  updateProgress: (progress: UserProgress) => void
  setLoading: (loading: boolean) => void
}

export const useLessonStore = create<LessonState>((set) => ({
  currentLesson: null,
  currentModule: null,
  currentExercise: null,
  progress: [],
  isLoading: false,
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  setCurrentModule: (module) => set({ currentModule: module }),
  setCurrentExercise: (exercise) => set({ currentExercise: exercise }),
  updateProgress: (progress) =>
    set((state) => ({
      progress: [...state.progress.filter((p) => p.exerciseId !== progress.exerciseId), progress],
    })),
  setLoading: (loading) => set({ isLoading: loading }),
}))


// Glavni export za sve lekcije
import { a1Lessons } from './a1'
import { a2Lessons } from './a2'
import { b1Lessons } from './b1'
import { b2Lessons } from './b2'
import { c1Lessons } from './c1'
import { c2Lessons } from './c2'

export type { Level, ExerciseType, Exercise, Lesson } from '../types'

// Kombinovani export svih lekcija
export const lessons = [
  ...a1Lessons,
  ...a2Lessons,
  ...b1Lessons,
  ...b2Lessons,
  ...c1Lessons,
  ...c2Lessons,
]

// Pojedinačni exporti po nivou
export { a1Lessons, a2Lessons, b1Lessons, b2Lessons, c1Lessons, c2Lessons }

// Helper funkcije
export const getLessonsByLevel = (level: string) => 
  lessons.filter(l => l.level === level)

export const getLessonById = (id: string) => 
  lessons.find(l => l.id === id)

export const getTotalLessons = () => lessons.length

export const getLevelStats = () => ({
  A1: a1Lessons.length,
  A2: a2Lessons.length,
  B1: b1Lessons.length,
  B2: b2Lessons.length,
  C1: c1Lessons.length,
  C2: c2Lessons.length,
})

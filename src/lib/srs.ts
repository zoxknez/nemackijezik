/**
 * SM-2 Spaced Repetition Algorithm
 * Used for vocabulary learning with optimal review intervals
 */

export interface SRSResult {
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: Date
}

export interface SRSParams {
  quality: number // 0-5 rating (0=complete blackout, 5=perfect recall)
  currentEaseFactor: number
  currentInterval: number
  currentRepetitions: number
}

/**
 * Calculate next review using SM-2 algorithm
 * 
 * Quality ratings:
 * 5 - Perfect response
 * 4 - Correct response after hesitation
 * 3 - Correct response with difficulty
 * 2 - Incorrect response but close
 * 1 - Incorrect response, remembered after seeing answer
 * 0 - Complete blackout
 */
export function calculateSRS({
  quality,
  currentEaseFactor,
  currentInterval,
  currentRepetitions,
}: SRSParams): SRSResult {
  // Ensure quality is within bounds
  quality = Math.max(0, Math.min(5, quality))

  let easeFactor = currentEaseFactor
  let interval = currentInterval
  let repetitions = currentRepetitions

  if (quality >= 3) {
    // Correct response - advance the card
    if (repetitions === 0) {
      interval = 1 // First review: 1 day
    } else if (repetitions === 1) {
      interval = 6 // Second review: 6 days
    } else {
      interval = Math.round(currentInterval * easeFactor)
    }
    repetitions += 1

    // Update ease factor
    easeFactor = Math.max(
      1.3, // Minimum ease factor
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    )
  } else {
    // Incorrect response - reset progress
    repetitions = 0
    interval = 1

    // Slightly decrease ease factor for difficult cards
    easeFactor = Math.max(1.3, easeFactor - 0.2)
  }

  // Calculate next review date
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + interval)

  return {
    easeFactor: Math.round(easeFactor * 100) / 100,
    interval,
    repetitions,
    nextReview,
  }
}

/**
 * Get quality rating from user performance
 */
export function getQualityFromPerformance(
  isCorrect: boolean,
  timeSpent: number, // in seconds
  expectedTime: number = 10,
  hintUsed: boolean = false,
  attempts: number = 1
): number {
  if (!isCorrect) {
    // Incorrect answers
    if (attempts === 1) return 1 // Didn't remember at all
    return 0 // Complete blackout
  }

  // Correct answers
  if (hintUsed) return 3 // Used hint

  // Factor in response time
  const timeRatio = timeSpent / expectedTime

  if (timeRatio <= 0.5 && attempts === 1) return 5 // Quick and confident
  if (timeRatio <= 1 && attempts === 1) return 4 // Normal response
  if (timeRatio <= 2) return 4 // Slightly slow but correct
  return 3 // Slow but correct
}

/**
 * Get cards due for review
 */
export function isDueForReview(nextReview: Date): boolean {
  return new Date() >= nextReview
}

/**
 * Calculate review statistics
 */
export function getReviewStats(
  totalReviews: number,
  correctCount: number,
  easeFactor: number
): {
  accuracy: number
  mastery: "learning" | "reviewing" | "mastered"
  difficulty: "easy" | "medium" | "hard"
} {
  const accuracy = totalReviews > 0 ? Math.round((correctCount / totalReviews) * 100) : 0

  let mastery: "learning" | "reviewing" | "mastered"
  if (easeFactor >= 2.5 && accuracy >= 90) {
    mastery = "mastered"
  } else if (totalReviews >= 3) {
    mastery = "reviewing"
  } else {
    mastery = "learning"
  }

  let difficulty: "easy" | "medium" | "hard"
  if (easeFactor >= 2.5) {
    difficulty = "easy"
  } else if (easeFactor >= 2.0) {
    difficulty = "medium"
  } else {
    difficulty = "hard"
  }

  return { accuracy, mastery, difficulty }
}

/**
 * Get optimal daily review count
 */
export function getOptimalReviewCount(
  newCards: number,
  dueCards: number,
  availableTime: number // in minutes
): { newToStudy: number; dueToReview: number } {
  const avgTimePerCard = 0.5 // 30 seconds per card
  const totalPossible = Math.floor(availableTime / avgTimePerCard)

  // Prioritize due cards, then new cards
  const dueToReview = Math.min(dueCards, totalPossible)
  const remainingSlots = totalPossible - dueToReview
  const newToStudy = Math.min(newCards, remainingSlots, 20) // Max 20 new cards

  return { newToStudy, dueToReview }
}

/**
 * Learning stages based on interval
 */
export function getLearningStage(interval: number): string {
  if (interval <= 1) return "novo"
  if (interval <= 7) return "učenje"
  if (interval <= 21) return "ponavljanje"
  if (interval <= 60) return "konsolidacija"
  return "dugoročno"
}

"use client"

import { useState, useCallback } from "react"
import { toast } from "@/components/ui/toast"

interface VocabularyWord {
  id: string
  word: string
  translation: string
  gender?: string
  plural?: string
  example: string
  exampleTrans: string
  phonetic?: string
  audioUrl?: string
  level: string
  partOfSpeech: string
  easeFactor: number
  interval: number
  repetitions: number
  nextReview: Date
  isLearning: boolean
  isMastered: boolean
  correctCount: number
  totalReviews: number
}

interface VocabularyStats {
  dueCount: number
  masteredCount: number
  totalCount: number
  learningCount: number
}

interface UseVocabularyOptions {
  mode?: "review" | "learning" | "all"
  level?: string
  limit?: number
}

export function useVocabulary(options: UseVocabularyOptions = {}) {
  const [vocabulary, setVocabulary] = useState<VocabularyWord[]>([])
  const [stats, setStats] = useState<VocabularyStats | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchVocabulary = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams()
      if (options.mode) params.set("mode", options.mode)
      if (options.level) params.set("level", options.level)
      if (options.limit) params.set("limit", options.limit.toString())

      const response = await fetch(`/api/vocabulary?${params}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch vocabulary")
      }

      const data = await response.json()
      setVocabulary(data.vocabulary)
      setStats(data.stats)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Greška pri učitavanju"
      setError(message)
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }, [options.mode, options.level, options.limit])

  const reviewWord = useCallback(async (
    userVocabularyId: string,
    isCorrect: boolean,
    timeSpent: number,
    hintUsed = false
  ) => {
    try {
      const response = await fetch("/api/vocabulary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userVocabularyId,
          isCorrect,
          timeSpent,
          hintUsed,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update vocabulary")
      }

      const data = await response.json()

      // Update local state
      setVocabulary((prev) =>
        prev.map((word) =>
          word.id === userVocabularyId
            ? {
                ...word,
                nextReview: data.nextReview,
                interval: data.interval,
                isMastered: data.isMastered,
              }
            : word
        )
      )

      // Update stats
      if (stats) {
        setStats({
          ...stats,
          dueCount: stats.dueCount - 1,
          masteredCount: data.isMastered ? stats.masteredCount + 1 : stats.masteredCount,
        })
      }

      if (isCorrect) {
        toast.success(`+${data.xpEarned} XP! ${data.isMastered ? "🎉 Reč savladana!" : ""}`)
      }

      return data
    } catch (err) {
      const message = err instanceof Error ? err.message : "Greška pri ažuriranju"
      toast.error(message)
      throw err
    }
  }, [stats])

  const addWord = useCallback(async (vocabularyId: string) => {
    try {
      const response = await fetch("/api/vocabulary", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vocabularyId }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to add vocabulary")
      }

      const data = await response.json()
      toast.success(`"${data.vocabulary.word}" dodata u tvoj rečnik!`)

      // Refresh list
      await fetchVocabulary()

      return data
    } catch (err) {
      const message = err instanceof Error ? err.message : "Greška pri dodavanju"
      toast.error(message)
      throw err
    }
  }, [fetchVocabulary])

  return {
    vocabulary,
    stats,
    isLoading,
    error,
    fetchVocabulary,
    reviewWord,
    addWord,
  }
}

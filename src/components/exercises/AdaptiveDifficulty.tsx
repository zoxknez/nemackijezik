"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import {
  TrendingUp,
  TrendingDown,
  Target,
  Zap,
  Brain,
  Award,
  AlertCircle
} from "lucide-react"

interface UserPerformance {
  correctAnswers: number
  totalAnswers: number
  averageTime: number
  recentStreak: number
}

interface AdaptiveDifficultyProps {
  currentDifficulty: "easy" | "medium" | "hard"
  performance: UserPerformance
  onDifficultyChange: (newDifficulty: "easy" | "medium" | "hard") => void
}

export function AdaptiveDifficulty({
  currentDifficulty,
  performance,
  onDifficultyChange
}: AdaptiveDifficultyProps) {
  const [suggestedDifficulty, setSuggestedDifficulty] = useState<"easy" | "medium" | "hard">(currentDifficulty)
  const [showSuggestion, setShowSuggestion] = useState(false)

  useEffect(() => {
    analyzeDifficulty()
  }, [performance])

  const analyzeDifficulty = () => {
    const accuracy = performance.totalAnswers > 0 
      ? (performance.correctAnswers / performance.totalAnswers) * 100 
      : 0

    let suggested: "easy" | "medium" | "hard" = currentDifficulty

    // Algorithm for adaptive difficulty
    if (accuracy >= 85 && performance.recentStreak >= 5 && performance.averageTime < 10) {
      // User is doing great - increase difficulty
      if (currentDifficulty === "easy") suggested = "medium"
      else if (currentDifficulty === "medium") suggested = "hard"
    } else if (accuracy < 50 && performance.recentStreak < 3) {
      // User is struggling - decrease difficulty
      if (currentDifficulty === "hard") suggested = "medium"
      else if (currentDifficulty === "medium") suggested = "easy"
    } else if (accuracy >= 70 && accuracy < 85) {
      // User is in sweet spot - maintain current difficulty
      suggested = currentDifficulty
    }

    if (suggested !== currentDifficulty) {
      setSuggestedDifficulty(suggested)
      setShowSuggestion(true)
    } else {
      setShowSuggestion(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "text-green-400"
      case "medium": return "text-yellow-400"
      case "hard": return "text-red-400"
      default: return "text-gray-400"
    }
  }

  const getDifficultyBg = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-green-500/20 border-green-500/30"
      case "medium": return "bg-yellow-500/20 border-yellow-500/30"
      case "hard": return "bg-red-500/20 border-red-500/30"
      default: return "bg-gray-500/20 border-gray-500/30"
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "Lako"
      case "medium": return "Srednje"
      case "hard": return "Teško"
      default: return ""
    }
  }

  const accuracy = performance.totalAnswers > 0 
    ? Math.round((performance.correctAnswers / performance.totalAnswers) * 100)
    : 0

  const getPerformanceMessage = () => {
    if (accuracy >= 85) return "Odlično! Savladao/la si ovu težinu."
    if (accuracy >= 70) return "Dobro napredovanje! Nastavi tako."
    if (accuracy >= 50) return "U redu, još malo vežbe!"
    return "Potrebno je više vežbe. Probaj lakšu težinu?"
  }

  return (
    <div className="space-y-4">
      {/* Current Difficulty */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg", getDifficultyBg(currentDifficulty))}>
              <Target className={cn("h-5 w-5", getDifficultyColor(currentDifficulty))} />
            </div>
            <div>
              <h3 className="font-semibold text-white">Trenutna težina</h3>
              <p className="text-sm text-muted-foreground">AI prilagođava na osnovu performansi</p>
            </div>
          </div>
          <div className={cn(
            "px-4 py-2 rounded-lg font-bold text-lg",
            getDifficultyBg(currentDifficulty),
            getDifficultyColor(currentDifficulty)
          )}>
            {getDifficultyLabel(currentDifficulty)}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {accuracy}%
            </div>
            <div className="text-xs text-muted-foreground">Tačnost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {performance.recentStreak}
            </div>
            <div className="text-xs text-muted-foreground">Niz tačnih</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {performance.averageTime}s
            </div>
            <div className="text-xs text-muted-foreground">Prosečno vreme</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Napredak</span>
            <span className="text-white font-medium">{performance.correctAnswers}/{performance.totalAnswers}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={cn(
                "h-full",
                accuracy >= 70 ? "bg-green-500" : accuracy >= 50 ? "bg-yellow-500" : "bg-red-500"
              )}
              initial={{ width: 0 }}
              animate={{ width: `${accuracy}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Performance Message */}
        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-sm text-muted-foreground">
            {getPerformanceMessage()}
          </p>
        </div>
      </GlassCard>

      {/* Difficulty Suggestion */}
      {showSuggestion && suggestedDifficulty !== currentDifficulty && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="p-4 border-german-gold/30 bg-german-gold/5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-german-gold/20 shrink-0">
                <Brain className="h-5 w-5 text-german-gold" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1 flex items-center gap-2">
                  AI Preporuka
                  {suggestedDifficulty > currentDifficulty ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-blue-400" />
                  )}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {suggestedDifficulty > currentDifficulty
                    ? "Odlično napredovanje! Preporučujemo težu težinu za još bolji razvoj."
                    : "Prilagođavamo težinu da bi učenje bilo efikasnije i manje frustrirajuće."}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      onDifficultyChange(suggestedDifficulty)
                      setShowSuggestion(false)
                    }}
                    className="bg-german-gold text-black hover:bg-german-gold/90"
                  >
                    Prihvati ({getDifficultyLabel(suggestedDifficulty)})
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowSuggestion(false)}
                  >
                    Zadrži trenutnu
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Manual Difficulty Selection */}
      <GlassCard className="p-4">
        <h4 className="text-sm font-medium text-white mb-3">Ručno podešavanje</h4>
        <div className="grid grid-cols-3 gap-2">
          {(["easy", "medium", "hard"] as const).map((diff) => (
            <Button
              key={diff}
              variant={currentDifficulty === diff ? "default" : "outline"}
              size="sm"
              onClick={() => onDifficultyChange(diff)}
              className={cn(
                currentDifficulty === diff && getDifficultyBg(diff),
                currentDifficulty === diff && getDifficultyColor(diff)
              )}
            >
              {getDifficultyLabel(diff)}
            </Button>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}

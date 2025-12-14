"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/toast"
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from "lucide-react"

interface ExerciseProps {
  exercise: {
    id: string
    type: string
    question: string
    options?: string[]
    correctAnswer: string | string[]
    hint?: string
    explanation: string
    pairs?: { de: string; sr: string }[]
  }
  onComplete: (isCorrect: boolean, xp: number) => void
  onSkip?: () => void
}

export function ExerciseCard({ exercise, onComplete, onSkip }: ExerciseProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [textAnswer, setTextAnswer] = useState("")
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({})
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const checkAnswer = useCallback(() => {
    let correct = false
    const correctAnswers = Array.isArray(exercise.correctAnswer)
      ? exercise.correctAnswer
      : [exercise.correctAnswer]

    switch (exercise.type) {
      case "multiple-choice":
        correct = correctAnswers.includes(selectedAnswer || "")
        break
      case "fill-blank":
      case "translation":
        correct = correctAnswers.some(
          (ans) => ans.toLowerCase().trim() === textAnswer.toLowerCase().trim()
        )
        break
      case "matching":
        if (exercise.pairs) {
          correct = exercise.pairs.every(
            (pair) => matchedPairs[pair.de] === pair.sr
          )
        }
        break
      default:
        correct = correctAnswers.includes(textAnswer || selectedAnswer || "")
    }

    setIsCorrect(correct)
    setIsChecked(true)

    if (correct) {
      toast.success("Tačno! 🎉")
    } else {
      toast.error("Netačno, pokušaj ponovo!")
    }
  }, [exercise, selectedAnswer, textAnswer, matchedPairs])

  const handleContinue = () => {
    const xp = isCorrect ? (showHint ? 5 : 10) : 0
    onComplete(isCorrect, xp)
  }

  const handleMatchClick = (item: string, side: "left" | "right") => {
    if (isChecked) return

    if (side === "left") {
      setSelectedLeft(item)
    } else if (selectedLeft) {
      setMatchedPairs((prev) => ({ ...prev, [selectedLeft]: item }))
      setSelectedLeft(null)
    }
  }

  const renderExercise = () => {
    switch (exercise.type) {
      case "multiple-choice":
        return (
          <div className="space-y-3">
            {exercise.options?.map((option, index) => (
              <motion.button
                key={option}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isChecked && setSelectedAnswer(option)}
                disabled={isChecked}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-all",
                  selectedAnswer === option
                    ? isChecked
                      ? isCorrect
                        ? "border-green-500 bg-green-500/20"
                        : "border-red-500 bg-red-500/20"
                      : "border-german-gold bg-german-gold/20"
                    : "border-white/10 bg-white/5 hover:bg-white/10",
                  isChecked &&
                    Array.isArray(exercise.correctAnswer)
                    ? exercise.correctAnswer.includes(option)
                      ? "border-green-500 bg-green-500/10"
                      : ""
                    : exercise.correctAnswer === option
                    ? "border-green-500 bg-green-500/10"
                    : ""
                )}
              >
                <span className="flex items-center justify-between">
                  <span className="text-white">{option}</span>
                  {isChecked && selectedAnswer === option && (
                    isCorrect ? (
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-400" />
                    )
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        )

      case "fill-blank":
      case "translation":
        return (
          <div className="space-y-4">
            <Input
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="Unesite odgovor..."
              disabled={isChecked}
              className={cn(
                "text-lg py-6",
                isChecked && (isCorrect ? "border-green-500" : "border-red-500")
              )}
              onKeyDown={(e) => e.key === "Enter" && !isChecked && checkAnswer()}
              icon={undefined}
            />
            {isChecked && !isCorrect && (
              <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                <p className="text-sm text-green-400">
                  <span className="font-semibold">Tačan odgovor:</span>{" "}
                  {Array.isArray(exercise.correctAnswer)
                    ? exercise.correctAnswer[0]
                    : exercise.correctAnswer}
                </p>
              </div>
            )}
          </div>
        )

      case "matching":
        return (
          <div className="grid grid-cols-2 gap-6">
            {/* Left column - German */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground mb-3">Nemački</p>
              {exercise.pairs?.map((pair) => (
                <motion.button
                  key={pair.de}
                  onClick={() => handleMatchClick(pair.de, "left")}
                  disabled={isChecked || !!matchedPairs[pair.de]}
                  className={cn(
                    "w-full rounded-lg border p-3 text-left transition-all",
                    selectedLeft === pair.de
                      ? "border-german-gold bg-german-gold/20"
                      : matchedPairs[pair.de]
                      ? isChecked
                        ? matchedPairs[pair.de] === pair.sr
                          ? "border-green-500 bg-green-500/10"
                          : "border-red-500 bg-red-500/10"
                        : "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  )}
                >
                  <span className="text-sm font-medium text-white">{pair.de}</span>
                </motion.button>
              ))}
            </div>

            {/* Right column - Serbian */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground mb-3">Srpski</p>
              {exercise.pairs?.map((pair) => (
                <motion.button
                  key={pair.sr}
                  onClick={() => handleMatchClick(pair.sr, "right")}
                  disabled={isChecked || Object.values(matchedPairs).includes(pair.sr)}
                  className={cn(
                    "w-full rounded-lg border p-3 text-left transition-all",
                    Object.values(matchedPairs).includes(pair.sr)
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  )}
                >
                  <span className="text-sm font-medium text-white">{pair.sr}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center text-muted-foreground py-8">
            Tip vežbe nije podržan
          </div>
        )
    }
  }

  return (
    <GlassCard className="w-full max-w-2xl mx-auto p-6 lg:p-8">
      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
          {exercise.question}
        </h3>
        {exercise.hint && !showHint && !isChecked && (
          <button
            onClick={() => setShowHint(true)}
            className="flex items-center gap-2 text-sm text-german-gold hover:underline"
          >
            <Lightbulb className="h-4 w-4" />
            Prikaži nagoveštaj
          </button>
        )}
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-lg bg-german-gold/10 p-3 border border-german-gold/30"
          >
            <p className="text-sm text-german-gold">
              <span className="font-semibold">💡 Nagoveštaj:</span> {exercise.hint}
            </p>
          </motion.div>
        )}
      </div>

      {/* Exercise Content */}
      <div className="mb-6">{renderExercise()}</div>

      {/* Explanation (after checking) */}
      <AnimatePresence>
        {isChecked && exercise.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 rounded-xl bg-white/5 p-4 border border-white/10"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-german-gold shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-white mb-1">Objašnjenje</p>
                <p className="text-sm text-muted-foreground">{exercise.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        {onSkip && !isChecked && (
          <Button
            variant="ghost"
            onClick={onSkip}
            className="text-muted-foreground"
          >
            Preskoči
          </Button>
        )}
        
        {!isChecked ? (
          <Button
            onClick={checkAnswer}
            disabled={
              (exercise.type === "multiple-choice" && !selectedAnswer) ||
              ((exercise.type === "fill-blank" || exercise.type === "translation") && !textAnswer) ||
              (exercise.type === "matching" && Object.keys(matchedPairs).length !== exercise.pairs?.length)
            }
            className="ml-auto"
          >
            Proveri odgovor
          </Button>
        ) : (
          <Button onClick={handleContinue} className="ml-auto">
            {isCorrect ? "Nastavi" : "Sledeće pitanje"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </GlassCard>
  )
}

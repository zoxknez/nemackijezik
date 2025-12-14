"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/card"
import { LevelBadge } from "@/components/ui/badge"
import { AudioPlayer } from "@/components/audio/AudioComponents"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  RotateCcw,
  Check,
  X,
  ArrowRight,
  Trophy,
  Flame,
  Clock,
  Brain,
} from "lucide-react"

interface VocabularyWord {
  id: string
  word: string
  translation: string
  gender?: string
  plural?: string
  example: string
  exampleTrans: string
  phonetic?: string
  level: string
  partOfSpeech: string
}

interface FlashcardReviewProps {
  words: VocabularyWord[]
  onComplete: (results: ReviewResult[]) => void
  onReview: (wordId: string, isCorrect: boolean, timeSpent: number) => Promise<void>
}

interface ReviewResult {
  wordId: string
  isCorrect: boolean
  timeSpent: number
}

export function FlashcardReview({ words, onComplete, onReview }: FlashcardReviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [results, setResults] = useState<ReviewResult[]>([])
  const [startTime, setStartTime] = useState(Date.now())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0 })

  const currentWord = words[currentIndex]
  const progress = ((currentIndex) / words.length) * 100
  const isLastWord = currentIndex === words.length - 1

  // Reset start time when moving to next card
  useEffect(() => {
    setStartTime(Date.now())
    setIsFlipped(false)
  }, [currentIndex])

  const handleResponse = useCallback(async (isCorrect: boolean) => {
    if (isSubmitting || !currentWord) return

    setIsSubmitting(true)
    const timeSpent = Math.round((Date.now() - startTime) / 1000)

    try {
      await onReview(currentWord.id, isCorrect, timeSpent)

      const result: ReviewResult = {
        wordId: currentWord.id,
        isCorrect,
        timeSpent,
      }

      setResults((prev) => [...prev, result])
      setSessionStats((prev) => ({
        correct: prev.correct + (isCorrect ? 1 : 0),
        incorrect: prev.incorrect + (isCorrect ? 0 : 1),
      }))

      if (isLastWord) {
        onComplete([...results, result])
      } else {
        setCurrentIndex((prev) => prev + 1)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [currentWord, isLastWord, isSubmitting, onComplete, onReview, results, startTime])

  const flipCard = () => {
    if (!isFlipped) {
      setIsFlipped(true)
    }
  }

  if (!currentWord) {
    return (
      <div className="text-center py-12">
        <Trophy className="h-16 w-16 text-german-gold mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Nema reči za ponavljanje!</h2>
        <p className="text-muted-foreground">Sve reči su ponovljene. Vrati se kasnije.</p>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      {/* Progress Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 text-green-400" />
            <span className="text-green-400">{sessionStats.correct}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <X className="h-4 w-4 text-red-400" />
            <span className="text-red-400">{sessionStats.incorrect}</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} / {words.length}
        </div>
      </div>

      {/* Progress Bar */}
      <Progress value={progress} className="h-2" />

      {/* Flashcard */}
      <div className="perspective-1000 h-80">
        <motion.div
          className="relative h-full w-full cursor-pointer preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          onClick={flipCard}
        >
          {/* Front Side - German */}
          <div className="absolute inset-0 backface-hidden">
            <GlassCard className="h-full w-full flex flex-col items-center justify-center p-8 text-center">
              <LevelBadge level={currentWord.level as "A1" | "A2" | "B1" | "B2" | "C1" | "C2"} className="mb-4" />
              
              <div className="mb-2 text-sm font-medium text-muted-foreground">
                {currentWord.partOfSpeech}
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-2">
                {currentWord.gender && (
                  <span className={cn(
                    "text-2xl mr-3 font-normal",
                    currentWord.gender === "MASCULINE" && "text-blue-400",
                    currentWord.gender === "FEMININE" && "text-pink-400",
                    currentWord.gender === "NEUTER" && "text-green-400",
                  )}>
                    {currentWord.gender === "MASCULINE" ? "der" :
                     currentWord.gender === "FEMININE" ? "die" : "das"}
                  </span>
                )}
                {currentWord.word}
              </h2>

              {currentWord.plural && (
                <p className="text-sm text-muted-foreground mb-4">
                  Plural: {currentWord.plural}
                </p>
              )}

              {currentWord.phonetic && (
                <p className="text-sm text-german-gold/80 mb-4">
                  [{currentWord.phonetic}]
                </p>
              )}

              <AudioPlayer text={currentWord.word} showText={false} />

              <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                <RotateCcw className="h-3 w-3" />
                Klikni da okreneš karticu
              </div>
            </GlassCard>
          </div>

          {/* Back Side - Serbian */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <GlassCard className="h-full w-full flex flex-col items-center justify-center p-8 text-center bg-linear-to-br from-german-gold/10 to-transparent">
              <h2 className="text-3xl font-bold text-german-gold mb-6">
                {currentWord.translation}
              </h2>

              <div className="space-y-3 text-sm max-w-sm">
                <p className="text-white italic">&ldquo;{currentWord.example}&rdquo;</p>
                <p className="text-muted-foreground">{currentWord.exampleTrans}</p>
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>

      {/* Response Buttons - Only show when flipped */}
      <AnimatePresence>
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex gap-4"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleResponse(false)}
              disabled={isSubmitting}
              className="flex-1 h-14 border-red-500/30 hover:bg-red-500/20 hover:border-red-500/50"
            >
              <X className="h-5 w-5 mr-2 text-red-400" />
              Ne znam
            </Button>
            <Button
              size="lg"
              onClick={() => handleResponse(true)}
              disabled={isSubmitting}
              className="flex-1 h-14 bg-green-600 hover:bg-green-700"
            >
              <Check className="h-5 w-5 mr-2" />
              Znam
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint - Show when not flipped */}
      {!isFlipped && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Pokušaj da se setiš prevoda, zatim okreni karticu
          </p>
        </div>
      )}
    </div>
  )
}

interface ReviewSummaryProps {
  results: ReviewResult[]
  totalXp: number
  onContinue: () => void
  onRetryIncorrect: () => void
}

export function ReviewSummary({ results, totalXp, onContinue, onRetryIncorrect }: ReviewSummaryProps) {
  const correct = results.filter((r) => r.isCorrect).length
  const incorrect = results.filter((r) => !r.isCorrect).length
  const accuracy = results.length > 0 ? Math.round((correct / results.length) * 100) : 0
  const avgTime = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + r.timeSpent, 0) / results.length) 
    : 0

  return (
    <div className="max-w-lg mx-auto text-center space-y-8">
      {/* Trophy */}
      <div className="relative inline-block">
        <div className="h-24 w-24 rounded-full bg-german-gold/20 flex items-center justify-center mx-auto">
          <Trophy className="h-12 w-12 text-german-gold" />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
          <Check className="h-5 w-5 text-white" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Sesija završena!</h2>
        <p className="text-muted-foreground">
          Ponovio si {results.length} {results.length === 1 ? "reč" : results.length < 5 ? "reči" : "reči"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Check className="h-4 w-4 text-green-400" />
            <span className="text-2xl font-bold text-white">{correct}</span>
          </div>
          <p className="text-xs text-muted-foreground">Tačno</p>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <X className="h-4 w-4 text-red-400" />
            <span className="text-2xl font-bold text-white">{incorrect}</span>
          </div>
          <p className="text-xs text-muted-foreground">Netačno</p>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-2xl font-bold text-white">{accuracy}%</span>
          </div>
          <p className="text-xs text-muted-foreground">Tačnost</p>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-2xl font-bold text-white">{avgTime}s</span>
          </div>
          <p className="text-xs text-muted-foreground">Prosek</p>
        </GlassCard>
      </div>

      {/* XP Earned */}
      <GlassCard className="p-6 bg-german-gold/10 border-german-gold/30">
        <div className="flex items-center justify-center gap-3">
          <Flame className="h-6 w-6 text-german-gold" />
          <span className="text-3xl font-bold text-german-gold">+{totalXp}</span>
          <span className="text-german-gold/80">XP</span>
        </div>
      </GlassCard>

      {/* Actions */}
      <div className="flex gap-4">
        {incorrect > 0 && (
          <Button
            variant="outline"
            onClick={onRetryIncorrect}
            className="flex-1"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Ponovi netačne ({incorrect})
          </Button>
        )}
        <Button onClick={onContinue} className="flex-1">
          Nastavi
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

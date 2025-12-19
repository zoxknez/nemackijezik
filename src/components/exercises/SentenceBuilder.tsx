"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Lightbulb,
  Volume2,
  Trophy,
  ArrowRight
} from "lucide-react"

interface Word {
  id: string
  text: string
  isCorrect?: boolean
}

interface SentenceBuilderProps {
  correctSentence: string[]
  translation: string
  hint?: string
  onComplete?: (isCorrect: boolean) => void
}

export function SentenceBuilder({
  correctSentence,
  translation,
  hint,
  onComplete
}: SentenceBuilderProps) {
  const [availableWords, setAvailableWords] = useState<Word[]>(
    shuffleArray(correctSentence.map((word, idx) => ({
      id: `word-${idx}`,
      text: word
    })))
  )
  const [selectedWords, setSelectedWords] = useState<Word[]>([])
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)

  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const handleWordClick = (word: Word, fromAvailable: boolean) => {
    if (isChecked) return

    if (fromAvailable) {
      setAvailableWords(prev => prev.filter(w => w.id !== word.id))
      setSelectedWords(prev => [...prev, word])
    } else {
      setSelectedWords(prev => prev.filter(w => w.id !== word.id))
      setAvailableWords(prev => [...prev, word])
    }
  }

  const checkAnswer = () => {
    const userSentence = selectedWords.map(w => w.text).join(" ")
    const correct = correctSentence.join(" ")
    const result = userSentence === correct

    setIsCorrect(result)
    setIsChecked(true)
    onComplete?.(result)

    // Mark wrong words
    if (!result) {
      setSelectedWords(prev => prev.map((word, idx) => ({
        ...word,
        isCorrect: word.text === correctSentence[idx]
      })))
    }
  }

  const reset = () => {
    setAvailableWords(
      shuffleArray(correctSentence.map((word, idx) => ({
        id: `word-${idx}`,
        text: word
      })))
    )
    setSelectedWords([])
    setIsChecked(false)
    setIsCorrect(false)
    setShowHint(false)
  }

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(correctSentence.join(" "))
    utterance.lang = 'de-DE'
    utterance.rate = 0.8
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="space-y-6">
      {/* Translation */}
      <GlassCard className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-white">Prevod:</h3>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowHint(!showHint)}
            className="text-yellow-400"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            Pomoć
          </Button>
        </div>
        <p className="text-xl text-white">{translation}</p>
        <AnimatePresence>
          {showHint && hint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-white/10"
            >
              <p className="text-sm text-yellow-400 flex items-start gap-2">
                <Lightbulb className="h-4 w-4 mt-0.5 shrink-0" />
                {hint}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>

      {/* Selected words area */}
      <GlassCard className="p-6">
        <h3 className="font-semibold text-white mb-3">Tvoja rečenica:</h3>
        <div className="min-h-[80px] p-4 rounded-lg bg-white/5 border border-white/10 flex flex-wrap gap-2 items-start">
          {selectedWords.length === 0 ? (
            <p className="text-muted-foreground text-sm w-full text-center py-4">
              Klikni na reči ispod da sastaviš rečenicu
            </p>
          ) : (
            selectedWords.map((word, idx) => (
              <motion.button
                key={word.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                onClick={() => handleWordClick(word, false)}
                disabled={isChecked}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isChecked
                    ? word.isCorrect === false
                      ? 'bg-red-500/20 border border-red-500/50 text-red-400 cursor-not-allowed'
                      : 'bg-green-500/20 border border-green-500/50 text-green-400 cursor-not-allowed'
                    : 'bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 cursor-pointer'
                }`}
              >
                {word.text}
                {isChecked && word.isCorrect === false && (
                  <XCircle className="inline h-4 w-4 ml-2" />
                )}
              </motion.button>
            ))
          )}
        </div>
      </GlassCard>

      {/* Available words */}
      <GlassCard className="p-6">
        <h3 className="font-semibold text-white mb-3">Dostupne reči:</h3>
        <div className="flex flex-wrap gap-2">
          {availableWords.map((word) => (
            <motion.button
              key={word.id}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={() => handleWordClick(word, true)}
              disabled={isChecked}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {word.text}
            </motion.button>
          ))}
        </div>
      </GlassCard>

      {/* Action buttons */}
      <div className="flex gap-3">
        {!isChecked ? (
          <Button
            onClick={checkAnswer}
            disabled={selectedWords.length === 0}
            className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
            size="lg"
          >
            Proveri
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        ) : (
          <>
            <Button
              onClick={playAudio}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <Volume2 className="h-5 w-5 mr-2" />
              Poslušaj
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Ponovo
            </Button>
          </>
        )}
      </div>

      {/* Result */}
      <AnimatePresence>
        {isChecked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <GlassCard className={`p-6 ${
              isCorrect
                ? 'border-green-500/30 bg-green-500/10'
                : 'border-red-500/30 bg-red-500/10'
            }`}>
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg shrink-0 ${
                  isCorrect ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {isCorrect ? (
                    <Trophy className="h-6 w-6 text-green-400" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className={`font-bold text-lg mb-1 ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {isCorrect ? 'Odlično! Tačno!' : 'Netačno'}
                  </h4>
                  {isCorrect ? (
                    <p className="text-sm text-muted-foreground">
                      Perfektno si sastavio/la rečenicu! Nastavi tako!
                    </p>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground mb-2">
                        Tačna rečenica je:
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {correctSentence.join(" ")}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

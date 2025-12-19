"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  Volume2,
  Check,
  X,
  RotateCcw,
  Trophy,
  Target,
  Brain,
  Sparkles,
  ArrowRight,
  Clock
} from "lucide-react"
import type { VocabularyWord } from "@/data/vocabulary"

interface VocabularyExercisesProps {
  words: VocabularyWord[]
  onClose: () => void
}

type ExerciseType = "translation" | "article" | "plural" | "sentence" | "listening"

interface Exercise {
  type: ExerciseType
  word: VocabularyWord
  question: string
  correctAnswer: string
  options?: string[]
  userAnswer?: string
  isCorrect?: boolean
}

export function VocabularyExercises({ words, onClose }: VocabularyExercisesProps) {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes
  const [isStarted, setIsStarted] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Generate exercises
  useEffect(() => {
    if (words.length === 0) return

    const generated: Exercise[] = []
    const selectedWords = words.slice(0, 10) // Take 10 words

    selectedWords.forEach(word => {
      // Translation exercise
      generated.push({
        type: "translation",
        word,
        question: `Prevedi na nemački: ${word.serbian}`,
        correctAnswer: word.german.toLowerCase()
      })

      // Article exercise (for nouns)
      if (word.article) {
        const articles = ["der", "die", "das"]
        generated.push({
          type: "article",
          word,
          question: `Koji je član: ${word.german}?`,
          correctAnswer: word.article,
          options: articles
        })
      }

      // Sentence completion
      if (word.example) {
        const exampleWords = word.example.split(" ")
        const targetIndex = exampleWords.findIndex(w => 
          w.toLowerCase().includes(word.german.toLowerCase())
        )
        if (targetIndex !== -1) {
          const withBlank = [...exampleWords]
          withBlank[targetIndex] = "___"
          generated.push({
            type: "sentence",
            word,
            question: `Popuni: ${withBlank.join(" ")}`,
            correctAnswer: exampleWords[targetIndex].toLowerCase()
          })
        }
      }
    })

    // Shuffle and limit to 15 exercises
    const shuffled = generated.sort(() => Math.random() - 0.5).slice(0, 15)
    setExercises(shuffled)
  }, [words])

  // Timer
  useEffect(() => {
    if (!isStarted || isCompleted) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsCompleted(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isStarted, isCompleted])

  const currentExercise = exercises[currentIndex]

  const handleSubmit = () => {
    if (!currentExercise || showResult) return

    const isCorrect = userInput.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase()
    
    const updatedExercises = [...exercises]
    updatedExercises[currentIndex] = {
      ...currentExercise,
      userAnswer: userInput,
      isCorrect
    }
    setExercises(updatedExercises)
    setShowResult(true)

    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleOptionSelect = (option: string) => {
    if (showResult) return

    const isCorrect = option === currentExercise.correctAnswer
    
    const updatedExercises = [...exercises]
    updatedExercises[currentIndex] = {
      ...currentExercise,
      userAnswer: option,
      isCorrect
    }
    setExercises(updatedExercises)
    setShowResult(true)

    if (isCorrect) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setUserInput("")
      setShowResult(false)
    } else {
      setIsCompleted(true)
    }
  }

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getExerciseIcon = (type: ExerciseType) => {
    switch (type) {
      case "translation": return <Sparkles className="h-5 w-5" />
      case "article": return <Target className="h-5 w-5" />
      case "plural": return <Brain className="h-5 w-5" />
      case "sentence": return <Check className="h-5 w-5" />
      default: return <Brain className="h-5 w-5" />
    }
  }

  if (!isStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      >
        <GlassCard className="max-w-lg w-full p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-german-gold/20">
              <Trophy className="h-12 w-12 text-german-gold" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Vežbaj Rečnik</h2>
            <p className="text-muted-foreground">
              Testiraj svoje znanje kroz {exercises.length} vežbi
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-2xl font-bold text-white">{exercises.length}</div>
              <div className="text-muted-foreground">Pitanja</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-2xl font-bold text-white">3:00</div>
              <div className="text-muted-foreground">Vreme</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Otkaži
            </Button>
            <Button
              onClick={() => setIsStarted(true)}
              className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
            >
              Počni
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    )
  }

  if (isCompleted) {
    const percentage = Math.round((score / exercises.length) * 100)
    const passed = percentage >= 70

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      >
        <GlassCard className="max-w-lg w-full p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className={cn(
              "p-4 rounded-full",
              passed ? "bg-green-500/20" : "bg-yellow-500/20"
            )}>
              <Trophy className={cn(
                "h-12 w-12",
                passed ? "text-green-400" : "text-yellow-400"
              )} />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              {passed ? "Odlično!" : "Dobro!"}
            </h2>
            <p className="text-muted-foreground">
              Završio/la si vežbu sa rezultatom:
            </p>
          </div>
          <div className="text-6xl font-bold text-german-gold">
            {percentage}%
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-2xl font-bold text-green-400">{score}</div>
              <div className="text-muted-foreground">Tačnih</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5">
              <div className="text-2xl font-bold text-red-400">{exercises.length - score}</div>
              <div className="text-muted-foreground">Netačnih</div>
            </div>
          </div>
          <div className="space-y-2">
            <Button
              onClick={() => {
                setCurrentIndex(0)
                setScore(0)
                setTimeLeft(180)
                setIsCompleted(false)
                setIsStarted(false)
                setShowResult(false)
              }}
              className="w-full bg-german-gold text-black hover:bg-german-gold/90"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Ponovi
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Zatvori
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    >
      <GlassCard className="max-w-2xl w-full p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-german-gold/20">
              {getExerciseIcon(currentExercise?.type)}
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                Pitanje {currentIndex + 1} od {exercises.length}
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <Clock className="h-4 w-4" />
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-german-gold">{score}</div>
            <div className="text-xs text-muted-foreground">bodova</div>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-german-gold"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        {currentExercise && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {currentExercise.question}
                </h3>
                {currentExercise.word.example && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAudio(currentExercise.word.german)}
                    className="text-german-gold"
                  >
                    <Volume2 className="h-4 w-4 mr-2" />
                    Izgovori reč
                  </Button>
                )}
              </div>

              {/* Answer options */}
              {currentExercise.options ? (
                <div className="grid gap-3">
                  {currentExercise.options.map((option, idx) => {
                    const isSelected = currentExercise.userAnswer === option
                    const isCorrect = option === currentExercise.correctAnswer
                    
                    return (
                      <Button
                        key={idx}
                        onClick={() => handleOptionSelect(option)}
                        disabled={showResult}
                        className={cn(
                          "h-auto py-4 text-lg justify-start",
                          !showResult && "hover:bg-white/10",
                          showResult && isCorrect && "bg-green-500/20 border-green-500",
                          showResult && isSelected && !isCorrect && "bg-red-500/20 border-red-500"
                        )}
                        variant={isSelected && showResult ? "default" : "outline"}
                      >
                        {showResult && isCorrect && (
                          <Check className="h-5 w-5 mr-2 text-green-400" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <X className="h-5 w-5 mr-2 text-red-400" />
                        )}
                        {option}
                      </Button>
                    )
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  <Input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !showResult && handleSubmit()}
                    placeholder="Unesi odgovor..."
                    disabled={showResult}
                    className={cn(
                      "text-lg h-14 bg-white/5 border-white/10",
                      showResult && currentExercise.isCorrect && "border-green-500 bg-green-500/10",
                      showResult && !currentExercise.isCorrect && "border-red-500 bg-red-500/10"
                    )}
                  />
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "p-4 rounded-lg",
                        currentExercise.isCorrect ? "bg-green-500/20" : "bg-red-500/20"
                      )}
                    >
                      {currentExercise.isCorrect ? (
                        <div className="flex items-center gap-2 text-green-400">
                          <Check className="h-5 w-5" />
                          <span className="font-semibold">Tačno!</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-red-400">
                            <X className="h-5 w-5" />
                            <span className="font-semibold">Netačno</span>
                          </div>
                          <div className="text-sm text-white">
                            Tačan odgovor: <span className="font-semibold">{currentExercise.correctAnswer}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                {!showResult ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={onClose}
                      className="flex-1"
                    >
                      Napusti
                    </Button>
                    {!currentExercise.options && (
                      <Button
                        onClick={handleSubmit}
                        disabled={!userInput.trim()}
                        className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
                      >
                        Proveri
                      </Button>
                    )}
                  </>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="w-full bg-german-gold text-black hover:bg-german-gold/90"
                  >
                    {currentIndex < exercises.length - 1 ? (
                      <>
                        Sledeće <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      "Završi"
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </GlassCard>
    </motion.div>
  )
}

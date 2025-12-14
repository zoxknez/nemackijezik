"use client"

import { useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { 
  ArrowLeft,
  Volume2, 
  RotateCcw,
  Eye,
  EyeOff,
  Star,
  Zap,
  Brain,
  Trophy
} from "lucide-react"
import { Button, GlassCard } from "@/components/ui"
import Link from "next/link"
import { vocabulary, type VocabularyWord } from "@/data/vocabulary"

interface FlashCard extends VocabularyWord {
  currentInterval: number
  easeFactor: number
  repetitions: number
}

// SRS quality ratings
type Quality = "again" | "hard" | "good" | "easy"

const qualityButtons: { quality: Quality; label: string; color: string; interval: string }[] = [
  { quality: "again", label: "Ponovi", color: "bg-red-500 hover:bg-red-600", interval: "<1 min" },
  { quality: "hard", label: "Teško", color: "bg-orange-500 hover:bg-orange-600", interval: "10 min" },
  { quality: "good", label: "Dobro", color: "bg-blue-500 hover:bg-blue-600", interval: "1 dan" },
  { quality: "easy", label: "Lako", color: "bg-green-500 hover:bg-green-600", interval: "4 dana" }
]

export default function PonavljanjePage() {
  // Initialize flashcards using useMemo for initial shuffle
  const initialFlashcards = useMemo(() => {
    const shuffled = [...vocabulary].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 20).map(word => ({
      ...word,
      currentInterval: 0,
      easeFactor: 2.5,
      repetitions: 0
    }))
  }, [])
  
  const [flashcards, setFlashcards] = useState<FlashCard[]>(initialFlashcards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [completedCards, setCompletedCards] = useState<string[]>([])
  const [sessionStats, setSessionStats] = useState({
    again: 0,
    hard: 0,
    good: 0,
    easy: 0,
    totalXP: 0
  })

  const remainingCards = flashcards.filter(card => !completedCards.includes(card.id))
  const currentCard = remainingCards[currentIndex % remainingCards.length]
  const isSessionComplete = flashcards.length > 0 && remainingCards.length === 0

  const playAudio = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }, [])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    setShowAnswer(!showAnswer)
  }

  const handleRate = (quality: Quality) => {
    if (!currentCard) return

    // Calculate XP based on quality
    const xpGained = quality === "easy" ? 15 : quality === "good" ? 10 : quality === "hard" ? 5 : 0

    setSessionStats(prev => ({
      ...prev,
      [quality]: prev[quality] + 1,
      totalXP: prev.totalXP + xpGained
    }))

    // Mark card as completed for this session (in real app, update SRS schedule)
    if (quality !== "again") {
      setCompletedCards(prev => [...prev, currentCard.id])
    }

    // Reset for next card
    setShowAnswer(false)
    setIsFlipped(false)

    // Move to next card
    if (quality === "again") {
      // Move to end of queue (in real implementation)
      setCurrentIndex(prev => prev + 1)
    }
  }

  if (flashcards.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (isSessionComplete) {
    return <SessionCompleteScreen stats={sessionStats} totalCards={flashcards.length} />
  }

  if (!currentCard) return null

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/vokabular">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Brain className="w-5 h-5" />
            <span>{remainingCards.length} preostalo</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-500" />
            <span className="font-semibold">{sessionStats.totalXP} XP</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">
            {completedCards.length} / {flashcards.length} završeno
          </span>
          <span className="text-green-500 font-medium">
            {Math.round((completedCards.length / flashcards.length) * 100)}%
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(completedCards.length / flashcards.length) * 100}%` }}
            className="h-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000 mb-8">
        <motion.div
          className="relative w-full h-[400px] cursor-pointer"
          onClick={handleFlip}
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Front of card */}
          <GlassCard 
            className="absolute inset-0 p-8 flex flex-col items-center justify-center backface-hidden"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">{currentCard.category}</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                {currentCard.article && (
                  <span className="text-xl text-muted-foreground">{currentCard.article}</span>
                )}
                <h2 className="text-4xl font-bold text-primary">{currentCard.german}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    playAudio(currentCard.article ? `${currentCard.article} ${currentCard.german}` : currentCard.german)
                  }}
                >
                  <Volume2 className="w-5 h-5" />
                </Button>
              </div>
              {currentCard.plural && (
                <p className="text-muted-foreground mb-6">
                  Množina: {currentCard.plural}
                </p>
              )}
              <p className="text-lg italic text-muted-foreground mb-2">
                &ldquo;{currentCard.example}&rdquo;
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  playAudio(currentCard.example)
                }}
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Slušaj primer
              </Button>
            </div>
            
            <div className="absolute bottom-6 flex items-center gap-2 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Klikni za odgovor</span>
            </div>
          </GlassCard>

          {/* Back of card */}
          <GlassCard 
            className="absolute inset-0 p-8 flex flex-col items-center justify-center"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Prevod</p>
              <h2 className="text-4xl font-bold text-accent mb-6">{currentCard.serbian}</h2>
              
              <div className="space-y-2 text-muted-foreground">
                <p className="italic">&ldquo;{currentCard.example}&rdquo;</p>
                <p className="text-foreground">{currentCard.exampleTranslation}</p>
              </div>
            </div>

            <div className="absolute bottom-6 flex items-center gap-2 text-muted-foreground">
              <EyeOff className="w-4 h-4" />
              <span className="text-sm">Oceni svoje znanje</span>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Rating Buttons */}
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <GlassCard className="p-6">
              <p className="text-center text-muted-foreground mb-4">
                Koliko ti je bilo lako setiti se odgovora?
              </p>
              <div className="grid grid-cols-4 gap-3">
                {qualityButtons.map(({ quality, label, color, interval }) => (
                  <Button
                    key={quality}
                    className={`h-auto py-3 flex flex-col ${color} text-white`}
                    onClick={() => handleRate(quality)}
                  >
                    <span className="font-semibold">{label}</span>
                    <span className="text-xs opacity-80">{interval}</span>
                  </Button>
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <RotateCcw className="w-4 h-4" />
                  Ponovi = vrati u red
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Lako = +15 XP
                </span>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Session Stats (small) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <GlassCard className="p-4">
          <div className="flex justify-around text-center">
            <div>
              <p className="text-red-500 font-bold">{sessionStats.again}</p>
              <p className="text-xs text-muted-foreground">Ponovi</p>
            </div>
            <div>
              <p className="text-orange-500 font-bold">{sessionStats.hard}</p>
              <p className="text-xs text-muted-foreground">Teško</p>
            </div>
            <div>
              <p className="text-blue-500 font-bold">{sessionStats.good}</p>
              <p className="text-xs text-muted-foreground">Dobro</p>
            </div>
            <div>
              <p className="text-green-500 font-bold">{sessionStats.easy}</p>
              <p className="text-xs text-muted-foreground">Lako</p>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

function SessionCompleteScreen({ 
  stats, 
  totalCards 
}: { 
  stats: { again: number; hard: number; good: number; easy: number; totalXP: number }
  totalCards: number
}) {
  const accuracy = Math.round(((stats.good + stats.easy) / totalCards) * 100)

  return (
    <div className="max-w-md mx-auto text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <GlassCard className="p-8">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
          >
            <Trophy className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-2xl font-bold mb-2">Sesija završena! 🎉</h1>
          <p className="text-muted-foreground mb-6">
            Odlično! Nastavak učenja čini savršenim.
          </p>

          {/* Stats */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span>Zarađeni XP</span>
              <span className="font-bold text-yellow-500">+{stats.totalXP} XP</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span>Tačnost</span>
              <span className={`font-bold ${accuracy >= 80 ? 'text-green-500' : accuracy >= 60 ? 'text-blue-500' : 'text-orange-500'}`}>
                {accuracy}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <span>Pregledane kartice</span>
              <span className="font-bold">{totalCards}</span>
            </div>
          </div>

          {/* Detailed breakdown */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <p className="text-lg font-bold text-red-500">{stats.again}</p>
              <p className="text-xs text-muted-foreground">Ponovi</p>
            </div>
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <p className="text-lg font-bold text-orange-500">{stats.hard}</p>
              <p className="text-xs text-muted-foreground">Teško</p>
            </div>
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <p className="text-lg font-bold text-blue-500">{stats.good}</p>
              <p className="text-xs text-muted-foreground">Dobro</p>
            </div>
            <div className="p-2 bg-green-500/20 rounded-lg">
              <p className="text-lg font-bold text-green-500">{stats.easy}</p>
              <p className="text-xs text-muted-foreground">Lako</p>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/vokabular">
              <Button className="w-full">
                Nazad na vokabular
              </Button>
            </Link>
            <Link href="/lekcije">
              <Button variant="outline" className="w-full">
                Nastavi sa lekcijama
              </Button>
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

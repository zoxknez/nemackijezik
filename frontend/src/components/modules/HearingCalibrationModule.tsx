'use client'

import { useState, useEffect } from 'react'
import { useSwipeable } from 'react-use-gesture'
import { AudioPlayer } from '../audio/AudioPlayer'
import { exercisesApi } from '@/lib/api'
import { MinimalPairExercise } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Volume2 } from 'lucide-react'
import { useToast } from '@/hooks/useToast'
import { LoadingSpinner } from '../ui/LoadingSpinner'

interface HearingCalibrationModuleProps {
  exerciseId: string
  onComplete?: (score: number) => void
}

export function HearingCalibrationModule({ exerciseId, onComplete }: HearingCalibrationModuleProps) {
  const [exercise, setExercise] = useState<MinimalPairExercise | null>(null)
  const [currentPairIndex, setCurrentPairIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<'left' | 'right' | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { showToast } = useToast()

  useEffect(() => {
    loadExercise()
  }, [exerciseId])

  const loadExercise = async () => {
    try {
      setIsLoading(true)
      const response = await exercisesApi.getById(exerciseId)
      setExercise(response.data)
    } catch (error) {
      console.error('Error loading exercise:', error)
      showToast('Greška pri učitavanju vežbe', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  const playAudio = async (url: string) => {
    setIsPlaying(true)
    try {
      const audio = new Audio(url)
      await new Promise((resolve, reject) => {
        audio.onended = resolve
        audio.onerror = reject
        audio.play()
      })
    } catch (error) {
      showToast('Greška pri reprodukciji audio fajla', 'error')
    } finally {
      setIsPlaying(false)
    }
  }

  const handleAnswer = async (answer: 'left' | 'right') => {
    if (!exercise || selectedAnswer !== null) return

    setSelectedAnswer(answer)
    const correct = answer === exercise.config.correctAnswer
    setIsCorrect(correct)

    if (correct) {
      setScore((prev) => prev + 1)
      showToast('Tačno! 🎉', 'success')
    } else {
      showToast('Pogrešno. Pokušaj ponovo.', 'error')
      // Play both sounds for comparison
      await playAudio(exercise.config.pair1.audio)
      await new Promise((resolve) => setTimeout(resolve, 300))
      await playAudio(exercise.config.pair2.audio)
    }

    setShowFeedback(true)

    // Auto-advance after feedback
    setTimeout(() => {
      setShowFeedback(false)
      setSelectedAnswer(null)
      setIsCorrect(null)

      const pairs = exercise.config.pairs || [exercise.config]
      if (currentPairIndex < pairs.length - 1) {
        setCurrentPairIndex((prev) => prev + 1)
      } else {
        // Exercise complete
        const finalScore = ((score + (correct ? 1 : 0)) / pairs.length) * 100
        showToast(`Vežba završena! Rezultat: ${Math.round(finalScore)}%`, 'success')
        if (onComplete) {
          onComplete(finalScore)
        }
      }
    }, 2000)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleAnswer('left'),
    onSwipedRight: () => handleAnswer('right'),
    trackMouse: true,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (!exercise) {
    return (
      <div className="text-center text-gray-400 py-16">
        Vežba nije pronađena
      </div>
    )
  }

  const pairs = exercise.config.pairs || [exercise.config]
  const currentPair = pairs[currentPairIndex]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Kalibracija Sluha</h2>
        <p className="text-gray-400">Slušaj zvuk i izaberi tačan odgovor</p>
        <div className="mt-4 text-sm text-gray-500">
          Par {currentPairIndex + 1} od {pairs.length}
        </div>
      </div>

      {/* Audio Player */}
      <div className="mb-8">
        <button
          onClick={() => playAudio(currentPair.pair1.audio)}
          disabled={isPlaying}
          className="w-full p-4 bg-dark-surface rounded-lg mb-4 hover:bg-dark-border transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <Volume2 className="w-5 h-5" />
          <span>{isPlaying ? 'Reprodukcija...' : 'Pusti zvuk'}</span>
        </button>
      </div>

      {/* Pair Cards */}
      <div
        {...swipeHandlers}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
      >
        <AnimatePresence>
          {/* Left Card */}
          <motion.div
            key="left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className={`relative cursor-pointer ${
              selectedAnswer === 'left'
                ? isCorrect
                  ? 'ring-4 ring-das-green'
                  : 'ring-4 ring-die-red'
                : 'hover:ring-2 hover:ring-der-blue'
            } transition-all`}
            onClick={() => handleAnswer('left')}
          >
            <div className="bg-dark-surface border-2 border-dark-border rounded-lg p-8 text-center">
              {currentPair.pair1.image && (
                <img
                  src={currentPair.pair1.image}
                  alt={currentPair.pair1.word}
                  className="w-32 h-32 mx-auto mb-4 object-cover rounded"
                />
              )}
              <div className="text-2xl font-bold mb-2">{currentPair.pair1.word}</div>
              <div className="text-gray-400 text-sm">Levo</div>

              {selectedAnswer === 'left' && (
                <div className="absolute top-4 right-4">
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-das-green" />
                  ) : (
                    <XCircle className="w-8 h-8 text-die-red" />
                  )}
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            key="right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={`relative cursor-pointer ${
              selectedAnswer === 'right'
                ? isCorrect
                  ? 'ring-4 ring-das-green'
                  : 'ring-4 ring-die-red'
                : 'hover:ring-2 hover:ring-der-blue'
            } transition-all`}
            onClick={() => handleAnswer('right')}
          >
            <div className="bg-dark-surface border-2 border-dark-border rounded-lg p-8 text-center">
              {currentPair.pair2.image && (
                <img
                  src={currentPair.pair2.image}
                  alt={currentPair.pair2.word}
                  className="w-32 h-32 mx-auto mb-4 object-cover rounded"
                />
              )}
              <div className="text-2xl font-bold mb-2">{currentPair.pair2.word}</div>
              <div className="text-gray-400 text-sm">Desno</div>

              {selectedAnswer === 'right' && (
                <div className="absolute top-4 right-4">
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-das-green" />
                  ) : (
                    <XCircle className="w-8 h-8 text-die-red" />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Klikni na kartu ili povuci levo/desno da izabereš odgovor</p>
      </div>
    </div>
  )
}

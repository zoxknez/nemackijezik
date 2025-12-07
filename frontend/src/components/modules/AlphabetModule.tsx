'use client'

import { useState } from 'react'
import { AudioPlayer } from '../audio/AudioPlayer'
import { Volume2, AlertCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface AlphabetModuleProps {
  moduleId: string
  config: any
}

export function AlphabetModule({ moduleId, config }: AlphabetModuleProps) {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [code, setCode] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showError, setShowError] = useState(false)

  const groups = config.groups || []

  const playLetterSound = (letter: string) => {
    // In production, play actual audio
    console.log('Playing sound for:', letter)
  }

  const handleLetterClick = (letter: string) => {
    if (code.length >= 3) return

    const newCode = [...code, letter]
    setCode(newCode)
    playLetterSound(letter)

    // Check if code is complete
    if (newCode.length === 3) {
      checkCode(newCode)
    }
  }

  const checkCode = (enteredCode: string[]) => {
    // Mock code check - in production, compare with correct sequence
    const correctCode = ['V', 'W', 'Z']
    const isCorrectCode = enteredCode.join('') === correctCode.join('')

    setIsCorrect(isCorrectCode)

    if (!isCorrectCode) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
        setCode([])
      }, 2000)
    }
  }

  const clearCode = () => {
    setCode([])
    setIsCorrect(null)
  }

  if (groups.length === 0) {
    return <div className="text-center text-gray-400">Nema grupa za učenje</div>
  }

  const currentGroup = groups[currentGroupIndex]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{config.title || 'Abeceda - Pametne Grupe'}</h2>
        <p className="text-gray-400">{config.description || 'Učenje abecede kroz grupe koje zbunjuju'}</p>
      </div>

      {/* Current Group */}
      <div className="bg-dark-surface rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">{currentGroup.name}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(currentGroup.pronunciations || {}).map(([letter, pronunciation]) => (
            <div
              key={letter}
              className="bg-dark-border rounded-lg p-4 text-center cursor-pointer hover:bg-dark-border/80 transition-colors"
              onClick={() => playLetterSound(letter)}
            >
              <div className="text-2xl font-bold mb-2">{letter}</div>
              <div className="text-sm text-gray-400">{pronunciation as string}</div>
              <button className="mt-2 text-der-blue">
                <Volume2 className="w-5 h-5 mx-auto" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Safe Code Game */}
      <div className="bg-dark-surface rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Šifra Sefa</h3>
        <p className="text-gray-400 mb-4 text-sm">
          Slušaj zvukove i ukucaj šifru od 3 slova
        </p>

        {/* Code Display */}
        <div className="flex gap-4 justify-center mb-6">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-16 h-16 border-2 rounded-lg flex items-center justify-center text-2xl font-bold ${
                code[index]
                  ? 'border-der-blue bg-der-blue/20'
                  : 'border-dark-border bg-dark-border'
              }`}
            >
              {code[index] || '?'}
            </div>
          ))}
        </div>

        {/* Keyboard */}
        <div className="grid grid-cols-6 gap-2">
          {Object.keys(currentGroup.pronunciations || {}).map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              disabled={code.length >= 3}
              className="p-4 bg-dark-border rounded-lg hover:bg-dark-border/80 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={clearCode}
            className="px-6 py-2 bg-dark-border rounded-lg"
          >
            Obriši
          </button>
        </div>

        {/* Feedback */}
        <AnimatePresence>
          {showError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 p-4 bg-die-red/20 border border-die-red rounded-lg flex items-center gap-2 text-die-red"
            >
              <AlertCircle className="w-5 h-5" />
              <span>Pogrešna šifra! Alarm se oglašava.</span>
            </motion.div>
          )}

          {isCorrect && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-das-green/20 border border-das-green rounded-lg text-das-green text-center"
            >
              Tačno! Šifra je ispravna! 🎉
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {groups.length > 1 && (
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentGroupIndex(Math.max(0, currentGroupIndex - 1))}
            disabled={currentGroupIndex === 0}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50"
          >
            Prethodna Grupa
          </button>
          <div className="text-sm text-gray-400">
            {currentGroupIndex + 1} / {groups.length}
          </div>
          <button
            onClick={() =>
              setCurrentGroupIndex(Math.min(groups.length - 1, currentGroupIndex + 1))
            }
            disabled={currentGroupIndex === groups.length - 1}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50"
          >
            Sledeća Grupa
          </button>
        </div>
      )}
    </div>
  )
}


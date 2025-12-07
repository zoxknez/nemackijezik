'use client'

import { useState } from 'react'
import { BackwardsShadowingPlayer } from '../audio/BackwardsShadowingPlayer'
import { AudioRecorder } from '../audio/AudioRecorder'
import { GenderWordCard } from '../gender/GenderWordCard'

interface WordsModuleProps {
  moduleId: string
  config: any
}

export function WordsModule({ moduleId, config }: WordsModuleProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null)

  const words = config.words || []

  const handleRecordingComplete = (blob: Blob) => {
    setRecordedAudio(blob)
    // In production, send to backend for AI analysis
  }

  if (words.length === 0) {
    return <div className="text-center text-gray-400">Nema reči za učenje</div>
  }

  const currentWord = words[currentWordIndex]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{config.title || 'Prve Reči'}</h2>
        <p className="text-gray-400">{config.description || 'Učenje reči kroz backwards shadowing'}</p>
      </div>

      {/* Word Card */}
      <div className="mb-8">
        <GenderWordCard
          gender={currentWord.gender || 'das'}
          word={currentWord.word}
          phonetic={currentWord.phonetic}
        />
      </div>

      {/* Backwards Shadowing */}
      {currentWord.audio_url && currentWord.segments && (
        <div className="mb-8">
          <BackwardsShadowingPlayer
            audioUrl={currentWord.audio_url}
            segments={currentWord.segments.map((seg: any, index: number) => ({
              text: seg.text || seg,
              startTime: seg.startTime || index * 0.3,
              endTime: seg.endTime || (index + 1) * 0.3,
              phonetic: seg.phonetic || '',
            }))}
          />
        </div>
      )}

      {/* Recording */}
      <div className="bg-dark-surface rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Snimi Svoj Pokušaj</h3>
        <AudioRecorder onRecordingComplete={handleRecordingComplete} />
        {recordedAudio && (
          <div className="mt-4 text-sm text-das-green">
            Snimak je spreman za analizu
          </div>
        )}
      </div>

      {/* Navigation */}
      {words.length > 1 && (
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentWordIndex(Math.max(0, currentWordIndex - 1))}
            disabled={currentWordIndex === 0}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50"
          >
            Prethodna Reč
          </button>
          <div className="text-sm text-gray-400">
            {currentWordIndex + 1} / {words.length}
          </div>
          <button
            onClick={() => setCurrentWordIndex(Math.min(words.length - 1, currentWordIndex + 1))}
            disabled={currentWordIndex === words.length - 1}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50"
          >
            Sledeća Reč
          </button>
        </div>
      )}
    </div>
  )
}


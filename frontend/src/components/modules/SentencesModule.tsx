'use client'

import { useState, useEffect, useRef } from 'react'
import { AudioPlayer } from '../audio/AudioPlayer'
import { AudioRecorder } from '../audio/AudioRecorder'
import { useGyroscope } from '@/hooks/useGyroscope'
import { motion } from 'framer-motion'

interface SentencesModuleProps {
  moduleId: string
  config: any
}

export function SentencesModule({ moduleId, config }: SentencesModuleProps) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal')
  const [isFollowing, setIsFollowing] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { data: gyroData, isSupported } = useGyroscope()

  const sentences = config.sentences || []

  useEffect(() => {
    if (isFollowing && canvasRef.current) {
      drawIntonationLine()
    }
  }, [currentTime, isFollowing])

  useEffect(() => {
    // Handle TPR actions based on gyroscope
    if (gyroData && sentences[currentSentenceIndex]?.tpr_actions) {
      const actions = sentences[currentSentenceIndex].tpr_actions
      
      // Check for tilt down (müde)
      if (gyroData.x > 20) {
        const tiltDownAction = actions.find((a: any) => a.action === 'tilt_down')
        if (tiltDownAction) {
          console.log('TPR: Tilt down detected')
        }
      }

      // Check for tilt up (glücklich)
      if (gyroData.x < -20) {
        const tiltUpAction = actions.find((a: any) => a.action === 'tilt_up')
        if (tiltUpAction) {
          console.log('TPR: Tilt up detected')
        }
      }
    }
  }, [gyroData, currentSentenceIndex, sentences])

  const drawIntonationLine = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const sentence = sentences[currentSentenceIndex]
    const pattern = sentence.intonation || []

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 3
    ctx.beginPath()

    pattern.forEach((value: number, index: number) => {
      const x = (index / (pattern.length - 1)) * canvas.width
      const y = canvas.height - value * canvas.height

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()
  }

  const handleTPRAction = (action: string) => {
    console.log('TPR Action:', action)
    // In production, use device orientation API
  }

  if (sentences.length === 0) {
    return <div className="text-center text-gray-400">Nema rečenica za učenje</div>
  }

  const currentSentence = sentences[currentSentenceIndex]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{config.title || 'Identitet'}</h2>
        <p className="text-gray-400">{config.description || 'Predstavljanje i prve rečenice'}</p>
        {isSupported && (
          <p className="text-xs text-das-green mt-2">Gyroscope podrška aktivna</p>
        )}
      </div>

      {/* Sentence Display */}
      <div className="bg-dark-surface rounded-lg p-6 mb-6">
        <div className="text-2xl font-semibold mb-4">{currentSentence.text}</div>
        {currentSentence.phonetic_guide && (
          <div className="text-gray-400 text-sm mb-4">[{currentSentence.phonetic_guide}]</div>
        )}
      </div>

      {/* Intonation Line (Conducting Interface) */}
      <div className="bg-dark-surface rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Intonacija (Dirigovanje)</h3>
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          className="w-full bg-dark-border rounded-lg touch-none"
          style={{ touchAction: 'none' }}
        />
        <p className="text-sm text-gray-400 mt-4">
          Prati liniju prstom dok izgovaraš rečenicu
        </p>
      </div>

      {/* Speed Variations */}
      <div className="bg-dark-surface rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Brzina</h3>
        <div className="flex gap-4 flex-wrap">
          {(['slow', 'normal', 'fast'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-6 py-2 rounded-lg ${
                speed === s ? 'bg-der-blue' : 'bg-dark-border'
              }`}
            >
              {s === 'slow' ? 'Kornjača' : s === 'normal' ? 'Normalno' : 'Zec'}
            </button>
          ))}
        </div>
      </div>

      {/* Audio Player */}
      {currentSentence.audio_url && (
        <div className="mb-6">
          <AudioPlayer audioUrl={currentSentence.audio_url} />
        </div>
      )}

      {/* TPR Actions */}
      {currentSentence.tpr_actions && currentSentence.tpr_actions.length > 0 && (
        <div className="bg-dark-surface rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">TPR Vežbe</h3>
          <div className="space-y-2">
            {currentSentence.tpr_actions.map((action: any, index: number) => (
              <div
                key={index}
                className="p-4 bg-dark-border rounded-lg flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold">{action.word}</span>
                  <span className="text-gray-400 ml-2">- {action.description}</span>
                </div>
                <button
                  onClick={() => handleTPRAction(action.action)}
                  className="px-4 py-2 bg-der-blue rounded-lg text-sm"
                >
                  Pokušaj
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recording */}
      <div className="bg-dark-surface rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Snimi Svoj Pokušaj</h3>
        <AudioRecorder />
      </div>

      {/* Navigation */}
      {sentences.length > 1 && (
        <div className="flex justify-between mt-8 flex-wrap gap-4">
          <button
            onClick={() => setCurrentSentenceIndex(Math.max(0, currentSentenceIndex - 1))}
            disabled={currentSentenceIndex === 0}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50 flex-1 min-w-[120px]"
          >
            Prethodna Rečenica
          </button>
          <div className="text-sm text-gray-400 flex items-center">
            {currentSentenceIndex + 1} / {sentences.length}
          </div>
          <button
            onClick={() =>
              setCurrentSentenceIndex(Math.min(sentences.length - 1, currentSentenceIndex + 1))
            }
            disabled={currentSentenceIndex === sentences.length - 1}
            className="px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50 flex-1 min-w-[120px]"
          >
            Sledeća Rečenica
          </button>
        </div>
      )}
    </div>
  )
}

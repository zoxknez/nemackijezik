'use client'

import { useAudioRecorder } from '@/hooks/useAudioRecorder'
import { Mic, Square, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface AudioRecorderProps {
  onRecordingComplete?: (blob: Blob) => void
  maxDuration?: number // in seconds
}

export function AudioRecorder({ onRecordingComplete, maxDuration }: AudioRecorderProps) {
  const { isRecording, audioBlob, audioUrl, startRecording, stopRecording, clearRecording } = useAudioRecorder()
  const [recordingTime, setRecordingTime] = useState(0)

  const handleStart = async () => {
    try {
      await startRecording()
      setRecordingTime(0)

      // Timer
      const interval = setInterval(() => {
        setRecordingTime((prev) => {
          const newTime = prev + 1
          if (maxDuration && newTime >= maxDuration) {
            clearInterval(interval)
            handleStop()
          }
          return newTime
        })
      }, 1000)
    } catch (error) {
      console.error('Failed to start recording:', error)
      alert('Ne možemo da pristupimo mikrofonu. Proverite dozvole.')
    }
  }

  const handleStop = () => {
    stopRecording()
    if (audioBlob && onRecordingComplete) {
      onRecordingComplete(audioBlob)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {!isRecording && !audioUrl && (
          <button
            onClick={handleStart}
            className="p-4 bg-die-red rounded-full hover:bg-red-600 transition-colors"
            aria-label="Start recording"
          >
            <Mic className="w-6 h-6 text-white" />
          </button>
        )}

        {isRecording && (
          <>
            <button
              onClick={handleStop}
              className="p-4 bg-die-red rounded-full hover:bg-red-600 transition-colors animate-pulse"
              aria-label="Stop recording"
            >
              <Square className="w-6 h-6 text-white" />
            </button>
            <div className="text-xl font-semibold text-die-red">
              {formatTime(recordingTime)}
            </div>
          </>
        )}

        {audioUrl && (
          <>
            <audio src={audioUrl} controls className="max-w-xs" />
            <button
              onClick={clearRecording}
              className="p-2 bg-dark-border rounded-full hover:bg-dark-border/80 transition-colors"
              aria-label="Clear recording"
            >
              <Trash2 className="w-5 h-5 text-white" />
            </button>
          </>
        )}
      </div>

      {isRecording && (
        <div className="text-sm text-gray-400">
          Snimanje u toku...
        </div>
      )}
    </div>
  )
}


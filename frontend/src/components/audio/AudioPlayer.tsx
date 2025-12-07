'use client'

import { useAudioPlayer } from '@/hooks/useAudioPlayer'
import { Play, Pause, Square } from 'lucide-react'

interface AudioPlayerProps {
  audioUrl: string
  showControls?: boolean
  autoPlay?: boolean
  onEnd?: () => void
}

export function AudioPlayer({ audioUrl, showControls = true, autoPlay = false, onEnd }: AudioPlayerProps) {
  const { isPlaying, progress, duration, play, pause, stop } = useAudioPlayer(audioUrl)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-dark-surface rounded-lg">
      {showControls && (
        <>
          <button
            onClick={isPlaying ? pause : play}
            className="p-2 bg-der-blue rounded-full hover:bg-blue-600 transition-colors"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>

          <button
            onClick={stop}
            className="p-2 bg-dark-border rounded-full hover:bg-dark-border/80 transition-colors"
            aria-label="Stop"
          >
            <Square className="w-4 h-4 text-white" />
          </button>
        </>
      )}

      <div className="flex-1">
        <div className="w-full bg-dark-border rounded-full h-2">
          <div
            className="bg-der-blue h-2 rounded-full transition-all"
            style={{ width: `${duration > 0 ? (progress / duration) * 100 : 0}%` }}
          />
        </div>
      </div>

      {showControls && (
        <div className="text-sm text-gray-400 min-w-[80px] text-right">
          {formatTime(progress)} / {formatTime(duration)}
        </div>
      )}
    </div>
  )
}


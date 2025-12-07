'use client'

import { useState, useEffect } from 'react'
import { AudioPlayer } from './AudioPlayer'
import { WaveformVisualizer } from './WaveformVisualizer'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'
import { Play, ChevronRight } from 'lucide-react'

interface Segment {
  text: string
  startTime: number
  endTime: number
  phonetic: string
}

interface BackwardsShadowingPlayerProps {
  audioUrl: string
  segments: Segment[]
  onSegmentComplete?: (segmentIndex: number) => void
}

export function BackwardsShadowingPlayer({
  audioUrl,
  segments,
  onSegmentComplete,
}: BackwardsShadowingPlayerProps) {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(segments.length - 1) // Start from last
  const [completedSegments, setCompletedSegments] = useState<Set<number>>(new Set())
  const { play, isPlaying, seek } = useAudioPlayer(audioUrl)

  const currentSegment = segments[currentSegmentIndex]
  const isComplete = completedSegments.has(currentSegmentIndex)

  const playSegment = () => {
    if (!currentSegment) return

    // Seek to segment start
    seek(currentSegment.startTime)

    // Play segment
    play()

    // Auto-advance after segment duration
    const duration = currentSegment.endTime - currentSegment.startTime
    setTimeout(() => {
      if (onSegmentComplete) {
        onSegmentComplete(currentSegmentIndex)
      }
      setCompletedSegments((prev) => new Set([...prev, currentSegmentIndex]))
    }, duration * 1000)
  }

  const nextSegment = () => {
    if (currentSegmentIndex > 0) {
      setCurrentSegmentIndex(currentSegmentIndex - 1)
    }
  }

  const previousSegment = () => {
    if (currentSegmentIndex < segments.length - 1) {
      setCurrentSegmentIndex(currentSegmentIndex + 1)
    }
  }

  const waveformSegments = segments.map((seg, index) => ({
    startTime: seg.startTime,
    endTime: seg.endTime,
    color: completedSegments.has(index) ? '#10b981' : index === currentSegmentIndex ? '#3b82f6' : '#4a4a4a',
  }))

  return (
    <div className="space-y-6">
      <div className="bg-dark-surface p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Backwards Shadowing</h3>

        {/* Current Segment Display */}
        <div className="mb-6">
          <div className="text-2xl font-bold mb-2">{currentSegment?.text}</div>
          <div className="text-gray-400 text-sm">{currentSegment?.phonetic}</div>
          <div className="text-xs text-gray-500 mt-1">
            Segment {segments.length - currentSegmentIndex} od {segments.length}
          </div>
        </div>

        {/* Waveform */}
        <WaveformVisualizer
          audioUrl={audioUrl}
          segments={waveformSegments}
          currentTime={currentSegment?.startTime}
        />

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={previousSegment}
            disabled={currentSegmentIndex >= segments.length - 1}
            className="p-2 bg-dark-border rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-180" />
          </button>

          <button
            onClick={playSegment}
            disabled={isPlaying}
            className="px-6 py-3 bg-der-blue rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Pusti Segment
          </button>

          <button
            onClick={nextSegment}
            disabled={currentSegmentIndex === 0}
            className="p-2 bg-dark-border rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="flex gap-2">
            {segments.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded ${
                  completedSegments.has(index)
                    ? 'bg-das-green'
                    : index === currentSegmentIndex
                    ? 'bg-der-blue'
                    : 'bg-dark-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Audio Player */}
      <AudioPlayer audioUrl={audioUrl} />
    </div>
  )
}


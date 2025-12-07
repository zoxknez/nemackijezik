'use client'

import { useEffect, useRef, useState } from 'react'
import { loadAudioBuffer, drawWaveform, drawWaveformSegment } from '@/lib/audioUtils'

interface WaveformVisualizerProps {
  audioUrl: string
  segments?: Array<{ startTime: number; endTime: number; color?: string }>
  currentTime?: number
  onSeek?: (time: number) => void
  height?: number
}

export function WaveformVisualizer({
  audioUrl,
  segments = [],
  currentTime = 0,
  onSeek,
  height = 100,
}: WaveformVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!audioUrl) return

    const loadAudio = async () => {
      try {
        setIsLoading(true)
        const buffer = await loadAudioBuffer(audioUrl)
        setAudioBuffer(buffer)
      } catch (error) {
        console.error('Error loading audio:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAudio()
  }, [audioUrl])

  useEffect(() => {
    if (!audioBuffer || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw full waveform
    drawWaveform(canvas, audioBuffer, canvas.width, canvas.height)

    // Draw segments
    segments.forEach((segment) => {
      drawWaveformSegment(
        canvas,
        audioBuffer,
        segment.startTime,
        segment.endTime,
        segment.color || '#10b981'
      )
    })

    // Draw current time indicator
    if (currentTime > 0 && audioBuffer) {
      const sampleRate = audioBuffer.sampleRate
      const duration = audioBuffer.duration
      const x = (currentTime / duration) * canvas.width

      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }
  }, [audioBuffer, segments, currentTime])

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!audioBuffer || !onSeek) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const duration = audioBuffer.duration
    const time = (x / canvas.width) * duration

    onSeek(time)
  }

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-dark-surface rounded-lg">
        <div className="text-gray-400">Učitavanje...</div>
      </div>
    )
  }

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={height}
      onClick={handleClick}
      className="w-full h-full cursor-pointer bg-dark-surface rounded-lg"
    />
  )
}


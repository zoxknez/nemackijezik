"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { toast } from "@/components/ui/toast"
import {
  Volume2,
  Mic,
  MicOff,
  Pause,
  RotateCcw,
  Loader2,
} from "lucide-react"

interface AudioPlayerProps {
  text: string
  className?: string
  autoPlay?: boolean
  showText?: boolean
  speed?: "slow" | "standard"
}

export function AudioPlayer({
  text,
  className,
  autoPlay = false,
  showText = true,
  speed = "standard",
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const generateAudio = useCallback(async () => {
    if (audioUrl) return audioUrl

    setIsLoading(true)
    try {
      const response = await fetch("/api/ai/speech", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: speed }),
      })

      if (!response.ok) throw new Error("Failed to generate audio")

      const data = await response.json()
      const url = `data:audio/mp3;base64,${data.audio}`
      setAudioUrl(url)
      return url
    } catch {
      toast.error("Greška pri generisanju zvuka")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [text, speed, audioUrl])

  const playAudio = useCallback(async () => {
    const url = await generateAudio()
    if (!url) return

    if (!audioRef.current) {
      audioRef.current = new Audio(url)
      audioRef.current.onended = () => setIsPlaying(false)
    }

    audioRef.current.play()
    setIsPlaying(true)
  }, [generateAudio])

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const replayAudio = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      await playAudio()
    }
  }

  useEffect(() => {
    if (autoPlay) {
      playAudio()
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [autoPlay, playAudio])

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={isPlaying ? pauseAudio : playAudio}
        disabled={isLoading}
        className="h-10 w-10 rounded-full bg-german-gold/20 hover:bg-german-gold/30 text-german-gold"
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </Button>

      {showText && (
        <span className="text-lg font-medium text-white">{text}</span>
      )}

      {audioUrl && (
        <Button
          variant="ghost"
          size="icon"
          onClick={replayAudio}
          className="h-8 w-8 rounded-full hover:bg-white/10 text-muted-foreground"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob) => void
  expectedText: string
  maxDuration?: number
  className?: string
}

export function AudioRecorder({
  onRecordingComplete,
  expectedText,
  maxDuration = 30,
  className,
}: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [duration, setDuration] = useState(0)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setHasPermission(true)

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      })

      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" })
        onRecordingComplete(blob)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setDuration(0)

      timerRef.current = setInterval(() => {
        setDuration((d) => {
          if (d >= maxDuration) {
            stopRecording()
            return d
          }
          return d + 1
        })
      }, 1000)
    } catch {
      setHasPermission(false)
      toast.error("Nije moguće pristupiti mikrofonu")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream
          ?.getTracks()
          .forEach((track) => track.stop())
      }
    }
  }, [])

  if (hasPermission === false) {
    return (
      <div className={cn("text-center p-4", className)}>
        <MicOff className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">
          Dozvola za mikrofon je potrebna za snimanje
        </p>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Expected text */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-1">Izgovorite:</p>
        <p className="text-xl font-medium text-white">{expectedText}</p>
      </div>

      {/* Recording button */}
      <div className="relative">
        <Button
          size="lg"
          variant={isRecording ? "danger" : "default"}
          onClick={isRecording ? stopRecording : startRecording}
          className={cn(
            "h-20 w-20 rounded-full transition-all",
            isRecording && "animate-pulse"
          )}
        >
          {isRecording ? (
            <MicOff className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </Button>

        {/* Recording indicator */}
        {isRecording && (
          <div className="absolute -inset-2 rounded-full border-2 border-red-500 animate-ping" />
        )}
      </div>

      {/* Duration */}
      {isRecording && (
        <div className="flex items-center gap-2 text-red-400">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono">{formatDuration(duration)}</span>
          <span className="text-xs text-muted-foreground">
            / {formatDuration(maxDuration)}
          </span>
        </div>
      )}

      {/* Instructions */}
      <p className="text-xs text-muted-foreground text-center">
        {isRecording
          ? "Kliknite da završite snimanje"
          : "Kliknite na mikrofon da započnete"}
      </p>
    </div>
  )
}

interface PronunciationScoreProps {
  score: number
  feedback: string
  wordScores?: Array<{
    word: string
    expected: string
    score: number
  }>
  className?: string
}

export function PronunciationScore({
  score,
  feedback,
  wordScores,
  className,
}: PronunciationScoreProps) {
  const getScoreColor = (s: number) => {
    if (s >= 90) return "text-green-400"
    if (s >= 70) return "text-german-gold"
    if (s >= 50) return "text-orange-400"
    return "text-red-400"
  }

  const getScoreBg = (s: number) => {
    if (s >= 90) return "from-green-500/20 to-green-500/5"
    if (s >= 70) return "from-german-gold/20 to-german-gold/5"
    if (s >= 50) return "from-orange-500/20 to-orange-500/5"
    return "from-red-500/20 to-red-500/5"
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Score circle */}
      <div
        className={cn(
          "mx-auto w-32 h-32 rounded-full flex items-center justify-center",
          "bg-linear-to-br border border-white/10",
          getScoreBg(score)
        )}
      >
        <div className="text-center">
          <span className={cn("text-4xl font-bold", getScoreColor(score))}>
            {score}
          </span>
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>

      {/* Feedback */}
      <p className="text-center text-lg">{feedback}</p>

      {/* Word scores */}
      {wordScores && wordScores.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Analiza po rečima:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {wordScores.map((ws, i) => (
              <div
                key={i}
                className={cn(
                  "px-3 py-1.5 rounded-lg border text-sm",
                  ws.score >= 1
                    ? "bg-green-500/10 border-green-500/30 text-green-400"
                    : "bg-red-500/10 border-red-500/30 text-red-400"
                )}
              >
                <span className="font-medium">{ws.expected}</span>
                {ws.score < 1 && ws.word && (
                  <span className="text-xs ml-1 opacity-70">
                    ({ws.word})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

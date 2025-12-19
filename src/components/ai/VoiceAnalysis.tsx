"use client"

import { useState, useEffect, useRef } from "react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import {
  Mic,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  TrendingUp,
  TrendingDown,
  Target,
  CheckCircle2,
  AlertCircle,
  Award,
  Loader2
} from "lucide-react"

interface PronunciationScore {
  overall: number
  accuracy: number
  fluency: number
  completeness: number
  feedback: string[]
  strengths: string[]
  improvements: string[]
  phonemeScores: { phoneme: string; score: number }[]
}

interface VoiceAnalysisProps {
  text: string
  onComplete?: (score: PronunciationScore) => void
}

export function VoiceAnalysis({ text, onComplete }: VoiceAnalysisProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState<PronunciationScore | null>(null)
  const [recordingTime, setRecordingTime] = useState(0)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (audioURL) URL.revokeObjectURL(audioURL)
    }
  }, [audioURL])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        const url = URL.createObjectURL(audioBlob)
        setAudioURL(url)
        stream.getTracks().forEach(track => track.stop())
        
        // Analyze pronunciation
        analyzePronunciation(audioBlob)
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)

    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Molimo dozvolite pristup mikrofonu')
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

  const analyzePronunciation = async (audioBlob: Blob) => {
    setIsAnalyzing(true)

    // Simulate API call to pronunciation analysis service
    // In production, this would call Google Cloud Speech-to-Text API or similar
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock analysis results
    const mockScore: PronunciationScore = {
      overall: Math.floor(Math.random() * 20) + 75, // 75-95
      accuracy: Math.floor(Math.random() * 20) + 75,
      fluency: Math.floor(Math.random() * 20) + 70,
      completeness: Math.floor(Math.random() * 15) + 80,
      feedback: [
        "Odličan izgovor vokala 'ä' i 'ö'",
        "Obrati pažnju na 'ch' zvuk - treba biti mekši",
        "Dobar ritam i intonacija rečenice"
      ],
      strengths: [
        "Jasna artikulacija vokala",
        "Dobra kontrola daha",
        "Prirodan tempo govora"
      ],
      improvements: [
        "Vežbaj 'ch' zvuk - kao hrskanje u grlu",
        "Naglasi kraju reči malo jače",
        "Obrati pažnju na dužinu vokala"
      ],
      phonemeScores: [
        { phoneme: "ch", score: 72 },
        { phoneme: "ä", score: 91 },
        { phoneme: "ö", score: 88 },
        { phoneme: "r", score: 85 },
        { phoneme: "sch", score: 79 }
      ]
    }

    setScore(mockScore)
    setIsAnalyzing(false)
    onComplete?.(mockScore)
  }

  const playAudio = () => {
    if (audioURL) {
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current = new Audio(audioURL)
        audioRef.current.onended = () => setIsPlaying(false)
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const reset = () => {
    if (audioURL) URL.revokeObjectURL(audioURL)
    setAudioURL(null)
    setScore(null)
    setIsPlaying(false)
    setRecordingTime(0)
    if (audioRef.current) {
      audioRef.current = null
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400"
    if (score >= 75) return "text-yellow-400"
    if (score >= 60) return "text-orange-400"
    return "text-red-400"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Odlično"
    if (score >= 75) return "Dobro"
    if (score >= 60) return "Zadovoljavajuće"
    return "Potrebna vežba"
  }

  return (
    <div className="space-y-6">
      {/* Text to pronounce */}
      <GlassCard className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30">
        <div className="flex items-center gap-2 mb-3">
          <Volume2 className="h-5 w-5 text-purple-400" />
          <h3 className="font-semibold text-white">Izgovori:</h3>
        </div>
        <p className="text-2xl font-bold text-white mb-2">{text}</p>
        <Button
          size="sm"
          variant="ghost"
          className="text-purple-400"
          onClick={() => {
            const utterance = new SpeechSynthesisUtterance(text)
            utterance.lang = 'de-DE'
            utterance.rate = 0.9
            speechSynthesis.speak(utterance)
          }}
        >
          <Play className="h-4 w-4 mr-2" />
          Poslušaj primer
        </Button>
      </GlassCard>

      {/* Recording controls */}
      <GlassCard className="p-6">
        <div className="flex flex-col items-center gap-4">
          {!audioURL ? (
            <>
              <motion.button
                onClick={isRecording ? stopRecording : startRecording}
                className={`relative h-24 w-24 rounded-full flex items-center justify-center transition-all ${
                  isRecording
                    ? 'bg-red-500 shadow-lg shadow-red-500/50'
                    : 'bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/50'
                }`}
                animate={isRecording ? { scale: [1, 1.05, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Mic className="h-10 w-10 text-white" />
                {isRecording && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-red-400"
                    animate={{ scale: [1, 1.5, 1.5], opacity: [1, 0, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                )}
              </motion.button>
              <div className="text-center">
                <p className="text-white font-medium mb-1">
                  {isRecording ? 'Snimanje...' : 'Klikni za snimanje'}
                </p>
                {isRecording && (
                  <p className="text-2xl font-bold text-red-400">
                    {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                  </p>
                )}
                {!isRecording && (
                  <p className="text-sm text-muted-foreground">
                    Pritisni mikrofon i izgovori rečenicu
                  </p>
                )}
              </div>
            </>
          ) : (
            <div className="w-full space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={isPlaying ? pauseAudio : playAudio}
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 mr-2" />
                  ) : (
                    <Play className="h-5 w-5 mr-2" />
                  )}
                  {isPlaying ? 'Pauziraj' : 'Reprodukuj'}
                </Button>
                <Button onClick={reset} variant="outline" size="lg">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  Ponovo
                </Button>
              </div>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Analysis results */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="h-6 w-6 text-purple-400 animate-spin" />
                <p className="text-white font-medium">Analiziram izgovor...</p>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {score && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Overall score */}
            <GlassCard className="p-6">
              <div className="text-center mb-6">
                <div className={`text-6xl font-bold mb-2 ${getScoreColor(score.overall)}`}>
                  {score.overall}%
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {getScoreLabel(score.overall)}
                </div>
                <p className="text-sm text-muted-foreground">Ukupna ocena izgovora</p>
              </div>

              {/* Detailed scores */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-1 ${getScoreColor(score.accuracy)}`}>
                    {score.accuracy}%
                  </div>
                  <div className="text-xs text-muted-foreground">Tačnost</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-1 ${getScoreColor(score.fluency)}`}>
                    {score.fluency}%
                  </div>
                  <div className="text-xs text-muted-foreground">Tečnost</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-1 ${getScoreColor(score.completeness)}`}>
                    {score.completeness}%
                  </div>
                  <div className="text-xs text-muted-foreground">Potpunost</div>
                </div>
              </div>
            </GlassCard>

            {/* Strengths */}
            <GlassCard className="p-6 border-green-500/30 bg-green-500/5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <h4 className="font-semibold text-white">Snage</h4>
              </div>
              <ul className="space-y-2">
                {score.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Improvements */}
            <GlassCard className="p-6 border-yellow-500/30 bg-yellow-500/5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-yellow-400" />
                <h4 className="font-semibold text-white">Za poboljšanje</h4>
              </div>
              <ul className="space-y-2">
                {score.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Phoneme scores */}
            <GlassCard className="p-6">
              <h4 className="font-semibold text-white mb-4">Ocena po fonemama</h4>
              <div className="space-y-3">
                {score.phonemeScores.map((item) => (
                  <div key={item.phoneme}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono font-bold text-white">{item.phoneme}</span>
                      <span className={`font-bold ${getScoreColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          item.score >= 90 ? 'bg-green-500' :
                          item.score >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.score}%` }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

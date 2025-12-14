"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Play, Pause, RotateCcw, Zap, Music, Layers, Mic, Square, Volume2, Check, X, MessageCircle, User, AlertCircle, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ListenRecordProps {
  text: string
  onComplete: () => void
}

export function ListenRecord({ text, onComplete }: ListenRecordProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const playOriginal = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Error accessing microphone:", err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
    }
  }

  const playRecording = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl)
      audio.onended = () => setIsPlaying(false)
      audio.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="space-y-8 text-center">
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-3xl font-bold text-white mb-4">{text}</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={playOriginal}
          className="text-german-gold hover:text-german-gold/80"
        >
          <Volume2 className="w-5 h-5 mr-2" />
          Poslušaj original
        </Button>
      </div>

      <div className="flex justify-center gap-4">
        {!audioUrl ? (
          <Button
            size="lg"
            className={cn(
              "w-24 h-24 rounded-full transition-all duration-300",
              isRecording 
                ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                : "bg-white/10 hover:bg-white/20"
            )}
            onClick={isRecording ? stopRecording : startRecording}
          >
            {isRecording ? (
              <Square className="w-10 h-10 text-white" />
            ) : (
              <Mic className="w-10 h-10 text-white" />
            )}
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button
              size="lg"
              className="w-24 h-24 rounded-full bg-german-gold text-black hover:bg-german-gold/90"
              onClick={playRecording}
              disabled={isPlaying}
            >
              {isPlaying ? (
                <Volume2 className="w-10 h-10 animate-pulse" />
              ) : (
                <Play className="w-10 h-10 ml-1" />
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-24 h-24 rounded-full border-white/20 hover:bg-white/10"
              onClick={() => setAudioUrl(null)}
            >
              <RotateCcw className="w-8 h-8" />
            </Button>
          </div>
        )}
      </div>

      {audioUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold h-12"
            onClick={onComplete}
          >
            Zadovoljan/na sam snimkom
          </Button>
        </motion.div>
      )}
    </div>
  )
}

interface RhymePlayerProps {
  title: string
  lyrics: { text: string; translation: string; time: number }[]
  onComplete: () => void
}

export function RhymePlayer({ title, lyrics, onComplete }: RhymePlayerProps) {
  const [currentLine, setCurrentLine] = useState(-1)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    setIsPlaying(true)
    setCurrentLine(0)
    
    // Simulate playing line by line
    let totalDelay = 0
    lyrics.forEach((line, index) => {
      setTimeout(() => {
        setCurrentLine(index)
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(line.text)
          utterance.lang = 'de-DE'
          utterance.rate = 0.9
          window.speechSynthesis.speak(utterance)
        }
      }, totalDelay * 1000)
      totalDelay += line.time
    })

    setTimeout(() => {
      setIsPlaying(false)
      onComplete()
    }, totalDelay * 1000 + 1000)
  }

  return (
    <div className="space-y-8 text-center max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-german-gold mb-8">{title}</h2>

      <div className="space-y-4 text-left">
        {lyrics.map((line, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: currentLine === i ? 1 : 0.5,
              scale: currentLine === i ? 1.05 : 1,
              x: currentLine === i ? 10 : 0
            }}
            className={cn(
              "p-4 rounded-xl transition-colors",
              currentLine === i ? "bg-white/10 border border-german-gold/30" : "bg-transparent"
            )}
          >
            <p className="text-lg font-medium text-white">{line.text}</p>
            {currentLine === i && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground mt-1"
              >
                {line.translation}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full bg-german-gold text-black hover:bg-german-gold/90 font-bold mt-8"
        onClick={play}
        disabled={isPlaying}
      >
        {isPlaying ? (
          <Music className="w-5 h-5 animate-bounce mr-2" />
        ) : (
          <Play className="w-5 h-5 mr-2" />
        )}
        {isPlaying ? "Slušaj..." : "Pokreni brojalicu"}
      </Button>
    </div>
  )
}

interface SpeedDrillProps {
  text: string
  speeds: { speed: number; label: string }[]
  onComplete: () => void
}

export function SpeedDrill({ text, speeds, onComplete }: SpeedDrillProps) {
  const [currentSpeedIndex, setCurrentSpeedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.onend = () => {
        setIsPlaying(false)
        setProgress(100)
        if (currentSpeedIndex < speeds.length - 1) {
          setTimeout(() => {
            setCurrentSpeedIndex(prev => prev + 1)
            setProgress(0)
          }, 1000)
        } else {
          onComplete()
        }
      }
      utterance.onboundary = (event) => {
        // Approximate progress based on char index
        const len = text.length
        setProgress((event.charIndex / len) * 100)
      }
      utteranceRef.current = utterance
    }
  }, [text, speeds, currentSpeedIndex, onComplete])

  const play = () => {
    if (utteranceRef.current) {
      window.speechSynthesis.cancel()
      utteranceRef.current.rate = speeds[currentSpeedIndex].speed
      window.speechSynthesis.speak(utteranceRef.current)
      setIsPlaying(true)
    }
  }

  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center gap-2 mb-8">
        {speeds.map((s, i) => (
          <div
            key={i}
            className={cn(
              "h-2 flex-1 rounded-full transition-all duration-300",
              i <= currentSpeedIndex ? "bg-german-gold" : "bg-white/10",
              i === currentSpeedIndex && isPlaying && "animate-pulse"
            )}
          />
        ))}
      </div>

      <div className="relative py-12">
        <motion.div
          key={currentSpeedIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl font-bold text-white"
        >
          {text}
        </motion.div>
        <div className="mt-4 text-german-gold font-medium uppercase tracking-widest text-sm">
          {speeds[currentSpeedIndex].label}
        </div>
      </div>

      <Button
        size="lg"
        className="w-24 h-24 rounded-full bg-german-gold text-black hover:bg-german-gold/90"
        onClick={play}
        disabled={isPlaying}
      >
        {isPlaying ? (
          <Zap className="w-10 h-10 animate-pulse" />
        ) : (
          <Play className="w-10 h-10 ml-1" />
        )}
      </Button>
    </div>
  )
}

interface BackChainingProps {
  syllables: string[]
  fullText: string
  onComplete: () => void
}

export function BackChaining({ syllables, fullText, onComplete }: BackChainingProps) {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const currentText = syllables.slice(syllables.length - 1 - step).join("")

  const play = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(currentText)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      utterance.onend = () => {
        setIsPlaying(false)
        if (step < syllables.length - 1) {
          setTimeout(() => setStep(s => s + 1), 1000)
        } else {
          onComplete()
        }
      }
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
    }
  }

  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-8">
        <Layers className="w-4 h-4" />
        <span>Izgovor od kraja ka početku</span>
      </div>

      <div className="h-40 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-4xl font-bold"
          >
            <span className="text-white/30">
              {syllables.slice(0, syllables.length - 1 - step).join("")}
            </span>
            <span className="text-german-gold">
              {currentText}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        size="lg"
        className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
        onClick={play}
        disabled={isPlaying}
      >
        {isPlaying ? (
          <Music className="w-8 h-8 animate-bounce" />
        ) : (
          <Play className="w-8 h-8 ml-1" />
        )}
      </Button>
    </div>
  )
}

interface RhythmPracticeProps {
  text: string
  pattern: string // e.g. ". - ." (short long short)
  onComplete: () => void
}

export function RhythmPractice({ text, pattern, onComplete }: RhythmPracticeProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.9
      utterance.onend = () => {
        setIsPlaying(false)
        onComplete()
      }
      window.speechSynthesis.speak(utterance)
      setIsPlaying(true)
    }
  }

  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center gap-4 mb-12">
        {pattern.split(" ").map((beat, i) => (
          <motion.div
            key={i}
            animate={isPlaying ? {
              scale: [1, beat === "-" ? 1.5 : 1.2, 1],
              opacity: [0.5, 1, 0.5]
            } : {}}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.3,
              repeat: isPlaying ? Infinity : 0 
            }}
            className={cn(
              "rounded-full bg-german-gold",
              beat === "-" ? "w-8 h-8" : "w-4 h-4 mt-2"
            )}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">{text}</h2>
      
      <Button
        size="lg"
        className="w-full max-w-xs mx-auto bg-german-gold text-black hover:bg-german-gold/90 font-bold"
        onClick={play}
        disabled={isPlaying}
      >
        <Play className="w-4 h-4 mr-2" />
        Slušaj ritam
      </Button>
    </div>
  )
}

interface MinimalPairsProps {
  pairs: { text: string; isCorrect: boolean; soundText: string }[]
  onComplete: () => void
}

export function MinimalPairs({ pairs, onComplete }: MinimalPairsProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleSelect = (index: number) => {
    if (hasAnswered) return
    setSelected(index)
    setHasAnswered(true)
    
    const isCorrect = pairs[index].isCorrect
    if (isCorrect) {
      setTimeout(onComplete, 1500)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
      {pairs.map((pair, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelect(index)}
          className={cn(
            "h-32 rounded-xl border-2 flex flex-col items-center justify-center gap-4 transition-colors",
            hasAnswered && selected === index
              ? pair.isCorrect
                ? "bg-green-500/20 border-green-500"
                : "bg-red-500/20 border-red-500"
              : "bg-card border-border hover:border-german-gold"
          )}
        >
          <span className="text-2xl font-bold">{pair.text}</span>
          <Button
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation()
              playSound(pair.soundText)
            }}
          >
            <Volume2 className="w-4 h-4" />
          </Button>
          {hasAnswered && selected === index && (
            <div className={cn(
              "absolute top-2 right-2 rounded-full p-1",
              pair.isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
            )}>
              {pair.isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </div>
          )}
        </motion.button>
      ))}
    </div>
  )
}

interface SentenceBuilderProps {
  segments: string[]
  correctAnswer: string
  onComplete: () => void
}

export function SentenceBuilder({ segments, correctAnswer, onComplete }: SentenceBuilderProps) {
  const [availableSegments, setAvailableSegments] = useState(segments)
  const [builtSentence, setBuiltSentence] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleAddSegment = (segment: string, index: number) => {
    const newAvailable = [...availableSegments]
    newAvailable.splice(index, 1)
    setAvailableSegments(newAvailable)
    setBuiltSentence([...builtSentence, segment])
    setIsCorrect(null)
  }

  const handleRemoveSegment = (segment: string, index: number) => {
    const newBuilt = [...builtSentence]
    newBuilt.splice(index, 1)
    setBuiltSentence(newBuilt)
    setAvailableSegments([...availableSegments, segment])
    setIsCorrect(null)
  }

  const checkAnswer = () => {
    const sentence = builtSentence.join(" ")
    if (sentence === correctAnswer) {
      setIsCorrect(true)
      setTimeout(onComplete, 1500)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="min-h-[100px] p-6 rounded-xl bg-card border-2 border-dashed border-border flex flex-wrap gap-2 items-center justify-center">
        {builtSentence.length === 0 && (
          <span className="text-muted-foreground">Klikni na reči da sastaviš rečenicu...</span>
        )}
        <AnimatePresence>
          {builtSentence.map((segment, index) => (
            <motion.button
              key={`${segment}-${index}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => handleRemoveSegment(segment, index)}
              className="px-4 py-2 rounded-lg bg-german-gold text-black font-medium hover:bg-german-gold/80"
            >
              {segment}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {availableSegments.map((segment, index) => (
          <motion.button
            key={`${segment}-${index}`}
            layoutId={`segment-${segment}-${index}`}
            onClick={() => handleAddSegment(segment, index)}
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 border border-border"
          >
            {segment}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={checkAnswer}
          disabled={builtSentence.length === 0}
          className={cn(
            "w-full max-w-xs font-bold transition-colors",
            isCorrect === true && "bg-green-500 hover:bg-green-600",
            isCorrect === false && "bg-red-500 hover:bg-red-600"
          )}
        >
          {isCorrect === true ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Tačno!
            </>
          ) : isCorrect === false ? (
            <>
              <X className="w-4 h-4 mr-2" />
              Pokušaj ponovo
            </>
          ) : (
            "Proveri"
          )}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            setAvailableSegments(segments)
            setBuiltSentence([])
            setIsCorrect(null)
          }}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

interface DialogueProps {
  lines: { 
    speaker: string; 
    text: string; 
    translation: string; 
    audio?: string; 
    isUser?: boolean; 
    options?: { text: string; isCorrect: boolean; feedback?: string }[] 
  }[]
  onComplete: () => void
}

export function Dialogue({ lines, onComplete }: DialogueProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [history, setHistory] = useState<number[]>([]) // Indices of lines to show
  const [showOptions, setShowOptions] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)

  const currentLine = lines[currentLineIndex]
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, showOptions])

  useEffect(() => {
    // Auto-advance or show options
    if (!history.includes(currentLineIndex)) {
      const timer = setTimeout(() => {
        setHistory(prev => [...prev, currentLineIndex])
        playAudio(currentLine.text)
        
        if (currentLine.isUser) {
          setShowOptions(true)
        } else {
          // Auto advance after delay if not user turn
          setTimeout(() => {
            if (currentLineIndex < lines.length - 1) {
              setCurrentLineIndex(prev => prev + 1)
            } else {
              setTimeout(onComplete, 2000)
            }
          }, Math.max(2000, currentLine.text.length * 50))
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, currentLine, history, lines.length, onComplete])

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleOptionSelect = (option: { text: string; isCorrect: boolean; feedback?: string }) => {
    if (option.isCorrect) {
      setFeedback(null)
      setShowOptions(false)
      
      if (currentLineIndex < lines.length - 1) {
        setCurrentLineIndex(prev => prev + 1)
      } else {
        setTimeout(onComplete, 2000)
      }
    } else {
      setFeedback(option.feedback || "Pokušaj ponovo.")
    }
  }

  return (
    <div className="flex flex-col h-[500px] max-w-2xl mx-auto bg-card/50 rounded-xl border border-white/10 overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {history.map((index) => {
          const line = lines[index]
          const isMe = line.speaker === "Me" || line.isUser
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-3 max-w-[80%]",
                isMe ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                isMe ? "bg-german-gold text-black" : "bg-blue-500 text-white"
              )}>
                {isMe ? <User className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
              </div>
              <div className={cn(
                "p-3 rounded-2xl text-sm",
                isMe 
                  ? "bg-german-gold/20 text-german-gold rounded-tr-none" 
                  : "bg-blue-500/20 text-blue-100 rounded-tl-none"
              )}>
                <p className="font-medium mb-1 text-xs opacity-70">{line.speaker}</p>
                <p className="text-lg">{line.text}</p>
                <p className="text-xs opacity-50 mt-1 border-t border-white/10 pt-1">{line.translation}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="p-4 bg-black/20 border-t border-white/10 min-h-[100px]">
        {showOptions ? (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-2 text-center">Izaberi odgovor:</p>
            <div className="grid gap-2">
              {currentLine.options?.map((option, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleOptionSelect(option)}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-colors flex justify-between items-center group"
                >
                  <span>{option.text}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-german-gold">
                    <Check className="w-4 h-4" />
                  </span>
                </motion.button>
              ))}
            </div>
            {feedback && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center mt-2"
              >
                {feedback}
              </motion.p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            {currentLineIndex >= lines.length ? "Razgovor završen" : "Slušaj..."}
          </div>
        )}
      </div>
    </div>
  )
}

interface WordBuildProps {
  letters: string[]
  correctAnswer: string
  onComplete: () => void
}

export function WordBuild({ letters, correctAnswer, onComplete }: WordBuildProps) {
  const [availableLetters, setAvailableLetters] = useState<{id: string, char: string}[]>(
    letters.map((char, i) => ({ id: `${char}-${i}`, char }))
  )
  const [builtWord, setBuiltWord] = useState<{id: string, char: string}[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleAddLetter = (item: {id: string, char: string}) => {
    setAvailableLetters(prev => prev.filter(l => l.id !== item.id))
    setBuiltWord(prev => [...prev, item])
    setIsCorrect(null)
  }

  const handleRemoveLetter = (item: {id: string, char: string}) => {
    setBuiltWord(prev => prev.filter(l => l.id !== item.id))
    setAvailableLetters(prev => [...prev, item])
    setIsCorrect(null)
  }

  const checkAnswer = () => {
    const word = builtWord.map(l => l.char).join("")
    if (word === correctAnswer) {
      setIsCorrect(true)
      setTimeout(onComplete, 1500)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Built Word Area */}
      <div className="min-h-[100px] p-6 rounded-xl bg-card border-2 border-dashed border-border flex flex-wrap gap-2 items-center justify-center">
        {builtWord.length === 0 && (
          <span className="text-muted-foreground">Klikni na slova da sastaviš reč...</span>
        )}
        <AnimatePresence>
          {builtWord.map((item) => (
            <motion.button
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => handleRemoveLetter(item)}
              className="w-12 h-12 rounded-lg bg-german-gold text-black font-bold text-xl hover:bg-german-gold/80 shadow-lg"
            >
              {item.char}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Available Letters */}
      <div className="flex flex-wrap gap-3 justify-center">
        {availableLetters.map((item) => (
          <motion.button
            key={item.id}
            layoutId={item.id}
            onClick={() => handleAddLetter(item)}
            className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground font-bold text-xl hover:bg-secondary/80 border border-border shadow-sm"
          >
            {item.char}
          </motion.button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={checkAnswer}
          disabled={builtWord.length === 0}
          className={cn(
            "w-full max-w-xs font-bold transition-colors",
            isCorrect === true && "bg-green-500 hover:bg-green-600",
            isCorrect === false && "bg-red-500 hover:bg-red-600"
          )}
        >
          {isCorrect === true ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Tačno!
            </>
          ) : isCorrect === false ? (
            <>
              <X className="w-4 h-4 mr-2" />
              Pokušaj ponovo
            </>
          ) : (
            "Proveri"
          )}
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => {
            setAvailableLetters(letters.map((char, i) => ({ id: `${char}-${i}`, char })))
            setBuiltWord([])
            setIsCorrect(null)
          }}
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

// ==========================================
// ERROR CORRECTION COMPONENT
// ==========================================
interface ErrorCorrectionProps {
  sentence: string
  errorPosition: number
  correctAnswer: string
  onComplete: () => void
}

export function ErrorCorrection({ sentence, errorPosition, correctAnswer, onComplete }: ErrorCorrectionProps) {
  const words = sentence.split(" ")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [correction, setCorrection] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showInput, setShowInput] = useState(false)

  const handleWordClick = (index: number) => {
    setSelectedIndex(index)
    setShowInput(true)
    setCorrection("")
    setIsCorrect(null)
  }

  const checkCorrection = () => {
    if (selectedIndex === errorPosition && correction.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setIsCorrect(true)
      setTimeout(onComplete, 1500)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center mb-4">
        <AlertCircle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
        <p className="text-muted-foreground">Pronađi i ispravi grešku u rečenici</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center p-6 bg-card rounded-xl border border-border">
        {words.map((word, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWordClick(index)}
            className={cn(
              "px-4 py-2 rounded-lg font-medium text-lg transition-colors",
              selectedIndex === index
                ? isCorrect === true
                  ? "bg-green-500 text-white"
                  : isCorrect === false
                    ? "bg-red-500 text-white"
                    : "bg-german-gold text-black"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            {word}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <p className="text-center text-muted-foreground">
              Unesite ispravnu reč za: <span className="text-german-gold font-bold">{words[selectedIndex!]}</span>
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="text"
                value={correction}
                onChange={(e) => setCorrection(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && checkCorrection()}
                placeholder="Ispravna reč..."
                className="flex-1 px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-german-gold/50 outline-none text-lg"
                autoFocus
              />
              <Button onClick={checkCorrection} className="bg-german-gold text-black hover:bg-german-gold/90">
                <Check className="w-5 h-5" />
              </Button>
            </div>
            {isCorrect === false && (
              <p className="text-red-400 text-center text-sm">
                {selectedIndex !== errorPosition ? "To nije pogrešna reč. Pokušaj ponovo." : "Netačna ispravka. Pokušaj ponovo."}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ==========================================
// CONJUGATION COMPONENT
// ==========================================
interface ConjugationProps {
  verb: string
  pronoun: string
  tense: string
  correctAnswer: string
  onComplete: () => void
}

export function Conjugation({ verb, pronoun, tense, correctAnswer, onComplete }: ConjugationProps) {
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const checkAnswer = () => {
    if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
      setIsCorrect(true)
      setTimeout(onComplete, 1500)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div className="space-y-8 max-w-lg mx-auto text-center">
      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">{tense}</p>
        <div className="flex items-center justify-center gap-4">
          <span className="text-3xl font-bold text-german-gold">{pronoun}</span>
          <span className="text-3xl text-muted-foreground">+</span>
          <span className="text-3xl font-bold text-white">{verb}</span>
        </div>
      </div>

      <div className="p-6 bg-card rounded-xl border border-border">
        <p className="text-muted-foreground mb-4">Konjugiraj glagol:</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-2xl font-medium">{pronoun}</span>
          <input
            type="text"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); setIsCorrect(null) }}
            onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            placeholder="..."
            className={cn(
              "w-40 px-4 py-3 rounded-lg bg-black/20 border text-center text-2xl font-bold outline-none transition-colors",
              isCorrect === true ? "border-green-500 text-green-400" :
              isCorrect === false ? "border-red-500 text-red-400" :
              "border-white/10 focus:border-german-gold/50"
            )}
            autoFocus
          />
        </div>
      </div>

      <Button
        size="lg"
        onClick={checkAnswer}
        disabled={!answer}
        className={cn(
          "w-full max-w-xs font-bold",
          isCorrect === true && "bg-green-500 hover:bg-green-600",
          isCorrect === false && "bg-red-500 hover:bg-red-600"
        )}
      >
        {isCorrect === true ? "Tačno!" : isCorrect === false ? "Pokušaj ponovo" : "Proveri"}
      </Button>
    </div>
  )
}

// ==========================================
// CLOZE TEST COMPONENT
// ==========================================
interface ClozeTestProps {
  sentence: string
  blankIndices: number[]
  wordBank: string[]
  onComplete: () => void
}

export function ClozeTest({ sentence, blankIndices, wordBank, onComplete }: ClozeTestProps) {
  const words = sentence.split(" ")
  const [filledBlanks, setFilledBlanks] = useState<Record<number, string>>({})
  const [availableWords, setAvailableWords] = useState(wordBank)
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleWordSelect = (word: string) => {
    const nextBlank = blankIndices.find(i => !filledBlanks[i])
    if (nextBlank !== undefined) {
      setFilledBlanks(prev => ({ ...prev, [nextBlank]: word }))
      setAvailableWords(prev => prev.filter(w => w !== word))
    }
  }

  const handleBlankClick = (index: number) => {
    const word = filledBlanks[index]
    if (word) {
      setFilledBlanks(prev => {
        const newBlanks = { ...prev }
        delete newBlanks[index]
        return newBlanks
      })
      setAvailableWords(prev => [...prev, word])
    }
  }

  const checkAnswers = () => {
    const allCorrect = blankIndices.every(i => filledBlanks[i] === words[i])
    setIsChecked(true)
    setIsCorrect(allCorrect)
    if (allCorrect) {
      setTimeout(onComplete, 1500)
    }
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="p-6 bg-card rounded-xl border border-border">
        <div className="flex flex-wrap gap-2 justify-center items-center text-xl">
          {words.map((word, index) => {
            if (blankIndices.includes(index)) {
              const filled = filledBlanks[index]
              return (
                <motion.button
                  key={index}
                  onClick={() => handleBlankClick(index)}
                  className={cn(
                    "min-w-[80px] px-4 py-2 rounded-lg border-2 border-dashed transition-colors",
                    filled
                      ? isChecked
                        ? filled === word
                          ? "bg-green-500/20 border-green-500 text-green-400"
                          : "bg-red-500/20 border-red-500 text-red-400"
                        : "bg-german-gold/20 border-german-gold text-german-gold"
                      : "bg-white/5 border-white/20 text-muted-foreground"
                  )}
                >
                  {filled || "___"}
                </motion.button>
              )
            }
            return <span key={index}>{word}</span>
          })}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {availableWords.map((word, i) => (
          <motion.button
            key={`${word}-${i}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWordSelect(word)}
            className="px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 font-medium"
          >
            {word}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={checkAnswers}
          disabled={Object.keys(filledBlanks).length !== blankIndices.length}
          className={cn(
            "w-full max-w-xs font-bold",
            isCorrect && "bg-green-500 hover:bg-green-600"
          )}
        >
          {isCorrect ? "Tačno!" : "Proveri"}
        </Button>
      </div>
    </div>
  )
}

// ==========================================
// STORY MODE COMPONENT
// ==========================================
interface StoryModeProps {
  title: string
  text: string
  questions: { question: string; options: string[]; correct: number }[]
  onComplete: () => void
}

export function StoryMode({ title, text, questions, onComplete }: StoryModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [isReading, setIsReading] = useState(true)

  const question = questions[currentQuestion]

  const playText = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === question.correct) {
      setCorrectCount(c => c + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(c => c + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      onComplete()
    }
  }

  if (isReading) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-german-gold" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="p-6 bg-card rounded-xl border border-border">
          <p className="text-lg leading-relaxed whitespace-pre-line">{text}</p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={playText}>
            <Volume2 className="w-4 h-4 mr-2" />
            Slušaj
          </Button>
          <Button className="bg-german-gold text-black hover:bg-german-gold/90" onClick={() => setIsReading(false)}>
            Nastavi na pitanja
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">
          Pitanje {currentQuestion + 1} od {questions.length}
        </span>
        <span className="text-sm text-green-400">
          Tačno: {correctCount}
        </span>
      </div>

      <div className="p-6 bg-card rounded-xl border border-border">
        <p className="text-xl font-medium mb-6">{question.question}</p>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: showResult ? 1 : 1.01 }}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 rounded-lg text-left transition-colors",
                showResult
                  ? index === question.correct
                    ? "bg-green-500/20 border-green-500 border"
                    : selectedAnswer === index
                      ? "bg-red-500/20 border-red-500 border"
                      : "bg-white/5 border-transparent border"
                  : "bg-white/5 hover:bg-white/10 border border-transparent"
              )}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>

      {showResult && (
        <Button 
          className="w-full bg-german-gold text-black hover:bg-german-gold/90"
          onClick={nextQuestion}
        >
          {currentQuestion < questions.length - 1 ? "Sledeće pitanje" : "Završi"}
        </Button>
      )}
    </div>
  )
}

// ============================================
// IMAGE ASSOCIATION - Match word with emoji/image
// ============================================
interface ImageAssociationProps {
  word: string
  options: { emoji: string; text: string; isCorrect: boolean }[]
  onComplete: () => void
}

export function ImageAssociation({ word, options, onComplete }: ImageAssociationProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const playWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleSelect = (index: number) => {
    if (showResult) return
    setSelected(index)
    setShowResult(true)
    
    if (options[index].isCorrect) {
      setTimeout(onComplete, 1500)
    }
  }

  useEffect(() => {
    playWord()
  }, [])

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={playWord}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-german-gold/20 to-german-red/20 rounded-xl border border-german-gold/30"
        >
          <Volume2 className="w-6 h-6 text-german-gold" />
          <span className="text-3xl font-bold">{word}</span>
        </motion.button>
        <p className="mt-2 text-sm text-muted-foreground">Klikni na sliku koja odgovara reči</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: showResult ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(index)}
            disabled={showResult}
            className={cn(
              "p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2",
              showResult
                ? option.isCorrect
                  ? "border-green-500 bg-green-500/20"
                  : selected === index
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/10 bg-white/5 opacity-50"
                : "border-white/10 bg-white/5 hover:border-german-gold/50 hover:bg-german-gold/10"
            )}
          >
            <span className="text-6xl">{option.emoji}</span>
            <span className="text-sm text-muted-foreground">{option.text}</span>
          </motion.button>
        ))}
      </div>

      {showResult && !options[selected!]?.isCorrect && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-red-400">Pokušaj ponovo!</p>
          <Button
            onClick={() => {
              setSelected(null)
              setShowResult(false)
            }}
            variant="outline"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Ponovi
          </Button>
        </motion.div>
      )}
    </div>
  )
}

// ============================================
// WORD CHAIN - Chain words by first/last letters
// ============================================
interface WordChainProps {
  startWord: string
  chainWords: string[]
  onComplete: () => void
}

export function WordChain({ startWord, chainWords, onComplete }: WordChainProps) {
  const [chain, setChain] = useState<string[]>([startWord])
  const [availableWords, setAvailableWords] = useState<string[]>(
    chainWords.sort(() => Math.random() - 0.5)
  )
  const [wrongAttempt, setWrongAttempt] = useState<string | null>(null)

  const lastLetter = chain[chain.length - 1].slice(-1).toLowerCase()

  const handleWordClick = (word: string) => {
    if (word[0].toLowerCase() === lastLetter) {
      setChain([...chain, word])
      setAvailableWords(availableWords.filter(w => w !== word))
      setWrongAttempt(null)
      
      if (availableWords.length === 1) {
        setTimeout(onComplete, 1000)
      }
    } else {
      setWrongAttempt(word)
      setTimeout(() => setWrongAttempt(null), 800)
    }
  }

  const playWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-2">Lanac reči</h3>
        <p className="text-sm text-muted-foreground">
          Pronađi reč koja počinje slovom <span className="text-german-gold font-bold text-lg">{lastLetter.toUpperCase()}</span>
        </p>
      </div>

      {/* Chain display */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-white/5 rounded-xl min-h-[80px]">
        {chain.map((word, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center"
          >
            <button
              onClick={() => playWord(word)}
              className="px-4 py-2 bg-gradient-to-r from-german-gold/30 to-german-red/30 rounded-lg font-medium hover:from-german-gold/50 hover:to-german-red/50 transition-colors"
            >
              {word}
            </button>
            {index < chain.length - 1 && (
              <span className="mx-1 text-german-gold">→</span>
            )}
          </motion.div>
        ))}
        {availableWords.length > 0 && (
          <span className="px-3 py-2 border-2 border-dashed border-german-gold/50 rounded-lg text-german-gold/50">
            {lastLetter.toUpperCase()}...?
          </span>
        )}
      </div>

      {/* Available words */}
      <div className="grid grid-cols-3 gap-3">
        {availableWords.map((word, index) => (
          <motion.button
            key={word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              x: wrongAttempt === word ? [0, -10, 10, -10, 0] : 0
            }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleWordClick(word)}
            className={cn(
              "p-3 rounded-lg border transition-colors",
              wrongAttempt === word
                ? "border-red-500 bg-red-500/20"
                : word[0].toLowerCase() === lastLetter
                  ? "border-green-500/30 bg-green-500/10 hover:bg-green-500/20"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
            )}
          >
            <span className="font-medium">{word}</span>
          </motion.button>
        ))}
      </div>

      {availableWords.length === 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center py-4"
        >
          <span className="text-4xl">🎉</span>
          <p className="text-green-400 font-semibold mt-2">Lanac kompletan!</p>
        </motion.div>
      )}
    </div>
  )
}

// ============================================
// MEMORY MATCH - Memory card matching game
// ============================================
interface MemoryCard {
  id: string
  content: string
  type: 'german' | 'translation'
  pairId: string
  isFlipped: boolean
  isMatched: boolean
}

interface MemoryMatchProps {
  pairs: { id: string; german: string; translation: string }[]
  onComplete: () => void
}

export function MemoryMatch({ pairs, onComplete }: MemoryMatchProps) {
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<string[]>([])
  const [moves, setMoves] = useState(0)
  const [isChecking, setIsChecking] = useState(false)

  useEffect(() => {
    // Create cards from pairs
    const newCards: MemoryCard[] = []
    pairs.forEach(pair => {
      newCards.push({
        id: `${pair.id}-de`,
        content: pair.german,
        type: 'german',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      })
      newCards.push({
        id: `${pair.id}-sr`,
        content: pair.translation,
        type: 'translation',
        pairId: pair.id,
        isFlipped: false,
        isMatched: false
      })
    })
    // Shuffle cards
    setCards(newCards.sort(() => Math.random() - 0.5))
  }, [pairs])

  const handleCardClick = (cardId: string) => {
    if (isChecking || flippedCards.length >= 2) return
    
    const card = cards.find(c => c.id === cardId)
    if (!card || card.isFlipped || card.isMatched) return

    const newFlipped = [...flippedCards, cardId]
    setFlippedCards(newFlipped)
    setCards(cards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c))

    if (newFlipped.length === 2) {
      setMoves(m => m + 1)
      setIsChecking(true)

      const [first, second] = newFlipped.map(id => cards.find(c => c.id === id)!)
      
      if (first.pairId === second.pairId && first.type !== second.type) {
        // Match!
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.pairId === first.pairId ? { ...c, isMatched: true } : c
          ))
          setFlippedCards([])
          setIsChecking(false)

          // Check if all matched
          const allMatched = cards.every(c => 
            c.pairId === first.pairId || c.isMatched
          )
          if (allMatched) {
            setTimeout(onComplete, 500)
          }
        }, 500)
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            newFlipped.includes(c.id) ? { ...c, isFlipped: false } : c
          ))
          setFlippedCards([])
          setIsChecking(false)
        }, 1000)
      }
    }
  }

  const playWord = (word: string, lang: 'de-DE' | 'sr-RS') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = lang
      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Memory igra</h3>
        <span className="text-sm text-muted-foreground">Potezi: {moves}</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => {
              if (card.isFlipped || card.isMatched) {
                playWord(card.content, card.type === 'german' ? 'de-DE' : 'sr-RS')
              } else {
                handleCardClick(card.id)
              }
            }}
            className={cn(
              "aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all",
              card.isMatched
                ? "bg-green-500/30 border-green-500"
                : card.isFlipped
                  ? card.type === 'german'
                    ? "bg-german-gold/20 border-german-gold"
                    : "bg-blue-500/20 border-blue-500"
                  : "bg-white/10 border-white/20 hover:bg-white/20"
            )}
            style={{ 
              minHeight: '70px',
              borderWidth: '2px'
            }}
            animate={{
              rotateY: card.isFlipped || card.isMatched ? 0 : 180,
              scale: card.isMatched ? [1, 1.1, 1] : 1
            }}
          >
            {(card.isFlipped || card.isMatched) ? (
              <span className="px-1 text-center break-words">{card.content}</span>
            ) : (
              <span className="text-2xl">❓</span>
            )}
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Pronađi parove: nemački ↔ prevod
      </p>
    </div>
  )
}

// ============================================
// TIMED CHALLENGE - Speed vocabulary challenge
// ============================================
interface TimedChallengeProps {
  words: { german: string; translation: string }[]
  timeLimit: number
  onComplete: () => void
}

export function TimedChallenge({ words, timeLimit, onComplete }: TimedChallengeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [score, setScore] = useState(0)
  const [input, setInput] = useState("")
  const [isGameOver, setIsGameOver] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft(t => t - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0) {
      setIsGameOver(true)
    }
  }, [timeLeft, isGameOver])

  useEffect(() => {
    inputRef.current?.focus()
  }, [currentIndex])

  const currentWord = words[currentIndex]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (input.toLowerCase().trim() === currentWord.translation.toLowerCase().trim()) {
      setScore(s => s + 1)
      setInput("")
      
      if (currentIndex < words.length - 1) {
        setCurrentIndex(i => i + 1)
      } else {
        setIsGameOver(true)
        setTimeout(onComplete, 2000)
      }
    } else {
      setShowAnswer(true)
      setTimeout(() => {
        setShowAnswer(false)
        setInput("")
        if (currentIndex < words.length - 1) {
          setCurrentIndex(i => i + 1)
        } else {
          setIsGameOver(true)
        }
      }, 1500)
    }
  }

  const playWord = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.german)
      utterance.lang = 'de-DE'
      window.speechSynthesis.speak(utterance)
    }
  }

  if (isGameOver) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-4"
      >
        <div className="text-6xl">
          {score === words.length ? "🏆" : score >= words.length / 2 ? "⭐" : "💪"}
        </div>
        <h3 className="text-2xl font-bold">Vreme je isteklo!</h3>
        <div className="space-y-2">
          <p className="text-xl">
            Rezultat: <span className="text-german-gold font-bold">{score}</span> / {words.length}
          </p>
          <p className="text-muted-foreground">
            {score === words.length 
              ? "Savršeno! 🎉" 
              : score >= words.length / 2 
                ? "Odlično! Nastavi tako!" 
                : "Nastavi vežbati!"}
          </p>
        </div>
        <Button onClick={onComplete} className="bg-german-gold text-black hover:bg-german-gold/90">
          Nastavi
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Timer and progress */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className={cn(
            "w-5 h-5",
            timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-german-gold"
          )} />
          <span className={cn(
            "text-xl font-bold",
            timeLeft <= 10 && "text-red-500"
          )}>
            {timeLeft}s
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {words.length}
        </span>
        <span className="text-green-400 font-semibold">
          ✓ {score}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-german-gold to-german-red"
          initial={{ width: '100%' }}
          animate={{ width: `${(timeLeft / timeLimit) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Word display */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center py-8"
      >
        <button
          onClick={playWord}
          className="text-4xl font-bold mb-2 hover:text-german-gold transition-colors"
        >
          {currentWord.german}
        </button>
        <p className="text-sm text-muted-foreground">Prevedi na srpski</p>
      </motion.div>

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Upiši prevod..."
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border-2 transition-colors outline-none",
              showAnswer 
                ? "border-red-500 bg-red-500/10"
                : "border-white/10 focus:border-german-gold"
            )}
            autoComplete="off"
            disabled={showAnswer}
          />
          {showAnswer && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-8 left-0 text-sm text-red-400"
            >
              Tačan odgovor: {currentWord.translation}
            </motion.p>
          )}
        </div>
      </form>
    </div>
  )
}

// ============================================
// AUDIO SENTENCE - Listen and repeat full sentence
// ============================================
interface AudioSentenceProps {
  sentence: string
  translation: string
  onComplete: () => void
}

export function AudioSentence({ sentence, translation, onComplete }: AudioSentenceProps) {
  const [step, setStep] = useState<'listen' | 'repeat' | 'done'>('listen')
  const [listenCount, setListenCount] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)

  const playSentence = (speed: number = 1) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(sentence)
      utterance.lang = 'de-DE'
      utterance.rate = speed
      window.speechSynthesis.speak(utterance)
      setListenCount(c => c + 1)
    }
  }

  const handleComplete = () => {
    setStep('done')
    setTimeout(onComplete, 1000)
  }

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Sentence display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-gradient-to-br from-german-gold/10 to-german-red/10 rounded-xl border border-german-gold/20"
      >
        <p className="text-2xl font-medium text-center leading-relaxed">
          {sentence}
        </p>
        
        {showTranslation && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-center text-muted-foreground mt-4 pt-4 border-t border-white/10"
          >
            {translation}
          </motion.p>
        )}
      </motion.div>

      {/* Controls */}
      <div className="space-y-4">
        {step === 'listen' && (
          <>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => playSentence(0.7)}
                variant="outline"
                className="flex-1"
              >
                🐢 Sporo
              </Button>
              <Button
                onClick={() => playSentence(1)}
                className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Slušaj
              </Button>
              <Button
                onClick={() => playSentence(1.2)}
                variant="outline"
                className="flex-1"
              >
                🐇 Brzo
              </Button>
            </div>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => setShowTranslation(!showTranslation)}
                variant="ghost"
                size="sm"
              >
                {showTranslation ? "Sakrij prevod" : "Pokaži prevod"}
              </Button>
            </div>

            {listenCount >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <Button
                  onClick={() => setStep('repeat')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Spreman za ponavljanje →
                </Button>
              </motion.div>
            )}
          </>
        )}

        {step === 'repeat' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <p className="text-center text-muted-foreground">
              Ponovi rečenicu naglas, zatim klikni &quot;Završi&quot;
            </p>
            
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => playSentence(0.8)}
                variant="outline"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                Slušaj ponovo
              </Button>
              <Button
                onClick={handleComplete}
                className="bg-german-gold text-black hover:bg-german-gold/90"
              >
                <Check className="w-4 h-4 mr-2" />
                Završi
              </Button>
            </div>
          </motion.div>
        )}

        {step === 'done' && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center py-4"
          >
            <span className="text-4xl">🎉</span>
            <p className="text-green-400 font-semibold mt-2">Odlično!</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ============================================
// WORD CATEGORIES - Sort words into categories
// ============================================
interface WordCategoriesProps {
  categories: { name: string; words: string[] }[]
  wordsToSort: string[]
  onComplete: () => void
}

export function WordCategories({ categories, wordsToSort, onComplete }: WordCategoriesProps) {
  const [remainingWords, setRemainingWords] = useState(
    wordsToSort.sort(() => Math.random() - 0.5)
  )
  const [sortedCategories, setSortedCategories] = useState<Record<string, string[]>>(
    Object.fromEntries(categories.map(c => [c.name, []]))
  )
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [wrongAttempt, setWrongAttempt] = useState<{ word: string; category: string } | null>(null)

  const handleCategoryClick = (categoryName: string) => {
    if (!selectedWord) return

    const category = categories.find(c => c.name === categoryName)
    if (!category) return

    if (category.words.includes(selectedWord)) {
      // Correct!
      setSortedCategories(prev => ({
        ...prev,
        [categoryName]: [...prev[categoryName], selectedWord]
      }))
      setRemainingWords(prev => prev.filter(w => w !== selectedWord))
      setSelectedWord(null)

      if (remainingWords.length === 1) {
        setTimeout(onComplete, 1000)
      }
    } else {
      // Wrong
      setWrongAttempt({ word: selectedWord, category: categoryName })
      setTimeout(() => setWrongAttempt(null), 800)
    }
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h3 className="text-center text-lg font-semibold">Sortiraj reči u kategorije</h3>

      {/* Words to sort */}
      <div className="flex flex-wrap gap-2 justify-center min-h-[60px] p-4 bg-white/5 rounded-xl">
        {remainingWords.map((word) => (
          <motion.button
            key={word}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedWord(selectedWord === word ? null : word)}
            className={cn(
              "px-4 py-2 rounded-lg transition-colors",
              selectedWord === word
                ? "bg-german-gold text-black"
                : "bg-white/10 hover:bg-white/20"
            )}
          >
            {word}
          </motion.button>
        ))}
        {remainingWords.length === 0 && (
          <span className="text-green-400">Sve reči su sortirane! 🎉</span>
        )}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            animate={{
              x: wrongAttempt?.category === category.name ? [0, -10, 10, -10, 0] : 0
            }}
            className={cn(
              "p-4 rounded-xl border-2 transition-colors min-h-[120px]",
              wrongAttempt?.category === category.name
                ? "border-red-500 bg-red-500/10"
                : selectedWord
                  ? "border-german-gold/50 bg-german-gold/10 hover:bg-german-gold/20 cursor-pointer"
                  : "border-white/10 bg-white/5"
            )}
          >
            <h4 className="font-semibold mb-2">{category.name}</h4>
            <div className="flex flex-wrap gap-1">
              {sortedCategories[category.name].map((word) => (
                <span
                  key={word}
                  className="px-2 py-1 text-sm bg-green-500/20 rounded text-green-400"
                >
                  {word}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground">
        {selectedWord ? "Klikni na kategoriju" : "Izaberi reč za sortiranje"}
      </p>
    </div>
  )
}

// ============================================
// PICTURE DESCRIPTION - Describe what you see
// ============================================
interface PictureDescriptionProps {
  emoji: string
  correctWords: string[]
  hint: string
  onComplete: () => void
}

export function PictureDescription({ emoji, correctWords, hint, onComplete }: PictureDescriptionProps) {
  const [input, setInput] = useState("")
  const [attempts, setAttempts] = useState<{ word: string; correct: boolean }[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [showHint, setShowHint] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = input.toLowerCase().trim()
    
    if (!trimmed || foundWords.includes(trimmed)) {
      setInput("")
      return
    }

    const isCorrect = correctWords.some(w => 
      w.toLowerCase() === trimmed || 
      trimmed.includes(w.toLowerCase())
    )

    setAttempts([...attempts, { word: trimmed, correct: isCorrect }])
    
    if (isCorrect) {
      setFoundWords([...foundWords, trimmed])
      if (foundWords.length + 1 >= correctWords.length) {
        setTimeout(onComplete, 1500)
      }
    }
    
    setInput("")
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Picture */}
      <div className="text-center">
        <div className="text-9xl mb-4">{emoji}</div>
        <p className="text-muted-foreground">Opiši šta vidiš na nemačkom</p>
      </div>

      {/* Progress */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">
          Pronađeno: {foundWords.length} / {correctWords.length}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowHint(!showHint)}
        >
          {showHint ? "Sakrij pomoć" : "Pomoć"}
        </Button>
      </div>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm"
        >
          💡 {hint}
        </motion.div>
      )}

      {/* Found words */}
      {foundWords.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {foundWords.map((word, i) => (
            <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
              ✓ {word}
            </span>
          ))}
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Upiši reč..."
            className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-german-gold outline-none"
            autoComplete="off"
          />
          <Button type="submit" className="bg-german-gold text-black hover:bg-german-gold/90">
            →
          </Button>
        </div>
      </form>

      {/* Recent attempts */}
      <div className="flex flex-wrap gap-2">
        {attempts.slice(-5).map((attempt, i) => (
          <span
            key={i}
            className={cn(
              "px-2 py-1 text-sm rounded",
              attempt.correct ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
            )}
          >
            {attempt.word}
          </span>
        ))}
      </div>
    </div>
  )
}

// ============================================
// DICTATION - Listen and write what you hear
// ============================================
interface DictationProps {
  sentence: string
  translation: string
  onComplete: () => void
}

export function Dictation({ sentence, translation, onComplete }: DictationProps) {
  const [input, setInput] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [accuracy, setAccuracy] = useState(0)
  const [playCount, setPlayCount] = useState(0)

  const playSentence = (speed: number = 1) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(sentence)
      utterance.lang = 'de-DE'
      utterance.rate = speed
      window.speechSynthesis.speak(utterance)
      setPlayCount(c => c + 1)
    }
  }

  const checkAnswer = () => {
    const normalize = (s: string) => s.toLowerCase().replace(/[.,!?]/g, '').trim()
    const original = normalize(sentence).split(' ')
    const attempt = normalize(input).split(' ')
    
    let correct = 0
    original.forEach((word, i) => {
      if (attempt[i] === word) correct++
    })
    
    const acc = Math.round((correct / original.length) * 100)
    setAccuracy(acc)
    setShowResult(true)

    if (acc >= 80) {
      setTimeout(onComplete, 2000)
    }
  }

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6 max-w-lg mx-auto"
      >
        <div className="text-center">
          <div className="text-5xl mb-4">
            {accuracy === 100 ? "🎉" : accuracy >= 80 ? "👍" : accuracy >= 50 ? "💪" : "📝"}
          </div>
          <h3 className="text-2xl font-bold">
            Tačnost: <span className={cn(
              accuracy >= 80 ? "text-green-400" : accuracy >= 50 ? "text-yellow-400" : "text-red-400"
            )}>{accuracy}%</span>
          </h3>
        </div>

        <div className="space-y-3">
          <div className="p-4 bg-white/5 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Tvoj pokušaj:</p>
            <p>{input || "(prazno)"}</p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Tačna rečenica:</p>
            <p className="text-green-400">{sentence}</p>
            <p className="text-sm text-muted-foreground mt-2">{translation}</p>
          </div>
        </div>

        {accuracy < 80 && (
          <Button
            onClick={() => {
              setInput("")
              setShowResult(false)
            }}
            variant="outline"
            className="w-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" /> Pokušaj ponovo
          </Button>
        )}
      </motion.div>
    )
  }

  return (
    <div className="space-y-6 max-w-lg mx-auto">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Diktat</h3>
        <p className="text-muted-foreground">Slušaj pažljivo i napiši šta čuješ</p>
      </div>

      {/* Play buttons */}
      <div className="flex gap-3 justify-center">
        <Button
          onClick={() => playSentence(0.6)}
          variant="outline"
          className="flex-1"
        >
          🐢 Sporo
        </Button>
        <Button
          onClick={() => playSentence(1)}
          className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
        >
          <Volume2 className="w-4 h-4 mr-2" />
          Slušaj {playCount > 0 && `(${playCount})`}
        </Button>
        <Button
          onClick={() => playSentence(1.2)}
          variant="outline"
          className="flex-1"
        >
          🐇 Brzo
        </Button>
      </div>

      {/* Textarea */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Napiši šta si čuo/la..."
        rows={4}
        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-german-gold outline-none resize-none"
      />

      <Button
        onClick={checkAnswer}
        disabled={!input.trim()}
        className="w-full bg-green-600 hover:bg-green-700"
      >
        <Check className="w-4 h-4 mr-2" /> Proveri
      </Button>
    </div>
  )
}

// ============================================
// CASE PRACTICE - German case practice
// ============================================
interface CasePracticeProps {
  caseName: string
  noun: string
  options: { article: string; isCorrect: boolean }[]
  explanation: string
  onComplete: () => void
}

export function CasePractice({ caseName, noun, options, explanation, onComplete }: CasePracticeProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (article: string, isCorrect: boolean) => {
    setSelected(article)
    setShowResult(true)
    
    if (isCorrect) {
      setTimeout(onComplete, 1500)
    }
  }

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <div className="text-center">
        <span className="px-3 py-1 bg-german-gold/20 text-german-gold rounded-full text-sm font-medium">
          {caseName}
        </span>
        <h3 className="text-2xl font-bold mt-4">
          ___ <span className="text-german-gold">{noun}</span>
        </h3>
        <p className="text-muted-foreground mt-2">Izaberi tačan član</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <motion.button
            key={option.article}
            whileHover={{ scale: showResult ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => !showResult && handleSelect(option.article, option.isCorrect)}
            disabled={showResult}
            className={cn(
              "py-4 px-6 rounded-xl border-2 text-xl font-medium transition-colors",
              showResult
                ? option.isCorrect
                  ? "border-green-500 bg-green-500/20"
                  : selected === option.article
                    ? "border-red-500 bg-red-500/20"
                    : "border-white/10 bg-white/5 opacity-50"
                : "border-white/10 bg-white/5 hover:border-german-gold/50"
            )}
          >
            {option.article}
          </motion.button>
        ))}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "p-4 rounded-lg",
            options.find(o => o.article === selected)?.isCorrect
              ? "bg-green-500/10 border border-green-500/30"
              : "bg-red-500/10 border border-red-500/30"
          )}
        >
          <p className="text-sm">{explanation}</p>
        </motion.div>
      )}

      {showResult && !options.find(o => o.article === selected)?.isCorrect && (
        <Button
          onClick={() => {
            setSelected(null)
            setShowResult(false)
          }}
          variant="outline"
          className="w-full"
        >
          <RotateCcw className="w-4 h-4 mr-2" /> Pokušaj ponovo
        </Button>
      )}
    </div>
  )
}

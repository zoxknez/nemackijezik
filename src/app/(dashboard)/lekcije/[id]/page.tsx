"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  CheckCircle2, 
  XCircle,
  Lightbulb,
  Star,
  Trophy,
  Heart,
  RefreshCw,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LevelBadge } from "@/components/ui/badge"
import Link from "next/link"
import { lessons } from "@/data/lessons"
import { cn } from "@/lib/utils"
import { playSynthCorrect, playSynthWrong } from "@/lib/sounds"
import { SpeedDrill, BackChaining, RhythmPractice, ListenRecord, RhymePlayer, MinimalPairs, SentenceBuilder, Dialogue, WordBuild, ErrorCorrection, Conjugation, ClozeTest, StoryMode, ImageAssociation, WordChain, MemoryMatch, TimedChallenge, AudioSentence, WordCategories, PictureDescription, Dictation, CasePractice } from "@/components/lesson/special-exercises"

export default function LessonPage() {
  const params = useParams()
  const lessonId = params.id as string
  
  const lessonData = lessons.find(l => l.id === lessonId)

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [lives, setLives] = useState(3)
  const [xpEarned, setXpEarned] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [streak, setStreak] = useState(0)
  
  // New states for Learn/Flashcard
  const [isFlipped, setIsFlipped] = useState(false)
  
  // Matching game state
  const [matchingPairs, setMatchingPairs] = useState<{id: string, text: string, type: 'de' | 'sr', matched: boolean}[]>([])
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null)

  useEffect(() => {
    if (!lessonData) return

    const exercise = lessonData.exercises[currentExerciseIndex]
    if (exercise?.type === 'matching' && exercise.pairs) {
      const pairs = exercise.pairs.flatMap((p, i) => [
        { id: `de-${i}`, text: p.de, type: 'de' as const, matched: false },
        { id: `sr-${i}`, text: p.sr, type: 'sr' as const, matched: false }
      ]).sort(() => Math.random() - 0.5)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMatchingPairs(pairs)
    }
  }, [currentExerciseIndex, lessonData])

  if (!lessonData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-2xl font-bold mb-4">Lekcija nije pronađena</h1>
        <Link href="/lekcije">
          <Button>Nazad na lekcije</Button>
        </Link>
      </div>
    )
  }

  const exercise = lessonData.exercises[currentExerciseIndex]
  const progress = ((currentExerciseIndex + (showResult && isCorrect ? 1 : 0)) / lessonData.exercises.length) * 100

  const handleMatchClick = (id: string) => {
    if (showResult) return
    
    if (!selectedMatch) {
      setSelectedMatch(id)
    } else {
      if (selectedMatch === id) {
        setSelectedMatch(null)
        return
      }

      const first = matchingPairs.find(p => p.id === selectedMatch)
      const second = matchingPairs.find(p => p.id === id)

      if (first && second && first.type !== second.type) {
        // Check if they are a pair (based on index in ID)
        const firstIdx = first.id.split('-')[1]
        const secondIdx = second.id.split('-')[1]

        if (firstIdx === secondIdx) {
          // Match found
          setMatchingPairs(prev => prev.map(p => 
            (p.id === first.id || p.id === second.id) ? { ...p, matched: true } : p
          ))
          setSelectedMatch(null)
          
          // Check if all matched
          const allMatched = matchingPairs.filter(p => !p.matched).length <= 2
          if (allMatched) {
            setIsCorrect(true)
            setShowResult(true)
            setStreak(s => s + 1)
            setXpEarned(xp => xp + 10 + (streak >= 2 ? 5 : 0))
          }
        } else {
          // Wrong match
          setLives(l => Math.max(0, l - 1))
          setStreak(0)
          setSelectedMatch(null)
          
          // Visual feedback could be added here
        }
      } else {
        setSelectedMatch(id)
      }
    }
  }

  const checkAnswer = () => {
    let correct = false
    
    if (exercise.type === "learn-card" || exercise.type === "flashcard" || 
        exercise.type === "speed-drill" || exercise.type === "back-chaining" || 
        exercise.type === "rhythm-practice" || exercise.type === "listen-record" ||
        exercise.type === "minimal-pairs" || exercise.type === "sentence-builder" ||
        exercise.type === "dialogue" || exercise.type === "word-build" ||
        exercise.type === "error-correction" || exercise.type === "conjugation" ||
        exercise.type === "cloze-test" || exercise.type === "story-mode" ||
        exercise.type === "image-association" || exercise.type === "word-chain" ||
        exercise.type === "memory-match" || exercise.type === "timed-challenge" ||
        exercise.type === "audio-sentence" || exercise.type === "word-categories" ||
        exercise.type === "picture-description" || exercise.type === "dictation" ||
        exercise.type === "case-practice") {
      // These types are always "correct" when completed
      correct = true
    } else if (exercise.type === "multiple-choice" || (exercise.type === "listening" && exercise.options) || exercise.type === "gender-game") {
      correct = selectedOption === exercise.correctAnswer
    } else if (exercise.type === "translation" || exercise.type === "fill-blank" || exercise.type === "vocabulary" || (exercise.type === "listening" && !exercise.options)) {
      const correctAnswerValue = exercise.correctAnswer || ""
      const answers = Array.isArray(correctAnswerValue) ? correctAnswerValue : [correctAnswerValue]
      correct = answers.some(a => 
        a && a.toLowerCase().trim() === answer.toLowerCase().trim()
      )
    } else if (exercise.type === "matching") {
      // Handled in handleMatchClick
      return
    }

    setIsCorrect(correct)
    setShowResult(true)

    if (correct) {
      playSynthCorrect()
      setStreak(s => s + 1)
      const bonus = streak >= 2 ? 5 : 0
      setXpEarned(xp => xp + 10 + bonus)
    } else {
      playSynthWrong()
      setStreak(0)
      setLives(l => Math.max(0, l - 1))
    }
  }

  const nextExercise = () => {
    if (currentExerciseIndex < lessonData.exercises.length - 1) {
      setCurrentExerciseIndex(c => c + 1)
      setAnswer("")
      setSelectedOption(null)
      setShowResult(false)
      setShowHint(false)
      setSelectedMatch(null)
      setIsFlipped(false)
    } else {
      setIsCompleted(true)
    }
  }

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  if (isCompleted) {
    return <CompletionScreen xp={xpEarned} lessonTitle={lessonData.title} />
  }

  if (lives === 0) {
    return <GameOverScreen />
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/lekcije">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Nazad
          </Button>
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart
                key={i}
                className={`w-5 h-5 ${i < lives ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-german-gold">
            <Star className="w-5 h-5 fill-german-gold" />
            <span className="font-semibold">{xpEarned} XP</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">
            {currentExerciseIndex + 1} / {lessonData.exercises.length}
          </span>
          {streak >= 2 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-orange-500 font-semibold flex items-center gap-1"
            >
              <Trophy className="h-3 w-3" /> {streak} u nizu!
            </motion.span>
          )}
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-german-gold to-orange-500"
          />
        </div>
      </div>

      {/* Lesson Title */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-xl font-semibold text-white">{lessonData.title}</h1>
          <LevelBadge level={lessonData.level} size="sm" />
        </div>
        <p className="text-sm text-muted-foreground italic">{lessonData.titleDe}</p>
      </div>

      {/* Exercise Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <GlassCard className="p-6 min-h-[400px] flex flex-col">
            {/* Question */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-lg font-medium text-white">{exercise.question}</h2>
                {(exercise.questionDe || exercise.audioText) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => playAudio(exercise.audioText || exercise.questionDe!)}
                    className="text-german-gold hover:text-german-gold/80 hover:bg-german-gold/10"
                  >
                    <Volume2 className="w-5 h-5" />
                  </Button>
                )}
              </div>

              {exercise.questionDe && exercise.type === "vocabulary" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl font-bold text-german-gold cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => playAudio(exercise.questionDe!)}
                >
                  {exercise.questionDe}
                </motion.p>
              )}
            </div>

            {/* Answer Input based on type */}
            <div className="flex-1">
              {!showResult && (
                <div className="space-y-6">
                  {/* Learn Card - New Teaching Component */}
                  {exercise.type === "learn-card" && (
                    <div className="flex flex-col items-center text-center space-y-8 py-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={cn(
                          "w-48 h-48 rounded-full flex items-center justify-center mb-4 border-4 shadow-[0_0_30px_rgba(0,0,0,0.3)]",
                          exercise.color === 'blue' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' : 
                          exercise.color === 'red' ? 'bg-red-500/20 text-red-400 border-red-500/50' :
                          exercise.color === 'green' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                          'bg-german-gold/20 text-german-gold border-german-gold/50'
                        )}
                      >
                        <Volume2 className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform" 
                          onClick={() => playAudio(exercise.audioText || exercise.questionDe || "")} 
                        />
                      </motion.div>
                      
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-white">{exercise.questionDe}</h3>
                        <p className="text-xl text-muted-foreground">{exercise.question}</p>
                      </div>

                      <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-md">
                        <p className="text-lg leading-relaxed">{exercise.explanation}</p>
                      </div>
                    </div>
                  )}

                  {/* Flashcard - Interactive Learning */}
                  {exercise.type === "flashcard" && (
                    <div className="perspective-1000 h-[300px] w-full cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                      <motion.div
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="relative w-full h-full preserve-3d"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Front */}
                        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden" }}>
                          <h3 className="text-3xl font-bold text-white mb-4">{exercise.questionDe}</h3>
                          <p className="text-sm text-muted-foreground">(Klikni da okreneš)</p>
                        </div>

                        {/* Back */}
                        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-german-gold/20 to-orange-500/20 border border-german-gold/30 rounded-2xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                          <h3 className="text-2xl font-bold text-white mb-2">{exercise.question}</h3>
                          <p className="text-muted-foreground mb-4">{exercise.explanation}</p>
                          {exercise.audioText && (
                             <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); playAudio(exercise.audioText!); }}>
                               <Volume2 className="w-6 h-6 text-german-gold" />
                             </Button>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Multiple Choice & Listening Options */}
                  {(exercise.type === "multiple-choice" || exercise.type === "listening") && exercise.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {exercise.options.map((option) => (
                        <Button
                          key={option}
                          variant={selectedOption === option ? "default" : "outline"}
                          className={cn(
                            "h-auto py-4 px-4 text-left justify-start whitespace-normal",
                            selectedOption === option 
                              ? "bg-german-gold text-black hover:bg-german-gold/90" 
                              : "border-white/10 hover:bg-white/5 text-white"
                          )}
                          onClick={() => setSelectedOption(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Gender Game - Color-coded buttons */}
                  {exercise.type === "gender-game" && (
                    <div className="space-y-6">
                      <div className="text-center">
                        {exercise.image && (
                          <div className="mb-6 flex justify-center">
                            <div className="relative w-48 h-48 rounded-xl overflow-hidden border-2 border-white/10">
                              {/* Placeholder for actual image component */}
                              <div className="w-full h-full bg-white/5 flex items-center justify-center text-muted-foreground">
                                <span className="text-4xl">🖼️</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <motion.h3 
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-4xl font-bold text-white mb-2"
                        >
                          {exercise.questionDe || exercise.question}
                        </motion.h3>
                        <p className="text-muted-foreground">Izaberi tačan rod (član)</p>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedOption("der")}
                          className={cn(
                            "p-6 rounded-2xl border-2 font-bold text-2xl transition-all",
                            selectedOption === "der"
                              ? "bg-blue-500 border-blue-400 text-white shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                              : "bg-blue-500/20 border-blue-500/30 text-blue-400 hover:bg-blue-500/30"
                          )}
                        >
                          der
                          <span className="block text-xs mt-1 font-normal opacity-70">muški</span>
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedOption("die")}
                          className={cn(
                            "p-6 rounded-2xl border-2 font-bold text-2xl transition-all",
                            selectedOption === "die"
                              ? "bg-red-500 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                              : "bg-red-500/20 border-red-500/30 text-red-400 hover:bg-red-500/30"
                          )}
                        >
                          die
                          <span className="block text-xs mt-1 font-normal opacity-70">ženski</span>
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedOption("das")}
                          className={cn(
                            "p-6 rounded-2xl border-2 font-bold text-2xl transition-all",
                            selectedOption === "das"
                              ? "bg-green-500 border-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.5)]"
                              : "bg-green-500/20 border-green-500/30 text-green-400 hover:bg-green-500/30"
                          )}
                        >
                          das
                          <span className="block text-xs mt-1 font-normal opacity-70">srednji</span>
                        </motion.button>
                      </div>
                    </div>
                  )}

                  {/* Text Input Types */}
                  {(exercise.type === "fill-blank" || exercise.type === "translation" || exercise.type === "vocabulary" || (exercise.type === "listening" && !exercise.options)) && (
                    <Input
                      placeholder="Upiši ono što čuješ..."
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                      autoFocus
                      className="text-lg p-6 bg-black/20 border-white/10 focus:border-german-gold/50"
                    />
                  )}

                  {/* Matching Game */}
                  {exercise.type === "matching" && (
                    <div className="grid grid-cols-2 gap-4">
                      {matchingPairs.map((pair) => (
                        <motion.button
                          key={pair.id}
                          whileHover={{ scale: pair.matched ? 1 : 1.02 }}
                          whileTap={{ scale: pair.matched ? 1 : 0.98 }}
                          onClick={() => !pair.matched && handleMatchClick(pair.id)}
                          className={cn(
                            "p-4 rounded-xl border text-sm font-medium transition-all duration-200",
                            pair.matched 
                              ? "opacity-0 pointer-events-none" 
                              : selectedMatch === pair.id
                                ? "bg-german-gold text-black border-german-gold shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                                : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                          )}
                        >
                          {pair.text}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Hint */}
                  {exercise.hint && exercise.type !== "matching" && (
                    <div>
                      {!showHint ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowHint(true)}
                          className="text-muted-foreground hover:text-white"
                        >
                          <Lightbulb className="w-4 h-4 mr-2" />
                          Prikaži pomoć
                        </Button>
                      ) : (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-german-gold flex items-center gap-2 bg-german-gold/10 p-3 rounded-lg border border-german-gold/20"
                        >
                          <Lightbulb className="w-4 h-4" />
                          {exercise.hint}
                        </motion.p>
                      )}
                    </div>
                  )}

                  {/* Special Exercises */}
                  {exercise.type === "speed-drill" && exercise.speeds && (
                    <SpeedDrill
                      text={exercise.question}
                      speeds={exercise.speeds}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "back-chaining" && exercise.syllables && (
                    <BackChaining
                      syllables={exercise.syllables}
                      fullText={exercise.question}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "rhythm-practice" && exercise.rhythmPattern && (
                    <RhythmPractice
                      text={exercise.question}
                      pattern={exercise.rhythmPattern}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "listen-record" && (
                    <ListenRecord
                      text={exercise.question}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "rhythm-practice" && exercise.lyrics && (
                    <RhymePlayer
                      title={exercise.question}
                      lyrics={exercise.lyrics}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "minimal-pairs" && exercise.pairOptions && (
                    <MinimalPairs
                      pairs={exercise.pairOptions}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "sentence-builder" && exercise.segments && (
                    <SentenceBuilder
                      segments={exercise.segments}
                      correctAnswer={exercise.correctAnswer as string}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "dialogue" && exercise.dialogueLines && (
                    <Dialogue
                      lines={exercise.dialogueLines}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "word-build" && exercise.letters && (
                    <WordBuild
                      letters={exercise.letters}
                      correctAnswer={exercise.correctAnswer as string}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "error-correction" && exercise.errorSentence && (
                    <ErrorCorrection
                      sentence={exercise.errorSentence}
                      errorPosition={exercise.errorPosition || 0}
                      correctAnswer={exercise.correctAnswer as string}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "conjugation" && exercise.conjugationVerb && (
                    <Conjugation
                      verb={exercise.conjugationVerb}
                      pronoun={exercise.conjugationPronoun || "ich"}
                      tense={exercise.conjugationTense || "Präsens"}
                      correctAnswer={exercise.correctAnswer as string}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "cloze-test" && exercise.wordBank && (
                    <ClozeTest
                      sentence={exercise.question}
                      blankIndices={exercise.blankIndices || []}
                      wordBank={exercise.wordBank}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "story-mode" && exercise.storyText && exercise.storyQuestions && (
                    <StoryMode
                      title={exercise.question}
                      text={exercise.storyText}
                      questions={exercise.storyQuestions}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "image-association" && exercise.imageOptions && (
                    <ImageAssociation
                      word={exercise.questionDe || exercise.question}
                      options={exercise.imageOptions}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "word-chain" && exercise.chainWords && (
                    <WordChain
                      startWord={exercise.questionDe || exercise.question}
                      chainWords={exercise.chainWords}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "memory-match" && exercise.memoryPairs && (
                    <MemoryMatch
                      pairs={exercise.memoryPairs}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "timed-challenge" && exercise.pairs && (
                    <TimedChallenge
                      words={exercise.pairs.map(p => ({ german: p.de, translation: p.sr }))}
                      timeLimit={exercise.timeLimit || 60}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "audio-sentence" && exercise.targetSentence && (
                    <AudioSentence
                      sentence={exercise.targetSentence}
                      translation={exercise.explanation}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "word-categories" && exercise.categories && exercise.wordsToSort && (
                    <WordCategories
                      categories={exercise.categories}
                      wordsToSort={exercise.wordsToSort}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "picture-description" && exercise.pictureEmoji && (
                    <PictureDescription
                      emoji={exercise.pictureEmoji}
                      correctWords={exercise.options || []}
                      hint={exercise.hint || ""}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "dictation" && exercise.dictationSentence && (
                    <Dictation
                      sentence={exercise.dictationSentence}
                      translation={exercise.explanation}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type === "case-practice" && exercise.caseName && exercise.caseArticles && (
                    <CasePractice
                      caseName={exercise.caseName}
                      noun={exercise.questionDe || exercise.question}
                      options={exercise.caseArticles}
                      explanation={exercise.explanation}
                      onComplete={checkAnswer}
                    />
                  )}

                  {exercise.type !== "matching" && 
                   exercise.type !== "speed-drill" && 
                   exercise.type !== "back-chaining" && 
                   exercise.type !== "rhythm-practice" && 
                   exercise.type !== "listen-record" && 
                   exercise.type !== "minimal-pairs" && 
                   exercise.type !== "sentence-builder" && 
                   exercise.type !== "dialogue" && 
                   exercise.type !== "word-build" && 
                   exercise.type !== "error-correction" && 
                   exercise.type !== "conjugation" && 
                   exercise.type !== "cloze-test" && 
                   exercise.type !== "story-mode" && 
                   exercise.type !== "image-association" && 
                   exercise.type !== "word-chain" && 
                   exercise.type !== "memory-match" && 
                   exercise.type !== "timed-challenge" && 
                   exercise.type !== "audio-sentence" && 
                   exercise.type !== "word-categories" && 
                   exercise.type !== "picture-description" && 
                   exercise.type !== "dictation" && 
                   exercise.type !== "case-practice" && (
                    <Button
                      className="w-full bg-german-gold text-black hover:bg-german-gold/90 font-bold text-lg h-12"
                      onClick={checkAnswer}
                      disabled={
                        (exercise.type !== "learn-card" && exercise.type !== "flashcard") && 
                        !answer && !selectedOption
                      }
                    >
                      {exercise.type === "learn-card" || exercise.type === "flashcard" ? "Dalje" : "Proveri"}
                    </Button>
                  )}
                </div>
              )}

              {/* Result */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className={`p-6 rounded-xl border ${
                    isCorrect 
                      ? 'bg-green-500/10 border-green-500/30' 
                      : 'bg-red-500/10 border-red-500/30'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      {isCorrect ? (
                        <>
                          <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          </div>
                          <div>
                            <span className="font-bold text-green-400 text-lg">Tačno!</span>
                            <span className="text-green-500/80 text-sm ml-2">+10 XP</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                            <XCircle className="w-5 h-5 text-red-500" />
                          </div>
                          <span className="font-bold text-red-400 text-lg">Netačno</span>
                        </>
                      )}
                    </div>
                    
                    {!isCorrect && exercise.type !== "matching" && (
                      <div className="mb-3">
                        <p className="text-sm text-muted-foreground mb-1">Tačan odgovor:</p>
                        <p className="text-lg font-medium text-white">
                          {Array.isArray(exercise.correctAnswer) 
                            ? exercise.correctAnswer[0] 
                            : exercise.correctAnswer}
                        </p>
                      </div>
                    )}

                    {exercise.explanation && (
                      <div className="flex gap-2 text-sm text-muted-foreground bg-black/20 p-3 rounded-lg">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
                        <p>{exercise.explanation}</p>
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full font-bold text-lg h-12 ${
                      isCorrect 
                        ? "bg-green-500 hover:bg-green-600 text-white" 
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`} 
                    onClick={nextExercise}
                  >
                    {currentExerciseIndex < lessonData.exercises.length - 1 ? (
                      <>
                        Sledeće pitanje
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      <>
                        Završi lekciju
                        <Trophy className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function CompletionScreen({ xp, lessonTitle }: { xp: number; lessonTitle: string }) {
  return (
    <div className="max-w-md mx-auto text-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <GlassCard className="p-8 border-german-gold/20 bg-gradient-to-b from-german-gold/10 to-transparent">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-german-gold to-orange-500 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)]"
          >
            <Trophy className="w-12 h-12 text-black" />
          </motion.div>

          <h1 className="text-3xl font-bold mb-2 text-white">Odlično! 🎉</h1>
          <p className="text-muted-foreground mb-8">
            Uspešno si završio/la lekciju <br/>
            <span className="text-german-gold font-medium">&quot;{lessonTitle}&quot;</span>
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
              <span className="text-muted-foreground">Zarađeni XP</span>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-german-gold" />
                <span className="font-bold text-white text-xl">+{xp}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
              <span className="text-muted-foreground">Naučene reči</span>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-white text-xl">+5</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/lekcije">
              <Button className="w-full bg-german-gold text-black hover:bg-german-gold/90 font-bold h-12">
                Nazad na lekcije
              </Button>
            </Link>
            <Link href="/vokabular">
              <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white h-12">
                Vežbaj vokabular
              </Button>
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

function GameOverScreen() {
  return (
    <div className="max-w-md mx-auto text-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <GlassCard className="p-8 border-red-500/20 bg-gradient-to-b from-red-500/10 to-transparent">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold mb-2 text-white">Ne odustaj! 💪</h1>
          <p className="text-muted-foreground mb-8">
            Potrošio/la si sve živote. <br/>
            Pokušaj ponovo da savladaš ovu lekciju.
          </p>

          <div className="space-y-3">
            <Button 
              className="w-full bg-white text-black hover:bg-gray-200 font-bold h-12" 
              onClick={() => window.location.reload()}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Pokušaj ponovo
            </Button>
            <Link href="/lekcije">
              <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white h-12">
                Nazad na lekcije
              </Button>
            </Link>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  )
}

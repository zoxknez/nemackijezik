"use client"

import { useState, use, useEffect, useRef } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DashboardBackground } from "@/components/background"
import { exercises, type Exercise } from "@/data/exercises"
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Trophy, 
  AlertCircle,
  Star,
  Zap,
  CheckCircle2,
  XCircle,
  Volume2,
  Lightbulb,
  Target,
  Flame,
  RotateCcw,
  BookOpen,
  TrendingUp,
  ChevronRight,
  Search,
  Heart,
  Pause,
  SkipForward,
  HelpCircle,
  Sparkles,
  Eye,
  EyeOff
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

// Category configurations with extended info
const categoryConfig: Record<string, {
  title: string
  titleDe: string
  description: string
  tips: string[]
  color: string
  bgColor: string
  gradient: string
}> = {
  grammar: {
    title: "Gramatika",
    titleDe: "Grammatik",
    description: "Vežbaj gramatička pravila, konjugaciju glagola, padeže i strukturu rečenica.",
    tips: [
      "Pažljivo čitaj pitanja pre odgovora",
      "Obrati pažnju na rod imenica",
      "Konjugacija se menja zavisno od lica"
    ],
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    gradient: "from-blue-500 to-cyan-500"
  },
  pronunciation: {
    title: "Izgovor",
    titleDe: "Aussprache",
    description: "Usavrši svoj akcenat uz pomoć AI tehnologije i pravih primera.",
    tips: [
      "Slušaj pažljivo pre nego što ponoviš",
      "Fokusiraj se na umlaute (ä, ö, ü)",
      "Vežbaj 'ch' i 'r' zvukove posebno"
    ],
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    gradient: "from-purple-500 to-pink-500"
  },
  listening: {
    title: "Slušanje",
    titleDe: "Hören",
    description: "Poboljšaj razumevanje slušanjem autentičnih razgovora.",
    tips: [
      "Slušaj ceo audio pre odgovaranja",
      "Obrati pažnju na ključne reči",
      "Možeš pauzirati i ponovo slušati"
    ],
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    gradient: "from-green-500 to-emerald-500"
  },
  writing: {
    title: "Pisanje",
    titleDe: "Schreiben",
    description: "Vežbaj pisanje uz instant AI povratne informacije.",
    tips: [
      "Koristi razne strukture rečenica",
      "Proveri pravopis pre slanja",
      "Pazi na red reči u nemačkom"
    ],
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    gradient: "from-orange-500 to-red-500"
  }
}

// Mock user progress for exercises
const userExerciseProgress: Record<string, { completed: boolean; score: number; attempts: number; bestScore: number }> = {
  "grammar-1": { completed: true, score: 85, attempts: 2, bestScore: 92 },
  "grammar-2": { completed: true, score: 78, attempts: 1, bestScore: 78 },
  "listening-1": { completed: false, score: 0, attempts: 0, bestScore: 0 },
}

// Difficulty filters
const difficultyLevels = ["A1", "A2", "B1", "B2", "C1", "C2"]

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params)
  const [activeExercise, setActiveExercise] = useState<Exercise | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [showCompleted, setShowCompleted] = useState(true)
  const [sortBy, setSortBy] = useState<"default" | "difficulty" | "xp">("default")
  
  const config = categoryConfig[category] || categoryConfig.grammar
  const categoryExercises = exercises.filter(e => e.type === category)
  
  // Filter and sort exercises
  const filteredExercises = categoryExercises
    .filter(e => {
      const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           e.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesDifficulty = !selectedDifficulty || e.difficulty === selectedDifficulty
      const progress = userExerciseProgress[e.id]
      const matchesCompleted = showCompleted || !progress?.completed
      return matchesSearch && matchesDifficulty && matchesCompleted
    })
    .sort((a, b) => {
      if (sortBy === "difficulty") {
        return difficultyLevels.indexOf(a.difficulty) - difficultyLevels.indexOf(b.difficulty)
      }
      if (sortBy === "xp") {
        return b.xpReward - a.xpReward
      }
      return 0
    })
  
  // Calculate stats
  const totalExercises = categoryExercises.length
  const completedExercises = categoryExercises.filter(e => userExerciseProgress[e.id]?.completed).length
  const totalXpPossible = categoryExercises.reduce((sum, e) => sum + e.xpReward, 0)
  const earnedXp = categoryExercises.reduce((sum, e) => {
    const progress = userExerciseProgress[e.id]
    if (progress?.completed) {
      return sum + Math.round((progress.score / 100) * e.xpReward)
    }
    return sum
  }, 0)

  if (activeExercise) {
    return <ExerciseRunner exercise={activeExercise} onExit={() => setActiveExercise(null)} config={config} />
  }

  return (
    <>
      <Header
        title={config.title}
        subtitle={config.description}
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-6xl space-y-6">
          {/* Back Link */}
          <Link href="/vezbe" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Nazad na vežbe
          </Link>

          {/* Hero Section */}
          <div className={cn(
            "relative overflow-hidden rounded-3xl border border-white/10 p-8",
            `bg-gradient-to-br ${config.gradient.replace("from-", "from-").replace("to-", "to-")}/20`
          )}>
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              {/* Left - Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("p-3 rounded-2xl", config.bgColor)}>
                    <BookOpen className={cn("h-8 w-8", config.color)} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{config.title}</h2>
                    <p className="text-sm text-german-gold/80">{config.titleDe}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{config.description}</p>
                
                {/* Tips */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-white flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-german-gold" />
                    Saveti za uspeh
                  </h4>
                  {config.tips.map((tip, i) => (
                    <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                      {tip}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right - Stats */}
              <div className="grid grid-cols-2 gap-4">
                <GlassCard className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Target className={cn("h-5 w-5", config.color)} />
                  </div>
                  <p className="text-2xl font-bold text-white">{completedExercises}/{totalExercises}</p>
                  <p className="text-xs text-muted-foreground">Završeno</p>
                </GlassCard>
                
                <GlassCard className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="h-5 w-5 text-german-gold" />
                  </div>
                  <p className="text-2xl font-bold text-white">{earnedXp}</p>
                  <p className="text-xs text-muted-foreground">XP zarađeno</p>
                </GlassCard>
                
                <GlassCard className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">{Math.round((completedExercises / totalExercises) * 100)}%</p>
                  <p className="text-xs text-muted-foreground">Napredak</p>
                </GlassCard>
                
                <GlassCard className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <p className="text-2xl font-bold text-white">87%</p>
                  <p className="text-xs text-muted-foreground">Prosek tačnosti</p>
                </GlassCard>
              </div>
            </div>
            
            {/* Overall Progress */}
            <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Ukupni napredak</span>
                <span className="text-sm text-white font-medium">{earnedXp}/{totalXpPossible} XP</span>
              </div>
              <Progress value={(earnedXp / totalXpPossible) * 100} className="h-2" />
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pretraži vežbe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10"
              />
            </div>
            
            {/* Difficulty Filter */}
            <div className="flex gap-2">
              {difficultyLevels.slice(0, 4).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(selectedDifficulty === level ? null : level)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-xs font-medium transition-all border",
                    selectedDifficulty === level
                      ? `${config.bgColor} ${config.color} border-current`
                      : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                  )}
                >
                  {level}
                </button>
              ))}
            </div>
            
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm"
            >
              <option value="default">Podrazumevano</option>
              <option value="difficulty">Po težini</option>
              <option value="xp">Po XP</option>
            </select>
            
            {/* Toggle Completed */}
            <button
              onClick={() => setShowCompleted(!showCompleted)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-all border flex items-center gap-2",
                showCompleted
                  ? "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                  : "bg-german-gold/10 border-german-gold/30 text-german-gold"
              )}
            >
              {showCompleted ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              <span className="hidden sm:inline">{showCompleted ? "Prikaži sve" : "Sakrij završene"}</span>
            </button>
          </div>

          {/* Exercises List */}
          <div className="space-y-4">
            {filteredExercises.map((exercise, index) => {
              const progress = userExerciseProgress[exercise.id]
              const isCompleted = progress?.completed
              
              return (
                <motion.div
                  key={exercise.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <GlassCard className={cn(
                    "p-6 transition-all hover:bg-white/5 group",
                    isCompleted && "border-green-500/20"
                  )}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Left - Info */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={cn(
                            "px-2 py-0.5 rounded text-xs font-bold border",
                            exercise.difficulty === "A1" && "border-green-500/50 text-green-400 bg-green-500/10",
                            exercise.difficulty === "A2" && "border-emerald-500/50 text-emerald-400 bg-emerald-500/10",
                            exercise.difficulty === "B1" && "border-blue-500/50 text-blue-400 bg-blue-500/10",
                            exercise.difficulty === "B2" && "border-indigo-500/50 text-indigo-400 bg-indigo-500/10",
                            exercise.difficulty === "C1" && "border-purple-500/50 text-purple-400 bg-purple-500/10",
                            exercise.difficulty === "C2" && "border-pink-500/50 text-pink-400 bg-pink-500/10",
                          )}>
                            {exercise.difficulty}
                          </span>
                          
                          {isCompleted && (
                            <span className="flex items-center gap-1 text-xs text-green-400">
                              <CheckCircle2 className="h-3 w-3" />
                              Završeno
                            </span>
                          )}
                          
                          {progress?.bestScore && progress.bestScore >= 90 && (
                            <span className="flex items-center gap-1 text-xs text-yellow-400">
                              <Star className="h-3 w-3 fill-current" />
                              Odlično
                            </span>
                          )}
                        </div>
                        
                        <h3 className="font-bold text-white text-lg group-hover:text-german-gold transition-colors">
                          {exercise.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exercise.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> 
                            {exercise.estimatedTime} min
                          </span>
                          <span className="flex items-center gap-1 text-german-gold">
                            <Zap className="h-3 w-3" /> 
                            +{exercise.xpReward} XP
                          </span>
                          <span className="flex items-center gap-1">
                            <HelpCircle className="h-3 w-3" /> 
                            {exercise.questions.length} pitanja
                          </span>
                          {progress?.attempts && progress.attempts > 0 && (
                            <span className="flex items-center gap-1">
                              <RotateCcw className="h-3 w-3" /> 
                              {progress.attempts} pokušaja
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Right - Action & Score */}
                      <div className="flex items-center gap-4">
                        {progress?.bestScore && (
                          <div className="text-center hidden sm:block">
                            <p className={cn(
                              "text-2xl font-bold",
                              progress.bestScore >= 90 ? "text-green-400" :
                              progress.bestScore >= 70 ? "text-yellow-400" : "text-red-400"
                            )}>
                              {progress.bestScore}%
                            </p>
                            <p className="text-xs text-muted-foreground">Najbolji skor</p>
                          </div>
                        )}
                        
                        <Button 
                          onClick={() => setActiveExercise(exercise)} 
                          className={cn(
                            "shrink-0",
                            isCompleted 
                              ? "bg-white/10 hover:bg-white/20 text-white"
                              : `bg-gradient-to-r ${config.gradient} hover:opacity-90`
                          )}
                        >
                          {isCompleted ? (
                            <>
                              <RotateCcw className="mr-2 h-4 w-4" />
                              Ponovi
                            </>
                          ) : (
                            <>
                              <Play className="mr-2 h-4 w-4" />
                              Započni
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}

            {filteredExercises.length === 0 && (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground mb-4">
                  {searchQuery || selectedDifficulty 
                    ? "Nema vežbi koje odgovaraju pretrazi." 
                    : "Trenutno nema dostupnih vežbi u ovoj kategoriji."}
                </p>
                {(searchQuery || selectedDifficulty) && (
                  <Button 
                    variant="outline" 
                    onClick={() => { setSearchQuery(""); setSelectedDifficulty(null); }}
                    className="border-white/10"
                  >
                    Poništi filtere
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

interface ExerciseRunnerProps {
  exercise: Exercise
  onExit: () => void
  config: typeof categoryConfig[string]
}

function ExerciseRunner({ exercise, onExit, config }: ExerciseRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [hearts, setHearts] = useState(3)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const currentQuestion = exercise.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === exercise.questions.length - 1
  const progressPercent = ((currentQuestionIndex + 1) / exercise.questions.length) * 100

  // Timer
  useEffect(() => {
    if (!isPaused && !showResult) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(t => t + 1)
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, showResult])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleCheck = () => {
    if (!selectedOption) return
    
    setIsAnswered(true)
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(s => s + 1)
      setStreak(s => {
        const newStreak = s + 1
        if (newStreak > maxStreak) setMaxStreak(newStreak)
        return newStreak
      })
    } else {
      setStreak(0)
      setHearts(h => Math.max(0, h - 1))
    }
  }

  const handleNext = () => {
    if (isLastQuestion || hearts === 0) {
      setShowResult(true)
    } else {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowHint(false)
    }
  }

  const handleUseHint = () => {
    if (!showHint && currentQuestion.hint) {
      setShowHint(true)
      setHintsUsed(h => h + 1)
    }
  }

  const handleSkip = () => {
    setStreak(0)
    handleNext()
  }

  const calculateXP = () => {
    const baseXP = Math.round((score / exercise.questions.length) * exercise.xpReward)
    const streakBonus = Math.floor(maxStreak * 2)
    const timeBonus = timeElapsed < exercise.estimatedTime * 60 ? 10 : 0
    const hintPenalty = hintsUsed * 5
    return Math.max(0, baseXP + streakBonus + timeBonus - hintPenalty)
  }

  const getGrade = () => {
    const percent = (score / exercise.questions.length) * 100
    if (percent >= 90) return { grade: "A+", color: "text-green-400", message: "Izvanredno!" }
    if (percent >= 80) return { grade: "A", color: "text-green-400", message: "Odlično!" }
    if (percent >= 70) return { grade: "B", color: "text-yellow-400", message: "Vrlo dobro!" }
    if (percent >= 60) return { grade: "C", color: "text-orange-400", message: "Dobro!" }
    return { grade: "D", color: "text-red-400", message: "Probaj ponovo!" }
  }

  if (showResult) {
    const gradeInfo = getGrade()
    const totalXP = calculateXP()
    
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <DashboardBackground />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-lg"
        >
          <GlassCard className="p-8 text-center space-y-6">
            {/* Grade Circle */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-german-gold/20 to-orange-500/20 border-4 border-german-gold/30 flex items-center justify-center"
            >
              <span className={cn("text-4xl font-bold", gradeInfo.color)}>{gradeInfo.grade}</span>
            </motion.div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{gradeInfo.message}</h2>
              <p className="text-muted-foreground">
                Tačno {score} od {exercise.questions.length} pitanja
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Zap className="h-6 w-6 text-german-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-german-gold">+{totalXP}</p>
                <p className="text-xs text-muted-foreground">XP zarađeno</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{formatTime(timeElapsed)}</p>
                <p className="text-xs text-muted-foreground">Vreme</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Flame className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{maxStreak}</p>
                <p className="text-xs text-muted-foreground">Max streak</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Star className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{Math.round((score / exercise.questions.length) * 100)}%</p>
                <p className="text-xs text-muted-foreground">Tačnost</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-left space-y-2">
              <p className="text-sm font-medium text-white mb-3">Razrada XP</p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Osnovni XP</span>
                <span className="text-white">+{Math.round((score / exercise.questions.length) * exercise.xpReward)}</span>
              </div>
              {maxStreak > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Streak bonus</span>
                  <span className="text-orange-400">+{Math.floor(maxStreak * 2)}</span>
                </div>
              )}
              {timeElapsed < exercise.estimatedTime * 60 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bonus za brzinu</span>
                  <span className="text-green-400">+10</span>
                </div>
              )}
              {hintsUsed > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Korišćeni hintovi</span>
                  <span className="text-red-400">-{hintsUsed * 5}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={onExit} className="flex-1 border-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Nazad
              </Button>
              <Button 
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setSelectedOption(null)
                  setIsAnswered(false)
                  setScore(0)
                  setShowResult(false)
                  setStreak(0)
                  setMaxStreak(0)
                  setTimeElapsed(0)
                  setHintsUsed(0)
                  setHearts(3)
                  setShowHint(false)
                }}
                className={cn("flex-1 bg-gradient-to-r", config.gradient)}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Pokušaj ponovo
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardBackground />
      
      {/* Header */}
      <div className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="sm" onClick={onExit}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Izlaz
            </Button>
            
            <div className="flex items-center gap-4">
              {/* Hearts */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart 
                    key={i}
                    className={cn(
                      "h-5 w-5 transition-all",
                      i < hearts 
                        ? "text-red-500 fill-red-500" 
                        : "text-white/20"
                    )}
                  />
                ))}
              </div>
              
              {/* Timer */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {formatTime(timeElapsed)}
              </div>
              
              {/* Streak */}
              {streak > 0 && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm"
                >
                  <Flame className="h-4 w-4" />
                  {streak}
                </motion.div>
              )}
              
              {/* Pause */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsPaused(!isPaused)}
                className="h-8 w-8"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <Progress value={progressPercent} className="h-2 flex-1" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {currentQuestionIndex + 1} / {exercise.questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Paused Overlay */}
      <AnimatePresence>
        {isPaused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <GlassCard className="p-8 text-center">
              <Pause className="h-16 w-16 text-white/50 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Pauzirano</h2>
              <p className="text-muted-foreground mb-6">Vežba je pauzirana</p>
              <Button onClick={() => setIsPaused(false)} className={cn("bg-gradient-to-r", config.gradient)}>
                <Play className="mr-2 h-4 w-4" />
                Nastavi
              </Button>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4">
        <motion.div 
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-2xl space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {currentQuestion.text}
            </h2>
            
            {/* Audio Player for listening exercises */}
            {exercise.type === "listening" && (
              <div className="flex justify-center gap-2">
                <Button variant="outline" className="rounded-full h-12 w-12 p-0 border-white/20">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="rounded-full h-12 w-12 p-0 border-white/20">
                  <Play className="h-5 w-5 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Hint */}
          <AnimatePresence>
            {showHint && currentQuestion.hint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 rounded-xl bg-german-gold/10 border border-german-gold/20"
              >
                <div className="flex items-center gap-2 text-german-gold mb-1">
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-sm font-medium">Savet</span>
                </div>
                <p className="text-sm text-white/80">{currentQuestion.hint}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Options */}
          <div className="grid gap-3">
            {currentQuestion.options?.map((option, index) => (
              <motion.button
                key={option}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isAnswered && setSelectedOption(option)}
                disabled={isAnswered}
                className={cn(
                  "w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3",
                  selectedOption === option && !isAnswered
                    ? `border-2 ${config.color.replace("text-", "border-")} ${config.bgColor} text-white`
                    : "border-white/10 bg-white/5 hover:bg-white/10 text-white/80",
                  isAnswered && option === currentQuestion.correctAnswer && "border-green-500 bg-green-500/20 text-green-400",
                  isAnswered && selectedOption === option && option !== currentQuestion.correctAnswer && "border-red-500 bg-red-500/20 text-red-400"
                )}
              >
                <span className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  selectedOption === option && !isAnswered ? config.bgColor : "bg-white/10",
                  isAnswered && option === currentQuestion.correctAnswer && "bg-green-500/30",
                  isAnswered && selectedOption === option && option !== currentQuestion.correctAnswer && "bg-red-500/30"
                )}>
                  {isAnswered && option === currentQuestion.correctAnswer ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : isAnswered && selectedOption === option && option !== currentQuestion.correctAnswer ? (
                    <XCircle className="h-5 w-5" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </span>
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-xl p-4 md:p-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Left - Feedback or Actions */}
          <div className="flex items-center gap-3">
            {!isAnswered && currentQuestion.hint && !showHint && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleUseHint}
                className="text-german-gold"
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                Hint (-5 XP)
              </Button>
            )}
            
            {!isAnswered && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleSkip}
                className="text-muted-foreground"
              >
                <SkipForward className="mr-2 h-4 w-4" />
                Preskoči
              </Button>
            )}
            
            {isAnswered && (
              <div className="flex-1">
                <div className={cn(
                  "font-bold mb-1 flex items-center gap-2",
                  selectedOption === currentQuestion.correctAnswer ? "text-green-400" : "text-red-400"
                )}>
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Tačno!
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5" />
                      Netačno
                    </>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentQuestion.explanation}
                </div>
              </div>
            )}
          </div>
          
          {/* Right - Main Action */}
          <Button 
            size="lg" 
            onClick={isAnswered ? handleNext : handleCheck}
            disabled={!selectedOption && !!currentQuestion.options}
            className={cn(
              "ml-4 min-w-[140px]",
              isAnswered 
                ? selectedOption === currentQuestion.correctAnswer 
                  ? "bg-green-500 hover:bg-green-600" 
                  : "bg-red-500 hover:bg-red-600"
                : `bg-gradient-to-r ${config.gradient} hover:opacity-90`
            )}
          >
            {isAnswered ? (
              isLastQuestion || hearts === 0 ? (
                <>
                  <Trophy className="mr-2 h-4 w-4" />
                  Završi
                </>
              ) : (
                <>
                  Dalje
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Proveri
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

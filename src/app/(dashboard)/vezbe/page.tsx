"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardBackground } from "@/components/background"
import { exercises } from "@/data/exercises"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import {
  Mic,
  PenTool,
  Headphones,
  BookType,
  ArrowRight,
  Clock,
  Trophy,
  Flame,
  Target,
  Star,
  Zap,
  TrendingUp,
  CheckCircle2,
  Play,
  Award,
  Sparkles,
  BarChart3,
  Brain,
  MessageSquare,
  Shuffle,
  RefreshCw,
  ChevronRight
} from "lucide-react"

// Category configurations
const categoryConfig = {
  grammar: {
    title: "Gramatika",
    titleDe: "Grammatik",
    description: "Vežbaj gramatička pravila, konjugaciju glagola, padeže i strukturu rečenica.",
    icon: BookType,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    topics: ["Imenice", "Glagoli", "Padeži", "Veznici", "Predlozi"]
  },
  pronunciation: {
    title: "Izgovor",
    titleDe: "Aussprache",
    description: "Usavrši svoj akcenat uz pomoć AI tehnologije i pravih primera izvornih govornika.",
    icon: Mic,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    topics: ["Samoglasnici", "Umlauti", "CH zvuk", "R zvuk", "Intonacija"]
  },
  listening: {
    title: "Slušanje",
    titleDe: "Hören",
    description: "Poboljšaj razumevanje slušanjem autentičnih razgovora i audio materijala.",
    icon: Headphones,
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    topics: ["Dijalozi", "Vesti", "Podkasti", "Pesme", "Filmovi"]
  },
  writing: {
    title: "Pisanje",
    titleDe: "Schreiben",
    description: "Vežbaj pisanje eseja, pisama i poruka uz instant AI povratne informacije.",
    icon: PenTool,
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30",
    topics: ["Eseji", "Pisma", "Mejlovi", "Opisi", "Priče"]
  },
}

// Daily challenge mock
const dailyChallenge = {
  title: "Glagoli sa predlozima",
  titleDe: "Verben mit Präpositionen",
  description: "Savladaj kombinacije glagola i predloga kao 'warten auf', 'denken an', i druge.",
  exercises: 3,
  completed: 0,
  xpReward: 150,
  timeLimit: "15 min",
  difficulty: "B1",
  streak: 5
}

// Weekly stats mock
const weeklyStats = {
  exercisesCompleted: 23,
  totalXp: 1250,
  avgAccuracy: 87,
  timeSpent: "4h 32m",
  bestDay: "Sreda",
  currentStreak: 7
}

// Recent activity mock
const recentActivity = [
  { id: 1, type: "grammar", title: "Dativ vs Akkusativ", score: 92, xp: 45, date: "Danas" },
  { id: 2, type: "listening", title: "Im Restaurant", score: 85, xp: 40, date: "Danas" },
  { id: 3, type: "pronunciation", title: "CH Laute", score: 78, xp: 35, date: "Juče" },
  { id: 4, type: "writing", title: "Formeller Brief", score: 88, xp: 50, date: "Juče" },
]

// Skill levels mock
const skillLevels = [
  { skill: "Gramatika", level: 12, progress: 68, icon: BookType, color: "text-blue-400" },
  { skill: "Izgovor", level: 8, progress: 45, icon: Mic, color: "text-purple-400" },
  { skill: "Slušanje", level: 10, progress: 82, icon: Headphones, color: "text-green-400" },
  { skill: "Pisanje", level: 6, progress: 30, icon: PenTool, color: "text-orange-400" },
]

// Quick practice suggestions
const quickPractice = [
  { id: 1, title: "Brzi kviz", description: "10 nasumičnih pitanja", icon: Shuffle, time: "5 min", xp: 25 },
  { id: 2, title: "Flashcards", description: "Vokabular ponavljanje", icon: RefreshCw, time: "3 min", xp: 15 },
  { id: 3, title: "AI razgovor", description: "Konverzacija sa botom", icon: MessageSquare, time: "10 min", xp: 40 },
  { id: 4, title: "Gramatika", description: "Današnja lekcija", icon: Brain, time: "8 min", xp: 35 },
]

export default function ExercisesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "inProgress" | "completed">("all")
  const [showStats, setShowStats] = useState(true)
  
  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>
  
  // Fixed mock completion data
  const mockCompleted: Record<string, number> = {
    grammar: 8,
    pronunciation: 3,
    listening: 5,
    writing: 2
  }
  
  const exerciseCategories = categories.map(catId => {
    const catExercises = exercises.filter(e => e.type === catId)
    const completedCount = mockCompleted[catId] || 0
    return {
      id: catId,
      ...categoryConfig[catId],
      exercisesCount: catExercises.length,
      completedCount,
      nextLevel: catId === "grammar" ? "B1" : catId === "listening" ? "A2" : "B1"
    }
  })

  return (
    <>
      <Header
        title="Vežbe"
        subtitle="Unapredi svoje veštine kroz interaktivne zadatke"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-8">
          {/* Hero Section - Daily Challenge */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-indigo-900/50 via-purple-900/40 to-pink-900/30 p-8 backdrop-blur-xl">
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute left-1/4 bottom-0 -mb-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            
            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-german-gold/20 px-3 py-1 text-xs font-medium text-german-gold backdrop-blur-md border border-german-gold/20">
                    <Trophy className="mr-2 h-3 w-3" />
                    Dnevni izazov
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-xs font-medium text-orange-400 border border-orange-500/20">
                    <Flame className="mr-2 h-3 w-3" />
                    {dailyChallenge.streak} dana streak
                  </span>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-white">{dailyChallenge.title}</h2>
                  <p className="text-sm text-german-gold/80 mb-2">{dailyChallenge.titleDe}</p>
                  <p className="max-w-xl text-muted-foreground">
                    {dailyChallenge.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-german-gold text-black hover:bg-german-gold/90 shadow-lg shadow-german-gold/20">
                    <Play className="mr-2 h-5 w-5 fill-current" />
                    Započni Izazov
                  </Button>
                  
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{dailyChallenge.timeLimit}</span>
                    </div>
                    <div className="flex items-center gap-2 text-german-gold">
                      <Zap className="h-4 w-4" />
                      <span>+{dailyChallenge.xpReward} XP</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400">
                      <Award className="h-4 w-4" />
                      <span>{dailyChallenge.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Circle */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative flex h-36 w-36 items-center justify-center">
                  <svg className="h-full w-full -rotate-90 transform">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-white/10"
                    />
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={402}
                      strokeDashoffset={402 * (1 - dailyChallenge.completed / dailyChallenge.exercises)}
                      className="text-german-gold transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{dailyChallenge.completed}/{dailyChallenge.exercises}</span>
                    <span className="text-xs text-muted-foreground">Završeno</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Završi sve vežbe za bonus XP!
                </p>
              </div>
            </div>
          </div>

          {/* Stats Toggle & Quick Stats Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-white">Tvoj napredak</h3>
              <button
                onClick={() => setShowStats(!showStats)}
                className="text-xs text-muted-foreground hover:text-white transition-colors"
              >
                {showStats ? "Sakrij" : "Prikaži"}
              </button>
            </div>
            
            {/* Quick Stats Pills */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span className="text-sm text-white">{weeklyStats.exercisesCompleted} ove nedelje</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <TrendingUp className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-white">{weeklyStats.avgAccuracy}% tačnost</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Flame className="h-4 w-4 text-orange-400" />
                <span className="text-sm text-white">{weeklyStats.currentStreak} dana streak</span>
              </div>
            </div>
          </div>

          {/* Expandable Stats Section */}
          <AnimatePresence>
            {showStats && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {/* Skill Levels */}
                {skillLevels.map((skill) => (
                  <GlassCard key={skill.skill} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <skill.icon className={cn("h-5 w-5", skill.color)} />
                        <span className="font-medium text-white">{skill.skill}</span>
                      </div>
                      <span className="text-sm text-german-gold">Nivo {skill.level}</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      {skill.progress}% do nivoa {skill.level + 1}
                    </p>
                  </GlassCard>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick Practice Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-german-gold" />
                Brza vežba
              </h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                Vidi sve
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickPractice.map((practice) => (
                <GlassCard 
                  key={practice.id}
                  className="p-4 cursor-pointer transition-all hover:bg-white/10 hover:scale-[1.02] group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-german-gold/10 text-german-gold group-hover:bg-german-gold/20 transition-colors">
                      <practice.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {practice.time}
                    </span>
                  </div>
                  <h4 className="font-medium text-white mb-1">{practice.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{practice.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-german-gold flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      +{practice.xp} XP
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-4 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeFilter === "all" 
                  ? "bg-german-gold text-black" 
                  : "text-muted-foreground hover:text-white hover:bg-white/10"
              )}
            >
              Sve kategorije
            </button>
            <button
              onClick={() => setActiveFilter("inProgress")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeFilter === "inProgress" 
                  ? "bg-german-gold text-black" 
                  : "text-muted-foreground hover:text-white hover:bg-white/10"
              )}
            >
              <Target className="h-4 w-4" />
              U toku
            </button>
            <button
              onClick={() => setActiveFilter("completed")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                activeFilter === "completed" 
                  ? "bg-german-gold text-black" 
                  : "text-muted-foreground hover:text-white hover:bg-white/10"
              )}
            >
              <CheckCircle2 className="h-4 w-4" />
              Završeno
            </button>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {exerciseCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/vezbe/${category.id}`}>
                  <GlassCard className={cn(
                    "group relative overflow-hidden p-6 transition-all hover:bg-white/5 hover:shadow-lg cursor-pointer h-full",
                    `hover:shadow-${category.id === 'grammar' ? 'blue' : category.id === 'pronunciation' ? 'purple' : category.id === 'listening' ? 'green' : 'orange'}-500/10`
                  )}>
                    <div className={`absolute right-0 top-0 -mr-10 -mt-10 h-48 w-48 rounded-full bg-linear-to-br ${category.gradient} blur-3xl transition-all group-hover:scale-150 opacity-50`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn("rounded-2xl p-4", category.bgColor)}>
                          <category.icon className={cn("h-8 w-8", category.color)} />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md border border-white/10">
                            {category.exercisesCount} vežbi
                          </div>
                          {category.completedCount > 0 && (
                            <span className="text-xs text-green-400 flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3" />
                              {category.completedCount} završeno
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-german-gold transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sm text-german-gold/60 mb-2">{category.titleDe}</p>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.topics.slice(0, 4).map((topic) => (
                          <span 
                            key={topic}
                            className={cn(
                              "px-2 py-1 rounded-md text-xs border",
                              category.borderColor,
                              category.bgColor.replace("/20", "/10"),
                              category.color
                            )}
                          >
                            {topic}
                          </span>
                        ))}
                        {category.topics.length > 4 && (
                          <span className="px-2 py-1 rounded-md text-xs bg-white/5 text-muted-foreground">
                            +{category.topics.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="border-t border-white/5 pt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-muted-foreground">Napredak</span>
                          <span className="text-xs font-medium text-white">
                            {Math.round((category.completedCount / category.exercisesCount) * 100)}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 flex-1 rounded-full bg-white/10">
                            <div 
                              className={cn("h-full rounded-full bg-linear-to-r", category.gradient.replace("/20", ""))}
                              style={{ width: `${(category.completedCount / category.exercisesCount) * 100}%` }}
                            />
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 shrink-0">
                            <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                        
                        {/* Next Level Indicator */}
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-muted-foreground">Sledeći nivo</span>
                          <span className={cn("text-xs font-medium px-2 py-0.5 rounded", category.bgColor, category.color)}>
                            {category.nextLevel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Recent Exercises */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  Nedavna aktivnost
                </h3>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                  Vidi istoriju
                </Button>
              </div>
              
              <div className="space-y-3">
                {recentActivity.map((activity) => {
                  const config = categoryConfig[activity.type as keyof typeof categoryConfig]
                  return (
                    <GlassCard 
                      key={activity.id}
                      className="p-4 flex items-center gap-4 hover:bg-white/5 transition-all cursor-pointer group"
                    >
                      <div className={cn("p-2 rounded-lg", config.bgColor)}>
                        <config.icon className={cn("h-5 w-5", config.color)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-white truncate group-hover:text-german-gold transition-colors">
                            {activity.title}
                          </h4>
                          <span className="text-xs text-muted-foreground shrink-0">{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted-foreground">{config.title}</span>
                          <span className={cn(
                            "text-xs font-medium",
                            activity.score >= 90 ? "text-green-400" :
                            activity.score >= 70 ? "text-yellow-400" : "text-red-400"
                          )}>
                            {activity.score}% tačno
                          </span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-german-gold text-sm font-medium">+{activity.xp} XP</span>
                      </div>
                    </GlassCard>
                  )
                })}
              </div>
            </div>

            {/* Weekly Summary */}
            <div className="space-y-4">
              <GlassCard className="p-5 bg-linear-to-br from-german-gold/10 to-orange-500/5 border-german-gold/20">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-german-gold" />
                  <h3 className="font-bold text-white">Nedeljni pregled</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Vežbi završeno</span>
                    <span className="text-white font-bold">{weeklyStats.exercisesCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">XP zarađeno</span>
                    <span className="text-german-gold font-bold">{weeklyStats.totalXp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Prosečna tačnost</span>
                    <span className="text-green-400 font-bold">{weeklyStats.avgAccuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Vreme učenja</span>
                    <span className="text-blue-400 font-bold">{weeklyStats.timeSpent}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Najbolji dan</span>
                    <span className="text-purple-400 font-bold">{weeklyStats.bestDay}</span>
                  </div>
                </div>
              </GlassCard>

              {/* Achievement Progress */}
              <GlassCard className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <h3 className="font-bold text-white">Sledeće dostignuće</h3>
                </div>
                
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-yellow-500/20">
                      <Star className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Marljivi učenik</p>
                      <p className="text-xs text-muted-foreground">Završi 30 vežbi</p>
                    </div>
                  </div>
                  <Progress value={76} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">23/30 vežbi</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

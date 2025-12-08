import { auth } from "@/lib/auth"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LevelBadge } from "@/components/ui/badge"
import { DashboardBackground } from "@/components/background"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  BookOpen,
  Flame,
  Play,
  Clock,
  Sparkles,
  Zap,
  CheckCircle2,
  Trophy,
  Target,
  Calendar,
  TrendingUp,
  Award,
  Star,
  MessageSquare,
  Mic,
  PenTool,
  Headphones,
  ArrowRight,
  BarChart3,
  Brain,
  ChevronRight,
  Crown,
  Lightbulb,
  Users
} from "lucide-react"

import type { ExtendedUser, Level } from "@/types"

// Mock data - replace with real data from database
const mockLessons: Array<{ id: string; title: string; titleDe: string; progress: number; xp: number; level: Level; unit: string }> = [
  { id: "1", title: "Pozdravi i upoznavanje", titleDe: "Begrüßungen", progress: 100, xp: 50, level: "A1", unit: "1" },
  { id: "2", title: "Brojevi od 1-100", titleDe: "Zahlen 1-100", progress: 80, xp: 40, level: "A1", unit: "1" },
  { id: "3", title: "Dani u nedelji", titleDe: "Wochentage", progress: 60, xp: 35, level: "A1", unit: "1" },
  { id: "4", title: "Boje i oblici", titleDe: "Farben und Formen", progress: 20, xp: 30, level: "A1", unit: "2" },
  { id: "5", title: "Članovi porodice", titleDe: "Familienmitglieder", progress: 0, xp: 45, level: "A1", unit: "2" },
]

// Weekly activity mock
const weeklyActivity = [
  { day: "Pon", xp: 45, completed: true },
  { day: "Uto", xp: 60, completed: true },
  { day: "Sre", xp: 30, completed: true },
  { day: "Čet", xp: 85, completed: true },
  { day: "Pet", xp: 55, completed: true },
  { day: "Sub", xp: 40, completed: true },
  { day: "Ned", xp: 35, completed: false },
]

// Skill progress mock
const skillProgress = [
  { name: "Čitanje", level: 12, progress: 68, icon: BookOpen, color: "text-blue-400" },
  { name: "Slušanje", level: 10, progress: 45, icon: Headphones, color: "text-green-400" },
  { name: "Govor", level: 8, progress: 82, icon: Mic, color: "text-purple-400" },
  { name: "Pisanje", level: 6, progress: 30, icon: PenTool, color: "text-orange-400" },
]

// Recent achievements
const recentAchievements = [
  { id: 1, title: "Prvi koraci", icon: Award, tier: "gold", date: "Danas" },
  { id: 2, title: "Marljivi učenik", icon: Star, tier: "silver", date: "Juče" },
  { id: 3, title: "Streak majstor", icon: Flame, tier: "bronze", date: "Pre 3 dana" },
]

// Recommended lessons
const recommendedLessons = [
  { id: "rec-1", title: "Restoran i naručivanje", titleDe: "Im Restaurant", xp: 50, time: "15 min", level: "A2" },
  { id: "rec-2", title: "Kupovina u gradu", titleDe: "Einkaufen in der Stadt", xp: 45, time: "12 min", level: "A2" },
]

// Leaderboard friends mock
const friendsLeaderboard = [
  { rank: 1, name: "Ana P.", xp: 2450, streak: 14, avatar: "🥇" },
  { rank: 2, name: "Vi", xp: 1850, streak: 7, isUser: true, avatar: "👤" },
  { rank: 3, name: "Marko S.", xp: 1620, streak: 5, avatar: "🥉" },
]

export default async function DashboardPage() {
  const session = await auth()
  const user = session?.user as ExtendedUser | undefined

  // Mock user stats - replace with real data
  const userStats = {
    level: user?.level || "A1",
    xp: user?.xp || 450,
    xpForNextLevel: 500,
    streak: user?.streak || 7,
    dailyGoal: user?.dailyGoal || 50,
    todayXp: 35,
    wordsLearned: 127,
    lessonsCompleted: 12,
    totalTime: "5h 30m",
    weeklyXp: 350,
    monthlyXp: 1450,
    globalRank: 1234,
    accuracy: 87
  }

  // Calculate greeting based on time
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Dobro jutro" : hour < 18 ? "Dobar dan" : "Dobro veče"

  return (
    <>
      <Header
        showGreeting
        userName={user?.name?.split(" ")[0] || "učeniče"}
        subtitle="Nastavi gde si stao i osvoji današnji cilj"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-3 sm:p-4 lg:p-6">
        {/* Background */}
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Welcome Banner for new users */}
          {userStats.lessonsCompleted < 5 && (
            <div className="relative overflow-hidden rounded-2xl border border-german-gold/20 bg-gradient-to-r from-german-gold/10 via-orange-500/5 to-transparent p-6">
              <div className="absolute right-4 top-4 text-4xl">🎉</div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-german-gold/20">
                  <Lightbulb className="h-6 w-6 text-german-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Dobrodošli u učenje nemačkog!</h3>
                  <p className="text-sm text-muted-foreground">
                    Završite prvih 5 lekcija i osvojite bonus od 100 XP
                  </p>
                </div>
              </div>
              <Progress value={(userStats.lessonsCompleted / 5) * 100} className="mt-4 h-2" />
              <p className="mt-2 text-xs text-muted-foreground">{userStats.lessonsCompleted}/5 lekcija završeno</p>
            </div>
          )}

          {/* Top Stats Row */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 lg:grid-cols-4">
            {/* Daily XP */}
            <GlassCard className="relative overflow-hidden p-3 sm:p-4 lg:p-6 transition-all hover:bg-white/10">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-german-gold/10 blur-2xl" />
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-german-gold/20 text-german-gold shrink-0">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Današnji XP</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-white">{userStats.todayXp}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">/ {userStats.dailyGoal}</span>
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-2 sm:mt-4 h-1.5 w-full rounded-full bg-white/5">
                <div 
                  className="h-full rounded-full bg-german-gold transition-all duration-500"
                  style={{ width: `${Math.min(100, (userStats.todayXp / userStats.dailyGoal) * 100)}%` }}
                />
              </div>
              {userStats.todayXp >= userStats.dailyGoal && (
                <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Cilj dostignut!
                </p>
              )}
            </GlassCard>

            {/* Streak */}
            <GlassCard className="relative overflow-hidden p-3 sm:p-4 lg:p-6 transition-all hover:bg-white/10">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-orange-500/10 blur-2xl" />
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-500 shrink-0">
                  <Flame className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Streak</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-white">{userStats.streak}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">dana</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:mt-4 flex gap-0.5 sm:gap-1">
                {weeklyActivity.map((day, i) => (
                  <div 
                    key={i}
                    className={`flex-1 h-1.5 rounded-full ${day.completed ? 'bg-orange-500' : 'bg-white/10'}`}
                  />
                ))}
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground truncate">
                {userStats.streak >= 7 ? "🔥 Odlično!" : `Još ${7 - userStats.streak} dana do bonusa`}
              </p>
            </GlassCard>

            {/* Words Learned */}
            <GlassCard className="relative overflow-hidden p-3 sm:p-4 lg:p-6 transition-all hover:bg-white/10">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Naučene reči</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-white">{userStats.wordsLearned}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 sm:mt-4 text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-green-400">+12</span> <span className="hidden sm:inline">novih</span> ove nedelje
              </p>
            </GlassCard>

            {/* Level Progress */}
            <GlassCard className="relative overflow-hidden p-3 sm:p-4 lg:p-6 transition-all hover:bg-white/10">
              <div className="absolute right-0 top-0 -mr-4 -mt-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-purple-500/10 blur-2xl" />
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Nivo</p>
                  <div className="flex items-baseline gap-1 sm:gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white">{userStats.level}</span>
                    <LevelBadge level={userStats.level as Level} className="scale-75 sm:scale-90" />
                  </div>
                </div>
              </div>
              <div className="mt-2 sm:mt-4 h-1.5 w-full rounded-full bg-white/5">
                <div 
                  className="h-full rounded-full bg-purple-500 transition-all duration-500"
                  style={{ width: `${(userStats.xp / userStats.xpForNextLevel) * 100}%` }}
                />
              </div>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground truncate">
                Još {userStats.xpForNextLevel - userStats.xp} XP do {userStats.level === "A1" ? "A2" : "B1"}
              </p>
            </GlassCard>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-3">
            {/* Left Column - Next Lesson & Progress */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Hero Card - Next Lesson */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-german-red/20 via-background to-background p-4 sm:p-6 lg:p-8">
                <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-german-red/10 blur-3xl" />
                
                <div className="relative z-10">
                  <div className="mb-3 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="inline-flex items-center rounded-full bg-german-red/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-german-red border border-german-red/20">
                      Sledeća lekcija
                    </span>
                    <span className="text-xs sm:text-sm text-muted-foreground">Unit 2 • Lekcija 3</span>
                  </div>
                  
                  <h2 className="mb-1 sm:mb-2 text-xl sm:text-2xl lg:text-3xl font-bold text-white">Naručivanje u restoranu</h2>
                  <p className="text-xs sm:text-sm text-german-gold/80 mb-2">Im Restaurant bestellen</p>
                  <p className="mb-4 sm:mb-8 max-w-lg text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                    Nauči kako da naručiš hranu i piće, zatražiš račun i ostaviš bakšiš na nemačkom jeziku.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link href="/lekcije/1">
                      <Button size="lg" className="w-full sm:w-auto h-11 sm:h-12 rounded-xl bg-white text-black hover:bg-gray-200 px-6 sm:px-8 text-sm sm:text-base font-bold shadow-lg shadow-white/10">
                        <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                        Započni Lekciju
                      </Button>
                    </Link>
                    <div className="flex items-center justify-center gap-4 rounded-xl bg-white/5 px-4 sm:px-6 py-2 sm:py-3 border border-white/5">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>15 min</span>
                      </div>
                      <div className="h-4 w-px bg-white/10" />
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-german-gold">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>+50 XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Lessons */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    Preporučeno za tebe
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {recommendedLessons.map((lesson) => (
                    <GlassCard 
                      key={lesson.id}
                      className="group p-4 transition-all hover:bg-white/10 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <LevelBadge level={lesson.level as Level} />
                        <span className="text-xs text-muted-foreground">{lesson.time}</span>
                      </div>
                      <h4 className="font-medium text-white group-hover:text-german-gold transition-colors">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-german-gold/60 mb-3">{lesson.titleDe}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-german-gold flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          +{lesson.xp} XP
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Recent Lessons List */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Nedavne lekcije</h3>
                  <Link href="/lekcije" className="text-sm text-german-gold hover:underline flex items-center gap-1">
                    Vidi sve
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {mockLessons.map((lesson) => (
                    <GlassCard key={lesson.id} className="group flex items-center justify-between p-4 transition-all hover:bg-white/10 hover:translate-x-1">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          lesson.progress === 100 ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-muted-foreground'
                        }`}>
                          {lesson.progress === 100 ? <CheckCircle2 className="h-5 w-5" /> : <Play className="h-4 w-4 ml-0.5" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-white group-hover:text-german-gold transition-colors">{lesson.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="text-german-gold/60">{lesson.titleDe}</span>
                            <span>•</span>
                            <LevelBadge level={lesson.level} className="scale-75 origin-left" />
                            <span>•</span>
                            <span>{lesson.xp} XP</span>
                          </div>
                        </div>
                      </div>
                      
                      {lesson.progress < 100 && lesson.progress > 0 && (
                        <div className="flex items-center gap-3">
                          <div className="h-1.5 w-24 rounded-full bg-white/5">
                            <div 
                              className="h-full rounded-full bg-german-gold"
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">{lesson.progress}%</span>
                        </div>
                      )}
                      
                      {lesson.progress === 100 && (
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                          Ponovi
                        </Button>
                      )}
                      
                      {lesson.progress === 0 && (
                        <Button size="sm" className="bg-german-gold/20 text-german-gold hover:bg-german-gold/30">
                          Započni
                        </Button>
                      )}
                    </GlassCard>
                  ))}
                </div>
              </div>

              {/* Skills Progress */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    Napredak veština
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skillProgress.map((skill) => (
                    <GlassCard key={skill.name} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`h-5 w-5 ${skill.color}`} />
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-german-gold">Nivo {skill.level}</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-2">
                        {skill.progress}% do nivoa {skill.level + 1}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Quick Actions */}
            <div className="space-y-6">
              {/* Daily Goal */}
              <GlassCard className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-white">Dnevni cilj</h3>
                  <Target className="h-5 w-5 text-german-gold" />
                </div>
                
                <div className="relative flex items-center justify-center py-4">
                  {/* Circular Progress */}
                  <div className="relative h-32 w-32">
                    <svg className="h-full w-full -rotate-90 transform">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-white/5"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={351.86}
                        strokeDashoffset={351.86 * (1 - Math.min(1, userStats.todayXp / userStats.dailyGoal))}
                        className="text-german-gold transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-white">{userStats.todayXp}</span>
                      <span className="text-xs text-muted-foreground">/ {userStats.dailyGoal} XP</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-sm text-muted-foreground">
                  {userStats.todayXp >= userStats.dailyGoal 
                    ? "🎉 Odličan posao! Cilj dostignut!" 
                    : "Samo tako nastavi!"}
                </p>
              </GlassCard>

              {/* Weekly Activity Chart */}
              <GlassCard className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-white">Nedeljni pregled</h3>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="flex items-end justify-between gap-2 h-24 mb-4">
                  {weeklyActivity.map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 flex-1">
                      <div 
                        className={`w-full rounded-t transition-all ${day.completed ? 'bg-gradient-to-t from-german-gold to-german-gold/50' : 'bg-white/10'}`}
                        style={{ height: `${(day.xp / 100) * 100}%`, minHeight: '8px' }}
                      />
                      <span className={`text-xs ${day.completed ? 'text-white' : 'text-muted-foreground'}`}>
                        {day.day}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ove nedelje</span>
                  <span className="text-german-gold font-bold">{userStats.weeklyXp} XP</span>
                </div>
              </GlassCard>

              {/* Recent Achievements */}
              <GlassCard className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-white">Nedavna dostignuća</h3>
                  <Link href="/dostignuca" className="text-xs text-german-gold hover:underline">
                    Vidi sva
                  </Link>
                </div>
                
                <div className="space-y-3">
                  {recentAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className={`p-2 rounded-lg ${
                        achievement.tier === 'gold' ? 'bg-yellow-500/20 text-yellow-400' :
                        achievement.tier === 'silver' ? 'bg-slate-400/20 text-slate-300' :
                        'bg-amber-600/20 text-amber-500'
                      }`}>
                        <achievement.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Friends Leaderboard */}
              <GlassCard className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-400" />
                    Rang lista
                  </h3>
                  <Crown className="h-5 w-5 text-german-gold" />
                </div>
                
                <div className="space-y-3">
                  {friendsLeaderboard.map((friend) => (
                    <div 
                      key={friend.rank}
                      className={`flex items-center gap-3 p-2 rounded-lg ${
                        friend.isUser ? 'bg-german-gold/10 border border-german-gold/20' : 'hover:bg-white/5'
                      } transition-colors`}
                    >
                      <span className="text-lg w-6 text-center">{friend.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${friend.isUser ? 'text-german-gold' : 'text-white'}`}>
                          {friend.name}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-400" />
                          {friend.streak} dana
                        </p>
                      </div>
                      <span className="text-sm font-bold text-white">{friend.xp} XP</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* AI Tutor Promo */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
                <Sparkles className="mb-4 h-8 w-8 text-blue-200" />
                <h3 className="mb-2 text-lg font-bold">Vežbaj razgovor</h3>
                <p className="mb-4 text-sm text-blue-100">
                  Naš AI tutor je spreman za konverzaciju. Isprobaj nove scenarije!
                </p>
                <Link href="/chat">
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Započni Chat
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <GlassCard className="p-6">
                <h3 className="font-bold text-white mb-4">Brza statistika</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Ukupno vreme</span>
                    </div>
                    <span className="text-sm font-bold text-white">{userStats.totalTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-muted-foreground">Završene lekcije</span>
                    </div>
                    <span className="text-sm font-bold text-white">{userStats.lessonsCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-muted-foreground">Tačnost</span>
                    </div>
                    <span className="text-sm font-bold text-white">{userStats.accuracy}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">Globalni rang</span>
                    </div>
                    <span className="text-sm font-bold text-white">#{userStats.globalRank}</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

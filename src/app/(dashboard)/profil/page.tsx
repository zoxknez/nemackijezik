"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardBackground } from "@/components/background"
import { LevelBadge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { LearningAnalyticsDashboard } from "@/components/profile/LearningAnalytics"
import Link from "next/link"
import {
  Calendar,
  MapPin,
  Edit,
  Settings,
  LogOut,
  Clock,
  Flame,
  Trophy,
  Target,
  Star,
  BookOpen,
  Languages,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  Circle,
  BarChart3,
  Brain,
  Headphones,
  PenTool,
  MessageSquare,
  GraduationCap
} from "lucide-react"

// Simulirani podaci za profil
const userStats = {
  totalXP: 4850,
  nextLevelXP: 5000,
  level: "A2",
  streak: 7,
  maxStreak: 14,
  totalTime: "24h 35m",
  lessonsCompleted: 32,
  totalLessons: 50,
  vocabularyLearned: 456,
  exercisesCompleted: 187,
  accuracy: 87,
  rank: 42,
  totalUsers: 1250,
}

const recentAchievements = [
  { id: 1, title: "Erste Schritte", description: "Završi prvu lekciju", icon: Star, color: "text-german-gold", earned: true },
  { id: 2, title: "Wortschatzmeister", description: "Nauči 100 reči", icon: Languages, color: "text-blue-400", earned: true },
  { id: 3, title: "Feuerteufel", description: "7 dana uzastopnog učenja", icon: Flame, color: "text-orange-500", earned: true },
  { id: 4, title: "Perfektion", description: "100% na testu", icon: Target, color: "text-green-400", earned: false },
]

const skillLevels = [
  { name: "Čitanje", level: 72, icon: BookOpen, color: "from-blue-500 to-cyan-400" },
  { name: "Slušanje", level: 58, icon: Headphones, color: "from-purple-500 to-pink-400" },
  { name: "Pisanje", level: 45, icon: PenTool, color: "from-green-500 to-emerald-400" },
  { name: "Govor", level: 38, icon: MessageSquare, color: "from-orange-500 to-amber-400" },
  { name: "Gramatika", level: 65, icon: Brain, color: "from-red-500 to-rose-400" },
]

const weeklyActivity = [
  { day: "Pon", minutes: 35, lessons: 2 },
  { day: "Uto", minutes: 45, lessons: 3 },
  { day: "Sre", minutes: 20, lessons: 1 },
  { day: "Čet", minutes: 60, lessons: 4 },
  { day: "Pet", minutes: 50, lessons: 3 },
  { day: "Sub", minutes: 75, lessons: 5 },
  { day: "Ned", minutes: 40, lessons: 2 },
]

const learningGoals = [
  { id: 1, title: "Završi A2 nivo", progress: 64, target: "Do kraja meseca" },
  { id: 2, title: "Nauči 500 reči", progress: 91, target: "456/500 reči" },
  { id: 3, title: "30-dnevni streak", progress: 23, target: "7/30 dana" },
]

const recentActivity = [
  { type: "lesson", title: "Lekcija: Familie und Freunde", xp: 50, time: "Pre 2 sata" },
  { type: "vocabulary", title: "Ponavljanje vokabulara", xp: 25, time: "Pre 5 sati" },
  { type: "exercise", title: "Gramatička vežba: Akkusativ", xp: 35, time: "Juče" },
  { type: "achievement", title: "Dostignuće: Feuerteufel", xp: 100, time: "Juče" },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "analytics">("overview")
  
  // Mock user data
  const user = {
    name: "Korisnik",
    email: "korisnik@example.com",
    level: "A2" as const
  }
  
  const joinDate = "Januar 2024"
  const location = "Beograd, Srbija"
  
  const levelProgress = (userStats.totalXP / userStats.nextLevelXP) * 100

  // Analytics data
  const analyticsData = {
    totalStudyTime: 1475, // 24h 35m in minutes
    averageSessionTime: 28,
    totalXP: 4850,
    weeklyXP: 850,
    monthlyXP: 3200,
    lessonsCompleted: 32,
    totalLessons: 50,
    vocabularyLearned: 456,
    exercisesCompleted: 187,
    averageAccuracy: 87,
    strongestSkill: "Čitanje (Reading)",
    weakestSkill: "Govor (Speaking)",
    studyStreak: 7,
    longestStreak: 14,
    lastActive: "Pre 2 sata"
  }

  const skillsData = [
    {
      name: "Čitanje",
      level: 7,
      progress: 72,
      totalExercises: 45,
      accuracy: 89,
      timeSpent: 8,
      icon: BookOpen,
      color: "blue",
      trend: "up" as const
    },
    {
      name: "Slušanje",
      level: 6,
      progress: 58,
      totalExercises: 32,
      accuracy: 84,
      timeSpent: 6,
      icon: Headphones,
      color: "purple",
      trend: "up" as const
    },
    {
      name: "Pisanje",
      level: 5,
      progress: 45,
      totalExercises: 28,
      accuracy: 78,
      timeSpent: 5,
      icon: PenTool,
      color: "green",
      trend: "stable" as const
    },
    {
      name: "Govor",
      level: 4,
      progress: 38,
      totalExercises: 18,
      accuracy: 71,
      timeSpent: 3,
      icon: MessageSquare,
      color: "orange",
      trend: "down" as const
    },
    {
      name: "Gramatika",
      level: 6,
      progress: 65,
      totalExercises: 38,
      accuracy: 92,
      timeSpent: 7,
      icon: Brain,
      color: "red",
      trend: "up" as const
    },
  ]

  return (
    <>
      <Header
        title="Moj Profil"
        subtitle="Upravljaj svojim nalogom i prati svoj napredak"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-8">
          {/* Profile Header Card */}
          <GlassCard className="relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-purple-600/10 to-german-gold/10" />
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute left-1/2 bottom-0 -mb-32 h-48 w-48 rounded-full bg-german-gold/20 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
              {/* Avatar Section */}
              <div className="relative shrink-0">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-linear-to-br from-german-gold via-orange-500 to-red-500 shadow-2xl ring-4 ring-white/10">
                  <span className="text-5xl font-bold text-white">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 rounded-full bg-background p-1.5 ring-2 ring-german-gold/50">
                  <LevelBadge level={user?.level || "A2"} />
                </div>
                {/* Streak Badge */}
                <div className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-orange-500/90 px-2 py-1 text-xs font-bold text-white shadow-lg">
                  <Flame className="h-3 w-3" />
                  {userStats.streak}
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div>
                  <h2 className="text-3xl font-bold text-white">{user?.name || "Korisnik"}</h2>
                  <p className="text-muted-foreground">{user?.email || "korisnik@example.com"}</p>
                </div>

                {/* Level Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Napredak do {userStats.level === "A2" ? "B1" : "sledećeg"} nivoa</span>
                    <span className="font-medium text-german-gold">{userStats.totalXP} / {userStats.nextLevelXP} XP</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div 
                      className="h-full rounded-full bg-linear-to-r from-german-gold via-orange-400 to-red-400 transition-all duration-500"
                      style={{ width: `${levelProgress}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Član od {joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Trophy className="h-4 w-4 text-german-gold" />
                    <span>Rang #{userStats.rank} od {userStats.totalUsers}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button className="bg-linear-to-r from-german-gold to-orange-500 text-white hover:from-german-gold/90 hover:to-orange-500/90">
                  <Edit className="mr-2 h-4 w-4" />
                  Izmeni Profil
                </Button>
                <Link href="/podesavanja">
                  <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10">
                    <Settings className="mr-2 h-4 w-4" />
                    Podešavanja
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>

          {/* Tab Navigation */}
          <GlassCard className="p-2">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === "overview"
                    ? "bg-german-gold text-black"
                    : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                <Trophy className="inline h-4 w-4 mr-2" />
                Pregled
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === "analytics"
                    ? "bg-german-gold text-black"
                    : "text-muted-foreground hover:bg-white/5"
                }`}
              >
                <BarChart3 className="inline h-4 w-4 mr-2" />
                Detaljne Analitike
              </button>
            </div>
          </GlassCard>

          {/* Tab Content */}
          {activeTab === "overview" ? (
            <>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Ukupno vreme", value: userStats.totalTime, icon: Clock, color: "text-blue-400", bg: "bg-blue-500/20" },
              { label: "Najduži streak", value: `${userStats.maxStreak} dana`, icon: Flame, color: "text-orange-500", bg: "bg-orange-500/20" },
              { label: "Završene lekcije", value: `${userStats.lessonsCompleted}/${userStats.totalLessons}`, icon: BookOpen, color: "text-green-400", bg: "bg-green-500/20" },
              { label: "Prosečna tačnost", value: `${userStats.accuracy}%`, icon: Target, color: "text-purple-400", bg: "bg-purple-500/20" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="group relative overflow-hidden p-6 transition-all hover:scale-[1.02]">
                <div className={`absolute inset-0 ${stat.bg} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ${stat.color} transition-transform group-hover:scale-110`}>
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Skills Breakdown */}
            <GlassCard className="p-6 lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Brain className="h-5 w-5 text-purple-400" />
                  Veštine
                </h3>
                <Link href="/vezbe" className="text-sm text-german-gold hover:underline">
                  Vežbaj veštine →
                </Link>
              </div>
              
              <div className="space-y-5">
                {skillLevels.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-r ${skill.color}`}>
                          <skill.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div 
                        className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-700`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Learning Goals */}
            <GlassCard className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Target className="h-5 w-5 text-green-400" />
                  Ciljevi
                </h3>
                <Button variant="ghost" size="sm" className="text-german-gold hover:bg-german-gold/10">
                  + Dodaj
                </Button>
              </div>
              
              <div className="space-y-4">
                {learningGoals.map((goal) => (
                  <div key={goal.id} className="space-y-2 rounded-lg bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{goal.title}</span>
                      <span className="text-sm text-german-gold">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{goal.target}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Activity Graph & Recent Achievements */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Weekly Activity */}
            <GlassCard className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  Nedeljni pregled
                </h3>
                <select className="rounded-lg border border-white/10 bg-black/20 px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-german-gold/50">
                  <option>Ova nedelja</option>
                  <option>Prošla nedelja</option>
                </select>
              </div>
              
              <div className="flex h-52 items-end justify-between gap-2">
                {weeklyActivity.map((day, i) => {
                  const maxMinutes = Math.max(...weeklyActivity.map(d => d.minutes))
                  const height = (day.minutes / maxMinutes) * 100
                  const isToday = i === new Date().getDay() - 1 || (i === 6 && new Date().getDay() === 0)
                  
                  return (
                    <div key={day.day} className="group relative flex w-full flex-col items-center">
                      <div className="absolute -top-8 hidden rounded bg-black/80 px-2 py-1 text-xs text-white group-hover:block">
                        {day.minutes} min
                      </div>
                      <div className="relative w-full rounded-t-lg bg-white/5 transition-colors" style={{ height: '100%' }}>
                        <div 
                          className={`absolute bottom-0 w-full rounded-t-lg transition-all duration-500 ${
                            isToday 
                              ? 'bg-linear-to-t from-german-gold to-orange-400' 
                              : 'bg-linear-to-t from-blue-600/50 to-blue-400/50 group-hover:from-blue-600 group-hover:to-blue-400'
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <div className={`mt-2 text-xs ${isToday ? 'font-bold text-german-gold' : 'text-muted-foreground'}`}>
                        {day.day}
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="mt-6 flex items-center justify-between rounded-lg bg-white/5 p-4">
                <div>
                  <p className="text-sm text-muted-foreground">Ukupno ove nedelje</p>
                  <p className="text-xl font-bold text-white">
                    {weeklyActivity.reduce((acc, d) => acc + d.minutes, 0)} minuta
                  </p>
                </div>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+15%</span>
                </div>
              </div>
            </GlassCard>

            {/* Recent Achievements */}
            <GlassCard className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                  <Award className="h-5 w-5 text-german-gold" />
                  Poslednja dostignuća
                </h3>
                <Link href="/dostignuca" className="text-sm text-german-gold hover:underline">
                  Sva dostignuća →
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`flex items-center gap-4 rounded-lg p-4 transition-all ${
                      achievement.earned 
                        ? 'bg-white/5 hover:bg-white/10' 
                        : 'bg-white/2 opacity-50'
                    }`}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      achievement.earned ? 'bg-german-gold/20' : 'bg-white/5'
                    }`}>
                      <achievement.icon className={`h-6 w-6 ${achievement.earned ? achievement.color : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    {achievement.earned ? (
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Recent Activity */}
          <GlassCard className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <Clock className="h-5 w-5 text-blue-400" />
                Nedavna aktivnost
              </h3>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between rounded-lg bg-white/5 p-4 transition-all hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      activity.type === 'lesson' ? 'bg-blue-500/20 text-blue-400' :
                      activity.type === 'vocabulary' ? 'bg-purple-500/20 text-purple-400' :
                      activity.type === 'exercise' ? 'bg-green-500/20 text-green-400' :
                      'bg-german-gold/20 text-german-gold'
                    }`}>
                      {activity.type === 'lesson' && <BookOpen className="h-5 w-5" />}
                      {activity.type === 'vocabulary' && <Languages className="h-5 w-5" />}
                      {activity.type === 'exercise' && <GraduationCap className="h-5 w-5" />}
                      {activity.type === 'achievement' && <Trophy className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium text-white">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-german-gold/10 px-3 py-1">
                    <Zap className="h-4 w-4 text-german-gold" />
                    <span className="text-sm font-medium text-german-gold">+{activity.xp} XP</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Account Actions */}
          <div className="flex flex-wrap justify-end gap-4">
            <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
              <GraduationCap className="mr-2 h-4 w-4" />
              Eksportuj napredak
            </Button>
            <Button variant="outline" className="border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20">
              <LogOut className="mr-2 h-4 w-4" />
              Odjavi se
            </Button>
          </div>
          </>
          ) : (
            // Analytics Tab
            <LearningAnalyticsDashboard 
              analytics={analyticsData}
              skillsData={skillsData}
            />
          )}
        </div>
      </main>
    </>
  )
}

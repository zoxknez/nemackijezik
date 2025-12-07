"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { DashboardBackground } from "@/components/background"
import { achievements, type Achievement } from "@/data/achievements"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { 
  Trophy, 
  CheckCircle2,
  Flame,
  Target,
  Star,
  Crown,
  Sparkles,
  Clock,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Gift,
  Lock,
  ChevronRight,
  Filter,
  Search,
  X,
  Share2
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock user progress - in real app this comes from DB
const userProgress: Record<string, number> = {
  "learn-1": 12,
  "learn-2": 150,
  "learn-3": 25,
  "streak-1": 7,
  "streak-2": 14,
  "mastery-1": 5,
  "mastery-2": 3,
  "extra-1": 1,
  "extra-2": 10,
}

// Mock unlocked dates
const unlockedDates: Record<string, string> = {
  "learn-1": "2024-11-15",
  "learn-2": "2024-11-20",
  "streak-1": "2024-11-18",
  "mastery-1": "2024-11-22",
}

const categories = [
  { id: "all", label: "Sve", icon: Trophy, count: achievements.length },
  { id: "learning", label: "Učenje", icon: Target, count: achievements.filter(a => a.category === "learning").length },
  { id: "streak", label: "Rednost", icon: Flame, count: achievements.filter(a => a.category === "streak").length },
  { id: "mastery", label: "Majstorstvo", icon: Crown, count: achievements.filter(a => a.category === "mastery").length },
  { id: "social", label: "Ekstra", icon: Star, count: achievements.filter(a => a.category === "social").length },
]

// Leaderboard mock data
const leaderboard = [
  { rank: 1, name: "Марко С.", xp: 15420, achievements: 42, avatar: "🏆" },
  { rank: 2, name: "Ана П.", xp: 14850, achievements: 38, avatar: "🥈" },
  { rank: 3, name: "Петар Д.", xp: 13200, achievements: 35, avatar: "🥉" },
  { rank: 4, name: "Ви", xp: 8500, achievements: 18, avatar: "👤", isUser: true },
  { rank: 5, name: "Јелена М.", xp: 7800, achievements: 15, avatar: "🎯" },
]

// Recent achievements mock
const recentUnlocks = [
  { id: "learn-2", date: "Pre 2 dana", tier: "silver" },
  { id: "streak-1", date: "Pre 5 dana", tier: "bronze" },
  { id: "mastery-1", date: "Pre 1 nedelju", tier: "bronze" },
]

// Daily/Weekly challenges
const challenges = [
  { 
    id: 1, 
    title: "Dnevni maraton", 
    description: "Završi 5 lekcija danas",
    progress: 3,
    goal: 5,
    reward: 100,
    timeLeft: "8h 23m",
    type: "daily"
  },
  { 
    id: 2, 
    title: "Vokabular majstor", 
    description: "Nauči 50 novih reči ove nedelje",
    progress: 32,
    goal: 50,
    reward: 500,
    timeLeft: "3 dana",
    type: "weekly"
  },
  { 
    id: 3, 
    title: "Savršen streak", 
    description: "Održi streak 7 dana zaredom",
    progress: 5,
    goal: 7,
    reward: 250,
    timeLeft: "2 dana",
    type: "weekly"
  },
]

// Milestone rewards
const milestones = [
  { level: 10, reward: "Bronzani okvir", unlocked: true, icon: "🥉" },
  { level: 25, reward: "Srebrni okvir", unlocked: true, icon: "🥈" },
  { level: 50, reward: "Zlatni okvir", unlocked: false, icon: "🥇" },
  { level: 100, reward: "Dijamantski okvir", unlocked: false, icon: "💎" },
]

export default function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [showUnlockedOnly, setShowUnlockedOnly] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [activeTab, setActiveTab] = useState<"achievements" | "challenges" | "leaderboard">("achievements")

  const filteredAchievements = achievements.filter(a => {
    const matchesCategory = activeCategory === "all" || a.category === activeCategory
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         a.description.toLowerCase().includes(searchQuery.toLowerCase())
    const progress = userProgress[a.id] || 0
    const isUnlocked = progress >= a.tiers.bronze
    const matchesUnlocked = !showUnlockedOnly || isUnlocked
    return matchesCategory && matchesSearch && matchesUnlocked
  })

  // Calculate total stats
  const totalAchievements = achievements.length
  const unlockedAchievements = achievements.filter(a => (userProgress[a.id] || 0) >= a.tiers.bronze).length
  const goldAchievements = achievements.filter(a => (userProgress[a.id] || 0) >= a.tiers.gold).length
  const totalXpEarned = achievements.reduce((acc, a) => {
    const progress = userProgress[a.id] || 0
    if (progress >= a.tiers.gold) return acc + a.xpReward
    if (progress >= a.tiers.silver) return acc + (a.xpReward * 0.6)
    if (progress >= a.tiers.bronze) return acc + (a.xpReward * 0.3)
    return acc
  }, 0)

  // Calculate next achievement to unlock
  const nextToUnlock = achievements.find(a => {
    const progress = userProgress[a.id] || 0
    return progress < a.tiers.bronze && progress > 0
  })

  return (
    <>
      <Header
        title="Dostignuća"
        subtitle="Prati svoj napredak i osvajaj nagrade"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-8">
          {/* Hero Section with Stats */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-900/30 via-orange-900/20 to-background p-8">
            <div className="absolute right-0 top-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute left-1/2 bottom-0 -mb-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              {/* Left - Main Stats */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/20">
                    <Trophy className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Tvoja kolekcija</h2>
                    <p className="text-muted-foreground">Sakupljaj dostignuća i osvajaj nagrade</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">Osvojeno</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{unlockedAchievements}</p>
                    <p className="text-xs text-muted-foreground">od {totalAchievements}</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="h-4 w-4 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">Zlatna</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{goldAchievements}</p>
                    <p className="text-xs text-muted-foreground">max. nivo</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-german-gold" />
                      <span className="text-xs text-muted-foreground">XP zarađeno</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{Math.round(totalXpEarned)}</p>
                    <p className="text-xs text-muted-foreground">ukupno</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-xs text-muted-foreground">Progres</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{Math.round((unlockedAchievements / totalAchievements) * 100)}%</p>
                    <p className="text-xs text-muted-foreground">završeno</p>
                  </div>
                </div>
              </div>

              {/* Right - Next Achievement & Recent */}
              <div className="space-y-4">
                {/* Next to Unlock */}
                {nextToUnlock && (
                  <div className="p-4 rounded-xl bg-gradient-to-br from-german-gold/20 to-orange-500/10 border border-german-gold/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="h-4 w-4 text-german-gold" />
                      <span className="text-sm font-medium text-german-gold">Sledeće dostignuće</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        <nextToUnlock.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{nextToUnlock.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress 
                            value={(userProgress[nextToUnlock.id] || 0) / nextToUnlock.tiers.bronze * 100} 
                            className="h-1.5 flex-1" 
                          />
                          <span className="text-xs text-muted-foreground">
                            {userProgress[nextToUnlock.id] || 0}/{nextToUnlock.tiers.bronze}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recent Unlocks */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-white">Nedavno osvojeno</span>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    {recentUnlocks.map((unlock) => {
                      const achievement = achievements.find(a => a.id === unlock.id)
                      if (!achievement) return null
                      return (
                        <div key={unlock.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <div className={cn(
                            "p-1.5 rounded-lg",
                            unlock.tier === "gold" && "bg-yellow-500/20",
                            unlock.tier === "silver" && "bg-slate-400/20",
                            unlock.tier === "bronze" && "bg-amber-600/20"
                          )}>
                            <achievement.icon className={cn(
                              "h-4 w-4",
                              unlock.tier === "gold" && "text-yellow-400",
                              unlock.tier === "silver" && "text-slate-300",
                              unlock.tier === "bronze" && "text-amber-500"
                            )} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-white truncate">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{unlock.date}</p>
                          </div>
                          <span className={cn(
                            "text-xs font-medium uppercase",
                            unlock.tier === "gold" && "text-yellow-400",
                            unlock.tier === "silver" && "text-slate-300",
                            unlock.tier === "bronze" && "text-amber-500"
                          )}>
                            {unlock.tier}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {[
              { id: "achievements", label: "Dostignuća", icon: Trophy },
              { id: "challenges", label: "Izazovi", icon: Target },
              { id: "leaderboard", label: "Rang lista", icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                  activeTab === tab.id
                    ? "bg-german-gold text-black font-medium"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Achievements Tab */}
          <AnimatePresence mode="wait">
            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Pretraži dostignuća..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                  
                  {/* Toggle */}
                  <Button
                    variant="outline"
                    onClick={() => setShowUnlockedOnly(!showUnlockedOnly)}
                    className={cn(
                      "border-white/10",
                      showUnlockedOnly && "bg-german-gold/20 border-german-gold/30 text-german-gold"
                    )}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showUnlockedOnly ? "Samo osvojena" : "Sva dostignuća"}
                  </Button>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={activeCategory === cat.id ? "default" : "outline"}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "rounded-full gap-2",
                        activeCategory === cat.id 
                          ? "bg-white text-black hover:bg-white/90" 
                          : "bg-white/5 border-white/10 hover:bg-white/10 text-muted-foreground"
                      )}
                    >
                      <cat.icon className="h-4 w-4" />
                      {cat.label}
                      <span className="text-xs opacity-60">({cat.count})</span>
                    </Button>
                  ))}
                </div>

                {/* Achievements Grid */}
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredAchievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AchievementCard 
                        achievement={achievement} 
                        progress={userProgress[achievement.id] || 0}
                        onClick={() => setSelectedAchievement(achievement)}
                      />
                    </motion.div>
                  ))}
                </div>

                {filteredAchievements.length === 0 && (
                  <div className="text-center py-12">
                    <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-20" />
                    <p className="text-muted-foreground">Nema dostignuća koja odgovaraju pretrazi</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Challenges Tab */}
            {activeTab === "challenges" && (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Daily/Weekly Challenges */}
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Active Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Target className="h-5 w-5 text-german-gold" />
                      Aktivni izazovi
                    </h3>
                    {challenges.map((challenge) => (
                      <GlassCard key={challenge.id} className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className={cn(
                                "px-2 py-0.5 rounded text-xs font-medium",
                                challenge.type === "daily" 
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                              )}>
                                {challenge.type === "daily" ? "Dnevni" : "Nedeljni"}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {challenge.timeLeft}
                              </span>
                            </div>
                            <h4 className="font-bold text-white">{challenge.title}</h4>
                            <p className="text-sm text-muted-foreground">{challenge.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-german-gold">
                              <Gift className="h-4 w-4" />
                              <span className="font-bold">+{challenge.reward} XP</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Napredak</span>
                            <span className="text-white font-medium">{challenge.progress}/{challenge.goal}</span>
                          </div>
                          <Progress value={(challenge.progress / challenge.goal) * 100} className="h-2" />
                        </div>
                      </GlassCard>
                    ))}
                  </div>

                  {/* Milestones */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Crown className="h-5 w-5 text-german-gold" />
                      Miljokazi
                    </h3>
                    <GlassCard className="p-5">
                      <div className="space-y-4">
                        {milestones.map((milestone) => (
                          <div 
                            key={milestone.level}
                            className={cn(
                              "flex items-center gap-4 p-3 rounded-xl transition-all",
                              milestone.unlocked ? "bg-white/5" : "opacity-50"
                            )}
                          >
                            <div className={cn(
                              "flex h-12 w-12 items-center justify-center rounded-full text-2xl",
                              milestone.unlocked ? "bg-german-gold/20" : "bg-white/5"
                            )}>
                              {milestone.unlocked ? milestone.icon : <Lock className="h-5 w-5 text-muted-foreground" />}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-white">Nivo {milestone.level}</p>
                              <p className="text-sm text-muted-foreground">{milestone.reward}</p>
                            </div>
                            {milestone.unlocked ? (
                              <CheckCircle2 className="h-5 w-5 text-green-400" />
                            ) : (
                              <span className="text-xs text-muted-foreground">
                                Još {milestone.level - 18} nivoa
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </GlassCard>

                    {/* Streak Bonus */}
                    <GlassCard className="p-5 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                          <Flame className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-white">Streak Bonus</p>
                          <p className="text-sm text-muted-foreground">Održi streak 10 dana za x2 XP</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange-400">7</p>
                          <p className="text-xs text-muted-foreground">dana</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-1">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div 
                            key={i}
                            className={cn(
                              "flex-1 h-2 rounded-full",
                              i < 7 ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-white/10"
                            )}
                          />
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Leaderboard Tab */}
            {activeTab === "leaderboard" && (
              <motion.div
                key="leaderboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Main Leaderboard */}
                  <div className="lg:col-span-2">
                    <GlassCard className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Award className="h-5 w-5 text-german-gold" />
                          Rang lista
                        </h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-white/10 text-xs">
                            Ove nedelje
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                            Svih vremena
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {leaderboard.map((user, index) => (
                          <motion.div
                            key={user.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                              "flex items-center gap-4 p-4 rounded-xl transition-all",
                              user.isUser 
                                ? "bg-german-gold/10 border border-german-gold/20" 
                                : "bg-white/5 hover:bg-white/10"
                            )}
                          >
                            <div className={cn(
                              "flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold",
                              user.rank === 1 && "bg-yellow-500/20 text-yellow-400",
                              user.rank === 2 && "bg-slate-400/20 text-slate-300",
                              user.rank === 3 && "bg-amber-600/20 text-amber-500",
                              user.rank > 3 && "bg-white/10 text-white"
                            )}>
                              {user.rank <= 3 ? user.avatar : `#${user.rank}`}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={cn(
                                "font-medium truncate",
                                user.isUser ? "text-german-gold" : "text-white"
                              )}>
                                {user.name} {user.isUser && "(Vi)"}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {user.achievements} dostignuća
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-white">{user.xp.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">XP</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Your Stats */}
                  <div className="space-y-4">
                    <GlassCard className="p-6 bg-gradient-to-br from-german-gold/10 to-orange-500/5 border-german-gold/20">
                      <h3 className="text-lg font-bold text-white mb-4">Vaša pozicija</h3>
                      <div className="text-center mb-4">
                        <div className="text-5xl font-bold text-german-gold mb-1">#4</div>
                        <p className="text-muted-foreground">od 1,234 učenika</p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Do #3 mesta</span>
                          <span className="text-white font-medium">4,700 XP</span>
                        </div>
                        <Progress value={65} className="h-2" />
                      </div>
                    </GlassCard>

                    <GlassCard className="p-6">
                      <h3 className="text-sm font-medium text-muted-foreground mb-4">Vaša statistika</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-german-gold" />
                            <span className="text-white">Ukupno XP</span>
                          </div>
                          <span className="font-bold text-white">8,500</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-yellow-400" />
                            <span className="text-white">Dostignuća</span>
                          </div>
                          <span className="font-bold text-white">18</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Flame className="h-4 w-4 text-orange-400" />
                            <span className="text-white">Najduži streak</span>
                          </div>
                          <span className="font-bold text-white">14 dana</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-400" />
                            <span className="text-white">Aktivnih dana</span>
                          </div>
                          <span className="font-bold text-white">45</span>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <AchievementDetailModal 
                achievement={selectedAchievement} 
                progress={userProgress[selectedAchievement.id] || 0}
                onClose={() => setSelectedAchievement(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function AchievementCard({ 
  achievement, 
  progress,
  onClick
}: { 
  achievement: Achievement
  progress: number
  onClick: () => void
}) {
  // Determine current tier
  let currentTier = "locked"
  let nextGoal = achievement.tiers.bronze
  let tierColor = "text-muted-foreground"
  let tierBg = "bg-white/5"

  if (progress >= achievement.tiers.gold) {
    currentTier = "gold"
    nextGoal = achievement.maxProgress
    tierColor = "text-yellow-400"
    tierBg = "bg-yellow-500/20"
  } else if (progress >= achievement.tiers.silver) {
    currentTier = "silver"
    nextGoal = achievement.tiers.gold
    tierColor = "text-slate-300"
    tierBg = "bg-slate-500/20"
  } else if (progress >= achievement.tiers.bronze) {
    currentTier = "bronze"
    nextGoal = achievement.tiers.silver
    tierColor = "text-amber-600"
    tierBg = "bg-amber-600/20"
  }

  const isUnlocked = currentTier !== "locked"
  const progressPercent = Math.min(100, (progress / nextGoal) * 100)

  return (
    <GlassCard 
      className={cn(
        "h-full p-6 relative overflow-hidden transition-all cursor-pointer hover:scale-[1.02]",
        !isUnlocked && "opacity-70 grayscale"
      )}
      onClick={onClick}
    >
      {/* Background Glow */}
      {isUnlocked && (
        <div className={cn(
          "absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full blur-3xl opacity-20",
          currentTier === "gold" && "bg-yellow-500",
          currentTier === "silver" && "bg-slate-400",
          currentTier === "bronze" && "bg-amber-600",
        )} />
      )}

      <div className="relative z-10 flex flex-col h-full gap-4">
        <div className="flex items-start justify-between">
          <div className={cn("p-3 rounded-xl", tierBg)}>
            <achievement.icon className={cn("h-6 w-6", tierColor)} />
          </div>
          <div className="flex items-center gap-2">
            {isUnlocked && (
              <div className={cn("px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border", 
                currentTier === "gold" && "border-yellow-500/50 text-yellow-500 bg-yellow-500/10",
                currentTier === "silver" && "border-slate-400/50 text-slate-400 bg-slate-400/10",
                currentTier === "bronze" && "border-amber-600/50 text-amber-600 bg-amber-600/10",
              )}>
                {currentTier}
              </div>
            )}
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div>
          <h3 className={cn("font-bold text-lg", isUnlocked ? "text-white" : "text-muted-foreground")}>
            {achievement.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {achievement.description}
          </p>
        </div>

        <div className="mt-auto space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">
              {progress} / {nextGoal}
            </span>
            <span className={cn("font-medium", tierColor)}>
              {Math.round(progressPercent)}%
            </span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          
          {/* Tier indicators */}
          <div className="flex gap-1 mt-2">
            <div className={cn(
              "flex-1 h-1 rounded-full",
              progress >= achievement.tiers.bronze ? "bg-amber-600" : "bg-white/10"
            )} />
            <div className={cn(
              "flex-1 h-1 rounded-full",
              progress >= achievement.tiers.silver ? "bg-slate-400" : "bg-white/10"
            )} />
            <div className={cn(
              "flex-1 h-1 rounded-full",
              progress >= achievement.tiers.gold ? "bg-yellow-500" : "bg-white/10"
            )} />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

function AchievementDetailModal({
  achievement,
  progress,
  onClose
}: {
  achievement: Achievement
  progress: number
  onClose: () => void
}) {
  let currentTier = "locked"
  if (progress >= achievement.tiers.gold) currentTier = "gold"
  else if (progress >= achievement.tiers.silver) currentTier = "silver"
  else if (progress >= achievement.tiers.bronze) currentTier = "bronze"

  const isUnlocked = currentTier !== "locked"
  const unlockedDate = unlockedDates[achievement.id]

  return (
    <GlassCard className="p-6 border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={cn(
            "p-3 rounded-xl",
            currentTier === "gold" && "bg-yellow-500/20",
            currentTier === "silver" && "bg-slate-400/20",
            currentTier === "bronze" && "bg-amber-600/20",
            currentTier === "locked" && "bg-white/10"
          )}>
            <achievement.icon className={cn(
              "h-8 w-8",
              currentTier === "gold" && "text-yellow-400",
              currentTier === "silver" && "text-slate-300",
              currentTier === "bronze" && "text-amber-500",
              currentTier === "locked" && "text-muted-foreground"
            )} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{achievement.title}</h2>
            {isUnlocked && currentTier !== "locked" && (
              <span className={cn(
                "text-xs font-medium uppercase",
                currentTier === "gold" && "text-yellow-400",
                currentTier === "silver" && "text-slate-300",
                currentTier === "bronze" && "text-amber-500"
              )}>
                {currentTier} tier
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="text-muted-foreground mb-6">{achievement.description}</p>

      {/* Tiers */}
      <div className="space-y-3 mb-6">
        <h3 className="text-sm font-medium text-white">Nivoi dostignuća</h3>
        {[
          { tier: "bronze", value: achievement.tiers.bronze, color: "text-amber-500", bg: "bg-amber-600/20" },
          { tier: "silver", value: achievement.tiers.silver, color: "text-slate-300", bg: "bg-slate-400/20" },
          { tier: "gold", value: achievement.tiers.gold, color: "text-yellow-400", bg: "bg-yellow-500/20" }
        ].map((t) => (
          <div 
            key={t.tier}
            className={cn(
              "flex items-center justify-between p-3 rounded-lg",
              progress >= t.value ? t.bg : "bg-white/5"
            )}
          >
            <div className="flex items-center gap-2">
              {progress >= t.value ? (
                <CheckCircle2 className={cn("h-4 w-4", t.color)} />
              ) : (
                <Lock className="h-4 w-4 text-muted-foreground" />
              )}
              <span className={cn(
                "text-sm font-medium capitalize",
                progress >= t.value ? t.color : "text-muted-foreground"
              )}>
                {t.tier}
              </span>
            </div>
            <span className={cn(
              "text-sm",
              progress >= t.value ? "text-white" : "text-muted-foreground"
            )}>
              {t.value}+
            </span>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Trenutni napredak</span>
          <span className="text-white font-medium">{progress} / {achievement.maxProgress}</span>
        </div>
        <Progress value={(progress / achievement.maxProgress) * 100} className="h-3" />
      </div>

      {/* Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-german-gold" />
            <span className="text-sm text-muted-foreground">XP nagrada</span>
          </div>
          <span className="text-white font-medium">+{achievement.xpReward} XP</span>
        </div>
        {unlockedDate && (
          <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-muted-foreground">Osvojeno</span>
            </div>
            <span className="text-white font-medium">{unlockedDate}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1 border-white/10" onClick={onClose}>
          <Share2 className="h-4 w-4 mr-2" />
          Podeli
        </Button>
        <Button className="flex-1 bg-german-gold text-black hover:bg-german-gold/90" onClick={onClose}>
          Zatvori
        </Button>
      </div>
    </GlassCard>
  )
}

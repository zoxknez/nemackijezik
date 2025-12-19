"use client"

import { useMemo } from "react"
import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  Award,
  Flame,
  Clock,
  BookOpen,
  Brain,
  Headphones,
  Mic,
  PenTool,
  BarChart3,
  Calendar,
  Zap
} from "lucide-react"

interface LearningAnalytics {
  totalStudyTime: number // minutes
  averageSessionTime: number // minutes
  totalXP: number
  weeklyXP: number
  monthlyXP: number
  lessonsCompleted: number
  totalLessons: number
  vocabularyLearned: number
  exercisesCompleted: number
  averageAccuracy: number
  strongestSkill: string
  weakestSkill: string
  studyStreak: number
  longestStreak: number
  lastActive: string
}

interface SkillData {
  name: string
  level: number
  progress: number
  totalExercises: number
  accuracy: number
  timeSpent: number
  icon: React.ComponentType<{ className?: string }>
  color: string
  trend: "up" | "down" | "stable"
}

interface LearningAnalyticsProps {
  analytics: LearningAnalytics
  skillsData: SkillData[]
}

export function LearningAnalyticsDashboard({ analytics, skillsData }: LearningAnalyticsProps) {
  // Calculate trends
  const xpTrend = useMemo(() => {
    const weeklyAvg = analytics.weeklyXP / 7
    const monthlyAvg = analytics.monthlyXP / 30
    if (weeklyAvg > monthlyAvg * 1.1) return "up"
    if (weeklyAvg < monthlyAvg * 0.9) return "down"
    return "stable"
  }, [analytics])

  const completionRate = useMemo(() => {
    return Math.round((analytics.lessonsCompleted / analytics.totalLessons) * 100)
  }, [analytics])

  const studyHoursTotal = useMemo(() => {
    return Math.floor(analytics.totalStudyTime / 60)
  }, [analytics])

  const getLevelProgress = (xp: number) => {
    const xpForNextLevel = 500
    return (xp % xpForNextLevel) / xpForNextLevel * 100
  }

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{studyHoursTotal}h</div>
                <div className="text-xs text-muted-foreground">Ukupno učenja</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Prosek: {analytics.averageSessionTime} min/sesija
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-german-gold/20">
                <Zap className="h-5 w-5 text-german-gold" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{analytics.totalXP.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Ukupno XP</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs">
              {xpTrend === "up" ? (
                <>
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400">+{analytics.weeklyXP} ove nedelje</span>
                </>
              ) : xpTrend === "down" ? (
                <>
                  <TrendingDown className="h-3 w-3 text-red-400" />
                  <span className="text-red-400">Opao tempo</span>
                </>
              ) : (
                <span className="text-muted-foreground">Stabilan tempo</span>
              )}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <BookOpen className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{analytics.lessonsCompleted}</div>
                <div className="text-xs text-muted-foreground">Završene lekcije</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {completionRate}% od ukupno {analytics.totalLessons}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{analytics.studyStreak}</div>
                <div className="text-xs text-muted-foreground">Dnevni streak</div>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Najbolji: {analytics.longestStreak} dana
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Skills Radar Chart (Text-based) */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-german-gold" />
          Analiza veština
        </h3>
        <div className="space-y-4">
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg", `bg-${skill.color}-500/20`)}>
                      <Icon className={cn("h-4 w-4", `text-${skill.color}-400`)} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">Nivo {skill.level}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{skill.totalExercises} vežbi</span>
                        <span>•</span>
                        <span>{skill.accuracy}% tačnost</span>
                        <span>•</span>
                        <span>{skill.timeSpent}h</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {skill.trend === "up" && (
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    )}
                    {skill.trend === "down" && (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                    <span className="text-sm font-bold text-white">{skill.progress}%</span>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className={cn("h-full", `bg-${skill.color}-500`)}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </GlassCard>

      {/* Strengths and Weaknesses */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 border-green-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-5 w-5 text-green-400" />
            <h3 className="font-semibold text-white">Najjača oblast</h3>
          </div>
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-2xl font-bold text-green-400 mb-1">
              {analytics.strongestSkill}
            </p>
            <p className="text-sm text-muted-foreground">
              Nastavi da izvrsno radis u ovoj oblasti! Možda možeš da pomogneš drugim učenicima.
            </p>
          </div>
        </GlassCard>

        <GlassCard className="p-6 border-yellow-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-yellow-400" />
            <h3 className="font-semibold text-white">Oblast za unapređenje</h3>
          </div>
          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-2xl font-bold text-yellow-400 mb-1">
              {analytics.weakestSkill}
            </p>
            <p className="text-sm text-muted-foreground">
              Fokusiraj se na ovu oblast narednih nedelja. Preporučujemo dodatne vežbe.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Accuracy & Consistency */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="font-semibold text-white mb-4">Prosečna tačnost</h3>
          <div className="relative h-48 flex items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                className="text-white/10"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="currentColor"
                strokeWidth="20"
                fill="transparent"
                strokeDasharray={502.4}
                strokeDashoffset={502.4 * (1 - analytics.averageAccuracy / 100)}
                className={cn(
                  "transition-all duration-1000",
                  analytics.averageAccuracy >= 80 ? "text-green-500" :
                  analytics.averageAccuracy >= 60 ? "text-yellow-500" :
                  "text-red-500"
                )}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">{analytics.averageAccuracy}%</span>
              <span className="text-sm text-muted-foreground">tačnost</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-white mb-4">Aktivnost</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Vokabular</span>
              <span className="font-bold text-white">{analytics.vocabularyLearned} reči</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Vežbe</span>
              <span className="font-bold text-white">{analytics.exercisesCompleted} završeno</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Prosečna sesija</span>
              <span className="font-bold text-white">{analytics.averageSessionTime} min</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Poslednja aktivnost</span>
              <span className="font-bold text-white">{analytics.lastActive}</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

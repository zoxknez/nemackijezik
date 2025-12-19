"use client"

import { useMemo } from "react"
import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  Calendar,
  Flame,
  Target,
  Award,
  BarChart3,
  Clock,
  Zap
} from "lucide-react"

interface ProgressVisualizationProps {
  weeklyActivity: Array<{
    day: string
    xp: number
    completed: boolean
    minutes?: number
  }>
  dailyGoal: number
  todayXp: number
  streak: number
  maxStreak: number
}

export function ProgressVisualization({
  weeklyActivity,
  dailyGoal,
  todayXp,
  streak,
  maxStreak
}: ProgressVisualizationProps) {
  const maxXp = useMemo(() => {
    return Math.max(...weeklyActivity.map(d => d.xp), dailyGoal)
  }, [weeklyActivity, dailyGoal])

  const totalWeeklyXp = useMemo(() => {
    return weeklyActivity.reduce((sum, d) => sum + d.xp, 0)
  }, [weeklyActivity])

  const avgDailyXp = useMemo(() => {
    return Math.round(totalWeeklyXp / weeklyActivity.length)
  }, [totalWeeklyXp, weeklyActivity])

  const daysCompleted = useMemo(() => {
    return weeklyActivity.filter(d => d.xp >= dailyGoal).length
  }, [weeklyActivity, dailyGoal])

  return (
    <div className="space-y-6">
      {/* Weekly Progress Chart */}
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-german-gold" />
              Nedeljni progres
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Dnevni cilj: {dailyGoal} XP
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-german-gold">
              {totalWeeklyXp}
            </div>
            <div className="text-xs text-muted-foreground">
              XP ove nedelje
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-48">
          {weeklyActivity.map((day, idx) => {
            const height = (day.xp / maxXp) * 100
            const isToday = idx === weeklyActivity.length - 1
            const meetsGoal = day.xp >= dailyGoal

            return (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  className="w-full flex flex-col justify-end flex-1 relative group"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                      <div className="font-semibold">{day.xp} XP</div>
                      {day.minutes && (
                        <div className="text-muted-foreground">{day.minutes} min</div>
                      )}
                    </div>
                  </div>

                  {/* Bar */}
                  <div
                    className={cn(
                      "w-full rounded-t-lg transition-all relative",
                      meetsGoal
                        ? "bg-gradient-to-t from-german-gold to-yellow-300"
                        : "bg-gradient-to-t from-gray-600 to-gray-500",
                      isToday && "ring-2 ring-german-gold ring-offset-2 ring-offset-background"
                    )}
                    style={{ height: "100%" }}
                  >
                    {meetsGoal && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <Zap className="h-4 w-4 text-german-gold" />
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Day label */}
                <div className="text-center">
                  <div className={cn(
                    "text-xs font-medium",
                    isToday ? "text-german-gold" : "text-muted-foreground"
                  )}>
                    {day.day}
                  </div>
                  {isToday && (
                    <div className="text-[10px] text-german-gold">Danas</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Goal line */}
        <div className="relative mt-4">
          <div className="absolute inset-x-0 border-t-2 border-dashed border-german-gold/30" />
          <div className="absolute -top-3 right-0 text-xs text-german-gold bg-background px-2">
            Cilj: {dailyGoal} XP
          </div>
        </div>
      </GlassCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{streak}</div>
                <div className="text-xs text-muted-foreground">Dnevni streak</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Najbolji:</span>
                <span className="text-white font-medium">{maxStreak} dana</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Target className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{todayXp}</div>
                <div className="text-xs text-muted-foreground">XP danas</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((todayXp / dailyGoal) * 100, 100)}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {dailyGoal - todayXp > 0 ? `Još ${dailyGoal - todayXp} XP` : "Cilj ostvaren! 🎉"}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{avgDailyXp}</div>
                <div className="text-xs text-muted-foreground">Prosek/dan</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Trend:</span>
                <span className={cn(
                  "font-medium flex items-center gap-1",
                  avgDailyXp >= dailyGoal ? "text-green-400" : "text-yellow-400"
                )}>
                  {avgDailyXp >= dailyGoal ? "↗" : "→"}
                  {avgDailyXp >= dailyGoal ? "Odlično" : "Dobro"}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Calendar className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{daysCompleted}</div>
                <div className="text-xs text-muted-foreground">Dana sa ciljem</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Ove nedelje:</span>
                <span className="text-white font-medium">{daysCompleted}/7 dana</span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}

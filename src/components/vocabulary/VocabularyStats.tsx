"use client"

import { useMemo } from "react"
import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  TrendingUp,
  Calendar,
  Zap,
  Target,
  Award,
  Activity,
  BarChart3,
  PieChart
} from "lucide-react"
import type { VocabularyWord } from "@/data/vocabulary"

interface VocabularyStatsProps {
  words: Array<VocabularyWord & {
    masteryLevel: number
    lastReviewed: Date
    timesReviewed: number
  }>
}

export function VocabularyStats({ words }: VocabularyStatsProps) {
  const stats = useMemo(() => {
    const total = words.length
    const mastered = words.filter(w => w.masteryLevel >= 80).length
    const learning = words.filter(w => w.masteryLevel >= 30 && w.masteryLevel < 80).length
    const weak = words.filter(w => w.masteryLevel < 30).length
    const avgMastery = total > 0 ? Math.round(words.reduce((sum, w) => sum + w.masteryLevel, 0) / total) : 0

    // Level distribution
    const levelDist: Record<string, number> = {}
    words.forEach(w => {
      levelDist[w.level] = (levelDist[w.level] || 0) + 1
    })

    // Part of speech distribution
    const posDist: Record<string, number> = {}
    words.forEach(w => {
      if (w.partOfSpeech) {
        posDist[w.partOfSpeech] = (posDist[w.partOfSpeech] || 0) + 1
      }
    })

    // Recent activity (last 7 days)
    const now = new Date()
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const recentlyReviewed = words.filter(w => w.lastReviewed >= sevenDaysAgo).length

    // Average reviews per word
    const avgReviews = total > 0 ? Math.round(words.reduce((sum, w) => sum + w.timesReviewed, 0) / total) : 0

    // Streak calculation (days with reviews)
    const reviewDates = words.map(w => w.lastReviewed.toDateString())
    const uniqueDates = new Set(reviewDates)
    
    // Articles distribution (for nouns)
    const articleDist: Record<string, number> = { der: 0, die: 0, das: 0 }
    words.forEach(w => {
      if (w.article && articleDist[w.article] !== undefined) {
        articleDist[w.article]++
      }
    })

    return {
      total,
      mastered,
      learning,
      weak,
      avgMastery,
      levelDist,
      posDist,
      recentlyReviewed,
      avgReviews,
      uniqueReviewDays: uniqueDates.size,
      articleDist
    }
  }, [words])

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      A1: "bg-blue-500",
      A2: "bg-green-500",
      B1: "bg-yellow-500",
      B2: "bg-orange-500",
      C1: "bg-red-500",
      C2: "bg-purple-500"
    }
    return colors[level] || "bg-gray-500"
  }

  const getPosLabel = (pos: string) => {
    const labels: Record<string, string> = {
      noun: "Imenice",
      verb: "Glagoli",
      adjective: "Pridevi",
      adverb: "Prilozi",
      preposition: "Predlozi",
      conjunction: "Veznici"
    }
    return labels[pos] || pos
  }

  const getArticleColor = (article: string) => {
    const colors: Record<string, string> = {
      der: "bg-blue-500",
      die: "bg-red-500",
      das: "bg-green-500"
    }
    return colors[article] || "bg-gray-500"
  }

  return (
    <div className="space-y-6">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-german-gold/20">
                <Target className="h-5 w-5 text-german-gold" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stats.total}</div>
                <div className="text-xs text-muted-foreground">Ukupno reči</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-4 border-green-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Award className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">{stats.mastered}</div>
                <div className="text-xs text-muted-foreground">Savladano</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Activity className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stats.avgReviews}</div>
                <div className="text-xs text-muted-foreground">Prosek ponavljanja</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-4 border-german-gold/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-german-gold/20">
                <TrendingUp className="h-5 w-5 text-german-gold" />
              </div>
              <div>
                <div className="text-2xl font-bold text-german-gold">{stats.avgMastery}%</div>
                <div className="text-xs text-muted-foreground">Prosečna savladanost</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Level Distribution */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-german-gold" />
          Distribucija po nivoima
        </h3>
        <div className="space-y-3">
          {Object.entries(stats.levelDist).map(([level, count]) => {
            const percentage = (count / stats.total) * 100
            return (
              <div key={level} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium">{level}</span>
                  <span className="text-muted-foreground">{count} reči ({percentage.toFixed(0)}%)</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={cn("h-full", getLevelColor(level))}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Part of Speech Distribution */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-german-gold" />
            Vrste reči
          </h3>
          <div className="space-y-3">
            {Object.entries(stats.posDist).slice(0, 5).map(([pos, count], idx) => {
              const percentage = (count / stats.total) * 100
              return (
                <div key={pos} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white">{getPosLabel(pos)}</span>
                    <span className="text-muted-foreground">{count}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                      className="h-full bg-purple-500"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </GlassCard>

        {/* Article Distribution */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-german-gold" />
            Članovi (imenice)
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(stats.articleDist).map(([article, count]) => (
              <div key={article} className="text-center">
                <div className={cn(
                  "w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2",
                  getArticleColor(article) + "/20"
                )}>
                  <span className={cn(
                    "text-2xl font-bold",
                    article === "der" ? "text-blue-400" :
                    article === "die" ? "text-red-400" :
                    "text-green-400"
                  )}>
                    {count}
                  </span>
                </div>
                <div className="text-sm text-white font-medium">{article}</div>
                <div className="text-xs text-muted-foreground">
                  {((count / (stats.articleDist.der + stats.articleDist.die + stats.articleDist.das)) * 100).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Activity Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Calendar className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{stats.recentlyReviewed}</div>
              <div className="text-xs text-muted-foreground">Vežbano ove nedelje</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/20">
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{stats.learning}</div>
              <div className="text-xs text-muted-foreground">U procesu učenja</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/20">
              <Target className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">{stats.weak}</div>
              <div className="text-xs text-muted-foreground">Za ponavljanje</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Mastery Progress Bar */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Napredak savladavanja</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Savladano</span>
            <span className="text-white font-medium">{stats.mastered} / {stats.total}</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(stats.mastered / stats.total) * 100}%` }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-german-gold to-green-500"
            />
          </div>
          <div className="text-xs text-muted-foreground text-right">
            {((stats.mastered / stats.total) * 100).toFixed(1)}% od ukupnog rečnika
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

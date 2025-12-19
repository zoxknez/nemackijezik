"use client"

import { useState, useEffect } from "react"
import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LevelBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Sparkles,
  TrendingUp,
  Target,
  Flame,
  Clock,
  Star,
  ArrowRight,
  Lightbulb,
  Zap,
  Trophy,
  Brain,
  RefreshCw
} from "lucide-react"

interface Recommendation {
  id: string
  type: "lesson" | "review" | "practice" | "challenge"
  title: string
  titleDe: string
  description: string
  reason: string
  xp: number
  duration: string
  level: string
  difficulty: "easy" | "medium" | "hard"
  priority: "high" | "medium" | "low"
  href: string
  icon: React.ComponentType<{ className?: string }>
}

interface PersonalizedRecommendationsProps {
  userLevel: string
  recentActivity: string[]
  weakAreas: string[]
  streak: number
}

export function PersonalizedRecommendations({
  userLevel,
  recentActivity,
  weakAreas,
  streak
}: PersonalizedRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    generateRecommendations()
  }, [userLevel, recentActivity, weakAreas, streak])

  const generateRecommendations = () => {
    const recs: Recommendation[] = []

    // Daily streak maintenance
    if (streak > 0 && streak < 30) {
      recs.push({
        id: "streak-maintain",
        type: "challenge",
        title: "Održi svoj streak!",
        titleDe: "Behalte deine Serie!",
        description: "Završi bar jednu lekciju danas da održiš svoj streak od " + streak + " dana",
        reason: "Motivacija",
        xp: 50,
        duration: "10 min",
        level: userLevel,
        difficulty: "easy",
        priority: "high",
        href: "/lekcije",
        icon: Flame
      })
    }

    // Weak area focus
    if (weakAreas.length > 0) {
      recs.push({
        id: "weak-area",
        type: "practice",
        title: `Vežbaj ${weakAreas[0]}`,
        titleDe: "Übe deine Schwachstellen",
        description: "AI je primetio da trebaš pomoć sa ovom oblašću. Fokusiraj se ovde!",
        reason: "Personalizovano",
        xp: 75,
        duration: "15 min",
        level: userLevel,
        difficulty: "medium",
        priority: "high",
        href: "/vezbe",
        icon: Target
      })
    }

    // Review due words
    recs.push({
      id: "review-vocab",
      type: "review",
      title: "Ponovi vokabular",
      titleDe: "Wiederhole Vokabeln",
      description: "Imaš 23 reči spremnih za ponavljanje. Osveži svoje znanje!",
      reason: "SRS algoritam",
      xp: 40,
      duration: "8 min",
      level: userLevel,
      difficulty: "easy",
      priority: "medium",
      href: "/recnik",
      icon: Brain
    })

    // Next level lesson
    recs.push({
      id: "next-lesson",
      type: "lesson",
      title: "Nastavi sa sledećom lekcijom",
      titleDe: "Nächste Lektion",
      description: "Nastavi svoj learning path i osvoji nove XP!",
      reason: "Progres",
      xp: 100,
      duration: "20 min",
      level: userLevel,
      difficulty: "medium",
      priority: "medium",
      href: "/lekcije",
      icon: BookOpen
    })

    // Challenge based on time of day
    const hour = new Date().getHours()
    if (hour < 12) {
      recs.push({
        id: "morning-boost",
        type: "challenge",
        title: "Jutarnji boost",
        titleDe: "Morgen-Boost",
        description: "Počni dan sa brzom vežbom! Dobićeš bonus XP.",
        reason: "Bonus",
        xp: 120,
        duration: "12 min",
        level: userLevel,
        difficulty: "medium",
        priority: "low",
        href: "/vezbe",
        icon: Zap
      })
    }

    setRecommendations(recs)
  }

  const refreshRecommendations = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      generateRecommendations()
      setIsRefreshing(false)
    }, 500)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-red-500/30 bg-red-500/5"
      case "medium": return "border-yellow-500/30 bg-yellow-500/5"
      case "low": return "border-blue-500/30 bg-blue-500/5"
      default: return ""
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "Lako"
      case "medium": return "Srednje"
      case "hard": return "Teško"
      default: return ""
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-german-gold" />
          <h3 className="text-lg font-semibold text-white">
            Preporučeno za tebe
          </h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={refreshRecommendations}
          disabled={isRefreshing}
          className="text-german-gold hover:bg-german-gold/10"
        >
          <RefreshCw className={cn("h-4 w-4", isRefreshing && "animate-spin")} />
        </Button>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {recommendations.map((rec, idx) => {
          const Icon = rec.icon
          return (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={rec.href}>
                <GlassCard 
                  className={cn(
                    "p-4 cursor-pointer hover:bg-white/5 transition-all group border-l-4",
                    getPriorityColor(rec.priority)
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-german-gold/20">
                        <Icon className="h-5 w-5 text-german-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-german-gold transition-colors">
                          {rec.title}
                        </h4>
                        <p className="text-xs text-muted-foreground italic">
                          {rec.titleDe}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-german-gold group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {rec.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {rec.duration}
                      </div>
                      <div className="flex items-center gap-1 text-german-gold">
                        <Trophy className="h-3 w-3" />
                        +{rec.xp} XP
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white">
                        {getDifficultyLabel(rec.difficulty)}
                      </span>
                      <LevelBadge level={rec.level as any} size="sm" />
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs text-yellow-300">
                        {rec.reason}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

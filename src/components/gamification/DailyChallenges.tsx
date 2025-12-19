"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "motion/react"
import {
  Trophy,
  Target,
  Flame,
  Zap,
  Clock,
  CheckCircle2,
  Lock,
  Star,
  Gift,
  TrendingUp,
  Award
} from "lucide-react"

interface Challenge {
  id: string
  title: string
  description: string
  type: "daily" | "weekly" | "special"
  progress: number
  goal: number
  xpReward: number
  bonusReward?: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  isCompleted: boolean
  isLocked: boolean
  expiresIn?: string
  difficulty: "easy" | "medium" | "hard"
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "easy": return "text-green-400"
    case "medium": return "text-yellow-400"
    case "hard": return "text-red-400"
    default: return "text-gray-400"
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

const getTypeLabel = (type: string) => {
  switch (type) {
    case "daily": return "Dnevni"
    case "weekly": return "Nedeljni"
    case "special": return "Specijalni"
    default: return ""
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "daily": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "weekly": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "special": return "bg-german-gold/20 text-german-gold border-german-gold/30"
    default: return ""
  }
}

export function DailyChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "daily-1",
      title: "Jutarnji boost",
      description: "Završi jednu lekciju pre podne",
      type: "daily",
      progress: 0,
      goal: 1,
      xpReward: 50,
      bonusReward: "2x XP na sledeću lekciju",
      icon: Zap,
      color: "yellow",
      isCompleted: false,
      isLocked: false,
      expiresIn: "12h",
      difficulty: "easy"
    },
    {
      id: "daily-2",
      title: "Majstor vokabulara",
      description: "Nauči 20 novih reči danas",
      type: "daily",
      progress: 12,
      goal: 20,
      xpReward: 75,
      icon: Star,
      color: "blue",
      isCompleted: false,
      isLocked: false,
      expiresIn: "18h",
      difficulty: "medium"
    },
    {
      id: "daily-3",
      title: "Savršena tačnost",
      description: "Ostvari 100% na bilo kojoj vežbi",
      type: "daily",
      progress: 0,
      goal: 1,
      xpReward: 100,
      bonusReward: "Special Badge",
      icon: Target,
      color: "green",
      isCompleted: false,
      isLocked: false,
      expiresIn: "20h",
      difficulty: "hard"
    },
    {
      id: "weekly-1",
      title: "Nedeljni maraton",
      description: "Završi 30 lekcija ove nedelje",
      type: "weekly",
      progress: 18,
      goal: 30,
      xpReward: 500,
      bonusReward: "Premium Theme",
      icon: Trophy,
      color: "purple",
      isCompleted: false,
      isLocked: false,
      expiresIn: "4d",
      difficulty: "hard"
    },
    {
      id: "weekly-2",
      title: "Plamen nade",
      description: "Održi 7-dnevni streak",
      type: "weekly",
      progress: 5,
      goal: 7,
      xpReward: 300,
      icon: Flame,
      color: "orange",
      isCompleted: false,
      isLocked: false,
      expiresIn: "2d",
      difficulty: "medium"
    },
    {
      id: "special-1",
      title: "🎄 Božićni specijal",
      description: "Završi 5 lekcija vezanih za praznike",
      type: "special",
      progress: 2,
      goal: 5,
      xpReward: 1000,
      bonusReward: "Holiday Avatar Frame",
      icon: Gift,
      color: "red",
      isCompleted: false,
      isLocked: false,
      expiresIn: "6d",
      difficulty: "hard"
    }
  ])

  const completedChallenges = challenges.filter(c => c.isCompleted).length
  const totalXPToday = challenges
    .filter(c => c.type === "daily" && c.isCompleted)
    .reduce((sum, c) => sum + c.xpReward, 0)

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-german-gold/20">
              <Trophy className="h-5 w-5 text-german-gold" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{completedChallenges}</div>
              <div className="text-xs text-muted-foreground">Završeno danas</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Zap className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{totalXPToday}</div>
              <div className="text-xs text-muted-foreground">XP od izazova</div>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/20">
              <Target className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{challenges.length}</div>
              <div className="text-xs text-muted-foreground">Aktivni izazovi</div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Daily Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-400" />
          Dnevni izazovi
        </h3>
        <div className="space-y-4">
          {challenges.filter(c => c.type === "daily").map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Trophy className="h-5 w-5 text-purple-400" />
          Nedeljni izazovi
        </h3>
        <div className="space-y-4">
          {challenges.filter(c => c.type === "weekly").map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      {/* Special Challenges */}
      {challenges.some(c => c.type === "special") && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5 text-german-gold" />
            Specijalni dogadjaji
          </h3>
          <div className="space-y-4">
            {challenges.filter(c => c.type === "special").map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const Icon = challenge.icon
  const progressPercentage = (challenge.progress / challenge.goal) * 100

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <GlassCard className={`p-6 ${
        challenge.isCompleted 
          ? "border-green-500/30 bg-green-500/5" 
          : challenge.isLocked
          ? "border-white/10 opacity-50"
          : "border-white/20 hover:border-white/30"
      }`}>
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`p-3 rounded-xl bg-${challenge.color}-500/20 shrink-0 ${
            challenge.isLocked ? "opacity-50" : ""
          }`}>
            {challenge.isLocked ? (
              <Lock className={`h-6 w-6 text-${challenge.color}-400`} />
            ) : challenge.isCompleted ? (
              <CheckCircle2 className="h-6 w-6 text-green-400" />
            ) : (
              <Icon className={`h-6 w-6 text-${challenge.color}-400`} />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{challenge.title}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(challenge.type)}`}>
                    {getTypeLabel(challenge.type)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
              {challenge.expiresIn && !challenge.isCompleted && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Clock className="h-3 w-3" />
                  {challenge.expiresIn}
                </div>
              )}
            </div>

            {/* Progress */}
            {!challenge.isLocked && (
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">
                      Napredak: {challenge.progress} / {challenge.goal}
                    </span>
                    <span className={`font-bold ${getDifficultyColor(challenge.difficulty)}`}>
                      {getDifficultyLabel(challenge.difficulty)}
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-${challenge.color}-500`}
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Rewards */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-german-gold" />
                      <span className="text-sm font-bold text-german-gold">
                        +{challenge.xpReward} XP
                      </span>
                    </div>
                    {challenge.bonusReward && (
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-purple-400" />
                        <span className="text-sm text-purple-400">{challenge.bonusReward}</span>
                      </div>
                    )}
                  </div>
                  {challenge.isCompleted && (
                    <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      Završeno
                    </div>
                  )}
                </div>
              </div>
            )}

            {challenge.isLocked && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Lock className="h-4 w-4" />
                Završi prethodni izazov da otključaš
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LevelBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  CheckCircle2,
  Circle,
  Lock,
  Play,
  Star,
  Trophy,
  ChevronDown,
  ChevronUp,
  Zap,
  Clock,
  Target,
  Award
} from "lucide-react"

interface LessonNode {
  id: string
  title: string
  titleDe: string
  level: string
  xp: number
  duration: string
  isCompleted: boolean
  isLocked: boolean
  isAvailable: boolean
  prerequisites: string[]
  unlocks: string[]
  unit: string
  category?: string
}

interface SkillTreeProps {
  lessons: LessonNode[]
  onLessonClick: (lessonId: string) => void
}

export function SkillTree({ lessons, onLessonClick }: SkillTreeProps) {
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({})
  const [selectedLesson, setSelectedLesson] = useState<LessonNode | null>(null)

  // Group lessons by unit
  const lessonsByUnit = useMemo(() => {
    const grouped: Record<string, LessonNode[]> = {}
    lessons.forEach(lesson => {
      if (!grouped[lesson.unit]) {
        grouped[lesson.unit] = []
      }
      grouped[lesson.unit].push(lesson)
    })
    return grouped
  }, [lessons])

  const toggleUnit = (unit: string) => {
    setExpandedUnits(prev => ({ ...prev, [unit]: !prev[unit] }))
  }

  const getUnitProgress = (unit: string) => {
    const unitLessons = lessonsByUnit[unit]
    if (!unitLessons) return 0
    const completed = unitLessons.filter(l => l.isCompleted).length
    return Math.round((completed / unitLessons.length) * 100)
  }

  const getUnitStats = (unit: string) => {
    const unitLessons = lessonsByUnit[unit]
    if (!unitLessons) return { total: 0, completed: 0, available: 0 }
    
    return {
      total: unitLessons.length,
      completed: unitLessons.filter(l => l.isCompleted).length,
      available: unitLessons.filter(l => l.isAvailable && !l.isLocked).length
    }
  }

  return (
    <div className="space-y-4">
      {Object.entries(lessonsByUnit).map(([unit, unitLessons], unitIdx) => {
        const isExpanded = expandedUnits[unit] !== false // Default expanded
        const progress = getUnitProgress(unit)
        const stats = getUnitStats(unit)
        const isCompleted = stats.completed === stats.total

        return (
          <motion.div
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: unitIdx * 0.1 }}
          >
            <GlassCard className={cn(
              "overflow-hidden transition-all",
              isCompleted && "border-green-500/30"
            )}>
              {/* Unit Header */}
              <button
                onClick={() => toggleUnit(unit)}
                className="w-full p-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={cn(
                    "p-3 rounded-xl transition-all",
                    isCompleted 
                      ? "bg-green-500/20 text-green-400" 
                      : "bg-german-gold/20 text-german-gold"
                  )}>
                    {isCompleted ? (
                      <Trophy className="h-6 w-6" />
                    ) : (
                      <Target className="h-6 w-6" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Unit {unit}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{stats.completed} / {stats.total} lekcija</span>
                      <span>•</span>
                      <span>{stats.available} dostupno</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white mb-1">
                      {progress}%
                    </div>
                    <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={cn(
                          "h-full transition-all",
                          isCompleted ? "bg-green-500" : "bg-german-gold"
                        )}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </button>

              {/* Lessons Tree */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-4 space-y-3">
                      {unitLessons.map((lesson, lessonIdx) => (
                        <motion.div
                          key={lesson.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: lessonIdx * 0.05 }}
                        >
                          <LessonNode
                            lesson={lesson}
                            onClick={() => {
                              setSelectedLesson(lesson)
                              if (!lesson.isLocked && lesson.isAvailable) {
                                onLessonClick(lesson.id)
                              }
                            }}
                            isSelected={selectedLesson?.id === lesson.id}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )
      })}
    </div>
  )
}

interface LessonNodeProps {
  lesson: LessonNode
  onClick: () => void
  isSelected: boolean
}

function LessonNode({ lesson, onClick, isSelected }: LessonNodeProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative p-4 rounded-xl transition-all cursor-pointer group",
        lesson.isLocked && "opacity-50 cursor-not-allowed",
        !lesson.isLocked && "hover:bg-white/5",
        isSelected && "ring-2 ring-german-gold"
      )}
    >
      {/* Connection Lines */}
      {lesson.unlocks.length > 0 && !lesson.isLocked && (
        <div className="absolute left-8 -bottom-3 w-px h-6 bg-gradient-to-b from-german-gold/50 to-transparent" />
      )}

      <div className="flex items-center gap-4">
        {/* Status Icon */}
        <div className={cn(
          "p-3 rounded-xl shrink-0 transition-all",
          lesson.isCompleted && "bg-green-500/20 text-green-400",
          !lesson.isCompleted && lesson.isAvailable && !lesson.isLocked && "bg-blue-500/20 text-blue-400",
          lesson.isLocked && "bg-gray-500/20 text-gray-500"
        )}>
          {lesson.isCompleted ? (
            <CheckCircle2 className="h-6 w-6" />
          ) : lesson.isLocked ? (
            <Lock className="h-6 w-6" />
          ) : lesson.isAvailable ? (
            <Play className="h-6 w-6" />
          ) : (
            <Circle className="h-6 w-6" />
          )}
        </div>

        {/* Lesson Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className={cn(
              "font-semibold text-base transition-colors",
              lesson.isLocked ? "text-muted-foreground" : "text-white group-hover:text-german-gold"
            )}>
              {lesson.title}
            </h4>
            {lesson.isCompleted && (
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            )}
          </div>
          <p className="text-sm text-muted-foreground italic mb-2">
            {lesson.titleDe}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {lesson.duration}
            </div>
            <span>•</span>
            <div className="flex items-center gap-1 text-german-gold">
              <Zap className="h-3 w-3" />
              +{lesson.xp} XP
            </div>
            <span>•</span>
            <LevelBadge level={lesson.level as any} size="sm" />
          </div>
        </div>

        {/* Action Button */}
        {!lesson.isLocked && (
          <div className="shrink-0">
            {lesson.isCompleted ? (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-white"
              >
                Ponovi
              </Button>
            ) : lesson.isAvailable ? (
              <Button
                size="sm"
                className="bg-german-gold text-black hover:bg-german-gold/90"
              >
                <Play className="h-4 w-4 mr-1" />
                Započni
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
              >
                Uskoro
              </Button>
            )}
          </div>
        )}

        {lesson.isLocked && (
          <div className="shrink-0 text-xs text-muted-foreground">
            Zaključano
          </div>
        )}
      </div>

      {/* Prerequisites */}
      {lesson.isLocked && lesson.prerequisites.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/10">
          <p className="text-xs text-muted-foreground mb-2">
            Zahteva:
          </p>
          <div className="flex flex-wrap gap-2">
            {lesson.prerequisites.map(prereqId => (
              <span
                key={prereqId}
                className="text-xs px-2 py-1 rounded bg-white/5 text-muted-foreground"
              >
                Lekcija #{prereqId}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

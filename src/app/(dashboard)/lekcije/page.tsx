"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { 
  Play, 
  Lock, 
  CheckCircle2, 
  Star, 
  Clock, 
  ChevronRight, 
  Search, 
  Trophy, 
  Zap 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LevelBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { lessons } from "@/data/lessons"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function LessonsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lesson.titleDe.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel ? lesson.level === selectedLevel : true
    return matchesSearch && matchesLevel
  })

  // Group by unit
  const units = Array.from(new Set(filteredLessons.map(l => l.unit))).sort()

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-german-red/20 via-german-gold/10 to-background p-8 border border-white/10">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-german-gold/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-german-red/20 blur-3xl" />
        
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">Lekcije</h1>
            <p className="mt-2 text-muted-foreground">
              Nastavi gde si stao i osvoji nove nivoe znanja.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="glass-effect flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Ukupno završeno</p>
                <p className="font-bold text-white">
                  {lessons.filter(l => l.isCompleted).length} / {lessons.length}
                </p>
              </div>
            </div>
            <div className="glass-effect flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-german-gold/20 text-german-gold">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Ukupno XP</p>
                <p className="font-bold text-white">1,250</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Pretraži lekcije..." 
            className="pl-10 bg-white/5 border-white/10 focus:bg-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={undefined}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
              className={cn(
                "rounded-full",
                selectedLevel === level ? "bg-german-gold text-black hover:bg-german-gold/90" : "border-white/10 hover:bg-white/5"
              )}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Lessons List */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {units.map((unit) => {
          const unitLessons = filteredLessons.filter(l => l.unit === unit)
          if (unitLessons.length === 0) return null

          return (
            <div key={unit} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                  {unit}
                </div>
                <h2 className="text-xl font-semibold text-white">Unit {unit}</h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {unitLessons.map((lesson) => (
                  <motion.div key={lesson.id} variants={item}>
                    <div className={cn(
                      "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-1 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-german-gold/5",
                      lesson.isLocked && "opacity-60 grayscale"
                    )}>
                      <div className="relative flex h-full flex-col rounded-xl bg-[#0f172a]/50 p-5 backdrop-blur-sm">
                        {/* Header */}
                        <div className="mb-4 flex items-start justify-between">
                          <LevelBadge level={lesson.level} />
                          {lesson.isCompleted ? (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                              <CheckCircle2 className="h-5 w-5" />
                            </div>
                          ) : lesson.isLocked ? (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted-foreground">
                              <Lock className="h-4 w-4" />
                            </div>
                          ) : (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-german-gold/20 text-german-gold">
                              <Play className="h-4 w-4 ml-0.5" />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <h3 className="font-bold text-white group-hover:text-german-gold transition-colors">
                            {lesson.title}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">
                            {lesson.titleDe}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {lesson.description}
                          </p>
                        </div>

                        {/* Topics Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {lesson.topics.slice(0, 2).map((topic) => (
                            <span key={topic} className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-muted-foreground">
                              {topic}
                            </span>
                          ))}
                          {lesson.topics.length > 2 && (
                            <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-muted-foreground">
                              +{lesson.topics.length - 2}
                            </span>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {lesson.duration} min
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-german-gold" /> {lesson.xpReward} XP
                            </span>
                          </div>
                          
                          {!lesson.isLocked && (
                            <Link href={`/lekcije/${lesson.id}`}>
                              <Button 
                                size="sm" 
                                className={cn(
                                  "h-8 rounded-lg px-3 text-xs font-medium transition-all",
                                  lesson.isCompleted 
                                    ? "bg-white/5 text-white hover:bg-white/10" 
                                    : "bg-german-gold text-black hover:bg-german-gold/90"
                                )}
                              >
                                {lesson.isCompleted ? "Ponovi" : "Započni"}
                                <ChevronRight className="ml-1 h-3 w-3" />
                              </Button>
                            </Link>
                          )}
                        </div>

                        {/* Progress Bar (if started but not completed) */}
                        {!lesson.isCompleted && !lesson.isLocked && lesson.progress > 0 && (
                          <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
                            <div 
                              className="h-full bg-german-gold transition-all duration-500" 
                              style={{ width: `${lesson.progress}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

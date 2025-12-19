"use client"

import { motion } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Zap,
  BookOpen,
  Brain,
  Mic,
  Flame,
  Trophy,
  Target,
  ArrowRight
} from "lucide-react"

const quickActions = [
  {
    id: "continue-lesson",
    title: "Nastavi lekciju",
    description: "Familie und Freunde",
    icon: BookOpen,
    href: "/lekcije/a1-5",
    color: "from-blue-500 to-cyan-400",
    xp: 50,
    progress: 65
  },
  {
    id: "daily-review",
    title: "Dnevno ponavljanje",
    description: "23 reči čeka",
    icon: Brain,
    href: "/recnik",
    color: "from-purple-500 to-pink-400",
    xp: 30,
    badge: "SRS"
  },
  {
    id: "pronunciation",
    title: "Vežbaj izgovor",
    description: "AI asistent",
    icon: Mic,
    href: "/ai-tutor#pronunciation",
    color: "from-green-500 to-emerald-400",
    xp: 40,
    badge: "AI"
  },
  {
    id: "daily-challenge",
    title: "Dnevni izazov",
    description: "Glagoli + predlozi",
    icon: Zap,
    href: "/vezbe#daily",
    color: "from-orange-500 to-amber-400",
    xp: 100,
    badge: "2x XP"
  },
]

export function QuickActions() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white flex items-center gap-2">
        <Zap className="h-5 w-5 text-german-gold" />
        Brze akcije
      </h3>

      <div className="grid gap-3 md:grid-cols-2">
        {quickActions.map((action, idx) => {
          const Icon = action.icon
          return (
            <motion.div
              key={action.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={action.href}>
                <GlassCard className="p-4 cursor-pointer hover:bg-white/5 transition-all group relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-german-gold transition-colors">
                            {action.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-german-gold group-hover:translate-x-1 transition-all" />
                    </div>

                    {action.progress !== undefined && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">Progres:</span>
                          <span className="text-white font-medium">{action.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${action.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${action.progress}%` }}
                            transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1 text-german-gold text-sm font-medium">
                        <Trophy className="h-4 w-4" />
                        +{action.xp} XP
                      </div>
                      {action.badge && (
                        <span className="text-xs px-2 py-1 rounded-full bg-german-gold/20 text-german-gold font-medium">
                          {action.badge}
                        </span>
                      )}
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

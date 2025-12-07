import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { type HTMLAttributes } from "react"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border-2 border-primary text-primary bg-transparent",
        success:
          "bg-green-500/20 text-green-400 border border-green-500/30",
        warning:
          "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
        danger:
          "bg-red-500/20 text-red-400 border border-red-500/30",
        info:
          "bg-blue-500/20 text-blue-400 border border-blue-500/30",
        gold:
          "bg-gradient-to-r from-german-gold to-amber-400 text-black font-bold shadow-md",
        glass:
          "glass-effect text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// Level badges for CEFR
const levelBadgeColors = {
  A1: "bg-level-a1/20 text-level-a1 border-level-a1/30",
  A2: "bg-level-a2/20 text-level-a2 border-level-a2/30",
  B1: "bg-level-b1/20 text-level-b1 border-level-b1/30",
  B2: "bg-level-b2/20 text-level-b2 border-level-b2/30",
  C1: "bg-level-c1/20 text-level-c1 border-level-c1/30",
  C2: "bg-level-c2/20 text-level-c2 border-level-c2/30",
}

export interface LevelBadgeProps extends HTMLAttributes<HTMLDivElement> {
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2"
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

function LevelBadge({ level, showLabel = true, size = "md", className, ...props }: LevelBadgeProps) {
  const labels = {
    A1: "Početnik",
    A2: "Osnovni",
    B1: "Srednji",
    B2: "Viši srednji",
    C1: "Napredni",
    C2: "Majstor",
  }

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-bold transition-all duration-200 hover:scale-105",
        levelBadgeColors[level],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <span>{level}</span>
      {showLabel && size !== "sm" && <span className="font-medium">• {labels[level]}</span>}
    </div>
  )
}

// XP Badge with animation
interface XPBadgeProps extends HTMLAttributes<HTMLDivElement> {
  xp: number
  animated?: boolean
}

function XPBadge({ xp, animated = false, className, ...props }: XPBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-german-gold to-amber-400 px-3 py-1 text-xs font-bold text-black shadow-md",
        animated && "animate-pulse-glow",
        className
      )}
      {...props}
    >
      <span className="text-base">⚡</span>
      <span>{xp.toLocaleString()} XP</span>
    </div>
  )
}

// Streak Badge
interface StreakBadgeProps extends HTMLAttributes<HTMLDivElement> {
  streak: number
  isActive?: boolean
}

function StreakBadge({ streak, isActive = true, className, ...props }: StreakBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold transition-all duration-200",
        isActive
          ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md shadow-orange-500/30"
          : "bg-gray-500/20 text-gray-400 border border-gray-500/30",
        className
      )}
      {...props}
    >
      <span className="text-base">{isActive ? "🔥" : "❄️"}</span>
      <span>{streak} dana</span>
    </div>
  )
}

// Achievement Badge
interface AchievementBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon: string
  name: string
  rarity?: "common" | "rare" | "epic" | "legendary"
}

function AchievementBadge({ 
  icon, 
  name, 
  rarity = "common", 
  className, 
  ...props 
}: AchievementBadgeProps) {
  const rarityStyles = {
    common: "bg-gray-500/20 text-gray-300 border-gray-500/30",
    rare: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    epic: "bg-purple-500/20 text-purple-400 border-purple-500/30 shadow-purple-500/20",
    legendary: "bg-gradient-to-r from-german-gold/20 to-amber-400/20 text-german-gold border-german-gold/30 shadow-german-gold/30 animate-shimmer",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg",
        rarityStyles[rarity],
        className
      )}
      {...props}
    >
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </div>
  )
}

export { 
  Badge, 
  badgeVariants, 
  LevelBadge, 
  XPBadge, 
  StreakBadge, 
  AchievementBadge 
}

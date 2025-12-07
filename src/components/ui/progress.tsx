import { cn } from "@/lib/utils"
import { forwardRef, useId, type HTMLAttributes } from "react"

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "gradient" | "success" | "warning" | "danger"
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    className, 
    value, 
    max = 100, 
    showLabel = false, 
    size = "md",
    variant = "default",
    ...props 
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizeClasses = {
      sm: "h-2",
      md: "h-3",
      lg: "h-5",
    }

    const variantClasses = {
      default: "bg-primary",
      gradient: "bg-gradient-to-r from-german-red via-german-gold to-primary",
      success: "bg-gradient-to-r from-green-500 to-emerald-400",
      warning: "bg-gradient-to-r from-yellow-500 to-amber-400",
      danger: "bg-gradient-to-r from-red-500 to-rose-400",
    }

    return (
      <div className={cn("relative w-full", className)} ref={ref} {...props}>
        <div
          className={cn(
            "w-full overflow-hidden rounded-full bg-secondary/30",
            sizeClasses[size]
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              variantClasses[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full pl-2 text-sm font-medium text-muted-foreground">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"

// Circular Progress for XP, achievements, etc.
interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: number
  strokeWidth?: number
  showValue?: boolean
  label?: string
  variant?: "default" | "gradient" | "gold"
}

function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  showValue = true,
  label,
  variant = "default",
  className,
  ...props
}: CircularProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const gradientId = useId()

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      {...props}
    >
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {variant === "gold" ? (
              <>
                <stop offset="0%" stopColor="hsl(var(--german-gold))" />
                <stop offset="100%" stopColor="#f59e0b" />
              </>
            ) : variant === "gradient" ? (
              <>
                <stop offset="0%" stopColor="hsl(var(--german-red))" />
                <stop offset="50%" stopColor="hsl(var(--german-gold))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </>
            )}
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--secondary) / 0.3)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-700 ease-out"
        />
      </svg>
      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{Math.round(percentage)}%</span>
          {label && (
            <span className="text-xs text-muted-foreground">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}

// XP Progress bar
interface XPProgressProps extends HTMLAttributes<HTMLDivElement> {
  currentXP: number
  requiredXP: number
  level: number
}

function XPProgress({
  currentXP,
  requiredXP,
  level,
  className,
  ...props
}: XPProgressProps) {
  const percentage = (currentXP / requiredXP) * 100

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-german-gold to-amber-400 text-sm font-bold text-black shadow-lg">
            {level}
          </span>
          <span className="text-sm font-medium">Nivo {level}</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {currentXP.toLocaleString()} / {requiredXP.toLocaleString()} XP
        </span>
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-secondary/30">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-german-gold via-amber-400 to-yellow-300 transition-all duration-700 ease-out shadow-lg shadow-german-gold/30"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
        {/* Shine effect */}
        <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  )
}

// Lesson Progress
interface LessonProgressProps extends HTMLAttributes<HTMLDivElement> {
  completed: number
  total: number
  showSteps?: boolean
}

function LessonProgress({
  completed,
  total,
  showSteps = true,
  className,
  ...props
}: LessonProgressProps) {
  return (
    <div className={cn("w-full", className)} {...props}>
      {showSteps && (
        <div className="flex justify-between mb-3">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300",
                i < completed
                  ? "bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-lg shadow-green-500/30"
                  : i === completed
                  ? "border-2 border-primary bg-primary/10 text-primary animate-pulse"
                  : "bg-secondary/50 text-muted-foreground"
              )}
            >
              {i < completed ? "✓" : i + 1}
            </div>
          ))}
        </div>
      )}
      <Progress
        value={completed}
        max={total}
        variant="success"
        size="md"
      />
    </div>
  )
}

export { Progress, CircularProgress, XPProgress, LessonProgress }

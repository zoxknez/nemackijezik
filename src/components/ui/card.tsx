import { cn } from "@/lib/utils"
import { forwardRef, type HTMLAttributes } from "react"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/10 bg-card text-foreground shadow-xl transition-all duration-300",
        "hover:shadow-2xl hover:shadow-german-gold/5",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-effect rounded-2xl p-6 transition-all duration-300",
        "hover:shadow-2xl",
        className
      )}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

const GlowCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "glass-effect glow-effect rounded-2xl p-6 transition-all duration-500",
        className
      )}
      {...props}
    />
  )
)
GlowCard.displayName = "GlowCard"

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
      {...props}
    />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-bold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
)
CardFooter.displayName = "CardFooter"

// Specialized Cards for Learning Platform
const LevelCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" }
>(({ className, level, children, ...props }, ref) => {
  const levelColors = {
    A1: "border-l-level-a1 shadow-level-a1/20",
    A2: "border-l-level-a2 shadow-level-a2/20",
    B1: "border-l-level-b1 shadow-level-b1/20",
    B2: "border-l-level-b2 shadow-level-b2/20",
    C1: "border-l-level-c1 shadow-level-c1/20",
    C2: "border-l-level-c2 shadow-level-c2/20",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border-l-4 bg-card p-6 shadow-lg transition-all duration-300",
        "hover:shadow-xl hover:scale-[1.02]",
        levelColors[level],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
LevelCard.displayName = "LevelCard"

const StatsCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode
    label: string
    value: string | number
    trend?: { value: number; isPositive: boolean }
  }
>(({ className, icon, label, value, trend, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass-effect rounded-2xl p-6 transition-all duration-300",
      "hover:bg-white/15 hover:shadow-lg",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-4">
      {icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      {trend && (
        <div
          className={cn(
            "flex items-center gap-1 text-sm font-medium",
            trend.isPositive ? "text-green-500" : "text-red-500"
          )}
        >
          <span>{trend.isPositive ? "↑" : "↓"}</span>
          <span>{Math.abs(trend.value)}%</span>
        </div>
      )}
    </div>
  </div>
))
StatsCard.displayName = "StatsCard"

export {
  Card,
  GlassCard,
  GlowCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  LevelCard,
  StatsCard,
}

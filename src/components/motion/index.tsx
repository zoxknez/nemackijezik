"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence, type Variants } from "motion/react"
import { forwardRef, type ReactNode } from "react"

// Re-export motion components for convenience
export { motion, AnimatePresence }

// ===== ANIMATION VARIANTS =====
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.2 } 
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: 10, 
    transition: { duration: 0.2 } 
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    x: -20, 
    transition: { duration: 0.2 } 
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    x: 20, 
    transition: { duration: 0.2 } 
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 15 
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.5, 
    transition: { duration: 0.15 } 
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
}

// ===== MOTION COMPONENTS =====

interface MotionDivProps {
  className?: string
  children?: ReactNode
  variants?: Variants
  initial?: string | boolean
  animate?: string
  exit?: string
  delay?: number
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ 
    className, 
    variants = fadeInUp, 
    initial = "hidden", 
    animate = "visible", 
    exit = "exit",
    delay = 0,
    children, 
  }, ref) => (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
)
MotionDiv.displayName = "MotionDiv"

// Stagger container for lists
interface StaggerContainerProps {
  className?: string
  children?: ReactNode
  staggerDelay?: number
}

export function StaggerContainer({ 
  children, 
  className,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
interface StaggerItemProps {
  className?: string
  children?: ReactNode
}

export function StaggerItem({ 
  children, 
  className,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
export function PageTransition({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

// Floating animation
export function FloatingElement({ 
  children, 
  className,
  intensity = 10,
  duration = 3,
}: { 
  children: ReactNode
  className?: string
  intensity?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-intensity, intensity, -intensity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Pulse animation for highlights
export function PulseElement({ 
  children, 
  className,
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Shake animation for wrong answers
export function ShakeElement({ 
  children, 
  className,
  trigger = false,
}: { 
  children: ReactNode
  className?: string
  trigger?: boolean
}) {
  return (
    <motion.div
      className={className}
      animate={trigger ? {
        x: [0, -10, 10, -10, 10, 0],
      } : {}}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Success animation with confetti-like effect
export function SuccessPop({ 
  children, 
  className,
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  )
}

// Card hover effect
export function HoverCard({ 
  children, 
  className,
}: { 
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// Button press effect
export function PressableButton({ 
  children, 
  className,
  onClick,
  disabled = false,
}: { 
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}

// Text reveal animation
export function TextReveal({ 
  text, 
  className,
  delay = 0,
}: { 
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(" ")

  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.1,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

// Counter animation for numbers
export function AnimatedCounter({ 
  value, 
  className,
  duration = 1,
}: { 
  value: number
  className?: string
  duration?: number
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration }}
      >
        {value.toLocaleString()}
      </motion.span>
    </motion.span>
  )
}

// Slide-up notification/toast
export function SlideUpNotification({ 
  children, 
  className,
  isVisible = true,
}: { 
  children: ReactNode
  className?: string
  isVisible?: boolean
}) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Morphing blob background
export function MorphingBlob({ 
  className,
  color = "primary",
}: { 
  className?: string
  color?: "primary" | "gold" | "red"
}) {
  const colorClasses = {
    primary: "bg-primary/20",
    gold: "bg-german-gold/20",
    red: "bg-german-red/20",
  }

  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl",
        colorClasses[color],
        className
      )}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

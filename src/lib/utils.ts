import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names using clsx and merges Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format number with K/M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

/**
 * Format duration from seconds to human readable
 */
export function formatDuration(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`
  }
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return `${minutes}min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}h ${remainingMinutes}min`
}

/**
 * Calculate percentage
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0
  return Math.round((value / total) * 100)
}

/**
 * Get CEFR level color
 */
export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    A1: "#22c55e",
    A2: "#84cc16",
    B1: "#eab308",
    B2: "#f97316",
    C1: "#ef4444",
    C2: "#dc2626",
  }
  return colors[level] || "#6b7280"
}

/**
 * Get CEFR level label in Serbian
 */
export function getLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    A1: "Početnik",
    A2: "Osnovni",
    B1: "Srednji",
    B2: "Viši srednji",
    C1: "Napredni",
    C2: "Profesionalni",
  }
  return labels[level] || level
}

/**
 * Delay utility for async operations
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15)
}

/**
 * Shuffle array (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Calculate XP needed for next level
 */
export function xpForLevel(level: number): number {
  return Math.floor(100 * Math.pow(1.5, level - 1))
}

/**
 * Get level from total XP
 */
export function getLevelFromXp(xp: number): { level: number; progress: number; xpForNext: number } {
  let level = 1
  let totalXpNeeded = 0
  
  while (true) {
    const xpNeeded = xpForLevel(level)
    if (totalXpNeeded + xpNeeded > xp) {
      const progress = ((xp - totalXpNeeded) / xpNeeded) * 100
      return { level, progress: Math.round(progress), xpForNext: xpNeeded - (xp - totalXpNeeded) }
    }
    totalXpNeeded += xpNeeded
    level++
  }
}

/**
 * Format date relative to now (in Serbian)
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)

  if (diffSec < 60) return "upravo sada"
  if (diffMin < 60) return `pre ${diffMin} min`
  if (diffHour < 24) return `pre ${diffHour}h`
  if (diffDay === 1) return "juče"
  if (diffDay < 7) return `pre ${diffDay} dana`
  if (diffDay < 30) return `pre ${Math.floor(diffDay / 7)} nedelja`
  return date.toLocaleDateString("sr-Latn")
}

/**
 * Check if user has completed daily goal
 */
export function hasCompletedDailyGoal(xpToday: number, dailyGoal: number): boolean {
  return xpToday >= dailyGoal
}

/**
 * Get streak freeze status
 */
export function getStreakStatus(lastActiveDate: Date | null): "active" | "at_risk" | "broken" {
  if (!lastActiveDate) return "broken"
  
  const now = new Date()
  const lastActive = new Date(lastActiveDate)
  const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60)
  
  if (diffHours < 24) return "active"
  if (diffHours < 48) return "at_risk"
  return "broken"
}

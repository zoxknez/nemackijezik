"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { CheckCircle2, XCircle, AlertCircle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

// Toast store type (used internally)

// Simple toast store
let toasts: Toast[] = []
let listeners: Array<() => void> = []

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

export const toast = {
  success: (message: string, duration = 4000) => {
    const id = Math.random().toString(36).slice(2)
    toasts = [...toasts, { id, message, type: "success", duration }]
    emitChange()
  },
  error: (message: string, duration = 5000) => {
    const id = Math.random().toString(36).slice(2)
    toasts = [...toasts, { id, message, type: "error", duration }]
    emitChange()
  },
  warning: (message: string, duration = 4000) => {
    const id = Math.random().toString(36).slice(2)
    toasts = [...toasts, { id, message, type: "warning", duration }]
    emitChange()
  },
  info: (message: string, duration = 4000) => {
    const id = Math.random().toString(36).slice(2)
    toasts = [...toasts, { id, message, type: "info", duration }]
    emitChange()
  },
  remove: (id: string) => {
    toasts = toasts.filter((t) => t.id !== id)
    emitChange()
  },
}

function useToasts() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const listener = () => setTick((t) => t + 1)
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }, [])

  return toasts
}

const icons = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
}

const colors = {
  success: "bg-green-500/20 border-green-500/30 text-green-400",
  error: "bg-red-500/20 border-red-500/30 text-red-400",
  warning: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
  info: "bg-blue-500/20 border-blue-500/30 text-blue-400",
}

const iconColors = {
  success: "text-green-400",
  error: "text-red-400",
  warning: "text-yellow-400",
  info: "text-blue-400",
}

function ToastItem({ toast: t }: { toast: Toast }) {
  const Icon = icons[t.type]

  useEffect(() => {
    if (t.duration) {
      const timer = setTimeout(() => {
        toast.remove(t.id)
      }, t.duration)
      return () => clearTimeout(timer)
    }
  }, [t.id, t.duration])

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      className={cn(
        "flex items-center gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-xl",
        "min-w-[300px] max-w-[420px]",
        colors[t.type]
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0", iconColors[t.type])} />
      <p className="flex-1 text-sm font-medium text-white">{t.message}</p>
      <button
        onClick={() => toast.remove(t.id)}
        className="shrink-0 rounded-lg p-1 transition-colors hover:bg-white/10"
      >
        <X className="h-4 w-4 text-white/60" />
      </button>
    </motion.div>
  )
}

export function ToastContainer() {
  const currentToasts = useToasts()

  return (
    <div className="fixed bottom-4 right-4 z-100 flex flex-col gap-2 lg:bottom-6 lg:right-6">
      <AnimatePresence mode="popLayout">
        {currentToasts.map((t) => (
          <ToastItem key={t.id} toast={t} />
        ))}
      </AnimatePresence>
    </div>
  )
}

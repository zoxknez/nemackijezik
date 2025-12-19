"use client"

import { useEffect, useState } from "react"
import { GlassCard } from "@/components/ui/card"
import { motion, AnimatePresence } from "motion/react"
import {
  WifiOff,
  Wifi,
  CloudOff,
  AlertCircle,
  CheckCircle2
} from "lucide-react"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Set initial state
    setIsOnline(navigator.onLine)

    const handleOnline = () => {
      setIsOnline(true)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowNotification(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <>
      {/* Persistent offline indicator in header */}
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-yellow-500/20 border-b border-yellow-500/30 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-sm">
            <WifiOff className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Offline režim</span>
            <span className="text-muted-foreground">- Neke funkcije su ograničene</span>
          </div>
        </motion.div>
      )}

      {/* Toast notifications */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <GlassCard className={`p-4 ${isOnline ? 'border-green-500/30 bg-green-500/10' : 'border-yellow-500/30 bg-yellow-500/10'}`}>
              <div className="flex items-center gap-3">
                {isOnline ? (
                  <>
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <Wifi className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Ponovo online!</p>
                      <p className="text-sm text-muted-foreground">Sve funkcije su dostupne</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-400 ml-2" />
                  </>
                ) : (
                  <>
                    <div className="p-2 rounded-lg bg-yellow-500/20">
                      <CloudOff className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Nemaš internet</p>
                      <p className="text-sm text-muted-foreground">Možeš i dalje učiti offline</p>
                    </div>
                    <AlertCircle className="h-5 w-5 text-yellow-400 ml-2" />
                  </>
                )}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Hook for checking online status
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import {
  Download,
  X,
  CheckCircle2,
  Smartphone,
  Monitor,
  Info
} from "lucide-react"

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop" | null>(null)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIos = /iphone|ipad|ipod/.test(userAgent)
    const isAndroid = /android/.test(userAgent)
    
    if (isIos) {
      setPlatform("ios")
      // Show manual install instructions for iOS after 30 seconds
      const timer = setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem('pwa-ios-prompt-seen')
        if (!hasSeenPrompt) {
          setShowPrompt(true)
        }
      }, 30000)
      return () => clearTimeout(timer)
    } else if (isAndroid) {
      setPlatform("android")
    } else {
      setPlatform("desktop")
    }

    // Listen for beforeinstallprompt event
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      
      // Show prompt after user has been on site for 30 seconds
      setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem('pwa-prompt-dismissed')
        const dismissedAt = localStorage.getItem('pwa-prompt-dismissed-at')
        
        // Show again if dismissed more than 7 days ago
        if (!hasSeenPrompt || (dismissedAt && Date.now() - parseInt(dismissedAt) > 7 * 24 * 60 * 60 * 1000)) {
          setShowPrompt(true)
        }
      }, 30000)
    }

    window.addEventListener('beforeinstallprompt', handler)

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setShowPrompt(false)
      localStorage.removeItem('pwa-prompt-dismissed')
      localStorage.removeItem('pwa-prompt-dismissed-at')
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setIsInstalled(true)
      setShowPrompt(false)
    }

    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-prompt-dismissed', 'true')
    localStorage.setItem('pwa-prompt-dismissed-at', Date.now().toString())
  }

  const handleIOSDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-ios-prompt-seen', 'true')
  }

  if (isInstalled) {
    return null
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          <GlassCard className="p-6 border-german-gold/30 bg-gradient-to-br from-german-gold/10 to-transparent">
            <button
              onClick={platform === "ios" ? handleIOSDismiss : handleDismiss}
              className="absolute top-3 right-3 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-german-gold/20 shrink-0">
                {platform === "ios" || platform === "android" ? (
                  <Smartphone className="h-6 w-6 text-german-gold" />
                ) : (
                  <Monitor className="h-6 w-6 text-german-gold" />
                )}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Instaliraj DeutschMaster
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pristupaj brže i uči offline! Instaliraj aplikaciju na svoj uređaj.
                </p>
              </div>
            </div>

            {platform === "ios" ? (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4 mt-0.5 shrink-0 text-blue-400" />
                    <div>
                      <p className="mb-2">Za instalaciju na iOS:</p>
                      <ol className="list-decimal list-inside space-y-1 text-xs">
                        <li>Pritisni "Share" dugme u Safari-ju</li>
                        <li>Odaberi "Add to Home Screen"</li>
                        <li>Potvrdi dodavanje</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleIOSDismiss}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Razumem
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button
                  onClick={handleInstall}
                  className="flex-1 bg-german-gold text-black hover:bg-german-gold/90"
                  disabled={!deferredPrompt}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Instaliraj
                </Button>
                <Button
                  onClick={handleDismiss}
                  variant="ghost"
                  size="sm"
                >
                  Kasnije
                </Button>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <CheckCircle2 className="h-4 w-4 text-green-400 mx-auto mb-1" />
                  <span className="text-muted-foreground">Offline pristup</span>
                </div>
                <div>
                  <CheckCircle2 className="h-4 w-4 text-green-400 mx-auto mb-1" />
                  <span className="text-muted-foreground">Brže učitavanje</span>
                </div>
                <div>
                  <CheckCircle2 className="h-4 w-4 text-green-400 mx-auto mb-1" />
                  <span className="text-muted-foreground">Notifikacije</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Hook for checking if app is installed
export function useIsPWA() {
  const [isPWA, setIsPWA] = useState(false)

  useEffect(() => {
    setIsPWA(
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true
    )
  }, [])

  return isPWA
}

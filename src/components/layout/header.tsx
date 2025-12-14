"use client"

import { useState } from "react"
import { useUIStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import { Bell, Search, Volume2, VolumeX, X, Command } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "motion/react"

interface HeaderProps {
  title?: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  const { isSidebarOpen, isSoundEnabled, toggleSound } = useUIStore()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 h-16 border-b border-white/10 bg-background/80 backdrop-blur-xl",
          "transition-all duration-300",
          isSidebarOpen ? "lg:pl-[280px]" : "lg:pl-20"
        )}
      >
        <div className="flex h-full items-center justify-between px-4 lg:px-6">
          {/* Left side - Title */}
          <div className="flex items-center gap-4 lg:pl-0 min-w-0">
            {title && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="min-w-0"
              >
                <h1 className="text-xl font-bold truncate">{title}</h1>
                {subtitle && (
                  <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
                )}
              </motion.div>
            )}
          </div>

          {/* Center - Search (Desktop) */}
          <div className="hidden max-w-md flex-1 px-8 lg:block">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex w-full items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5 text-muted-foreground transition-colors hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
              <span className="text-sm">Pretraži lekcije, reči...</span>
              <kbd className="ml-auto hidden items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-xs sm:flex">
                <Command className="h-3 w-3" /> K
              </kbd>
            </button>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Sound Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSound}
              className="h-9 w-9"
              title={isSoundEnabled ? "Isključi zvuk" : "Uključi zvuk"}
            >
              {isSoundEnabled ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <VolumeX className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-german-red opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-german-red" />
              </span>
            </Button>

            {/* Mobile Search */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 lg:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mx-auto mt-20 max-w-lg px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/10 p-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Pretraži lekcije, reči, vežbe..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 border-0 bg-transparent p-0 text-lg focus-visible:ring-0"
                    autoFocus
                    icon={undefined}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="max-h-96 overflow-y-auto p-2">
                  {searchQuery ? (
                    <div className="p-4 text-center text-muted-foreground">
                      <p>Pretraga za &quot;{searchQuery}&quot;...</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="px-3 py-2 text-xs font-medium text-muted-foreground">
                        Brzi pristup
                      </p>
                      {[
                        { label: "Nastavi lekciju", href: "/lekcije" },
                        { label: "AI Tutor", href: "/ai-tutor" },
                        { label: "Ponovi vokabular", href: "/vokabular" },
                        { label: "Vežbe", href: "/vezbe" },
                      ].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/10"
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <Search className="h-4 w-4 text-muted-foreground" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

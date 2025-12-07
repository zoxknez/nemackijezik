"use client"

import { useUIStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import { Bell, Search, Moon, Sun, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "motion/react"

interface HeaderProps {
  title?: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  const { isSidebarOpen, isSoundEnabled, toggleSound, theme, setTheme } = useUIStore()

  return (
    <header
      className={cn(
        "sticky top-0 z-30 h-16 border-b border-white/10 bg-background/80 backdrop-blur-xl",
        "transition-all duration-300",
        isSidebarOpen ? "lg:pl-[280px]" : "lg:pl-[80px]"
      )}
    >
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        {/* Left side - Title */}
        <div className="flex items-center gap-4 pl-12 lg:pl-0">
          {title && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-xl font-bold">{title}</h1>
              {subtitle && (
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              )}
            </motion.div>
          )}
        </div>

        {/* Center - Search */}
        <div className="hidden max-w-md flex-1 px-8 md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Pretraži lekcije, reči..."
              className="w-full bg-white/5 pl-10 focus:bg-white/10"
              icon={undefined}
            />
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSound}
            className="hidden sm:flex"
          >
            {isSoundEnabled ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-german-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-german-red" />
            </span>
          </Button>

          {/* Mobile Search */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

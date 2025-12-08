"use client"

import { useUIStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import { Bell, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title?: string
  subtitle?: string
  showGreeting?: boolean
  userName?: string
}

export function Header({ title, subtitle, showGreeting, userName }: HeaderProps) {
  const { isSoundEnabled, toggleSound, theme, setTheme } = useUIStore()

  // Get time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Dobro jutro"
    if (hour < 18) return "Dobar dan"
    return "Dobro veče"
  }

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur-xl w-full overflow-hidden">
      <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
        {/* Left side - Title or Greeting */}
        <div className="flex-1 min-w-0">
          {showGreeting && userName ? (
            <div>
              <h1 className="text-lg sm:text-xl font-bold truncate">
                {getGreeting()}, {userName}!
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground truncate">
                {subtitle || "Nastavi gde si stao i osvoji današnji cilj"}
              </p>
            </div>
          ) : title ? (
            <div>
              <h1 className="text-lg sm:text-xl font-bold truncate">{title}</h1>
              {subtitle && (
                <p className="text-xs sm:text-sm text-muted-foreground truncate">{subtitle}</p>
              )}
            </div>
          ) : null}
        </div>

        {/* Right side - Actions (compact on mobile) */}
        <div className="flex items-center gap-1 sm:gap-2 ml-2 shrink-0">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9 sm:h-10 sm:w-10"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-german-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-german-red" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

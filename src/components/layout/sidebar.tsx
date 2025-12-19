"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useUIStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "motion/react"
import {
  Home,
  BookOpen,
  Languages,
  Dumbbell,
  Trophy,
  User,
  Settings,
  GraduationCap,
  Flame,
  Zap,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Library,
  Users,
} from "lucide-react"

const mainNavItems = [
  { href: "/dashboard", label: "Početna", icon: Home },
  { href: "/lekcije", label: "Lekcije", icon: BookOpen },
  { href: "/recnik", label: "Rečnik", icon: Library },
  { href: "/vokabular", label: "Vokabular", icon: Languages },
  { href: "/vezbe", label: "Vežbe", icon: Dumbbell },
  { href: "/ai-tutor", label: "AI Tutor", icon: Sparkles },
  { href: "/chat", label: "Razgovor", icon: MessageCircle },
  { href: "/zajednica", label: "Zajednica", icon: Users },
]

const bottomNavItems = [
  { href: "/dostignuca", label: "Dostignuća", icon: Trophy },
  { href: "/profil", label: "Profil", icon: User },
  { href: "/podesavanja", label: "Podešavanja", icon: Settings },
]

interface SidebarProps {
  user?: {
    name: string
    image?: string
    level: string
    xp: number
    streak: number
  }
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const { isSidebarOpen, toggleSidebar } = useUIStore()

  return (
    <>
      {/* Sidebar - Hidden on mobile, visible on lg+ */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen",
          "hidden lg:flex", // KEY: hidden on mobile!
          "flex-col border-r border-white/10",
          "bg-background/80 backdrop-blur-xl",
          "transition-all duration-300",
          isSidebarOpen ? "w-[280px]" : "w-[80px]"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-german-red via-german-gold to-german-black shadow-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-lg font-bold gradient-text"
                >
                  DeutschMaster
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* User Stats */}
        {user && (
          <div className="mx-4 my-4">
            <div className={cn(
              "glass-effect rounded-xl p-4 transition-all duration-300",
              !isSidebarOpen && "p-2"
            )}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-german-gold"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-german-gold to-amber-400 text-black font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-level-a1 to-green-400 text-[10px] font-bold text-white ring-2 ring-background">
                    {user.level}
                  </span>
                </div>
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex-1 min-w-0"
                    >
                      <p className="font-semibold truncate">{user.name}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Zap className="h-3 w-3 text-german-gold" />
                          {user.xp.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="h-3 w-3 text-orange-500" />
                          {user.streak}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-2">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                  "hover:bg-white/10",
                  isActive && "bg-gradient-to-r from-german-red/20 to-german-gold/20 text-german-gold shadow-lg shadow-german-gold/10",
                  !isActive && "text-muted-foreground hover:text-foreground",
                  !isSidebarOpen && "justify-center px-0"
                )}
              >
                <Icon className={cn("h-5 w-5 shrink-0", isActive && "text-german-gold")} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="border-t border-white/10 px-3 py-4 space-y-1">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  "hover:bg-white/10",
                  isActive && "bg-white/10 text-foreground",
                  !isActive && "text-muted-foreground hover:text-foreground",
                  !isSidebarOpen && "justify-center px-0"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            )
          })}
        </div>

        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 hidden h-6 w-6 rounded-full border border-white/10 bg-background shadow-lg lg:flex"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </aside>
    </>
  )
}

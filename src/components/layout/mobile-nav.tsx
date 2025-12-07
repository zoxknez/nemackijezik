"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Home,
  BookOpen,
  Dumbbell,
  User,
  Sparkles
} from "lucide-react"

const mobileNavItems = [
  { href: "/dashboard", label: "Početna", icon: Home },
  { href: "/lekcije", label: "Lekcije", icon: BookOpen },
  { href: "/ai-tutor", label: "AI Tutor", icon: Sparkles },
  { href: "/vezbe", label: "Vežbe", icon: Dumbbell },
  { href: "/profil", label: "Profil", icon: User },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-background/80 backdrop-blur-xl lg:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {mobileNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors min-w-[60px]",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

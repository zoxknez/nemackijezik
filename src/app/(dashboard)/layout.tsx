import { Sidebar } from "@/components/layout/sidebar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ExtendedUser } from "@/types"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/prijava")
  }

  const user = session.user as ExtendedUser

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Sidebar - only visible on desktop (lg+) */}
      <Sidebar
        user={{
          name: user.name || "Korisnik",
          image: user.image || undefined,
          level: user.level || "A1",
          xp: user.xp || 0,
          streak: user.streak || 0,
        }}
      />
      
      {/* Main content */}
      <main className="w-full min-h-screen pb-20 lg:pb-0 lg:pl-[280px] overflow-x-hidden">
        {children}
      </main>
      
      {/* Mobile bottom navigation - only visible on mobile */}
      <MobileNav />
    </div>
  )
}

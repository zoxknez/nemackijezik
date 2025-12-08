import { Sidebar } from "@/components/layout/sidebar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/prijava")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - only visible on desktop (lg+) */}
      <Sidebar
        user={{
          name: session.user.name || "Korisnik",
          image: session.user.image || undefined,
          level: (session.user as any).level || "A1",
          xp: (session.user as any).xp || 0,
          streak: (session.user as any).streak || 0,
        }}
      />
      
      {/* Main content */}
      <main className="w-full min-h-screen pb-20 lg:pb-0 lg:pl-[280px]">
        {children}
      </main>
      
      {/* Mobile bottom navigation - only visible on mobile */}
      <MobileNav />
    </div>
  )
}

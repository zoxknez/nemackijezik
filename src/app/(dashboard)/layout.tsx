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
      <Sidebar
        user={{
          name: session.user.name || "Korisnik",
          image: session.user.image || undefined,
          level: (session.user as any).level || "A1",
          xp: (session.user as any).xp || 0,
          streak: (session.user as any).streak || 0,
        }}
      />
      <div className="lg:pl-[280px] pb-16 lg:pb-0 transition-all duration-300">
        {children}
      </div>
      <MobileNav />
    </div>
  )
}

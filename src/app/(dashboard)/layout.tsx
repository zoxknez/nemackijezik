import { Sidebar } from "@/components/layout/sidebar"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ToastContainer } from "@/components/ui/toast"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

interface ExtendedUser {
  name?: string | null
  image?: string | null
  level?: string
  xp?: number
  streak?: number
}

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
    <div className="min-h-screen bg-background">
      <Sidebar
        user={{
          name: user.name || "Korisnik",
          image: user.image || undefined,
          level: user.level || "A1",
          xp: user.xp || 0,
          streak: user.streak || 0,
        }}
      />
      <main className="lg:pl-[280px] pb-20 lg:pb-0 transition-all duration-300">
        {children}
      </main>
      <MobileNav />
      <ToastContainer />
    </div>
  )
}

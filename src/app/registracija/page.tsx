"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/card"
import { LevelBadge } from "@/components/ui/badge"
import { GraduationCap, Mail, Lock, User, ArrowRight, Loader2, Check } from "lucide-react"
import { Background } from "@/components/background"
import type { Level } from "@/types"

const levels: Array<{ level: Level; name: string; description: string }> = [
  { level: "A1", name: "Potpuni početnik", description: "Nikada nisam učio nemački" },
  { level: "A2", name: "Osnovni", description: "Znam osnovne fraze i reči" },
  { level: "B1", name: "Srednji", description: "Mogu voditi jednostavne razgovore" },
  { level: "B2", name: "Viši srednji", description: "Razumem većinu tekstova" },
  { level: "C1", name: "Napredni", description: "Tečno komuniciram" },
  { level: "C2", name: "Profesionalni", description: "Kao izvorni govornik" },
]

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1")
  const [dailyGoal, setDailyGoal] = useState(20)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // First, create the user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          level: selectedLevel,
          dailyGoal,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Greška pri registraciji")
      }

      // Auto sign in after registration
      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (signInResult?.error) {
        throw new Error("Greška pri prijavljivanju")
      }

      router.push("/dashboard")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Došlo je do greške")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <GlassCard className="w-full max-w-lg p-8">
          {/* Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-german-red via-german-gold to-german-black shadow-lg">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">DeutschMaster</span>
            </Link>
          </div>

          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  step >= s
                    ? "bg-gradient-to-br from-german-gold to-amber-400 text-black"
                    : "bg-white/10 text-muted-foreground"
                }`}
              >
                {step > s ? <Check className="h-4 w-4" /> : s}
              </div>
            ))}
          </div>

          {/* Step 1: Account Info */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h1 className="text-2xl font-bold text-center mb-2">Kreirajte nalog</h1>
              <p className="text-center text-muted-foreground mb-6">
                Besplatno, bez kreditne kartice
              </p>

              {/* Google Sign In */}
              <Button
                variant="outline"
                className="w-full mb-6 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Registruj se sa Google nalogom
              </Button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Ili sa emailom</span>
                </div>
              </div>

              <div className="space-y-4">
                {error && (
                  <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Vaše ime
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marko Marković"
                    icon={<User className="h-5 w-5" />}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email adresa
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vas@email.com"
                    icon={<Mail className="h-5 w-5" />}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Lozinka
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 karaktera"
                    icon={<Lock className="h-5 w-5" />}
                    required
                  />
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full"
                  size="lg"
                  disabled={!name || !email || password.length < 8}
                >
                  Nastavi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Select Level */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h1 className="text-2xl font-bold text-center mb-2">Vaš trenutni nivo</h1>
              <p className="text-center text-muted-foreground mb-6">
                Izaberite gde se trenutno nalazite
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {levels.map((l) => (
                  <button
                    key={l.level}
                    onClick={() => setSelectedLevel(l.level)}
                    className={`rounded-xl border-2 p-4 text-left transition-all ${
                      selectedLevel === l.level
                        ? "border-german-gold bg-german-gold/10"
                        : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <LevelBadge level={l.level} showLabel={false} className="mb-2" />
                    <p className="font-semibold text-sm">{l.name}</p>
                    <p className="text-xs text-muted-foreground">{l.description}</p>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Nazad
                </Button>
                <Button onClick={() => setStep(3)} className="flex-1">
                  Nastavi
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Daily Goal */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-right-4">
              <h1 className="text-2xl font-bold text-center mb-2">Dnevni cilj</h1>
              <p className="text-center text-muted-foreground mb-6">
                Koliko vremena želite da učite dnevno?
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { xp: 10, label: "5 min", desc: "Lagano" },
                  { xp: 20, label: "10 min", desc: "Redovno" },
                  { xp: 30, label: "15 min", desc: "Ozbiljno" },
                  { xp: 50, label: "20 min", desc: "Intenzivno" },
                ].map((goal) => (
                  <button
                    key={goal.xp}
                    type="button"
                    onClick={() => setDailyGoal(goal.xp)}
                    className={`rounded-xl border-2 p-4 text-center transition-all ${
                      dailyGoal === goal.xp
                        ? "border-german-gold bg-german-gold/10"
                        : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <p className="text-2xl font-bold text-german-gold">{goal.label}</p>
                    <p className="text-sm text-muted-foreground">{goal.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{goal.xp} XP/dan</p>
                  </button>
                ))}
              </div>

              {error && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400 mb-4">
                  {error}
                </div>
              )}

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Nazad
                </Button>
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Kreiranje...
                    </>
                  ) : (
                    <>
                      Započni učenje
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Već imate nalog?{" "}
            <Link href="/prijava" className="text-german-gold hover:underline font-medium">
              Prijavite se
            </Link>
          </p>
        </GlassCard>
      </div>
    </main>
  )
}

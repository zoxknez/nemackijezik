"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardBackground } from "@/components/background"
import { motion, AnimatePresence } from "motion/react"
import {
  Bell,
  Moon,
  Sun,
  Globe,
  Shield,
  Volume2,
  Smartphone,
  HelpCircle,
  ChevronRight,
  Check,
  Clock,
  Target,
  Zap,
  BookOpen,
  Palette,
  Download,
  Trash2,
  Mail,
  Lock,
  Eye,
  Heart,
  MessageSquare,
  FileText,
  ExternalLink,
  AlertTriangle,
  RefreshCw,
  Mic,
  Languages,
  GraduationCap,
  BarChart3,
  Timer,
  Keyboard
} from "lucide-react"

// Tipovi za podešavanja
interface ToggleSetting {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  description?: string
  enabled: boolean
}

interface SelectSetting {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  description?: string
  value: string
  options: { value: string; label: string }[]
}

// Podešavanja učenja
const learningSettings: (ToggleSetting | SelectSetting)[] = [
  {
    id: "dailyGoal",
    icon: Target,
    label: "Dnevni cilj",
    description: "Koliko minuta učenja dnevno",
    value: "15",
    options: [
      { value: "5", label: "5 minuta (opušteno)" },
      { value: "10", label: "10 minuta (regularno)" },
      { value: "15", label: "15 minuta (ozbiljno)" },
      { value: "30", label: "30 minuta (intenzivno)" },
      { value: "60", label: "60 minuta (maraton)" },
    ]
  } as SelectSetting,
  {
    id: "difficulty",
    icon: BarChart3,
    label: "Težina vežbi",
    description: "Prilagodi izazovnost",
    value: "adaptive",
    options: [
      { value: "easy", label: "Lagano" },
      { value: "adaptive", label: "Prilagodljivo (preporučeno)" },
      { value: "hard", label: "Teško" },
    ]
  } as SelectSetting,
  {
    id: "autoPlay",
    icon: Volume2,
    label: "Automatska reprodukcija zvuka",
    description: "Automatski puštaj izgovor reči",
    enabled: true
  } as ToggleSetting,
  {
    id: "showTranslation",
    icon: Languages,
    label: "Prikaži prevod",
    description: "Prikaži srpski prevod uz nemačke reči",
    enabled: true
  } as ToggleSetting,
  {
    id: "spokenFeedback",
    icon: Mic,
    label: "Govorna povratna informacija",
    description: "AI čita povratne informacije glasno",
    enabled: false
  } as ToggleSetting,
  {
    id: "timerMode",
    icon: Timer,
    label: "Mod tajmera",
    description: "Prikaži vreme tokom vežbi",
    enabled: true
  } as ToggleSetting,
]

// Podešavanja obaveštenja
const notificationSettings: ToggleSetting[] = [
  {
    id: "dailyReminder",
    icon: Bell,
    label: "Dnevni podsetnik",
    description: "Podseti me da učim svaki dan",
    enabled: true
  },
  {
    id: "streakReminder",
    icon: Zap,
    label: "Streak upozorenja",
    description: "Obavesti me ako gubim streak",
    enabled: true
  },
  {
    id: "achievementAlerts",
    icon: GraduationCap,
    label: "Nova dostignuća",
    description: "Obavesti me o novim dostignućima",
    enabled: true
  },
  {
    id: "weeklyReport",
    icon: BarChart3,
    label: "Nedeljni izveštaj",
    description: "Pošalji mi nedeljni rezime napretka",
    enabled: false
  },
  {
    id: "pushNotifications",
    icon: Smartphone,
    label: "Push notifikacije",
    description: "Primaj obaveštenja na telefonu",
    enabled: true
  },
  {
    id: "emailNotifications",
    icon: Mail,
    label: "Email obaveštenja",
    description: "Primaj obaveštenja na email",
    enabled: false
  },
]

// Podešavanja izgleda
const appearanceSettings = {
  theme: {
    id: "theme",
    label: "Tema",
    value: "dark",
    options: [
      { value: "light", label: "Svetla", icon: Sun },
      { value: "dark", label: "Tamna", icon: Moon },
      { value: "system", label: "Sistemska", icon: Smartphone },
    ]
  },
  language: {
    id: "language",
    label: "Jezik aplikacije",
    value: "sr",
    options: [
      { value: "sr", label: "Srpski" },
      { value: "en", label: "English" },
      { value: "de", label: "Deutsch" },
    ]
  },
  fontSize: {
    id: "fontSize",
    label: "Veličina fonta",
    value: "medium",
    options: [
      { value: "small", label: "Mala" },
      { value: "medium", label: "Srednja" },
      { value: "large", label: "Velika" },
    ]
  }
}

// Podešavanja pristupačnosti
const accessibilitySettings: ToggleSetting[] = [
  {
    id: "reduceMotion",
    icon: RefreshCw,
    label: "Smanji animacije",
    description: "Minimizuj pokrete na ekranu",
    enabled: false
  },
  {
    id: "highContrast",
    icon: Eye,
    label: "Visoki kontrast",
    description: "Povećaj kontrast boja",
    enabled: false
  },
  {
    id: "screenReader",
    icon: Volume2,
    label: "Podrška za čitač ekrana",
    description: "Optimizuj za čitače ekrana",
    enabled: false
  },
  {
    id: "keyboardNavigation",
    icon: Keyboard,
    label: "Navigacija tastaturom",
    description: "Koristi prečice na tastaturi",
    enabled: true
  },
]

// Linkovi za pomoć i podršku
const supportLinks = [
  { icon: HelpCircle, label: "Centar za pomoć", href: "#", external: true },
  { icon: MessageSquare, label: "Kontaktiraj podršku", href: "#", external: false },
  { icon: FileText, label: "Česta pitanja (FAQ)", href: "#", external: true },
  { icon: Heart, label: "Oceni aplikaciju", href: "#", external: true },
]

// Pravni linkovi
const legalLinks = [
  { icon: Shield, label: "Politika privatnosti", href: "#" },
  { icon: FileText, label: "Uslovi korišćenja", href: "#" },
  { icon: Lock, label: "Bezbednost podataka", href: "#" },
]

// Komponenta za Toggle switch
function ToggleSwitch({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-7 w-12 rounded-full transition-colors ${
        enabled ? "bg-german-gold" : "bg-white/10"
      }`}
    >
      <motion.div
        className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
        animate={{ left: enabled ? "calc(100% - 24px)" : "4px" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  )
}

export default function SettingsPage() {
  // State za podešavanja
  const [learningState, setLearningState] = useState(learningSettings)
  const [notificationState, setNotificationState] = useState(notificationSettings)
  const [accessibilityState, setAccessibilityState] = useState(accessibilitySettings)
  const [theme, setTheme] = useState(appearanceSettings.theme.value)
  const [language, setLanguage] = useState(appearanceSettings.language.value)
  const [fontSize, setFontSize] = useState(appearanceSettings.fontSize.value)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [reminderTime, setReminderTime] = useState("18:00")

  // Toggle funkcije
  const toggleLearningSetting = (id: string) => {
    setLearningState(prev => 
      prev.map(s => 
        'enabled' in s && s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    )
  }

  const toggleNotificationSetting = (id: string) => {
    setNotificationState(prev => 
      prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s)
    )
  }

  const toggleAccessibilitySetting = (id: string) => {
    setAccessibilityState(prev => 
      prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s)
    )
  }

  const updateLearningSetting = (id: string, value: string) => {
    setLearningState(prev => 
      prev.map(s => 
        'value' in s && s.id === id ? { ...s, value } : s
      )
    )
  }

  return (
    <>
      <Header
        title="Podešavanja"
        subtitle="Prilagodi aplikaciju svojim potrebama"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          
          {/* ===== UČENJE ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                <BookOpen className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Učenje</h3>
                <p className="text-sm text-muted-foreground">Prilagodi način učenja</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              {learningState.map((setting, index) => (
                <div
                  key={setting.id}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-white/5 ${
                    index !== learningState.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-blue-400">
                      <setting.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{setting.label}</p>
                      {setting.description && (
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      )}
                    </div>
                  </div>

                  {'enabled' in setting ? (
                    <ToggleSwitch
                      enabled={setting.enabled}
                      onChange={() => toggleLearningSetting(setting.id)}
                    />
                  ) : (
                    <select
                      value={setting.value}
                      onChange={(e) => updateLearningSetting(setting.id, e.target.value)}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-german-gold/50"
                    >
                      {setting.options.map(opt => (
                        <option key={opt.value} value={opt.value} className="bg-gray-900">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
            </GlassCard>
          </section>

          {/* ===== OBAVEŠTENJA ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/20">
                <Bell className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Obaveštenja</h3>
                <p className="text-sm text-muted-foreground">Upravljaj obaveštenjima</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              {/* Vreme podsetnika */}
              <div className="flex items-center justify-between border-b border-white/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Vreme podsetnika</p>
                    <p className="text-sm text-muted-foreground">Kada da te podsetimo</p>
                  </div>
                </div>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-german-gold/50"
                />
              </div>

              {notificationState.map((setting, index) => (
                <div
                  key={setting.id}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-white/5 ${
                    index !== notificationState.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-400">
                      <setting.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{setting.label}</p>
                      {setting.description && (
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      )}
                    </div>
                  </div>
                  <ToggleSwitch
                    enabled={setting.enabled}
                    onChange={() => toggleNotificationSetting(setting.id)}
                  />
                </div>
              ))}
            </GlassCard>
          </section>

          {/* ===== IZGLED ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20">
                <Palette className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Izgled</h3>
                <p className="text-sm text-muted-foreground">Prilagodi izgled aplikacije</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              {/* Tema */}
              <div className="border-b border-white/5 p-4">
                <p className="mb-3 font-medium text-white">Tema</p>
                <div className="grid grid-cols-3 gap-3">
                  {appearanceSettings.theme.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setTheme(opt.value)}
                      className={`flex items-center justify-center gap-2 rounded-lg border p-3 transition-all ${
                        theme === opt.value
                          ? "border-german-gold bg-german-gold/20 text-german-gold"
                          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <opt.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{opt.label}</span>
                      {theme === opt.value && <Check className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jezik */}
              <div className="flex items-center justify-between border-b border-white/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-purple-400">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Jezik aplikacije</p>
                    <p className="text-sm text-muted-foreground">Izaberi jezik interfejsa</p>
                  </div>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-german-gold/50"
                >
                  {appearanceSettings.language.options.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-gray-900">
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Veličina fonta */}
              <div className="p-4">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-purple-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Veličina fonta</p>
                    <p className="text-sm text-muted-foreground">Prilagodi veličinu teksta</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {appearanceSettings.fontSize.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFontSize(opt.value)}
                      className={`rounded-lg border p-3 text-center transition-all ${
                        fontSize === opt.value
                          ? "border-german-gold bg-german-gold/20 text-german-gold"
                          : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <span className={`font-medium ${
                        opt.value === "small" ? "text-sm" : opt.value === "large" ? "text-lg" : ""
                      }`}>
                        {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>
          </section>

          {/* ===== PRISTUPAČNOST ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20">
                <Eye className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Pristupačnost</h3>
                <p className="text-sm text-muted-foreground">Opcije pristupačnosti</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              {accessibilityState.map((setting, index) => (
                <div
                  key={setting.id}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-white/5 ${
                    index !== accessibilityState.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-green-400">
                      <setting.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{setting.label}</p>
                      {setting.description && (
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      )}
                    </div>
                  </div>
                  <ToggleSwitch
                    enabled={setting.enabled}
                    onChange={() => toggleAccessibilitySetting(setting.id)}
                  />
                </div>
              ))}
            </GlassCard>
          </section>

          {/* ===== PODACI I PRIVATNOST ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20">
                <Shield className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Podaci i privatnost</h3>
                <p className="text-sm text-muted-foreground">Upravljaj svojim podacima</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              <button className="flex w-full items-center justify-between p-4 transition-colors hover:bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-blue-400">
                    <Download className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">Preuzmi moje podatke</p>
                    <p className="text-sm text-muted-foreground">Eksportuj sav svoj napredak</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>

              <button className="flex w-full items-center justify-between p-4 transition-colors hover:bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-orange-400">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-white">Resetuj napredak</p>
                    <p className="text-sm text-muted-foreground">Počni učenje ispočetka</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>

              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex w-full items-center justify-between p-4 transition-colors hover:bg-red-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-red-400">Obriši nalog</p>
                    <p className="text-sm text-muted-foreground">Trajno obriši sve podatke</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-red-400" />
              </button>
            </GlassCard>
          </section>

          {/* ===== POMOĆ I PODRŠKA ===== */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Pomoć i podrška</h3>
                <p className="text-sm text-muted-foreground">Pronađi pomoć i informacije</p>
              </div>
            </div>

            <GlassCard className="overflow-hidden">
              {supportLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-white/5 ${
                    index !== supportLinks.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-cyan-400">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-white">{link.label}</span>
                  </div>
                  {link.external ? (
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </a>
              ))}
            </GlassCard>
          </section>

          {/* ===== PRAVNI DOKUMENTI ===== */}
          <section className="space-y-4">
            <GlassCard className="overflow-hidden">
              {legalLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-white/5 ${
                    index !== legalLinks.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-muted-foreground">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-white">{link.label}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </GlassCard>
          </section>

          {/* ===== FOOTER ===== */}
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-german-gold" />
              <span className="text-lg font-bold text-white">DeutschMaster</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Verzija 1.0.0 • Build 2024.12
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ for German learners
            </p>
          </div>
        </div>
      </main>

      {/* Modal za brisanje naloga */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-background p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Obriši nalog?</h3>
              <p className="mb-6 text-muted-foreground">
                Ova akcija je nepovratna. Svi tvoji podaci, napredak, dostignuća i statistika će biti trajno obrisani.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-white/10"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Otkaži
                </Button>
                <Button
                  className="flex-1 bg-red-500 text-white hover:bg-red-600"
                >
                  Obriši nalog
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

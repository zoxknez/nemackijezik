"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/card"
import { LevelBadge } from "@/components/ui/badge"
import { LandingBackground } from "@/components/background"
import { motion } from "motion/react"
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Mic, 
  Globe, 
  Zap,
  MessageCircle,
  Volume2,
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description: "Claude Sonnet 4 vodi vas kroz lekcije sa personalizovanim objašnjenjima na srpskom jeziku.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Mic,
    title: "Izgovor",
    description: "Deepgram Nova-3 prepoznavanje govora i ElevenLabs sinteza za savršen nemački akcenat.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Globe,
    title: "Prevod",
    description: "DeepL prevodi između srpskog i nemačkog sa 99% tačnošću i srpski je BESPLATAN.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "SRS Algoritam",
    description: "SM-2 spaced repetition osigurava da nikad ne zaboravite naučene reči.",
    gradient: "from-german-gold to-amber-500",
  },
  {
    icon: MessageCircle,
    title: "Konverzacija",
    description: "Vežbajte razgovor sa AI u realnim situacijama - od kafića do poslovnih sastanaka.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Volume2,
    title: "Audio Lekcije",
    description: "Slušajte i učite u pokretu sa profesionalno snimljenim audio sadržajem.",
    gradient: "from-orange-500 to-red-500",
  },
]

const levels = [
  { level: "A1" as const, name: "Početnik", words: "500+ reči", desc: "Osnovni pozdravi, brojevi, boje" },
  { level: "A2" as const, name: "Osnovni", words: "1000+ reči", desc: "Svakodnevne situacije, kupovina" },
  { level: "B1" as const, name: "Srednji", words: "2000+ reči", desc: "Putovanja, posao, mišljenja" },
  { level: "B2" as const, name: "Viši srednji", words: "4000+ reči", desc: "Kompleksne teme, debate" },
  { level: "C1" as const, name: "Napredni", words: "8000+ reči", desc: "Akademski nemački, nijanse" },
  { level: "C2" as const, name: "Majstor", words: "16000+ reči", desc: "Kao izvorni govornik" },
]

const stats = [
  { value: "50,000+", label: "Aktivnih učenika" },
  { value: "1M+", label: "Naučenih reči" },
  { value: "98%", label: "Zadovoljstvo" },
  { value: "4.9", label: "Prosečna ocena" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <LandingBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 shadow-lg">
            <Sparkles className="h-4 w-4 text-german-gold" />
            <span className="text-sm font-medium text-white">Najnaprednija platforma za učenje nemačkog</span>
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="gradient-text">Naučite Nemački</span>
            <br />
            <span className="text-white drop-shadow-lg">Kao Nikada Pre</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Od <span className="text-level-a1 font-semibold">A1</span> do{" "}
            <span className="text-level-c2 font-semibold">C2</span> uz pomoć veštačke inteligencije.
            <br />
            Personalizovano, efikasno i zabavno.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/registracija">
              <Button size="xl" className="min-w-[200px] rounded-2xl text-lg shadow-german-gold/20 shadow-xl hover:scale-105 transition-transform">
                Započni Besplatno
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/prijava">
              <Button variant="outline" size="xl" className="min-w-[200px] rounded-2xl border-white/20 bg-white/5 text-lg backdrop-blur-sm hover:bg-white/10 hover:text-white">
                Prijavi se
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={item} className="text-center">
              <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Tehnologija budućnosti za <span className="text-german-gold">brže učenje</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Koristimo najnovije AI modele kako bismo vam pružili iskustvo učenja koje se prilagođava vama.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <GlassCard className="group h-full p-8 hover:bg-white/10 transition-colors duration-300">
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="relative z-10 py-24 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Put do <span className="text-german-red">tečnog govora</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Strukturiran program koji vas vodi od potpunog početnika do eksperta.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {levels.map((lvl, i) => (
              <motion.div
                key={lvl.level}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="relative overflow-hidden p-6 hover:border-german-gold/30 transition-colors">
                  <div className="mb-4 flex items-center justify-between">
                    <LevelBadge level={lvl.level} className="scale-110" />
                    <span className="text-sm font-medium text-gray-400">{lvl.words}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{lvl.name}</h3>
                  <p className="text-sm text-gray-400">{lvl.desc}</p>
                  
                  {/* Progress Line Decoration */}
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
                    <div 
                      className="h-full bg-gradient-to-r from-german-black via-german-red to-german-gold opacity-50" 
                      style={{ width: `${(i + 1) * 16.6}%` }}
                    />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 py-12 backdrop-blur-xl">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-german-black via-german-red to-german-gold">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">DeutschMaster</span>
          </div>
          <p className="text-gray-500">
            © 2024 DeutschMaster. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </main>
  )
}

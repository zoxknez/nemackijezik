"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardBackground } from "@/components/background"
import { motion } from "motion/react"
import Link from "next/link"
import {
  Bot,
  Mic,
  Languages,
  Sparkles,
  MessageCircle,
  Wand2,
  BrainCircuit,
  ArrowRight,
  BookOpen,
  PenTool,
  Volume2,
  CheckCircle2,
  Lightbulb,
  Send,
  RotateCcw,
  Target,
  TrendingUp,
  Star,
  Clock,
  ChevronRight,
  Play,
  Pause,
  RefreshCw
} from "lucide-react"

// AI Features
const aiFeatures = [
  {
    title: "Konverzacija",
    description: "Razgovaraj sa AI tutorom o bilo kojoj temi. Vežbaj svakodnevni govor i dobij instant korekcije.",
    icon: MessageCircle,
    href: "/chat",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    features: ["Real-time korekcije", "Prilagođen nivo", "Razne teme"]
  },
  {
    title: "Analiza izgovora",
    description: "Snimi svoj izgovor i dobij detaljnu analizu sa ocenom i predlozima za poboljšanje.",
    icon: Mic,
    href: "#pronunciation",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    features: ["AI ocena izgovora", "Fonetska analiza", "Audio povratna info"]
  },
  {
    title: "Gramatički asistent",
    description: "Analiziraj rečenice i dobij detaljna objašnjenja za sva gramatička pravila.",
    icon: Wand2,
    href: "#grammar",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    features: ["Parsiranje rečenica", "Objašnjenja pravila", "Vežbe"]
  },
  {
    title: "Pametni prevodilac",
    description: "Kontekstualni prevod koji razume nijanse, idiome i kulturne reference.",
    icon: Languages,
    href: "#translator",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    features: ["Kontekstualni prevod", "Idiomi", "Alternative"]
  },
]

// Quick actions za AI
const quickActions = [
  { label: "Kako se kaže...", prompt: "Kako se kaže na nemačkom: ", icon: Languages },
  { label: "Objasni reč", prompt: "Objasni mi značenje reči: ", icon: BookOpen },
  { label: "Proveri rečenicu", prompt: "Da li je ova rečenica ispravna: ", icon: CheckCircle2 },
  { label: "Napravi primer", prompt: "Napravi primere rečenica sa: ", icon: PenTool },
]

// Scenarios za konverzaciju
const conversationScenarios = [
  {
    id: "restaurant",
    title: "U restoranu",
    titleDe: "Im Restaurant",
    description: "Naruči hranu i piće",
    icon: "🍽️",
    level: "A1",
    duration: "5-10 min"
  },
  {
    id: "shopping",
    title: "Kupovina",
    titleDe: "Einkaufen",
    description: "Kupovina u prodavnici",
    icon: "🛒",
    level: "A1",
    duration: "5-10 min"
  },
  {
    id: "doctor",
    title: "Kod lekara",
    titleDe: "Beim Arzt",
    description: "Opisi simptome i razumi uputstva",
    icon: "🏥",
    level: "A2",
    duration: "10-15 min"
  },
  {
    id: "work",
    title: "Na poslu",
    titleDe: "Bei der Arbeit",
    description: "Poslovni razgovor i sastanak",
    icon: "💼",
    level: "B1",
    duration: "15-20 min"
  },
  {
    id: "travel",
    title: "Putovanje",
    titleDe: "Reisen",
    description: "Aerodrom, hotel, znamenitosti",
    icon: "✈️",
    level: "A2",
    duration: "10-15 min"
  },
  {
    id: "interview",
    title: "Intervju za posao",
    titleDe: "Vorstellungsgespräch",
    description: "Predstavi se i odgovori na pitanja",
    icon: "👔",
    level: "B2",
    duration: "20-30 min"
  },
]

// Demo grammar analysis
const grammarExample = {
  original: "Ich habe gestern ein interessantes Buch gelesen.",
  translation: "Juče sam pročitao zanimljivu knjigu.",
  analysis: [
    { word: "Ich", type: "Pronomen", case: "Nominativ", explanation: "Lična zamenica 1. lice jednine" },
    { word: "habe", type: "Hilfsverb", tense: "Perfekt", explanation: "Pomoćni glagol za prošlo vreme" },
    { word: "gestern", type: "Adverb", explanation: "Prilog za vreme (juče)" },
    { word: "ein interessantes Buch", type: "Akkusativobjekt", case: "Akkusativ", explanation: "Direktni objekat u akuzativu" },
    { word: "gelesen", type: "Partizip II", explanation: "Particip prošli od 'lesen'" },
  ]
}

export default function AITutorPage() {
  const [inputText, setInputText] = useState("")
  const [translatorInput, setTranslatorInput] = useState("")
  const [translatorOutput, setTranslatorOutput] = useState("")
  const [isTranslating, setIsTranslating] = useState(false)
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null)
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  // Simulacija prevoda
  const handleTranslate = async () => {
    if (!translatorInput.trim()) return
    setIsTranslating(true)
    // Simulacija API poziva
    await new Promise(resolve => setTimeout(resolve, 1000))
    setTranslatorOutput("Das ist eine Beispielübersetzung. (Ovo je primer prevoda.)")
    setIsTranslating(false)
  }

  // Simulacija snimanja
  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false)
      // Simulacija ocene
      setPronunciationScore(Math.floor(Math.random() * 30) + 70)
    } else {
      setIsRecording(true)
      setPronunciationScore(null)
    }
  }

  return (
    <>
      <Header
        title="AI Tutor"
        subtitle="Tvoj lični asistent za učenje nemačkog jezika"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-4 lg:p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-blue-900/40 via-purple-900/20 to-black/40 p-8 text-center backdrop-blur-xl lg:p-16">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-24 right-1/4 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
            
            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <motion.div 
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 shadow-2xl shadow-blue-500/30"
                animate={{ 
                  boxShadow: ["0 25px 50px -12px rgba(59, 130, 246, 0.3)", "0 25px 50px -12px rgba(168, 85, 247, 0.3)", "0 25px 50px -12px rgba(59, 130, 246, 0.3)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Bot className="h-12 w-12 text-white" />
              </motion.div>
              
              <h2 className="text-4xl font-bold text-white lg:text-5xl">
                Uči pametnije uz{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                  AI Tehnologiju
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Naš napredni AI sistem pokretan Claude tehnologijom se prilagođava tvom nivou znanja.
                Dostupan 24/7 za konverzaciju, korekcije i objašnjenja.
              </p>
              
              {/* Quick Input */}
              <div className="mx-auto max-w-xl">
                <div className="flex gap-2 rounded-2xl border border-white/10 bg-black/40 p-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Pitaj bilo šta o nemačkom jeziku..."
                    className="flex-1 border-0 bg-transparent text-white placeholder:text-muted-foreground focus-visible:ring-0"
                  />
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      size="sm"
                      className="border-white/10 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => setInputText(action.prompt)}
                    >
                      <action.icon className="mr-2 h-4 w-4" />
                      {action.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.href}>
                  <GlassCard className={`group h-full border ${feature.borderColor} p-6 transition-all hover:-translate-y-2 hover:bg-white/10`}>
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bgColor} ${feature.color} transition-transform group-hover:scale-110`}>
                      <feature.icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="mb-4 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-green-400" />
                          {f}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                      Isprobaj <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Conversation Scenarios */}
          <section id="scenarios" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Scenariji za konverzaciju</h3>
                <p className="text-muted-foreground">Vežbaj realne situacije sa AI tutorom</p>
              </div>
              <Link href="/chat">
                <Button variant="outline" className="border-white/10">
                  Svi scenariji <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {conversationScenarios.map((scenario) => (
                <GlassCard
                  key={scenario.id}
                  className={`group cursor-pointer p-5 transition-all hover:bg-white/10 ${
                    selectedScenario === scenario.id ? "ring-2 ring-german-gold" : ""
                  }`}
                  onClick={() => setSelectedScenario(scenario.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-3xl">
                      {scenario.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-white">{scenario.title}</h4>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          scenario.level === "A1" ? "bg-green-500/20 text-green-400" :
                          scenario.level === "A2" ? "bg-blue-500/20 text-blue-400" :
                          scenario.level === "B1" ? "bg-orange-500/20 text-orange-400" :
                          "bg-purple-500/20 text-purple-400"
                        }`}>
                          {scenario.level}
                        </span>
                      </div>
                      <p className="text-sm text-german-gold">{scenario.titleDe}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{scenario.description}</p>
                      <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {scenario.duration}
                      </div>
                    </div>
                  </div>
                  
                  {selectedScenario === scenario.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <Link href={`/chat?scenario=${scenario.id}`}>
                        <Button className="w-full bg-gradient-to-r from-german-gold to-orange-500">
                          <Play className="mr-2 h-4 w-4" />
                          Započni razgovor
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Grammar Analyzer */}
          <section id="grammar" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Gramatički analizator</h3>
              <p className="text-muted-foreground">Razumi strukturu nemačkih rečenica</p>
            </div>
            
            <GlassCard className="p-6">
              <div className="mb-6 space-y-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-lg font-medium text-white">{grammarExample.original}</p>
                  <p className="text-sm text-muted-foreground">{grammarExample.translation}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {grammarExample.analysis.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative"
                    >
                      <span className={`inline-block rounded-lg px-3 py-2 text-sm font-medium cursor-help ${
                        item.type === "Pronomen" ? "bg-blue-500/20 text-blue-400" :
                        item.type === "Hilfsverb" ? "bg-purple-500/20 text-purple-400" :
                        item.type === "Adverb" ? "bg-orange-500/20 text-orange-400" :
                        item.type === "Akkusativobjekt" ? "bg-green-500/20 text-green-400" :
                        "bg-red-500/20 text-red-400"
                      }`}>
                        {item.word}
                      </span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-48 rounded-lg bg-black/90 p-3 text-xs text-white group-hover:block z-10">
                        <p className="font-bold text-german-gold">{item.type}</p>
                        {item.case && <p>Padež: {item.case}</p>}
                        {item.tense && <p>Vreme: {item.tense}</p>}
                        <p className="mt-1 text-muted-foreground">{item.explanation}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Input
                  placeholder="Unesi rečenicu za analizu..."
                  className="flex-1 border-white/10 bg-white/5"
                />
                <Button className="bg-green-500 hover:bg-green-600">
                  <Wand2 className="mr-2 h-4 w-4" />
                  Analiziraj
                </Button>
              </div>
            </GlassCard>
          </section>

          {/* Pronunciation Trainer */}
          <section id="pronunciation" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Trening izgovora</h3>
              <p className="text-muted-foreground">Poboljšaj svoj nemački izgovor sa AI povratnom informacijom</p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              <GlassCard className="p-6">
                <h4 className="mb-4 font-bold text-white flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-purple-400" />
                  Rečenica za vežbu
                </h4>
                
                <div className="mb-6 rounded-xl bg-white/5 p-4">
                  <p className="text-xl font-medium text-white">Ich möchte einen Kaffee, bitte.</p>
                  <p className="text-sm text-muted-foreground">Želeo bih kafu, molim.</p>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-white/10">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Slušaj
                  </Button>
                  <Button 
                    className={`flex-1 ${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-purple-500 hover:bg-purple-600"}`}
                    onClick={toggleRecording}
                  >
                    {isRecording ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Zaustavi
                      </>
                    ) : (
                      <>
                        <Mic className="mr-2 h-4 w-4" />
                        Snimi
                      </>
                    )}
                  </Button>
                </div>
                
                {isRecording && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 flex items-center justify-center gap-2 text-red-400"
                  >
                    <span className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    Snimanje u toku...
                  </motion.div>
                )}
              </GlassCard>
              
              <GlassCard className="p-6">
                <h4 className="mb-4 font-bold text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-400" />
                  Rezultat
                </h4>
                
                {pronunciationScore !== null ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <div className={`flex h-32 w-32 items-center justify-center rounded-full ${
                        pronunciationScore >= 90 ? "bg-green-500/20" :
                        pronunciationScore >= 70 ? "bg-orange-500/20" :
                        "bg-red-500/20"
                      }`}>
                        <span className={`text-5xl font-bold ${
                          pronunciationScore >= 90 ? "text-green-400" :
                          pronunciationScore >= 70 ? "text-orange-400" :
                          "text-red-400"
                        }`}>
                          {pronunciationScore}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-white">Dobra intonacija</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span className="text-white">Jasni samoglasnici</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-orange-400" />
                        <span className="text-white">Poboljšaj: &quot;ch&quot; zvuk u &quot;möchte&quot;</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-white/10" onClick={() => setPronunciationScore(null)}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Pokušaj ponovo
                    </Button>
                  </div>
                ) : (
                  <div className="flex h-48 items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Mic className="mx-auto h-12 w-12 mb-3 opacity-50" />
                      <p>Snimi svoj izgovor da dobiješ ocenu</p>
                    </div>
                  </div>
                )}
              </GlassCard>
            </div>
          </section>

          {/* Translator */}
          <section id="translator" className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Pametni prevodilac</h3>
              <p className="text-muted-foreground">Kontekstualni prevod sa objašnjenjima</p>
            </div>
            
            <GlassCard className="p-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Srpski</span>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                  <textarea
                    value={translatorInput}
                    onChange={(e) => setTranslatorInput(e.target.value)}
                    placeholder="Unesi tekst za prevod..."
                    className="h-40 w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-german-gold/50 resize-none"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">Nemački</span>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-40 w-full rounded-xl border border-white/10 bg-white/5 p-4">
                    {isTranslating ? (
                      <div className="flex h-full items-center justify-center">
                        <RefreshCw className="h-6 w-6 animate-spin text-german-gold" />
                      </div>
                    ) : translatorOutput ? (
                      <p className="text-white">{translatorOutput}</p>
                    ) : (
                      <p className="text-muted-foreground">Prevod će se pojaviti ovde...</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-500 px-8"
                  onClick={handleTranslate}
                  disabled={isTranslating}
                >
                  <Languages className="mr-2 h-5 w-5" />
                  Prevedi
                </Button>
              </div>
            </GlassCard>
          </section>

          {/* Stats Section */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BrainCircuit, value: "1.2M+", label: "Obrađenih rečenica", color: "text-german-gold" },
              { icon: MessageCircle, value: "50k+", label: "Aktivnih razgovora", color: "text-blue-400" },
              { icon: Star, value: "98%", label: "Tačnost korekcija", color: "text-purple-400" },
              { icon: TrendingUp, value: "4.9★", label: "Ocena korisnika", color: "text-green-400" },
            ].map((stat) => (
              <GlassCard key={stat.label} className="flex items-center gap-4 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* CTA */}
          <GlassCard className="relative overflow-hidden p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-german-gold/20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">Spreman za sledeći nivo?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Započni konverzaciju sa AI tutorom i unapredi svoje znanje nemačkog jezika.
              </p>
              <Link href="/chat">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 via-purple-500 to-german-gold text-white">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Započni razgovor
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </main>
    </>
  )
}

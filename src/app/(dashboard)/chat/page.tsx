"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardBackground } from "@/components/background"
import {
  Send,
  Mic,
  Bot,
  User,
  MoreVertical,
  RefreshCw,
  Volume2,
  Sparkles,
  Copy,
  Check,
  MessageSquare,
  Settings2,
  Trash2,
  Download,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  Lightbulb,
  Globe,
  Coffee,
  ShoppingCart,
  Plane,
  Briefcase,
  Heart,
  GraduationCap,
  X,
  Bookmark,
  Share2,
  Clock,
  Zap,
  Star,
  ImageIcon,
  FileText,
  MicOff,
  Languages
} from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

// Tipovi poruka
interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
  translation?: string
  grammarNotes?: string[]
  vocabulary?: { word: string; meaning: string; example: string }[]
  isBookmarked?: boolean
  feedback?: "positive" | "negative" | null
  audioUrl?: string
}

// Tipovi za scenario i mode
type ChatMode = "conversation" | "roleplay" | "quiz" | "vocabulary"
type DifficultyLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

interface Scenario {
  id: string
  icon: React.ReactNode
  title: string
  titleDe: string
  description: string
  systemPrompt: string
  starterMessages: string[]
}

// Scenariji za roleplay
const scenarios: Scenario[] = [
  {
    id: "cafe",
    icon: <Coffee className="h-5 w-5" />,
    title: "U kafiću",
    titleDe: "Im Café",
    description: "Naruči piće i razgovaraj sa konobarom",
    systemPrompt: "Ti si konobar u nemačkom kafiću. Budi ljubazan i pomozi gostu sa narudžbinom.",
    starterMessages: [
      "Guten Tag! Willkommen in unserem Café. Was darf ich Ihnen bringen?",
      "Guten Morgen! Möchten Sie die Speisekarte sehen?",
      "Herzlich willkommen! Nehmen Sie Platz, ich komme gleich."
    ]
  },
  {
    id: "shopping",
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Kupovina",
    titleDe: "Einkaufen",
    description: "Kupuj u prodavnici ili tržnom centru",
    systemPrompt: "Ti si prodavač u nemačkoj prodavnici. Pomozi kupcu da pronađe što mu treba.",
    starterMessages: [
      "Guten Tag! Kann ich Ihnen helfen?",
      "Willkommen! Suchen Sie etwas Bestimmtes?",
      "Hallo! Wir haben heute tolle Angebote."
    ]
  },
  {
    id: "travel",
    icon: <Plane className="h-5 w-5" />,
    title: "Putovanje",
    titleDe: "Reisen",
    description: "Na aerodromu, železnici ili u hotelu",
    systemPrompt: "Ti si službenik na nemačkoj železničkoj stanici. Pomozi putniku sa informacijama.",
    starterMessages: [
      "Guten Tag! Wohin möchten Sie reisen?",
      "Willkommen am Bahnhof. Brauchen Sie Hilfe?",
      "Kann ich Ihnen mit den Fahrplänen helfen?"
    ]
  },
  {
    id: "work",
    icon: <Briefcase className="h-5 w-5" />,
    title: "Posao",
    titleDe: "Arbeit",
    description: "Razgovor za posao ili u kancelariji",
    systemPrompt: "Ti si HR menadžer u nemačkoj kompaniji. Vodi razgovor za posao.",
    starterMessages: [
      "Guten Tag! Bitte nehmen Sie Platz. Erzählen Sie mir etwas über sich.",
      "Willkommen bei unserem Unternehmen. Warum interessieren Sie sich für diese Stelle?",
      "Schön, Sie kennenzulernen. Was sind Ihre Stärken?"
    ]
  },
  {
    id: "doctor",
    icon: <Heart className="h-5 w-5" />,
    title: "Kod lekara",
    titleDe: "Beim Arzt",
    description: "Zakazi pregled i opiši simptome",
    systemPrompt: "Ti si lekar u Nemačkoj. Pomozi pacijentu da opiše simptome i daj savete.",
    starterMessages: [
      "Guten Tag! Was führt Sie zu mir?",
      "Hallo! Wie kann ich Ihnen helfen? Haben Sie Beschwerden?",
      "Willkommen! Bitte beschreiben Sie Ihre Symptome."
    ]
  },
  {
    id: "university",
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Na fakultetu",
    titleDe: "An der Universität",
    description: "Razgovor sa profesorom ili kolegama",
    systemPrompt: "Ti si profesor na nemačkom univerzitetu. Razgovaraj sa studentom o studijama.",
    starterMessages: [
      "Guten Tag! Haben Sie Fragen zur Vorlesung?",
      "Willkommen in meiner Sprechstunde. Wie kann ich Ihnen helfen?",
      "Hallo! Arbeiten Sie schon an Ihrer Hausarbeit?"
    ]
  }
]

// Brzi predlozi za različite modove
const quickSuggestions = {
  conversation: [
    "Wie geht es dir?",
    "Was machst du heute?",
    "Erzähl mir über dich",
    "Ich lerne Deutsch",
    "Das Wetter ist schön"
  ],
  roleplay: [
    "Ich möchte bestellen",
    "Was empfehlen Sie?",
    "Wie viel kostet das?",
    "Wo ist die Toilette?",
    "Die Rechnung, bitte"
  ],
  quiz: [
    "Nächste Frage",
    "Ich weiß es nicht",
    "Kannst du wiederholen?",
    "Das ist richtig",
    "Erkläre bitte"
  ],
  vocabulary: [
    "Was bedeutet das?",
    "Wie spricht man das aus?",
    "Gib mir ein Beispiel",
    "Mehr Wörter bitte",
    "Synonyme?"
  ]
}

// Inicijalne poruke za različite modove
const getInitialMessage = (mode: ChatMode, scenario?: Scenario): Message => {
  switch (mode) {
    case "roleplay":
      return {
        id: "1",
        role: "assistant",
        content: scenario?.starterMessages[Math.floor(Math.random() * scenario.starterMessages.length)] || "Hallo! Wie kann ich Ihnen helfen?",
        timestamp: new Date(),
        translation: "Zdravo! Kako mogu da vam pomognem?"
      }
    case "quiz":
      return {
        id: "1",
        role: "assistant",
        content: "Willkommen zum Quiz! Ich werde dir Fragen auf Deutsch stellen. Bist du bereit?",
        timestamp: new Date(),
        translation: "Dobrodošao na kviz! Postavljaću ti pitanja na nemačkom. Jesi li spreman?"
      }
    case "vocabulary":
      return {
        id: "1",
        role: "assistant",
        content: "Lass uns neue Wörter lernen! Welches Thema interessiert dich? (Familie, Essen, Reisen, Arbeit...)",
        timestamp: new Date(),
        translation: "Hajde da učimo nove reči! Koja tema te zanima? (Porodica, hrana, putovanje, posao...)"
      }
    default:
      return {
        id: "1",
        role: "assistant",
        content: "Hallo! Ich bin Hans, dein persönlicher Deutsch-Tutor. Wie kann ich dir heute helfen?",
        timestamp: new Date(),
        translation: "Zdravo! Ja sam Hans, tvoj lični tutor za nemački. Kako mogu da ti pomognem danas?"
      }
  }
}

// Simulirani AI odgovori
const getAIResponse = (userMessage: string, mode: ChatMode): Message => {
  const responses = {
    conversation: [
      {
        content: "Das ist sehr interessant! Erzähl mir mehr darüber. Wie lange lernst du schon Deutsch?",
        translation: "To je veoma zanimljivo! Reci mi više o tome. Koliko dugo učiš nemački?",
        vocabulary: [
          { word: "interessant", meaning: "zanimljivo", example: "Das Buch ist sehr interessant." }
        ]
      },
      {
        content: "Sehr gut! Dein Deutsch wird immer besser. Übung macht den Meister!",
        translation: "Odlično! Tvoj nemački je sve bolji. Vežba čini majstora!",
        grammarNotes: ["'wird...besser' - komparativ sa werden"]
      },
      {
        content: "Das verstehe ich! Hast du noch andere Hobbys? Was machst du gerne in deiner Freizeit?",
        translation: "Razumem! Imaš li još neke hobije? Šta voliš da radiš u slobodno vreme?"
      }
    ],
    roleplay: [
      {
        content: "Natürlich! Wir haben heute frischen Kuchen und ausgezeichneten Kaffee. Möchten Sie probieren?",
        translation: "Naravno! Danas imamo sveže kolače i odličnu kafu. Želite li da probate?",
        vocabulary: [
          { word: "frisch", meaning: "svež", example: "Das Brot ist frisch gebacken." },
          { word: "ausgezeichnet", meaning: "odličan", example: "Der Service war ausgezeichnet." }
        ]
      },
      {
        content: "Das macht zusammen 15 Euro und 50 Cent. Zahlen Sie bar oder mit Karte?",
        translation: "To je ukupno 15 evra i 50 centi. Plaćate gotovinom ili karticom?"
      }
    ],
    quiz: [
      {
        content: "Richtig! 🎉 Hier ist die nächste Frage: Was ist das Gegenteil von 'groß'?",
        translation: "Tačno! 🎉 Evo sledeće pitanje: Šta je suprotno od 'veliki'?",
        grammarNotes: ["Gegenteil = suprotnost, antonim"]
      },
      {
        content: "Nicht ganz! Die richtige Antwort war 'der Apfel'. Versuch es noch einmal!",
        translation: "Nije sasvim tačno! Tačan odgovor je bio 'jabuka'. Pokušaj ponovo!"
      }
    ],
    vocabulary: [
      {
        content: "Hier sind einige wichtige Wörter zum Thema 'Essen':\n\n🍞 das Brot - hleb\n🧀 der Käse - sir\n🍎 der Apfel - jabuka\n🥛 die Milch - mleko\n\nMöchtest du mehr Wörter?",
        translation: "Evo nekoliko važnih reči na temu 'Hrana'",
        vocabulary: [
          { word: "das Brot", meaning: "hleb", example: "Ich kaufe frisches Brot." },
          { word: "der Käse", meaning: "sir", example: "Magst du Käse auf dem Brot?" },
          { word: "der Apfel", meaning: "jabuka", example: "Ein Apfel am Tag hält den Arzt fern." },
          { word: "die Milch", meaning: "mleko", example: "Die Milch ist im Kühlschrank." }
        ]
      }
    ]
  }
  
  const modeResponses = responses[mode]
  const randomResponse = modeResponses[Math.floor(Math.random() * modeResponses.length)]
  
  return {
    id: Date.now().toString(),
    role: "assistant",
    content: randomResponse.content,
    timestamp: new Date(),
    translation: randomResponse.translation,
    grammarNotes: "grammarNotes" in randomResponse ? randomResponse.grammarNotes : undefined,
    vocabulary: "vocabulary" in randomResponse ? randomResponse.vocabulary : undefined
  }
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([getInitialMessage("conversation")])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatMode, setChatMode] = useState<ChatMode>("conversation")
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null)
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("A2")
  const [showTranslations, setShowTranslations] = useState(true)
  const [showSidebar, setShowSidebar] = useState(true)
  const [showScenarioModal, setShowScenarioModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Compute stats from messages
  const messageStats = {
    total: messages.filter(m => m.role === "user").length,
    words: messages.filter(m => m.role === "user").reduce((acc, m) => acc + m.content.split(" ").length, 0),
    streak: 5
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue, chatMode)
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleModeChange = (mode: ChatMode, scenario?: Scenario) => {
    setChatMode(mode)
    setSelectedScenario(scenario || null)
    setMessages([getInitialMessage(mode, scenario)])
    setShowScenarioModal(false)
  }

  const handleCopyMessage = (id: string, content: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleBookmarkMessage = (id: string) => {
    setMessages(prev => prev.map(m => 
      m.id === id ? { ...m, isBookmarked: !m.isBookmarked } : m
    ))
  }

  const handleFeedback = (id: string, feedback: "positive" | "negative") => {
    setMessages(prev => prev.map(m => 
      m.id === id ? { ...m, feedback } : m
    ))
  }

  const handleClearChat = () => {
    setMessages([getInitialMessage(chatMode, selectedScenario || undefined)])
  }

  const handleQuickSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate voice input after 3 seconds
      setTimeout(() => {
        setInputValue("Ich möchte Deutsch lernen")
        setIsRecording(false)
      }, 3000)
    }
  }

  return (
    <>
      <Header
        title="AI Konverzacija"
        subtitle="Vežbaj nemački u realnim situacijama"
      />

      <main className="relative h-[calc(100vh-4rem)] p-4 lg:p-6 overflow-hidden flex flex-col">
        <DashboardBackground />

        <div className="relative z-10 mx-auto w-full max-w-7xl flex-1 flex gap-4 min-h-0">
          {/* Sidebar - Chat Modes */}
          <AnimatePresence>
            {showSidebar && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="hidden lg:flex w-72 flex-col gap-4"
              >
                {/* Mode Selection */}
                <GlassCard className="p-4 border-white/10 bg-black/20 backdrop-blur-xl">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-german-gold" />
                    Režim razgovora
                  </h3>
                  <div className="space-y-2">
                    {[
                      { mode: "conversation" as ChatMode, icon: <MessageSquare className="h-4 w-4" />, label: "Slobodan razgovor", desc: "Pričaj o bilo čemu" },
                      { mode: "roleplay" as ChatMode, icon: <Globe className="h-4 w-4" />, label: "Igranje uloga", desc: "Realne situacije" },
                      { mode: "quiz" as ChatMode, icon: <Zap className="h-4 w-4" />, label: "Kviz pitanja", desc: "Testiraj znanje" },
                      { mode: "vocabulary" as ChatMode, icon: <BookOpen className="h-4 w-4" />, label: "Učenje vokabulara", desc: "Nove reči" }
                    ].map((item) => (
                      <button
                        key={item.mode}
                        onClick={() => item.mode === "roleplay" ? setShowScenarioModal(true) : handleModeChange(item.mode)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                          chatMode === item.mode
                            ? "bg-german-gold/20 border border-german-gold/30 text-german-gold"
                            : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {item.icon}
                        <div className="text-left">
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs opacity-70">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </GlassCard>

                {/* Active Scenario */}
                {selectedScenario && (
                  <GlassCard className="p-4 border-white/10 bg-black/20 backdrop-blur-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white text-sm">Aktivni scenario</h3>
                      <button 
                        onClick={() => handleModeChange("conversation")}
                        className="text-white/50 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-linear-to-br from-german-gold/20 to-orange-500/10 border border-german-gold/20">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-german-gold/20 text-german-gold">
                        {selectedScenario.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{selectedScenario.title}</p>
                        <p className="text-xs text-german-gold">{selectedScenario.titleDe}</p>
                      </div>
                    </div>
                  </GlassCard>
                )}

                {/* Quick Stats */}
                <GlassCard className="p-4 border-white/10 bg-black/20 backdrop-blur-xl">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-german-gold" />
                    Današnja statistika
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 rounded-lg bg-white/5">
                      <p className="text-lg font-bold text-german-gold">{messageStats.total}</p>
                      <p className="text-xs text-white/60">Poruke</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-white/5">
                      <p className="text-lg font-bold text-blue-400">{messageStats.words}</p>
                      <p className="text-xs text-white/60">Reči</p>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-white/5">
                      <p className="text-lg font-bold text-green-400">{messageStats.streak}</p>
                      <p className="text-xs text-white/60">Streak</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Settings */}
                <GlassCard className="p-4 border-white/10 bg-black/20 backdrop-blur-xl flex-1">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Settings2 className="h-4 w-4 text-german-gold" />
                    Podešavanja
                  </h3>
                  
                  {/* Difficulty */}
                  <div className="mb-4">
                    <label className="text-sm text-white/70 mb-2 block">Nivo težine</label>
                    <div className="flex flex-wrap gap-2">
                      {(["A1", "A2", "B1", "B2", "C1", "C2"] as DifficultyLevel[]).map((level) => (
                        <button
                          key={level}
                          onClick={() => setDifficulty(level)}
                          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                            difficulty === level
                              ? "bg-german-gold text-black"
                              : "bg-white/10 text-white/70 hover:bg-white/20"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/70">Prikaži prevod</span>
                      <button
                        onClick={() => setShowTranslations(!showTranslations)}
                        className={`w-10 h-5 rounded-full transition-colors ${
                          showTranslations ? "bg-german-gold" : "bg-white/20"
                        }`}
                      >
                        <motion.div
                          className="w-4 h-4 bg-white rounded-full shadow-md"
                          animate={{ x: showTranslations ? 22 : 2 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Chat Container */}
          <GlassCard className="flex-1 flex flex-col overflow-hidden border-white/10 bg-black/20 backdrop-blur-xl">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-4 bg-white/5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="lg:hidden p-2 rounded-lg bg-white/10 text-white"
                >
                  <MessageSquare className="h-5 w-5" />
                </button>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Hans (AI Tutor)</h3>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs text-green-400">Online</span>
                    <span className="text-xs text-white/50">•</span>
                    <span className="text-xs text-white/50 capitalize">{chatMode}</span>
                    {selectedScenario && (
                      <>
                        <span className="text-xs text-white/50">•</span>
                        <span className="text-xs text-german-gold">{selectedScenario.title}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleClearChat}
                  className="text-muted-foreground hover:text-white hover:bg-white/10"
                  title="Novi razgovor"
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-muted-foreground hover:text-white hover:bg-white/10"
                  title="Preuzmi razgovor"
                >
                  <Download className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowSettingsModal(true)}
                  className="text-muted-foreground hover:text-white hover:bg-white/10"
                >
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[85%] gap-3 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {/* Avatar */}
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-lg ${
                      message.role === "user" 
                        ? "bg-linear-to-br from-german-gold to-orange-500" 
                        : "bg-linear-to-br from-blue-500 to-cyan-500"
                    }`}>
                      {message.role === "user" ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                    </div>

                    {/* Message Content */}
                    <div className="space-y-2">
                      {/* Message Bubble */}
                      <div className={`group relative rounded-2xl p-4 shadow-lg backdrop-blur-md ${
                        message.role === "user"
                          ? "bg-german-gold/20 text-white border border-german-gold/20 rounded-tr-none"
                          : "bg-white/10 text-white border border-white/10 rounded-tl-none"
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        
                        {/* Bookmark indicator */}
                        {message.isBookmarked && (
                          <div className="absolute -top-1 -right-1">
                            <Bookmark className="h-4 w-4 text-german-gold fill-german-gold" />
                          </div>
                        )}

                        {/* Translation */}
                        {showTranslations && message.translation && message.role === "assistant" && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <p className="text-xs text-white/60 flex items-center gap-1">
                              <Languages className="h-3 w-3" />
                              {message.translation}
                            </p>
                          </div>
                        )}
                        
                        {/* Message Actions */}
                        <div className={`absolute -bottom-8 ${message.role === "user" ? "right-0" : "left-0"} opacity-0 transition-opacity group-hover:opacity-100 flex gap-1`}>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 text-muted-foreground hover:text-white hover:bg-white/10"
                            title="Pusti audio"
                          >
                            <Volume2 className="h-3 w-3" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleCopyMessage(message.id, message.content)}
                            className="h-6 w-6 text-muted-foreground hover:text-white hover:bg-white/10"
                            title="Kopiraj"
                          >
                            {copiedId === message.id ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleBookmarkMessage(message.id)}
                            className={`h-6 w-6 hover:bg-white/10 ${message.isBookmarked ? "text-german-gold" : "text-muted-foreground hover:text-white"}`}
                            title="Sačuvaj"
                          >
                            <Bookmark className={`h-3 w-3 ${message.isBookmarked ? "fill-current" : ""}`} />
                          </Button>
                          {message.role === "assistant" && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleFeedback(message.id, "positive")}
                                className={`h-6 w-6 hover:bg-white/10 ${message.feedback === "positive" ? "text-green-400" : "text-muted-foreground hover:text-white"}`}
                                title="Koristan odgovor"
                              >
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleFeedback(message.id, "negative")}
                                className={`h-6 w-6 hover:bg-white/10 ${message.feedback === "negative" ? "text-red-400" : "text-muted-foreground hover:text-white"}`}
                                title="Nije koristan"
                              >
                                <ThumbsDown className="h-3 w-3" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Grammar Notes */}
                      {message.grammarNotes && message.grammarNotes.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-purple-400" />
                            <span className="text-xs font-medium text-purple-300">Gramatičke napomene</span>
                          </div>
                          <ul className="space-y-1">
                            {message.grammarNotes.map((note, idx) => (
                              <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                {note}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Vocabulary */}
                      {message.vocabulary && message.vocabulary.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="h-4 w-4 text-green-400" />
                            <span className="text-xs font-medium text-green-300">Novi vokabular</span>
                          </div>
                          <div className="space-y-2">
                            {message.vocabulary.map((vocab, idx) => (
                              <div key={idx} className="text-xs">
                                <span className="font-medium text-german-gold">{vocab.word}</span>
                                <span className="text-white/50"> - </span>
                                <span className="text-white/70">{vocab.meaning}</span>
                                {vocab.example && (
                                  <p className="text-white/50 mt-1 italic">&quot;{vocab.example}&quot;</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="rounded-2xl rounded-tl-none border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-white/50" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-white/50" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-white/50" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-4 py-2 border-t border-white/5 overflow-x-auto">
              <div className="flex gap-2">
                {quickSuggestions[chatMode].map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickSuggestion(suggestion)}
                    className="shrink-0 px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="relative flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleRecording}
                  className={`shrink-0 transition-all ${
                    isRecording 
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 animate-pulse" 
                      : "text-muted-foreground hover:bg-white/10 hover:text-white"
                  }`}
                  title={isRecording ? "Zaustavi snimanje" : "Snimaj glas"}
                >
                  {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
                
                <div className="relative flex-1">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isRecording ? "Slušam..." : "Napiši poruku na nemačkom ili srpskom..."}
                    disabled={isRecording}
                    className="flex-1 border-white/10 bg-black/20 text-white placeholder:text-muted-foreground focus-visible:ring-german-gold/50 pr-10"
                  />
                  {inputValue && (
                    <button
                      onClick={() => setInputValue("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="shrink-0 bg-german-gold text-black hover:bg-german-gold/90 disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Nivo: {difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI odgovara na oba jezika
                  </span>
                </div>
                <span>
                  Enter za slanje • Shift+Enter za novi red
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>

      {/* Scenario Selection Modal */}
      <AnimatePresence>
        {showScenarioModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowScenarioModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <GlassCard className="p-6 border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">Izaberi scenario</h2>
                    <p className="text-sm text-white/60">Vežbaj nemački u realnim situacijama</p>
                  </div>
                  <button
                    onClick={() => setShowScenarioModal(false)}
                    className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => handleModeChange("roleplay", scenario)}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-german-gold/30 transition-all text-left group"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-german-gold/20 to-orange-500/10 text-german-gold mb-3 group-hover:scale-110 transition-transform">
                        {scenario.icon}
                      </div>
                      <h3 className="font-medium text-white">{scenario.title}</h3>
                      <p className="text-xs text-german-gold mb-1">{scenario.titleDe}</p>
                      <p className="text-xs text-white/50">{scenario.description}</p>
                    </button>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettingsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowSettingsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <GlassCard className="p-6 border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Opcije razgovora</h2>
                  <button
                    onClick={() => setShowSettingsModal(false)}
                    className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all">
                    <Share2 className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Podeli razgovor</p>
                      <p className="text-xs text-white/50">Generiši link za deljenje</p>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all">
                    <Download className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Preuzmi kao PDF</p>
                      <p className="text-xs text-white/50">Sačuvaj razgovor za kasnije</p>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all">
                    <FileText className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Izvezi vokabular</p>
                      <p className="text-xs text-white/50">Sačuvane reči iz razgovora</p>
                    </div>
                  </button>
                  
                  <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-all">
                    <ImageIcon className="h-5 w-5 text-orange-400" />
                    <div>
                      <p className="text-sm font-medium text-white">Snimi kao sliku</p>
                      <p className="text-xs text-white/50">Screenshot razgovora</p>
                    </div>
                  </button>
                  
                  <hr className="border-white/10" />
                  
                  <button 
                    onClick={() => { handleClearChat(); setShowSettingsModal(false); }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-left transition-all"
                  >
                    <Trash2 className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-sm font-medium text-red-400">Obriši razgovor</p>
                      <p className="text-xs text-red-400/60">Započni novi razgovor</p>
                    </div>
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

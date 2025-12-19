"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  X,
  RefreshCw,
  Heart,
  Share2
} from "lucide-react"

const motivationalContent = [
  {
    quote: "Der Anfang ist die Hälfte des Ganzen.",
    translation: "Početak je polovina svega.",
    author: "Aristotel",
    tip: "Započeti je najvažnije - nemoj odlagati!"
  },
  {
    quote: "Übung macht den Meister.",
    translation: "Vežbom se postaje majstor.",
    author: "Nemačka poslovica",
    tip: "Svakodnevno učenje je ključ uspeha. Samo 15 minuta dnevno!"
  },
  {
    quote: "Wer eine Sprache lernt, gewinnt eine Seele dazu.",
    translation: "Ko nauči jezik, dobija dodatnu dušu.",
    author: "Češka poslovica",
    tip: "Učenje jezika otvara vrata novim kulturama i prilikama."
  },
  {
    quote: "Aus Fehlern wird man klug.",
    translation: "Iz grešaka se postaje pametan.",
    author: "Nemačka poslovica",
    tip: "Greške su deo procesa učenja. Ne plaši se da praviš greške!"
  },
  {
    quote: "Rom wurde nicht an einem Tag erbaut.",
    translation: "Rim nije sagrađen za jedan dan.",
    author: "Poslovica",
    tip: "Strpljenje je vrlina. Svaki mali korak vodi ka cilju."
  },
  {
    quote: "Wer aufhört besser zu werden, hat aufgehört gut zu sein.",
    translation: "Ko prestane da se usavršava, prestao je da bude dobar.",
    author: "Philip Rosenthal",
    tip: "Konstantno napredovanje je važnije od savršenstva."
  }
]

const dailyTips = [
  "💡 Koristi flashcard-ove pre spavanja za bolje pamćenje",
  "🎯 Fokusiraj se na jednu gramatičku strukturu nedeljno",
  "🗣️ Razgovaraj sam sa sobom na nemačkom 5 minuta dnevno",
  "📱 Promeni jezik telefona na nemački",
  "🎵 Slušaj nemačku muziku sa titlovima",
  "📺 Gledaj nemačke serije sa nemačkim titlovima",
  "✍️ Vodi dnevnik na nemačkom",
  "🎮 Igraj video igre na nemačkom jeziku",
  "👥 Nađi language exchange partnera online",
  "📚 Čitaj nemačke knjige za decu - lako i zabavno!"
]

export function MotivationalWidget() {
  const [currentContent, setCurrentContent] = useState(motivationalContent[0])
  const [currentTip, setCurrentTip] = useState(dailyTips[0])
  const [isLiked, setIsLiked] = useState(false)
  const [showTip, setShowTip] = useState(true)

  useEffect(() => {
    // Randomize content on mount
    const randomQuote = motivationalContent[Math.floor(Math.random() * motivationalContent.length)]
    const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)]
    setCurrentContent(randomQuote)
    setCurrentTip(randomTip)
  }, [])

  const refreshQuote = () => {
    const randomQuote = motivationalContent[Math.floor(Math.random() * motivationalContent.length)]
    setCurrentContent(randomQuote)
    setIsLiked(false)
  }

  const refreshTip = () => {
    const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)]
    setCurrentTip(randomTip)
  }

  const shareQuote = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Motivacija za učenje nemačkog',
        text: `"${currentContent.quote}" - ${currentContent.translation}`,
      })
    }
  }

  return (
    <div className="space-y-4">
      {/* Motivational Quote */}
      <GlassCard className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-32 w-32 rounded-full bg-german-gold/10 blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-german-gold" />
              <h3 className="text-sm font-semibold text-white">
                Motivacija dana
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className="h-8 w-8"
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={shareQuote}
                className="h-8 w-8"
              >
                <Share2 className="h-4 w-4 text-muted-foreground" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={refreshQuote}
                className="h-8 w-8"
              >
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <p className="text-lg font-medium text-white italic">
                  "{currentContent.quote}"
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentContent.translation}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <p className="text-xs text-muted-foreground">
                  — {currentContent.author}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-german-gold/10 border border-german-gold/20">
                <p className="text-sm text-german-gold">
                  💡 {currentContent.tip}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </GlassCard>

      {/* Daily Tip */}
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <GlassCard className="p-4 bg-blue-500/5 border-blue-500/20">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white mb-2">
                    Savet dana
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentTip}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={refreshTip}
                    className="h-7 w-7"
                  >
                    <RefreshCw className="h-3 w-3 text-muted-foreground" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowTip(false)}
                    className="h-7 w-7"
                  >
                    <X className="h-3 w-3 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

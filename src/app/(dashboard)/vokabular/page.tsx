"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { 
  Search, 
  Volume2, 
  Brain, 
  TrendingUp, 
  RotateCw,
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LevelBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { vocabulary, type VocabularyWord } from "@/data/vocabulary"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
}

function FlipCard({ word }: { word: VocabularyWord }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div 
      variants={item}
      className="group h-64 perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative h-full w-full transition-all duration-500 preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full w-full rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center text-center shadow-xl transition-all hover:bg-white/10 hover:shadow-german-gold/10">
            <div className="absolute top-4 right-4">
              <LevelBadge level={word.level} />
            </div>
            
            <div className="mb-2 text-sm font-medium text-muted-foreground">
              {word.category}
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-2">
              {word.article && <span className="text-german-gold text-xl mr-2 font-normal">{word.article}</span>}
              {word.german}
            </h3>
            
            {word.plural && (
              <p className="text-sm text-muted-foreground">
                pl. {word.plural}
              </p>
            )}

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <RotateCw className="h-3 w-3" />
              Klikni za prevod
            </div>

            {/* Mastery Indicator */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5 rounded-b-2xl overflow-hidden">
              <div 
                className={cn(
                  "h-full transition-all duration-500",
                  word.mastery > 80 ? "bg-green-500" : word.mastery > 50 ? "bg-german-gold" : "bg-german-red"
                )}
                style={{ width: `${word.mastery}%` }}
              />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full w-full rounded-2xl border border-white/10 bg-[#0f172a] p-6 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-german-gold/5 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-german-gold mb-4">
              {word.serbian}
            </h3>
            
            <div className="space-y-2 text-sm">
              <p className="text-white italic">&quot;{word.example}&quot;</p>
              <p className="text-muted-foreground">{word.exampleTranslation}</p>
            </div>

            <div className="mt-6 flex gap-2">
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-green-500/20 hover:text-green-400" onClick={(e) => e.stopPropagation()}>
                <Check className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10" onClick={(e) => {
                e.stopPropagation()
                // Play audio logic here
              }}>
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function VocabularyPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const filteredWords = vocabulary.filter(word => {
    const matchesSearch = word.german.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          word.serbian.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = selectedLevel ? word.level === selectedLevel : true
    return matchesSearch && matchesLevel
  })

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-background p-8 border border-white/10">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">Vokabular</h1>
            <p className="mt-2 text-muted-foreground">
              Tvoja lična kolekcija reči i izraza.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="glass-effect flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Naučeno reči</p>
                <p className="font-bold text-white">{vocabulary.length}</p>
              </div>
            </div>
            <div className="glass-effect flex items-center gap-3 rounded-2xl px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Mastery</p>
                <p className="font-bold text-white">
                  {Math.round(vocabulary.reduce((acc, curr) => acc + curr.mastery, 0) / vocabulary.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Pretraži reči..." 
            className="pl-10 bg-white/5 border-white/10 focus:bg-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={undefined}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((level) => (
            <Button
              key={level}
              variant={selectedLevel === level ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
              className={cn(
                "rounded-full",
                selectedLevel === level ? "bg-blue-600 text-white hover:bg-blue-700" : "border-white/10 hover:bg-white/5"
              )}
            >
              {level}
            </Button>
          ))}
        </div>
      </div>

      {/* Vocabulary Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredWords.map((word) => (
          <FlipCard key={word.id} word={word} />
        ))}
      </motion.div>
    </div>
  )
}

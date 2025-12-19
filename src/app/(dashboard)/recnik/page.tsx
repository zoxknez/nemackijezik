"use client"

import { useState, useMemo } from "react"
import { motion } from "motion/react"
import { 
  Search, 
  Volume2, 
  BookOpen,
  Clock,
  TrendingUp,
  Download,
  Upload,
  Plus,
  Tag,
  Link,
  FileText,
  BarChart3,
  Filter,
  BookMarked,
  Dumbbell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/card"
import { LevelBadge } from "@/components/ui/badge"
import { vocabulary, type VocabularyWord, type Level } from "@/data/vocabulary"
import { cn } from "@/lib/utils"
import { VocabularyExercises } from "@/components/vocabulary/VocabularyExercises"
import { VocabularyStats } from "@/components/vocabulary/VocabularyStats"

// Simulated learned words data (in production, this would come from database)
const learnedWordsData: Record<string, { 
  learned: boolean; 
  masteryLevel: number; 
  lastReviewed: Date;
  timesReviewed: number;
}> = {}

// Initialize some sample data
vocabulary.slice(0, 30).forEach((word, i) => {
  learnedWordsData[word.id] = {
    learned: true,
    masteryLevel: Math.min(100, 20 + i * 3),
    lastReviewed: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    timesReviewed: Math.floor(Math.random() * 10) + 1
  }
})

type SortOption = "alphabetical" | "mastery" | "recent" | "level" | "partOfSpeech"
type FilterOption = "all" | "learning" | "mastered" | "weak"
type PartOfSpeechFilter = "all" | "noun" | "verb" | "adjective" | "adverb" | "preposition" | "conjunction"

export default function RecnikPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<Level | "all">("all")
  const [sortBy, setSortBy] = useState<SortOption>("alphabetical")
  const [filterBy, setFilterBy] = useState<FilterOption>("all")
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null)
  const [partOfSpeechFilter, setPartOfSpeechFilter] = useState<PartOfSpeechFilter>("all")
  const [customLists, setCustomLists] = useState<Record<string, string[]>>({
    "Omiljene": [],
    "Za ispit": [],
    "Teške reči": []
  })
  const [selectedList, setSelectedList] = useState<string | null>(null)
  const [showCreateList, setShowCreateList] = useState(false)
  const [newListName, setNewListName] = useState("")
  const [showExerciseMode, setShowExerciseMode] = useState(false)
  const [showStats, setShowStats] = useState(false)

  // Get learned words with their data
  const learnedWords = useMemo(() => {
    return vocabulary.filter(word => learnedWordsData[word.id]?.learned)
      .map(word => ({
        ...word,
        ...learnedWordsData[word.id]
      }))
  }, [])

  // Filter and sort words
  const filteredWords = useMemo(() => {
    let result = learnedWords

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(word => 
        word.german.toLowerCase().includes(query) ||
        word.serbian.toLowerCase().includes(query)
      )
    }

    // Level filter
    if (selectedLevel !== "all") {
      result = result.filter(word => word.level === selectedLevel)
    }

    // Part of speech filter
    if (partOfSpeechFilter !== "all") {
      result = result.filter(word => 
        word.partOfSpeech?.toLowerCase() === partOfSpeechFilter
      )
    }

    // Custom list filter
    if (selectedList && customLists[selectedList]) {
      result = result.filter(word => customLists[selectedList].includes(word.id))
    }

    // Status filter
    if (filterBy === "mastered") {
      result = result.filter(word => word.masteryLevel >= 80)
    } else if (filterBy === "learning") {
      result = result.filter(word => word.masteryLevel >= 30 && word.masteryLevel < 80)
    } else if (filterBy === "weak") {
      result = result.filter(word => word.masteryLevel < 30)
    }

    // Sort
    switch (sortBy) {
      case "alphabetical":
        result.sort((a, b) => a.german.localeCompare(b.german))
        break
      case "mastery":
        result.sort((a, b) => b.masteryLevel - a.masteryLevel)
        break
      case "recent":
        result.sort((a, b) => b.lastReviewed.getTime() - a.lastReviewed.getTime())
        break
      case "level":
        const levelOrder = ["A1", "A2", "B1", "B2", "C1", "C2"]
        result.sort((a, b) => levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level))
        break
      case "partOfSpeech":
        result.sort((a, b) => (a.partOfSpeech || "").localeCompare(b.partOfSpeech || ""))
        break
    }

    return result
  }, [learnedWords, searchQuery, selectedLevel, sortBy, filterBy])

  // Stats
  const stats = useMemo(() => {
    const total = learnedWords.length
    const mastered = learnedWords.filter(w => w.masteryLevel >= 80).length
    const learning = learnedWords.filter(w => w.masteryLevel >= 30 && w.masteryLevel < 80).length
    const weak = learnedWords.filter(w => w.masteryLevel < 30).length
    const avgMastery = total > 0 ? Math.round(learnedWords.reduce((sum, w) => sum + w.masteryLevel, 0) / total) : 0
    
    return { total, mastered, learning, weak, avgMastery }
  }, [learnedWords])

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'de-DE'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    }
  }

  const getMasteryColor = (level: number) => {
    if (level >= 80) return "text-green-400"
    if (level >= 50) return "text-yellow-400"
    if (level >= 30) return "text-orange-400"
    return "text-red-400"
  }

  const getMasteryBg = (level: number) => {
    if (level >= 80) return "bg-green-500"
    if (level >= 50) return "bg-yellow-500"
    if (level >= 30) return "bg-orange-500"
    return "bg-red-500"
  }

  const createCustomList = () => {
    if (newListName.trim() && !customLists[newListName]) {
      setCustomLists({ ...customLists, [newListName]: [] })
      setNewListName("")
      setShowCreateList(false)
    }
  }

  const toggleWordInList = (listName: string, wordId: string) => {
    const list = customLists[listName] || []
    const newList = list.includes(wordId)
      ? list.filter(id => id !== wordId)
      : [...list, wordId]
    setCustomLists({ ...customLists, [listName]: newList })
  }

  const exportVocabulary = () => {
    const data = JSON.stringify({
      words: filteredWords.map(w => ({
        german: w.german,
        serbian: w.serbian,
        article: w.article,
        level: w.level,
        partOfSpeech: w.partOfSpeech,
        example: w.example,
        masteryLevel: w.masteryLevel
      })),
      customLists,
      exportDate: new Date().toISOString()
    }, null, 2)
    
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `recnik-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const getPartOfSpeechLabel = (pos: string) => {
    const labels: Record<string, string> = {
      noun: "Imenica",
      verb: "Glagol",
      adjective: "Pridev",
      adverb: "Prilog",
      preposition: "Predlog",
      conjunction: "Veznik"
    }
    return labels[pos] || pos
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-german-gold" />
            Moj Rečnik
          </h1>
          <p className="text-muted-foreground mt-1">
            Sve reči koje si naučio/la na jednom mestu
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowStats(!showStats)}
            className="border-german-gold/30 hover:bg-german-gold/10"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Statistika
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowExerciseMode(true)}
            className="border-german-gold/30 hover:bg-german-gold/10"
          >
            <Dumbbell className="h-4 w-4 mr-2" />
            Vežbaj
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={exportVocabulary}
            className="border-german-gold/30 hover:bg-german-gold/10"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      {showStats ? (
        <VocabularyStats words={learnedWords} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <GlassCard className="p-4 text-center">
          <div className="text-3xl font-bold text-white">{stats.total}</div>
          <div className="text-sm text-muted-foreground">Ukupno reči</div>
        </GlassCard>
        <GlassCard className="p-4 text-center border-green-500/20">
          <div className="text-3xl font-bold text-green-400">{stats.mastered}</div>
          <div className="text-sm text-muted-foreground">Savladano</div>
        </GlassCard>
        <GlassCard className="p-4 text-center border-yellow-500/20">
          <div className="text-3xl font-bold text-yellow-400">{stats.learning}</div>
          <div className="text-sm text-muted-foreground">Učim</div>
        </GlassCard>
        <GlassCard className="p-4 text-center border-red-500/20">
          <div className="text-3xl font-bold text-red-400">{stats.weak}</div>
          <div className="text-sm text-muted-foreground">Za ponavljanje</div>
        </GlassCard>
        <GlassCard className="p-4 text-center border-german-gold/20">
          <div className="text-3xl font-bold text-german-gold">{stats.avgMastery}%</div>
          <div className="text-sm text-muted-foreground">Prosek</div>
        </GlassCard>
      </div>
      )}

      {/* Custom Lists */}
      <GlassCard className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2">
            <BookMarked className="h-4 w-4 text-german-gold" />
            Moje Liste
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCreateList(!showCreateList)}
            className="h-7 text-xs"
          >
            <Plus className="h-3 w-3 mr-1" />
            Nova lista
          </Button>
        </div>
        {showCreateList && (
          <div className="flex gap-2 mb-3">
            <Input
              placeholder="Naziv liste..."
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && createCustomList()}
              className="bg-white/5 border-white/10 h-8 text-sm"
            />
            <Button size="sm" onClick={createCustomList} className="h-8">
              Dodaj
            </Button>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedList(null)}
            className={cn(
              "h-8 text-xs",
              !selectedList && "bg-german-gold text-black"
            )}
          >
            Sve reči
          </Button>
          {Object.entries(customLists).map(([listName, words]) => (
            <Button
              key={listName}
              variant="ghost"
              size="sm"
              onClick={() => setSelectedList(selectedList === listName ? null : listName)}
              className={cn(
                "h-8 text-xs",
                selectedList === listName && "bg-german-gold text-black"
              )}
            >
              {listName} ({words.length})
            </Button>
          ))}
        </div>
      </GlassCard>

      {/* Filters */}
      <GlassCard className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pretraži reči..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>

          {/* Level Filter */}
          <div className="flex gap-2">
            {(["all", "A1", "A2", "B1", "B2"] as const).map((level) => (
              <Button
                key={level}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedLevel(level)}
                className={cn(
                  "px-3",
                  selectedLevel === level 
                    ? "bg-german-gold text-black" 
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {level === "all" ? "Svi" : level}
              </Button>
            ))}
          </div>

          {/* Status Filter */}
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as FilterOption)}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm"
          >
            <option value="all">Svi statusi</option>
            <option value="mastered">Savladano (80%+)</option>
            <option value="learning">Učim (30-80%)</option>
            <option value="weak">Slabo (&lt;30%)</option>
          </select>

          {/* Part of Speech Filter */}
          <select
            value={partOfSpeechFilter}
            onChange={(e) => setPartOfSpeechFilter(e.target.value as PartOfSpeechFilter)}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm"
          >
            <option value="all">Sve vrste</option>
            <option value="noun">Imenice</option>
            <option value="verb">Glagoli</option>
            <option value="adjective">Pridevi</option>
            <option value="adverb">Prilozi</option>
            <option value="preposition">Predlozi</option>
            <option value="conjunction">Veznici</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm"
          >
            <option value="alphabetical">A-Z</option>
            <option value="mastery">Po savladanosti</option>
            <option value="recent">Nedavno vežbano</option>
            <option value="level">Po nivou</option>
            <option value="partOfSpeech">Po vrsti reči</option>
          </select>
        </div>
      </GlassCard>

      {/* Words List */}
      <div className="grid gap-3">
        {filteredWords.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <p className="text-muted-foreground">Nema pronađenih reči.</p>
          </GlassCard>
        ) : (
          filteredWords.map((word, index) => (
            <motion.div
              key={word.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              <GlassCard 
                className={cn(
                  "p-4 cursor-pointer hover:bg-white/5 transition-all",
                  selectedWord?.id === word.id && "ring-2 ring-german-gold"
                )}
                onClick={() => setSelectedWord(selectedWord?.id === word.id ? null : word)}
              >
                <div className="flex items-center gap-4">
                  {/* Article color indicator */}
                  <div className={cn(
                    "w-2 h-12 rounded-full",
                    word.article === "der" ? "bg-blue-500" :
                    word.article === "die" ? "bg-red-500" :
                    word.article === "das" ? "bg-green-500" : "bg-gray-500"
                  )} />

                  {/* Main content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {word.article && (
                        <span className="text-sm text-muted-foreground">{word.article}</span>
                      )}
                      <span className="font-semibold text-white text-lg">{word.german}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={(e) => {
                          e.stopPropagation()
                          playAudio(word.article ? `${word.article} ${word.german}` : word.german)
                        }}
                      >
                        <Volume2 className="h-4 w-4 text-german-gold" />
                      </Button>
                      {word.partOfSpeech && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                          {getPartOfSpeechLabel(word.partOfSpeech)}
                        </span>
                      )}
                    </div>
                    <div className="text-muted-foreground">{word.serbian}</div>
                  </div>

                  {/* Level badge */}
                  <LevelBadge level={word.level} size="sm" />

                  {/* Mastery indicator */}
                  <div className="text-right">
                    <div className={cn("text-lg font-bold", getMasteryColor(word.masteryLevel))}>
                      {word.masteryLevel}%
                    </div>
                    <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full transition-all", getMasteryBg(word.masteryLevel))}
                        style={{ width: `${word.masteryLevel}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                {selectedWord?.id === word.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Primer</h4>
                        <p className="text-white italic">&ldquo;{word.example}&rdquo;</p>
                        <p className="text-muted-foreground text-sm mt-1">{word.exampleTranslation}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                          onClick={(e) => {
                            e.stopPropagation()
                            playAudio(word.example)
                          }}
                        >
                          <Volume2 className="h-4 w-4 mr-2" />
                          Slušaj primer
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Poslednje ponavljanje:</span>
                          <span className="text-white">
                            {word.lastReviewed.toLocaleDateString('sr-Latn')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Broj ponavljanja:</span>
                          <span className="text-white">{word.timesReviewed}x</span>
                        </div>
                        {word.plural && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Množina:</span>
                            <span className="text-white">{word.plural}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Related Words, Synonyms, Antonyms */}
                    {(word.synonyms || word.antonyms || word.relatedWords) && (
                      <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                        {word.synonyms && word.synonyms.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                              <Link className="h-4 w-4 text-green-400" />
                              Sinonimi
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {word.synonyms.map((syn, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-md bg-green-500/10 text-green-300 text-xs border border-green-500/20">
                                  {syn}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {word.antonyms && word.antonyms.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                              <Link className="h-4 w-4 text-red-400" />
                              Antonimi
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {word.antonyms.map((ant, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-md bg-red-500/10 text-red-300 text-xs border border-red-500/20">
                                  {ant}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {word.relatedWords && word.relatedWords.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                              <Link className="h-4 w-4 text-blue-400" />
                              Povezane reči
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {word.relatedWords.map((rel, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20">
                                  {rel}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Notes */}
                    {word.notes && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                          <FileText className="h-4 w-4 text-yellow-400 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-medium text-yellow-300 mb-1">Napomena</h4>
                            <p className="text-sm text-yellow-200/80">{word.notes}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                        <Tag className="h-4 w-4 text-german-gold" />
                        Dodaj u listu
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(customLists).map(([listName, words]) => {
                          const isInList = words.includes(word.id)
                          return (
                            <Button
                              key={listName}
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleWordInList(listName, word.id)
                              }}
                              className={cn(
                                "h-7 text-xs",
                                isInList ? "bg-german-gold text-black" : "border border-white/20"
                              )}
                            >
                              {isInList && <Check className="h-3 w-3 mr-1" />}
                              {listName}
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          ))
        )}
      </div>

      {/* Summary */}
      <div className="text-center text-muted-foreground text-sm">
        Prikazano {filteredWords.length} od {learnedWords.length} naučenih reči
      </div>

      {/* Exercise Mode Modal */}
      {showExerciseMode && (
        <VocabularyExercises
          words={filteredWords}
          onClose={() => setShowExerciseMode(false)}
        />
      )}
    </div>
  )
}

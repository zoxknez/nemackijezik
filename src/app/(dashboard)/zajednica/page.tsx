"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Header } from "@/components/layout/header"
import { GlassCard } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DashboardBackground } from "@/components/background"
import { LevelBadge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Users,
  MessageSquare,
  Calendar,
  Trophy,
  Star,
  TrendingUp,
  Flame,
  Search,
  Filter,
  Send,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  MapPin,
  UserPlus,
  Video,
  Mic,
  BookOpen,
  Award,
  Target,
  Zap,
  ChevronRight,
  Globe,
  Bell
} from "lucide-react"

// Mock data za forum
const forumPosts = [
  {
    id: 1,
    author: "Marko S.",
    avatar: "👨‍💼",
    level: "B1",
    title: "Kako se sećati svih artikala?",
    content: "Imam problema sa pamćenjem da li je der, die ili das. Neki saveti?",
    category: "Gramatika",
    likes: 24,
    replies: 15,
    timeAgo: "Pre 2 sata",
    isHot: true
  },
  {
    id: 2,
    author: "Ana P.",
    avatar: "👩‍🎓",
    level: "A2",
    title: "Preporuka za nemačke serije?",
    content: "Tražim dobre serije za vežbanje slušanja, najbolje sa titlovima.",
    category: "Resursi",
    likes: 18,
    replies: 22,
    timeAgo: "Pre 5 sati",
    isHot: true
  },
  {
    id: 3,
    author: "Petar D.",
    avatar: "🧑‍💻",
    level: "B2",
    title: "Goethe-Institut ispit - iskustva?",
    content: "Imam ispit sledeće nedelje, šta da očekujem?",
    category: "Ispiti",
    likes: 31,
    replies: 28,
    timeAgo: "Juče",
    isHot: false
  }
]

// Mock study groups
const studyGroups = [
  {
    id: 1,
    name: "A1 Početnička grupa",
    description: "Zajedničko učenje i motivacija za početnike",
    members: 45,
    level: "A1",
    activity: "Visoka",
    nextMeeting: "Sutra u 19:00"
  },
  {
    id: 2,
    name: "B1 Gramatika Intenziv",
    description: "Fokus na padeže, konjunktiv i ostale izazove",
    members: 28,
    level: "B1",
    activity: "Srednja",
    nextMeeting: "Petak u 18:00"
  },
  {
    id: 3,
    name: "Konverzacija samo na nemačkom",
    description: "Practice speaking without fear!",
    members: 67,
    level: "B2",
    activity: "Visoka",
    nextMeeting: "Danas u 20:00"
  }
]

// Mock events
const upcomingEvents = [
  {
    id: 1,
    title: "Live Q&A sa native speakerom",
    type: "Webinar",
    date: "Sutra",
    time: "19:00",
    participants: 156,
    icon: Video,
    color: "text-red-400"
  },
  {
    id: 2,
    title: "Gramatički maraton - Padeži",
    type: "Workshop",
    date: "Subota",
    time: "15:00",
    participants: 89,
    icon: BookOpen,
    color: "text-blue-400"
  },
  {
    id: 3,
    title: "Virtualni language exchange",
    type: "Društveni",
    date: "Nedelja",
    time: "18:00",
    participants: 124,
    icon: MessageCircle,
    color: "text-green-400"
  }
]

// Mock leaderboard
const topLearners = [
  { rank: 1, name: "Milica J.", xp: 45230, streak: 127, avatar: "🥇", level: "C1" },
  { rank: 2, name: "Stefan K.", xp: 42180, streak: 95, avatar: "🥈", level: "B2" },
  { rank: 3, name: "Jovana M.", xp: 38450, streak: 82, avatar: "🥉", level: "B2" },
  { rank: 4, name: "Aleksandar P.", xp: 35670, streak: 71, avatar: "🏅", level: "B1" },
  { rank: 5, name: "Tijana S.", xp: 33290, streak: 64, avatar: "🏅", level: "B1" }
]

// Language exchange matches
const languageExchange = [
  {
    id: 1,
    name: "Hans M.",
    native: "Nemački",
    learning: "Srpski",
    level: "A2",
    interests: ["Muzika", "Sport", "Filmovi"],
    online: true
  },
  {
    id: 2,
    name: "Anna S.",
    native: "Nemački",
    learning: "Srpski",
    level: "B1",
    interests: ["Putovanja", "Knjige", "Kultura"],
    online: false
  },
  {
    id: 3,
    name: "Thomas W.",
    native: "Nemački",
    learning: "Srpski",
    level: "A1",
    interests: ["Tehnologija", "Igre", "Kuvanje"],
    online: true
  }
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"forum" | "groups" | "events" | "exchange">("forum")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <Header
        showGreeting
        userName="učeniče"
        subtitle="Učenje je zabavnije zajedno!"
      />

      <main className="relative min-h-[calc(100vh-4rem)] p-6">
        <DashboardBackground />

        <div className="relative z-10 mx-auto max-w-7xl space-y-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8" />
                <h1 className="text-3xl font-bold">Community Hub</h1>
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Poveži se sa drugim učenicima, nađi study buddy-ja, učestvuj u događajima i razmenjuj iskustva!
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm">1,247 online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">3 događaja danas</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm">89 novih postova</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Button
              variant={activeTab === "forum" ? "default" : "ghost"}
              onClick={() => setActiveTab("forum")}
              className={cn(
                activeTab === "forum" && "bg-german-gold text-black hover:bg-german-gold/90"
              )}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Forum
            </Button>
            <Button
              variant={activeTab === "groups" ? "default" : "ghost"}
              onClick={() => setActiveTab("groups")}
              className={cn(
                activeTab === "groups" && "bg-german-gold text-black hover:bg-german-gold/90"
              )}
            >
              <Users className="h-4 w-4 mr-2" />
              Grupe za učenje
            </Button>
            <Button
              variant={activeTab === "events" ? "default" : "ghost"}
              onClick={() => setActiveTab("events")}
              className={cn(
                activeTab === "events" && "bg-german-gold text-black hover:bg-german-gold/90"
              )}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Događaji
            </Button>
            <Button
              variant={activeTab === "exchange" ? "default" : "ghost"}
              onClick={() => setActiveTab("exchange")}
              className={cn(
                activeTab === "exchange" && "bg-german-gold text-black hover:bg-german-gold/90"
              )}
            >
              <Globe className="h-4 w-4 mr-2" />
              Language Exchange
            </Button>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Forum Tab */}
              {activeTab === "forum" && (
                <>
                  <GlassCard className="p-4">
                    <div className="flex gap-3">
                      <Input
                        placeholder="Pretraži postove..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-white/5 border-white/10"
                      />
                      <Button variant="outline">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </GlassCard>

                  <div className="space-y-4">
                    {forumPosts.map((post, idx) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <GlassCard className="p-6 hover:bg-white/5 transition-all cursor-pointer group">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">{post.avatar}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-white group-hover:text-german-gold transition-colors">
                                  {post.title}
                                </h3>
                                {post.isHot && (
                                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium flex items-center gap-1">
                                    <Flame className="h-3 w-3" />
                                    Hot
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                {post.content}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <span className="font-medium text-white">{post.author}</span>
                                  <LevelBadge level={post.level as any} size="sm" />
                                </div>
                                <span>•</span>
                                <span className="px-2 py-0.5 rounded bg-white/5">{post.category}</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.timeAgo}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button variant="ghost" size="sm" className="gap-1">
                                <Heart className="h-4 w-4" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="gap-1">
                                <MessageCircle className="h-4 w-4" />
                                {post.replies}
                              </Button>
                            </div>
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* Study Groups Tab */}
              {activeTab === "groups" && (
                <div className="space-y-4">
                  {studyGroups.map((group, idx) => (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <GlassCard className="p-6 hover:bg-white/5 transition-all cursor-pointer group">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-german-gold transition-colors mb-1">
                              {group.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {group.description}
                            </p>
                          </div>
                          <LevelBadge level={group.level as any} />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Users className="h-4 w-4" />
                              {group.members} članova
                            </div>
                            <div className={cn(
                              "px-2 py-1 rounded text-xs",
                              group.activity === "Visoka" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                            )}>
                              {group.activity} aktivnost
                            </div>
                          </div>
                          <Button size="sm" className="bg-german-gold text-black hover:bg-german-gold/90">
                            <UserPlus className="h-4 w-4 mr-2" />
                            Pridruži se
                          </Button>
                        </div>
                        {group.nextMeeting && (
                          <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-german-gold">
                            <Calendar className="h-4 w-4" />
                            <span>Sledeći sastanak: {group.nextMeeting}</span>
                          </div>
                        )}
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Events Tab */}
              {activeTab === "events" && (
                <div className="space-y-4">
                  {upcomingEvents.map((event, idx) => {
                    const Icon = event.icon
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <GlassCard className="p-6 hover:bg-white/5 transition-all cursor-pointer group">
                          <div className="flex items-center gap-4">
                            <div className={cn("p-4 rounded-xl bg-white/5", event.color)}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white group-hover:text-german-gold transition-colors mb-1">
                                {event.title}
                              </h3>
                              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span className="px-2 py-0.5 rounded bg-white/5">{event.type}</span>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {event.date} u {event.time}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {event.participants} prijavljenih
                                </div>
                              </div>
                            </div>
                            <Button size="sm" className="bg-german-gold text-black hover:bg-german-gold/90">
                              Prijavi se
                            </Button>
                          </div>
                        </GlassCard>
                      </motion.div>
                    )
                  })}
                </div>
              )}

              {/* Language Exchange Tab */}
              {activeTab === "exchange" && (
                <div className="space-y-4">
                  {languageExchange.map((person, idx) => (
                    <motion.div
                      key={person.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <GlassCard className="p-6 hover:bg-white/5 transition-all">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="relative">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl">
                                👤
                              </div>
                              {person.online && (
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white mb-1">
                                {person.name}
                              </h3>
                              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                <span>Native: {person.native}</span>
                                <span>→</span>
                                <span>Learning: {person.learning} ({person.level})</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {person.interests.map((interest, i) => (
                                  <span key={i} className="px-2 py-1 rounded bg-white/5 text-xs text-white">
                                    {interest}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button size="sm" className="bg-german-gold text-black hover:bg-german-gold/90">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Pošalji poruku
                          </Button>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Leaderboard */}
              <GlassCard className="p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-german-gold" />
                  Top učenici ove nedelje
                </h3>
                <div className="space-y-3">
                  {topLearners.map((learner) => (
                    <div key={learner.rank} className="flex items-center gap-3">
                      <span className="text-2xl">{learner.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {learner.name}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{learner.xp.toLocaleString()} XP</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Flame className="h-3 w-3 text-orange-400" />
                            {learner.streak}
                          </div>
                        </div>
                      </div>
                      <LevelBadge level={learner.level as any} size="sm" />
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Quick Stats */}
              <GlassCard className="p-6">
                <h3 className="font-bold text-white mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Ukupno korisnika</span>
                    <span className="font-bold text-white">12,456</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Postova danas</span>
                    <span className="font-bold text-white">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Aktivnih grupa</span>
                    <span className="font-bold text-white">34</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exchange partnera</span>
                    <span className="font-bold text-white">1,247</span>
                  </div>
                </div>
              </GlassCard>

              {/* Call to Action */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-german-gold to-yellow-600 p-6 text-black">
                <h3 className="font-bold text-lg mb-2">Kreiraj svoju grupu!</h3>
                <p className="text-sm mb-4 opacity-90">
                  Pokreni novu study grupu i okupi ljude sa sličnim ciljevima.
                </p>
                <Button className="w-full bg-black text-white hover:bg-gray-900">
                  <Users className="h-4 w-4 mr-2" />
                  Kreiraj grupu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

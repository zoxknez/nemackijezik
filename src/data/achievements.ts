import { 
  BookOpen, 
  Flame, 
  Languages, 
  Zap, 
  Target, 
  Star, 
  Clock,
  Brain,
  GraduationCap,
  Mic,
  PenTool,
  type LucideIcon
} from "lucide-react"

export interface Achievement {
  id: string
  title: string
  description: string
  icon: LucideIcon
  category: "learning" | "streak" | "mastery" | "social"
  maxProgress: number
  xpReward: number
  tiers: {
    bronze: number
    silver: number
    gold: number
  }
}

export const achievements: Achievement[] = [
  // ==========================================
  // LEARNING (UČENJE)
  // ==========================================
  {
    id: "learn-1",
    title: "Prvi Koraci",
    description: "Završi lekcije",
    icon: BookOpen,
    category: "learning",
    maxProgress: 100,
    xpReward: 500,
    tiers: {
      bronze: 1,
      silver: 10,
      gold: 50
    }
  },
  {
    id: "learn-2",
    title: "Poliglota u Najavi",
    description: "Nauči nove reči",
    icon: Languages,
    category: "learning",
    maxProgress: 1000,
    xpReward: 1000,
    tiers: {
      bronze: 50,
      silver: 200,
      gold: 1000
    }
  },
  {
    id: "learn-3",
    title: "Gramatički Guru",
    description: "Završi gramatičke vežbe",
    icon: GraduationCap,
    category: "learning",
    maxProgress: 100,
    xpReward: 800,
    tiers: {
      bronze: 5,
      silver: 25,
      gold: 100
    }
  },

  // ==========================================
  // STREAK (REDNOST)
  // ==========================================
  {
    id: "streak-1",
    title: "Vatreni Niz",
    description: "Održi dnevni niz učenja (dana)",
    icon: Flame,
    category: "streak",
    maxProgress: 365,
    xpReward: 2000,
    tiers: {
      bronze: 7,
      silver: 30,
      gold: 365
    }
  },
  {
    id: "streak-2",
    title: "Vikend Ratnik",
    description: "Uči tokom vikenda (vikenda zaredom)",
    icon: Clock,
    category: "streak",
    maxProgress: 52,
    xpReward: 1000,
    tiers: {
      bronze: 4,
      silver: 12,
      gold: 52
    }
  },

  // ==========================================
  // MASTERY (MAJSTORSTVO)
  // ==========================================
  {
    id: "mastery-1",
    title: "Perfekcionista",
    description: "Završi lekcije bez greške",
    icon: Target,
    category: "mastery",
    maxProgress: 50,
    xpReward: 1500,
    tiers: {
      bronze: 1,
      silver: 10,
      gold: 50
    }
  },
  {
    id: "mastery-2",
    title: "Brzi Prsti",
    description: "Završi vežbu za manje od 2 minuta",
    icon: Zap,
    category: "mastery",
    maxProgress: 20,
    xpReward: 600,
    tiers: {
      bronze: 1,
      silver: 5,
      gold: 20
    }
  },
  {
    id: "mastery-3",
    title: "Zlatni Glas",
    description: "Ostvari 100% na vežbama izgovora",
    icon: Mic,
    category: "mastery",
    maxProgress: 30,
    xpReward: 900,
    tiers: {
      bronze: 3,
      silver: 10,
      gold: 30
    }
  },
  {
    id: "mastery-4",
    title: "Pisac u Usponu",
    description: "Napiši eseje bez gramatičkih grešaka",
    icon: PenTool,
    category: "mastery",
    maxProgress: 10,
    xpReward: 1200,
    tiers: {
      bronze: 1,
      silver: 3,
      gold: 10
    }
  },

  // ==========================================
  // SOCIAL / EXTRA
  // ==========================================
  {
    id: "extra-1",
    title: "Rani Ptić",
    description: "Završi lekciju pre 8 ujutru",
    icon: Star,
    category: "social",
    maxProgress: 20,
    xpReward: 400,
    tiers: {
      bronze: 1,
      silver: 5,
      gold: 20
    }
  },
  {
    id: "extra-2",
    title: "Noćna Sova",
    description: "Završi lekciju posle 10 uveče",
    icon: Brain,
    category: "social",
    maxProgress: 20,
    xpReward: 400,
    tiers: {
      bronze: 1,
      silver: 5,
      gold: 20
    }
  }
]

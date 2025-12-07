export type ExerciseType = "grammar" | "pronunciation" | "listening" | "writing"
export type Difficulty = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export interface Question {
  id: string
  text: string
  options?: string[]
  correctAnswer?: string
  explanation?: string
  audioUrl?: string // For listening
  hint?: string // Optional hint for the question
}

export interface Exercise {
  id: string
  title: string
  description: string
  type: ExerciseType
  difficulty: Difficulty
  questions: Question[]
  xpReward: number
  estimatedTime: number // in minutes
}

export const exercises: Exercise[] = [
  // ==========================================
  // GRAMMAR (GRAMATIKA)
  // ==========================================
  {
    id: "gram-a1-1",
    title: "Glagol 'sein' (biti)",
    description: "Vežbaj konjugaciju najvažnijeg glagola u nemačkom jeziku.",
    type: "grammar",
    difficulty: "A1",
    xpReward: 50,
    estimatedTime: 5,
    questions: [
      {
        id: "q1",
        text: "Ich ___ müde.",
        options: ["bin", "bist", "ist", "sind"],
        correctAnswer: "bin",
        explanation: "Za prvo lice jednine (ich) glagol 'sein' glasi 'bin'."
      },
      {
        id: "q2",
        text: "Du ___ mein Freund.",
        options: ["bin", "bist", "ist", "seid"],
        correctAnswer: "bist",
        explanation: "Za drugo lice jednine (du) glagol 'sein' glasi 'bist'."
      },
      {
        id: "q3",
        text: "Wir ___ zu Hause.",
        options: ["sind", "seid", "ist", "bin"],
        correctAnswer: "sind",
        explanation: "Za prvo lice množine (wir) glagol 'sein' glasi 'sind'."
      }
    ]
  },
  {
    id: "gram-a2-1",
    title: "Perfekt pravilnih glagola",
    description: "Nauči kako se gradi prošlo vreme za pravilne glagole.",
    type: "grammar",
    difficulty: "A2",
    xpReward: 75,
    estimatedTime: 8,
    questions: [
      {
        id: "q1",
        text: "Ich habe gestern Fußball ___ (spielen).",
        options: ["gespielt", "spielen", "gespielen", "spielte"],
        correctAnswer: "gespielt",
        explanation: "Pravilni glagoli u perfektu dobijaju prefiks ge- i nastavak -t."
      },
      {
        id: "q2",
        text: "Wir haben viel ___ (lernen).",
        options: ["gelernt", "lernen", "gelernen", "lernte"],
        correctAnswer: "gelernt",
        explanation: "Particip II za 'lernen' je 'gelernt'."
      }
    ]
  },
  {
    id: "gram-b1-1",
    title: "Zavisne rečenice sa 'weil'",
    description: "Vežbaj red reči u rečenicama sa veznikom 'weil'.",
    type: "grammar",
    difficulty: "B1",
    xpReward: 100,
    estimatedTime: 10,
    questions: [
      {
        id: "q1",
        text: "Ich gehe nicht ins Kino, weil ich keine Zeit ___.",
        options: ["habe", "hat", "hast", "haben"],
        correctAnswer: "habe",
        explanation: "U zavisnoj rečenici sa 'weil', glagol stoji na samom kraju."
      },
      {
        id: "q2",
        text: "Er ist glücklich, weil er die Prüfung bestanden ___.",
        options: ["hat", "habe", "hast", "haben"],
        correctAnswer: "hat",
        explanation: "Pomoćni glagol 'hat' ide na kraj rečenice."
      }
    ]
  },
  {
    id: "gram-c1-1",
    title: "Konjunktiv II u prošlosti",
    description: "Izražavanje nerealnih želja i uslova u prošlosti.",
    type: "grammar",
    difficulty: "C1",
    xpReward: 150,
    estimatedTime: 15,
    questions: [
      {
        id: "q1",
        text: "Hätte ich das gewusst, ___ ich früher gekommen.",
        options: ["wäre", "hätte", "würde", "sei"],
        correctAnswer: "wäre",
        explanation: "Za glagole kretanja (kommen) koristi se pomoćni glagol 'sein' u Konjunktivu II (wäre)."
      }
    ]
  },

  // ==========================================
  // LISTENING (SLUŠANJE)
  // ==========================================
  {
    id: "list-a1-1",
    title: "U restoranu",
    description: "Slušaj dijalog u restoranu i odgovori na pitanja.",
    type: "listening",
    difficulty: "A1",
    xpReward: 60,
    estimatedTime: 5,
    questions: [
      {
        id: "q1",
        text: "Šta je gost naručio za piće?",
        options: ["Vodu", "Pivo", "Sok od jabuke", "Vino"],
        correctAnswer: "Sok od jabuke",
        explanation: "Gost je rekao: 'Ich hätte gerne einen Apfelsaft'."
      }
    ]
  },
  {
    id: "list-b2-1",
    title: "Vesti: Klimatske promene",
    description: "Razumevanje složenijeg izveštaja o vremenu.",
    type: "listening",
    difficulty: "B2",
    xpReward: 120,
    estimatedTime: 12,
    questions: [
      {
        id: "q1",
        text: "Koja je glavna posledica pomenuta u izveštaju?",
        options: ["Porast nivoa mora", "Suša", "Poplave", "Sve navedeno"],
        correctAnswer: "Sve navedeno",
        explanation: "Izveštaj pominje ekstremne vremenske uslove uključujući suše i poplave."
      }
    ]
  },

  // ==========================================
  // PRONUNCIATION (IZGOVOR)
  // ==========================================
  {
    id: "pron-a1-1",
    title: "Umlauti (Ä, Ö, Ü)",
    description: "Vežbaj izgovor specifičnih nemačkih samoglasnika.",
    type: "pronunciation",
    difficulty: "A1",
    xpReward: 50,
    estimatedTime: 5,
    questions: [
      {
        id: "q1",
        text: "Mädchen",
        explanation: "Obrati pažnju na 'ä' koje zvuči kao otvoreno 'e'."
      },
      {
        id: "q2",
        text: "Schön",
        explanation: "Za 'ö' namesti usta kao za 'o', a izgovori 'e'."
      },
      {
        id: "q3",
        text: "Übung",
        explanation: "Za 'ü' namesti usta kao za 'u', a izgovori 'i'."
      }
    ]
  },
  {
    id: "pron-c2-1",
    title: "Brzalice (Zungenbrecher)",
    description: "Najveći izazov za tvoj jezik!",
    type: "pronunciation",
    difficulty: "C2",
    xpReward: 200,
    estimatedTime: 10,
    questions: [
      {
        id: "q1",
        text: "Fischers Fritz fischt frische Fische, frische Fische fischt Fischers Fritz.",
        explanation: "Pazi na razliku između 's', 'sch' i 'z'."
      }
    ]
  },

  // ==========================================
  // WRITING (PISANJE)
  // ==========================================
  {
    id: "writ-a2-1",
    title: "Email prijatelju",
    description: "Napiši kratak email prijatelju o svom odmoru.",
    type: "writing",
    difficulty: "A2",
    xpReward: 100,
    estimatedTime: 15,
    questions: [
      {
        id: "q1",
        text: "Napiši email (50-80 reči) u kojem opisuješ gde si bio, šta si radio i kakvo je bilo vreme.",
        explanation: "Koristi perfekt za prošlost i prideve za opis."
      }
    ]
  },
  {
    id: "writ-b2-1",
    title: "Žalba na proizvod",
    description: "Napiši formalno pismo žalbe.",
    type: "writing",
    difficulty: "B2",
    xpReward: 150,
    estimatedTime: 20,
    questions: [
      {
        id: "q1",
        text: "Kupio si laptop koji ne radi. Napiši žalbu prodavnici (100-150 reči).",
        explanation: "Koristi formalni stil (Sie), objasni problem i zahtevaj rešenje (povrat novca ili zamenu)."
      }
    ]
  }
]

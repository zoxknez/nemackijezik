export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export interface VocabularyWord {
  id: string
  german: string
  serbian: string
  article?: "der" | "die" | "das"
  plural?: string
  example: string
  exampleTranslation: string
  level: Level
  category: string
  mastery: number // 0-100
}

export const vocabulary: VocabularyWord[] = [
  // ==========================================
  // A1 - POČETNI
  // ==========================================
  // Porodica
  {
    id: "a1-fam-1",
    german: "Mutter",
    serbian: "majka",
    article: "die",
    plural: "Mütter",
    example: "Meine Mutter kocht sehr gut.",
    exampleTranslation: "Moja majka kuva veoma dobro.",
    level: "A1",
    category: "Porodica",
    mastery: 0
  },
  {
    id: "a1-fam-2",
    german: "Vater",
    serbian: "otac",
    article: "der",
    plural: "Väter",
    example: "Der Vater arbeitet im Büro.",
    exampleTranslation: "Otac radi u kancelariji.",
    level: "A1",
    category: "Porodica",
    mastery: 0
  },
  {
    id: "a1-fam-3",
    german: "Kind",
    serbian: "dete",
    article: "das",
    plural: "Kinder",
    example: "Das Kind spielt im Garten.",
    exampleTranslation: "Dete se igra u bašti.",
    level: "A1",
    category: "Porodica",
    mastery: 0
  },
  // Hrana
  {
    id: "a1-food-1",
    german: "Brot",
    serbian: "hleb",
    article: "das",
    plural: "Brote",
    example: "Ich esse Brot zum Frühstück.",
    exampleTranslation: "Jedem hleb za doručak.",
    level: "A1",
    category: "Hrana",
    mastery: 0
  },
  {
    id: "a1-food-2",
    german: "Wasser",
    serbian: "voda",
    article: "das",
    plural: "-",
    example: "Ich trinke ein Glas Wasser.",
    exampleTranslation: "Pijem čašu vode.",
    level: "A1",
    category: "Hrana",
    mastery: 0
  },
  {
    id: "a1-food-3",
    german: "Apfel",
    serbian: "jabuka",
    article: "der",
    plural: "Äpfel",
    example: "Der Apfel ist rot.",
    exampleTranslation: "Jabuka je crvena.",
    level: "A1",
    category: "Hrana",
    mastery: 0
  },
  // Kuća
  {
    id: "a1-house-1",
    german: "Haus",
    serbian: "kuća",
    article: "das",
    plural: "Häuser",
    example: "Wir wohnen in einem Haus.",
    exampleTranslation: "Mi živimo u jednoj kući.",
    level: "A1",
    category: "Kuća",
    mastery: 0
  },
  {
    id: "a1-house-2",
    german: "Zimmer",
    serbian: "soba",
    article: "das",
    plural: "Zimmer",
    example: "Mein Zimmer ist klein.",
    exampleTranslation: "Moja soba je mala.",
    level: "A1",
    category: "Kuća",
    mastery: 0
  },
  {
    id: "a1-house-3",
    german: "Tisch",
    serbian: "sto",
    article: "der",
    plural: "Tische",
    example: "Das Buch liegt auf dem Tisch.",
    exampleTranslation: "Knjiga leži na stolu.",
    level: "A1",
    category: "Kuća",
    mastery: 0
  },
  // Pozdravi
  {
    id: "a1-greet-1",
    german: "Hallo",
    serbian: "zdravo",
    article: undefined,
    plural: undefined,
    example: "Hallo, wie geht es dir?",
    exampleTranslation: "Zdravo, kako si?",
    level: "A1",
    category: "Pozdravi",
    mastery: 0
  },
  {
    id: "a1-greet-2",
    german: "Tschüss",
    serbian: "ćao",
    article: undefined,
    plural: undefined,
    example: "Tschüss, bis morgen!",
    exampleTranslation: "Ćao, vidimo se sutra!",
    level: "A1",
    category: "Pozdravi",
    mastery: 0
  },

  // ==========================================
  // A2 - OSNOVNI
  // ==========================================
  // Grad
  {
    id: "a2-city-1",
    german: "Bahnhof",
    serbian: "železnička stanica",
    article: "der",
    plural: "Bahnhöfe",
    example: "Der Zug kommt am Bahnhof an.",
    exampleTranslation: "Voz stiže na stanicu.",
    level: "A2",
    category: "Grad",
    mastery: 0
  },
  {
    id: "a2-city-2",
    german: "Flughafen",
    serbian: "aerodrom",
    article: "der",
    plural: "Flughäfen",
    example: "Wir fahren zum Flughafen.",
    exampleTranslation: "Vozimo se do aerodroma.",
    level: "A2",
    category: "Grad",
    mastery: 0
  },
  // Odeća
  {
    id: "a2-cloth-1",
    german: "Hose",
    serbian: "pantalone",
    article: "die",
    plural: "Hosen",
    example: "Die Hose ist zu lang.",
    exampleTranslation: "Pantalone su predugačke.",
    level: "A2",
    category: "Odeća",
    mastery: 0
  },
  {
    id: "a2-cloth-2",
    german: "Hemd",
    serbian: "košulja",
    article: "das",
    plural: "Hemden",
    example: "Er trägt ein weißes Hemd.",
    exampleTranslation: "On nosi belu košulju.",
    level: "A2",
    category: "Odeća",
    mastery: 0
  },
  // Vreme
  {
    id: "a2-weather-1",
    german: "Regen",
    serbian: "kiša",
    article: "der",
    plural: "-",
    example: "Der Regen ist stark.",
    exampleTranslation: "Kiša je jaka.",
    level: "A2",
    category: "Vreme",
    mastery: 0
  },
  {
    id: "a2-weather-2",
    german: "Sonne",
    serbian: "sunce",
    article: "die",
    plural: "Sonnen",
    example: "Die Sonne scheint.",
    exampleTranslation: "Sunce sija.",
    level: "A2",
    category: "Vreme",
    mastery: 0
  },

  // ==========================================
  // B1 - SREDNJI
  // ==========================================
  // Posao
  {
    id: "b1-work-1",
    german: "Erfahrung",
    serbian: "iskustvo",
    article: "die",
    plural: "Erfahrungen",
    example: "Ich habe viel Erfahrung in diesem Bereich.",
    exampleTranslation: "Imam mnogo iskustva u ovoj oblasti.",
    level: "B1",
    category: "Posao",
    mastery: 0
  },
  {
    id: "b1-work-2",
    german: "Bewerbung",
    serbian: "prijava (za posao)",
    article: "die",
    plural: "Bewerbungen",
    example: "Ich schreibe eine Bewerbung.",
    exampleTranslation: "Pišem prijavu za posao.",
    level: "B1",
    category: "Posao",
    mastery: 0
  },
  // Zdravlje
  {
    id: "b1-health-1",
    german: "Krankenversicherung",
    serbian: "zdravstveno osiguranje",
    article: "die",
    plural: "Krankenversicherungen",
    example: "Die Krankenversicherung ist obligatorisch.",
    exampleTranslation: "Zdravstveno osiguranje je obavezno.",
    level: "B1",
    category: "Zdravlje",
    mastery: 0
  },
  {
    id: "b1-health-2",
    german: "Untersuchung",
    serbian: "pregled",
    article: "die",
    plural: "Untersuchungen",
    example: "Die ärztliche Untersuchung dauert eine Stunde.",
    exampleTranslation: "Lekarski pregled traje sat vremena.",
    level: "B1",
    category: "Zdravlje",
    mastery: 0
  },
  // Okolina
  {
    id: "b1-env-1",
    german: "Umwelt",
    serbian: "životna sredina",
    article: "die",
    plural: "-",
    example: "Wir müssen die Umwelt schützen.",
    exampleTranslation: "Moramo štititi životnu sredinu.",
    level: "B1",
    category: "Okolina",
    mastery: 0
  },

  // ==========================================
  // B2 - VIŠI SREDNJI
  // ==========================================
  // Politika
  {
    id: "b2-pol-1",
    german: "Gesellschaft",
    serbian: "društvo",
    article: "die",
    plural: "Gesellschaften",
    example: "Die Gesellschaft verändert sich schnell.",
    exampleTranslation: "Društvo se brzo menja.",
    level: "B2",
    category: "Politika",
    mastery: 0
  },
  {
    id: "b2-pol-2",
    german: "Abstimmung",
    serbian: "glasanje",
    article: "die",
    plural: "Abstimmungen",
    example: "Die Abstimmung findet morgen statt.",
    exampleTranslation: "Glasanje se održava sutra.",
    level: "B2",
    category: "Politika",
    mastery: 0
  },
  // Obrazovanje
  {
    id: "b2-edu-1",
    german: "Vorlesung",
    serbian: "predavanje (na fakultetu)",
    article: "die",
    plural: "Vorlesungen",
    example: "Die Vorlesung war sehr interessant.",
    exampleTranslation: "Predavanje je bilo veoma interesantno.",
    level: "B2",
    category: "Obrazovanje",
    mastery: 0
  },
  {
    id: "b2-edu-2",
    german: "Abschluss",
    serbian: "diploma / završetak",
    article: "der",
    plural: "Abschlüsse",
    example: "Er hat einen guten Abschluss gemacht.",
    exampleTranslation: "On je stekao dobru diplomu.",
    level: "B2",
    category: "Obrazovanje",
    mastery: 0
  },

  // ==========================================
  // C1 - NAPREDNI
  // ==========================================
  // Ekonomija
  {
    id: "c1-eco-1",
    german: "Wettbewerb",
    serbian: "konkurencija / takmičenje",
    article: "der",
    plural: "Wettbewerbe",
    example: "Der Wettbewerb auf dem Markt ist hart.",
    exampleTranslation: "Konkurencija na tržištu je oštra.",
    level: "C1",
    category: "Ekonomija",
    mastery: 0
  },
  {
    id: "c1-eco-2",
    german: "Nachhaltigkeit",
    serbian: "održivost",
    article: "die",
    plural: "-",
    example: "Nachhaltigkeit ist wichtig für Unternehmen.",
    exampleTranslation: "Održivost je važna za preduzeća.",
    level: "C1",
    category: "Ekonomija",
    mastery: 0
  },
  // Psihologija
  {
    id: "c1-psy-1",
    german: "Bewusstsein",
    serbian: "svest",
    article: "das",
    plural: "-",
    example: "Das menschliche Bewusstsein ist komplex.",
    exampleTranslation: "Ljudska svest je kompleksna.",
    level: "C1",
    category: "Psihologija",
    mastery: 0
  },

  // ==========================================
  // C2 - EKSPERTSKI
  // ==========================================
  // Književnost
  {
    id: "c2-lit-1",
    german: "Interpretation",
    serbian: "tumačenje",
    article: "die",
    plural: "Interpretationen",
    example: "Die Interpretation dieses Gedichts ist schwierig.",
    exampleTranslation: "Tumačenje ove pesme je teško.",
    level: "C2",
    category: "Književnost",
    mastery: 0
  },
  {
    id: "c2-lit-2",
    german: "Metapher",
    serbian: "metafora",
    article: "die",
    plural: "Metaphern",
    example: "Der Autor verwendet viele Metaphern.",
    exampleTranslation: "Autor koristi mnogo metafora.",
    level: "C2",
    category: "Književnost",
    mastery: 0
  },
  // Filozofija
  {
    id: "c2-phil-1",
    german: "Dasein",
    serbian: "postojanje / bivstvovanje",
    article: "das",
    plural: "-",
    example: "Das Dasein des Menschen ist endlich.",
    exampleTranslation: "Čovekovo postojanje je konačno.",
    level: "C2",
    category: "Filozofija",
    mastery: 0
  },
  {
    id: "c2-phil-2",
    german: "Erkenntnis",
    serbian: "saznanje",
    article: "die",
    plural: "Erkenntnisse",
    example: "Wir haben neue Erkenntnisse gewonnen.",
    exampleTranslation: "Dobili smo nova saznanja.",
    level: "C2",
    category: "Filozofija",
    mastery: 0
  }
]

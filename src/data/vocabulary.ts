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
  partOfSpeech?: "noun" | "verb" | "adjective" | "adverb" | "preposition" | "conjunction" | "pronoun"
  synonyms?: string[]
  antonyms?: string[]
  relatedWords?: string[]
  notes?: string
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Vater", "Eltern", "Mama"],
    synonyms: ["Mama", "Mutti"]
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Mutter", "Eltern", "Papa"],
    synonyms: ["Papa", "Vati"]
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Baby", "Junge", "Mädchen"],
    antonyms: ["Erwachsener"]
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Bäckerei", "Butter", "Brötchen"]
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Saft", "trinken", "Flasche"],
    notes: "Uvek srednji rod (das)"
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Birne", "Orange", "Obst"],
    notes: "Umlaut u množini: Äpfel"
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Wohnung", "Gebäude", "Dach"],
    synonyms: ["Gebäude"],
    notes: "Umlaut u množini: Häuser"
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
    mastery: 0,
    partOfSpeech: "noun",
    relatedWords: ["Raum", "Schlafzimmer", "Wohnzimmer"],
    synonyms: ["Raum"],
    antonyms: ["groß"],
    notes: "Množina je ista kao jednina"
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
  },

  // ==========================================
  // DODATNI A1 VOKABULAR
  // ==========================================
  // Prevoz
  {
    id: "a1-trans-1",
    german: "Bus",
    serbian: "autobus",
    article: "der",
    plural: "Busse",
    example: "Der Bus kommt in 5 Minuten.",
    exampleTranslation: "Autobus stiže za 5 minuta.",
    level: "A1",
    category: "Prevoz",
    mastery: 0
  },
  {
    id: "a1-trans-2",
    german: "Zug",
    serbian: "voz",
    article: "der",
    plural: "Züge",
    example: "Der Zug fährt nach Berlin.",
    exampleTranslation: "Voz ide u Berlin.",
    level: "A1",
    category: "Prevoz",
    mastery: 0
  },
  {
    id: "a1-trans-3",
    german: "Auto",
    serbian: "auto",
    article: "das",
    plural: "Autos",
    example: "Mein Auto ist rot.",
    exampleTranslation: "Moj auto je crven.",
    level: "A1",
    category: "Prevoz",
    mastery: 0
  },
  {
    id: "a1-trans-4",
    german: "Fahrrad",
    serbian: "bicikl",
    article: "das",
    plural: "Fahrräder",
    example: "Ich fahre mit dem Fahrrad zur Schule.",
    exampleTranslation: "Vozim se biciklom u školu.",
    level: "A1",
    category: "Prevoz",
    mastery: 0
  },
  {
    id: "a1-trans-5",
    german: "Flugzeug",
    serbian: "avion",
    article: "das",
    plural: "Flugzeuge",
    example: "Das Flugzeug fliegt nach Wien.",
    exampleTranslation: "Avion leti za Beč.",
    level: "A1",
    category: "Prevoz",
    mastery: 0
  },
  // Kupovina
  {
    id: "a1-shop-1",
    german: "Supermarkt",
    serbian: "supermarket",
    article: "der",
    plural: "Supermärkte",
    example: "Ich kaufe im Supermarkt ein.",
    exampleTranslation: "Kupujem u supermarketu.",
    level: "A1",
    category: "Kupovina",
    mastery: 0
  },
  {
    id: "a1-shop-2",
    german: "Geld",
    serbian: "novac",
    article: "das",
    plural: "-",
    example: "Ich habe kein Geld.",
    exampleTranslation: "Nemam novca.",
    level: "A1",
    category: "Kupovina",
    mastery: 0
  },
  {
    id: "a1-shop-3",
    german: "Kasse",
    serbian: "kasa",
    article: "die",
    plural: "Kassen",
    example: "Bitte zahlen Sie an der Kasse.",
    exampleTranslation: "Molim platite na kasi.",
    level: "A1",
    category: "Kupovina",
    mastery: 0
  },
  {
    id: "a1-shop-4",
    german: "Tüte",
    serbian: "kesa",
    article: "die",
    plural: "Tüten",
    example: "Ich brauche eine Tüte.",
    exampleTranslation: "Trebam jednu kesu.",
    level: "A1",
    category: "Kupovina",
    mastery: 0
  },
  {
    id: "a1-shop-5",
    german: "Karte",
    serbian: "kartica",
    article: "die",
    plural: "Karten",
    example: "Kann ich mit Karte bezahlen?",
    exampleTranslation: "Mogu li platiti karticom?",
    level: "A1",
    category: "Kupovina",
    mastery: 0
  },
  // Hobiji
  {
    id: "a1-hobby-1",
    german: "Sport",
    serbian: "sport",
    article: "der",
    plural: "Sportarten",
    example: "Ich treibe gern Sport.",
    exampleTranslation: "Volim da se bavim sportom.",
    level: "A1",
    category: "Hobiji",
    mastery: 0
  },
  {
    id: "a1-hobby-2",
    german: "Musik",
    serbian: "muzika",
    article: "die",
    plural: "-",
    example: "Ich höre Musik.",
    exampleTranslation: "Slušam muziku.",
    level: "A1",
    category: "Hobiji",
    mastery: 0
  },
  {
    id: "a1-hobby-3",
    german: "Buch",
    serbian: "knjiga",
    article: "das",
    plural: "Bücher",
    example: "Ich lese ein Buch.",
    exampleTranslation: "Čitam knjigu.",
    level: "A1",
    category: "Hobiji",
    mastery: 0
  },
  {
    id: "a1-hobby-4",
    german: "Film",
    serbian: "film",
    article: "der",
    plural: "Filme",
    example: "Wir sehen einen Film.",
    exampleTranslation: "Gledamo film.",
    level: "A1",
    category: "Hobiji",
    mastery: 0
  },
  {
    id: "a1-hobby-5",
    german: "Spiel",
    serbian: "igra",
    article: "das",
    plural: "Spiele",
    example: "Die Kinder spielen ein Spiel.",
    exampleTranslation: "Deca se igraju igru.",
    level: "A1",
    category: "Hobiji",
    mastery: 0
  },
  // Telo
  {
    id: "a1-body-1",
    german: "Kopf",
    serbian: "glava",
    article: "der",
    plural: "Köpfe",
    example: "Mein Kopf tut weh.",
    exampleTranslation: "Boli me glava.",
    level: "A1",
    category: "Telo",
    mastery: 0
  },
  {
    id: "a1-body-2",
    german: "Hand",
    serbian: "šaka/ruka",
    article: "die",
    plural: "Hände",
    example: "Wasch dir die Hände!",
    exampleTranslation: "Operi ruke!",
    level: "A1",
    category: "Telo",
    mastery: 0
  },
  {
    id: "a1-body-3",
    german: "Fuß",
    serbian: "stopalo/noga",
    article: "der",
    plural: "Füße",
    example: "Meine Füße sind kalt.",
    exampleTranslation: "Hladne su mi noge.",
    level: "A1",
    category: "Telo",
    mastery: 0
  },
  {
    id: "a1-body-4",
    german: "Auge",
    serbian: "oko",
    article: "das",
    plural: "Augen",
    example: "Sie hat blaue Augen.",
    exampleTranslation: "Ona ima plave oči.",
    level: "A1",
    category: "Telo",
    mastery: 0
  },
  {
    id: "a1-body-5",
    german: "Ohr",
    serbian: "uvo",
    article: "das",
    plural: "Ohren",
    example: "Ich kann dich nicht hören. Meine Ohren tun weh.",
    exampleTranslation: "Ne mogu te čuti. Bole me uši.",
    level: "A1",
    category: "Telo",
    mastery: 0
  },
  // Emocije
  {
    id: "a1-emot-1",
    german: "glücklich",
    serbian: "srećan",
    article: undefined,
    plural: undefined,
    example: "Ich bin sehr glücklich.",
    exampleTranslation: "Veoma sam srećan.",
    level: "A1",
    category: "Emocije",
    mastery: 0
  },
  {
    id: "a1-emot-2",
    german: "traurig",
    serbian: "tužan",
    article: undefined,
    plural: undefined,
    example: "Warum bist du traurig?",
    exampleTranslation: "Zašto si tužan?",
    level: "A1",
    category: "Emocije",
    mastery: 0
  },
  {
    id: "a1-emot-3",
    german: "müde",
    serbian: "umoran",
    article: undefined,
    plural: undefined,
    example: "Ich bin sehr müde.",
    exampleTranslation: "Veoma sam umoran.",
    level: "A1",
    category: "Emocije",
    mastery: 0
  },
  {
    id: "a1-emot-4",
    german: "wütend",
    serbian: "ljut",
    article: undefined,
    plural: undefined,
    example: "Er ist wütend auf mich.",
    exampleTranslation: "On je ljut na mene.",
    level: "A1",
    category: "Emocije",
    mastery: 0
  },
  {
    id: "a1-emot-5",
    german: "nervös",
    serbian: "nervozan",
    article: undefined,
    plural: undefined,
    example: "Ich bin vor der Prüfung nervös.",
    exampleTranslation: "Nervozan sam pred ispit.",
    level: "A1",
    category: "Emocije",
    mastery: 0
  },

  // ==========================================
  // DODATNI A2 VOKABULAR
  // ==========================================
  // Priroda
  {
    id: "a2-nature-1",
    german: "Baum",
    serbian: "drvo",
    article: "der",
    plural: "Bäume",
    example: "Der Baum ist sehr alt.",
    exampleTranslation: "Drvo je veoma staro.",
    level: "A2",
    category: "Priroda",
    mastery: 0
  },
  {
    id: "a2-nature-2",
    german: "Blume",
    serbian: "cvet",
    article: "die",
    plural: "Blumen",
    example: "Die Blumen sind schön.",
    exampleTranslation: "Cveće je lepo.",
    level: "A2",
    category: "Priroda",
    mastery: 0
  },
  {
    id: "a2-nature-3",
    german: "Berg",
    serbian: "planina",
    article: "der",
    plural: "Berge",
    example: "Wir wandern in den Bergen.",
    exampleTranslation: "Planinarimo u planinama.",
    level: "A2",
    category: "Priroda",
    mastery: 0
  },
  {
    id: "a2-nature-4",
    german: "See",
    serbian: "jezero",
    article: "der",
    plural: "Seen",
    example: "Der See ist sehr tief.",
    exampleTranslation: "Jezero je veoma duboko.",
    level: "A2",
    category: "Priroda",
    mastery: 0
  },
  {
    id: "a2-nature-5",
    german: "Wald",
    serbian: "šuma",
    article: "der",
    plural: "Wälder",
    example: "Wir gehen im Wald spazieren.",
    exampleTranslation: "Šetamo u šumi.",
    level: "A2",
    category: "Priroda",
    mastery: 0
  },
  // Tehnologija
  {
    id: "a2-tech-1",
    german: "Handy",
    serbian: "mobilni telefon",
    article: "das",
    plural: "Handys",
    example: "Wo ist mein Handy?",
    exampleTranslation: "Gde je moj mobilni?",
    level: "A2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "a2-tech-2",
    german: "Computer",
    serbian: "računar",
    article: "der",
    plural: "Computer",
    example: "Ich arbeite am Computer.",
    exampleTranslation: "Radim na računaru.",
    level: "A2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "a2-tech-3",
    german: "Internet",
    serbian: "internet",
    article: "das",
    plural: "-",
    example: "Hast du Internet zu Hause?",
    exampleTranslation: "Imaš li internet kod kuće?",
    level: "A2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "a2-tech-4",
    german: "E-Mail",
    serbian: "mejl/e-pošta",
    article: "die",
    plural: "E-Mails",
    example: "Schick mir eine E-Mail!",
    exampleTranslation: "Pošalji mi mejl!",
    level: "A2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "a2-tech-5",
    german: "Tastatur",
    serbian: "tastatura",
    article: "die",
    plural: "Tastaturen",
    example: "Die Tastatur funktioniert nicht.",
    exampleTranslation: "Tastatura ne radi.",
    level: "A2",
    category: "Tehnologija",
    mastery: 0
  },

  // ==========================================
  // DODATNI B1 VOKABULAR
  // ==========================================
  // Osećanja
  {
    id: "b1-feel-1",
    german: "Angst",
    serbian: "strah",
    article: "die",
    plural: "Ängste",
    example: "Ich habe Angst vor Spinnen.",
    exampleTranslation: "Plašim se paukova.",
    level: "B1",
    category: "Osećanja",
    mastery: 0
  },
  {
    id: "b1-feel-2",
    german: "Hoffnung",
    serbian: "nada",
    article: "die",
    plural: "Hoffnungen",
    example: "Wir haben die Hoffnung nicht verloren.",
    exampleTranslation: "Nismo izgubili nadu.",
    level: "B1",
    category: "Osećanja",
    mastery: 0
  },
  {
    id: "b1-feel-3",
    german: "Enttäuschung",
    serbian: "razočaranje",
    article: "die",
    plural: "Enttäuschungen",
    example: "Das war eine große Enttäuschung.",
    exampleTranslation: "To je bilo veliko razočaranje.",
    level: "B1",
    category: "Osećanja",
    mastery: 0
  },
  {
    id: "b1-feel-4",
    german: "Stolz",
    serbian: "ponos",
    article: "der",
    plural: "-",
    example: "Ich bin stolz auf dich.",
    exampleTranslation: "Ponosan sam na tebe.",
    level: "B1",
    category: "Osećanja",
    mastery: 0
  },
  // Mediji
  {
    id: "b1-media-1",
    german: "Zeitung",
    serbian: "novine",
    article: "die",
    plural: "Zeitungen",
    example: "Ich lese jeden Tag die Zeitung.",
    exampleTranslation: "Svaki dan čitam novine.",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },
  {
    id: "b1-media-2",
    german: "Nachrichten",
    serbian: "vesti",
    article: "die",
    plural: "-",
    example: "Hast du die Nachrichten gehört?",
    exampleTranslation: "Jesi li čuo vesti?",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },
  {
    id: "b1-media-3",
    german: "Artikel",
    serbian: "članak",
    article: "der",
    plural: "Artikel",
    example: "Dieser Artikel ist sehr interessant.",
    exampleTranslation: "Ovaj članak je veoma interesantan.",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },

  // ==========================================
  // DODATNI B2 VOKABULAR
  // ==========================================
  // Profesije
  {
    id: "b2-prof-1",
    german: "Ingenieur",
    serbian: "inženjer",
    article: "der",
    plural: "Ingenieure",
    example: "Er arbeitet als Ingenieur.",
    exampleTranslation: "On radi kao inženjer.",
    level: "B2",
    category: "Profesije",
    mastery: 0
  },
  {
    id: "b2-prof-2",
    german: "Anwalt",
    serbian: "advokat",
    article: "der",
    plural: "Anwälte",
    example: "Sie ist Anwältin von Beruf.",
    exampleTranslation: "Ona je po zanimanju advokat.",
    level: "B2",
    category: "Profesije",
    mastery: 0
  },
  {
    id: "b2-prof-3",
    german: "Architekt",
    serbian: "arhitekta",
    article: "der",
    plural: "Architekten",
    example: "Der Architekt plant das neue Gebäude.",
    exampleTranslation: "Arhitekta planira novu zgradu.",
    level: "B2",
    category: "Profesije",
    mastery: 0
  },
  // Apstraktni pojmovi
  {
    id: "b2-abs-1",
    german: "Verantwortung",
    serbian: "odgovornost",
    article: "die",
    plural: "Verantwortungen",
    example: "Das ist eine große Verantwortung.",
    exampleTranslation: "To je velika odgovornost.",
    level: "B2",
    category: "Apstraktni pojmovi",
    mastery: 0
  },
  {
    id: "b2-abs-2",
    german: "Entwicklung",
    serbian: "razvoj",
    article: "die",
    plural: "Entwicklungen",
    example: "Die Entwicklung der Technologie ist schnell.",
    exampleTranslation: "Razvoj tehnologije je brz.",
    level: "B2",
    category: "Apstraktni pojmovi",
    mastery: 0
  },
  {
    id: "b2-abs-3",
    german: "Zusammenarbeit",
    serbian: "saradnja",
    article: "die",
    plural: "-",
    example: "Die Zusammenarbeit war erfolgreich.",
    exampleTranslation: "Saradnja je bila uspešna.",
    level: "B2",
    category: "Apstraktni pojmovi",
    mastery: 0
  },

  // ==========================================
  // DODATNI B1 VOKABULAR - Mediji i Banke
  // ==========================================
  {
    id: "b1-media-4",
    german: "Schlagzeile",
    serbian: "naslov",
    article: "die",
    plural: "Schlagzeilen",
    example: "Die Schlagzeile war sensationell.",
    exampleTranslation: "Naslov je bio senzacionalan.",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },
  {
    id: "b1-media-5",
    german: "Quelle",
    serbian: "izvor",
    article: "die",
    plural: "Quellen",
    example: "Man sollte die Quelle überprüfen.",
    exampleTranslation: "Trebalo bi proveriti izvor.",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },
  {
    id: "b1-media-6",
    german: "Sendung",
    serbian: "emisija",
    article: "die",
    plural: "Sendungen",
    example: "Diese Sendung läuft jeden Abend.",
    exampleTranslation: "Ova emisija ide svako veče.",
    level: "B1",
    category: "Mediji",
    mastery: 0
  },
  {
    id: "b1-bank-1",
    german: "Konto",
    serbian: "račun",
    article: "das",
    plural: "Konten/Kontos",
    example: "Ich möchte ein Konto eröffnen.",
    exampleTranslation: "Želim da otvorim račun.",
    level: "B1",
    category: "Banke",
    mastery: 0
  },
  {
    id: "b1-bank-2",
    german: "Überweisung",
    serbian: "prenos/transakcija",
    article: "die",
    plural: "Überweisungen",
    example: "Die Überweisung dauert zwei Tage.",
    exampleTranslation: "Prenos traje dva dana.",
    level: "B1",
    category: "Banke",
    mastery: 0
  },
  {
    id: "b1-bank-3",
    german: "Geldautomat",
    serbian: "bankomat",
    article: "der",
    plural: "Geldautomaten",
    example: "Ich hebe Geld am Geldautomaten ab.",
    exampleTranslation: "Podižem novac na bankomatu.",
    level: "B1",
    category: "Banke",
    mastery: 0
  },
  {
    id: "b1-bank-4",
    german: "Kredit",
    serbian: "kredit",
    article: "der",
    plural: "Kredite",
    example: "Wir brauchen einen Kredit für das Haus.",
    exampleTranslation: "Trebamo kredit za kuću.",
    level: "B1",
    category: "Banke",
    mastery: 0
  },
  {
    id: "b1-bank-5",
    german: "Zinsen",
    serbian: "kamate",
    article: "die",
    plural: "-",
    example: "Die Zinsen sind niedrig.",
    exampleTranslation: "Kamate su niske.",
    level: "B1",
    category: "Banke",
    mastery: 0
  },

  // ==========================================
  // DODATNI B2 VOKABULAR - Tehnologija i Globalizacija
  // ==========================================
  {
    id: "b2-tech-1",
    german: "Künstliche Intelligenz",
    serbian: "veštačka inteligencija",
    article: "die",
    plural: "-",
    example: "Künstliche Intelligenz verändert unsere Welt.",
    exampleTranslation: "Veštačka inteligencija menja naš svet.",
    level: "B2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "b2-tech-2",
    german: "Algorithmus",
    serbian: "algoritam",
    article: "der",
    plural: "Algorithmen",
    example: "Der Algorithmus berechnet die beste Route.",
    exampleTranslation: "Algoritam izračunava najbolju rutu.",
    level: "B2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "b2-tech-3",
    german: "Datenschutz",
    serbian: "zaštita podataka",
    article: "der",
    plural: "-",
    example: "Datenschutz ist sehr wichtig.",
    exampleTranslation: "Zaštita podataka je veoma važna.",
    level: "B2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "b2-tech-4",
    german: "Automatisierung",
    serbian: "automatizacija",
    article: "die",
    plural: "Automatisierungen",
    example: "Die Automatisierung verändert die Arbeitswelt.",
    exampleTranslation: "Automatizacija menja svet rada.",
    level: "B2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "b2-tech-5",
    german: "Digitalisierung",
    serbian: "digitalizacija",
    article: "die",
    plural: "-",
    example: "Die Digitalisierung schreitet voran.",
    exampleTranslation: "Digitalizacija napreduje.",
    level: "B2",
    category: "Tehnologija",
    mastery: 0
  },
  {
    id: "b2-glob-1",
    german: "Globalisierung",
    serbian: "globalizacija",
    article: "die",
    plural: "-",
    example: "Die Globalisierung hat Vor- und Nachteile.",
    exampleTranslation: "Globalizacija ima prednosti i mane.",
    level: "B2",
    category: "Globalizacija",
    mastery: 0
  },
  {
    id: "b2-glob-2",
    german: "Migration",
    serbian: "migracija",
    article: "die",
    plural: "Migrationen",
    example: "Migration ist ein weltweites Phänomen.",
    exampleTranslation: "Migracija je svetski fenomen.",
    level: "B2",
    category: "Globalizacija",
    mastery: 0
  },
  {
    id: "b2-glob-3",
    german: "Integration",
    serbian: "integracija",
    article: "die",
    plural: "-",
    example: "Integration ist ein langwieriger Prozess.",
    exampleTranslation: "Integracija je dugotrajan proces.",
    level: "B2",
    category: "Globalizacija",
    mastery: 0
  },
  {
    id: "b2-glob-4",
    german: "Vielfalt",
    serbian: "raznolikost",
    article: "die",
    plural: "-",
    example: "Kulturelle Vielfalt bereichert die Gesellschaft.",
    exampleTranslation: "Kulturna raznolikost obogaćuje društvo.",
    level: "B2",
    category: "Globalizacija",
    mastery: 0
  },
  {
    id: "b2-glob-5",
    german: "Austausch",
    serbian: "razmena",
    article: "der",
    plural: "-",
    example: "Der kulturelle Austausch ist wertvoll.",
    exampleTranslation: "Kulturna razmena je vredna.",
    level: "B2",
    category: "Globalizacija",
    mastery: 0
  },

  // ==========================================
  // DODATNI C1 VOKABULAR - Akademski jezik
  // ==========================================
  {
    id: "c1-acad-1",
    german: "Forschung",
    serbian: "istraživanje",
    article: "die",
    plural: "Forschungen",
    example: "Die Forschung zeigt interessante Ergebnisse.",
    exampleTranslation: "Istraživanje pokazuje interesantne rezultate.",
    level: "C1",
    category: "Akademski jezik",
    mastery: 0
  },
  {
    id: "c1-acad-2",
    german: "Hypothese",
    serbian: "hipoteza",
    article: "die",
    plural: "Hypothesen",
    example: "Die Hypothese wurde bestätigt.",
    exampleTranslation: "Hipoteza je potvrđena.",
    level: "C1",
    category: "Akademski jezik",
    mastery: 0
  },
  {
    id: "c1-acad-3",
    german: "Methodik",
    serbian: "metodologija",
    article: "die",
    plural: "Methodiken",
    example: "Die Methodik war präzise.",
    exampleTranslation: "Metodologija je bila precizna.",
    level: "C1",
    category: "Akademski jezik",
    mastery: 0
  },
  {
    id: "c1-acad-4",
    german: "Analyse",
    serbian: "analiza",
    article: "die",
    plural: "Analysen",
    example: "Die Analyse ergab neue Erkenntnisse.",
    exampleTranslation: "Analiza je dala nova saznanja.",
    level: "C1",
    category: "Akademski jezik",
    mastery: 0
  },
  {
    id: "c1-acad-5",
    german: "Synthese",
    serbian: "sinteza",
    article: "die",
    plural: "Synthesen",
    example: "Die Synthese verschiedener Theorien ist komplex.",
    exampleTranslation: "Sinteza različitih teorija je kompleksna.",
    level: "C1",
    category: "Akademski jezik",
    mastery: 0
  },
  {
    id: "c1-phil-1",
    german: "Wahrnehmung",
    serbian: "percepcija/opažanje",
    article: "die",
    plural: "Wahrnehmungen",
    example: "Die Wahrnehmung ist subjektiv.",
    exampleTranslation: "Percepcija je subjektivna.",
    level: "C1",
    category: "Filozofija",
    mastery: 0
  },
  {
    id: "c1-phil-2",
    german: "Ethik",
    serbian: "etika",
    article: "die",
    plural: "-",
    example: "Die Ethik spielt eine wichtige Rolle.",
    exampleTranslation: "Etika igra važnu ulogu.",
    level: "C1",
    category: "Filozofija",
    mastery: 0
  },
  {
    id: "c1-phil-3",
    german: "Vernunft",
    serbian: "razum",
    article: "die",
    plural: "-",
    example: "Die Vernunft unterscheidet uns von Tieren.",
    exampleTranslation: "Razum nas razlikuje od životinja.",
    level: "C1",
    category: "Filozofija",
    mastery: 0
  },

  // ==========================================
  // DODATNI C2 VOKABULAR - Nuanse jezika
  // ==========================================
  {
    id: "c2-nuance-1",
    german: "Ambiguität",
    serbian: "dvosmislenost",
    article: "die",
    plural: "Ambiguitäten",
    example: "Die Ambiguität des Textes ist beabsichtigt.",
    exampleTranslation: "Dvosmislenost teksta je namenjena.",
    level: "C2",
    category: "Nuanse",
    mastery: 0
  },
  {
    id: "c2-nuance-2",
    german: "Konnotation",
    serbian: "konotacija",
    article: "die",
    plural: "Konnotationen",
    example: "Das Wort hat eine negative Konnotation.",
    exampleTranslation: "Reč ima negativnu konotaciju.",
    level: "C2",
    category: "Nuanse",
    mastery: 0
  },
  {
    id: "c2-nuance-3",
    german: "Paradoxon",
    serbian: "paradoks",
    article: "das",
    plural: "Paradoxa",
    example: "Das ist ein logisches Paradoxon.",
    exampleTranslation: "To je logički paradoks.",
    level: "C2",
    category: "Nuanse",
    mastery: 0
  },
  {
    id: "c2-art-1",
    german: "Ästhetik",
    serbian: "estetika",
    article: "die",
    plural: "-",
    example: "Die Ästhetik des Kunstwerks ist bemerkenswert.",
    exampleTranslation: "Estetika umetničkog dela je izvanredna.",
    level: "C2",
    category: "Umetnost",
    mastery: 0
  },
  {
    id: "c2-art-2",
    german: "Abstraktion",
    serbian: "apstrakcija",
    article: "die",
    plural: "Abstraktionen",
    example: "Die Abstraktion in der modernen Kunst ist komplex.",
    exampleTranslation: "Apstrakcija u modernoj umetnosti je kompleksna.",
    level: "C2",
    category: "Umetnost",
    mastery: 0
  }
]

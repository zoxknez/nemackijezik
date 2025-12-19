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
  },

  // ==========================================
  // DODATNE GRAMATIČKE VJEŽBE
  // ==========================================
  {
    id: "gram-a1-2",
    title: "Glagol 'haben' (imati)",
    description: "Vežbaj konjugaciju glagola 'haben'.",
    type: "grammar",
    difficulty: "A1",
    xpReward: 50,
    estimatedTime: 5,
    questions: [
      {
        id: "q1",
        text: "Ich ___ einen Hund.",
        options: ["habe", "hast", "hat", "haben"],
        correctAnswer: "habe",
        explanation: "Za prvo lice jednine (ich) glagol 'haben' glasi 'habe'."
      },
      {
        id: "q2",
        text: "Du ___ ein Auto.",
        options: ["habe", "hast", "hat", "haben"],
        correctAnswer: "hast",
        explanation: "Za drugo lice jednine (du) glagol 'haben' glasi 'hast'."
      },
      {
        id: "q3",
        text: "Wir ___ Zeit.",
        options: ["habe", "habt", "hat", "haben"],
        correctAnswer: "haben",
        explanation: "Za prvo lice množine (wir) glagol 'haben' glasi 'haben'."
      }
    ]
  },
  {
    id: "gram-a1-3",
    title: "Negacija sa 'nicht' i 'kein'",
    description: "Nauči kada koristiti 'nicht' a kada 'kein'.",
    type: "grammar",
    difficulty: "A1",
    xpReward: 55,
    estimatedTime: 6,
    questions: [
      {
        id: "q1",
        text: "Ich habe ___ Geld.",
        options: ["nicht", "kein", "keine", "keinen"],
        correctAnswer: "kein",
        explanation: "'Kein' se koristi sa imenicama (das Geld → kein Geld)."
      },
      {
        id: "q2",
        text: "Das ist ___ gut.",
        options: ["nicht", "kein", "keine", "keinen"],
        correctAnswer: "nicht",
        explanation: "'Nicht' se koristi sa pridevima i glagolima."
      },
      {
        id: "q3",
        text: "Ich habe ___ Zeit.",
        options: ["nicht", "kein", "keine", "keinen"],
        correctAnswer: "keine",
        explanation: "Die Zeit (ženski rod) → keine Zeit."
      }
    ]
  },
  {
    id: "gram-a2-2",
    title: "Modalní glagoli (können, müssen, wollen)",
    description: "Vežbaj upotrebu modalnih glagola.",
    type: "grammar",
    difficulty: "A2",
    xpReward: 80,
    estimatedTime: 8,
    questions: [
      {
        id: "q1",
        text: "Ich ___ Deutsch sprechen.",
        options: ["kann", "kannst", "können", "könnt"],
        correctAnswer: "kann",
        explanation: "Können = moći. Ich kann = ja mogu."
      },
      {
        id: "q2",
        text: "Du ___ deine Hausaufgaben machen.",
        options: ["muss", "musst", "müssen", "müsst"],
        correctAnswer: "musst",
        explanation: "Müssen = morati. Du musst = ti moraš."
      },
      {
        id: "q3",
        text: "Wir ___ ins Kino gehen.",
        options: ["will", "willst", "wollt", "wollen"],
        correctAnswer: "wollen",
        explanation: "Wollen = hteti. Wir wollen = mi hoćemo."
      }
    ]
  },
  {
    id: "gram-a2-3",
    title: "Prepteritum osnovnih glagola",
    description: "Drugo prošlo vreme - Präteritum.",
    type: "grammar",
    difficulty: "A2",
    xpReward: 85,
    estimatedTime: 10,
    questions: [
      {
        id: "q1",
        text: "Ich ___ gestern krank. (sein)",
        options: ["war", "waren", "warst", "wart"],
        correctAnswer: "war",
        explanation: "Präteritum von sein: ich war (ja sam bio/bila)."
      },
      {
        id: "q2",
        text: "Wir ___ keine Zeit. (haben)",
        options: ["hatte", "hatten", "hattest", "hattet"],
        correctAnswer: "hatten",
        explanation: "Präteritum von haben: wir hatten (mi smo imali)."
      },
      {
        id: "q3",
        text: "Sie ___ nach Deutschland. (fahren)",
        options: ["fuhr", "fuhren", "fuhrst", "fuhrt"],
        correctAnswer: "fuhr",
        explanation: "Präteritum von fahren: sie fuhr (ona je vozila/išla)."
      }
    ]
  },
  {
    id: "gram-b1-2",
    title: "Pasiv u prezentu",
    description: "Nauči kako se gradi pasivna rečenica.",
    type: "grammar",
    difficulty: "B1",
    xpReward: 110,
    estimatedTime: 12,
    questions: [
      {
        id: "q1",
        text: "Das Haus ___ gebaut. (biti)",
        options: ["wird", "werden", "wurde", "worden"],
        correctAnswer: "wird",
        explanation: "Pasiv prezent: werden + Partizip II. Das Haus wird gebaut = Kuća se gradi."
      },
      {
        id: "q2",
        text: "Die Autos ___ repariert.",
        options: ["wird", "werden", "wurde", "wurden"],
        correctAnswer: "werden",
        explanation: "Množina: Die Autos werden repariert = Automobili se popravljaju."
      },
      {
        id: "q3",
        text: "Der Brief ___ geschrieben.",
        options: ["wird", "werden", "wurde", "worden"],
        correctAnswer: "wird",
        explanation: "Der Brief wird geschrieben = Pismo se piše."
      }
    ]
  },
  {
    id: "gram-b1-3",
    title: "Genitiv - posesivni padež",
    description: "Vežbaj upotrebu genitiva.",
    type: "grammar",
    difficulty: "B1",
    xpReward: 105,
    estimatedTime: 10,
    questions: [
      {
        id: "q1",
        text: "Das ist das Auto ___ Vaters. (moj)",
        options: ["meines", "meinem", "meinen", "mein"],
        correctAnswer: "meines",
        explanation: "Genitiv muškog roda: des/eines/meines Vaters."
      },
      {
        id: "q2",
        text: "Das Buch ___ Lehrerin liegt hier.",
        options: ["des", "der", "dem", "den"],
        correctAnswer: "der",
        explanation: "Genitiv ženskog roda: der Lehrerin."
      },
      {
        id: "q3",
        text: "Die Farbe ___ Hauses ist blau.",
        options: ["des", "der", "dem", "den"],
        correctAnswer: "des",
        explanation: "Genitiv srednjeg roda: des Hauses."
      }
    ]
  },
  {
    id: "gram-b2-1",
    title: "Konjunktiv II - Želje i uslovi",
    description: "Izražavanje nerealnih želja i uslova.",
    type: "grammar",
    difficulty: "B2",
    xpReward: 130,
    estimatedTime: 12,
    questions: [
      {
        id: "q1",
        text: "Wenn ich Zeit ___, würde ich kommen. (imati)",
        options: ["hätte", "habe", "hatte", "haben"],
        correctAnswer: "hätte",
        explanation: "Konjunktiv II od haben: hätte (kada bih imao)."
      },
      {
        id: "q2",
        text: "Wenn ich du ___, würde ich das nicht machen. (biti)",
        options: ["wäre", "bin", "war", "sein"],
        correctAnswer: "wäre",
        explanation: "Konjunktiv II od sein: wäre (kada bih bio)."
      },
      {
        id: "q3",
        text: "Ich ___ gern nach Paris fahren. (hteti)",
        options: ["würde", "werde", "wurde", "worden"],
        correctAnswer: "würde",
        explanation: "Würde + infinitiv za izražavanje želja."
      }
    ]
  },
  {
    id: "gram-b2-2",
    title: "Relativne rečenice",
    description: "Gredenje složenih rečenica sa der/die/das.",
    type: "grammar",
    difficulty: "B2",
    xpReward: 125,
    estimatedTime: 13,
    questions: [
      {
        id: "q1",
        text: "Der Mann, ___ dort steht, ist mein Lehrer.",
        options: ["der", "den", "dem", "dessen"],
        correctAnswer: "der",
        explanation: "Relativna zamenica u nominativu: der Mann, der..."
      },
      {
        id: "q2",
        text: "Das Buch, ___ ich gelesen habe, war gut.",
        options: ["das", "den", "dem", "dessen"],
        correctAnswer: "das",
        explanation: "Relativna zamenica akuzativ: das Buch, das ich gelesen habe."
      },
      {
        id: "q3",
        text: "Die Frau, ___ ich geholfen habe, ist nett.",
        options: ["der", "die", "dem", "deren"],
        correctAnswer: "der",
        explanation: "Helfen + dativ: die Frau, der ich geholfen habe."
      }
    ]
  },
  {
    id: "gram-c1-2",
    title: "Particip I kao pridev",
    description: "Građenje prideva od participa I.",
    type: "grammar",
    difficulty: "C1",
    xpReward: 155,
    estimatedTime: 14,
    questions: [
      {
        id: "q1",
        text: "Das ___ Kind weint. (plakati)",
        options: ["weinende", "weinendes", "geweint", "weint"],
        correctAnswer: "weinende",
        explanation: "Particip I: weinen → weinend + pridevski nastavak = weinende."
      },
      {
        id: "q2",
        text: "Die ___ Sonne ist schön. (sijati)",
        options: ["scheinende", "scheinendes", "geschienen", "scheint"],
        correctAnswer: "scheinende",
        explanation: "Scheinen → scheinend → scheinende Sonne."
      }
    ]
  },

  // ==========================================
  // DODATNE LISTENING VJEŽBE
  // ==========================================
  {
    id: "list-a1-2",
    title: "U hotelu",
    description: "Razumevanje jednostavnog dijaloga na recepciji.",
    type: "listening",
    difficulty: "A1",
    xpReward: 55,
    estimatedTime: 5,
    questions: [
      {
        id: "q1",
        text: "Koliko noći gost ostaje u hotelu?",
        options: ["Dve noći", "Tri noći", "Jednu noć", "Četiri noći"],
        correctAnswer: "Dve noći",
        explanation: "Gost kaže: 'Ich möchte zwei Nächte bleiben'."
      },
      {
        id: "q2",
        text: "Šta je uključeno u cenu?",
        options: ["Doručak", "Ručak", "Večera", "Sve obroci"],
        correctAnswer: "Doručak",
        explanation: "Recepcioner kaže: 'Das Frühstück ist im Preis inbegriffen'."
      }
    ]
  },
  {
    id: "list-a2-1",
    title: "Vremensku prognozu",
    description: "Slušanje i razumevanje vremenske prognoze.",
    type: "listening",
    difficulty: "A2",
    xpReward: 75,
    estimatedTime: 7,
    questions: [
      {
        id: "q1",
        text: "Kakvo će vreme biti sutra?",
        options: ["Sunčano", "Kišovito", "Snežno", "Oblačno"],
        correctAnswer: "Kišovito",
        explanation: "Prognoza kaže: 'Morgen wird es regnen'."
      },
      {
        id: "q2",
        text: "Kolika će biti temperatura?",
        options: ["15 stepeni", "20 stepeni", "10 stepeni", "25 stepeni"],
        correctAnswer: "15 stepeni",
        explanation: "Temperatura će biti oko 15 stepeni."
      }
    ]
  },
  {
    id: "list-b1-1",
    title: "Radio intervju",
    description: "Razumevanje intervjua sa poznatom osobom.",
    type: "listening",
    difficulty: "B1",
    xpReward: 105,
    estimatedTime: 10,
    questions: [
      {
        id: "q1",
        text: "Čime se bavi osoba u intervjuu?",
        options: ["Muzikom", "Sportom", "Glumom", "Pisanjem"],
        correctAnswer: "Muzikom",
        explanation: "Osoba kaže: 'Ich bin Musiker von Beruf'."
      },
      {
        id: "q2",
        text: "Kad počinje turneja?",
        options: ["Sledeće nedelje", "Sledećeg meseca", "Za dva meseca", "Za godinu dana"],
        correctAnswer: "Sledećeg meseca",
        explanation: "Turneja počinje sledećeg meseca."
      }
    ]
  },

  // ==========================================
  // DODATNE VJEŽBE ZA B2 NIVO
  // ==========================================
  {
    id: "gram-b2-3",
    title: "Partizip I i II kao pridevi",
    description: "Kompleksne pridevske konstrukcije.",
    type: "grammar",
    difficulty: "B2",
    xpReward: 135,
    estimatedTime: 14,
    questions: [
      {
        id: "q1",
        text: "Das ___ Kind braucht Hilfe. (plakati - Partizip I)",
        options: ["weinende", "geweinte", "weinend", "wein"],
        correctAnswer: "weinende",
        explanation: "Partizip I (aktivna, trenutna radnja): weinen → weinend + pridevski nastavak."
      },
      {
        id: "q2",
        text: "Das ___ Buch liegt auf dem Tisch. (pročitati - Partizip II)",
        options: ["gelesene", "lesende", "gelesen", "lesen"],
        correctAnswer: "gelesene",
        explanation: "Partizip II (završena radnja): lesen → gelesen + pridevski nastavak."
      },
      {
        id: "q3",
        text: "Die ___ Sonne erwärmt die Erde. (sijati)",
        options: ["scheinende", "geschienene", "scheinen", "scheint"],
        correctAnswer: "scheinende",
        explanation: "Partizip I za aktivnu radnju: scheinen → scheinend → scheinende."
      }
    ]
  },
  {
    id: "writ-b2-2",
    title: "Motivaciono pismo",
    description: "Napiši motivaciono pismo za posao.",
    type: "writing",
    difficulty: "B2",
    xpReward: 160,
    estimatedTime: 25,
    questions: [
      {
        id: "q1",
        text: "Napiši motivaciono pismo (150-200 reči) za poziciju softverskog inženjera. Objasni svoju motivaciju, kvalifikacije i zašto si idealan kandidat.",
        explanation: "Koristi formalni stil, pasiv, složene rečenice i akademski vokabular. Započni sa 'Sehr geehrte Damen und Herren' i završi sa 'Mit freundlichen Grüßen'."
      }
    ]
  },
  {
    id: "list-b2-2",
    title: "Poslovni sastanak",
    description: "Razumevanje diskusije na poslovnom sastanku.",
    type: "listening",
    difficulty: "B2",
    xpReward: 130,
    estimatedTime: 12,
    questions: [
      {
        id: "q1",
        text: "Šta je glavni problem o kojem se raspravlja?",
        options: ["Budžet projekta", "Nedostatak osoblja", "Tehnički problemi", "Loša komunikacija"],
        correctAnswer: "Budžet projekta",
        explanation: "Učesnici diskutuju o prekoračenju budžeta."
      },
      {
        id: "q2",
        text: "Koje rešenje predlaže menadžer?",
        options: ["Smanjiti troškove", "Zaposliti više ljudi", "Odložiti projekat", "Tražiti dodatno finansiranje"],
        correctAnswer: "Tražiti dodatno finansiranje",
        explanation: "Menadžer predlaže traženje dodatnih sredstava."
      }
    ]
  },

  // ==========================================
  // DODATNE VJEŽBE ZA C1 NIVO
  // ==========================================
  {
    id: "gram-c1-3",
    title: "Nominalizacija i formalni stil",
    description: "Pretvaranje rečenica u nominalstil.",
    type: "grammar",
    difficulty: "C1",
    xpReward: 165,
    estimatedTime: 16,
    questions: [
      {
        id: "q1",
        text: "Pretvori u nominalstil: 'Nachdem er das Projekt beendet hatte, bekam er eine Beförderung.'",
        options: ["Nach Beendigung des Projekts bekam er eine Beförderung", "Das Projekt beendet, Beförderung bekommen", "Er beendete und befördert", "Projekt Ende Beförderung"],
        correctAnswer: "Nach Beendigung des Projekts bekam er eine Beförderung",
        explanation: "Nominalizacija je tipična za akademski i poslovni stil. Nachdem er beendet hatte → Nach Beendigung."
      },
      {
        id: "q2",
        text: "Koji stil je formalniji?",
        options: ["Aufgrund der Tatsache", "Weil", "Da", "Denn"],
        correctAnswer: "Aufgrund der Tatsache",
        explanation: "Predloške konstrukcije su formalnije od veznika."
      }
    ]
  },
  {
    id: "writ-c1-1",
    title: "Akademski esej",
    description: "Napiši argumentativni esej o društvenoj temi.",
    type: "writing",
    difficulty: "C1",
    xpReward: 180,
    estimatedTime: 30,
    questions: [
      {
        id: "q1",
        text: "Napiši esej (250-300 reči) o prednostima i manama društvenih mreža. Koristi argumente, primere i akademski stil sa nominalizacijom.",
        explanation: "Struktura: Uvod sa tezom, glavni deo sa argumentima za i protiv, zaključak sa tvojim stavom. Koristi formalne izraze kao 'einerseits...andererseits', 'diesbezüglich', 'infolgedessen'."
      }
    ]
  },
  {
    id: "list-c1-1",
    title: "Univerzitetsko predavanje",
    description: "Razumevanje akademskog predavanja o filozofiji.",
    type: "listening",
    difficulty: "C1",
    xpReward: 160,
    estimatedTime: 15,
    questions: [
      {
        id: "q1",
        text: "Koja je glavna tema predavanja?",
        options: ["Kantova kritika čistog uma", "Nietzscheova filozofija", "Hegelova dijalektika", "Schopenhauer i volja"],
        correctAnswer: "Kantova kritika čistog uma",
        explanation: "Predavač analizira Kantovu epistemologiju."
      },
      {
        id: "q2",
        text: "Šta je po Kantu 'Ding an sich'?",
        options: ["Stvar po sebi - nešto što ne možemo spoznati", "Materijalna realnost", "Ljudsko iskustvo", "Božanska suština"],
        correctAnswer: "Stvar po sebi - nešto što ne možemo spoznati",
        explanation: "'Ding an sich' je ono što leži izvan naše percepcije."
      }
    ]
  },

  // ==========================================
  // DODATNE VJEŽBE ZA C2 NIVO
  // ==========================================
  {
    id: "gram-c2-1",
    title: "Nijansirana upotreba modalnih partikula",
    description: "Razumevanje suptilnih značenja partikula.",
    type: "grammar",
    difficulty: "C2",
    xpReward: 200,
    estimatedTime: 18,
    questions: [
      {
        id: "q1",
        text: "Koja partikula izražava iznenadjenje? 'Du bist ___ gekommen!'",
        options: ["ja", "doch", "mal", "wohl"],
        correctAnswer: "ja",
        explanation: "JA (naglašeno) izražava iznenadjenje: 'Du bist JA gekommen!' = 'Pa ti si došao!' (iznenađenje)"
      },
      {
        id: "q2",
        text: "Šta znači 'doch' u: 'Das ist doch nicht wahr!'",
        options: ["Pojačava negaciju - sigurno nije istina", "Pitanje", "Nesigurnost", "Učtivist"],
        correctAnswer: "Pojačava negaciju - sigurno nije istina",
        explanation: "DOCH pojačava tvrdnju ili negaciju."
      },
      {
        id: "q3",
        text: "Razlika: 'Komm!' vs 'Komm mal!'",
        options: ["Mal čini zahtev blaži i prijateljski", "Mal znači brzo", "Mal znači polako", "Nema razlike"],
        correctAnswer: "Mal čini zahtev blaži i prijateljski",
        explanation: "MAL omekšava imperativ i čini ga prijatnijim."
      }
    ]
  },
  {
    id: "writ-c2-1",
    title: "Književna kritika",
    description: "Analiza književnog dela sa stilskim figurama.",
    type: "writing",
    difficulty: "C2",
    xpReward: 220,
    estimatedTime: 40,
    questions: [
      {
        id: "q1",
        text: "Napiši književnu analizu (300-400 reči) Kafkine 'Preobraćaja'. Analiziraj simboliku, narativnu perspektivu, egzistencijalne teme i uporedi sa drugim Kafkinim delima. Koristi književni metajezik.",
        explanation: "Očekuje se duboka analiza sa upotrebom termina kao: die Allegorie, die Entfremdung, der Erzählperspektive, die Kafka'sche Bürokratie, das Absurde, die Metamorphose. Argumentuj sa citatima."
      }
    ]
  },
  {
    id: "list-c2-1",
    title: "Filozofska debata",
    description: "Razumevanje kompleksne filozofske diskusije.",
    type: "listening",
    difficulty: "C2",
    xpReward: 200,
    estimatedTime: 20,
    questions: [
      {
        id: "q1",
        text: "Koji filozofski pravac zastupa prvi debatant?",
        options: ["Egzistencijalizam", "Racio nalizam", "Empirizam", "Pragmatizam"],
        correctAnswer: "Egzistencijalizam",
        explanation: "Debatant naglašava individualnu slobodu i autentičnost."
      },
      {
        id: "q2",
        text: "Koji je centralni argument protiv determinizma?",
        options: ["Slobodna volja je fenomenološki evidentna", "Nauka to ne može dokazati", "Bog postoji", "Društvo to zahteva"],
        correctAnswer: "Slobodna volja je fenomenološki evidentna",
        explanation: "Argument se zasniva na neposrednom iskustvu slobode."
      }
    ]
  },
  {
    id: "pron-c2-2",
    title: "Dijalekti i regionalni akcenti",
    description: "Prepoznavanje i razumevanje nemačkih dijalekata.",
    type: "pronunciation",
    difficulty: "C2",
    xpReward: 210,
    estimatedTime: 15,
    questions: [
      {
        id: "q1",
        text: "Bavarisch: 'Grüß Gott! I mog di.'",
        explanation: "Bavarski: 'Bog!' + 'Ich mag dich' = 'Volim te'. Prepoznaj ch→g, ich→i."
      },
      {
        id: "q2",
        text: "Schwäbisch: 'Isch han koi Zeit.'",
        explanation: "Švapski: 'Ich habe keine Zeit'. Prepoznaj ich→isch, habe→han, keine→koi."
      },
      {
        id: "q3",
        text: "Berlinerisch: 'Ick hab keene Ahnung, wa?'",
        explanation: "Berlinski: Ich→Ick, keine→keene, g→j zvuk. 'Wa?' = 'oder?' (zar ne?)"
      }
    ]
  }
]

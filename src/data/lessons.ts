export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2"

export type ExerciseType = 
  | "vocabulary" 
  | "multiple-choice" 
  | "fill-blank" 
  | "translation" 
  | "listening" 
  | "matching"

export interface Exercise {
  id: string
  type: ExerciseType
  question: string
  questionDe?: string
  options?: string[]
  correctAnswer: string | string[]
  hint?: string
  explanation: string
  audioText?: string // For listening exercises
  pairs?: { de: string; sr: string }[] // For matching exercises
}

export interface Lesson {
  id: string
  title: string
  titleDe: string
  description: string
  level: Level
  unit: number
  order: number
  duration: number // minutes
  xpReward: number
  isLocked: boolean
  isCompleted: boolean
  progress: number
  topics: string[]
  exercises: Exercise[]
}

export const lessons: Lesson[] = [
  // ==========================================
  // A1 LEVEL - POČETNI (12 Lekcija)
  // ==========================================
  {
    id: "a1-1",
    title: "Pozdravi i predstavljanje",
    titleDe: "Begrüßungen und Vorstellung",
    description: "Nauči kako da se predstaviš, pozdraviš i kažeš odakle dolaziš.",
    level: "A1",
    unit: 1,
    order: 1,
    duration: 15,
    xpReward: 50,
    isLocked: false,
    isCompleted: false,
    progress: 0,
    topics: ["Pozdravi", "Glagol sein", "Lične zamenice", "Zemlje i jezici"],
    exercises: [
      {
        id: "a1-1-ex1",
        type: "matching",
        question: "Poveži nemačke pozdrave sa srpskim prevodom.",
        pairs: [
          { de: "Guten Morgen", sr: "Dobro jutro" },
          { de: "Guten Tag", sr: "Dobar dan" },
          { de: "Gute Nacht", sr: "Laku noć" },
          { de: "Hallo", sr: "Zdravo" },
          { de: "Auf Wiedersehen", sr: "Doviđenja" },
          { de: "Tschüss", sr: "Ćao" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ovo su osnovni pozdravi. 'Tschüss' je neformalno, a 'Auf Wiedersehen' formalno."
      },
      {
        id: "a1-1-ex2",
        type: "multiple-choice",
        question: "Kako se kaže 'Ja sam Marko'?",
        options: ["Ich bin Marko", "Du bist Marko", "Er ist Marko", "Wir sind Marko"],
        correctAnswer: "Ich bin Marko",
        explanation: "Glagol 'sein' (biti) u 1. licu jednine glasi 'bin'."
      },
      {
        id: "a1-1-ex3",
        type: "fill-blank",
        question: "Ich ___ aus Serbien. (dolaziti)",
        correctAnswer: "komme",
        hint: "Glagol kommen",
        explanation: "Ich komme (ja dolazim). Nastavak za 1. lice je -e."
      },
      {
        id: "a1-1-ex4",
        type: "multiple-choice",
        question: "Koji oblik glagola 'sein' ide uz 'du'?",
        options: ["bist", "bin", "ist", "sind"],
        correctAnswer: "bist",
        explanation: "Du bist (ti si). Glagol 'sein' je nepravilan."
      },
      {
        id: "a1-1-ex5",
        type: "translation",
        question: "Prevedi na nemački: 'Odakle dolaziš?'",
        correctAnswer: ["Woher kommst du?", "Woher kommst du"],
        explanation: "Woher = odakle, kommst du = dolaziš ti."
      },
      {
        id: "a1-1-ex6",
        type: "fill-blank",
        question: "Wie ___ Sie? (zvati se - formalno)",
        correctAnswer: "heißen",
        hint: "Glagol heißen",
        explanation: "Wie heißen Sie? = Kako se zovete? (formalno obraćanje)"
      },
      {
        id: "a1-1-ex7",
        type: "multiple-choice",
        question: "Kako se formalno oslovljava gospođa?",
        options: ["Frau", "Herr", "Fräulein", "Dame"],
        correctAnswer: "Frau",
        explanation: "Frau = gospođa. Herr = gospodin."
      },
      {
        id: "a1-1-ex8",
        type: "matching",
        question: "Poveži lične zamenice sa glagolom sein.",
        pairs: [
          { de: "ich", sr: "bin" },
          { de: "du", sr: "bist" },
          { de: "er/sie/es", sr: "ist" },
          { de: "wir", sr: "sind" },
          { de: "ihr", sr: "seid" },
          { de: "sie/Sie", sr: "sind" }
        ],
        correctAnswer: "matching-check",
        explanation: "Kompletna konjugacija glagola 'sein' (biti)."
      },
      {
        id: "a1-1-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Abend, ich heiße Anna.",
        options: ["Dobro veče, zovem se Ana.", "Dobro jutro, zovem se Ana.", "Dobar dan, zovem se Ana.", "Laku noć, zovem se Ana."],
        correctAnswer: "Dobro veče, zovem se Ana.",
        explanation: "Guten Abend = Dobro veče. Ich heiße = Zovem se."
      },
      {
        id: "a1-1-ex10",
        type: "fill-blank",
        question: "Er ___ Lehrer. (biti)",
        correctAnswer: "ist",
        explanation: "Er ist = On je. Treće lice jednine od 'sein'."
      }
    ]
  },
  {
    id: "a1-2",
    title: "Brojevi i boje",
    titleDe: "Zahlen und Farben",
    description: "Brojevi od 0 do 100, boje i cene.",
    level: "A1",
    unit: 1,
    order: 2,
    duration: 20,
    xpReward: 50,
    isLocked: false,
    isCompleted: false,
    progress: 0,
    topics: ["Brojevi 0-100", "Boje", "Koliko košta?", "Valuta Euro"],
    exercises: [
      {
        id: "a1-2-ex1",
        type: "matching",
        question: "Poveži brojeve.",
        pairs: [
          { de: "eins", sr: "jedan" },
          { de: "zwei", sr: "dva" },
          { de: "drei", sr: "tri" },
          { de: "zehn", sr: "deset" },
          { de: "zwanzig", sr: "dvadeset" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni brojevi."
      },
      {
        id: "a1-2-ex2",
        type: "multiple-choice",
        question: "Koje je boje trava?",
        questionDe: "Welche Farbe hat das Gras?",
        options: ["Grün", "Blau", "Rot", "Gelb"],
        correctAnswer: "Grün",
        explanation: "Gras (trava) je zelena (grün)."
      },
      {
        id: "a1-2-ex3",
        type: "matching",
        question: "Poveži boje.",
        pairs: [
          { de: "rot", sr: "crveno" },
          { de: "blau", sr: "plavo" },
          { de: "gelb", sr: "žuto" },
          { de: "schwarz", sr: "crno" },
          { de: "weiß", sr: "belo" },
          { de: "grau", sr: "sivo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovne boje u nemačkom jeziku."
      },
      {
        id: "a1-2-ex4",
        type: "fill-blank",
        question: "Fünf plus fünf ist ___.",
        correctAnswer: "zehn",
        hint: "5 + 5 = ?",
        explanation: "Zehn = deset. Vežbaj računanje na nemačkom!"
      },
      {
        id: "a1-2-ex5",
        type: "multiple-choice",
        question: "Wie viel kostet das? Das kostet ___ Euro.",
        options: ["fünfzehn", "fuffzehn", "funfzehn", "fünfzehen"],
        correctAnswer: "fünfzehn",
        explanation: "Fünfzehn = 15. Pazite na umlaut (ü)."
      },
      {
        id: "a1-2-ex6",
        type: "translation",
        question: "Prevedi: 'Imam dvadeset pet godina.'",
        correctAnswer: ["Ich bin fünfundzwanzig Jahre alt", "Ich bin fünfundzwanzig Jahre alt."],
        explanation: "U nemačkom se kaže 'pet-i-dvadeset' (fünfundzwanzig)."
      },
      {
        id: "a1-2-ex7",
        type: "matching",
        question: "Poveži brojeve od 10 do 100.",
        pairs: [
          { de: "dreißig", sr: "trideset" },
          { de: "vierzig", sr: "četrdeset" },
          { de: "fünfzig", sr: "pedeset" },
          { de: "sechzig", sr: "šezdeset" },
          { de: "hundert", sr: "sto" }
        ],
        correctAnswer: "matching-check",
        explanation: "Desetice se grade nastavkom -zig (osim dreißig)."
      },
      {
        id: "a1-2-ex8",
        type: "fill-blank",
        question: "Die Tomate ist ___. (crvena)",
        correctAnswer: "rot",
        explanation: "Rot = crveno. Paradajz je crven."
      },
      {
        id: "a1-2-ex9",
        type: "multiple-choice",
        question: "Koliko je siebzehn?",
        options: ["17", "7", "70", "27"],
        correctAnswer: "17",
        explanation: "Siebzehn = 17. Sieben = 7, -zehn = +10."
      },
      {
        id: "a1-2-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Das kostet neunundvierzig Euro.",
        options: ["To košta 49 evra.", "To košta 94 evra.", "To košta 19 evra.", "To košta 40 evra."],
        correctAnswer: "To košta 49 evra.",
        explanation: "Neunundvierzig = devet-i-četrdeset = 49."
      }
    ]
  },
  {
    id: "a1-3",
    title: "Porodica",
    titleDe: "Die Familie",
    description: "Članovi uže i šire porodice, prisvojne zamenice.",
    level: "A1",
    unit: 2,
    order: 3,
    duration: 25,
    xpReward: 60,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Otac, majka, deca", "Brat, sestra", "Prisvojne zamenice (mein, dein)"],
    exercises: [
      {
        id: "a1-3-ex1",
        type: "matching",
        question: "Poveži parove.",
        pairs: [
          { de: "der Vater", sr: "otac" },
          { de: "die Mutter", sr: "majka" },
          { de: "der Sohn", sr: "sin" },
          { de: "die Tochter", sr: "ćerka" },
          { de: "die Oma", sr: "baka" },
          { de: "der Opa", sr: "deka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Članovi porodice."
      },
      {
        id: "a1-3-ex2",
        type: "multiple-choice",
        question: "Wer ist der Bruder von meinem Vater?",
        options: ["Mein Onkel", "Meine Tante", "Mein Opa", "Mein Cousin"],
        correctAnswer: "Mein Onkel",
        explanation: "Brat mog oca je moj stric (Onkel)."
      },
      {
        id: "a1-3-ex3",
        type: "matching",
        question: "Poveži ostale članove porodice.",
        pairs: [
          { de: "der Bruder", sr: "brat" },
          { de: "die Schwester", sr: "sestra" },
          { de: "der Onkel", sr: "ujak/stric" },
          { de: "die Tante", sr: "tetka/strina" },
          { de: "der Cousin", sr: "rođak" },
          { de: "die Cousine", sr: "rođaka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Šira porodica - Onkel može biti ujak ili stric."
      },
      {
        id: "a1-3-ex4",
        type: "fill-blank",
        question: "Das ist ___ Mutter. (moja)",
        correctAnswer: "meine",
        hint: "Prisvojna zamenica za ženski rod",
        explanation: "Meine = moja. Mutter je ženskog roda (die Mutter)."
      },
      {
        id: "a1-3-ex5",
        type: "multiple-choice",
        question: "Koji je ispravan oblik: 'Tvoj otac'?",
        options: ["Dein Vater", "Deine Vater", "Deinen Vater", "Deiner Vater"],
        correctAnswer: "Dein Vater",
        explanation: "Vater je muškog roda, pa je dein (bez nastavka) u nominativu."
      },
      {
        id: "a1-3-ex6",
        type: "translation",
        question: "Prevedi: 'Imam jednog brata i dve sestre.'",
        correctAnswer: ["Ich habe einen Bruder und zwei Schwestern", "Ich habe einen Bruder und zwei Schwestern."],
        explanation: "Einen Bruder (akuzativ m.r.), zwei Schwestern (množina)."
      },
      {
        id: "a1-3-ex7",
        type: "fill-blank",
        question: "Wie alt ist ___ Schwester? (tvoja)",
        correctAnswer: "deine",
        explanation: "Deine = tvoja. Schwester je ženskog roda."
      },
      {
        id: "a1-3-ex8",
        type: "multiple-choice",
        question: "Die Eltern = ?",
        options: ["Roditelji", "Deca", "Bake i deke", "Rođaci"],
        correctAnswer: "Roditelji",
        explanation: "Die Eltern = roditelji (množina). Mutter + Vater = Eltern."
      },
      {
        id: "a1-3-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Meine Familie ist groß. Ich habe drei Geschwister.",
        options: ["Moja porodica je velika. Imam troje braće/sestara.", "Moja porodica je mala. Imam troje dece.", "Moja kuća je velika. Imam troje pasa.", "Moja porodica je lepa. Imam troje prijatelja."],
        correctAnswer: "Moja porodica je velika. Imam troje braće/sestara.",
        explanation: "Geschwister = braća i sestre (zajedno)."
      },
      {
        id: "a1-3-ex10",
        type: "fill-blank",
        question: "Das ist ___ Kind. (naše)",
        correctAnswer: "unser",
        hint: "Prisvojna zamenica za 'wir'",
        explanation: "Unser Kind = naše dete. Kind je srednjeg roda (das Kind)."
      }
    ]
  },
  {
    id: "a1-4",
    title: "Hrana i piće",
    titleDe: "Essen und Trinken",
    description: "Namirnice, obroci, naručivanje u restoranu.",
    level: "A1",
    unit: 2,
    order: 4,
    duration: 30,
    xpReward: 70,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Doručak, ručak, večera", "Voće i povrće", "Glagol essen", "Akuzativ (osnove)"],
    exercises: [
      {
        id: "a1-4-ex1",
        type: "fill-blank",
        question: "Ich ___ eine Pizza. (želeti)",
        correctAnswer: "möchte",
        explanation: "Möchte (želeo bih) je ljubazan način da se nešto naruči."
      },
      {
        id: "a1-4-ex2",
        type: "matching",
        question: "Poveži namirnice.",
        pairs: [
          { de: "das Brot", sr: "hleb" },
          { de: "das Wasser", sr: "voda" },
          { de: "der Käse", sr: "sir" },
          { de: "der Apfel", sr: "jabuka" },
          { de: "die Milch", sr: "mleko" },
          { de: "das Ei", sr: "jaje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovne namirnice."
      },
      {
        id: "a1-4-ex3",
        type: "matching",
        question: "Poveži obrke.",
        pairs: [
          { de: "das Frühstück", sr: "doručak" },
          { de: "das Mittagessen", sr: "ručak" },
          { de: "das Abendessen", sr: "večera" },
          { de: "der Snack", sr: "užina" }
        ],
        correctAnswer: "matching-check",
        explanation: "Obroci u toku dana."
      },
      {
        id: "a1-4-ex4",
        type: "multiple-choice",
        question: "Šta se pije uz doručak?",
        questionDe: "Was trinkt man zum Frühstück?",
        options: ["Kaffee oder Tee", "Bier", "Wein", "Schnaps"],
        correctAnswer: "Kaffee oder Tee",
        explanation: "Kaffee = kafa, Tee = čaj. Tipična pića za doručak."
      },
      {
        id: "a1-4-ex5",
        type: "fill-blank",
        question: "Ich ___ gern Fleisch. (jesti)",
        correctAnswer: "esse",
        hint: "Glagol essen u 1. licu",
        explanation: "Ich esse = ja jedem. Glagol essen je nepravilan (e->i u 2. i 3. licu)."
      },
      {
        id: "a1-4-ex6",
        type: "translation",
        question: "Prevedi: 'Ja bih jednu kafu, molim.'",
        correctAnswer: ["Ich möchte einen Kaffee, bitte", "Ich möchte einen Kaffee bitte", "Einen Kaffee, bitte"],
        explanation: "Einen Kaffee = jednu kafu (akuzativ). Bitte = molim."
      },
      {
        id: "a1-4-ex7",
        type: "matching",
        question: "Poveži voće i povrće.",
        pairs: [
          { de: "die Banane", sr: "banana" },
          { de: "die Orange", sr: "pomorandža" },
          { de: "die Tomate", sr: "paradajz" },
          { de: "die Kartoffel", sr: "krompir" },
          { de: "die Gurke", sr: "krastavac" }
        ],
        correctAnswer: "matching-check",
        explanation: "Voće i povrće - sve su ženskog roda (die)!"
      },
      {
        id: "a1-4-ex8",
        type: "multiple-choice",
        question: "Was sagt der Kellner?",
        options: ["Was möchten Sie bestellen?", "Wo wohnen Sie?", "Wie alt sind Sie?", "Woher kommen Sie?"],
        correctAnswer: "Was möchten Sie bestellen?",
        explanation: "Konobar pita: 'Šta biste želeli da naručite?'"
      },
      {
        id: "a1-4-ex9",
        type: "fill-blank",
        question: "Die Suppe ___ lecker. (biti)",
        correctAnswer: "ist",
        explanation: "Die Suppe ist lecker = Supa je ukusna."
      },
      {
        id: "a1-4-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich nehme das Schnitzel mit Pommes und einen Salat.",
        options: ["Uzimam šniclu sa pomfritom i salatu.", "Uzimam picu sa sirom.", "Uzimam supu sa hlebom.", "Uzimam ribu sa krompirom."],
        correctAnswer: "Uzimam šniclu sa pomfritom i salatu.",
        explanation: "Schnitzel = šnicla, Pommes = pomfrit, Salat = salata."
      }
    ]
  },
  {
    id: "a1-5",
    title: "Svakodnevica",
    titleDe: "Der Alltag",
    description: "Dnevna rutina, dani u nedelji i satnica.",
    level: "A1",
    unit: 3,
    order: 5,
    duration: 30,
    xpReward: 70,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Dani u nedelji", "Satnica (zvanična i nezvanična)", "Razdvojivi glagoli (aufstehen, fernsehen)"],
    exercises: [
      {
        id: "a1-5-ex1",
        type: "fill-blank",
        question: "Ich stehe um 7 Uhr ___. (aufstehen)",
        correctAnswer: "auf",
        explanation: "Kod razdvojivih glagola (aufstehen), prefiks ide na kraj rečenice."
      },
      {
        id: "a1-5-ex2",
        type: "multiple-choice",
        question: "Koji dan dolazi posle ponedeljka (Montag)?",
        options: ["Dienstag", "Mittwoch", "Donnerstag", "Freitag"],
        correctAnswer: "Dienstag",
        explanation: "Montag, Dienstag, Mittwoch..."
      },
      {
        id: "a1-5-ex3",
        type: "matching",
        question: "Poveži dane u nedelji.",
        pairs: [
          { de: "Montag", sr: "ponedeljak" },
          { de: "Dienstag", sr: "utorak" },
          { de: "Mittwoch", sr: "sreda" },
          { de: "Donnerstag", sr: "četvrtak" },
          { de: "Freitag", sr: "petak" },
          { de: "Samstag", sr: "subota" },
          { de: "Sonntag", sr: "nedelja" }
        ],
        correctAnswer: "matching-check",
        explanation: "Svi dani se završavaju na -tag (dan)."
      },
      {
        id: "a1-5-ex4",
        type: "multiple-choice",
        question: "Wie spät ist es? Es ist halb drei.",
        options: ["2:30", "3:30", "2:00", "3:00"],
        correctAnswer: "2:30",
        explanation: "Halb drei = pola TRI = 2:30. U nemačkom se gleda prema sledećem satu!"
      },
      {
        id: "a1-5-ex5",
        type: "fill-blank",
        question: "Ich ___ um 8 Uhr zur Arbeit. (ići)",
        correctAnswer: "gehe",
        explanation: "Ich gehe = ja idem. Glagol gehen."
      },
      {
        id: "a1-5-ex6",
        type: "translation",
        question: "Prevedi: 'Gledam televiziju uveče.'",
        correctAnswer: ["Ich sehe abends fern", "Abends sehe ich fern", "Ich sehe am Abend fern"],
        explanation: "Fernsehen je razdvojivi glagol: ich sehe... fern."
      },
      {
        id: "a1-5-ex7",
        type: "matching",
        question: "Poveži dnevne aktivnosti.",
        pairs: [
          { de: "aufstehen", sr: "ustati" },
          { de: "frühstücken", sr: "doručkovati" },
          { de: "arbeiten", sr: "raditi" },
          { de: "einkaufen", sr: "kupovati" },
          { de: "schlafen", sr: "spavati" }
        ],
        correctAnswer: "matching-check",
        explanation: "Svakodnevne aktivnosti."
      },
      {
        id: "a1-5-ex8",
        type: "multiple-choice",
        question: "Um wie viel Uhr? Es ist Viertel vor zehn.",
        options: ["9:45", "10:15", "9:15", "10:45"],
        correctAnswer: "9:45",
        explanation: "Viertel vor zehn = četvrt DO deset = 9:45."
      },
      {
        id: "a1-5-ex9",
        type: "fill-blank",
        question: "Wann ___ du zur Schule? (ići)",
        correctAnswer: "gehst",
        hint: "Glagol gehen u 2. licu",
        explanation: "Du gehst = ti ideš."
      },
      {
        id: "a1-5-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich stehe um sechs Uhr auf und frühstücke um halb sieben.",
        options: ["Ustajem u 6 i doručkujem u 6:30.", "Ustajem u 7 i doručkujem u 7:30.", "Ustajem u 5 i doručkujem u 5:30.", "Ustajem u 6 i ručam u 6:30."],
        correctAnswer: "Ustajem u 6 i doručkujem u 6:30.",
        explanation: "Um sechs = u 6. Halb sieben = 6:30."
      }
    ]
  },
  {
    id: "a1-6",
    title: "Stanovanje",
    titleDe: "Wohnen",
    description: "Opisivanje stana, nameštaj i prostorije.",
    level: "A1",
    unit: 3,
    order: 6,
    duration: 25,
    xpReward: 60,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Prostorije (Küche, Bad)", "Nameštaj", "Pridevi (groß, klein, schön)"],
    exercises: [
      {
        id: "a1-6-ex1",
        type: "matching",
        question: "Poveži nameštaj.",
        pairs: [
          { de: "der Tisch", sr: "sto" },
          { de: "der Stuhl", sr: "stolica" },
          { de: "das Bett", sr: "krevet" },
          { de: "der Schrank", sr: "ormar" },
          { de: "das Sofa", sr: "kauč" },
          { de: "die Lampe", sr: "lampa" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni komadi nameštaja."
      },
      {
        id: "a1-6-ex2",
        type: "multiple-choice",
        question: "Wo kocht man?",
        options: ["In der Küche", "Im Bad", "Im Schlafzimmer", "Im Flur"],
        correctAnswer: "In der Küche",
        explanation: "Kuva se u kuhinji (Küche)."
      },
      {
        id: "a1-6-ex3",
        type: "matching",
        question: "Poveži prostorije.",
        pairs: [
          { de: "die Küche", sr: "kuhinja" },
          { de: "das Bad", sr: "kupatilo" },
          { de: "das Schlafzimmer", sr: "spavaća soba" },
          { de: "das Wohnzimmer", sr: "dnevna soba" },
          { de: "der Flur", sr: "hodnik" },
          { de: "der Balkon", sr: "balkon" }
        ],
        correctAnswer: "matching-check",
        explanation: "Prostorije u stanu/kući."
      },
      {
        id: "a1-6-ex4",
        type: "fill-blank",
        question: "Das Zimmer ist sehr ___. (veliko)",
        correctAnswer: "groß",
        explanation: "Groß = veliko. Opisujemo prostor."
      },
      {
        id: "a1-6-ex5",
        type: "multiple-choice",
        question: "Wo schläft man?",
        options: ["Im Schlafzimmer", "In der Küche", "Im Keller", "Im Garten"],
        correctAnswer: "Im Schlafzimmer",
        explanation: "Schlafzimmer = spavaća soba (spavati + soba)."
      },
      {
        id: "a1-6-ex6",
        type: "translation",
        question: "Prevedi: 'Moj stan ima tri sobe.'",
        correctAnswer: ["Meine Wohnung hat drei Zimmer", "Meine Wohnung hat drei Zimmer."],
        explanation: "Die Wohnung = stan, das Zimmer = soba."
      },
      {
        id: "a1-6-ex7",
        type: "fill-blank",
        question: "Die Wohnung ist ___ und hell. (lepa)",
        correctAnswer: "schön",
        explanation: "Schön = lepo, hell = svetlo."
      },
      {
        id: "a1-6-ex8",
        type: "matching",
        question: "Poveži prideve.",
        pairs: [
          { de: "groß", sr: "veliko" },
          { de: "klein", sr: "malo" },
          { de: "schön", sr: "lepo" },
          { de: "alt", sr: "staro" },
          { de: "neu", sr: "novo" },
          { de: "teuer", sr: "skupo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pridevi za opisivanje stana."
      },
      {
        id: "a1-6-ex9",
        type: "multiple-choice",
        question: "Die Miete ist 500 Euro. Šta znači 'die Miete'?",
        options: ["Kirija", "Struja", "Voda", "Grejanje"],
        correctAnswer: "Kirija",
        explanation: "Die Miete = kirija, mesečni iznos za stan."
      },
      {
        id: "a1-6-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Meine Wohnung ist klein aber gemütlich. Sie hat zwei Zimmer.",
        options: ["Moj stan je mali ali udoban. Ima dve sobe.", "Moj stan je veliki i lep. Ima tri sobe.", "Moja kuća je stara. Ima četiri sobe.", "Moj stan je nov. Ima jednu sobu."],
        correctAnswer: "Moj stan je mali ali udoban. Ima dve sobe.",
        explanation: "Klein = mali, gemütlich = udoban/prijatan."
      }
    ]
  },
  {
    id: "a1-7",
    title: "Slobodno vreme",
    titleDe: "Freizeit",
    description: "Hobiji, sport, vikend aktivnosti.",
    level: "A1",
    unit: 4,
    order: 7,
    duration: 25,
    xpReward: 65,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Sportovi", "Muzika", "Glagol können (moći/znati)"],
    exercises: [
      {
        id: "a1-7-ex1",
        type: "multiple-choice",
        question: "Ich ___ gut schwimmen. (können)",
        options: ["kann", "könne", "kannst", "könnt"],
        correctAnswer: "kann",
        explanation: "Glagol können u 1. licu jednine je 'kann'."
      },
      {
        id: "a1-7-ex2",
        type: "translation",
        question: "Prevedi: 'Igram fudbal.'",
        correctAnswer: ["Ich spiele Fußball", "Ich spiele Fussball"],
        explanation: "Spielen = igrati."
      },
      {
        id: "a1-7-ex3",
        type: "matching",
        question: "Poveži sportove.",
        pairs: [
          { de: "Fußball", sr: "fudbal" },
          { de: "Basketball", sr: "košarka" },
          { de: "Tennis", sr: "tenis" },
          { de: "Schwimmen", sr: "plivanje" },
          { de: "Radfahren", sr: "biciklizam" },
          { de: "Laufen", sr: "trčanje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Popularni sportovi."
      },
      {
        id: "a1-7-ex4",
        type: "fill-blank",
        question: "Am Wochenende ___ ich gern Musik. (slušati)",
        correctAnswer: "höre",
        explanation: "Ich höre = ja slušam. Hören Musik = slušati muziku."
      },
      {
        id: "a1-7-ex5",
        type: "multiple-choice",
        question: "Was machst du in der Freizeit?",
        options: ["Ich lese Bücher.", "Ich arbeite viel.", "Ich gehe zur Schule.", "Ich mache Hausaufgaben."],
        correctAnswer: "Ich lese Bücher.",
        explanation: "Freizeit = slobodno vreme. Čitanje knjiga je hobi."
      },
      {
        id: "a1-7-ex6",
        type: "matching",
        question: "Poveži hobije.",
        pairs: [
          { de: "lesen", sr: "čitati" },
          { de: "kochen", sr: "kuvati" },
          { de: "tanzen", sr: "plesati" },
          { de: "malen", sr: "slikati" },
          { de: "fotografieren", sr: "fotografisati" }
        ],
        correctAnswer: "matching-check",
        explanation: "Popularni hobiji."
      },
      {
        id: "a1-7-ex7",
        type: "fill-blank",
        question: "___ du Klavier spielen? (moći/znati)",
        correctAnswer: "Kannst",
        explanation: "Kannst du...? = Možeš li ti...? / Znaš li ti...?"
      },
      {
        id: "a1-7-ex8",
        type: "translation",
        question: "Prevedi: 'Vikendom idem u bioskop.'",
        correctAnswer: ["Am Wochenende gehe ich ins Kino", "Am Wochenende gehe ich ins Kino."],
        explanation: "Ins Kino = u bioskop. In + das = ins."
      },
      {
        id: "a1-7-ex9",
        type: "multiple-choice",
        question: "Ich spiele gern Gitarre. Šta znači 'gern'?",
        options: ["Rado/Sa zadovoljstvom", "Loše", "Brzo", "Tiho"],
        correctAnswer: "Rado/Sa zadovoljstvom",
        explanation: "Gern = rado, sa zadovoljstvom. Označava da nam se nešto dopada."
      },
      {
        id: "a1-7-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In meiner Freizeit spiele ich gern Videospiele und treffe Freunde.",
        options: ["U slobodno vreme rado igram video igre i viđam prijatelje.", "U slobodno vreme radim i učim.", "U slobodno vreme spavam i jedem.", "U slobodno vreme gledam TV i čitam."],
        correctAnswer: "U slobodno vreme rado igram video igre i viđam prijatelje.",
        explanation: "Videospiele = video igre, Freunde treffen = viđati prijatelje."
      }
    ]
  },
  {
    id: "a1-8",
    title: "Odeća",
    titleDe: "Kleidung",
    description: "Nazivi odeće, boje, kupovina.",
    level: "A1",
    unit: 4,
    order: 8,
    duration: 25,
    xpReward: 65,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Odevni predmeti", "Glagol tragen (nositi)", "Nominativ i Akuzativ"],
    exercises: [
      {
        id: "a1-8-ex1",
        type: "matching",
        question: "Poveži odeću.",
        pairs: [
          { de: "die Hose", sr: "pantalone" },
          { de: "das Hemd", sr: "košulja" },
          { de: "der Schuh", sr: "cipela" },
          { de: "die Jacke", sr: "jakna" },
          { de: "das Kleid", sr: "haljina" },
          { de: "der Pullover", sr: "džemper" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni odevni predmeti."
      },
      {
        id: "a1-8-ex2",
        type: "multiple-choice",
        question: "Was trägt man im Winter?",
        options: ["Einen Mantel", "Ein T-Shirt", "Shorts", "Sandalen"],
        correctAnswer: "Einen Mantel",
        explanation: "Im Winter = zimi. Mantel = kaput."
      },
      {
        id: "a1-8-ex3",
        type: "fill-blank",
        question: "Ich ___ heute ein blaues T-Shirt. (nositi)",
        correctAnswer: "trage",
        explanation: "Ich trage = ja nosim. Glagol tragen."
      },
      {
        id: "a1-8-ex4",
        type: "matching",
        question: "Poveži još odeće.",
        pairs: [
          { de: "die Socke", sr: "čarapa" },
          { de: "der Rock", sr: "suknja" },
          { de: "die Bluse", sr: "bluza" },
          { de: "der Gürtel", sr: "kaiš" },
          { de: "die Mütze", sr: "kapa" }
        ],
        correctAnswer: "matching-check",
        explanation: "Dodatni odevni predmeti."
      },
      {
        id: "a1-8-ex5",
        type: "multiple-choice",
        question: "Die Hose ist zu klein. Šta znači 'zu klein'?",
        options: ["Previše male", "Previše velike", "Upravo prave", "Skupe"],
        correctAnswer: "Previše male",
        explanation: "Zu = previše. Zu klein = previše malo."
      },
      {
        id: "a1-8-ex6",
        type: "translation",
        question: "Prevedi: 'Ova košulja je crvena.'",
        correctAnswer: ["Dieses Hemd ist rot", "Dieses Hemd ist rot.", "Das Hemd ist rot"],
        explanation: "Dieses = ova/ovaj (za srednji rod)."
      },
      {
        id: "a1-8-ex7",
        type: "fill-blank",
        question: "Die Schuhe kosten 50 ___. (evra)",
        correctAnswer: "Euro",
        explanation: "Euro ostaje isti u množini: 50 Euro."
      },
      {
        id: "a1-8-ex8",
        type: "multiple-choice",
        question: "Welche Größe haben Sie?",
        options: ["Koju veličinu imate?", "Koju boju imate?", "Koliko košta?", "Gde je kasa?"],
        correctAnswer: "Koju veličinu imate?",
        explanation: "Die Größe = veličina. Pitanje u prodavnici odeće."
      },
      {
        id: "a1-8-ex9",
        type: "matching",
        question: "Poveži boje sa odećom.",
        pairs: [
          { de: "ein weißes Hemd", sr: "bela košulja" },
          { de: "eine schwarze Hose", sr: "crne pantalone" },
          { de: "blaue Schuhe", sr: "plave cipele" },
          { de: "ein grüner Rock", sr: "zelena suknja" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pridevi se menjaju prema rodu i padežu."
      },
      {
        id: "a1-8-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich suche ein schwarzes Kleid in Größe 38.",
        options: ["Tražim crnu haljinu veličine 38.", "Tražim belu suknju veličine 40.", "Tražim plavi kaput veličine 38.", "Tražim crvene cipele veličine 38."],
        correctAnswer: "Tražim crnu haljinu veličine 38.",
        explanation: "Suchen = tražiti, schwarzes Kleid = crna haljina."
      }
    ]
  },
  {
    id: "a1-9",
    title: "Vreme i godišnja doba",
    titleDe: "Wetter und Jahreszeiten",
    description: "Opisivanje vremena, meseci u godini.",
    level: "A1",
    unit: 5,
    order: 9,
    duration: 20,
    xpReward: 60,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Es regnet, Es schneit", "Godišnja doba", "Temperature"],
    exercises: [
      {
        id: "a1-9-ex1",
        type: "multiple-choice",
        question: "Wann ist es kalt?",
        options: ["Im Winter", "Im Sommer", "Im Juli", "Im August"],
        correctAnswer: "Im Winter",
        explanation: "Zimi (Winter) je hladno."
      },
      {
        id: "a1-9-ex2",
        type: "matching",
        question: "Poveži godišnja doba.",
        pairs: [
          { de: "der Frühling", sr: "proleće" },
          { de: "der Sommer", sr: "leto" },
          { de: "der Herbst", sr: "jesen" },
          { de: "der Winter", sr: "zima" }
        ],
        correctAnswer: "matching-check",
        explanation: "Četiri godišnja doba - svi su muškog roda (der)."
      },
      {
        id: "a1-9-ex3",
        type: "fill-blank",
        question: "Heute ___ die Sonne. (sijati)",
        correctAnswer: "scheint",
        explanation: "Die Sonne scheint = Sunce sija."
      },
      {
        id: "a1-9-ex4",
        type: "matching",
        question: "Poveži vremenske prilike.",
        pairs: [
          { de: "Es regnet", sr: "Kiši" },
          { de: "Es schneit", sr: "Pada sneg" },
          { de: "Es ist sonnig", sr: "Sunčano je" },
          { de: "Es ist bewölkt", sr: "Oblačno je" },
          { de: "Es ist windig", sr: "Vetrovito je" }
        ],
        correctAnswer: "matching-check",
        explanation: "Vremenske prilike sa bezličnim 'es'."
      },
      {
        id: "a1-9-ex5",
        type: "multiple-choice",
        question: "Wie ist das Wetter heute?",
        options: ["Es ist warm und sonnig.", "Es ist Montag.", "Es ist 15 Uhr.", "Es ist teuer."],
        correctAnswer: "Es ist warm und sonnig.",
        explanation: "Pitanje o vremenu. Warm = toplo, sonnig = sunčano."
      },
      {
        id: "a1-9-ex6",
        type: "matching",
        question: "Poveži mesece.",
        pairs: [
          { de: "Januar", sr: "januar" },
          { de: "März", sr: "mart" },
          { de: "Juni", sr: "jun" },
          { de: "September", sr: "septembar" },
          { de: "Dezember", sr: "decembar" }
        ],
        correctAnswer: "matching-check",
        explanation: "Meseci su slični srpskim imenima."
      },
      {
        id: "a1-9-ex7",
        type: "fill-blank",
        question: "Im Herbst sind die Blätter ___. (žuta)",
        correctAnswer: "gelb",
        explanation: "U jesen lišće postaje žuto (gelb)."
      },
      {
        id: "a1-9-ex8",
        type: "translation",
        question: "Prevedi: 'Danas je hladno i pada kiša.'",
        correctAnswer: ["Heute ist es kalt und es regnet", "Heute ist es kalt und es regnet.", "Es ist heute kalt und es regnet"],
        explanation: "Kalt = hladno, es regnet = kiši."
      },
      {
        id: "a1-9-ex9",
        type: "multiple-choice",
        question: "Wie viel Grad haben wir heute? 25 Grad.",
        options: ["Koliko stepeni imamo danas?", "Koliko košta danas?", "Koliko je sati?", "Koliko dana je prošlo?"],
        correctAnswer: "Koliko stepeni imamo danas?",
        explanation: "Grad = stepen (temperatura)."
      },
      {
        id: "a1-9-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Im Frühling regnet es oft, aber die Blumen blühen.",
        options: ["U proleće često kiši, ali cveće cveta.", "U leto je toplo i sunčano.", "U zimu pada sneg svaki dan.", "U jesen pada lišće sa drveća."],
        correctAnswer: "U proleće često kiši, ali cveće cveta.",
        explanation: "Oft = često, blühen = cvetati."
      }
    ]
  },
  {
    id: "a1-10",
    title: "Telo i zdravlje",
    titleDe: "Körper und Gesundheit",
    description: "Delovi tela, 'Boli me...', kod lekara.",
    level: "A1",
    unit: 5,
    order: 10,
    duration: 30,
    xpReward: 75,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Delovi tela", "Glagol tun (weh tun)", "Termin kod lekara"],
    exercises: [
      {
        id: "a1-10-ex1",
        type: "matching",
        question: "Poveži delove tela.",
        pairs: [
          { de: "der Kopf", sr: "glava" },
          { de: "der Arm", sr: "ruka" },
          { de: "das Bein", sr: "noga" },
          { de: "der Bauch", sr: "stomak" },
          { de: "die Hand", sr: "šaka" },
          { de: "der Fuß", sr: "stopalo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni delovi tela."
      },
      {
        id: "a1-10-ex2",
        type: "fill-blank",
        question: "Mein Kopf tut ___. (boleti)",
        correctAnswer: "weh",
        hint: "Glagol wehtun",
        explanation: "Tut weh = boli. Mein Kopf tut weh = Boli me glava."
      },
      {
        id: "a1-10-ex3",
        type: "matching",
        question: "Poveži delove lica.",
        pairs: [
          { de: "das Auge", sr: "oko" },
          { de: "die Nase", sr: "nos" },
          { de: "der Mund", sr: "usta" },
          { de: "das Ohr", sr: "uvo" },
          { de: "die Zähne", sr: "zubi" }
        ],
        correctAnswer: "matching-check",
        explanation: "Delovi lica."
      },
      {
        id: "a1-10-ex4",
        type: "multiple-choice",
        question: "Was sagt man beim Arzt?",
        options: ["Ich habe Fieber.", "Guten Appetit!", "Auf Wiedersehen!", "Alles Gute!"],
        correctAnswer: "Ich habe Fieber.",
        explanation: "Ich habe Fieber = Imam temperaturu/groznicu."
      },
      {
        id: "a1-10-ex5",
        type: "translation",
        question: "Prevedi: 'Bole me leđa.'",
        correctAnswer: ["Mein Rücken tut weh", "Mein Rücken tut weh.", "Mir tut der Rücken weh"],
        explanation: "Der Rücken = leđa."
      },
      {
        id: "a1-10-ex6",
        type: "matching",
        question: "Poveži simptome.",
        pairs: [
          { de: "Fieber", sr: "temperatura" },
          { de: "Husten", sr: "kašalj" },
          { de: "Schnupfen", sr: "kijavica" },
          { de: "Kopfschmerzen", sr: "glavobolja" },
          { de: "Halsschmerzen", sr: "bol u grlu" }
        ],
        correctAnswer: "matching-check",
        explanation: "Uobičajeni simptomi bolesti."
      },
      {
        id: "a1-10-ex7",
        type: "fill-blank",
        question: "Ich ___ krank. (biti)",
        correctAnswer: "bin",
        explanation: "Ich bin krank = Ja sam bolestan/bolesna."
      },
      {
        id: "a1-10-ex8",
        type: "multiple-choice",
        question: "Was brauchen Sie? Ich brauche ___.",
        options: ["Medikamente", "einen Kaffee", "ein Buch", "Schuhe"],
        correctAnswer: "Medikamente",
        explanation: "Kod lekara treba nam lek (Medikamente)."
      },
      {
        id: "a1-10-ex9",
        type: "translation",
        question: "Prevedi: 'Trebam termin kod lekara.'",
        correctAnswer: ["Ich brauche einen Termin beim Arzt", "Ich brauche einen Arzttermin"],
        explanation: "Der Termin = termin, der Arzt = lekar."
      },
      {
        id: "a1-10-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Tag, ich habe starke Kopfschmerzen und Fieber seit gestern.",
        options: ["Dobar dan, imam jake glavobolje i temperaturu od juče.", "Dobar dan, boli me stomak od juče.", "Dobar dan, imam kašalj već nedelju dana.", "Dobar dan, slomio sam nogu."],
        correctAnswer: "Dobar dan, imam jake glavobolje i temperaturu od juče.",
        explanation: "Stark = jak, seit gestern = od juče."
      }
    ]
  },
  {
    id: "a1-11",
    title: "Grad i prevoz",
    titleDe: "Stadt und Verkehr",
    description: "Snalaženje u gradu, prevozna sredstva.",
    level: "A1",
    unit: 6,
    order: 11,
    duration: 35,
    xpReward: 80,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Zgrade u gradu", "Prevozna sredstva", "Predlozi (in, an, auf)"],
    exercises: [
      {
        id: "a1-11-ex1",
        type: "multiple-choice",
        question: "Ich warte auf den Bus an der ___.",
        options: ["Haltestelle", "Bahnhof", "Flughafen", "Kino"],
        correctAnswer: "Haltestelle",
        explanation: "Autobus se čeka na stanici (Haltestelle)."
      },
      {
        id: "a1-11-ex2",
        type: "matching",
        question: "Poveži zgrade u gradu.",
        pairs: [
          { de: "das Rathaus", sr: "gradska kuća" },
          { de: "die Kirche", sr: "crkva" },
          { de: "das Krankenhaus", sr: "bolnica" },
          { de: "die Schule", sr: "škola" },
          { de: "die Bibliothek", sr: "biblioteka" },
          { de: "das Museum", sr: "muzej" }
        ],
        correctAnswer: "matching-check",
        explanation: "Važne zgrade u svakom gradu."
      },
      {
        id: "a1-11-ex3",
        type: "matching",
        question: "Poveži prevozna sredstva.",
        pairs: [
          { de: "der Bus", sr: "autobus" },
          { de: "die Straßenbahn", sr: "tramvaj" },
          { de: "die U-Bahn", sr: "metro" },
          { de: "der Zug", sr: "voz" },
          { de: "das Fahrrad", sr: "bicikl" },
          { de: "das Auto", sr: "automobil" }
        ],
        correctAnswer: "matching-check",
        explanation: "Prevozna sredstva u gradu."
      },
      {
        id: "a1-11-ex4",
        type: "fill-blank",
        question: "Wo ist die Bank? Die Bank ist ___ der Post. (pored)",
        correctAnswer: "neben",
        hint: "Predlog za lokaciju",
        explanation: "Neben = pored. Die Bank ist neben der Post."
      },
      {
        id: "a1-11-ex5",
        type: "translation",
        question: "Prevedi: 'Kako da dođem do železničke stanice?'",
        correctAnswer: ["Wie komme ich zum Bahnhof?", "Wie komme ich zum Bahnhof"],
        explanation: "Zum = zu + dem. Bahnhof = železnička stanica."
      },
      {
        id: "a1-11-ex6",
        type: "multiple-choice",
        question: "Wo kann man Bücher ausleihen?",
        options: ["In der Bibliothek", "Im Supermarkt", "Im Kino", "Im Restaurant"],
        correctAnswer: "In der Bibliothek",
        explanation: "Ausleihen = pozajmiti. Knjige se pozajmljuju u biblioteci."
      },
      {
        id: "a1-11-ex7",
        type: "matching",
        question: "Poveži pravce.",
        pairs: [
          { de: "geradeaus", sr: "pravo" },
          { de: "links", sr: "levo" },
          { de: "rechts", sr: "desno" },
          { de: "an der Ecke", sr: "na uglu" },
          { de: "gegenüber", sr: "naspram/preko puta" }
        ],
        correctAnswer: "matching-check",
        explanation: "Važno za davanje uputstava."
      },
      {
        id: "a1-11-ex8",
        type: "fill-blank",
        question: "Der Supermarkt ist ___ der Straße. (na drugoj strani)",
        correctAnswer: "auf",
        hint: "auf der anderen Seite",
        explanation: "Auf der Straße / auf der anderen Seite der Straße."
      },
      {
        id: "a1-11-ex9",
        type: "multiple-choice",
        question: "Welche Linie fährt zum Stadtzentrum?",
        options: ["Die Linie 5", "Der Zug 5", "Das Auto 5", "Das Taxi 5"],
        correctAnswer: "Die Linie 5",
        explanation: "Die Linie = linija (autobusa, tramvaja)."
      },
      {
        id: "a1-11-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Gehen Sie geradeaus, dann die zweite Straße links. Das Kino ist auf der rechten Seite.",
        options: ["Idite pravo, onda druga ulica levo. Bioskop je na desnoj strani.", "Idite levo, onda prva ulica desno. Škola je pravo.", "Idite desno, onda treća ulica levo. Banka je na levoj strani.", "Idite nazad, onda prva ulica. Pošta je tu."],
        correctAnswer: "Idite pravo, onda druga ulica levo. Bioskop je na desnoj strani.",
        explanation: "Geradeaus = pravo, zweite = druga, rechte Seite = desna strana."
      }
    ]
  },
  {
    id: "a1-12",
    title: "Praznici i proslave",
    titleDe: "Feste und Feiern",
    description: "Rođendani, Božić, Uskrs.",
    level: "A1",
    unit: 6,
    order: 12,
    duration: 25,
    xpReward: 70,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Čestitanje", "Datumi", "Redni brojevi"],
    exercises: [
      {
        id: "a1-12-ex1",
        type: "multiple-choice",
        question: "Wann feiert man Weihnachten?",
        options: ["Im Dezember", "Im Januar", "Im März", "Im Juli"],
        correctAnswer: "Im Dezember",
        explanation: "Božić je u decembru."
      },
      {
        id: "a1-12-ex2",
        type: "matching",
        question: "Poveži praznike.",
        pairs: [
          { de: "Weihnachten", sr: "Božić" },
          { de: "Ostern", sr: "Uskrs" },
          { de: "Silvester", sr: "Doček Nove godine" },
          { de: "der Geburtstag", sr: "Rođendan" },
          { de: "die Hochzeit", sr: "Venčanje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Važni praznici i proslave."
      },
      {
        id: "a1-12-ex3",
        type: "fill-blank",
        question: "Herzlichen Glückwunsch zum ___! (rođendan)",
        correctAnswer: "Geburtstag",
        explanation: "Čestitka za rođendan: Herzlichen Glückwunsch zum Geburtstag!"
      },
      {
        id: "a1-12-ex4",
        type: "multiple-choice",
        question: "Was sagt man zu Weihnachten?",
        options: ["Frohe Weihnachten!", "Guten Appetit!", "Gute Reise!", "Alles Gute!"],
        correctAnswer: "Frohe Weihnachten!",
        explanation: "Frohe Weihnachten = Srećan Božić."
      },
      {
        id: "a1-12-ex5",
        type: "matching",
        question: "Poveži redne brojeve.",
        pairs: [
          { de: "der erste", sr: "prvi" },
          { de: "der zweite", sr: "drugi" },
          { de: "der dritte", sr: "treći" },
          { de: "der vierte", sr: "četvrti" },
          { de: "der fünfte", sr: "peti" }
        ],
        correctAnswer: "matching-check",
        explanation: "Redni brojevi dobijaju nastavak -te ili -ste."
      },
      {
        id: "a1-12-ex6",
        type: "translation",
        question: "Prevedi: 'Moj rođendan je 15. maja.'",
        correctAnswer: ["Mein Geburtstag ist am fünfzehnten Mai", "Mein Geburtstag ist am 15. Mai"],
        explanation: "Za datume koristimo 'am' + redni broj."
      },
      {
        id: "a1-12-ex7",
        type: "fill-blank",
        question: "Wir ___ eine Party. (proslaviti/organizovati)",
        correctAnswer: "feiern",
        hint: "Glagol feiern",
        explanation: "Feiern = proslaviti. Wir feiern = mi slavimo."
      },
      {
        id: "a1-12-ex8",
        type: "multiple-choice",
        question: "Was bekommt man zum Geburtstag?",
        options: ["Geschenke", "Hausaufgaben", "Rechnungen", "Probleme"],
        correctAnswer: "Geschenke",
        explanation: "Das Geschenk = poklon. Geschenke = pokloni."
      },
      {
        id: "a1-12-ex9",
        type: "matching",
        question: "Poveži čestitke.",
        pairs: [
          { de: "Alles Gute!", sr: "Sve najbolje!" },
          { de: "Viel Glück!", sr: "Srećno!" },
          { de: "Frohes neues Jahr!", sr: "Srećna Nova godina!" },
          { de: "Gute Besserung!", sr: "Brzo ozdravi!" }
        ],
        correctAnswer: "matching-check",
        explanation: "Uobičajene čestitke za različite prilike."
      },
      {
        id: "a1-12-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich lade dich zu meiner Geburtstagsparty am Samstag ein. Kommst du?",
        options: ["Pozivam te na moju proslavu rođendana u subotu. Dolaziš?", "Pozivam te na svadbu u nedelju. Ideš?", "Zovem te na Božić. Možeš?", "Idem na žurku u petak. Hoćeš?"],
        correctAnswer: "Pozivam te na moju proslavu rođendana u subotu. Dolaziš?",
        explanation: "Einladen = pozvati, die Party = žurka/proslava."
      }
    ]
  },

  // ==========================================
  // A2 LEVEL - OSNOVNI (10 Lekcija)
  // ==========================================
  {
    id: "a2-1",
    title: "Prošlost (Perfekt)",
    titleDe: "Die Vergangenheit (Perfekt)",
    description: "Pričanje o prošlim događajima, šta si radio juče.",
    level: "A2",
    unit: 1,
    order: 1,
    duration: 35,
    xpReward: 80,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Perfekt pravilnih glagola", "Perfekt nepravilnih glagola", "Haben ili Sein?"],
    exercises: [
      {
        id: "a2-1-ex1",
        type: "multiple-choice",
        question: "Koji je oblik perfekta za glagol 'gehen'?",
        options: ["gegangen", "gegeht", "gegehen", "ging"],
        correctAnswer: "gegangen",
        explanation: "Gehen je nepravilan glagol i koristi pomoćni glagol 'sein'."
      },
      {
        id: "a2-1-ex2",
        type: "fill-blank",
        question: "Ich bin nach Hause ___ (gehen).",
        correctAnswer: "gegangen",
        explanation: "Particip II glagola gehen je gegangen."
      },
      {
        id: "a2-1-ex3",
        type: "matching",
        question: "Poveži glagole sa participom II.",
        pairs: [
          { de: "machen", sr: "gemacht" },
          { de: "spielen", sr: "gespielt" },
          { de: "kaufen", sr: "gekauft" },
          { de: "lernen", sr: "gelernt" },
          { de: "arbeiten", sr: "gearbeitet" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pravilni glagoli grade particip II sa ge- i -t."
      },
      {
        id: "a2-1-ex4",
        type: "multiple-choice",
        question: "Koji pomoćni glagol ide uz 'fahren'?",
        options: ["sein", "haben", "werden", "können"],
        correctAnswer: "sein",
        explanation: "Glagoli kretanja koriste 'sein': Ich bin gefahren."
      },
      {
        id: "a2-1-ex5",
        type: "fill-blank",
        question: "Gestern ___ ich einen Film gesehen. (haben)",
        correctAnswer: "habe",
        explanation: "Sehen koristi 'haben': Ich habe gesehen."
      },
      {
        id: "a2-1-ex6",
        type: "matching",
        question: "Poveži nepravilne glagole.",
        pairs: [
          { de: "essen", sr: "gegessen" },
          { de: "trinken", sr: "getrunken" },
          { de: "schreiben", sr: "geschrieben" },
          { de: "lesen", sr: "gelesen" },
          { de: "nehmen", sr: "genommen" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nepravilni glagoli menjaju osnovu i završavaju na -en."
      },
      {
        id: "a2-1-ex7",
        type: "translation",
        question: "Prevedi: 'Juče sam kupio novu jaknu.'",
        correctAnswer: ["Gestern habe ich eine neue Jacke gekauft", "Ich habe gestern eine neue Jacke gekauft"],
        explanation: "Haben + particip II na kraju rečenice."
      },
      {
        id: "a2-1-ex8",
        type: "multiple-choice",
        question: "Er ___ gestern spät aufgestanden.",
        options: ["ist", "hat", "war", "hatte"],
        correctAnswer: "ist",
        explanation: "Aufstehen koristi 'sein' jer označava promenu stanja."
      },
      {
        id: "a2-1-ex9",
        type: "fill-blank",
        question: "Wir ___ letztes Jahr nach Italien geflogen. (sein)",
        correctAnswer: "sind",
        explanation: "Fliegen (leteti) koristi 'sein': Wir sind geflogen."
      },
      {
        id: "a2-1-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Am Wochenende habe ich meine Oma besucht und wir haben zusammen gekocht.",
        options: ["Vikendom sam posetio baku i zajedno smo kuvali.", "Vikendom sam išao u bioskop sa prijateljima.", "Vikendom sam radio i učio.", "Vikendom sam bio kod kuće i spavao."],
        correctAnswer: "Vikendom sam posetio baku i zajedno smo kuvali.",
        explanation: "Besucht = posetio, zusammen = zajedno, gekocht = kuvali."
      }
    ]
  },
  {
    id: "a2-2",
    title: "Škola i obrazovanje",
    titleDe: "Schule und Ausbildung",
    description: "Školski sistem, predmeti, ocene.",
    level: "A2",
    unit: 1,
    order: 2,
    duration: 30,
    xpReward: 75,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Školski predmeti", "Modalni glagoli u preteritu (wollte, musste)", "Svedočanstvo"],
    exercises: [
      {
        id: "a2-2-ex1",
        type: "matching",
        question: "Poveži predmete.",
        pairs: [
          { de: "Mathe", sr: "Matematika" },
          { de: "Geschichte", sr: "Istorija" },
          { de: "Kunst", sr: "Umetnost" },
          { de: "Sport", sr: "Fizičko" },
          { de: "Biologie", sr: "Biologija" },
          { de: "Physik", sr: "Fizika" }
        ],
        correctAnswer: "matching-check",
        explanation: "Školski predmeti."
      },
      {
        id: "a2-2-ex2",
        type: "multiple-choice",
        question: "In welche Klasse gehst du?",
        options: ["In die 10. Klasse", "Um 8 Uhr", "In Mathematik", "Mit dem Bus"],
        correctAnswer: "In die 10. Klasse",
        explanation: "Die Klasse = razred. In die 10. Klasse = u 10. razred."
      },
      {
        id: "a2-2-ex3",
        type: "fill-blank",
        question: "Ich ___ Arzt werden. (hteti - preterit)",
        correctAnswer: "wollte",
        hint: "Modalni glagol wollen u preteritu",
        explanation: "Wollte = hteo sam. Modalni glagoli u preteritu."
      },
      {
        id: "a2-2-ex4",
        type: "matching",
        question: "Poveži ocene.",
        pairs: [
          { de: "sehr gut", sr: "odličan (1)" },
          { de: "gut", sr: "vrlo dobar (2)" },
          { de: "befriedigend", sr: "dobar (3)" },
          { de: "ausreichend", sr: "dovoljan (4)" },
          { de: "mangelhaft", sr: "nedovoljan (5)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nemački sistem ocenjivanja (1 je najbolja!)."
      },
      {
        id: "a2-2-ex5",
        type: "translation",
        question: "Prevedi: 'Morao sam da učim za ispit.'",
        correctAnswer: ["Ich musste für die Prüfung lernen", "Ich musste für die Prüfung lernen."],
        explanation: "Musste = morao sam. Die Prüfung = ispit."
      },
      {
        id: "a2-2-ex6",
        type: "multiple-choice",
        question: "Was ist das Abitur?",
        options: ["Matura/Završni ispit", "Polugodište", "Školski raspust", "Predmet"],
        correctAnswer: "Matura/Završni ispit",
        explanation: "Das Abitur = matura, završni ispit za upis na fakultet."
      },
      {
        id: "a2-2-ex7",
        type: "fill-blank",
        question: "Mein Lieblingsfach ___ Englisch. (biti - preterit)",
        correctAnswer: "war",
        explanation: "War = bio/bila je. Preterit od 'sein'."
      },
      {
        id: "a2-2-ex8",
        type: "matching",
        question: "Poveži školske pojmove.",
        pairs: [
          { de: "der Lehrer", sr: "nastavnik" },
          { de: "der Schüler", sr: "učenik" },
          { de: "das Zeugnis", sr: "svedočanstvo" },
          { de: "die Hausaufgabe", sr: "domaći zadatak" },
          { de: "die Pause", sr: "odmor" }
        ],
        correctAnswer: "matching-check",
        explanation: "Školski vokabular."
      },
      {
        id: "a2-2-ex9",
        type: "multiple-choice",
        question: "Ich konnte nicht kommen, weil ich krank war.",
        options: ["Nisam mogao doći jer sam bio bolestan.", "Mogao sam doći jer sam bio zdrav.", "Hteo sam doći ali sam zaboravio.", "Morao sam doći iako sam bio bolestan."],
        correctAnswer: "Nisam mogao doći jer sam bio bolestan.",
        explanation: "Konnte nicht = nisam mogao. Weil = jer."
      },
      {
        id: "a2-2-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In der Schule hatte ich immer gute Noten in Sprachen, aber Mathe war schwer für mich.",
        options: ["U školi sam uvek imao dobre ocene iz jezika, ali matematika mi je bila teška.", "U školi sam voleo sport i muziku.", "Škola mi je bila dosadna, ali imao sam dobre prijatelje.", "U školi sam uvek kasnio na časove."],
        correctAnswer: "U školi sam uvek imao dobre ocene iz jezika, ali matematika mi je bila teška.",
        explanation: "Gute Noten = dobre ocene, schwer = teško."
      }
    ]
  },
  {
    id: "a2-3",
    title: "Posao i zanimanja",
    titleDe: "Beruf und Arbeit",
    description: "Opisivanje posla, radno vreme, kolege.",
    level: "A2",
    unit: 2,
    order: 3,
    duration: 35,
    xpReward: 85,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Muška i ženska zanimanja", "Radni zadaci", "Telefonski razgovor"],
    exercises: [
      {
        id: "a2-3-ex1",
        type: "fill-blank",
        question: "Ich arbeite ___ Kellner. (kao)",
        correctAnswer: "als",
        explanation: "Za zanimanja koristimo 'als'."
      },
      {
        id: "a2-3-ex2",
        type: "matching",
        question: "Poveži zanimanja.",
        pairs: [
          { de: "der Arzt / die Ärztin", sr: "lekar/lekarka" },
          { de: "der Lehrer / die Lehrerin", sr: "nastavnik/nastavnica" },
          { de: "der Ingenieur / die Ingenieurin", sr: "inženjer/inženjerka" },
          { de: "der Koch / die Köchin", sr: "kuvar/kuvarica" },
          { de: "der Programmierer / die Programmiererin", sr: "programer/programerka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Muška i ženska forma zanimanja."
      },
      {
        id: "a2-3-ex3",
        type: "multiple-choice",
        question: "Was sind Sie von Beruf?",
        options: ["Ich bin Ingenieur.", "Ich bin 30 Jahre alt.", "Ich komme aus Serbien.", "Ich heiße Peter."],
        correctAnswer: "Ich bin Ingenieur.",
        explanation: "Von Beruf = po zanimanju."
      },
      {
        id: "a2-3-ex4",
        type: "fill-blank",
        question: "Meine Arbeitszeit ist von 9 ___ 17 Uhr. (do)",
        correctAnswer: "bis",
        explanation: "Von... bis = od... do. Radno vreme."
      },
      {
        id: "a2-3-ex5",
        type: "translation",
        question: "Prevedi: 'Radim puno radno vreme.'",
        correctAnswer: ["Ich arbeite Vollzeit", "Ich arbeite Vollzeit."],
        explanation: "Vollzeit = puno radno vreme. Teilzeit = pola radnog vremena."
      },
      {
        id: "a2-3-ex6",
        type: "matching",
        question: "Poveži poslovne pojmove.",
        pairs: [
          { de: "der Chef", sr: "šef" },
          { de: "der Kollege", sr: "kolega" },
          { de: "das Gehalt", sr: "plata" },
          { de: "der Urlaub", sr: "godišnji odmor" },
          { de: "die Besprechung", sr: "sastanak" }
        ],
        correctAnswer: "matching-check",
        explanation: "Poslovni vokabular."
      },
      {
        id: "a2-3-ex7",
        type: "multiple-choice",
        question: "Können Sie mich bitte mit Herrn Müller verbinden?",
        options: ["Formalni telefonski zahtev", "Naručivanje hrane", "Pitanje za pravac", "Kupovina karte"],
        correctAnswer: "Formalni telefonski zahtev",
        explanation: "Verbinden = spojiti (telefonski). Formalna molba."
      },
      {
        id: "a2-3-ex8",
        type: "fill-blank",
        question: "Ich ___ gern im Team. (raditi)",
        correctAnswer: "arbeite",
        explanation: "Arbeiten im Team = raditi u timu."
      },
      {
        id: "a2-3-ex9",
        type: "translation",
        question: "Prevedi: 'Tražim posao.'",
        correctAnswer: ["Ich suche einen Job", "Ich suche eine Arbeit", "Ich suche Arbeit"],
        explanation: "Suchen = tražiti. Die Arbeit / der Job = posao."
      },
      {
        id: "a2-3-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Tag, hier ist Firma Schmidt. Was kann ich für Sie tun?",
        options: ["Dobar dan, ovde je firma Schmidt. Kako vam mogu pomoći?", "Dobar dan, zovem se Schmidt. Gde je kancelarija?", "Dobar dan, imam sastanak u 10. Gde da čekam?", "Dobar dan, tražim posao. Imate li slobodna mesta?"],
        correctAnswer: "Dobar dan, ovde je firma Schmidt. Kako vam mogu pomoći?",
        explanation: "Was kann ich für Sie tun? = Kako vam mogu pomoći? (formalno)"
      }
    ]
  },
  {
    id: "a2-4",
    title: "Stanovanje i selidba",
    titleDe: "Wohnen und Umzug",
    description: "Traženje stana, oglasi, selidba.",
    level: "A2",
    unit: 2,
    order: 4,
    duration: 35,
    xpReward: 85,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Oglasi za stan", "Pridevi sa dativom", "Wechselpräpositionen (promenljivi predlozi)"],
    exercises: [
      {
        id: "a2-4-ex1",
        type: "multiple-choice",
        question: "Ich stelle die Lampe auf ___ Tisch. (Akuzativ)",
        options: ["den", "dem", "der", "das"],
        correctAnswer: "den",
        explanation: "Kretanje (kuda?) zahteva Akuzativ. Tisch je muškog roda (der -> den)."
      },
      {
        id: "a2-4-ex2",
        type: "matching",
        question: "Poveži oglase za stan.",
        pairs: [
          { de: "2-Zimmer-Wohnung", sr: "dvosoban stan" },
          { de: "möbliert", sr: "namešten" },
          { de: "Kaltmiete", sr: "kirija bez režija" },
          { de: "Warmmiete", sr: "kirija sa režijama" },
          { de: "Nebenkosten", sr: "režije" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pojmovi iz oglasa za stanove."
      },
      {
        id: "a2-4-ex3",
        type: "fill-blank",
        question: "Die Lampe hängt über ___ Tisch. (Dativ)",
        correctAnswer: "dem",
        hint: "Lokacija (gde?) = Dativ",
        explanation: "Lokacija zahteva Dativ. Der Tisch -> dem Tisch."
      },
      {
        id: "a2-4-ex4",
        type: "multiple-choice",
        question: "Wechselpräpositionen: Koje pitanje određuje padež?",
        options: ["Wohin (kuda) ili Wo (gde)", "Wann (kada)", "Warum (zašto)", "Wer (ko)"],
        correctAnswer: "Wohin (kuda) ili Wo (gde)",
        explanation: "Wohin = Akuzativ (kretanje). Wo = Dativ (lokacija)."
      },
      {
        id: "a2-4-ex5",
        type: "translation",
        question: "Prevedi: 'Stavljam knjige na policu.'",
        correctAnswer: ["Ich stelle die Bücher ins Regal", "Ich lege die Bücher ins Regal"],
        explanation: "Ins = in + das. Kretanje = Akuzativ."
      },
      {
        id: "a2-4-ex6",
        type: "matching",
        question: "Poveži predloge.",
        pairs: [
          { de: "in", sr: "u" },
          { de: "auf", sr: "na" },
          { de: "an", sr: "kod/na" },
          { de: "über", sr: "iznad" },
          { de: "unter", sr: "ispod" },
          { de: "zwischen", sr: "između" }
        ],
        correctAnswer: "matching-check",
        explanation: "Wechselpräpositionen - promenljivi predlozi."
      },
      {
        id: "a2-4-ex7",
        type: "fill-blank",
        question: "Die Katze liegt ___ dem Sofa. (ispod)",
        correctAnswer: "unter",
        explanation: "Unter = ispod. Liegt = leži (lokacija, Dativ)."
      },
      {
        id: "a2-4-ex8",
        type: "multiple-choice",
        question: "Der Spiegel hängt ___ der Wand.",
        options: ["an", "auf", "in", "über"],
        correctAnswer: "an",
        explanation: "An der Wand = na zidu. Koristi se 'an' za vertikalne površine."
      },
      {
        id: "a2-4-ex9",
        type: "translation",
        question: "Prevedi: 'Tražim stan blizu centra.'",
        correctAnswer: ["Ich suche eine Wohnung in der Nähe vom Zentrum", "Ich suche eine Wohnung nahe dem Zentrum"],
        explanation: "In der Nähe von = blizu, u blizini."
      },
      {
        id: "a2-4-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die Wohnung hat 3 Zimmer, eine Küche, ein Bad und einen Balkon. Die Miete beträgt 600 Euro warm.",
        options: ["Stan ima 3 sobe, kuhinju, kupatilo i balkon. Kirija je 600 evra sa režijama.", "Stan ima 2 sobe i terasu. Kirija je 500 evra.", "Kuća ima 4 sobe i baštu. Kirija je 800 evra.", "Stan ima 1 sobu bez balkona. Kirija je 400 evra."],
        correctAnswer: "Stan ima 3 sobe, kuhinju, kupatilo i balkon. Kirija je 600 evra sa režijama.",
        explanation: "Beträgt = iznosi, warm = sa režijama."
      }
    ]
  },
  {
    id: "a2-5",
    title: "Putovanja i odmor",
    titleDe: "Reisen und Urlaub",
    description: "Rezervacije, na aerodromu, u hotelu.",
    level: "A2",
    unit: 3,
    order: 5,
    duration: 40,
    xpReward: 90,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Planiranje puta", "Kupovina karte", "Znamenitosti"],
    exercises: [
      {
        id: "a2-5-ex1",
        type: "matching",
        question: "Poveži pojmove.",
        pairs: [
          { de: "der Flughafen", sr: "aerodrom" },
          { de: "das Ticket", sr: "karta" },
          { de: "der Koffer", sr: "kofer" },
          { de: "der Pass", sr: "pasoš" },
          { de: "der Reiseführer", sr: "turistički vodič" },
          { de: "die Unterkunft", sr: "smeštaj" }
        ],
        correctAnswer: "matching-check",
        explanation: "Putni pojmovi."
      },
      {
        id: "a2-5-ex2",
        type: "multiple-choice",
        question: "Wo kann man einchecken?",
        options: ["Am Schalter", "Im Restaurant", "Im Kino", "In der Bibliothek"],
        correctAnswer: "Am Schalter",
        explanation: "Der Schalter = šalter. Einchecken = prijaviti se."
      },
      {
        id: "a2-5-ex3",
        type: "fill-blank",
        question: "Ich möchte ein Zimmer für zwei Nächte ___. (rezervisati)",
        correctAnswer: "reservieren",
        hint: "Glagol rezervisati",
        explanation: "Reservieren = rezervisati."
      },
      {
        id: "a2-5-ex4",
        type: "matching",
        question: "Poveži hotelske pojmove.",
        pairs: [
          { de: "das Einzelzimmer", sr: "jednokrevetna soba" },
          { de: "das Doppelzimmer", sr: "dvokrevetna soba" },
          { de: "das Frühstück inbegriffen", sr: "doručak uključen" },
          { de: "die Rezeption", sr: "recepcija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Hotelski vokabular."
      },
      {
        id: "a2-5-ex5",
        type: "translation",
        question: "Prevedi: 'Gde mogu kupiti kartu za voz?'",
        correctAnswer: ["Wo kann ich eine Fahrkarte kaufen?", "Wo kann ich ein Zugticket kaufen?"],
        explanation: "Die Fahrkarte = vozna karta."
      },
      {
        id: "a2-5-ex6",
        type: "multiple-choice",
        question: "Von welchem Gleis fährt der Zug ab?",
        options: ["Sa kog perona polazi voz?", "Koliko košta karta?", "Kada stiže voz?", "Gde je stanica?"],
        correctAnswer: "Sa kog perona polazi voz?",
        explanation: "Das Gleis = peron. Abfahren = polaziti."
      },
      {
        id: "a2-5-ex7",
        type: "fill-blank",
        question: "Der Flug ___ um 10 Uhr. (polaziti)",
        correctAnswer: "geht",
        hint: "Glagol za let",
        explanation: "Der Flug geht = let polazi (koristi se 'gehen')."
      },
      {
        id: "a2-5-ex8",
        type: "matching",
        question: "Poveži aktivnosti na odmoru.",
        pairs: [
          { de: "sich sonnen", sr: "sunčati se" },
          { de: "Sehenswürdigkeiten besichtigen", sr: "razgledati znamenitosti" },
          { de: "wandern", sr: "pešačiti" },
          { de: "Souvenirs kaufen", sr: "kupiti suvenire" }
        ],
        correctAnswer: "matching-check",
        explanation: "Tipične aktivnosti tokom putovanja."
      },
      {
        id: "a2-5-ex9",
        type: "translation",
        question: "Prevedi: 'Imam rezervaciju na ime Petrović.'",
        correctAnswer: ["Ich habe eine Reservierung auf den Namen Petrović", "Ich habe eine Reservierung auf den Namen Petrovic"],
        explanation: "Auf den Namen = na ime."
      },
      {
        id: "a2-5-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Tag, ich hätte gern ein Doppelzimmer mit Meerblick für eine Woche, bitte.",
        options: ["Dobar dan, želeo bih dvokrevetnu sobu sa pogledom na more na nedelju dana, molim.", "Dobar dan, tražim jednokrevetnu sobu za dva dana.", "Dobar dan, imam rezervaciju za večeras.", "Dobar dan, koliko košta noćenje?"],
        correctAnswer: "Dobar dan, želeo bih dvokrevetnu sobu sa pogledom na more na nedelju dana, molim.",
        explanation: "Meerblick = pogled na more, eine Woche = nedelju dana."
      }
    ]
  },
  {
    id: "a2-6",
    title: "Kultura i mediji",
    titleDe: "Kultur und Medien",
    description: "TV, novine, internet, filmovi.",
    level: "A2",
    unit: 3,
    order: 6,
    duration: 30,
    xpReward: 80,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Vrste medija", "Poređenje (komparativ i superlativ)", "Mišljenje"],
    exercises: [
      {
        id: "a2-6-ex1",
        type: "fill-blank",
        question: "Dieser Film ist ___ als der andere. (bolji)",
        correctAnswer: "besser",
        explanation: "Komparativ od 'gut' je 'besser'."
      },
      {
        id: "a2-6-ex2",
        type: "matching",
        question: "Poveži medije.",
        pairs: [
          { de: "die Zeitung", sr: "novine" },
          { de: "die Zeitschrift", sr: "časopis" },
          { de: "das Radio", sr: "radio" },
          { de: "der Fernseher", sr: "televizor" },
          { de: "das Internet", sr: "internet" },
          { de: "der Podcast", sr: "podcast" }
        ],
        correctAnswer: "matching-check",
        explanation: "Različite vrste medija."
      },
      {
        id: "a2-6-ex3",
        type: "multiple-choice",
        question: "Der Mount Everest ist ___ Berg der Welt.",
        options: ["der höchste", "der höher", "der hoch", "der am höchsten"],
        correctAnswer: "der höchste",
        explanation: "Superlativ sa članom: der/die/das + pridev-ste."
      },
      {
        id: "a2-6-ex4",
        type: "matching",
        question: "Poveži komparativ i superlativ.",
        pairs: [
          { de: "gut - besser", sr: "am besten" },
          { de: "viel - mehr", sr: "am meisten" },
          { de: "gern - lieber", sr: "am liebsten" },
          { de: "hoch - höher", sr: "am höchsten" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nepravilni oblici poređenja."
      },
      {
        id: "a2-6-ex5",
        type: "fill-blank",
        question: "Ich sehe ___ Nachrichten als Serien. (radije)",
        correctAnswer: "lieber",
        explanation: "Lieber = radije. Komparativ od 'gern'."
      },
      {
        id: "a2-6-ex6",
        type: "translation",
        question: "Prevedi: 'Mislim da je ovaj film dosadan.'",
        correctAnswer: ["Ich finde, dass dieser Film langweilig ist", "Ich finde diesen Film langweilig"],
        explanation: "Finden = smatrati/misliti. Langweilig = dosadan."
      },
      {
        id: "a2-6-ex7",
        type: "multiple-choice",
        question: "Welche Sendung schaust du am liebsten?",
        options: ["Eine Dokumentation", "Ein Buch", "Eine Zeitung", "Ein Brief"],
        correctAnswer: "Eine Dokumentation",
        explanation: "Die Sendung = emisija. Schauen = gledati."
      },
      {
        id: "a2-6-ex8",
        type: "matching",
        question: "Poveži žanrove.",
        pairs: [
          { de: "der Krimi", sr: "kriminalistički" },
          { de: "die Komödie", sr: "komedija" },
          { de: "der Horrorfilm", sr: "horor" },
          { de: "der Actionfilm", sr: "akcioni film" },
          { de: "die Dokumentation", sr: "dokumentarac" }
        ],
        correctAnswer: "matching-check",
        explanation: "Filmski žanrovi."
      },
      {
        id: "a2-6-ex9",
        type: "fill-blank",
        question: "Dieses Buch ist ___ interessant. (veoma)",
        correctAnswer: "sehr",
        explanation: "Sehr = veoma. Pojačava pridev."
      },
      {
        id: "a2-6-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Meiner Meinung nach ist das Internet wichtiger als Fernsehen, weil man mehr Informationen findet.",
        options: ["Po mom mišljenju, internet je važniji od televizije jer se pronađe više informacija.", "Televizija je bolja od interneta.", "Ne koristim ni internet ni televiziju.", "Časopisi su najvažniji medij."],
        correctAnswer: "Po mom mišljenju, internet je važniji od televizije jer se pronađe više informacija.",
        explanation: "Meiner Meinung nach = po mom mišljenju, wichtiger = važniji."
      }
    ]
  },
  {
    id: "a2-7",
    title: "Kupovina i pokloni",
    titleDe: "Einkaufen und Geschenke",
    description: "Robne kuće, reklamacije, pakovanje poklona.",
    level: "A2",
    unit: 4,
    order: 7,
    duration: 30,
    xpReward: 80,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Odeljenja u prodavnici", "Zamenice u dativu", "Ljubazna pitanja"],
    exercises: [
      {
        id: "a2-7-ex1",
        type: "multiple-choice",
        question: "Ich schenke ___ (dir) ein Buch.",
        options: ["dir", "dich", "du", "dein"],
        correctAnswer: "dir",
        explanation: "Glagol schenken traži Dativ (kome?). Dativ od 'du' je 'dir'."
      },
      {
        id: "a2-7-ex2",
        type: "matching",
        question: "Poveži dativne zamenice.",
        pairs: [
          { de: "ich", sr: "mir" },
          { de: "du", sr: "dir" },
          { de: "er", sr: "ihm" },
          { de: "sie", sr: "ihr" },
          { de: "wir", sr: "uns" },
          { de: "sie (mn.)", sr: "ihnen" }
        ],
        correctAnswer: "matching-check",
        explanation: "Lične zamenice u dativu."
      },
      {
        id: "a2-7-ex3",
        type: "fill-blank",
        question: "Können Sie ___ bitte helfen? (meni)",
        correctAnswer: "mir",
        hint: "Dativ od 'ich'",
        explanation: "Helfen traži dativ. Mir = meni."
      },
      {
        id: "a2-7-ex4",
        type: "matching",
        question: "Poveži odeljenja u prodavnici.",
        pairs: [
          { de: "die Herrenabteilung", sr: "muško odeljenje" },
          { de: "die Damenabteilung", sr: "žensko odeljenje" },
          { de: "die Kasse", sr: "kasa" },
          { de: "die Umkleidekabine", sr: "kabina za presvlačenje" },
          { de: "die Lebensmittelabteilung", sr: "odeljenje hrane" }
        ],
        correctAnswer: "matching-check",
        explanation: "Odeljenja u robnoj kući."
      },
      {
        id: "a2-7-ex5",
        type: "translation",
        question: "Prevedi: 'Mogu li vam pomoći?'",
        correctAnswer: ["Kann ich Ihnen helfen?", "Darf ich Ihnen helfen?"],
        explanation: "Ihnen = vama (formalno, dativ)."
      },
      {
        id: "a2-7-ex6",
        type: "multiple-choice",
        question: "Ich möchte das Geschenk ___ meine Mutter kaufen.",
        options: ["für", "mit", "von", "aus"],
        correctAnswer: "für",
        explanation: "Für = za. Kupujem poklon ZA majku."
      },
      {
        id: "a2-7-ex7",
        type: "fill-blank",
        question: "Das Kleid gefällt ___ sehr gut. (joj)",
        correctAnswer: "ihr",
        explanation: "Gefallen traži dativ. Ihr = njoj."
      },
      {
        id: "a2-7-ex8",
        type: "matching",
        question: "Poveži fraze za kupovinu.",
        pairs: [
          { de: "Das ist mir zu teuer", sr: "To mi je preskupo" },
          { de: "Haben Sie das in Größe M?", sr: "Imate li to u veličini M?" },
          { de: "Ich schaue nur", sr: "Samo gledam" },
          { de: "Das nehme ich", sr: "Uzimam to" }
        ],
        correctAnswer: "matching-check",
        explanation: "Korisne fraze pri kupovini."
      },
      {
        id: "a2-7-ex9",
        type: "translation",
        question: "Prevedi: 'Ovaj džemper ti dobro stoji.'",
        correctAnswer: ["Dieser Pullover steht dir gut", "Der Pullover steht dir gut"],
        explanation: "Stehen + dativ = stajati nekome (o odeći)."
      },
      {
        id: "a2-7-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich suche ein Geschenk für meinen Bruder. Er interessiert sich für Technik.",
        options: ["Tražim poklon za brata. On se interesuje za tehniku.", "Tražim poklon za sestru. Ona voli cveće.", "Tražim nešto za sebe. Volim knjige.", "Tražim poklon za roditelje. Vole putovanja."],
        correctAnswer: "Tražim poklon za brata. On se interesuje za tehniku.",
        explanation: "Sich interessieren für = interesovati se za."
      }
    ]
  },
  {
    id: "a2-8",
    title: "Priroda i životinje",
    titleDe: "Natur und Tiere",
    description: "Domaće i divlje životinje, pejzaži.",
    level: "A2",
    unit: 4,
    order: 8,
    duration: 25,
    xpReward: 75,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Životinje", "Nebeske strane", "Veznik 'dass'"],
    exercises: [
      {
        id: "a2-8-ex1",
        type: "matching",
        question: "Poveži životinje.",
        pairs: [
          { de: "der Hund", sr: "pas" },
          { de: "die Katze", sr: "mačka" },
          { de: "das Pferd", sr: "konj" },
          { de: "der Vogel", sr: "ptica" },
          { de: "der Fisch", sr: "riba" },
          { de: "die Kuh", sr: "krava" }
        ],
        correctAnswer: "matching-check",
        explanation: "Životinje."
      },
      {
        id: "a2-8-ex2",
        type: "fill-blank",
        question: "Ich glaube, ___ die Natur wichtig ist. (da)",
        correctAnswer: "dass",
        hint: "Veznik za zavisnu rečenicu",
        explanation: "Dass = da. Uvodi zavisnu rečenicu, glagol ide na kraj."
      },
      {
        id: "a2-8-ex3",
        type: "matching",
        question: "Poveži divlje životinje.",
        pairs: [
          { de: "der Bär", sr: "medved" },
          { de: "der Wolf", sr: "vuk" },
          { de: "der Fuchs", sr: "lisica" },
          { de: "der Hirsch", sr: "jelen" },
          { de: "der Löwe", sr: "lav" },
          { de: "der Elefant", sr: "slon" }
        ],
        correctAnswer: "matching-check",
        explanation: "Divlje životinje."
      },
      {
        id: "a2-8-ex4",
        type: "multiple-choice",
        question: "Welches Tier kann fliegen?",
        options: ["Der Vogel", "Der Fisch", "Die Schlange", "Der Hund"],
        correctAnswer: "Der Vogel",
        explanation: "Fliegen = leteti. Ptice (Vögel) lete."
      },
      {
        id: "a2-8-ex5",
        type: "translation",
        question: "Prevedi: 'Mislim da su psi najbolji kućni ljubimci.'",
        correctAnswer: ["Ich denke, dass Hunde die besten Haustiere sind", "Ich glaube, dass Hunde die besten Haustiere sind"],
        explanation: "Das Haustier = kućni ljubimac."
      },
      {
        id: "a2-8-ex6",
        type: "matching",
        question: "Poveži strane sveta.",
        pairs: [
          { de: "der Norden", sr: "sever" },
          { de: "der Süden", sr: "jug" },
          { de: "der Osten", sr: "istok" },
          { de: "der Westen", sr: "zapad" }
        ],
        correctAnswer: "matching-check",
        explanation: "Četiri strane sveta."
      },
      {
        id: "a2-8-ex7",
        type: "fill-blank",
        question: "Im Wald leben viele ___. (životinje)",
        correctAnswer: "Tiere",
        explanation: "Das Tier = životinja. Die Tiere = životinje (množina)."
      },
      {
        id: "a2-8-ex8",
        type: "matching",
        question: "Poveži pejzaže.",
        pairs: [
          { de: "der Wald", sr: "šuma" },
          { de: "der Berg", sr: "planina" },
          { de: "das Meer", sr: "more" },
          { de: "der See", sr: "jezero" },
          { de: "der Fluss", sr: "reka" },
          { de: "die Wiese", sr: "livada" }
        ],
        correctAnswer: "matching-check",
        explanation: "Elementi prirode."
      },
      {
        id: "a2-8-ex9",
        type: "multiple-choice",
        question: "Ich weiß, dass er einen Hund ___.",
        options: ["hat", "haben", "habe", "habt"],
        correctAnswer: "hat",
        explanation: "U zavisnoj rečenici sa 'dass' glagol ide na kraj (er hat -> dass er... hat)."
      },
      {
        id: "a2-8-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In Deutschland gibt es viele Wälder und Seen. Die Natur ist sehr schön, besonders im Herbst.",
        options: ["U Nemačkoj ima mnogo šuma i jezera. Priroda je veoma lepa, posebno u jesen.", "U Nemačkoj nema puno prirode.", "U Nemačkoj su planine najviše u Evropi.", "U Nemačkoj žive samo divlje životinje."],
        correctAnswer: "U Nemačkoj ima mnogo šuma i jezera. Priroda je veoma lepa, posebno u jesen.",
        explanation: "Es gibt = ima. Besonders = posebno/naročito."
      }
    ]
  },
  {
    id: "a2-9",
    title: "Osećanja i karakter",
    titleDe: "Gefühle und Charakter",
    description: "Sreća, tuga, ljutnja, opisivanje osobina.",
    level: "A2",
    unit: 5,
    order: 9,
    duration: 30,
    xpReward: 80,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Emocije", "Veznik 'weil'", "Saveti (sollten)"],
    exercises: [
      {
        id: "a2-9-ex1",
        type: "multiple-choice",
        question: "Ich bin glücklich, ___ ich Urlaub habe.",
        options: ["weil", "denn", "aber", "oder"],
        correctAnswer: "weil",
        explanation: "Weil (zato što) uvodi zavisnu rečenicu."
      },
      {
        id: "a2-9-ex2",
        type: "matching",
        question: "Poveži emocije.",
        pairs: [
          { de: "glücklich", sr: "srećan" },
          { de: "traurig", sr: "tužan" },
          { de: "wütend", sr: "ljut" },
          { de: "nervös", sr: "nervozan" },
          { de: "überrascht", sr: "iznenađen" },
          { de: "entspannt", sr: "opušten" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovne emocije."
      },
      {
        id: "a2-9-ex3",
        type: "fill-blank",
        question: "Er ist traurig, ___ seine Freundin ihn verlassen hat. (jer)",
        correctAnswer: "weil",
        explanation: "Weil = jer/zato što. Glagol ide na kraj zavisne rečenice."
      },
      {
        id: "a2-9-ex4",
        type: "matching",
        question: "Poveži osobine karaktera.",
        pairs: [
          { de: "freundlich", sr: "prijateljski" },
          { de: "ehrlich", sr: "iskren" },
          { de: "fleißig", sr: "vredan" },
          { de: "faul", sr: "lenj" },
          { de: "schüchtern", sr: "stidljiv" },
          { de: "mutig", sr: "hrabar" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pridevi za opis karaktera."
      },
      {
        id: "a2-9-ex5",
        type: "translation",
        question: "Prevedi: 'Ljut sam jer sam izgubio utakmicu.'",
        correctAnswer: ["Ich bin wütend, weil ich das Spiel verloren habe", "Ich bin sauer, weil ich das Spiel verloren habe"],
        explanation: "Wütend/sauer = ljut. Verlieren = izgubiti."
      },
      {
        id: "a2-9-ex6",
        type: "multiple-choice",
        question: "Du solltest mehr schlafen. Šta znači 'solltest'?",
        options: ["Trebalo bi", "Moraš", "Možeš", "Hoćeš"],
        correctAnswer: "Trebalo bi",
        explanation: "Sollten = trebalo bi (savet). Solltest = trebalo bi ti."
      },
      {
        id: "a2-9-ex7",
        type: "fill-blank",
        question: "Mein Bruder ist sehr ___. Er hilft immer anderen. (ljubazan)",
        correctAnswer: "nett",
        hint: "Sinonim za freundlich",
        explanation: "Nett = ljubazan, fin."
      },
      {
        id: "a2-9-ex8",
        type: "matching",
        question: "Poveži savete.",
        pairs: [
          { de: "Du solltest Sport machen", sr: "Trebalo bi da vežbaš" },
          { de: "Du solltest früher schlafen", sr: "Trebalo bi ranije da spavaš" },
          { de: "Du solltest weniger arbeiten", sr: "Trebalo bi manje da radiš" },
          { de: "Du solltest mehr trinken", sr: "Trebalo bi više da piješ" }
        ],
        correctAnswer: "matching-check",
        explanation: "Saveti sa 'sollten'."
      },
      {
        id: "a2-9-ex9",
        type: "translation",
        question: "Prevedi: 'Ona je nervozna jer ima ispit sutra.'",
        correctAnswer: ["Sie ist nervös, weil sie morgen eine Prüfung hat", "Sie ist nervös, weil sie morgen Prüfung hat"],
        explanation: "Nervös = nervozna. Die Prüfung = ispit."
      },
      {
        id: "a2-9-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Ich bin gestresst, weil ich zu viel Arbeit habe. Mein Chef ist sehr streng.",
        options: ["Stresiran sam jer imam previše posla. Moj šef je veoma strog.", "Srećan sam jer imam malo posla.", "Umoran sam jer sam slabo spavao.", "Opušten sam jer sam na odmoru."],
        correctAnswer: "Stresiran sam jer imam previše posla. Moj šef je veoma strog.",
        explanation: "Gestresst = stresiran, streng = strog."
      }
    ]
  },
  {
    id: "a2-10",
    title: "Tehnika u kući",
    titleDe: "Technik im Haus",
    description: "Kućni aparati, uputstva za upotrebu.",
    level: "A2",
    unit: 5,
    order: 10,
    duration: 35,
    xpReward: 85,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Aparati", "Imperativ (ponavljanje)", "Veznik 'wenn'"],
    exercises: [
      {
        id: "a2-10-ex1",
        type: "matching",
        question: "Poveži aparate.",
        pairs: [
          { de: "der Kühlschrank", sr: "frižider" },
          { de: "die Waschmaschine", sr: "veš mašina" },
          { de: "der Staubsauger", sr: "usisivač" },
          { de: "die Mikrowelle", sr: "mikrotalasna" },
          { de: "der Herd", sr: "šporet" },
          { de: "die Spülmaschine", sr: "mašina za sudove" }
        ],
        correctAnswer: "matching-check",
        explanation: "Kućni aparati."
      },
      {
        id: "a2-10-ex2",
        type: "multiple-choice",
        question: "Was machst du, wenn der Fernseher nicht funktioniert?",
        options: ["Ich rufe den Kundendienst an.", "Ich koche Kaffee.", "Ich gehe schlafen.", "Ich lese ein Buch."],
        correctAnswer: "Ich rufe den Kundendienst an.",
        explanation: "Kundendienst = servis. Anrufen = pozvati telefonom."
      },
      {
        id: "a2-10-ex3",
        type: "fill-blank",
        question: "___ du Hilfe brauchst, ruf mich an! (ako)",
        correctAnswer: "Wenn",
        hint: "Uslovni veznik",
        explanation: "Wenn = ako/kada. Uvodi uslovnu rečenicu."
      },
      {
        id: "a2-10-ex4",
        type: "matching",
        question: "Poveži tehnološke pojmove.",
        pairs: [
          { de: "einschalten", sr: "uključiti" },
          { de: "ausschalten", sr: "isključiti" },
          { de: "der Knopf", sr: "dugme" },
          { de: "die Fernbedienung", sr: "daljinski" },
          { de: "das Kabel", sr: "kabl" }
        ],
        correctAnswer: "matching-check",
        explanation: "Korišćenje uređaja."
      },
      {
        id: "a2-10-ex5",
        type: "translation",
        question: "Prevedi: 'Ako je hladno, uključi grejanje.'",
        correctAnswer: ["Wenn es kalt ist, schalte die Heizung ein", "Wenn es kalt ist, schalt die Heizung ein"],
        explanation: "Die Heizung = grejanje. Einschalten = uključiti."
      },
      {
        id: "a2-10-ex6",
        type: "multiple-choice",
        question: "Drücken Sie den roten Knopf! (Imperativ)",
        options: ["Pritisnite crveno dugme!", "Nemojte pritiskati!", "Pogledajte crveno dugme!", "Crveno dugme ne radi!"],
        correctAnswer: "Pritisnite crveno dugme!",
        explanation: "Drücken = pritisnuti. Imperativ za 'Sie' forme."
      },
      {
        id: "a2-10-ex7",
        type: "fill-blank",
        question: "Die Waschmaschine ist ___. Wir brauchen eine neue. (pokvarena)",
        correctAnswer: "kaputt",
        explanation: "Kaputt = pokvareno/slomljeno."
      },
      {
        id: "a2-10-ex8",
        type: "matching",
        question: "Poveži uputstva.",
        pairs: [
          { de: "Zuerst...", sr: "Prvo..." },
          { de: "Dann...", sr: "Zatim..." },
          { de: "Danach...", sr: "Nakon toga..." },
          { de: "Zum Schluss...", sr: "Na kraju..." }
        ],
        correctAnswer: "matching-check",
        explanation: "Reči za redosled u uputstvima."
      },
      {
        id: "a2-10-ex9",
        type: "translation",
        question: "Prevedi: 'Kada stignem kući, napravim kafu.'",
        correctAnswer: ["Wenn ich nach Hause komme, mache ich Kaffee", "Wenn ich nach Hause komme, mache ich mir einen Kaffee"],
        explanation: "Wenn = kada (ponavljajuća radnja)."
      },
      {
        id: "a2-10-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Zuerst drücken Sie den grünen Knopf. Dann wählen Sie das Programm. Die Maschine startet automatisch.",
        options: ["Prvo pritisnite zeleno dugme. Zatim izaberite program. Mašina kreće automatski.", "Uključite crveno dugme. Sačekajte 5 minuta.", "Otvorite vrata. Stavite odeću unutra.", "Isključite mašinu. Izvadite rublje."],
        correctAnswer: "Prvo pritisnite zeleno dugme. Zatim izaberite program. Mašina kreće automatski.",
        explanation: "Wählen = izabrati, startet = kreće/startuje."
      }
    ]
  },

  // ==========================================
  // B1 LEVEL - SREDNJI (10 Lekcija)
  // ==========================================
  {
    id: "b1-1",
    title: "Odnosi među ljudima",
    titleDe: "Beziehungen",
    description: "Prijateljstvo, ljubav, konflikti, komšije.",
    level: "B1",
    unit: 1,
    order: 1,
    duration: 40,
    xpReward: 100,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Vrste odnosa", "Recipročni glagoli", "Pridevski nastavci"],
    exercises: [
      {
        id: "b1-1-ex1",
        type: "fill-blank",
        question: "Wir kennen ___ schon seit 10 Jahren. (sebe/nas)",
        correctAnswer: "uns",
        explanation: "Povratna zamenica za 'wir' je 'uns'."
      },
      {
        id: "b1-1-ex2",
        type: "matching",
        question: "Poveži vrste odnosa.",
        pairs: [
          { de: "die Freundschaft", sr: "prijateljstvo" },
          { de: "die Beziehung", sr: "veza" },
          { de: "die Ehe", sr: "brak" },
          { de: "die Nachbarschaft", sr: "komšiluk" },
          { de: "die Bekanntschaft", sr: "poznanstvo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Vrste međuljudskih odnosa."
      },
      {
        id: "b1-1-ex3",
        type: "multiple-choice",
        question: "Sie lieben ___. (recipročno)",
        options: ["sich", "uns", "euch", "mich"],
        correctAnswer: "sich",
        explanation: "Sich = sebe (povratna zamenica za sie/Sie)."
      },
      {
        id: "b1-1-ex4",
        type: "matching",
        question: "Poveži prideve za karakter.",
        pairs: [
          { de: "verständnisvoll", sr: "pun razumevanja" },
          { de: "eifersüchtig", sr: "ljubomoran" },
          { de: "zuverlässig", sr: "pouzdan" },
          { de: "egoistisch", sr: "sebičan" },
          { de: "großzügig", sr: "velikodušan" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pridevi sa nastavcima -voll, -süchtig, -ig."
      },
      {
        id: "b1-1-ex5",
        type: "fill-blank",
        question: "Wir streiten ___ manchmal. (sebe)",
        correctAnswer: "uns",
        hint: "Sich streiten = svađati se",
        explanation: "Sich streiten je recipročan glagol."
      },
      {
        id: "b1-1-ex6",
        type: "translation",
        question: "Prevedi: 'Oni se viđaju svaki dan.'",
        correctAnswer: ["Sie sehen sich jeden Tag", "Sie treffen sich jeden Tag"],
        explanation: "Sich sehen / sich treffen = viđati se / nalaziti se."
      },
      {
        id: "b1-1-ex7",
        type: "multiple-choice",
        question: "Mein Nachbar und ich verstehen ___ gut.",
        options: ["uns", "sich", "euch", "mich"],
        correctAnswer: "uns",
        explanation: "Mein Nachbar und ich = wir. Povratna zamenica je 'uns'."
      },
      {
        id: "b1-1-ex8",
        type: "matching",
        question: "Poveži fraze za odnose.",
        pairs: [
          { de: "sich verlieben", sr: "zaljubiti se" },
          { de: "sich trennen", sr: "razdvojiti se" },
          { de: "sich versöhnen", sr: "pomiriti se" },
          { de: "sich kümmern um", sr: "brinuti se o" }
        ],
        correctAnswer: "matching-check",
        explanation: "Povratni glagoli za odnose."
      },
      {
        id: "b1-1-ex9",
        type: "fill-blank",
        question: "Eine ___ Freundschaft ist wichtig. (pravo)",
        correctAnswer: "echte",
        explanation: "Echt = pravi/istinski. Pridevi ispred imenice dobijaju nastavak."
      },
      {
        id: "b1-1-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Meine beste Freundin und ich kennen uns seit der Kindheit. Wir haben viel zusammen erlebt.",
        options: ["Moja najbolja drugarica i ja se poznajemo od detinjstva. Puno smo zajedno doživele.", "Moj komšija i ja se svađamo svaki dan.", "Moj brat i ja se ne slažemo.", "Moji roditelji su se upoznali na poslu."],
        correctAnswer: "Moja najbolja drugarica i ja se poznajemo od detinjstva. Puno smo zajedno doživele.",
        explanation: "Seit der Kindheit = od detinjstva, erleben = doživeti."
      }
    ]
  },
  {
    id: "b1-2",
    title: "Budućnost i planovi",
    titleDe: "Zukunft und Pläne",
    description: "Životni ciljevi, predviđanja, Futur I.",
    level: "B1",
    unit: 1,
    order: 2,
    duration: 40,
    xpReward: 100,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Futur I (werden + infinitiv)", "Vremenski izrazi", "Izražavanje nade"],
    exercises: [
      {
        id: "b1-2-ex1",
        type: "fill-blank",
        question: "Nächstes Jahr ___ ich nach Deutschland reisen. (werden)",
        correctAnswer: "werde",
        explanation: "Futur I se gradi od glagola werden i infinitiva."
      },
      {
        id: "b1-2-ex2",
        type: "matching",
        question: "Poveži konjugaciju 'werden'.",
        pairs: [
          { de: "ich", sr: "werde" },
          { de: "du", sr: "wirst" },
          { de: "er/sie/es", sr: "wird" },
          { de: "wir", sr: "werden" },
          { de: "ihr", sr: "werdet" },
          { de: "sie/Sie", sr: "werden" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pomoćni glagol 'werden' za Futur I."
      },
      {
        id: "b1-2-ex3",
        type: "multiple-choice",
        question: "In zehn Jahren ___ ich hoffentlich eine Familie haben.",
        options: ["werde", "bin", "habe", "war"],
        correctAnswer: "werde",
        explanation: "Futur I: werden + infinitiv (haben)."
      },
      {
        id: "b1-2-ex4",
        type: "translation",
        question: "Prevedi: 'Ona će studirati medicinu.'",
        correctAnswer: ["Sie wird Medizin studieren", "Sie wird Medizin studieren."],
        explanation: "Werden + infinitiv na kraju rečenice."
      },
      {
        id: "b1-2-ex5",
        type: "matching",
        question: "Poveži vremenske izraze.",
        pairs: [
          { de: "bald", sr: "uskoro" },
          { de: "in Zukunft", sr: "u budućnosti" },
          { de: "eines Tages", sr: "jednog dana" },
          { de: "irgendwann", sr: "nekad" },
          { de: "nie mehr", sr: "nikad više" }
        ],
        correctAnswer: "matching-check",
        explanation: "Izrazi za budućnost."
      },
      {
        id: "b1-2-ex6",
        type: "fill-blank",
        question: "Ich hoffe, dass ich bald einen guten Job finden ___. (werden)",
        correctAnswer: "werde",
        explanation: "U zavisnoj rečenici 'werden' ide na kraj."
      },
      {
        id: "b1-2-ex7",
        type: "multiple-choice",
        question: "Was ___ du nach dem Studium machen?",
        options: ["wirst", "werdest", "wird", "werden"],
        correctAnswer: "wirst",
        explanation: "Du wirst = ti ćeš."
      },
      {
        id: "b1-2-ex8",
        type: "matching",
        question: "Poveži životne ciljeve.",
        pairs: [
          { de: "heiraten", sr: "oženiti se/udati se" },
          { de: "Karriere machen", sr: "napraviti karijeru" },
          { de: "ein Haus bauen", sr: "sagraditi kuću" },
          { de: "um die Welt reisen", sr: "putovati oko sveta" }
        ],
        correctAnswer: "matching-check",
        explanation: "Uobičajeni životni ciljevi."
      },
      {
        id: "b1-2-ex9",
        type: "translation",
        question: "Prevedi: 'Nadam se da ću uspeti.'",
        correctAnswer: ["Ich hoffe, dass ich es schaffen werde", "Ich hoffe, dass ich erfolgreich sein werde"],
        explanation: "Schaffen = uspeti, erfolgreich = uspešan."
      },
      {
        id: "b1-2-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In fünf Jahren werde ich hoffentlich meinen Master abgeschlossen haben und in meinem Traumjob arbeiten.",
        options: ["Za pet godina ću nadamo se završiti master i raditi posao iz snova.", "Za pet godina ću biti u penziji.", "Za pet godina ću se preseliti u drugu državu.", "Za pet godina ću otvoriti svoj restoran."],
        correctAnswer: "Za pet godina ću nadamo se završiti master i raditi posao iz snova.",
        explanation: "Abschließen = završiti, Traumjob = posao iz snova."
      }
    ]
  },
  {
    id: "b1-3",
    title: "Poslovni svet",
    titleDe: "Geschäftswelt",
    description: "Pisanje CV-a, razgovor za posao, poslovna komunikacija.",
    level: "B1",
    unit: 2,
    order: 3,
    duration: 45,
    xpReward: 110,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Bewerbung (prijava)", "Telefonski razgovori", "Ljubazne fraze (Konjunktiv II)"],
    exercises: [
      {
        id: "b1-3-ex1",
        type: "multiple-choice",
        question: "Könnten Sie mich bitte mit Herrn Müller ___?",
        options: ["verbinden", "telefonieren", "sprechen", "rufen"],
        correctAnswer: "verbinden",
        explanation: "Verbinden = spojiti (telefonski)."
      },
      {
        id: "b1-3-ex2",
        type: "matching",
        question: "Poveži delove CV-a.",
        pairs: [
          { de: "der Lebenslauf", sr: "biografija" },
          { de: "die Berufserfahrung", sr: "radno iskustvo" },
          { de: "die Ausbildung", sr: "obrazovanje" },
          { de: "die Kenntnisse", sr: "veštine/znanja" },
          { de: "das Anschreiben", sr: "propratno pismo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Elementi prijave za posao."
      },
      {
        id: "b1-3-ex3",
        type: "fill-blank",
        question: "Ich ___ mich gern vorstellen. (želeti - ljubazno)",
        correctAnswer: "würde",
        hint: "Konjunktiv II od werden",
        explanation: "Würde + infinitiv = ljubazan oblik."
      },
      {
        id: "b1-3-ex4",
        type: "translation",
        question: "Prevedi: 'Da li biste mogli da ponovite?'",
        correctAnswer: ["Könnten Sie das bitte wiederholen?", "Könnten Sie bitte wiederholen?"],
        explanation: "Könnten = mogli biste (ljubazno)."
      },
      {
        id: "b1-3-ex5",
        type: "matching",
        question: "Poveži ljubazne fraze.",
        pairs: [
          { de: "Ich hätte gern...", sr: "Želeo bih..." },
          { de: "Könnten Sie...?", sr: "Da li biste mogli...?" },
          { de: "Wären Sie so freundlich...?", sr: "Da li biste bili tako ljubazni...?" },
          { de: "Dürfte ich...?", sr: "Da li bih smeo...?" }
        ],
        correctAnswer: "matching-check",
        explanation: "Konjunktiv II za ljubaznost."
      },
      {
        id: "b1-3-ex6",
        type: "multiple-choice",
        question: "Ich ___ Ihnen meinen Lebenslauf schicken.",
        options: ["würde", "werde", "will", "wollte"],
        correctAnswer: "würde",
        explanation: "Würde je ljubazniji oblik od 'werde'."
      },
      {
        id: "b1-3-ex7",
        type: "fill-blank",
        question: "Wann ___ ich Sie zurückrufen? (moći - ljubazno)",
        correctAnswer: "könnte",
        explanation: "Könnte = mogao bih (ljubazna forma)."
      },
      {
        id: "b1-3-ex8",
        type: "matching",
        question: "Poveži telefonske fraze.",
        pairs: [
          { de: "Guten Tag, hier spricht...", sr: "Dobar dan, ovde govori..." },
          { de: "Ich rufe an wegen...", sr: "Zovem povodom..." },
          { de: "Können Sie mir weiterhelfen?", sr: "Možete li mi pomoći dalje?" },
          { de: "Ich warte auf Ihren Rückruf", sr: "Čekam vaš povratni poziv" }
        ],
        correctAnswer: "matching-check",
        explanation: "Profesionalne telefonske fraze."
      },
      {
        id: "b1-3-ex9",
        type: "translation",
        question: "Prevedi: 'Interesuje me pozicija programera.'",
        correctAnswer: ["Ich interessiere mich für die Stelle als Programmierer", "Ich interessiere mich für die Position als Programmierer"],
        explanation: "Die Stelle/Position = pozicija/radno mesto."
      },
      {
        id: "b1-3-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Sehr geehrte Damen und Herren, ich bewerbe mich um die ausgeschriebene Stelle als Projektmanager.",
        options: ["Poštovane dame i gospodo, prijavljujem se na oglašenu poziciju projektnog menadžera.", "Dragi prijatelji, tražim novi posao.", "Zdravo, imam pitanje o oglasu.", "Dobar dan, da li ste primili moju prijavu?"],
        correctAnswer: "Poštovane dame i gospodo, prijavljujem se na oglašenu poziciju projektnog menadžera.",
        explanation: "Sich bewerben um = prijaviti se za, ausgeschrieben = oglašen."
      }
    ]
  },
  {
    id: "b1-4",
    title: "Zdravlje i ishrana",
    titleDe: "Gesundheit und Ernährung",
    description: "Zdrav život, dijete, fitnes, poseta specijalisti.",
    level: "B1",
    unit: 2,
    order: 4,
    duration: 40,
    xpReward: 100,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Nutricionizam", "Genitiv (čiji?)", "Saveti lekara"],
    exercises: [
      {
        id: "b1-4-ex1",
        type: "fill-blank",
        question: "Das ist das Auto ___ Vaters. (moj)",
        correctAnswer: "meines",
        explanation: "Genitiv muškog roda dobija nastavak -s ili -es."
      },
      {
        id: "b1-4-ex2",
        type: "matching",
        question: "Poveži genitiv lične zamenice.",
        pairs: [
          { de: "ich", sr: "meines/meiner" },
          { de: "du", sr: "deines/deiner" },
          { de: "er", sr: "seines/seiner" },
          { de: "sie", sr: "ihres/ihrer" },
          { de: "wir", sr: "unseres/unserer" }
        ],
        correctAnswer: "matching-check",
        explanation: "Prisvojni genitiv za muški/ženski rod."
      },
      {
        id: "b1-4-ex3",
        type: "multiple-choice",
        question: "Die Meinung ___ Arztes ist wichtig.",
        options: ["des", "der", "dem", "den"],
        correctAnswer: "des",
        explanation: "Genitiv muškog roda: der Arzt -> des Arztes."
      },
      {
        id: "b1-4-ex4",
        type: "matching",
        question: "Poveži zdravu hranu.",
        pairs: [
          { de: "das Vollkornbrot", sr: "integralni hleb" },
          { de: "das Gemüse", sr: "povrće" },
          { de: "das Obst", sr: "voće" },
          { de: "die Ballaststoffe", sr: "vlakna" },
          { de: "die Vitamine", sr: "vitamini" }
        ],
        correctAnswer: "matching-check",
        explanation: "Zdrava ishrana."
      },
      {
        id: "b1-4-ex5",
        type: "fill-blank",
        question: "Trotz ___ Erkältung ging er zur Arbeit. (jedna)",
        correctAnswer: "einer",
        hint: "Genitiv ženskog roda",
        explanation: "Trotz + Genitiv. Die Erkältung -> einer Erkältung."
      },
      {
        id: "b1-4-ex6",
        type: "translation",
        question: "Prevedi: 'Lekar mi je preporučio više vežbanja.'",
        correctAnswer: ["Der Arzt hat mir mehr Bewegung empfohlen", "Der Arzt empfahl mir mehr Bewegung"],
        explanation: "Empfehlen = preporučiti, die Bewegung = kretanje/vežbanje."
      },
      {
        id: "b1-4-ex7",
        type: "matching",
        question: "Poveži savete za zdravlje.",
        pairs: [
          { de: "weniger Zucker essen", sr: "jesti manje šećera" },
          { de: "mehr Wasser trinken", sr: "piti više vode" },
          { de: "regelmäßig Sport treiben", sr: "redovno vežbati" },
          { de: "genug schlafen", sr: "dovoljno spavati" }
        ],
        correctAnswer: "matching-check",
        explanation: "Zdravi životni saveti."
      },
      {
        id: "b1-4-ex8",
        type: "multiple-choice",
        question: "Während ___ Diät hat sie 5 Kilo abgenommen.",
        options: ["der", "die", "das", "dem"],
        correctAnswer: "der",
        explanation: "Während + Genitiv. Die Diät -> der Diät."
      },
      {
        id: "b1-4-ex9",
        type: "fill-blank",
        question: "Die Qualität ___ Lebens ist wichtig. (das)",
        correctAnswer: "des",
        explanation: "Genitiv srednjeg roda: das Leben -> des Lebens."
      },
      {
        id: "b1-4-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Der Arzt empfiehlt, weniger Fleisch zu essen und stattdessen mehr Fisch und Gemüse.",
        options: ["Lekar preporučuje manje mesa, a umesto toga više ribe i povrća.", "Lekar kaže da jedem više mesa.", "Lekar preporučuje striktnu dijetu.", "Lekar mi je zabranio sve slatkiše."],
        correctAnswer: "Lekar preporučuje manje mesa, a umesto toga više ribe i povrća.",
        explanation: "Stattdessen = umesto toga."
      }
    ]
  },
  {
    id: "b1-5",
    title: "Životna sredina",
    titleDe: "Umwelt",
    description: "Klimatske promene, reciklaža, energija.",
    level: "B1",
    unit: 3,
    order: 5,
    duration: 45,
    xpReward: 110,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Ekološki problemi", "Pasiv (sadašnjost i prošlost)", "Uzroci i posledice"],
    exercises: [
      {
        id: "b1-5-ex1",
        type: "translation",
        question: "Prevedi: 'Smeće se razdvaja.' (Pasiv)",
        correctAnswer: ["Der Müll wird getrennt", "Der Müll wird getrennt."],
        explanation: "Pasiv prezent: werden + particip II."
      },
      {
        id: "b1-5-ex2",
        type: "matching",
        question: "Poveži ekološke pojmove.",
        pairs: [
          { de: "der Klimawandel", sr: "klimatske promene" },
          { de: "die Umweltverschmutzung", sr: "zagađenje okoline" },
          { de: "die erneuerbaren Energien", sr: "obnovljivi izvori" },
          { de: "der CO2-Ausstoß", sr: "emisija CO2" },
          { de: "das Recycling", sr: "recikliranje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ekološki vokabular."
      },
      {
        id: "b1-5-ex3",
        type: "fill-blank",
        question: "Das Problem ___ gelöst werden. (morati)",
        correctAnswer: "muss",
        explanation: "Pasiv sa modalnim glagolom: muss + particip II + werden."
      },
      {
        id: "b1-5-ex4",
        type: "multiple-choice",
        question: "Die Bäume wurden letztes Jahr ___.",
        options: ["gepflanzt", "pflanzen", "gepflanzen", "pflanzte"],
        correctAnswer: "gepflanzt",
        explanation: "Pasiv preterit: wurden + particip II."
      },
      {
        id: "b1-5-ex5",
        type: "matching",
        question: "Poveži uzroke i posledice.",
        pairs: [
          { de: "deshalb", sr: "zato" },
          { de: "deswegen", sr: "zbog toga" },
          { de: "folglich", sr: "sledstveno" },
          { de: "infolgedessen", sr: "usled toga" }
        ],
        correctAnswer: "matching-check",
        explanation: "Veznici za uzrok i posledicu."
      },
      {
        id: "b1-5-ex6",
        type: "translation",
        question: "Prevedi: 'Energija se može uštedeti.'",
        correctAnswer: ["Energie kann gespart werden", "Energie kann eingespart werden"],
        explanation: "Modalverb + particip II + werden."
      },
      {
        id: "b1-5-ex7",
        type: "fill-blank",
        question: "Die Fabrik ___ vor 10 Jahren gebaut. (werden - preterit)",
        correctAnswer: "wurde",
        explanation: "Pasiv preterit: wurde/wurden + particip II."
      },
      {
        id: "b1-5-ex8",
        type: "matching",
        question: "Poveži rešenja za okolinu.",
        pairs: [
          { de: "Plastik vermeiden", sr: "izbegavati plastiku" },
          { de: "öffentliche Verkehrsmittel benutzen", sr: "koristiti javni prevoz" },
          { de: "Strom sparen", sr: "štedeti struju" },
          { de: "Bio-Produkte kaufen", sr: "kupovati bio proizvode" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ekološki saveti."
      },
      {
        id: "b1-5-ex9",
        type: "multiple-choice",
        question: "Die Umwelt ___ geschützt werden.",
        options: ["muss", "müssen", "musst", "müsst"],
        correctAnswer: "muss",
        explanation: "Die Umwelt je jednina, zato 'muss'."
      },
      {
        id: "b1-5-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Durch den Klimawandel werden viele Tierarten aussterben. Deshalb müssen wir handeln.",
        options: ["Zbog klimatskih promena mnoge životinjske vrste će izumreti. Zato moramo delovati.", "Klimatske promene nisu ozbiljne.", "Životinje su se već prilagodile.", "Ništa ne možemo uraditi."],
        correctAnswer: "Zbog klimatskih promena mnoge životinjske vrste će izumreti. Zato moramo delovati.",
        explanation: "Aussterben = izumreti, handeln = delovati."
      }
    ]
  },
  {
    id: "b1-6",
    title: "Umetnost i kultura",
    titleDe: "Kunst und Kultur",
    description: "Slikarstvo, arhitektura, muzika, pozorište.",
    level: "B1",
    unit: 3,
    order: 6,
    duration: 40,
    xpReward: 105,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Opisivanje slike", "Relativne rečenice", "Kulturni događaji"],
    exercises: [
      {
        id: "b1-6-ex1",
        type: "multiple-choice",
        question: "Das ist der Künstler, ___ das Bild gemalt hat.",
        options: ["der", "die", "das", "den"],
        correctAnswer: "der",
        explanation: "Relativna zamenica za muški rod (Nominativ) je 'der'."
      },
      {
        id: "b1-6-ex2",
        type: "matching",
        question: "Poveži umetničke pojmove.",
        pairs: [
          { de: "das Gemälde", sr: "slika (ulje)" },
          { de: "die Skulptur", sr: "skulptura" },
          { de: "die Ausstellung", sr: "izložba" },
          { de: "das Museum", sr: "muzej" },
          { de: "die Galerie", sr: "galerija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Umetnički vokabular."
      },
      {
        id: "b1-6-ex3",
        type: "fill-blank",
        question: "Das Buch, ___ ich lese, ist sehr interessant. (koje)",
        correctAnswer: "das",
        hint: "Relativna zamenica za srednji rod",
        explanation: "Das Buch je srednji rod -> das."
      },
      {
        id: "b1-6-ex4",
        type: "matching",
        question: "Poveži relativne zamenice.",
        pairs: [
          { de: "der Mann, der...", sr: "čovek koji..." },
          { de: "die Frau, die...", sr: "žena koja..." },
          { de: "das Kind, das...", sr: "dete koje..." },
          { de: "die Leute, die...", sr: "ljudi koji..." }
        ],
        correctAnswer: "matching-check",
        explanation: "Relativne zamenice po rodu i broju."
      },
      {
        id: "b1-6-ex5",
        type: "translation",
        question: "Prevedi: 'Slika koju sam video bila je prelepa.'",
        correctAnswer: ["Das Bild, das ich gesehen habe, war wunderschön", "Das Gemälde, das ich gesehen habe, war wunderschön"],
        explanation: "Relativna rečenica sa 'das' (srednji rod akuzativ)."
      },
      {
        id: "b1-6-ex6",
        type: "multiple-choice",
        question: "Der Film, ___ Regisseur aus Deutschland kommt, hat einen Preis gewonnen.",
        options: ["dessen", "den", "der", "dem"],
        correctAnswer: "dessen",
        explanation: "Dessen = čiji (genitiv za muški rod)."
      },
      {
        id: "b1-6-ex7",
        type: "matching",
        question: "Poveži muzičke pojmove.",
        pairs: [
          { de: "das Konzert", sr: "koncert" },
          { de: "die Oper", sr: "opera" },
          { de: "das Orchester", sr: "orkestar" },
          { de: "der Komponist", sr: "kompozitor" },
          { de: "die Sinfonie", sr: "simfonija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Klasična muzika."
      },
      {
        id: "b1-6-ex8",
        type: "fill-blank",
        question: "Die Stadt, in ___ ich wohne, ist sehr schön. (kojoj)",
        correctAnswer: "der",
        explanation: "In + Dativ. Die Stadt -> der Stadt."
      },
      {
        id: "b1-6-ex9",
        type: "translation",
        question: "Prevedi: 'Čovek sa kojim razgovaram je umetnik.'",
        correctAnswer: ["Der Mann, mit dem ich spreche, ist Künstler", "Der Mann, mit dem ich rede, ist ein Künstler"],
        explanation: "Mit + Dativ: der Mann -> dem Mann."
      },
      {
        id: "b1-6-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die Ausstellung, die gestern eröffnet wurde, zeigt Werke von modernen Künstlern aus Europa.",
        options: ["Izložba koja je juče otvorena prikazuje dela modernih umetnika iz Evrope.", "Koncert koji je juče bio bio je odličan.", "Muzej koji sam posetio bio je zatvoren.", "Galerija u kojoj radim ima nove slike."],
        correctAnswer: "Izložba koja je juče otvorena prikazuje dela modernih umetnika iz Evrope.",
        explanation: "Eröffnet wurde = otvorena je (pasiv), Werke = dela."
      }
    ]
  },
  {
    id: "b1-7",
    title: "Politika i društvo",
    titleDe: "Politik und Gesellschaft",
    description: "Osnovni politički pojmovi, izbori, zakoni.",
    level: "B1",
    unit: 4,
    order: 7,
    duration: 45,
    xpReward: 115,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Državno uređenje", "Infinitiv sa 'zu'", "Diskusija"],
    exercises: [
      {
        id: "b1-7-ex1",
        type: "fill-blank",
        question: "Es ist wichtig, wählen ___ gehen. (zu)",
        correctAnswer: "zu",
        explanation: "Infinitivska konstrukcija sa 'zu'."
      },
      {
        id: "b1-7-ex2",
        type: "matching",
        question: "Poveži političke pojmove.",
        pairs: [
          { de: "die Regierung", sr: "vlada" },
          { de: "das Parlament", sr: "parlament" },
          { de: "die Wahl", sr: "izbori" },
          { de: "die Partei", sr: "stranka" },
          { de: "der Bundeskanzler", sr: "kancelar" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nemački politički sistem."
      },
      {
        id: "b1-7-ex3",
        type: "multiple-choice",
        question: "Ich habe vor, Deutsch ___ lernen.",
        options: ["zu", "um", "für", "mit"],
        correctAnswer: "zu",
        explanation: "Vorhaben + zu + Infinitiv."
      },
      {
        id: "b1-7-ex4",
        type: "matching",
        question: "Poveži izraze sa 'zu'.",
        pairs: [
          { de: "versuchen zu...", sr: "pokušati da..." },
          { de: "beginnen zu...", sr: "početi da..." },
          { de: "aufhören zu...", sr: "prestati da..." },
          { de: "vergessen zu...", sr: "zaboraviti da..." }
        ],
        correctAnswer: "matching-check",
        explanation: "Glagoli koji zahtevaju infinitiv sa 'zu'."
      },
      {
        id: "b1-7-ex5",
        type: "translation",
        question: "Prevedi: 'Važno je da glasamo.'",
        correctAnswer: ["Es ist wichtig, zu wählen", "Es ist wichtig zu wählen"],
        explanation: "Es ist wichtig + zu + Infinitiv."
      },
      {
        id: "b1-7-ex6",
        type: "fill-blank",
        question: "Er hat vergessen, mich ___. (anrufen)",
        correctAnswer: "anzurufen",
        hint: "Razdvojivi glagol sa 'zu'",
        explanation: "Kod razdvojivih glagola 'zu' ide između: an-zu-rufen."
      },
      {
        id: "b1-7-ex7",
        type: "matching",
        question: "Poveži diskusione fraze.",
        pairs: [
          { de: "Meiner Meinung nach...", sr: "Po mom mišljenju..." },
          { de: "Ich bin der Ansicht, dass...", sr: "Smatram da..." },
          { de: "Das stimmt, aber...", sr: "To je tačno, ali..." },
          { de: "Ich bin dagegen, weil...", sr: "Ja sam protiv, jer..." }
        ],
        correctAnswer: "matching-check",
        explanation: "Fraze za diskusiju i debatu."
      },
      {
        id: "b1-7-ex8",
        type: "multiple-choice",
        question: "Er plant, nächstes Jahr ___.",
        options: ["auszuwandern", "auswandern", "wandert aus", "ausgewandert"],
        correctAnswer: "auszuwandern",
        explanation: "Planen + zu + Infinitiv (auswandern -> auszuwandern)."
      },
      {
        id: "b1-7-ex9",
        type: "translation",
        question: "Prevedi: 'Pokušavam da razumem politiku.'",
        correctAnswer: ["Ich versuche, Politik zu verstehen", "Ich versuche Politik zu verstehen"],
        explanation: "Versuchen + zu + Infinitiv."
      },
      {
        id: "b1-7-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Es ist die Pflicht jedes Bürgers, an den Wahlen teilzunehmen und seine Stimme abzugeben.",
        options: ["Dužnost svakog građanina je da učestvuje na izborima i da glasa.", "Samo bogati ljudi treba da glasaju.", "Glasanje nije važno u demokratiji.", "Mladi ne treba da se bave politikom."],
        correctAnswer: "Dužnost svakog građanina je da učestvuje na izborima i da da glas.",
        explanation: "Die Pflicht = dužnost, teilnehmen = učestvovati."
      }
    ]
  },
  {
    id: "b1-8",
    title: "Istorija i sećanja",
    titleDe: "Geschichte und Erinnerungen",
    description: "Važni događaji, biografije poznatih ličnosti.",
    level: "B1",
    unit: 4,
    order: 8,
    duration: 45,
    xpReward: 115,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Preterit (pismeno pripovedanje)", "Vremenski veznici (als, wenn, während)", "Biografije"],
    exercises: [
      {
        id: "b1-8-ex1",
        type: "multiple-choice",
        question: "___ ich klein war, habe ich viel gespielt.",
        options: ["Als", "Wenn", "Wann", "Während"],
        correctAnswer: "Als",
        explanation: "'Als' se koristi za jednokratne događaje u prošlosti."
      },
      {
        id: "b1-8-ex2",
        type: "matching",
        question: "Poveži vremenske veznike.",
        pairs: [
          { de: "als", sr: "kada (jednokratno u prošlosti)" },
          { de: "wenn", sr: "kada/ako (višekratno/sadašnjost)" },
          { de: "während", sr: "dok/za vreme" },
          { de: "bevor", sr: "pre nego što" },
          { de: "nachdem", sr: "nakon što" }
        ],
        correctAnswer: "matching-check",
        explanation: "Vremenski veznici u nemačkom."
      },
      {
        id: "b1-8-ex3",
        type: "fill-blank",
        question: "___ sie nach Deutschland kam, sprach sie kein Deutsch. (kada - jednokratno)",
        correctAnswer: "Als",
        explanation: "Als = kada (jednokratni događaj u prošlosti)."
      },
      {
        id: "b1-8-ex4",
        type: "matching",
        question: "Poveži preterit nepravilnih glagola.",
        pairs: [
          { de: "kommen", sr: "kam" },
          { de: "gehen", sr: "ging" },
          { de: "sein", sr: "war" },
          { de: "haben", sr: "hatte" },
          { de: "werden", sr: "wurde" }
        ],
        correctAnswer: "matching-check",
        explanation: "Preterit se koristi u pismenom pripovedanju."
      },
      {
        id: "b1-8-ex5",
        type: "translation",
        question: "Prevedi: 'Dok sam čitao, ona je spavala.'",
        correctAnswer: ["Während ich las, schlief sie", "Während ich gelesen habe, hat sie geschlafen"],
        explanation: "Während = dok (dve istovremene radnje)."
      },
      {
        id: "b1-8-ex6",
        type: "multiple-choice",
        question: "Immer ___ ich nach Hause komme, freue ich mich.",
        options: ["wenn", "als", "wann", "während"],
        correctAnswer: "wenn",
        explanation: "'Wenn' za ponavljajuće radnje (svaki put kada)."
      },
      {
        id: "b1-8-ex7",
        type: "fill-blank",
        question: "___ er das Studium beendet hatte, fand er einen Job. (nakon što)",
        correctAnswer: "Nachdem",
        hint: "Prethodeća radnja",
        explanation: "Nachdem = nakon što. Traži Plusquamperfekt."
      },
      {
        id: "b1-8-ex8",
        type: "matching",
        question: "Poveži istorijske pojmove.",
        pairs: [
          { de: "der Zweite Weltkrieg", sr: "Drugi svetski rat" },
          { de: "die Wiedervereinigung", sr: "ujedinjenje" },
          { de: "die Mauer", sr: "zid" },
          { de: "das Jahrhundert", sr: "vek" }
        ],
        correctAnswer: "matching-check",
        explanation: "Istorijski vokabular."
      },
      {
        id: "b1-8-ex9",
        type: "translation",
        question: "Prevedi: 'Pre nego što je otišao, zatvorio je prozor.'",
        correctAnswer: ["Bevor er ging, schloss er das Fenster", "Bevor er gegangen ist, hat er das Fenster geschlossen"],
        explanation: "Bevor = pre nego što."
      },
      {
        id: "b1-8-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Als die Berliner Mauer 1989 fiel, war das ein historischer Moment für ganz Europa.",
        options: ["Kada je Berlinski zid pao 1989, to je bio istorijski trenutak za celu Evropu.", "Berlinski zid je izgrađen 1989.", "Mauer znači most na nemačkom.", "Berlinski zid još uvek postoji."],
        correctAnswer: "Kada je Berlinski zid pao 1989, to je bio istorijski trenutak za celu Evropu.",
        explanation: "Fiel = pao (preterit od fallen), historisch = istorijski."
      }
    ]
  },
  {
    id: "b1-9",
    title: "Tehnologija budućnosti",
    titleDe: "Zukunftstechnologie",
    description: "Roboti, veštačka inteligencija, pametne kuće.",
    level: "B1",
    unit: 5,
    order: 9,
    duration: 40,
    xpReward: 110,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Tehnički pojmovi", "Dvodelni veznici (sowohl... als auch)", "Predviđanja"],
    exercises: [
      {
        id: "b1-9-ex1",
        type: "matching",
        question: "Poveži pojmove.",
        pairs: [
          { de: "Künstliche Intelligenz", sr: "Veštačka inteligencija" },
          { de: "der Roboter", sr: "Robot" },
          { de: "die Entwicklung", sr: "Razvoj" },
          { de: "die Automatisierung", sr: "Automatizacija" },
          { de: "die Digitalisierung", sr: "Digitalizacija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Tehnološki pojmovi."
      },
      {
        id: "b1-9-ex2",
        type: "fill-blank",
        question: "Sowohl Autos ___ auch Züge werden elektrisch. (kao)",
        correctAnswer: "als",
        hint: "Dvodelni veznik",
        explanation: "Sowohl... als auch = kako... tako i."
      },
      {
        id: "b1-9-ex3",
        type: "matching",
        question: "Poveži dvodelne veznike.",
        pairs: [
          { de: "sowohl... als auch", sr: "kako... tako i" },
          { de: "weder... noch", sr: "ni... ni" },
          { de: "entweder... oder", sr: "ili... ili" },
          { de: "nicht nur... sondern auch", sr: "ne samo... nego i" }
        ],
        correctAnswer: "matching-check",
        explanation: "Korelativni veznici."
      },
      {
        id: "b1-9-ex4",
        type: "multiple-choice",
        question: "Pametne kuće ___ nicht nur praktisch, sondern auch umweltfreundlich.",
        options: ["sind", "ist", "sein", "war"],
        correctAnswer: "sind",
        explanation: "Pametne kuće (množina) -> sind."
      },
      {
        id: "b1-9-ex5",
        type: "translation",
        question: "Prevedi: 'Ili ćemo se prilagoditi, ili ćemo zaostati.'",
        correctAnswer: ["Entweder passen wir uns an, oder wir bleiben zurück", "Entweder wir passen uns an, oder wir bleiben zurück"],
        explanation: "Entweder... oder = ili... ili."
      },
      {
        id: "b1-9-ex6",
        type: "matching",
        question: "Poveži tehnologije pametne kuće.",
        pairs: [
          { de: "die Sprachsteuerung", sr: "glasovna kontrola" },
          { de: "die Solaranlage", sr: "solarni panel" },
          { de: "der Bewegungssensor", sr: "senzor pokreta" },
          { de: "die Wärmepumpe", sr: "toplotna pumpa" }
        ],
        correctAnswer: "matching-check",
        explanation: "Tehnologije pametne kuće."
      },
      {
        id: "b1-9-ex7",
        type: "fill-blank",
        question: "In Zukunft ___ Roboter viele Aufgaben übernehmen. (werden)",
        correctAnswer: "werden",
        explanation: "Futur I za predviđanja."
      },
      {
        id: "b1-9-ex8",
        type: "multiple-choice",
        question: "Weder Kohle ___ Öl sind nachhaltig.",
        options: ["noch", "und", "oder", "aber"],
        correctAnswer: "noch",
        explanation: "Weder... noch = ni... ni."
      },
      {
        id: "b1-9-ex9",
        type: "translation",
        question: "Prevedi: 'Ne samo da je efikasno, nego je i jeftino.'",
        correctAnswer: ["Es ist nicht nur effizient, sondern auch günstig", "Es ist nicht nur effizient, sondern auch billig"],
        explanation: "Nicht nur... sondern auch = ne samo... nego i."
      },
      {
        id: "b1-9-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Experten sagen voraus, dass in 20 Jahren die meisten Autos autonom fahren werden.",
        options: ["Eksperti predviđaju da će za 20 godina većina automobila voziti autonomno.", "Eksperti kažu da su električni auti loši.", "Za 20 godina nećemo imati automobile.", "Autonomna vožnja je nemoguća."],
        correctAnswer: "Eksperti predviđaju da će za 20 godina većina automobila voziti autonomno.",
        explanation: "Voraussagen = predviđati, autonom = autonomno."
      }
    ]
  },
  {
    id: "b1-10",
    title: "Interkulturalnost",
    titleDe: "Interkulturalität",
    description: "Život u inostranstvu, predrasude, običaji.",
    level: "B1",
    unit: 5,
    order: 10,
    duration: 45,
    xpReward: 120,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Kulturne razlike", "Veznici (obwohl, trotzdem)", "Iskustva"],
    exercises: [
      {
        id: "b1-10-ex1",
        type: "multiple-choice",
        question: "Er geht zur Arbeit, ___ er krank ist.",
        options: ["obwohl", "weil", "dass", "wenn"],
        correctAnswer: "obwohl",
        explanation: "Obwohl (iako) izražava suprotnost."
      },
      {
        id: "b1-10-ex2",
        type: "matching",
        question: "Poveži kulturne razlike.",
        pairs: [
          { de: "pünktlich sein", sr: "biti tačan" },
          { de: "Händeschütteln", sr: "rukovanje" },
          { de: "Schuhe ausziehen", sr: "izuti cipele" },
          { de: "die Gastfreundschaft", sr: "gostoprimstvo" },
          { de: "der Smalltalk", sr: "neobavezni razgovor" }
        ],
        correctAnswer: "matching-check",
        explanation: "Kulturne norme i običaji."
      },
      {
        id: "b1-10-ex3",
        type: "fill-blank",
        question: "Er hat den Job bekommen, ___ er wenig Erfahrung hat. (iako)",
        correctAnswer: "obwohl",
        explanation: "Obwohl = iako. Uvodi zavisnu rečenicu sa suprotnošću."
      },
      {
        id: "b1-10-ex4",
        type: "matching",
        question: "Poveži obwohl i trotzdem.",
        pairs: [
          { de: "Obwohl es regnet, gehe ich raus.", sr: "Iako kiši, idem napolje." },
          { de: "Es regnet. Trotzdem gehe ich raus.", sr: "Kiši. Ipak idem napolje." }
        ],
        correctAnswer: "matching-check",
        explanation: "Obwohl = veznik, Trotzdem = prilog (ista ideja, drugačija struktura)."
      },
      {
        id: "b1-10-ex5",
        type: "translation",
        question: "Prevedi: 'Iako ne govorim dobro nemački, ljudi me razumeju.'",
        correctAnswer: ["Obwohl ich nicht gut Deutsch spreche, verstehen mich die Leute", "Obwohl ich nicht gut Deutsch spreche, verstehen die Leute mich"],
        explanation: "Obwohl + zavisna rečenica, glavna rečenica."
      },
      {
        id: "b1-10-ex6",
        type: "multiple-choice",
        question: "In Deutschland ist Pünktlichkeit wichtig. Was bedeutet das?",
        options: ["Tačnost je važna.", "Brzina je važna.", "Novac je važan.", "Hrana je važna."],
        correctAnswer: "Tačnost je važna.",
        explanation: "Die Pünktlichkeit = tačnost."
      },
      {
        id: "b1-10-ex7",
        type: "fill-blank",
        question: "Das Essen war teuer. ___ hat es gut geschmeckt. (ipak)",
        correctAnswer: "Trotzdem",
        hint: "Prilog za suprotnost",
        explanation: "Trotzdem = ipak/uprkos tome."
      },
      {
        id: "b1-10-ex8",
        type: "matching",
        question: "Poveži iskustva iz inostranstva.",
        pairs: [
          { de: "Heimweh haben", sr: "imati nostalgiju" },
          { de: "Kulturschock erleben", sr: "doživeti kulturni šok" },
          { de: "sich einleben", sr: "uživeti se" },
          { de: "die Sprache lernen", sr: "naučiti jezik" }
        ],
        correctAnswer: "matching-check",
        explanation: "Iskustva pri preseljenju u inostranstvo."
      },
      {
        id: "b1-10-ex9",
        type: "translation",
        question: "Prevedi: 'Bio sam umoran. Ipak sam završio projekat.'",
        correctAnswer: ["Ich war müde. Trotzdem habe ich das Projekt beendet.", "Ich war müde, aber trotzdem habe ich das Projekt beendet"],
        explanation: "Trotzdem menja red reči (glagol odmah posle)."
      },
      {
        id: "b1-10-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Obwohl ich am Anfang Schwierigkeiten hatte, fühle ich mich jetzt in Deutschland zu Hause.",
        options: ["Iako sam na početku imao poteškoća, sada se osećam kao kod kuće u Nemačkoj.", "Nikad se neću prilagoditi Nemačkoj.", "Na početku je bilo lako, sada je teško.", "Nemam nikakvih problema u Nemačkoj."],
        correctAnswer: "Iako sam na početku imao poteškoća, sada se osećam kao kod kuće u Nemačkoj.",
        explanation: "Am Anfang = na početku, sich zu Hause fühlen = osećati se kao kod kuće."
      }
    ]
  },

  // ==========================================
  // B2 LEVEL - VIŠI SREDNJI (8 Lekcija)
  // ==========================================
  {
    id: "b2-1",
    title: "Učenje jezika",
    titleDe: "Sprachenlernen",
    description: "Metode učenja, dvojezičnost, istorija jezika.",
    level: "B2",
    unit: 1,
    order: 1,
    duration: 50,
    xpReward: 130,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Tipovi učenja", "Pasiv sa modalnim glagolima", "Idiomi"],
    exercises: [
      {
        id: "b2-1-ex1",
        type: "matching",
        question: "Poveži izraze.",
        pairs: [
          { de: "Es liegt mir auf der Zunge", sr: "Na vrh mi je jezika" },
          { de: "Ich verstehe nur Bahnhof", sr: "Ništa ne razumem" },
          { de: "Übung macht den Meister", sr: "Vežbom do savršenstva" },
          { de: "Das ist nicht mein Bier", sr: "To me se ne tiče" },
          { de: "Tomaten auf den Augen haben", sr: "Biti slep za očigledne stvari" }
        ],
        correctAnswer: "matching-check",
        explanation: "Idiomi su važan deo B2 nivoa."
      },
      {
        id: "b2-1-ex2",
        type: "fill-blank",
        question: "Das Buch kann nicht gelesen ___. (werden)",
        correctAnswer: "werden",
        explanation: "Pasiv sa modalnim glagolom: kann + Partizip II + werden."
      },
      {
        id: "b2-1-ex3",
        type: "matching",
        question: "Poveži tipove učenja.",
        pairs: [
          { de: "der visuelle Lerntyp", sr: "vizuelni tip" },
          { de: "der auditive Lerntyp", sr: "auditivni tip" },
          { de: "der kinästhetische Typ", sr: "kinestetički tip" },
          { de: "das Selbststudium", sr: "samoučenje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Stilovi učenja."
      },
      {
        id: "b2-1-ex4",
        type: "multiple-choice",
        question: "Die Aufgabe muss bis morgen erledigt ___.",
        options: ["werden", "worden", "wird", "wurde"],
        correctAnswer: "werden",
        explanation: "Modalverb + Partizip II + werden (prezent pasiv)."
      },
      {
        id: "b2-1-ex5",
        type: "translation",
        question: "Prevedi: 'Ovaj dokument mora biti potpisan.'",
        correctAnswer: ["Dieses Dokument muss unterschrieben werden", "Das Dokument muss unterschrieben werden"],
        explanation: "Muss + Partizip II + werden = mora biti..."
      },
      {
        id: "b2-1-ex6",
        type: "matching",
        question: "Poveži još idioma.",
        pairs: [
          { de: "jemanden auf die Palme bringen", sr: "iznervirati nekoga" },
          { de: "die Daumen drücken", sr: "držati palčeve" },
          { de: "auf dem Holzweg sein", sr: "biti na pogrešnom putu" },
          { de: "ins kalte Wasser springen", sr: "uskočiti u nepoznato" }
        ],
        correctAnswer: "matching-check",
        explanation: "Dodatni idiomi."
      },
      {
        id: "b2-1-ex7",
        type: "fill-blank",
        question: "Das Problem konnte leider nicht gelöst ___. (werden - preterit)",
        correctAnswer: "werden",
        explanation: "Preterit pasiv sa modalnim: konnte + Partizip II + werden."
      },
      {
        id: "b2-1-ex8",
        type: "multiple-choice",
        question: "Welcher Idiom bedeutet 'perfekt passen'?",
        options: ["wie angegossen passen", "wie verrückt sein", "wie der Blitz fahren", "wie ein Fisch im Wasser"],
        correctAnswer: "wie angegossen passen",
        explanation: "Wie angegossen = kao saliveno (savršeno pristaje)."
      },
      {
        id: "b2-1-ex9",
        type: "translation",
        question: "Prevedi: 'Problem je mogao biti rešen ranije.'",
        correctAnswer: ["Das Problem hätte früher gelöst werden können", "Das Problem konnte früher gelöst werden"],
        explanation: "Konjunktiv II + Partizip II + werden + können."
      },
      {
        id: "b2-1-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Beim Sprachenlernen ist es wichtig, regelmäßig zu üben und keine Angst vor Fehlern zu haben.",
        options: ["Pri učenju jezika važno je redovno vežbati i ne plašiti se grešaka.", "Greške su neprihvatljive pri učenju jezika.", "Treba učiti samo iz knjiga.", "Govor nije važan, samo pisanje."],
        correctAnswer: "Pri učenju jezika važno je redovno vežbati i ne plašiti se grešaka.",
        explanation: "Regelmäßig = redovno, Angst haben = plašiti se."
      }
    ]
  },
  {
    id: "b2-2",
    title: "Globalna ekonomija",
    titleDe: "Globale Wirtschaft",
    description: "Globalizacija, uvoz/izvoz, multinacionalne kompanije.",
    level: "B2",
    unit: 1,
    order: 2,
    duration: 55,
    xpReward: 135,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Ekonomski pojmovi", "Konjunktiv II (prošlost)", "Alternativne pasivne konstrukcije"],
    exercises: [
      {
        id: "b2-2-ex1",
        type: "fill-blank",
        question: "Hätte ich das gewusst, ___ ich gekommen. (wäre)",
        correctAnswer: "wäre",
        explanation: "Konjunktiv II prošlosti (irrealer Vergleich)."
      },
      {
        id: "b2-2-ex2",
        type: "matching",
        question: "Poveži ekonomske pojmove.",
        pairs: [
          { de: "die Globalisierung", sr: "globalizacija" },
          { de: "der Export", sr: "izvoz" },
          { de: "der Import", sr: "uvoz" },
          { de: "die Handelsbilanz", sr: "trgovinska bilansa" },
          { de: "die Rezession", sr: "recesija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ekonomski termini."
      },
      {
        id: "b2-2-ex3",
        type: "multiple-choice",
        question: "Wenn ich mehr Zeit gehabt hätte, ___ ich mehr gelernt.",
        options: ["hätte", "habe", "hatte", "wäre"],
        correctAnswer: "hätte",
        explanation: "Irealni kondicional: hätte + Partizip II."
      },
      {
        id: "b2-2-ex4",
        type: "matching",
        question: "Poveži Konjunktiv II prošlosti.",
        pairs: [
          { de: "Hätte ich gewusst...", sr: "Da sam znao..." },
          { de: "Wäre ich gekommen...", sr: "Da sam došao..." },
          { de: "Hätten wir gekonnt...", sr: "Da smo mogli..." }
        ],
        correctAnswer: "matching-check",
        explanation: "Irealne rečenice u prošlosti."
      },
      {
        id: "b2-2-ex5",
        type: "translation",
        question: "Prevedi: 'Da sam ranije ustao, ne bih zakasnio.'",
        correctAnswer: ["Wenn ich früher aufgestanden wäre, wäre ich nicht zu spät gekommen", "Hätte ich früher aufgestanden, wäre ich nicht zu spät gekommen"],
        explanation: "Dve Konjunktiv II forme za irealni uslov u prošlosti."
      },
      {
        id: "b2-2-ex6",
        type: "fill-blank",
        question: "Die Waren werden ___ dem Kunden geliefert. (od strane)",
        correctAnswer: "von",
        hint: "Pasivni agens",
        explanation: "Von + Dativ za vršioca radnje u pasivu."
      },
      {
        id: "b2-2-ex7",
        type: "matching",
        question: "Poveži alternativne pasivne konstrukcije.",
        pairs: [
          { de: "lässt sich machen", sr: "može se uraditi" },
          { de: "ist zu erledigen", sr: "treba obaviti" },
          { de: "bleibt zu klären", sr: "ostaje da se razjasni" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pasivne alternative (sein + zu, lassen + sich)."
      },
      {
        id: "b2-2-ex8",
        type: "multiple-choice",
        question: "Das Problem ___ sich leicht lösen.",
        options: ["lässt", "lasst", "lies", "lässte"],
        correctAnswer: "lässt",
        explanation: "Sich lassen = može se (alternativa pasivu)."
      },
      {
        id: "b2-2-ex9",
        type: "translation",
        question: "Prevedi: 'Izveštaj treba završiti do petka.'",
        correctAnswer: ["Der Bericht ist bis Freitag zu beenden", "Der Bericht muss bis Freitag beendet werden"],
        explanation: "Sein + zu + Infinitiv = mora biti."
      },
      {
        id: "b2-2-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Durch die Globalisierung werden Waren aus der ganzen Welt gehandelt, was sowohl Vorteile als auch Nachteile hat.",
        options: ["Zahvaljujući globalizaciji, roba iz celog sveta se trguje, što ima i prednosti i mane.", "Globalizacija je potpuno loša.", "Trgovina ne postoji zbog globalizacije.", "Samo bogate zemlje profitiraju."],
        correctAnswer: "Zahvaljujući globalizaciji, roba iz celog sveta se trguje, što ima i prednosti i mane.",
        explanation: "Vorteile = prednosti, Nachteile = mane."
      }
    ]
  },
  {
    id: "b2-3",
    title: "Psihologija rada",
    titleDe: "Arbeitspsychologie",
    description: "Stres, mobing, motivacija, timski rad.",
    level: "B2",
    unit: 2,
    order: 3,
    duration: 50,
    xpReward: 130,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Radna atmosfera", "Imenice na -ung, -keit, -heit", "Upravni govor"],
    exercises: [
      {
        id: "b2-3-ex1",
        type: "matching",
        question: "Poveži sufikse.",
        pairs: [
          { de: "die Freiheit", sr: "sloboda" },
          { de: "die Möglichkeit", sr: "mogućnost" },
          { de: "die Zeitung", sr: "novine" },
          { de: "die Einsamkeit", sr: "usamljenost" },
          { de: "die Entscheidung", sr: "odluka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Tvorba reči imenicama: -heit (sloboda), -keit (mogućnost), -ung (odluka)."
      },
      {
        id: "b2-3-ex2",
        type: "vocabulary",
        question: "Šta znači 'der Stress'?",
        options: ["stres", "sreća", "odmor", "sloboda"],
        correctAnswer: "stres",
        explanation: "Der Stress = stres (radni pritisak)."
      },
      {
        id: "b2-3-ex3",
        type: "multiple-choice",
        question: "Koji sufiks gradi imenice od glagola?",
        options: ["-ung", "-lich", "-bar", "-ig"],
        correctAnswer: "-ung",
        explanation: "Glagol + -ung = imenica (entscheiden -> die Entscheidung)."
      },
      {
        id: "b2-3-ex4",
        type: "matching",
        question: "Poveži pojmove iz radne psihologije.",
        pairs: [
          { de: "das Mobbing", sr: "mobing" },
          { de: "die Motivation", sr: "motivacija" },
          { de: "die Teamarbeit", sr: "timski rad" },
          { de: "der Burnout", sr: "izgaranje na poslu" },
          { de: "die Überlastung", sr: "preopterećenost" }
        ],
        correctAnswer: "matching-check",
        explanation: "Psihološki termini na radnom mestu."
      },
      {
        id: "b2-3-ex5",
        type: "fill-blank",
        question: "Er sagte, er ___ keine Zeit. (bi imao - Konjunktiv I)",
        correctAnswer: "habe",
        hint: "Upravni govor",
        explanation: "Konjunktiv I za upravni govor: haben -> er habe."
      },
      {
        id: "b2-3-ex6",
        type: "translation",
        question: "Prevedi: 'Ona reče da je umorna.'",
        correctAnswer: ["Sie sagte, sie sei müde", "Sie sagte, dass sie müde sei"],
        explanation: "Upravni govor sa Konjunktivom I: ist -> sei."
      },
      {
        id: "b2-3-ex7",
        type: "multiple-choice",
        question: "Die Chefin sagte, sie ___ mehr Mitarbeiter.",
        options: ["brauche", "braucht", "brauchte", "brauchen"],
        correctAnswer: "brauche",
        explanation: "Konjunktiv I za indirektni govor: braucht -> brauche."
      },
      {
        id: "b2-3-ex8",
        type: "matching",
        question: "Poveži Konjunktiv I forme.",
        pairs: [
          { de: "er habe", sr: "on ima (ind. govor)" },
          { de: "sie sei", sr: "ona je (ind. govor)" },
          { de: "man könne", sr: "može se (ind. govor)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Konjunktiv I za indirektni govor."
      },
      {
        id: "b2-3-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Der Mitarbeiter behauptete, er habe zu viel Arbeit und sei völlig überfordert.",
        options: ["Radnik je tvrdio da ima previše posla i da je potpuno preopterećen.", "Radnik je srećan na poslu.", "Radnik nema dovoljno posla.", "Radnik traži više odgovornosti."],
        correctAnswer: "Radnik je tvrdio da ima previše posla i da je potpuno preopterećen.",
        explanation: "Behaupten = tvrditi, überfordert = preopterećen."
      },
      {
        id: "b2-3-ex10",
        type: "fill-blank",
        question: "Die Zufrieden___ der Mitarbeiter ist wichtig.",
        correctAnswer: "heit",
        hint: "Imenica od pridevа 'zufrieden'",
        explanation: "Zufrieden + -heit = die Zufriedenheit (zadovoljstvo)."
      }
    ]
  },
  {
    id: "b2-4",
    title: "Nauka i istraživanje",
    titleDe: "Wissenschaft und Forschung",
    description: "Naučne metode, eksperimenti, etika u nauci.",
    level: "B2",
    unit: 2,
    order: 4,
    duration: 60,
    xpReward: 140,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Naučni jezik", "Partizip I i II kao pridevi", "Nominalizacija"],
    exercises: [
      {
        id: "b2-4-ex1",
        type: "translation",
        question: "Prevedi: 'Smejuće dete.' (Partizip I)",
        correctAnswer: ["Das lachende Kind", "Das lachende Kind."],
        explanation: "Partizip I se koristi kao pridev (lachen -> lachend)."
      },
      {
        id: "b2-4-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Forschung'?",
        options: ["istraživanje", "formiranje", "forumiranje", "favorizovanje"],
        correctAnswer: "istraživanje",
        explanation: "Die Forschung = istraživanje, forschen = istraživati."
      },
      {
        id: "b2-4-ex3",
        type: "multiple-choice",
        question: "Das ___ Buch liegt auf dem Tisch. (otvoren)",
        options: ["geöffnete", "öffnende", "öffnen", "geöffnet"],
        correctAnswer: "geöffnete",
        explanation: "Partizip II kao pridev: geöffnet -> das geöffnete Buch."
      },
      {
        id: "b2-4-ex4",
        type: "matching",
        question: "Poveži Partizip I i II.",
        pairs: [
          { de: "lachend", sr: "koji se smeje (aktivan)" },
          { de: "gelacht", sr: "nasmejano (pasivan)" },
          { de: "lesend", sr: "koji čita" },
          { de: "gelesen", sr: "pročitan" },
          { de: "schlafend", sr: "koji spava" }
        ],
        correctAnswer: "matching-check",
        explanation: "Partizip I = aktivan proces, Partizip II = završen ili pasivan."
      },
      {
        id: "b2-4-ex5",
        type: "fill-blank",
        question: "Der ___ Wissenschaftler hat viel veröffentlicht. (anerkannt)",
        correctAnswer: "anerkannte",
        hint: "Partizip II kao pridev sa pridevskom deklinacijom",
        explanation: "Anerkannt + -e za jak pridev nominativ muški rod."
      },
      {
        id: "b2-4-ex6",
        type: "matching",
        question: "Poveži naučne termine.",
        pairs: [
          { de: "das Experiment", sr: "eksperiment" },
          { de: "die Hypothese", sr: "hipoteza" },
          { de: "die Methode", sr: "metoda" },
          { de: "das Ergebnis", sr: "rezultat" },
          { de: "die Studie", sr: "studija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Naučni vokabular."
      },
      {
        id: "b2-4-ex7",
        type: "translation",
        question: "Prevedi: 'Završena studija je objavljena.'",
        correctAnswer: ["Die abgeschlossene Studie wurde veröffentlicht", "Die abgeschlossene Studie ist veröffentlicht worden"],
        explanation: "Partizip II kao pridev + pasiv."
      },
      {
        id: "b2-4-ex8",
        type: "multiple-choice",
        question: "Nominalizacija: 'forschen' postaje...",
        options: ["das Forschen", "die Forsche", "der Forschung", "die Forschens"],
        correctAnswer: "das Forschen",
        explanation: "Infinitiv kao imenica: das Forschen (istraživanje kao radnja)."
      },
      {
        id: "b2-4-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die durchgeführte Studie zeigt überraschende Ergebnisse in der medizinischen Forschung.",
        options: ["Sprovedena studija pokazuje iznenađujuće rezultate u medicinskom istraživanju.", "Studija nije sprovedena.", "Rezultati su očekivani.", "Nema rezultata."],
        correctAnswer: "Sprovedena studija pokazuje iznenađujuće rezultate u medicinskom istraživanju.",
        explanation: "Durchgeführt = sproveden, überraschend = iznenađujući."
      },
      {
        id: "b2-4-ex10",
        type: "fill-blank",
        question: "Das Schreiben wissenschaftlicher Texte ist ___ . (zahtevno)",
        correctAnswer: "anspruchsvoll",
        hint: "Zahtevano, sofisticirano",
        explanation: "Anspruchsvoll = zahtevno (naučni tekstovi)."
      }
    ]
  },
  {
    id: "b2-5",
    title: "Mediji i manipulacija",
    titleDe: "Medien und Manipulation",
    description: "Lažne vesti, uticaj reklama, sloboda štampe.",
    level: "B2",
    unit: 3,
    order: 5,
    duration: 55,
    xpReward: 135,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Analiza vesti", "Subjektivno značenje modalnih glagola", "Kritičko mišljenje"],
    exercises: [
      {
        id: "b2-5-ex1",
        type: "multiple-choice",
        question: "Er will den Präsidenten gesehen ___.",
        options: ["haben", "sein", "werden", "hatte"],
        correctAnswer: "haben",
        explanation: "Subjektivna upotreba 'wollen' (tvrdi da je...)."
      },
      {
        id: "b2-5-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Fake News' (Falschnachrichten)?",
        options: ["lažne vesti", "brze vesti", "dobre vesti", "stare vesti"],
        correctAnswer: "lažne vesti",
        explanation: "Fake News / Falschnachrichten = lažne vesti."
      },
      {
        id: "b2-5-ex3",
        type: "matching",
        question: "Poveži medijske pojmove.",
        pairs: [
          { de: "die Pressefreiheit", sr: "sloboda štampe" },
          { de: "die Werbung", sr: "reklama" },
          { de: "die Nachrichtensendung", sr: "informativna emisija" },
          { de: "der Journalist", sr: "novinar" },
          { de: "die Berichterstattung", sr: "izveštavanje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Medijski termini."
      },
      {
        id: "b2-5-ex4",
        type: "fill-blank",
        question: "Er soll sehr reich ___. (sein - navodno)",
        correctAnswer: "sein",
        hint: "Subjektivni modalni glagol",
        explanation: "Sollen za prenošenje glasina: navodno je."
      },
      {
        id: "b2-5-ex5",
        type: "matching",
        question: "Poveži subjektivne modalne glagole.",
        pairs: [
          { de: "Er will studiert haben", sr: "On tvrdi da je studirao" },
          { de: "Sie soll krank sein", sr: "Navodno je bolesna" },
          { de: "Er muss reich sein", sr: "Sigurno je bogat" },
          { de: "Sie mag 30 sein", sr: "Možda ima 30 godina" }
        ],
        correctAnswer: "matching-check",
        explanation: "Subjektivna značenja modalnih glagola."
      },
      {
        id: "b2-5-ex6",
        type: "translation",
        question: "Prevedi: 'Navodno je ona poznata glumica.'",
        correctAnswer: ["Sie soll eine bekannte Schauspielerin sein", "Sie soll eine berühmte Schauspielerin sein"],
        explanation: "Sollen + Infinitiv za glasine/prenošenje."
      },
      {
        id: "b2-5-ex7",
        type: "multiple-choice",
        question: "Sie mag wohl Recht ___. (subjektivno)",
        options: ["haben", "hat", "hätte", "gehabt"],
        correctAnswer: "haben",
        explanation: "Mögen za verovatnoću: Verovatno je u pravu."
      },
      {
        id: "b2-5-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Er will in Harvard studiert haben, aber niemand kann das bestätigen.",
        options: ["On tvrdi da je studirao na Harvardu, ali niko to ne može potvrditi.", "On je sigurno studirao na Harvardu.", "Svi potvrđuju da je studirao na Harvardu.", "On će studirati na Harvardu."],
        correctAnswer: "On tvrdi da je studirao na Harvardu, ali niko to ne može potvrditi.",
        explanation: "Wollen = tvrditi (subjektivno značenje)."
      },
      {
        id: "b2-5-ex9",
        type: "fill-blank",
        question: "Die Zeitung ___ von vielen Menschen gelesen. (wird)",
        correctAnswer: "wird",
        hint: "Pasiv prezent",
        explanation: "Werden + Partizip II za pasiv."
      },
      {
        id: "b2-5-ex10",
        type: "translation",
        question: "Prevedi: 'Sigurno je on to uradio.' (muss)",
        correctAnswer: ["Er muss das gemacht haben", "Er muss es gemacht haben"],
        explanation: "Müssen za sigurnost: sigurno, mora da je."
      }
    ]
  },
  {
    id: "b2-6",
    title: "Pravo i pravda",
    titleDe: "Recht und Gerechtigkeit",
    description: "Sudski sistem, kriminal, kazne, građanska prava.",
    level: "B2",
    unit: 3,
    order: 6,
    duration: 60,
    xpReward: 145,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Pravni termini", "Futur II", "Složene rečenice"],
    exercises: [
      {
        id: "b2-6-ex1",
        type: "fill-blank",
        question: "Bis morgen werde ich das Buch gelesen ___. (haben)",
        correctAnswer: "haben",
        explanation: "Futur II (završenost u budućnosti)."
      },
      {
        id: "b2-6-ex2",
        type: "vocabulary",
        question: "Šta znači 'das Gericht'?",
        options: ["sud", "obrok", "oba značenja", "nijedno"],
        correctAnswer: "oba značenja",
        explanation: "Das Gericht = sud (pravni) ili jelo (kulinarski)."
      },
      {
        id: "b2-6-ex3",
        type: "matching",
        question: "Poveži pravne termine.",
        pairs: [
          { de: "der Richter", sr: "sudija" },
          { de: "der Anwalt", sr: "advokat" },
          { de: "das Urteil", sr: "presuda" },
          { de: "der Zeuge", sr: "svedok" },
          { de: "die Strafe", sr: "kazna" }
        ],
        correctAnswer: "matching-check",
        explanation: "Pravni vokabular."
      },
      {
        id: "b2-6-ex4",
        type: "multiple-choice",
        question: "Futur II: 'Er ___ es bis dann erledigt haben.'",
        options: ["wird", "werde", "würde", "werden"],
        correctAnswer: "wird",
        explanation: "Werden (prezent) + Partizip II + haben/sein."
      },
      {
        id: "b2-6-ex5",
        type: "translation",
        question: "Prevedi: 'Do tada će biti završeno.'",
        correctAnswer: ["Bis dahin wird es erledigt sein", "Bis dann wird es erledigt worden sein"],
        explanation: "Futur II sa sein za završenost."
      },
      {
        id: "b2-6-ex6",
        type: "fill-blank",
        question: "Der Angeklagte wurde ___ freigesprochen. (oslobođen optužbi)",
        correctAnswer: "schuldfrei",
        hint: "Slobodan od krivice",
        explanation: "Freisprechen = osloboditi optužbi."
      },
      {
        id: "b2-6-ex7",
        type: "matching",
        question: "Poveži složene rečenice.",
        pairs: [
          { de: "obwohl", sr: "iako" },
          { de: "falls", sr: "u slučaju da" },
          { de: "nachdem", sr: "pošto/nakon što" },
          { de: "damit", sr: "da bi" },
          { de: "indem", sr: "tako što" }
        ],
        correctAnswer: "matching-check",
        explanation: "Veznici za složene rečenice."
      },
      {
        id: "b2-6-ex8",
        type: "multiple-choice",
        question: "___ er das Verbrechen begangen hat, wurde er verhaftet.",
        options: ["Nachdem", "Obwohl", "Damit", "Indem"],
        correctAnswer: "Nachdem",
        explanation: "Nachdem + preterit = nakon što (uzročno-vremenski)."
      },
      {
        id: "b2-6-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Der Angeklagte wurde wegen Mangels an Beweisen freigesprochen und das Urteil ist rechtskräftig.",
        options: ["Optuženi je oslobođen zbog nedostatka dokaza i presuda je pravnosnažna.", "Optuženi je osuđen.", "Presuda nije pravosnažna.", "Ima dovoljno dokaza."],
        correctAnswer: "Optuženi je oslobođen zbog nedostatka dokaza i presuda je pravnosnažna.",
        explanation: "Mangel an Beweisen = nedostatak dokaza, rechtskräftig = pravnosnažno."
      },
      {
        id: "b2-6-ex10",
        type: "translation",
        question: "Prevedi: 'Advokat tvrdi da je njegov klijent nevin.'",
        correctAnswer: ["Der Anwalt behauptet, dass sein Mandant unschuldig ist", "Der Anwalt behauptet, sein Mandant sei unschuldig"],
        explanation: "Behaupten = tvrditi, Mandant = klijent (pravni)."
      }
    ]
  },
  {
    id: "b2-7",
    title: "Arhitektura i stanovanje",
    titleDe: "Architektur und Wohnen",
    description: "Stilovi gradnje, urbani razvoj, pametni gradovi.",
    level: "B2",
    unit: 4,
    order: 7,
    duration: 50,
    xpReward: 130,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Opis građevina", "Lokalni predlozi (napredno)", "Estetika"],
    exercises: [
      {
        id: "b2-7-ex1",
        type: "matching",
        question: "Poveži stilove.",
        pairs: [
          { de: "Gotik", sr: "Gotika" },
          { de: "Barock", sr: "Barok" },
          { de: "Moderne", sr: "Moderna" },
          { de: "Renaissance", sr: "Renesansa" },
          { de: "Jugendstil", sr: "Art Nuvo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Arhitektonski stilovi."
      },
      {
        id: "b2-7-ex2",
        type: "vocabulary",
        question: "Šta znači 'das Gebäude'?",
        options: ["zgrada", "gradina", "gradilište", "ograda"],
        correctAnswer: "zgrada",
        explanation: "Das Gebäude = zgrada (bauen = graditi)."
      },
      {
        id: "b2-7-ex3",
        type: "matching",
        question: "Poveži lokalne predloge.",
        pairs: [
          { de: "innerhalb + Genitiv", sr: "unutar" },
          { de: "außerhalb + Genitiv", sr: "izvan" },
          { de: "oberhalb + Genitiv", sr: "iznad" },
          { de: "unterhalb + Genitiv", sr: "ispod" },
          { de: "diesseits + Genitiv", sr: "s ove strane" }
        ],
        correctAnswer: "matching-check",
        explanation: "Napredni lokalni predlozi sa genitivom."
      },
      {
        id: "b2-7-ex4",
        type: "fill-blank",
        question: "Das Museum befindet sich ___ der Altstadt. (unutar)",
        correctAnswer: "innerhalb",
        hint: "Genitiv predlog",
        explanation: "Innerhalb + Genitiv = unutar."
      },
      {
        id: "b2-7-ex5",
        type: "translation",
        question: "Prevedi: 'Kuća se nalazi izvan grada.'",
        correctAnswer: ["Das Haus befindet sich außerhalb der Stadt", "Das Haus liegt außerhalb der Stadt"],
        explanation: "Außerhalb + Genitiv za lokaciju izvan."
      },
      {
        id: "b2-7-ex6",
        type: "matching",
        question: "Poveži arhitektonske termine.",
        pairs: [
          { de: "das Dach", sr: "krov" },
          { de: "die Fassade", sr: "fasada" },
          { de: "das Fundament", sr: "temelj" },
          { de: "der Balkon", sr: "balkon" },
          { de: "die Treppe", sr: "stepenice" }
        ],
        correctAnswer: "matching-check",
        explanation: "Delovi zgrade."
      },
      {
        id: "b2-7-ex7",
        type: "multiple-choice",
        question: "Dieses Gebäude stammt aus dem 18. ___.",
        options: ["Jahrhundert", "Jahrzehnt", "Jahr", "Jahrtausend"],
        correctAnswer: "Jahrhundert",
        explanation: "Jahrhundert = vek (18. vek)."
      },
      {
        id: "b2-7-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die gotische Kathedrale mit ihren hohen Spitzbogen ist ein beeindruckendes Beispiel mittelalterlicher Architektur.",
        options: ["Gotička katedrala sa svojim visokim šiljastim lukovima je impresivan primer srednjovekovne arhitekture.", "Moderna zgrada je nova.", "Barokna crkva je mala.", "Renesansna palata je razrušena."],
        correctAnswer: "Gotička katedrala sa svojim visokim šiljastim lukovima je impresivan primer srednjovekovne arhitekture.",
        explanation: "Spitzbogen = šiljasti luk, mittelalterlich = srednjovekovan."
      },
      {
        id: "b2-7-ex9",
        type: "fill-blank",
        question: "Der Wolkenkratzer ist ___ der Umgebung gebaut. (u sredini)",
        correctAnswer: "inmitten",
        hint: "U sredini, usred",
        explanation: "Inmitten + Genitiv = usred, u sredini."
      },
      {
        id: "b2-7-ex10",
        type: "translation",
        question: "Prevedi: 'Pametni gradovi koriste modernu tehnologiju.'",
        correctAnswer: ["Intelligente Städte nutzen moderne Technologie", "Smart Cities nutzen moderne Technologie"],
        explanation: "Intelligente Städte / Smart Cities = pametni gradovi."
      }
    ]
  },
  {
    id: "b2-8",
    title: "Književnost",
    titleDe: "Literatur",
    description: "Čitanje odlomaka, analiza likova, žanrovi.",
    level: "B2",
    unit: 4,
    order: 8,
    duration: 60,
    xpReward: 150,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Književni žanrovi", "Stilske figure", "Interpretacija"],
    exercises: [
      {
        id: "b2-8-ex1",
        type: "multiple-choice",
        question: "Was ist eine Metapher?",
        options: ["Ein bildlicher Vergleich", "Ein Reim", "Ein Witz", "Eine Lüge"],
        correctAnswer: "Ein bildlicher Vergleich",
        explanation: "Metafora je slikovito poređenje."
      },
      {
        id: "b2-8-ex2",
        type: "vocabulary",
        question: "Šta znači 'der Roman'?",
        options: ["roman", "romantika", "romansa", "rimski"],
        correctAnswer: "roman",
        explanation: "Der Roman = roman (književni žanr)."
      },
      {
        id: "b2-8-ex3",
        type: "matching",
        question: "Poveži književne žanrove.",
        pairs: [
          { de: "die Lyrik", sr: "lirika (poezija)" },
          { de: "die Epik", sr: "epika (proza)" },
          { de: "das Drama", sr: "drama" },
          { de: "die Kurzgeschichte", sr: "kratka priča" },
          { de: "das Märchen", sr: "bajka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Književni žanrovi."
      },
      {
        id: "b2-8-ex4",
        type: "fill-blank",
        question: "Goethe schrieb den berühmten ___. (Faust)",
        correctAnswer: "Faust",
        hint: "Najpoznatije delo",
        explanation: "Faust je najpoznatije Geteovo delo."
      },
      {
        id: "b2-8-ex5",
        type: "matching",
        question: "Poveži stilske figure.",
        pairs: [
          { de: "die Metapher", sr: "metafora" },
          { de: "die Ironie", sr: "ironija" },
          { de: "die Übertreibung", sr: "hiperbola" },
          { de: "der Vergleich", sr: "poređenje" },
          { de: "die Personifikation", sr: "personifikacija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Stilske figure u književnosti."
      },
      {
        id: "b2-8-ex6",
        type: "translation",
        question: "Prevedi: 'Glavni lik romana je veoma kompleksan.'",
        correctAnswer: ["Die Hauptfigur des Romans ist sehr komplex", "Der Protagonist des Romans ist sehr komplex"],
        explanation: "Hauptfigur / Protagonist = glavni lik."
      },
      {
        id: "b2-8-ex7",
        type: "multiple-choice",
        question: "Wer schrieb 'Die Leiden des jungen Werthers'?",
        options: ["Goethe", "Schiller", "Kafka", "Mann"],
        correctAnswer: "Goethe",
        explanation: "Gete je napisao 'Patnje mladog Vertera'."
      },
      {
        id: "b2-8-ex8",
        type: "matching",
        question: "Poveži nemačke pisce.",
        pairs: [
          { de: "Johann Wolfgang von Goethe", sr: "Faust, Werther" },
          { de: "Franz Kafka", sr: "Die Verwandlung" },
          { de: "Thomas Mann", sr: "Buddenbrooks" },
          { de: "Friedrich Schiller", sr: "Wilhelm Tell" }
        ],
        correctAnswer: "matching-check",
        explanation: "Poznati nemački pisci i njihova dela."
      },
      {
        id: "b2-8-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In der Epoche der Romantik spielten Gefühle und die Natur eine zentrale Rolle in der deutschen Literatur.",
        options: ["U epohi romantizma, osećanja i priroda su igrali centralnu ulogu u nemačkoj književnosti.", "Romantizam je bio o nauci.", "Priroda nije bila važna.", "Književnost nije postojala u romantizmu."],
        correctAnswer: "U epohi romantizma, osećanja i priroda su igrali centralnu ulogu u nemačkoj književnosti.",
        explanation: "Epoche = epoha, Gefühle = osećanja, zentral = centralan."
      },
      {
        id: "b2-8-ex10",
        type: "fill-blank",
        question: "Franz Kafkas 'Die Verwandlung' handelt von einem Mann, der sich in ein ___ verwandelt. (Insekt)",
        correctAnswer: "Insekt",
        hint: "Ungeziefer",
        explanation: "Gregor Samsa se pretvara u insekta (Ungeziefer)."
      }
    ]
  },

  // ==========================================
  // C1 LEVEL - NAPREDNI (6 Lekcija)
  // ==========================================
  {
    id: "c1-1",
    title: "Komunikacija na visokom nivou",
    titleDe: "Kommunikation auf hohem Niveau",
    description: "Nijanse u značenju, registri govora, retorika.",
    level: "C1",
    unit: 1,
    order: 1,
    duration: 60,
    xpReward: 160,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Funkcionalni glagoli", "Nominalni stil", "Kohezija teksta"],
    exercises: [
      {
        id: "c1-1-ex1",
        type: "matching",
        question: "Poveži funkcionalne glagole.",
        pairs: [
          { de: "in Kauf nehmen", sr: "prihvatiti (nešto negativno)" },
          { de: "zur Sprache bringen", sr: "pomenuti/diskutovati" },
          { de: "in Erwägung ziehen", sr: "razmotriti" },
          { de: "in Anspruch nehmen", sr: "koristiti/iskoristiti" },
          { de: "zur Verfügung stellen", sr: "staviti na raspolaganje" }
        ],
        correctAnswer: "matching-check",
        explanation: "Funkcionalni glagoli su ključni za C1 nivo."
      },
      {
        id: "c1-1-ex2",
        type: "fill-blank",
        question: "Die Firma stellt ihre Ressourcen zur ___ . (raspolaganje)",
        correctAnswer: "Verfügung",
        hint: "Zur ... stellen",
        explanation: "Zur Verfügung stellen = staviti na raspolaganje."
      },
      {
        id: "c1-1-ex3",
        type: "matching",
        question: "Poveži nominalni i verbalni stil.",
        pairs: [
          { de: "die Entscheidung treffen", sr: "entscheiden" },
          { de: "Kritik üben", sr: "kritisieren" },
          { de: "in Betracht ziehen", sr: "berücksichtigen" },
          { de: "Einfluss nehmen", sr: "beeinflussen" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nominalni stil je formalniji od verbalnog."
      },
      {
        id: "c1-1-ex4",
        type: "translation",
        question: "Prevedi: 'Moramo razmotriti sve mogućnosti.'",
        correctAnswer: ["Wir müssen alle Möglichkeiten in Erwägung ziehen", "Wir müssen alle Optionen in Betracht ziehen"],
        explanation: "In Erwägung/Betracht ziehen = razmotriti."
      },
      {
        id: "c1-1-ex5",
        type: "multiple-choice",
        question: "Er hat den Vorschlag ___ Ablehnung gebracht.",
        options: ["zur", "in", "auf", "mit"],
        correctAnswer: "zur",
        explanation: "Zur Ablehnung bringen = odbiti/dovesti do odbijanja."
      },
      {
        id: "c1-1-ex6",
        type: "fill-blank",
        question: "Die Verhandlungen kamen zum ___. (zastoj)",
        correctAnswer: "Stillstand",
        hint: "Zum ... kommen",
        explanation: "Zum Stillstand kommen = zastati, stati."
      },
      {
        id: "c1-1-ex7",
        type: "matching",
        question: "Poveži kohezivne markere.",
        pairs: [
          { de: "folglich", sr: "sledstveno" },
          { de: "demzufolge", sr: "prema tome" },
          { de: "nichtsdestotrotz", sr: "uprkos tome" },
          { de: "diesbezüglich", sr: "u vezi s tim" },
          { de: "infolgedessen", sr: "kao posledica toga" }
        ],
        correctAnswer: "matching-check",
        explanation: "Kohezivni markeri za povezivanje teksta."
      },
      {
        id: "c1-1-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Diesbezüglich möchte ich anmerken, dass die Entscheidung erst nach gründlicher Prüfung getroffen werden sollte.",
        options: ["U vezi s tim, želim da napomenem da bi odluka trebalo da bude doneta tek nakon temeljne provere.", "Odluka je već doneta.", "Nema potrebe za proverom.", "Brzo donosite odluku."],
        correctAnswer: "U vezi s tim, želim da napomenem da bi odluka trebalo da bude doneta tek nakon temeljne provere.",
        explanation: "Diesbezüglich = u vezi s tim, gründlich = temeljno."
      },
      {
        id: "c1-1-ex9",
        type: "translation",
        question: "Prevedi: 'Uprkos kritikama, projekat je nastavljen.'",
        correctAnswer: ["Nichtsdestotrotz wurde das Projekt fortgesetzt", "Trotz der Kritik wurde das Projekt fortgesetzt"],
        explanation: "Nichtsdestotrotz = uprkos tome (formalno)."
      },
      {
        id: "c1-1-ex10",
        type: "multiple-choice",
        question: "___ ist zu bemerken, dass...",
        options: ["Diesbezüglich", "Dieshalb", "Deswegen", "Davon"],
        correctAnswer: "Diesbezüglich",
        explanation: "Diesbezüglich = u vezi s tim (formalni diskurs)."
      }
    ]
  },
  {
    id: "c1-2",
    title: "Psihologija i društvo",
    titleDe: "Psychologie und Gesellschaft",
    description: "Sociološki fenomeni, grupna dinamika, mentalno zdravlje.",
    level: "C1",
    unit: 1,
    order: 2,
    duration: 65,
    xpReward: 165,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Stručni termini", "Konjunktiv I (indirektni govor)", "Složena sintaksa"],
    exercises: [
      {
        id: "c1-2-ex1",
        type: "fill-blank",
        question: "Der Minister sagte, er ___ nichts davon gewusst. (habe)",
        correctAnswer: "habe",
        explanation: "Konjunktiv I se koristi u vestima za indirektni govor."
      },
      {
        id: "c1-2-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Gruppendynamik'?",
        options: ["grupna dinamika", "grupa ljudi", "dinamičan pokret", "fizička snaga"],
        correctAnswer: "grupna dinamika",
        explanation: "Gruppendynamik = psihološki procesi u grupi."
      },
      {
        id: "c1-2-ex3",
        type: "matching",
        question: "Poveži psihološke termine.",
        pairs: [
          { de: "das Unterbewusstsein", sr: "podsvest" },
          { de: "die Verdrängung", sr: "potiskivanje" },
          { de: "die Projektion", sr: "projekcija" },
          { de: "die Kompensation", sr: "kompenzacija" },
          { de: "das Trauma", sr: "trauma" }
        ],
        correctAnswer: "matching-check",
        explanation: "Psihoanalitički termini."
      },
      {
        id: "c1-2-ex4",
        type: "multiple-choice",
        question: "Der Experte behauptete, die Studie ___ fehlerhaft.",
        options: ["sei", "ist", "wäre", "war"],
        correctAnswer: "sei",
        explanation: "Konjunktiv I (sei) za indirektni govor u formalnom kontekstu."
      },
      {
        id: "c1-2-ex5",
        type: "fill-blank",
        question: "Es wurde berichtet, dass die Teilnehmer ___ Symptome gezeigt hätten.",
        correctAnswer: "keine",
        hint: "Negacija",
        explanation: "Složena sintaksa: dass + Konjunktiv II."
      },
      {
        id: "c1-2-ex6",
        type: "matching",
        question: "Poveži Konjunktiv I forme.",
        pairs: [
          { de: "er habe", sr: "on ima (indirektno)" },
          { de: "sie sei", sr: "ona je (indirektno)" },
          { de: "man könne", sr: "može se (indirektno)" },
          { de: "es werde", sr: "postaje se (indirektno)" },
          { de: "sie seien", sr: "oni su (indirektno)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Konjunktiv I forme za indirektni govor."
      },
      {
        id: "c1-2-ex7",
        type: "translation",
        question: "Prevedi: 'Psiholog je tvrdio da grupna terapija pomaže.'",
        correctAnswer: ["Der Psychologe behauptete, dass Gruppentherapie helfe", "Der Psychologe behauptete, Gruppentherapie helfe"],
        explanation: "Behaupten + Konjunktiv I za indirektni govor."
      },
      {
        id: "c1-2-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Laut der Studie habe der soziale Druck einen erheblichen Einfluss auf das individuelle Verhalten.",
        options: ["Prema studiji, društveni pritisak ima značajan uticaj na individualno ponašanje.", "Studija ne govori o pritisku.", "Individualno ponašanje nije važno.", "Socijalni pritisak ne postoji."],
        correctAnswer: "Prema studiji, društveni pritisak ima značajan uticaj na individualno ponašanje.",
        explanation: "Laut + Genitiv = prema, erheblich = značajan."
      },
      {
        id: "c1-2-ex9",
        type: "multiple-choice",
        question: "Die Forscher vermuteten, die Ergebnisse ___ replizierbar.",
        options: ["seien", "sind", "waren", "wären"],
        correctAnswer: "seien",
        explanation: "Seien (Konjunktiv I Plural) za indirektni govor."
      },
      {
        id: "c1-2-ex10",
        type: "fill-blank",
        question: "Die psychische ___ der Bevölkerung hat in den letzten Jahren abgenommen. (zdravlje)",
        correctAnswer: "Gesundheit",
        hint: "Mentalno zdravlje",
        explanation: "Psychische Gesundheit = mentalno zdravlje."
      }
    ]
  },
  {
    id: "c1-3",
    title: "Ekonomija i finansije",
    titleDe: "Wirtschaft und Finanzen",
    description: "Berza, investicije, makroekonomija, bankarstvo.",
    level: "C1",
    unit: 2,
    order: 3,
    duration: 60,
    xpReward: 160,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Finansijski izveštaji", "Grafikoni i statistika", "Poslovni pregovori"],
    exercises: [
      {
        id: "c1-3-ex1",
        type: "matching",
        question: "Poveži pojmove.",
        pairs: [
          { de: "die Aktie", sr: "deonica" },
          { de: "die Börse", sr: "berza" },
          { de: "die Inflation", sr: "inflacija" },
          { de: "die Dividende", sr: "dividenda" },
          { de: "der Anleger", sr: "investitor" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ekonomski pojmovi."
      },
      {
        id: "c1-3-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Rezession'?",
        options: ["recesija", "recepcija", "recept", "recenzija"],
        correctAnswer: "recesija",
        explanation: "Rezession = ekonomski pad, recesija."
      },
      {
        id: "c1-3-ex3",
        type: "fill-blank",
        question: "Der DAX ist gestern um 2% ___. (pao)",
        correctAnswer: "gefallen",
        hint: "Berza je pala",
        explanation: "Fallen (pasti) - berza pada (fällt/gefallen)."
      },
      {
        id: "c1-3-ex4",
        type: "matching",
        question: "Poveži finansijske izraze.",
        pairs: [
          { de: "die Bilanz", sr: "bilans" },
          { de: "der Umsatz", sr: "promet" },
          { de: "der Gewinn", sr: "profit" },
          { de: "der Verlust", sr: "gubitak" },
          { de: "die Rendite", sr: "prinos" }
        ],
        correctAnswer: "matching-check",
        explanation: "Finansijski izveštaji."
      },
      {
        id: "c1-3-ex5",
        type: "translation",
        question: "Prevedi: 'Centralna banka je povećala kamatne stope.'",
        correctAnswer: ["Die Zentralbank hat die Zinssätze erhöht", "Die Zentralbank hat die Zinsen erhöht"],
        explanation: "Zentralbank = centralna banka, Zinssätze = kamatne stope."
      },
      {
        id: "c1-3-ex6",
        type: "multiple-choice",
        question: "Laut dem Diagramm ___ die Exporte um 15%.",
        options: ["stiegen", "steigen", "steigt", "gestiegen"],
        correctAnswer: "stiegen",
        explanation: "Preterit: steigen -> stiegen (grafikoni, izveštaji)."
      },
      {
        id: "c1-3-ex7",
        type: "matching",
        question: "Poveži termine za pregovore.",
        pairs: [
          { de: "verhandeln", sr: "pregovarati" },
          { de: "der Kompromiss", sr: "kompromis" },
          { de: "die Einigung", sr: "dogovor" },
          { de: "das Angebot", sr: "ponuda" },
          { de: "die Forderung", sr: "zahtev" }
        ],
        correctAnswer: "matching-check",
        explanation: "Poslovni pregovori."
      },
      {
        id: "c1-3-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die Quartalsergebnisse zeigen einen Rückgang des Gewinns um 8%, was auf die gestiegenen Rohstoffpreise zurückzuführen ist.",
        options: ["Kvartalni rezultati pokazuju pad profita od 8%, što je posledica porasta cena sirovina.", "Profit je porastao.", "Cene sirovina su pale.", "Rezultati su stabilni."],
        correctAnswer: "Kvartalni rezultati pokazuju pad profita od 8%, što je posledica porasta cena sirovina.",
        explanation: "Rückgang = pad, Rohstoffpreise = cene sirovina."
      },
      {
        id: "c1-3-ex9",
        type: "fill-blank",
        question: "Die Investoren sind ___ , da die Prognosen positiv sind.",
        correctAnswer: "optimistisch",
        hint: "Pozitivan stav",
        explanation: "Optimistisch = optimističan (investitori)."
      },
      {
        id: "c1-3-ex10",
        type: "translation",
        question: "Prevedi: 'Pregovori su propali zbog neslaganja.'",
        correctAnswer: ["Die Verhandlungen sind wegen Unstimmigkeiten gescheitert", "Die Verhandlungen sind aufgrund von Meinungsverschiedenheiten gescheitert"],
        explanation: "Scheitern = propasti, Unstimmigkeiten = neslaganja."
      }
    ]
  },
  {
    id: "c1-4",
    title: "Tehnologija i etika",
    titleDe: "Technologie und Ethik",
    description: "Bioinženjering, veštačka inteligencija, moralne dileme.",
    level: "C1",
    unit: 2,
    order: 4,
    duration: 65,
    xpReward: 170,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Debata", "Izražavanje pretpostavki", "Argumentacija"],
    exercises: [
      {
        id: "c1-4-ex1",
        type: "multiple-choice",
        question: "Was bedeutet 'ein zweischneidiges Schwert'?",
        options: ["Etwas hat Vor- und Nachteile", "Eine Waffe", "Ein Küchengerät", "Ein Sport"],
        correctAnswer: "Etwas hat Vor- und Nachteile",
        explanation: "Mač sa dve oštrice - ima i dobre i loše strane."
      },
      {
        id: "c1-4-ex2",
        type: "vocabulary",
        question: "Šta znači 'die künstliche Intelligenz'?",
        options: ["veštačka inteligencija", "veštačka umetnost", "prirodna inteligencija", "veštačka biljka"],
        correctAnswer: "veštačka inteligencija",
        explanation: "Künstliche Intelligenz (KI) = veštačka inteligencija (AI)."
      },
      {
        id: "c1-4-ex3",
        type: "matching",
        question: "Poveži etičke pojmove.",
        pairs: [
          { de: "die Moral", sr: "moral" },
          { de: "die Ethik", sr: "etika" },
          { de: "das Dilemma", sr: "dilema" },
          { de: "die Verantwortung", sr: "odgovornost" },
          { de: "das Gewissen", sr: "savest" }
        ],
        correctAnswer: "matching-check",
        explanation: "Etički termini."
      },
      {
        id: "c1-4-ex4",
        type: "fill-blank",
        question: "Angenommen, die Technologie ___ perfekt, welche Risiken bestünden?",
        correctAnswer: "wäre",
        hint: "Konjunktiv II za pretpostavke",
        explanation: "Angenommen + Konjunktiv II za hipotetičke situacije."
      },
      {
        id: "c1-4-ex5",
        type: "translation",
        question: "Prevedi: 'Pod pretpostavkom da AI postane svestan, šta bi to značilo?'",
        correctAnswer: ["Angenommen, die KI würde bewusst werden, was würde das bedeuten", "Vorausgesetzt, die KI würde ein Bewusstsein entwickeln, was würde das bedeuten"],
        explanation: "Angenommen/Vorausgesetzt za hipotetičke argumente."
      },
      {
        id: "c1-4-ex6",
        type: "matching",
        question: "Poveži argumentativne izraze.",
        pairs: [
          { de: "einerseits... andererseits", sr: "s jedne strane... s druge strane" },
          { de: "zudem", sr: "osim toga" },
          { de: "hingegen", sr: "nasuprot tome" },
          { de: "dennoch", sr: "ipak" },
          { de: "insofern", sr: "utoliko" }
        ],
        correctAnswer: "matching-check",
        explanation: "Argumentativni veznici."
      },
      {
        id: "c1-4-ex7",
        type: "multiple-choice",
        question: "Die Genmanipulation ist ___. (kontroverzna)",
        options: ["umstritten", "gestritten", "bestritten", "verstritten"],
        correctAnswer: "umstritten",
        explanation: "Umstritten = kontroverzan, sporan."
      },
      {
        id: "c1-4-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Einerseits bietet die KI enorme Chancen für die Medizin, andererseits birgt sie erhebliche Risiken für die Privatsphäre.",
        options: ["S jedne strane, AI nudi ogromne šanse za medicinu, s druge strane, nosi značajne rizike za privatnost.", "AI nema nikakve prednosti.", "Privatnost nije ugrožena.", "Medicina ne koristi AI."],
        correctAnswer: "S jedne strane, AI nudi ogromne šanse za medicinu, s druge strane, nosi značajne rizike za privatnost.",
        explanation: "Einerseits... andererseits za balansiranu argumentaciju."
      },
      {
        id: "c1-4-ex9",
        type: "fill-blank",
        question: "Die Debatte über Bioethik ist äußerst ___. (kompleksna)",
        correctAnswer: "komplex",
        hint: "Složena, kompleksna",
        explanation: "Komplex = kompleksan, složen."
      },
      {
        id: "c1-4-ex10",
        type: "translation",
        question: "Prevedi: 'Uprkos svim prednostima, moramo razmotriti etičke implikacije.'",
        correctAnswer: ["Trotz aller Vorteile müssen wir die ethischen Implikationen berücksichtigen", "Ungeachtet aller Vorteile müssen wir die ethischen Auswirkungen bedenken"],
        explanation: "Trotz/Ungeachtet + Genitiv za koncesiju."
      }
    ]
  },
  {
    id: "c1-5",
    title: "Umetnost i kritika",
    titleDe: "Kunst und Kritik",
    description: "Pisanje recenzija, analiza umetničkih dela, estetika.",
    level: "C1",
    unit: 3,
    order: 5,
    duration: 60,
    xpReward: 160,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Kritika", "Pridevi za opisivanje umetnosti", "Stilistika"],
    exercises: [
      {
        id: "c1-5-ex1",
        type: "matching",
        question: "Poveži prideve.",
        pairs: [
          { de: "atemberaubend", sr: "zapanjujuće" },
          { de: "tiefgründig", sr: "dubokoumno" },
          { de: "oberflächlich", sr: "površno" },
          { de: "eindrucksvoll", sr: "impresivno" },
          { de: "bahnbrechend", sr: "revolucionarno" }
        ],
        correctAnswer: "matching-check",
        explanation: "Rečnik za kritiku."
      },
      {
        id: "c1-5-ex2",
        type: "vocabulary",
        question: "Šta znači 'das Meisterwerk'?",
        options: ["remek-delo", "majstor", "posao majstora", "radna smena"],
        correctAnswer: "remek-delo",
        explanation: "Meisterwerk = remek-delo (u umetnosti)."
      },
      {
        id: "c1-5-ex3",
        type: "fill-blank",
        question: "Die Ausstellung ist äußerst ___. (impresivna)",
        correctAnswer: "beeindruckend",
        hint: "Puno utiska",
        explanation: "Beeindruckend = impresivan (ein Eindruck = utisak)."
      },
      {
        id: "c1-5-ex4",
        type: "matching",
        question: "Poveži umetničke termine.",
        pairs: [
          { de: "die Skulptur", sr: "skulptura" },
          { de: "das Gemälde", sr: "slika (ulje)" },
          { de: "die Installation", sr: "instalacija" },
          { de: "die Performance", sr: "performans" },
          { de: "die Zeichnung", sr: "crtež" }
        ],
        correctAnswer: "matching-check",
        explanation: "Vrste umetničkih dela."
      },
      {
        id: "c1-5-ex5",
        type: "translation",
        question: "Prevedi: 'Ova slika izaziva snažne emocije kod posmatrača.'",
        correctAnswer: ["Dieses Gemälde ruft beim Betrachter starke Emotionen hervor", "Dieses Bild löst beim Betrachter starke Gefühle aus"],
        explanation: "Hervorrufen/Auslösen = izazvati (emocije)."
      },
      {
        id: "c1-5-ex6",
        type: "multiple-choice",
        question: "Die Kritikerin bezeichnet das Werk als ___.",
        options: ["bahnbrechend", "bahnbrechende", "bahnbrechenden", "bahnbrechender"],
        correctAnswer: "bahnbrechend",
        explanation: "Als + nominativ bez deklinacije."
      },
      {
        id: "c1-5-ex7",
        type: "matching",
        question: "Poveži stilove u umetnosti.",
        pairs: [
          { de: "der Impressionismus", sr: "impresionizam" },
          { de: "der Expressionismus", sr: "ekspresionizam" },
          { de: "der Surrealismus", sr: "nadrealizam" },
          { de: "der Kubismus", sr: "kubizam" },
          { de: "die Abstrakte Kunst", sr: "apstraktna umetnost" }
        ],
        correctAnswer: "matching-check",
        explanation: "Umetnički pravci."
      },
      {
        id: "c1-5-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Das Kunstwerk besticht durch seine einzigartige Farbgebung und die geschickte Verwendung von Licht und Schatten.",
        options: ["Umetničko delo očarava svojom jedinstvenom upotrebom boja i veštim korišćenjem svetla i senke.", "Slika nema boje.", "Svetlo nije važno.", "Umetnik nije vešt."],
        correctAnswer: "Umetničko delo očarava svojom jedinstvenom upotrebom boja i veštim korišćenjem svetla i senke.",
        explanation: "Besticht = očarava, Farbgebung = upotreba boja."
      },
      {
        id: "c1-5-ex9",
        type: "fill-blank",
        question: "Die ___ des Künstlers ist unverkennbar. (rukopis)",
        correctAnswer: "Handschrift",
        hint: "Prepoznatljiv stil",
        explanation: "Handschrift (fig.) = umetnički rukopis, stil."
      },
      {
        id: "c1-5-ex10",
        type: "translation",
        question: "Prevedi: 'Recenzent hvali tehničku virtuoznost umetnika.'",
        correctAnswer: ["Der Rezensent lobt die technische Virtuosität des Künstlers", "Der Kritiker preist die technische Meisterschaft des Künstlers"],
        explanation: "Loben = hvaliti, Virtuosität = virtuoznost."
      }
    ]
  },
  {
    id: "c1-6",
    title: "Istorija ideja",
    titleDe: "Ideengeschichte",
    description: "Filozofski pravci, razvoj misli kroz vekove.",
    level: "C1",
    unit: 3,
    order: 6,
    duration: 70,
    xpReward: 180,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Filozofija", "Apstraktne imenice", "Tekstualna analiza"],
    exercises: [
      {
        id: "c1-6-ex1",
        type: "multiple-choice",
        question: "Wer war Immanuel Kant?",
        options: ["Ein Philosoph", "Ein König", "Ein Maler", "Ein Musiker"],
        correctAnswer: "Ein Philosoph",
        explanation: "Poznati nemački filozof."
      },
      {
        id: "c1-6-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Aufklärung'?",
        options: ["prosvetiteljstvo", "objašnjenje", "oba značenja", "nijedno"],
        correctAnswer: "oba značenja",
        explanation: "Aufklärung = prosvetiteljstvo (epoha) ili objašnjenje."
      },
      {
        id: "c1-6-ex3",
        type: "matching",
        question: "Poveži filozofske pojmove.",
        pairs: [
          { de: "der Rationalismus", sr: "racionalizam" },
          { de: "der Empirismus", sr: "empirizam" },
          { de: "der Idealismus", sr: "idealizam" },
          { de: "der Nihilismus", sr: "nihilizam" },
          { de: "der Existenzialismus", sr: "egzistencijalizam" }
        ],
        correctAnswer: "matching-check",
        explanation: "Filozofski pravci."
      },
      {
        id: "c1-6-ex4",
        type: "fill-blank",
        question: "Kant war ein Vertreter des deutschen ___. (idealizam)",
        correctAnswer: "Idealismus",
        hint: "Filozofski pravac",
        explanation: "Kant je bio predstavnik nemačkog idealizma."
      },
      {
        id: "c1-6-ex5",
        type: "matching",
        question: "Poveži filozofe.",
        pairs: [
          { de: "Immanuel Kant", sr: "Kritika čistog uma" },
          { de: "Friedrich Nietzsche", sr: "Tako je govorio Zaratustra" },
          { de: "Georg Wilhelm Friedrich Hegel", sr: "Fenomenologija duha" },
          { de: "Martin Heidegger", sr: "Bitak i vreme" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nemački filozofi i njihova dela."
      },
      {
        id: "c1-6-ex6",
        type: "translation",
        question: "Prevedi: 'Sapere aude! - Usudi se da znaš!'",
        correctAnswer: ["Wage es, weise zu sein", "Habe Mut, dich deines eigenen Verstandes zu bedienen"],
        explanation: "Kantov moto prosvetiteljstva."
      },
      {
        id: "c1-6-ex7",
        type: "multiple-choice",
        question: "Das Zeitalter der Aufklärung war im ___ Jahrhundert.",
        options: ["18.", "15.", "20.", "12."],
        correctAnswer: "18.",
        explanation: "Prosvetiteljstvo = 18. vek (1700-1800)."
      },
      {
        id: "c1-6-ex8",
        type: "matching",
        question: "Poveži apstraktne imenice.",
        pairs: [
          { de: "die Vernunft", sr: "razum" },
          { de: "die Erkenntnis", sr: "spoznaja" },
          { de: "das Bewusstsein", sr: "svest" },
          { de: "die Wahrheit", sr: "istina" },
          { de: "die Freiheit", sr: "sloboda" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ključni filozofski termini."
      },
      {
        id: "c1-6-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Hegel entwickelte ein dialektisches System, das These, Antithese und Synthese umfasst und die Entwicklung des Geistes beschreibt.",
        options: ["Hegel je razvio dijalektički sistem koji obuhvata tezu, antitezu i sintezu i opisuje razvoj duha.", "Hegel nije bio filozof.", "Dijalektika nije važna.", "Sistem nema strukturu."],
        correctAnswer: "Hegel je razvio dijalektički sistem koji obuhvata tezu, antitezu i sintezu i opisuje razvoj duha.",
        explanation: "Dialektisches System = dijalektički sistem, Geist = duh."
      },
      {
        id: "c1-6-ex10",
        type: "fill-blank",
        question: "Nietzsches Philosophie stellt traditionelle Werte in ___. (pitanje)",
        correctAnswer: "Frage",
        hint: "In Frage stellen",
        explanation: "In Frage stellen = dovesti u pitanje."
      }
    ]
  },

  // ==========================================
  // C2 LEVEL - EKSPERTSKI (4 Lekcije)
  // ==========================================
  {
    id: "c2-1",
    title: "Nemačka književnost",
    titleDe: "Deutsche Literatur",
    description: "Goethe, Schiller, Kafka, Mann - dubinska analiza.",
    level: "C2",
    unit: 1,
    order: 1,
    duration: 80,
    xpReward: 200,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Književne epohe", "Interpretacija", "Arhaični jezik"],
    exercises: [
      {
        id: "c2-1-ex1",
        type: "multiple-choice",
        question: "Ko je napisao 'Faust'?",
        options: ["Goethe", "Schiller", "Kafka", "Hesse"],
        correctAnswer: "Goethe",
        explanation: "Johann Wolfgang von Goethe je autor Fausta."
      },
      {
        id: "c2-1-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Sturm-und-Drang-Epoche'?",
        options: ["Epoha Oluje i poriva", "Oluja bez kraja", "Poetski pokret", "Dramski stil"],
        correctAnswer: "Epoha Oluje i poriva",
        explanation: "Sturm und Drang = književni pokret (1765-1785) koji naglašava emocije."
      },
      {
        id: "c2-1-ex3",
        type: "matching",
        question: "Poveži književne epohe.",
        pairs: [
          { de: "die Aufklärung", sr: "Prosvetiteljstvo (1720-1785)" },
          { de: "der Sturm und Drang", sr: "Oluja i poriv (1765-1785)" },
          { de: "die Weimarer Klassik", sr: "Vajmarska klasika (1786-1805)" },
          { de: "die Romantik", sr: "Romantizam (1795-1848)" },
          { de: "der Expressionismus", sr: "Ekspresionizam (1910-1925)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nemačke književne epohe."
      },
      {
        id: "c2-1-ex4",
        type: "fill-blank",
        question: "'Zwei Seelen wohnen, ach! in meiner ___.' (Faust)",
        correctAnswer: "Brust",
        hint: "Dve duše u mojim grudima",
        explanation: "Čuveni citat iz Fausta o unutrašnjem konfliktu."
      },
      {
        id: "c2-1-ex5",
        type: "matching",
        question: "Poveži pisce i dela.",
        pairs: [
          { de: "Goethe", sr: "Die Leiden des jungen Werthers" },
          { de: "Schiller", sr: "Die Räuber" },
          { de: "Kafka", sr: "Der Prozess" },
          { de: "Thomas Mann", sr: "Der Zauberberg" },
          { de: "Hermann Hesse", sr: "Der Steppenwolf" }
        ],
        correctAnswer: "matching-check",
        explanation: "Klasici nemačke književnosti."
      },
      {
        id: "c2-1-ex6",
        type: "translation",
        question: "Prevedi Šilerov citat: 'Die Kunst ist eine Tochter der Freiheit.'",
        correctAnswer: ["Umetnost je kćer slobode", "Umetnost je ćerka slobode"],
        explanation: "Šiler o vezi umetnosti i slobode."
      },
      {
        id: "c2-1-ex7",
        type: "multiple-choice",
        question: "Franz Kafkas Stil wird oft als ___ bezeichnet.",
        options: ["kafkaesk", "romantisch", "klassisch", "naturalistisch"],
        correctAnswer: "kafkaesk",
        explanation: "Kafkaesk = apsurdno, noćno-morno, birokratski užas."
      },
      {
        id: "c2-1-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Goethes Faust gilt als eines der bedeutendsten Werke der Weltliteratur und behandelt die Frage nach dem Sinn des Lebens.",
        options: ["Geteov Faust važi za jedno od najznačajnijih dela svetske književnosti i bavi se pitanjem smisla života.", "Faust nije važno delo.", "Faust govori o ljubavi.", "Gete nije napisao Fausta."],
        correctAnswer: "Geteov Faust važi za jedno od najznačajnijih dela svetske književnosti i bavi se pitanjem smisla života.",
        explanation: "Bedeutendsten = najznačajnijih, Sinn des Lebens = smisao života."
      },
      {
        id: "c2-1-ex9",
        type: "fill-blank",
        question: "Thomas Manns 'Buddenbrooks' beschreibt den ___ einer Kaufmannsfamilie. (pad)",
        correctAnswer: "Verfall",
        hint: "Dekadencija, propadanje",
        explanation: "Verfall = pad, propadanje (jedna od tema romana)."
      },
      {
        id: "c2-1-ex10",
        type: "translation",
        question: "Prevedi: 'Kafka je majstor apsurda u književnosti.'",
        correctAnswer: ["Kafka ist ein Meister des Absurden in der Literatur", "Kafka ist der Meister des Absurden in der Literatur"],
        explanation: "Meister des Absurden = majstor apsurda."
      }
    ]
  },
  {
    id: "c2-2",
    title: "Dijalekti i lingvistika",
    titleDe: "Dialekte und Linguistik",
    description: "Bairisch, Schwäbisch, Plattdeutsch, Austrijski, Švajcarski.",
    level: "C2",
    unit: 1,
    order: 2,
    duration: 85,
    xpReward: 210,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Varijeteti nemačkog", "Fonetske razlike", "Regionalizmi"],
    exercises: [
      {
        id: "c2-2-ex1",
        type: "matching",
        question: "Poveži dijalekte.",
        pairs: [
          { de: "Grüezi", sr: "Zdravo (Švajcarska)" },
          { de: "Servus", sr: "Zdravo (Bavarska/Austrija)" },
          { de: "Moin", sr: "Zdravo (Severna Nemačka)" },
          { de: "Grüß Gott", sr: "Bog te blagoslovio (Jug)" },
          { de: "Tach", sr: "Zdravo (Rajna)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Regionalni pozdravi."
      },
      {
        id: "c2-2-ex2",
        type: "vocabulary",
        question: "Šta znači 'Plattdeutsch'?",
        options: ["niskonemački dijalekt", "ravnica na nemačkom", "ploča na nemačkom", "pljosnat jezik"],
        correctAnswer: "niskonemački dijalekt",
        explanation: "Plattdeutsch = niskonemački (Severna Nemačka)."
      },
      {
        id: "c2-2-ex3",
        type: "matching",
        question: "Poveži regione i dijalekte.",
        pairs: [
          { de: "Bayern", sr: "Bairisch" },
          { de: "Schwaben", sr: "Schwäbisch" },
          { de: "Sachsen", sr: "Sächsisch" },
          { de: "Köln", sr: "Kölsch" },
          { de: "Berlin", sr: "Berlinerisch" }
        ],
        correctAnswer: "matching-check",
        explanation: "Regionalni dijalekti Nemačke."
      },
      {
        id: "c2-2-ex4",
        type: "fill-blank",
        question: "In der Schweiz sagt man 'Velo' statt ___. (bicikl)",
        correctAnswer: "Fahrrad",
        hint: "Standardni nemački",
        explanation: "Velo (šv.) = Fahrrad (standardni) = bicikl."
      },
      {
        id: "c2-2-ex5",
        type: "matching",
        question: "Poveži švajcarske varijante.",
        pairs: [
          { de: "Velo (CH)", sr: "Fahrrad (DE)" },
          { de: "Tram (CH/AT)", sr: "Straßenbahn (DE)" },
          { de: "Paradeiser (AT)", sr: "Tomate (DE)" },
          { de: "Erdapfel (AT)", sr: "Kartoffel (DE)" },
          { de: "Jänner (AT)", sr: "Januar (DE)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Austrijske i švajcarske varijante."
      },
      {
        id: "c2-2-ex6",
        type: "translation",
        question: "Prevedi bavarski: 'I mog di' na standardni nemački.",
        correctAnswer: ["Ich mag dich", "Ich liebe dich"],
        explanation: "Bavarski: I = Ich, mog = mag, di = dich."
      },
      {
        id: "c2-2-ex7",
        type: "multiple-choice",
        question: "Welcher Dialekt wird in Österreich hauptsächlich gesprochen?",
        options: ["Bairisch", "Plattdeutsch", "Schwäbisch", "Sächsisch"],
        correctAnswer: "Bairisch",
        explanation: "U Austriji se govore bavarski dijalekti."
      },
      {
        id: "c2-2-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "In der deutschen Sprachwissenschaft unterscheidet man zwischen Hochdeutsch, Mitteldeutsch und Niederdeutsch, basierend auf der zweiten Lautverschiebung.",
        options: ["U nemačkoj lingvistici razlikuje se visokonemački, srednjenemački i niskonemački, na osnovu druge glasovne promene.", "Postoji samo jedan dijalekt.", "Glasovne promene nisu važne.", "Svi govore isto."],
        correctAnswer: "U nemačkoj lingvistici razlikuje se visokonemački, srednjenemački i niskonemački, na osnovu druge glasovne promene.",
        explanation: "Lautverschiebung = glasovna promena (lingvistički termin)."
      },
      {
        id: "c2-2-ex9",
        type: "fill-blank",
        question: "Die ___ ist das Studium der Sprache. (lingvistika)",
        correctAnswer: "Linguistik",
        hint: "Nauka o jeziku",
        explanation: "Linguistik = lingvistika (Sprachwissenschaft)."
      },
      {
        id: "c2-2-ex10",
        type: "matching",
        question: "Poveži fonetske razlike.",
        pairs: [
          { de: "ich (Standard)", sr: "[ɪç] - palatalni frikat." },
          { de: "isch (Süddeutsch)", sr: "[ɪʃ] - postalveolar." },
          { de: "ik (Niederdeutsch)", sr: "[ɪk] - velarni ploziv." }
        ],
        correctAnswer: "matching-check",
        explanation: "Različiti izgovori 'ich' u dijalektima."
      }
    ]
  },
  {
    id: "c2-3",
    title: "Napredna retorika",
    titleDe: "Fortgeschrittene Rhetorik",
    description: "Politički govori, pregovaranje, ironija, sarkazam.",
    level: "C2",
    unit: 2,
    order: 3,
    duration: 90,
    xpReward: 220,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Stilske figure", "Ubeđivanje", "Nijanse tona"],
    exercises: [
      {
        id: "c2-3-ex1",
        type: "multiple-choice",
        question: "Was ist Ironie?",
        options: ["Das Gegenteil sagen von dem, was man meint", "Laut sprechen", "Lügen", "Witze erzählen"],
        correctAnswer: "Das Gegenteil sagen von dem, was man meint",
        explanation: "Ironija je kada kažemo suprotno od onoga što mislimo."
      },
      {
        id: "c2-3-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Anspielung'?",
        options: ["aluzija", "igra", "napad", "aplikacija"],
        correctAnswer: "aluzija",
        explanation: "Anspielung = aluzija, indirektna referenca."
      },
      {
        id: "c2-3-ex3",
        type: "matching",
        question: "Poveži stilske figure.",
        pairs: [
          { de: "die Hyperbel", sr: "hiperbola (preuveličavanje)" },
          { de: "die Litotes", sr: "litota (umanjivanje)" },
          { de: "die Antithese", sr: "antiteza (suprotnost)" },
          { de: "der Euphemismus", sr: "eufemizam (ublažavanje)" },
          { de: "das Oxymoron", sr: "oksimoron (kontradikcija)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Napredne stilske figure."
      },
      {
        id: "c2-3-ex4",
        type: "fill-blank",
        question: "'Das ist ja ganz ___ !' (ironično: super, odlično)",
        correctAnswer: "toll",
        hint: "Sarkastično 'odlično'",
        explanation: "Ironična upotreba: Toll! kada je situacija loša."
      },
      {
        id: "c2-3-ex5",
        type: "matching",
        question: "Poveži retoričke tehnike.",
        pairs: [
          { de: "rhetorische Frage", sr: "retoričko pitanje" },
          { de: "Wiederholung", sr: "ponavljanje (repeticija)" },
          { de: "Steigerung", sr: "gradacija" },
          { de: "Anapher", sr: "anafora (ponavljanje na početku)" },
          { de: "Parallelismus", sr: "paralelizam" }
        ],
        correctAnswer: "matching-check",
        explanation: "Tehnike ubeđivanja."
      },
      {
        id: "c2-3-ex6",
        type: "translation",
        question: "Prevedi: 'Dragi kolega, vaša ideja je... interesantna.' (diplomatski)",
        correctAnswer: ["Lieber Kollege, Ihre Idee ist... interessant", "Geschätzter Kollege, Ihr Vorschlag ist... interessant"],
        explanation: "Diplomatski ton za blagu kritiku."
      },
      {
        id: "c2-3-ex7",
        type: "multiple-choice",
        question: "Ein Politiker, der verspricht ohne zu handeln, benutzt ___.",
        options: ["leere Worthülsen", "klare Aussagen", "konkrete Pläne", "ehrliche Worte"],
        correctAnswer: "leere Worthülsen",
        explanation: "Leere Worthülsen = prazne fraze (politički žargon)."
      },
      {
        id: "c2-3-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Der Redner nutzt geschickt Pathos und Ethos, um das Publikum emotional anzusprechen und seine Glaubwürdigkeit zu unterstreichen.",
        options: ["Govornik vešto koristi patos i etos da bi se emotivno obratio publici i naglasio svoju kredibilnost.", "Govornik ne koristi nikakve tehnike.", "Publika nije zainteresovana.", "Logika je jedino važna."],
        correctAnswer: "Govornik vešto koristi patos i etos da bi se emotivno obratio publici i naglasio svoju kredibilnost.",
        explanation: "Pathos = emotivni apel, Ethos = kredibilitet, Logos = logika."
      },
      {
        id: "c2-3-ex9",
        type: "fill-blank",
        question: "Mit Verlaub, Herr Präsident, Sie sind ein ___. (Idiom Bundestag)",
        correctAnswer: "Idiot",
        hint: "Čuvena Fischerova izjava",
        explanation: "Čuvena izjava Joshke Fišera u Bundestagu 1984."
      },
      {
        id: "c2-3-ex10",
        type: "matching",
        question: "Poveži tonove govora.",
        pairs: [
          { de: "diplomatisch", sr: "diplomatski" },
          { de: "sarkastisch", sr: "sarkastičan" },
          { de: "sachlich", sr: "objektivan" },
          { de: "provokativ", sr: "provokativan" },
          { de: "beschwichtigend", sr: "umirujući" }
        ],
        correctAnswer: "matching-check",
        explanation: "Nijanse tona u govoru."
      }
    ]
  },
  {
    id: "c2-4",
    title: "Kulturni identitet",
    titleDe: "Kulturelle Identität",
    description: "Šta znači biti Nemac? Istorija, mentalitet, savremeno društvo.",
    level: "C2",
    unit: 2,
    order: 4,
    duration: 90,
    xpReward: 230,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Identitet", "Integracija", "Savremena Nemačka"],
    exercises: [
      {
        id: "c2-4-ex1",
        type: "fill-blank",
        question: "Deutschland ist ein ___ Land. (einwandern)",
        correctAnswer: "Einwanderungs",
        explanation: "Einwanderungsland = zemlja imigracije."
      },
      {
        id: "c2-4-ex2",
        type: "vocabulary",
        question: "Šta znači 'die Leitkultur'?",
        options: ["vodeća kultura", "lagana kultura", "liderska grupa", "vodič za kulturu"],
        correctAnswer: "vodeća kultura",
        explanation: "Leitkultur = vodeća/dominantna kultura (politički termin)."
      },
      {
        id: "c2-4-ex3",
        type: "matching",
        question: "Poveži pojmove identiteta.",
        pairs: [
          { de: "die Identität", sr: "identitet" },
          { de: "die Integration", sr: "integracija" },
          { de: "die Assimilation", sr: "asimilacija" },
          { de: "die Multikulturalität", sr: "multikulturalnost" },
          { de: "die Zugehörigkeit", sr: "pripadnost" }
        ],
        correctAnswer: "matching-check",
        explanation: "Termini vezani za kulturni identitet."
      },
      {
        id: "c2-4-ex4",
        type: "fill-blank",
        question: "Die deutsche ___ hat sich nach dem Krieg stark verändert. (mentalitet)",
        correctAnswer: "Mentalität",
        hint: "Način razmišljanja",
        explanation: "Mentalität = mentalitet (posleratne promene)."
      },
      {
        id: "c2-4-ex5",
        type: "matching",
        question: "Poveži istorijske periode.",
        pairs: [
          { de: "das Wirtschaftswunder", sr: "ekonomsko čudo (1950-1960)" },
          { de: "die Wiedervereinigung", sr: "ujedinjenje (1990)" },
          { de: "die Stunde Null", sr: "nulti čas (1945)" },
          { de: "die Wende", sr: "preokret (1989)" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ključni momenti nemačke istorije."
      },
      {
        id: "c2-4-ex6",
        type: "translation",
        question: "Prevedi: 'Šta znači biti Nemac u 21. veku?'",
        correctAnswer: ["Was bedeutet es, im 21. Jahrhundert Deutscher zu sein", "Was heißt es, im 21. Jahrhundert deutsch zu sein"],
        explanation: "Pitanje identiteta u savremenom kontekstu."
      },
      {
        id: "c2-4-ex7",
        type: "multiple-choice",
        question: "Der Begriff 'Heimat' ist im Deutschen ___.",
        options: ["emotional aufgeladen", "neutral", "negativ", "veraltet"],
        correctAnswer: "emotional aufgeladen",
        explanation: "Heimat = emotivno nabijen termin (zavičaj, domovina)."
      },
      {
        id: "c2-4-ex8",
        type: "matching",
        question: "Poveži nemačke vrednosti.",
        pairs: [
          { de: "Pünktlichkeit", sr: "tačnost" },
          { de: "Ordnung", sr: "red" },
          { de: "Gründlichkeit", sr: "temeljitost" },
          { de: "Fleiß", sr: "marljivost" },
          { de: "Effizienz", sr: "efikasnost" }
        ],
        correctAnswer: "matching-check",
        explanation: "Stereotipne 'nemačke vrline'."
      },
      {
        id: "c2-4-ex9",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Die Frage nach der deutschen Identität ist komplex, denn sie umfasst die Auseinandersetzung mit der Vergangenheit und die Integration verschiedener Kulturen.",
        options: ["Pitanje nemačkog identiteta je kompleksno, jer obuhvata suočavanje s prošlošću i integraciju različitih kultura.", "Nemački identitet je jednostavan.", "Prošlost nije važna.", "Kulture se ne mešaju."],
        correctAnswer: "Pitanje nemačkog identiteta je kompleksno, jer obuhvata suočavanje s prošlošću i integraciju različitih kultura.",
        explanation: "Auseinandersetzung = suočavanje, Vergangenheit = prošlost."
      },
      {
        id: "c2-4-ex10",
        type: "fill-blank",
        question: "Die ___ mit der NS-Zeit ist ein wichtiger Teil der deutschen Geschichte. (suočavanje)",
        correctAnswer: "Aufarbeitung",
        hint: "Obrada, suočavanje",
        explanation: "Aufarbeitung der Vergangenheit = suočavanje s prošlošću."
      }
    ]
  }
]

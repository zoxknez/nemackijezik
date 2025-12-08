import { Lesson } from '../types'

export const a1Lessons: Lesson[] = [
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
      // Learning Phase
      {
        id: "a1-1-learn-1",
        type: "learn-card",
        question: "Pozdravi",
        questionDe: "Hallo!",
        explanation: "U Nemačkoj se često koristi 'Hallo' kao neformalan pozdrav, slično kao 'Zdravo' kod nas. Za formalne situacije koristimo 'Guten Tag'.",
        correctAnswer: "continue",
        audioText: "Hallo",
        color: "yellow"
      },
      {
        id: "a1-1-learn-2",
        type: "learn-card",
        question: "Predstavljanje",
        questionDe: "Ich bin...",
        explanation: "Kada želiš da kažeš ko si, koristiš 'Ich bin' (Ja sam). Na primer: 'Ich bin Marko'.",
        correctAnswer: "continue",
        audioText: "Ich bin Marko",
        color: "blue"
      },
      {
        id: "a1-1-flash-1",
        type: "flashcard",
        question: "Doviđenja",
        questionDe: "Auf Wiedersehen",
        explanation: "Formalan način da se pozdravite na odlasku.",
        correctAnswer: "continue",
        audioText: "Auf Wiedersehen"
      },
      // Practice Phase
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
      // Learning Phase - Brojevi
      {
        id: "a1-2-learn-1",
        type: "learn-card",
        question: "Brojevi 1-10",
        questionDe: "eins, zwei, drei...",
        explanation: "Brojevi u nemačkom su slični engleskim: eins (1), zwei (2), drei (3), vier (4), fünf (5), sechs (6), sieben (7), acht (8), neun (9), zehn (10).",
        correctAnswer: "continue",
        audioText: "eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn",
        color: "blue"
      },
      {
        id: "a1-2-learn-2",
        type: "learn-card",
        question: "Boje",
        questionDe: "Die Farben",
        explanation: "Boje u nemačkom: rot (crveno), blau (plavo), grün (zeleno), gelb (žuto), schwarz (crno), weiß (belo). Boje su pridevi i menjaju se po rodu!",
        correctAnswer: "continue",
        audioText: "rot, blau, grün, gelb, schwarz, weiß",
        color: "green"
      },
      {
        id: "a1-2-flash-1",
        type: "flashcard",
        question: "Koliko košta?",
        questionDe: "Wie viel kostet das?",
        explanation: "Ovo je ključna fraza za kupovinu. Das kostet... Euro.",
        correctAnswer: "continue",
        audioText: "Wie viel kostet das?"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-3-learn-1",
        type: "learn-card",
        question: "Porodica - die Familie",
        questionDe: "die Familie",
        explanation: "U nemačkom, članovi porodice imaju različite rodove. Vater (otac) je muški rod (der), Mutter (majka) je ženski rod (die). Rod imenice je VEOMA važan!",
        correctAnswer: "continue",
        audioText: "die Familie",
        color: "red"
      },
      {
        id: "a1-3-learn-2",
        type: "learn-card",
        question: "Rodovi imenica - der/die/das",
        questionDe: "der Vater, die Mutter, das Kind",
        explanation: "🔵 DER = muški rod (otac, brat, deka)\n🔴 DIE = ženski rod (majka, sestra, baka)\n🟢 DAS = srednji rod (dete). Boje ti pomažu da zapamtiš!",
        correctAnswer: "continue",
        audioText: "der Vater, die Mutter, das Kind",
        color: "yellow"
      },
      {
        id: "a1-3-flash-1",
        type: "flashcard",
        question: "moj/moja/moje",
        questionDe: "mein / meine / mein",
        explanation: "Prisvojne zamenice se menjaju po rodu: mein Vater (moj otac), meine Mutter (moja majka), mein Kind (moje dete).",
        correctAnswer: "continue",
        audioText: "mein, meine, mein"
      },
      // Practice Phase
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
      // Gender Game - Interactive color game
      {
        id: "a1-3-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Vater' (otac)?",
        questionDe: "Vater",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Vater = muški rod. Zapamti: 🔵 DER = muški rod!"
      },
      {
        id: "a1-3-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Mutter' (majka)?",
        questionDe: "Mutter",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Mutter = ženski rod. Zapamti: 🔴 DIE = ženski rod!"
      },
      {
        id: "a1-3-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Kind' (dete)?",
        questionDe: "Kind",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Kind = srednji rod. Zapamti: 🟢 DAS = srednji rod!"
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
      // Learning Phase
      {
        id: "a1-4-learn-1",
        type: "learn-card",
        question: "Obroci",
        questionDe: "Die Mahlzeiten",
        explanation: "U Nemačkoj su tri glavna obroka: das Frühstück (doručak), das Mittagessen (ručak) i das Abendessen (večera). Nemci obično jedu topli obrok za ručak.",
        correctAnswer: "continue",
        audioText: "das Frühstück, das Mittagessen, das Abendessen",
        color: "green"
      },
      {
        id: "a1-4-learn-2",
        type: "learn-card",
        question: "Naručivanje u restoranu",
        questionDe: "Ich möchte...",
        explanation: "Kada naručuješ, koristi 'Ich möchte...' (Ja bih...). To je ljubazniji način od 'Ich will' (Hoću). Na kraju dodaj 'bitte' (molim).",
        correctAnswer: "continue",
        audioText: "Ich möchte eine Pizza, bitte.",
        color: "blue"
      },
      {
        id: "a1-4-flash-1",
        type: "flashcard",
        question: "Prijatno!",
        questionDe: "Guten Appetit!",
        explanation: "Kažemo pre jela, kao naše 'Prijatno'. Odgovor je 'Danke, gleichfalls!' (Hvala, takođe!).",
        correctAnswer: "continue",
        audioText: "Guten Appetit! Danke, gleichfalls!"
      },
      // Gender Game - Hrana
      {
        id: "a1-4-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Brot' (hleb)?",
        questionDe: "Brot",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Brot = srednji rod. 🟢"
      },
      {
        id: "a1-4-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Milch' (mleko)?",
        questionDe: "Milch",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Milch = ženski rod. 🔴"
      },
      {
        id: "a1-4-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Apfel' (jabuka)?",
        questionDe: "Apfel",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Apfel = muški rod. 🔵"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-5-learn-1",
        type: "learn-card",
        question: "Dani u nedelji",
        questionDe: "Die Wochentage",
        explanation: "Svi dani se završavaju na '-tag' (dan): Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag. Nedelja počinje ponedeljkom!",
        correctAnswer: "continue",
        audioText: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag",
        color: "yellow"
      },
      {
        id: "a1-5-learn-2",
        type: "learn-card",
        question: "Razdvojivi glagoli",
        questionDe: "aufstehen, fernsehen, einkaufen",
        explanation: "Neki glagoli imaju prefiks koji se odvaja i ide na KRAJ rečenice: Ich stehe um 7 Uhr AUF. Ich sehe gern FERN. Prefiks nosi glavni naglasak!",
        correctAnswer: "continue",
        audioText: "Ich stehe auf. Ich sehe fern.",
        color: "blue"
      },
      {
        id: "a1-5-flash-1",
        type: "flashcard",
        question: "Koliko je sati?",
        questionDe: "Wie spät ist es?",
        explanation: "Odgovor: Es ist... Uhr. Pazi: halb drei = 2:30 (pola DO tri!), Viertel vor = četvrt DO, Viertel nach = četvrt POSLE.",
        correctAnswer: "continue",
        audioText: "Wie spät ist es? Es ist halb drei."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-6-learn-1",
        type: "learn-card",
        question: "Prostorije u stanu",
        questionDe: "Die Zimmer",
        explanation: "Prostorije: die Küche (kuhinja), das Bad (kupatilo), das Schlafzimmer (spavaća soba), das Wohnzimmer (dnevna soba), der Flur (hodnik). Kompozitne imenice: Schlaf+zimmer = spavati+soba!",
        correctAnswer: "continue",
        audioText: "die Küche, das Bad, das Schlafzimmer, das Wohnzimmer",
        color: "green"
      },
      {
        id: "a1-6-learn-2",
        type: "learn-card",
        question: "Opisivanje stana",
        questionDe: "Die Wohnung ist groß.",
        explanation: "Pridevi za opis: groß (veliko), klein (malo), schön (lepo), hell (svetlo), dunkel (tamno), alt (staro), neu (novo), teuer (skupo), billig (jeftino).",
        correctAnswer: "continue",
        audioText: "Die Wohnung ist groß und schön.",
        color: "blue"
      },
      {
        id: "a1-6-flash-1",
        type: "flashcard",
        question: "Kirija",
        questionDe: "die Miete",
        explanation: "Die Miete = kirija. 'Wie hoch ist die Miete?' = Kolika je kirija? U Nemačkoj se plaća 'Kaltmiete' (bez režija) ili 'Warmmiete' (sa režijama).",
        correctAnswer: "continue",
        audioText: "Wie hoch ist die Miete?"
      },
      // Gender Game - Nameštaj
      {
        id: "a1-6-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Tisch' (sto)?",
        questionDe: "Tisch",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Tisch = muški rod. 🔵"
      },
      {
        id: "a1-6-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Lampe' (lampa)?",
        questionDe: "Lampe",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Lampe = ženski rod. 🔴"
      },
      {
        id: "a1-6-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Bett' (krevet)?",
        questionDe: "Bett",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Bett = srednji rod. 🟢"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-7-learn-1",
        type: "learn-card",
        question: "Modalni glagol können",
        questionDe: "Ich kann schwimmen.",
        explanation: "Können = moći/znati. Modalni glagol + infinitiv na kraju: Ich KANN gut schwimmen. Du KANNST Gitarre spielen. Er KANN nicht kochen.",
        correctAnswer: "continue",
        audioText: "Ich kann schwimmen. Kannst du tanzen?",
        color: "blue"
      },
      {
        id: "a1-7-learn-2",
        type: "learn-card",
        question: "Hobiji i slobodno vreme",
        questionDe: "In meiner Freizeit...",
        explanation: "Za hobije koristimo: Ich spiele gern... (igram rado), Ich höre gern... (slušam rado), Ich lese gern... (čitam rado). 'Gern' znači 'rado/sa zadovoljstvom'.",
        correctAnswer: "continue",
        audioText: "In meiner Freizeit spiele ich gern Fußball.",
        color: "green"
      },
      {
        id: "a1-7-flash-1",
        type: "flashcard",
        question: "Am Wochenende",
        questionDe: "Vikendom",
        explanation: "Am Wochenende = vikendom. 'Was machst du am Wochenende?' = Šta radiš vikendom? Samstag = subota, Sonntag = nedelja.",
        correctAnswer: "continue",
        audioText: "Was machst du am Wochenende?"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-8-learn-1",
        type: "learn-card",
        question: "Odeća",
        questionDe: "Die Kleidung",
        explanation: "Osnovni odevni predmeti: die Hose (pantalone), das Hemd (košulja), das T-Shirt, die Jacke (jakna), das Kleid (haljina), der Schuh (cipela), der Pullover (džemper).",
        correctAnswer: "continue",
        audioText: "die Hose, das Hemd, die Jacke, der Schuh",
        color: "red"
      },
      {
        id: "a1-8-learn-2",
        type: "learn-card",
        question: "Glagol tragen",
        questionDe: "Ich trage eine Jacke.",
        explanation: "Tragen = nositi. Ich trage, du trägst, er/sie trägt. Pazi na umlaut (ä) u 2. i 3. licu! 'Ich trage heute einen blauen Pullover.'",
        correctAnswer: "continue",
        audioText: "Ich trage eine Jacke. Er trägt ein Hemd.",
        color: "blue"
      },
      {
        id: "a1-8-flash-1",
        type: "flashcard",
        question: "Akuzativ sa odećom",
        questionDe: "Ich trage einen Rock.",
        explanation: "Posle glagola 'tragen' ide AKUZATIV: einen (m), eine (f), ein (n). Der Rock → Ich trage einEN Rock. Die Hose → Ich trage einE Hose.",
        correctAnswer: "continue",
        audioText: "Ich trage einen Rock."
      },
      // Gender Game - Odeća
      {
        id: "a1-8-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Hose' (pantalone)?",
        questionDe: "Hose",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Hose = ženski rod. 🔴"
      },
      {
        id: "a1-8-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Hemd' (košulja)?",
        questionDe: "Hemd",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Hemd = srednji rod. 🟢"
      },
      {
        id: "a1-8-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Schuh' (cipela)?",
        questionDe: "Schuh",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Schuh = muški rod. 🔵"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-9-learn-1",
        type: "learn-card",
        question: "Godišnja doba",
        questionDe: "Die Jahreszeiten",
        explanation: "Četiri godišnja doba su svi MUŠKOG roda (der): der Frühling (proleće), der Sommer (leto), der Herbst (jesen), der Winter (zima). Koristimo 'im': im Sommer, im Winter...",
        correctAnswer: "continue",
        audioText: "der Frühling, der Sommer, der Herbst, der Winter",
        color: "green"
      },
      {
        id: "a1-9-learn-2",
        type: "learn-card",
        question: "Vremenske prilike",
        questionDe: "Wie ist das Wetter?",
        explanation: "Vremenske prilike koristimo sa bezličnim 'es': Es regnet (kiši), Es schneit (pada sneg), Es ist sonnig (sunčano je), Es ist bewölkt (oblačno je).",
        correctAnswer: "continue",
        audioText: "Es regnet. Es schneit. Es ist sonnig.",
        color: "blue"
      },
      {
        id: "a1-9-flash-1",
        type: "flashcard",
        question: "Temperatura",
        questionDe: "Wie viel Grad haben wir?",
        explanation: "Za pitanje o temperaturi: 'Wie viel Grad haben wir heute?' (Koliko stepeni imamo danas?). Odgovor: 'Es sind 25 Grad.' ili samo '25 Grad.'",
        correctAnswer: "continue",
        audioText: "Wie viel Grad haben wir? Es sind 20 Grad."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-10-learn-1",
        type: "learn-card",
        question: "Delovi tela",
        questionDe: "Der Körper",
        explanation: "Glavni delovi tela: der Kopf (glava), der Arm (ruka), das Bein (noga), der Bauch (stomak), die Hand (šaka), der Fuß (stopalo), der Rücken (leđa).",
        correctAnswer: "continue",
        audioText: "der Kopf, der Arm, das Bein, der Bauch",
        color: "blue"
      },
      {
        id: "a1-10-learn-2",
        type: "learn-card",
        question: "Boli me...",
        questionDe: "...tut weh / ...tun weh",
        explanation: "Za bol koristimo 'tut weh' (jednina) ili 'tun weh' (množina): Mein Kopf TUT weh. Meine Beine TUN weh. Ili: Ich habe Kopfschmerzen (glavobolja).",
        correctAnswer: "continue",
        audioText: "Mein Kopf tut weh. Ich habe Kopfschmerzen.",
        color: "red"
      },
      {
        id: "a1-10-flash-1",
        type: "flashcard",
        question: "Kod lekara",
        questionDe: "Beim Arzt",
        explanation: "Korisne fraze: 'Ich brauche einen Termin.' (Trebam termin), 'Ich habe Fieber.' (Imam temperaturu), 'Ich bin krank.' (Bolestan sam).",
        correctAnswer: "continue",
        audioText: "Ich brauche einen Termin beim Arzt."
      },
      // Gender Game - Delovi tela
      {
        id: "a1-10-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Kopf' (glava)?",
        questionDe: "Kopf",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Kopf = muški rod. 🔵"
      },
      {
        id: "a1-10-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Hand' (šaka)?",
        questionDe: "Hand",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Hand = ženski rod. 🔴"
      },
      {
        id: "a1-10-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Bein' (noga)?",
        questionDe: "Bein",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Bein = srednji rod. 🟢"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-11-learn-1",
        type: "learn-card",
        question: "Zgrade u gradu",
        questionDe: "Gebäude in der Stadt",
        explanation: "Važne zgrade: das Rathaus (gradska kuća), die Kirche (crkva), das Krankenhaus (bolnica), die Schule (škola), die Bibliothek (biblioteka), der Bahnhof (stanica).",
        correctAnswer: "continue",
        audioText: "das Rathaus, die Kirche, das Krankenhaus, der Bahnhof",
        color: "green"
      },
      {
        id: "a1-11-learn-2",
        type: "learn-card",
        question: "Davanje uputstava",
        questionDe: "Wie komme ich zum...?",
        explanation: "Pravci: geradeaus (pravo), links (levo), rechts (desno), an der Ecke (na uglu), gegenüber (preko puta). 'Gehen Sie geradeaus, dann links.'",
        correctAnswer: "continue",
        audioText: "Gehen Sie geradeaus, dann links.",
        color: "blue"
      },
      {
        id: "a1-11-flash-1",
        type: "flashcard",
        question: "Prevozna sredstva",
        questionDe: "Verkehrsmittel",
        explanation: "der Bus, die Straßenbahn (tramvaj), die U-Bahn (metro), der Zug (voz), das Fahrrad (bicikl), das Auto. 'Ich fahre mit dem Bus.' (Idem autobusom).",
        correctAnswer: "continue",
        audioText: "Ich fahre mit dem Bus."
      },
      // Gender Game - Grad
      {
        id: "a1-11-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Bahnhof' (stanica)?",
        questionDe: "Bahnhof",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Bahnhof = muški rod. 🔵"
      },
      {
        id: "a1-11-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Kirche' (crkva)?",
        questionDe: "Kirche",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Kirche = ženski rod. 🔴"
      },
      {
        id: "a1-11-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Rathaus' (gradska kuća)?",
        questionDe: "Rathaus",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Rathaus = srednji rod. 🟢"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a1-12-learn-1",
        type: "learn-card",
        question: "Praznici",
        questionDe: "Die Feste",
        explanation: "Glavni praznici: Weihnachten (Božić - 25/26.12.), Ostern (Uskrs), Silvester (Doček Nove godine - 31.12.), Neujahr (Nova godina - 1.1.).",
        correctAnswer: "continue",
        audioText: "Weihnachten, Ostern, Silvester, Neujahr",
        color: "red"
      },
      {
        id: "a1-12-learn-2",
        type: "learn-card",
        question: "Čestitanje",
        questionDe: "Herzlichen Glückwunsch!",
        explanation: "Čestitke: 'Herzlichen Glückwunsch zum Geburtstag!' (Srećan rođendan!), 'Frohe Weihnachten!' (Srećan Božić!), 'Frohes neues Jahr!' (Srećna Nova godina!)",
        correctAnswer: "continue",
        audioText: "Herzlichen Glückwunsch zum Geburtstag!",
        color: "yellow"
      },
      {
        id: "a1-12-flash-1",
        type: "flashcard",
        question: "Redni brojevi",
        questionDe: "erste, zweite, dritte...",
        explanation: "Redni brojevi za datume: der erste (prvi), der zweite (drugi), der dritte (treći), der vierte (četvrti)... 'Am ersten Januar' = prvog januara.",
        correctAnswer: "continue",
        audioText: "der erste, der zweite, der dritte, der vierte"
      },
      // Practice Phase
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
]
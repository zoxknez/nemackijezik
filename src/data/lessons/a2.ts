import { Lesson } from '../types'

export const a2Lessons: Lesson[] = [
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
      // Learning Phase
      {
        id: "a2-1-learn-1",
        type: "learn-card",
        question: "Perfekt - prošlo vreme",
        questionDe: "Ich habe gemacht / Ich bin gegangen",
        explanation: "Perfekt se gradi od POMOĆNOG GLAGOLA (haben/sein) + PARTICIP II. Pravilni glagoli: ge- + osnova + -t (gemacht, gespielt). Nepravilni menjaju osnovu (gegangen, gesehen).",
        correctAnswer: "continue",
        audioText: "Ich habe das gemacht. Ich bin nach Hause gegangen.",
        color: "blue"
      },
      {
        id: "a2-1-learn-2",
        type: "learn-card",
        question: "Haben ili Sein?",
        questionDe: "haben oder sein?",
        explanation: "SEIN koristimo za: 1) Glagole KRETANJA (gehen, fahren, fliegen) 2) Glagole PROMENE STANJA (aufstehen, einschlafen) 3) sein i bleiben. Sve ostalo ide sa HABEN!",
        correctAnswer: "continue",
        audioText: "Ich bin gefahren. Ich habe gegessen.",
        color: "green"
      },
      {
        id: "a2-1-flash-1",
        type: "flashcard",
        question: "Nepravilni glagoli",
        questionDe: "gehen → gegangen, essen → gegessen",
        explanation: "Važni nepravilni participi: gehen→gegangen, fahren→gefahren, sehen→gesehen, essen→gegessen, trinken→getrunken, schreiben→geschrieben, lesen→gelesen.",
        correctAnswer: "continue",
        audioText: "gegangen, gefahren, gesehen, gegessen, getrunken"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-2-learn-1",
        type: "learn-card",
        question: "Nemački školski sistem",
        questionDe: "Das deutsche Schulsystem",
        explanation: "U Nemačkoj posle osnovne škole (Grundschule) ima više tipova: Hauptschule (do 9. razreda), Realschule (do 10.), Gymnasium (do 12/13. sa Abitur/maturom). Ocene: 1 (sehr gut) do 6 (ungenügend).",
        correctAnswer: "continue",
        audioText: "Grundschule, Gymnasium, Abitur",
        color: "blue"
      },
      {
        id: "a2-2-learn-2",
        type: "learn-card",
        question: "Modalni glagoli u preteritu",
        questionDe: "wollte, konnte, musste, durfte",
        explanation: "Preterit modalnih glagola: wollen→wollte (hteo sam), können→konnte (mogao sam), müssen→musste (morao sam), dürfen→durfte (smeo sam). Koristi se u priči o prošlosti.",
        correctAnswer: "continue",
        audioText: "Ich wollte Arzt werden. Ich konnte nicht kommen.",
        color: "green"
      },
      {
        id: "a2-2-flash-1",
        type: "flashcard",
        question: "Školski predmeti",
        questionDe: "Die Schulfächer",
        explanation: "Predmeti: Mathe (matematika), Deutsch (nemački), Englisch (engleski), Geschichte (istorija), Erdkunde/Geografie (geografija), Biologie, Physik, Chemie, Kunst (umetnost), Musik, Sport.",
        correctAnswer: "continue",
        audioText: "Mathe, Deutsch, Englisch, Geschichte, Kunst, Sport"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-3-learn-1",
        type: "learn-card",
        question: "Zanimanja - muški i ženski rod",
        questionDe: "der Arzt / die Ärztin",
        explanation: "U nemačkom zanimanja imaju muški i ženski oblik. Ženski se obično gradi nastavkom -in: Lehrer/Lehrerin, Arzt/Ärztin, Koch/Köchin. Neki menjaju umlaut!",
        correctAnswer: "continue",
        audioText: "der Arzt, die Ärztin, der Lehrer, die Lehrerin",
        color: "blue"
      },
      {
        id: "a2-3-learn-2",
        type: "learn-card",
        question: "Pričanje o poslu",
        questionDe: "Ich arbeite als...",
        explanation: "Za zanimanje koristimo 'als': Ich arbeite ALS Kellner. BEZ člana! Pitanje: 'Was sind Sie von Beruf?' (Šta ste po zanimanju?)",
        correctAnswer: "continue",
        audioText: "Ich arbeite als Programmierer. Was sind Sie von Beruf?",
        color: "green"
      },
      {
        id: "a2-3-flash-1",
        type: "flashcard",
        question: "Radno vreme",
        questionDe: "die Arbeitszeit",
        explanation: "Vollzeit = puno radno vreme, Teilzeit = pola radnog vremena. 'Meine Arbeitszeit ist von 9 bis 17 Uhr.' Von...bis = od...do.",
        correctAnswer: "continue",
        audioText: "Ich arbeite Vollzeit, von 9 bis 17 Uhr."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-4-learn-1",
        type: "learn-card",
        question: "Wechselpräpositionen",
        questionDe: "in, an, auf, über, unter, vor, hinter, neben, zwischen",
        explanation: "9 predloga koji mogu ići sa AKUZATIVOM ili DATIVOM! Pitanje WOHIN (kuda) = Akuzativ (kretanje). Pitanje WO (gde) = Dativ (lokacija).",
        correctAnswer: "continue",
        audioText: "Ich stelle das Buch auf den Tisch. Das Buch liegt auf dem Tisch.",
        color: "blue"
      },
      {
        id: "a2-4-learn-2",
        type: "learn-card",
        question: "Oglasi za stan",
        questionDe: "Wohnungsanzeigen",
        explanation: "Skraćenice: ZKB = Zimmer, Küche, Bad. NK = Nebenkosten (režije). KM = Kaltmiete (bez režija), WM = Warmmiete (sa režijama). EG = Erdgeschoss (prizemlje).",
        correctAnswer: "continue",
        audioText: "2-Zimmer-Wohnung, möbliert, 500 Euro Warmmiete",
        color: "green"
      },
      {
        id: "a2-4-flash-1",
        type: "flashcard",
        question: "Stellen, legen, setzen vs. stehen, liegen, sitzen",
        questionDe: "Wohin? → Akuzativ / Wo? → Dativ",
        explanation: "STELLEN/LEGEN/SETZEN = staviti (kretanje, Akuzativ). STEHEN/LIEGEN/SITZEN = biti/nalaziti se (lokacija, Dativ). 'Ich stelle die Vase auf DEN Tisch.' vs 'Die Vase steht auf DEM Tisch.'",
        correctAnswer: "continue",
        audioText: "Ich stelle die Vase auf den Tisch. Die Vase steht auf dem Tisch."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-5-learn-1",
        type: "learn-card",
        question: "Na aerodromu",
        questionDe: "Am Flughafen",
        explanation: "Važni pojmovi: der Flughafen (aerodrom), das Gate (izlaz), der Flug (let), das Gepäck (prtljag), einchecken (prijaviti se), das Boarding (ukrcavanje).",
        correctAnswer: "continue",
        audioText: "der Flughafen, der Flug, das Gepäck, einchecken",
        color: "blue"
      },
      {
        id: "a2-5-learn-2",
        type: "learn-card",
        question: "U hotelu",
        questionDe: "Im Hotel",
        explanation: "Korisne fraze: 'Ich habe eine Reservierung.' (Imam rezervaciju), 'Ein Einzelzimmer/Doppelzimmer, bitte.' (Jednokrevetnu/Dvokrevetnu sobu, molim), 'Mit Frühstück?' (Sa doručkom?)",
        correctAnswer: "continue",
        audioText: "Ich habe eine Reservierung auf den Namen...",
        color: "green"
      },
      {
        id: "a2-5-flash-1",
        type: "flashcard",
        question: "Kupovina karte",
        questionDe: "eine Fahrkarte kaufen",
        explanation: "Na železničkoj stanici: 'Eine Fahrkarte nach Berlin, bitte.' Hin und zurück = povratna. Einfach = jednosmerna. Erste/Zweite Klasse = prva/druga klasa.",
        correctAnswer: "continue",
        audioText: "Eine Fahrkarte nach München, hin und zurück, bitte."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-6-learn-1",
        type: "learn-card",
        question: "Komparativ",
        questionDe: "schneller, größer, besser",
        explanation: "Komparativ se gradi nastavkom -ER: schnell→schneller, groß→größer (umlaut!), gut→BESSER (nepravilan). Posle dolazi 'als': Ich bin schneller ALS du.",
        correctAnswer: "continue",
        audioText: "schneller als, größer als, besser als",
        color: "blue"
      },
      {
        id: "a2-6-learn-2",
        type: "learn-card",
        question: "Superlativ",
        questionDe: "am schnellsten, der/die/das größte",
        explanation: "Superlativ ima 2 oblika: AM + pridev + STEN (am schnellsten) ili DER/DIE/DAS + pridev + STE (der schnellste). Nepravilni: gut→am besten, viel→am meisten.",
        correctAnswer: "continue",
        audioText: "am schnellsten, am größten, am besten",
        color: "green"
      },
      {
        id: "a2-6-flash-1",
        type: "flashcard",
        question: "Izražavanje mišljenja",
        questionDe: "Ich finde, dass...",
        explanation: "Fraze za mišljenje: 'Ich finde, dass...' (Mislim da...), 'Meiner Meinung nach...' (Po mom mišljenju...), 'Ich glaube, dass...' (Verujem da...).",
        correctAnswer: "continue",
        audioText: "Ich finde, dass dieser Film gut ist. Meiner Meinung nach ist er interessant."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-7-learn-1",
        type: "learn-card",
        question: "Lične zamenice u Dativu",
        questionDe: "mir, dir, ihm, ihr, uns, euch, ihnen",
        explanation: "DATIV zamenica: ich→mir, du→dir, er→ihm, sie→ihr, es→ihm, wir→uns, ihr→euch, sie/Sie→ihnen/Ihnen. Glagoli sa dativom: helfen, gefallen, gehören, danken.",
        correctAnswer: "continue",
        audioText: "mir, dir, ihm, ihr, uns, euch, ihnen",
        color: "blue"
      },
      {
        id: "a2-7-learn-2",
        type: "learn-card",
        question: "Glagoli sa Dativom",
        questionDe: "helfen, gefallen, gehören, danken, schenken",
        explanation: "Neki glagoli UVEK traže dativ: Ich helfe DIR. Das gefällt MIR. Das gehört IHM. Ich danke IHNEN. Ich schenke IHR ein Buch (schenken ima i Akuzativ za stvar).",
        correctAnswer: "continue",
        audioText: "Ich helfe dir. Das gefällt mir. Ich danke Ihnen.",
        color: "green"
      },
      {
        id: "a2-7-flash-1",
        type: "flashcard",
        question: "U prodavnici",
        questionDe: "Kann ich Ihnen helfen?",
        explanation: "Korisne fraze: 'Kann ich Ihnen helfen?' (Mogu li vam pomoći?), 'Ich schaue nur.' (Samo gledam), 'Das ist mir zu teuer.' (To mi je preskupo), 'Haben Sie das in Größe M?' (Imate li u veličini M?).",
        correctAnswer: "continue",
        audioText: "Kann ich Ihnen helfen? Ich schaue nur, danke."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-8-learn-1",
        type: "learn-card",
        question: "Veznik 'dass'",
        questionDe: "Ich glaube, dass...",
        explanation: "Veznik 'dass' (da) uvodi zavisnu rečenicu. GLAGOL ide na KRAJ: Ich glaube, DASS er nett IST. Ich weiß, DASS sie einen Hund HAT.",
        correctAnswer: "continue",
        audioText: "Ich glaube, dass er nett ist. Ich weiß, dass sie einen Hund hat.",
        color: "blue"
      },
      {
        id: "a2-8-learn-2",
        type: "learn-card",
        question: "Životinje - Der, Die, Das",
        questionDe: "der Hund, die Katze, das Pferd",
        explanation: "Životinje imaju različite rodove: der Hund (pas), der Vogel (ptica), die Katze (mačka), die Kuh (krava), das Pferd (konj), das Tier (životinja).",
        correctAnswer: "continue",
        audioText: "der Hund, die Katze, das Pferd, der Vogel",
        color: "green"
      },
      {
        id: "a2-8-flash-1",
        type: "flashcard",
        question: "Priroda",
        questionDe: "Die Natur",
        explanation: "Elementi prirode: der Wald (šuma), der Berg (planina), das Meer (more), der See (jezero), der Fluss (reka), die Wiese (livada). Strane sveta: Norden, Süden, Osten, Westen.",
        correctAnswer: "continue",
        audioText: "der Wald, der Berg, das Meer, der See"
      },
      // Gender Game - Životinje
      {
        id: "a2-8-gender-1",
        type: "gender-game",
        question: "Koji je rod reči 'Hund' (pas)?",
        questionDe: "Hund",
        options: ["der", "die", "das"],
        correctAnswer: "der",
        gender: "der",
        explanation: "Der Hund = muški rod. 🔵"
      },
      {
        id: "a2-8-gender-2",
        type: "gender-game",
        question: "Koji je rod reči 'Katze' (mačka)?",
        questionDe: "Katze",
        options: ["der", "die", "das"],
        correctAnswer: "die",
        gender: "die",
        explanation: "Die Katze = ženski rod. 🔴"
      },
      {
        id: "a2-8-gender-3",
        type: "gender-game",
        question: "Koji je rod reči 'Pferd' (konj)?",
        questionDe: "Pferd",
        options: ["der", "die", "das"],
        correctAnswer: "das",
        gender: "das",
        explanation: "Das Pferd = srednji rod. 🟢"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-9-learn-1",
        type: "learn-card",
        question: "Veznik 'weil'",
        questionDe: "Ich bin glücklich, weil...",
        explanation: "'Weil' (jer/zato što) uvodi RAZLOG. Kao i kod 'dass', glagol ide na KRAJ: Ich bin müde, WEIL ich nicht geschlafen HABE. Er ist traurig, WEIL sie weg IST.",
        correctAnswer: "continue",
        audioText: "Ich bin glücklich, weil ich Urlaub habe.",
        color: "blue"
      },
      {
        id: "a2-9-learn-2",
        type: "learn-card",
        question: "Emocije",
        questionDe: "Wie fühlst du dich?",
        explanation: "Emocije: glücklich (srećan), traurig (tužan), wütend/sauer (ljut), nervös (nervozan), überrascht (iznenađen), entspannt (opušten), gestresst (stresiran).",
        correctAnswer: "continue",
        audioText: "glücklich, traurig, wütend, nervös, entspannt",
        color: "red"
      },
      {
        id: "a2-9-flash-1",
        type: "flashcard",
        question: "Saveti sa 'sollten'",
        questionDe: "Du solltest...",
        explanation: "'Sollten' (trebalo bi) za savete: Du solltest mehr schlafen. (Trebalo bi više da spavaš). Du solltest Sport machen. Sie sollten zum Arzt gehen.",
        correctAnswer: "continue",
        audioText: "Du solltest mehr schlafen. Du solltest Sport machen."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "a2-10-learn-1",
        type: "learn-card",
        question: "Veznik 'wenn'",
        questionDe: "Wenn..., dann...",
        explanation: "'Wenn' ima 2 značenja: AKO (uslov) ili KADA (vreme). Glagol ide na KRAJ wenn-rečenice: WENN du Hilfe BRAUCHST, ruf mich AN. WENN es regnet, bleibe ich zu Hause.",
        correctAnswer: "continue",
        audioText: "Wenn du Hilfe brauchst, ruf mich an. Wenn es regnet, bleibe ich zu Hause.",
        color: "blue"
      },
      {
        id: "a2-10-learn-2",
        type: "learn-card",
        question: "Kućni aparati",
        questionDe: "Haushaltsgeräte",
        explanation: "Aparati: der Kühlschrank (frižider), die Waschmaschine (veš mašina), der Staubsauger (usisivač), die Mikrowelle (mikrotalasna), die Spülmaschine (mašina za sudove).",
        correctAnswer: "continue",
        audioText: "der Kühlschrank, die Waschmaschine, der Staubsauger",
        color: "green"
      },
      {
        id: "a2-10-flash-1",
        type: "flashcard",
        question: "Uključiti/Isključiti",
        questionDe: "einschalten / ausschalten",
        explanation: "Razdvojivi glagoli: EINschalten (uključiti), AUSschalten (isključiti), ANmachen/AUSmachen (isto značenje). Drücken = pritisnuti (dugme).",
        correctAnswer: "continue",
        audioText: "Schalte den Fernseher ein! Schalte das Licht aus!"
      },
      // Practice Phase
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
  {
    id: "a2-11",
    title: "U restoranu",
    titleDe: "Im Restaurant",
    description: "Naručivanje hrane, platiti, tip, rezervacija.",
    level: "A2",
    unit: 3,
    order: 11,
    duration: 35,
    xpReward: 85,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Meni", "Ich hätte gern", "Trinkgeld", "Platiti"],
    exercises: [
      // Learning Phase
      {
        id: "a2-11-learn-1",
        type: "learn-card",
        question: "U restoranu",
        questionDe: "die Speisekarte, bestellen, zahlen",
        explanation: "Die Speisekarte = jelovnik, bestellen = naručiti, zahlen/bezahlen = platiti, das Trinkgeld = napojnica, die Rechnung = račun. Ich hätte gern... = Imao bih rado...",
        correctAnswer: "continue",
        audioText: "die Speisekarte, bestellen, zahlen, das Trinkgeld",
        color: "orange"
      },
      {
        id: "a2-11-learn-2",
        type: "learn-card",
        question: "Naručivanje hrane",
        questionDe: "Ich hätte gern... / Ich nehme...",
        explanation: "Za naručivanje: 'Ich hätte gern...' (Imao bih rado...) ili 'Ich nehme...' (Uzeću...). 'Ich möchte bestellen' = želeo bih da naručim. Guter Appetit! = Prijatno!",
        correctAnswer: "continue",
        audioText: "Ich hätte gern ein Schnitzel. Ich nehme die Suppe.",
        color: "green"
      },
      {
        id: "a2-11-flash-1",
        type: "flashcard",
        question: "Platiti račun",
        questionDe: "Zahlen bitte! / Die Rechnung bitte!",
        explanation: "Kad želiš račun: 'Die Rechnung, bitte!' ili 'Zahlen, bitte!'. Zusammen oder getrennt? = Zajedno ili odvojeno? Das macht... Euro = To čini... evra.",
        correctAnswer: "continue",
        audioText: "Die Rechnung, bitte! Zusammen oder getrennt?"
      },
      // Practice Phase
      {
        id: "a2-11-ex1",
        type: "matching",
        question: "Poveži fraze iz restorana.",
        pairs: [
          { de: "die Speisekarte", sr: "jelovnik" },
          { de: "die Rechnung", sr: "račun" },
          { de: "das Trinkgeld", sr: "napojnica" },
          { de: "bestellen", sr: "naručiti" },
          { de: "zahlen", sr: "platiti" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnove reči za restoran."
      },
      {
        id: "a2-11-ex2",
        type: "multiple-choice",
        question: "Kako naručiš hranu?",
        questionDe: "Wie bestellst du Essen?",
        options: ["Ich hätte gern ein Schnitzel", "Ich bin ein Schnitzel", "Ich esse kein Schnitzel", "Wo ist das Schnitzel"],
        correctAnswer: "Ich hätte gern ein Schnitzel",
        explanation: "'Ich hätte gern...' je učtiv način za naručivanje."
      },
      {
        id: "a2-11-ex3",
        type: "fill-blank",
        question: "Ich ___ die Rechnung, bitte. (hteti)",
        correctAnswer: "hätte",
        hint: "Ich hätte gern...",
        explanation: "Ich hätte die Rechnung = Hteo/la bih račun."
      },
      {
        id: "a2-11-ex4",
        type: "translation",
        question: "Prevedi: 'Dobar tek!'",
        correctAnswer: ["Guten Appetit", "Guten Appetit!"],
        explanation: "Guten Appetit! = Prijatno! / Dobar tek!"
      },
      {
        id: "a2-11-ex5",
        type: "matching",
        question: "Poveži jela.",
        pairs: [
          { de: "die Suppe", sr: "supa/čorba" },
          { de: "das Schnitzel", sr: "šnicla" },
          { de: "die Pommes (frites)", sr: "pomfrit" },
          { de: "der Salat", sr: "salata" },
          { de: "das Dessert", sr: "desert" }
        ],
        correctAnswer: "matching-check",
        explanation: "Popularna jela u nemačkim restoranima."
      },
      {
        id: "a2-11-ex6",
        type: "multiple-choice",
        question: "Was möchten Sie trinken?",
        options: ["Ein Glas Wasser, bitte", "Ich esse Wasser", "Wasser ist hier", "Nein, danke"],
        correctAnswer: "Ein Glas Wasser, bitte",
        explanation: "Ein Glas Wasser = čaša vode."
      },
      {
        id: "a2-11-ex7",
        type: "fill-blank",
        question: "Zusammen oder ___? (odvojeno)",
        correctAnswer: "getrennt",
        explanation: "Zusammen oder getrennt? = Zajedno ili odvojeno (kada plaćate)?"
      },
      {
        id: "a2-11-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Tag! Haben Sie reserviert? Für zwei Personen? Folgen Sie mir bitte.",
        options: ["Dobar dan! Imate li rezervaciju? Za dve osobe? Pratite me molim.", "Dobar dan! Imate li meni? Za tri osobe? Ovde molim.", "Dobro veče! Šta želite? Supa ili salata?", "Prijatno! Evo račun."],
        correctAnswer: "Dobar dan! Imate li rezervaciju? Za dve osobe? Pratite me molim.",
        explanation: "Reservieren = rezervisati. Für zwei Personen = za dve osobe."
      },
      {
        id: "a2-11-ex9",
        type: "translation",
        question: "Prevedi: 'Može li meni, molim?'",
        correctAnswer: ["Die Speisekarte, bitte", "Die Karte, bitte"],
        explanation: "Die Speisekarte/Die Karte = meni/jelovnik."
      },
      {
        id: "a2-11-ex10",
        type: "fill-blank",
        question: "Das macht ___ Euro. (dvadeset tri)",
        correctAnswer: "dreiundzwanzig",
        explanation: "23 = dreiundzwanzig (tri-i-dvadeset)."
      }
    ]
  },
  {
    id: "a2-12",
    title: "Kod lekara",
    titleDe: "Beim Arzt",
    description: "Kako opisati simptome, delovi tela, lekovi.",
    level: "A2",
    unit: 3,
    order: 12,
    duration: 35,
    xpReward: 85,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Simptomi", "Delovi tela", "Mir tut...weh", "Medikamente"],
    exercises: [
      // Learning Phase
      {
        id: "a2-12-learn-1",
        type: "learn-card",
        question: "Kod lekara",
        questionDe: "der Arzt, die Ärztin, der Termin",
        explanation: "Der Arzt = lekar (muški), die Ärztin = lekarka (ženski), der Termin = zakazan termin, die Sprechstunde = ordinacija/vreme za pacijente, das Rezept = recept.",
        correctAnswer: "continue",
        audioText: "der Arzt, die Ärztin, der Termin, das Rezept",
        color: "red"
      },
      {
        id: "a2-12-learn-2",
        type: "learn-card",
        question: "Mir tut...weh",
        questionDe: "Mir tut der Kopf weh. Mir tun die Beine weh.",
        explanation: "Za bol koristimo: Mir tut...weh (jednina) ili Mir tun...weh (množina). Der Kopf = glava → Mir tut der Kopf weh (Boli me glava). Die Beine = noge → Mir tun die Beine weh (Bole me noge).",
        correctAnswer: "continue",
        audioText: "Mir tut der Kopf weh. Mir tun die Beine weh.",
        color: "blue"
      },
      {
        id: "a2-12-flash-1",
        type: "flashcard",
        question: "Simptomi",
        questionDe: "das Fieber, der Husten, die Erkältung",
        explanation: "Das Fieber = temperatura, der Husten = kašalj, die Erkältung = prehlada, der Schnupfen = curenje nosa, die Grippe = grip, die Kopfschmerzen = glavobolja (množina!).",
        correctAnswer: "continue",
        audioText: "das Fieber, der Husten, die Erkältung, die Kopfschmerzen"
      },
      // Practice Phase
      {
        id: "a2-12-ex1",
        type: "matching",
        question: "Poveži delove tela.",
        pairs: [
          { de: "der Kopf", sr: "glava" },
          { de: "der Bauch", sr: "stomak" },
          { de: "der Rücken", sr: "leđa" },
          { de: "das Bein", sr: "noga" },
          { de: "der Arm", sr: "ruka" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni delovi tela."
      },
      {
        id: "a2-12-ex2",
        type: "fill-blank",
        question: "Mir tut der Hals ___. (boleti)",
        correctAnswer: "weh",
        hint: "Weh tun",
        explanation: "Der Hals = grlo. Mir tut der Hals weh = Boli me grlo."
      },
      {
        id: "a2-12-ex3",
        type: "multiple-choice",
        question: "Wie heißt 'temperatura' na nemačkom?",
        options: ["Das Fieber", "Der Husten", "Die Erkältung", "Der Schnupfen"],
        correctAnswer: "Das Fieber",
        explanation: "Das Fieber = temperatura. Ich habe Fieber = Imam temperaturu."
      },
      {
        id: "a2-12-ex4",
        type: "translation",
        question: "Prevedi: 'Bole me noge.'",
        correctAnswer: ["Mir tun die Beine weh", "Mir tun die Beine weh."],
        explanation: "Die Beine (množina) → Mir tun die Beine weh."
      },
      {
        id: "a2-12-ex5",
        type: "matching",
        question: "Poveži simptome.",
        pairs: [
          { de: "der Husten", sr: "kašalj" },
          { de: "der Schnupfen", sr: "curenje nosa" },
          { de: "die Kopfschmerzen", sr: "glavobolja" },
          { de: "die Bauchschmerzen", sr: "bol u stomaku" },
          { de: "die Grippe", sr: "grip" }
        ],
        correctAnswer: "matching-check",
        explanation: "Često čovršni simptomi."
      },
      {
        id: "a2-12-ex6",
        type: "fill-blank",
        question: "Ich habe eine ___. Meine Nase läuft. (prehlada)",
        correctAnswer: "Erkältung",
        explanation: "Die Erkältung = prehlada. Ich bin erkältet = Prehladio/la sam se."
      },
      {
        id: "a2-12-ex7",
        type: "multiple-choice",
        question: "Kako kažeš da imaš temperaturu?",
        options: ["Ich habe Fieber", "Ich bin Fieber", "Mir tut Fieber weh", "Mein Fieber ist"],
        correctAnswer: "Ich habe Fieber",
        explanation: "Ich habe Fieber = Imam temperaturu."
      },
      {
        id: "a2-12-ex8",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Guten Tag, Frau Müller. Was fehlt Ihnen? Mir tut der Rücken weh und ich habe Kopfschmerzen.",
        options: ["Dobar dan, gospođo Miler. Šta vam je? Bole me leđa i imam glavobolju.", "Dobar dan. Kako ste? Dobro sam, hvala.", "Dobro veče. Imam temperaturu i kašalj.", "Zdravo. Trebaš recept?"],
        correctAnswer: "Dobar dan, gospođo Miler. Šta vam je? Bole me leđa i imam glavobolju.",
        explanation: "Was fehlt Ihnen? = Šta vam je? (formalno)"
      },
      {
        id: "a2-12-ex9",
        type: "translation",
        question: "Prevedi: 'Trebam recept.'",
        correctAnswer: ["Ich brauche ein Rezept", "Ich brauche ein Rezept."],
        explanation: "Das Rezept = recept (za lekove)."
      },
      {
        id: "a2-12-ex10",
        type: "fill-blank",
        question: "Nehmen Sie diese ___ dreimal täglich. (lekovi)",
        correctAnswer: "Medikamente",
        hint: "Množina",
        explanation: "Die Medikamente = lekovi. Dreimal täglich = tri puta dnevno."
      }
    ]
  }
]
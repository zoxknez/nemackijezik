import { Lesson } from '../types'

export const b1Lessons: Lesson[] = [
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
      // Learning Phase
      {
        id: "b1-1-learn-1",
        type: "learn-card",
        question: "Recipročni glagoli",
        questionDe: "Wir kennen uns. Sie lieben sich.",
        explanation: "Recipročni glagoli opisuju uzajamnu radnju. Koriste povratnu zamenicu: Wir kennen UNS. Sie lieben SICH. Ihr seht EUCH. Glagoli: sich treffen, sich verstehen, sich streiten.",
        correctAnswer: "continue",
        audioText: "Wir kennen uns. Sie lieben sich. Wir verstehen uns gut.",
        color: "blue"
      },
      {
        id: "b1-1-learn-2",
        type: "learn-card",
        question: "Pridevski nastavci",
        questionDe: "-voll, -los, -ig, -lich, -isch",
        explanation: "Nastavci za građenje prideva: -VOLL (pun): verständnisvoll, -LOS (bez): hoffnungslos, -IG: eifersüchtig, -LICH: freundlich, -ISCH: egoistisch.",
        correctAnswer: "continue",
        audioText: "verständnisvoll, hoffnungslos, eifersüchtig, freundlich, egoistisch",
        color: "green"
      },
      {
        id: "b1-1-flash-1",
        type: "flashcard",
        question: "Odnosi",
        questionDe: "die Beziehung, die Freundschaft, die Ehe",
        explanation: "Vrste odnosa: die Freundschaft (prijateljstvo), die Beziehung (veza), die Ehe (brak), die Nachbarschaft (komšiluk). Glagoli: sich verlieben, sich trennen, sich versöhnen.",
        correctAnswer: "continue",
        audioText: "die Freundschaft, die Beziehung, die Ehe, sich verlieben"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-2-learn-1",
        type: "learn-card",
        question: "Futur I",
        questionDe: "werden + Infinitiv",
        explanation: "Futur I = WERDEN + INFINITIV na kraju: Ich WERDE reisen. Du WIRST studieren. Konjugacija: werde, wirst, wird, werden, werdet, werden.",
        correctAnswer: "continue",
        audioText: "Ich werde nach Deutschland reisen. Er wird Arzt werden.",
        color: "blue"
      },
      {
        id: "b1-2-learn-2",
        type: "learn-card",
        question: "Izražavanje nade i pretpostavke",
        questionDe: "hoffentlich, wahrscheinlich, vielleicht",
        explanation: "Prilozi za verovatnoću: hoffentlich (nadamo se), wahrscheinlich (verovatno), vielleicht (možda), sicher (sigurno), bestimmt (definitivno).",
        correctAnswer: "continue",
        audioText: "Ich werde hoffentlich erfolgreich sein. Er wird wahrscheinlich kommen.",
        color: "green"
      },
      {
        id: "b1-2-flash-1",
        type: "flashcard",
        question: "Životni ciljevi",
        questionDe: "Lebensziele",
        explanation: "Ciljevi: heiraten (oženiti/udati se), Karriere machen (napraviti karijeru), ein Haus bauen (sagraditi kuću), Kinder bekommen (dobiti decu), um die Welt reisen (putovati oko sveta).",
        correctAnswer: "continue",
        audioText: "Ich werde heiraten und Karriere machen."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-4-learn-1",
        type: "learn-card",
        question: "Genitiv - četvrti padež",
        questionDe: "des Mannes, der Frau, des Kindes",
        explanation: "Genitiv odgovara na pitanje ČIJI/WESSEN? Nastavci: DER Mann→DES MannES, DIE Frau→DER Frau, DAS Kind→DES KindES. Prisvojni: meines, deines, seines, ihres, unseres.",
        correctAnswer: "continue",
        audioText: "Das ist das Auto des Vaters. Die Meinung der Ärztin.",
        color: "blue"
      },
      {
        id: "b1-4-learn-2",
        type: "learn-card",
        question: "Predlozi sa Genitivom",
        questionDe: "während, wegen, trotz, statt",
        explanation: "Predlozi koji traže genitiv: WÄHREND (tokom), WEGEN (zbog), TROTZ (uprkos), STATT/ANSTATT (umesto). Während DES Spiels, wegen DER Arbeit, trotz DES Regens.",
        correctAnswer: "continue",
        audioText: "Während des Urlaubs. Wegen der Krankheit. Trotz des Wetters.",
        color: "green"
      },
      {
        id: "b1-4-flash-1",
        type: "flashcard",
        question: "Zdrava ishrana",
        questionDe: "Gesunde Ernährung",
        explanation: "Vokabular: das Vollkornbrot (integralni hleb), das Gemüse (povrće), das Obst (voće), die Ballaststoffe (vlakna), die Vitamine. Fraze: weniger Zucker, mehr Wasser, regelmäßig Sport treiben.",
        correctAnswer: "continue",
        audioText: "Essen Sie mehr Gemüse und weniger Zucker."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-5-learn-1",
        type: "learn-card",
        question: "Pasiv - trpno stanje",
        questionDe: "werden + Partizip II",
        explanation: "PASIV = WERDEN + PARTIZIP II. Prezent: Der Müll WIRD getrennt. Preterit: Der Müll WURDE getrennt. Sa modalnim: Der Müll MUSS getrennt WERDEN.",
        correctAnswer: "continue",
        audioText: "Der Müll wird getrennt. Die Bäume wurden gepflanzt.",
        color: "blue"
      },
      {
        id: "b1-5-learn-2",
        type: "learn-card",
        question: "Ekološki vokabular",
        questionDe: "Umweltschutz",
        explanation: "Pojmovi: der Klimawandel (klimatske promene), die Umweltverschmutzung (zagađenje), erneuerbare Energien (obnovljivi izvori), der CO2-Ausstoß (emisija CO2), das Recycling.",
        correctAnswer: "continue",
        audioText: "der Klimawandel, die Umweltverschmutzung, das Recycling",
        color: "green"
      },
      {
        id: "b1-5-flash-1",
        type: "flashcard",
        question: "Uzrok i posledica",
        questionDe: "deshalb, deswegen, folglich",
        explanation: "Veznici za uzrok/posledicu: DESHALB/DESWEGEN (zato), FOLGLICH (sledstveno), INFOLGEDESSEN (usled toga). Glavna rečenica, deshalb + glagol na drugom mestu.",
        correctAnswer: "continue",
        audioText: "Es regnet, deshalb bleibe ich zu Hause. Er ist krank, deswegen kommt er nicht."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-6-learn-1",
        type: "learn-card",
        question: "Relativne rečenice",
        questionDe: "der, die, das, den, dem...",
        explanation: "Relativne zamenice zavise od RODA i PADEŽA: Nominativ: der/die/das. Akuzativ: den/die/das. Dativ: dem/der/dem. Der Mann, DER hier arbeitet. Das Buch, DAS ich lese.",
        correctAnswer: "continue",
        audioText: "Der Künstler, der das Bild gemalt hat. Die Frau, die ich kenne.",
        color: "blue"
      },
      {
        id: "b1-6-learn-2",
        type: "learn-card",
        question: "Umetnost",
        questionDe: "Die Kunst",
        explanation: "Vokabular: das Gemälde (slika/ulje), die Skulptur, die Ausstellung (izložba), das Museum, die Galerie. Opisivanje: Im Vordergrund (u prvom planu), im Hintergrund (u pozadini).",
        correctAnswer: "continue",
        audioText: "das Gemälde, die Skulptur, die Ausstellung, das Museum",
        color: "green"
      },
      {
        id: "b1-6-flash-1",
        type: "flashcard",
        question: "Opisivanje slike",
        questionDe: "Im Vordergrund sieht man...",
        explanation: "Fraze: Im Vordergrund (prvi plan), im Hintergrund (pozadina), auf der linken/rechten Seite (levo/desno), in der Mitte (u sredini). Das Bild zeigt... (Slika prikazuje...)",
        correctAnswer: "continue",
        audioText: "Im Vordergrund sieht man eine Frau. Im Hintergrund ist ein Berg."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-7-learn-1",
        type: "learn-card",
        question: "Infinitiv sa 'zu'",
        questionDe: "zu + Infinitiv",
        explanation: "Mnogi glagoli i izrazi zahtevaju ZU + INFINITIV: Es ist wichtig, ZU wählen. Ich versuche, Deutsch ZU lernen. Kod razdvojivih glagola: anzufangen (anfangen ZU).",
        correctAnswer: "continue",
        audioText: "Es ist wichtig, zu wählen. Ich versuche, Deutsch zu lernen.",
        color: "blue"
      },
      {
        id: "b1-7-learn-2",
        type: "learn-card",
        question: "Nemački politički sistem",
        questionDe: "Das politische System",
        explanation: "Nemačka je savezna republika. Bundeskanzler (kancelar) vodi vladu. Bundestag (parlament) donosi zakone. Bundesländer (pokrajine) imaju sopstvene vlade. Wahl = izbori.",
        correctAnswer: "continue",
        audioText: "die Regierung, das Parlament, die Wahl, der Bundeskanzler",
        color: "green"
      },
      {
        id: "b1-7-flash-1",
        type: "flashcard",
        question: "Glagoli sa 'zu'",
        questionDe: "versuchen zu, beginnen zu, aufhören zu",
        explanation: "Glagoli + zu + infinitiv: versuchen (pokušati), beginnen/anfangen (početi), aufhören (prestati), vergessen (zaboraviti), vorhaben (nameravati).",
        correctAnswer: "continue",
        audioText: "Ich versuche zu verstehen. Ich habe vor, zu reisen."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-8-learn-1",
        type: "learn-card",
        question: "Als vs Wenn",
        questionDe: "Als ich Kind war... / Wenn ich Zeit habe...",
        explanation: "ALS = kada (JEDNOKRATNO u prošlosti): Als ich Kind war. WENN = kada/ako (VIŠEKRATNO ili SADAŠNJOST): Wenn ich Zeit habe. Wenn es regnet (uvek kad kiši).",
        correctAnswer: "continue",
        audioText: "Als ich klein war. Wenn ich Zeit habe. Immer wenn es regnet.",
        color: "blue"
      },
      {
        id: "b1-8-learn-2",
        type: "learn-card",
        question: "Preterit - pisanje",
        questionDe: "er war, er hatte, er ging, er kam",
        explanation: "Preterit se koristi u PISANJU (priče, novine). Pravilni: -te (machte, spielte). Nepravilni: menjaju osnovu (ging, kam, sah, sprach). Haben→hatte, sein→war.",
        correctAnswer: "continue",
        audioText: "Er war jung. Er hatte Träume. Er ging nach Deutschland.",
        color: "green"
      },
      {
        id: "b1-8-flash-1",
        type: "flashcard",
        question: "Vremenski veznici",
        questionDe: "bevor, nachdem, während",
        explanation: "BEVOR = pre nego što (Bevor ich ging...). NACHDEM = nakon što (Nachdem ich ankam...). WÄHREND = dok/za vreme (Während er schlief...). Glagol ide na kraj zavisne rečenice.",
        correctAnswer: "continue",
        audioText: "Bevor ich ging, rief ich an. Nachdem er ankam, aß er."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-9-learn-1",
        type: "learn-card",
        question: "Dvodelni veznici",
        questionDe: "sowohl... als auch, weder... noch, entweder... oder",
        explanation: "SOWOHL...ALS AUCH = i...i (Sowohl er als auch sie). WEDER...NOCH = ni...ni (Weder heute noch morgen). ENTWEDER...ODER = ili...ili. JE...DESTO = što...to (Je mehr, desto besser).",
        correctAnswer: "continue",
        audioText: "Sowohl er als auch sie. Weder heute noch morgen. Entweder du oder ich.",
        color: "blue"
      },
      {
        id: "b1-9-learn-2",
        type: "learn-card",
        question: "Tehnologija",
        questionDe: "Die Technologie",
        explanation: "Vokabular: die künstliche Intelligenz (AI), der Roboter, das Smart Home (pametna kuća), die Digitalisierung, das selbstfahrende Auto, die Datenbank.",
        correctAnswer: "continue",
        audioText: "künstliche Intelligenz, Roboter, Smart Home, Digitalisierung",
        color: "green"
      },
      {
        id: "b1-9-flash-1",
        type: "flashcard",
        question: "Je... desto/umso",
        questionDe: "Je mehr, desto besser.",
        explanation: "'Je... desto/umso' za poređenje: JE MEHR ich lerne, DESTO BESSER spreche ich. JE schneller, UMSO gefährlicher. Redosled: Je + komparativ, desto + komparativ.",
        correctAnswer: "continue",
        audioText: "Je mehr, desto besser. Je schneller, umso gefährlicher."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b1-10-learn-1",
        type: "learn-card",
        question: "Obwohl vs Trotzdem",
        questionDe: "Obwohl es regnet... / Es regnet, trotzdem...",
        explanation: "OBWOHL (iako) = VEZNIK, glagol na kraj: Obwohl er krank IST, geht er zur Arbeit. TROTZDEM (ipak) = PRILOG, glagol na 2. mestu: Er ist krank, TROTZDEM GEHT er zur Arbeit.",
        correctAnswer: "continue",
        audioText: "Obwohl es regnet, gehe ich raus. Es regnet, trotzdem gehe ich raus.",
        color: "blue"
      },
      {
        id: "b1-10-learn-2",
        type: "learn-card",
        question: "Kulturne norme",
        questionDe: "Kulturelle Unterschiede",
        explanation: "Nemačke norme: pünktlich sein (biti tačan), Händeschütteln (rukovanje), Schuhe ausziehen (izuti cipele u kući - neobavezno), du/Sie razlika (neformalnost/formalnost).",
        correctAnswer: "continue",
        audioText: "In Deutschland ist Pünktlichkeit sehr wichtig.",
        color: "green"
      },
      {
        id: "b1-10-flash-1",
        type: "flashcard",
        question: "Predrasude",
        questionDe: "Vorurteile und Klischees",
        explanation: "das Vorurteil (predrasuda), das Klischee (stereotip), die Integration, der Migrant, die Gastfreundschaft. Nemačka fama: strogi i tačni (klišej!).",
        correctAnswer: "continue",
        audioText: "Vorurteile sind oft falsch. Integration ist wichtig."
      },
      // Practice Phase
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
]
import { Lesson } from '../types'

export const b2Lessons: Lesson[] = [
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
      // Learning Phase
      {
        id: "b2-1-learn-1",
        type: "learn-card",
        question: "Pasiv sa modalnim glagolima",
        questionDe: "kann/muss/soll + Partizip II + werden",
        explanation: "Pasiv + modalni: Modalverb + Partizip II + WERDEN (na kraju): Das KANN gemacht WERDEN. Die Aufgabe MUSS erledigt WERDEN. Es SOLL verbessert WERDEN.",
        correctAnswer: "continue",
        audioText: "Das kann gemacht werden. Die Aufgabe muss erledigt werden.",
        color: "blue"
      },
      {
        id: "b2-1-learn-2",
        type: "learn-card",
        question: "Nemački idiomi",
        questionDe: "Redewendungen",
        explanation: "Idiomi (Redewendungen): 'Es liegt mir auf der Zunge' (na vrh mi je jezika), 'Ich verstehe nur Bahnhof' (ništa ne razumem), 'Übung macht den Meister' (vežbom do savršenstva).",
        correctAnswer: "continue",
        audioText: "Übung macht den Meister. Das ist nicht mein Bier.",
        color: "green"
      },
      {
        id: "b2-1-flash-1",
        type: "flashcard",
        question: "Strategije učenja",
        questionDe: "Lernstrategien",
        explanation: "Tipovi: visueller Lerntyp, auditiver Lerntyp, kinästhetischer Typ. Strategije: Vokabeln wiederholen, Karteikarten benutzen, Filme schauen, mit Muttersprachlern sprechen.",
        correctAnswer: "continue",
        audioText: "visueller Lerntyp, auditiver Lerntyp, Selbststudium"
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b2-2-learn-1",
        type: "learn-card",
        question: "Konjunktiv II prošlosti",
        questionDe: "hätte + Partizip II / wäre + Partizip II",
        explanation: "Irealni uslovi u prošlosti: HÄTTE/WÄRE + Partizip II. Hätte ich das gewusst, WÄRE ich gekommen. Wenn er mehr gelernt HÄTTE, HÄTTE er bestanden.",
        correctAnswer: "continue",
        audioText: "Hätte ich das gewusst, wäre ich gekommen. Wenn ich reich wäre...",
        color: "blue"
      },
      {
        id: "b2-2-learn-2",
        type: "learn-card",
        question: "Ekonomski vokabular",
        questionDe: "Wirtschaftsvokabular",
        explanation: "Pojmovi: die Globalisierung, der Export/Import, die Handelsbilanz (trgovinska bilansa), die Rezession (recesija), das Wirtschaftswachstum (ekonomski rast), die Inflation.",
        correctAnswer: "continue",
        audioText: "Globalisierung, Export, Import, Rezession, Wirtschaftswachstum",
        color: "green"
      },
      {
        id: "b2-2-flash-1",
        type: "flashcard",
        question: "Alternativni pasiv",
        questionDe: "sich lassen + Infinitiv / sein + zu + Infinitiv",
        explanation: "Alternativni pasiv: Das LÄSST SICH machen = Das kann gemacht werden. Das Problem IST ZU lösen = Das Problem muss/kann gelöst werden.",
        correctAnswer: "continue",
        audioText: "Das lässt sich machen. Das Problem ist zu lösen."
      },
      // Practice Phase
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
      // Learning Phase
      {
        id: "b2-3-learn-1",
        type: "learn-card",
        question: "Sufiksi za imenice",
        questionDe: "-ung, -keit, -heit, -schaft",
        explanation: "-UNG (od glagola): entscheiden→die Entscheidung. -KEIT (od prideva na -ig/-lich): möglich→die Möglichkeit. -HEIT (od prideva): frei→die Freiheit. -SCHAFT: die Freundschaft.",
        correctAnswer: "continue",
        audioText: "die Entscheidung, die Möglichkeit, die Freiheit, die Freundschaft",
        color: "blue"
      },
      {
        id: "b2-3-learn-2",
        type: "learn-card",
        question: "Radna psihologija",
        questionDe: "Arbeitspsychologie",
        explanation: "Pojmovi: der Stress, das Mobbing (maltretiranje), das Burnout (izgaranje), die Motivation, der Teamgeist (timski duh), die Work-Life-Balance.",
        correctAnswer: "continue",
        audioText: "Stress, Mobbing, Burnout, Motivation, Teamgeist",
        color: "green"
      },
      {
        id: "b2-3-flash-1",
        type: "flashcard",
        question: "Upravni govor",
        questionDe: "Indirekte Rede: er sagte, dass...",
        explanation: "Konjunktiv I za indirektni govor: Er SAGT, er SEI müde (sein→sei). Sie MEINT, sie HABE Zeit (haben→habe). Ili: Er SAGT, DASS er müde IST (dass-rečenica).",
        correctAnswer: "continue",
        audioText: "Er sagt, er sei müde. Sie meint, sie habe keine Zeit."
      },
      // Practice Phase
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
      // Faza učenja - Nauka i istraživanje
      {
        id: "b2-4-learn-1",
        type: "learn-card",
        question: "Partizip I kao pridev (aktivno značenje)",
        questionDe: "Das lachende Kind - Smejuće dete",
        explanation: "Partizip I se gradi od infinitiva + d (lachen → lachend). Opisuje radnju koja se trenutno dešava. Deklinira se kao pridev!",
        correctAnswer: "continue",
        audioText: "Das lachende Kind spielt im Garten.",
        color: "yellow"
      },
      {
        id: "b2-4-learn-2",
        type: "learn-card",
        question: "Partizip II kao pridev (pasivno značenje)",
        questionDe: "Das geöffnete Fenster - Otvoren prozor",
        explanation: "Partizip II opisuje završenu radnju ili stanje. Das geöffnete Fenster = prozor koji je bio otvoren (neko ga je otvorio).",
        correctAnswer: "continue",
        audioText: "Das geöffnete Fenster lässt frische Luft herein.",
        color: "green"
      },
      {
        id: "b2-4-learn-3",
        type: "learn-card",
        question: "Naučni vokabular",
        questionDe: "Die Forschung, das Experiment, die Hypothese",
        explanation: "die Forschung = istraživanje 🔴 | das Experiment = eksperiment 🟢 | die Hypothese = hipoteza 🔴 | der Wissenschaftler = naučnik 🔵",
        correctAnswer: "continue",
        audioText: "Die Forschung basiert auf Experimenten und Hypothesen.",
        color: "yellow"
      },
      {
        id: "b2-4-flash-1",
        type: "flashcard",
        question: "Razlika između Partizip I i II",
        questionDe: "lachend (koji se smeje) vs. gelacht (nasmejano)",
        explanation: "Partizip I = aktivna, sadašnja radnja (der lesende Mann - čovek koji čita). Partizip II = pasivna, završena radnja (das gelesene Buch - pročitana knjiga).",
        correctAnswer: "continue",
        audioText: "Der lesende Mann hält das gelesene Buch."
      },
      // Vežbe
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
      // Faza učenja - Mediji i manipulacija
      {
        id: "b2-5-learn-1",
        type: "learn-card",
        question: "Subjektivni modalni glagoli",
        questionDe: "Er soll reich sein - Navodno je bogat",
        explanation: "Modalni glagoli mogu izražavati stav govornika: sollen (navodno), wollen (tvrdi da), müssen (sigurno), können (možda), dürfen (verovatno ne).",
        correctAnswer: "continue",
        audioText: "Er soll sehr reich sein, aber wer weiß?",
        color: "yellow"
      },
      {
        id: "b2-5-learn-2",
        type: "learn-card",
        question: "Medijski vokabular",
        questionDe: "Die Fake News, die Pressefreiheit, die Manipulation",
        explanation: "die Fake News = lažne vesti 🔴 | die Pressefreiheit = sloboda štampe 🔴 | die Werbung = reklama 🔴 | der Journalist = novinar 🔵",
        correctAnswer: "continue",
        audioText: "Fake News und Manipulation bedrohen die Pressefreiheit.",
        color: "red"
      },
      {
        id: "b2-5-learn-3",
        type: "learn-card",
        question: "Razlikovanje tvrdnji i glasina",
        questionDe: "wollen (tvrdnja) vs. sollen (glasina)",
        explanation: "Er WILL studiert haben = On TVRDI da je studirao (možda laže). Sie SOLL krank sein = NAVODNO je bolesna (čuo sam od drugih).",
        correctAnswer: "continue",
        audioText: "Er will alles gesehen haben, aber sie soll nicht dabei gewesen sein.",
        color: "yellow"
      },
      {
        id: "b2-5-flash-1",
        type: "flashcard",
        question: "Kritičko čitanje medija",
        questionDe: "Ist das wahr oder falsch?",
        explanation: "Uvek proveri izvor (die Quelle), uporedi više izvora, pitaj: Ko ima koristi od ove vesti? (Wem nützt diese Nachricht?)",
        correctAnswer: "continue",
        audioText: "Wem nützt diese Nachricht? Was ist die Quelle?"
      },
      // Vežbe
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
      // Faza učenja - Pravo i pravda
      {
        id: "b2-6-learn-1",
        type: "learn-card",
        question: "Futur II - završena budućnost",
        questionDe: "Ich werde es gelesen haben - Pročitaću (do tada)",
        explanation: "Futur II izražava da će nešto biti završeno do određenog trenutka u budućnosti: werden + Partizip II + haben/sein.",
        correctAnswer: "continue",
        audioText: "Bis morgen werde ich das Buch gelesen haben.",
        color: "yellow"
      },
      {
        id: "b2-6-learn-2",
        type: "learn-card",
        question: "Pravni vokabular",
        questionDe: "Der Richter, der Anwalt, das Urteil",
        explanation: "der Richter = sudija 🔵 | der Anwalt = advokat 🔵 | das Urteil = presuda 🟢 | der Zeuge = svedok 🔵 | die Strafe = kazna 🔴",
        correctAnswer: "continue",
        audioText: "Der Richter verkündet das Urteil.",
        color: "blue"
      },
      {
        id: "b2-6-learn-3",
        type: "learn-card",
        question: "Zanimljivost: das Gericht",
        questionDe: "Das Gericht = sud ILI jelo!",
        explanation: "Nemačka reč 'das Gericht' ima dva potpuno različita značenja: 1) sud (pravni) 2) jelo (kulinarski). Kontekst je ključan!",
        correctAnswer: "continue",
        audioText: "Ich gehe zum Gericht. Das Gericht war lecker.",
        color: "green"
      },
      {
        id: "b2-6-flash-1",
        type: "flashcard",
        question: "Futur II formula",
        questionDe: "werden + Partizip II + haben/sein",
        explanation: "Er WIRD es gemacht HABEN (on će to uraditi - do tada završeno). Sie WIRD angekommen SEIN (ona će stići - do tada).",
        correctAnswer: "continue",
        audioText: "Er wird es bis Freitag erledigt haben."
      },
      // Vežbe
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
      // Faza učenja - Arhitektura i stanovanje
      {
        id: "b2-7-learn-1",
        type: "learn-card",
        question: "Napredni lokalni predlozi sa genitivom",
        questionDe: "innerhalb, außerhalb, oberhalb, unterhalb",
        explanation: "Ovi predlozi zahtevaju genitiv: innerhalb der Stadt (unutar grada), außerhalb des Hauses (izvan kuće), oberhalb des Flusses (iznad reke).",
        correctAnswer: "continue",
        audioText: "Das Museum liegt innerhalb der Altstadt.",
        color: "yellow"
      },
      {
        id: "b2-7-learn-2",
        type: "learn-card",
        question: "Arhitektonski stilovi",
        questionDe: "Gotik, Barock, Renaissance, Jugendstil",
        explanation: "die Gotik = gotika 🔴 | der Barock = barok 🔵 | die Renaissance = renesansa 🔴 | der Jugendstil = art nuvo 🔵 | die Moderne = moderna 🔴",
        correctAnswer: "continue",
        audioText: "Dieser Dom ist im gotischen Stil gebaut.",
        color: "yellow"
      },
      {
        id: "b2-7-learn-3",
        type: "learn-card",
        question: "Vokabular za zgrade",
        questionDe: "Das Gebäude, der Wolkenkratzer, die Fassade",
        explanation: "das Gebäude = zgrada 🟢 | der Wolkenkratzer = oblakoder 🔵 | die Fassade = fasada 🔴 | das Dach = krov 🟢 | der Aufzug = lift 🔵",
        correctAnswer: "continue",
        audioText: "Das Gebäude hat eine schöne Fassade.",
        color: "green"
      },
      {
        id: "b2-7-flash-1",
        type: "flashcard",
        question: "Predlozi sa genitivom - lokacija",
        questionDe: "diesseits / jenseits + Genitiv",
        explanation: "diesseits = s ove strane, jenseits = s one strane. Diesseits des Flusses (s ove strane reke). Jenseits der Grenze (s one strane granice).",
        correctAnswer: "continue",
        audioText: "Jenseits der Berge liegt ein schönes Tal."
      },
      // Vežbe
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
      // Faza učenja - Književnost
      {
        id: "b2-8-learn-1",
        type: "learn-card",
        question: "Književni žanrovi",
        questionDe: "Die Lyrik, die Epik, das Drama",
        explanation: "die Lyrik = lirika/poezija 🔴 | die Epik = epika/proza 🔴 | das Drama = drama 🟢 | der Roman = roman 🔵 | die Kurzgeschichte = kratka priča 🔴",
        correctAnswer: "continue",
        audioText: "Die deutsche Literatur umfasst Lyrik, Epik und Drama.",
        color: "yellow"
      },
      {
        id: "b2-8-learn-2",
        type: "learn-card",
        question: "Stilske figure",
        questionDe: "Die Metapher, die Ironie, die Übertreibung",
        explanation: "die Metapher = metafora (slikovito poređenje) 🔴 | die Ironie = ironija 🔴 | die Übertreibung = hiperbola 🔴 | der Vergleich = poređenje 🔵",
        correctAnswer: "continue",
        audioText: "Die Metapher ist ein wichtiges Stilmittel.",
        color: "red"
      },
      {
        id: "b2-8-learn-3",
        type: "learn-card",
        question: "Poznati nemački pisci",
        questionDe: "Goethe, Schiller, Kafka, Mann",
        explanation: "Johann Wolfgang von Goethe (Faust), Friedrich Schiller (Wilhelm Tell), Franz Kafka (Die Verwandlung), Thomas Mann (Buddenbrooks).",
        correctAnswer: "continue",
        audioText: "Goethe schrieb den berühmten Faust.",
        color: "yellow"
      },
      {
        id: "b2-8-flash-1",
        type: "flashcard",
        question: "Šta je metafora?",
        questionDe: "Die Metapher = ein bildlicher Vergleich",
        explanation: "Metafora je slikovito poređenje bez 'kao'. Npr. 'Das Leben ist ein Traum' (Život je san) - direktno poistovećivanje.",
        correctAnswer: "continue",
        audioText: "Das Leben ist ein Traum - das ist eine Metapher."
      },
      // Vežbe
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
]
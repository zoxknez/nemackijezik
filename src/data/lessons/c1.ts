import { Lesson } from '../types'

export const c1Lessons: Lesson[] = [
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
      // Faza učenja - Komunikacija na visokom nivou
      {
        id: "c1-1-learn-1",
        type: "learn-card",
        question: "Funkcionalni glagoli (Funktionsverbgefüge)",
        questionDe: "zur Verfügung stellen, in Erwägung ziehen",
        explanation: "Funkcionalni glagoli su kombinacije glagola sa predlozima i imenicama. Koriste se u formalnom jeziku: zur Verfügung stellen = staviti na raspolaganje, in Erwägung ziehen = razmotriti.",
        correctAnswer: "continue",
        audioText: "Ich stelle meine Zeit zur Verfügung.",
        color: "yellow"
      },
      {
        id: "c1-1-learn-2",
        type: "learn-card",
        question: "Nominalni stil (formalnije)",
        questionDe: "Die Durchführung vs. durchführen",
        explanation: "U formalnom pisanju se preferiraju imenice umesto glagola: 'die Durchführung des Projekts' umesto 'das Projekt durchführen'. Ovo zvuči profesionalnije.",
        correctAnswer: "continue",
        audioText: "Die Durchführung des Projekts war erfolgreich.",
        color: "yellow"
      },
      {
        id: "c1-1-learn-3",
        type: "learn-card",
        question: "Kohezivni markeri",
        questionDe: "folglich, demzufolge, diesbezüglich",
        explanation: "Kohezivni markeri povezuju delove teksta: folglich = sledstveno, demzufolge = prema tome, diesbezüglich = u vezi s tim, nichtsdestotrotz = uprkos tome.",
        correctAnswer: "continue",
        audioText: "Diesbezüglich möchte ich anmerken, dass...",
        color: "yellow"
      },
      {
        id: "c1-1-flash-1",
        type: "flashcard",
        question: "Najvažniji funkcionalni glagoli",
        questionDe: "in Kauf nehmen, zur Sprache bringen",
        explanation: "in Kauf nehmen = prihvatiti (nešto negativno), zur Sprache bringen = pomenuti/diskutovati, in Anspruch nehmen = koristiti/iskoristiti.",
        correctAnswer: "continue",
        audioText: "Wir müssen dieses Risiko in Kauf nehmen."
      },
      // Vežbe
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
      // Faza učenja - Psihologija i društvo
      {
        id: "c1-2-learn-1",
        type: "learn-card",
        question: "Konjunktiv I za indirektni govor",
        questionDe: "Er sagte, er habe... / Sie sei...",
        explanation: "Konjunktiv I se koristi u vestima i formalnom jeziku za prenošenje tuđih reči: Er sagte, er HABE es nicht gewusst (On je rekao da nije znao).",
        correctAnswer: "continue",
        audioText: "Der Minister sagte, er habe nichts davon gewusst.",
        color: "yellow"
      },
      {
        id: "c1-2-learn-2",
        type: "learn-card",
        question: "Konjunktiv I - forme",
        questionDe: "sei, habe, könne, werde",
        explanation: "Najvažnije forme: sein → sei/seien | haben → habe/haben | können → könne | werden → werde. Koristi se 3. lice jednine najčešće.",
        correctAnswer: "continue",
        audioText: "Laut der Studie sei das Ergebnis signifikant.",
        color: "yellow"
      },
      {
        id: "c1-2-learn-3",
        type: "learn-card",
        question: "Psihološki vokabular",
        questionDe: "Die Gruppendynamik, das Verhalten, der Einfluss",
        explanation: "die Gruppendynamik = grupna dinamika 🔴 | das Verhalten = ponašanje 🟢 | der Einfluss = uticaj 🔵 | die Therapie = terapija 🔴",
        correctAnswer: "continue",
        audioText: "Die Gruppendynamik beeinflusst das individuelle Verhalten.",
        color: "yellow"
      },
      {
        id: "c1-2-flash-1",
        type: "flashcard",
        question: "Kada koristiti Konjunktiv I?",
        questionDe: "Indirekte Rede - prenošenje tuđih reči",
        explanation: "Koristite Konjunktiv I u: vestima, akademskim tekstovima, formalnim izveštajima. Signali: laut, zufolge, behaupten, berichten, sagen dass...",
        correctAnswer: "continue",
        audioText: "Laut Bericht sei die Situation ernst."
      },
      // Vežbe
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
      // Faza učenja - Ekonomija i finansije
      {
        id: "c1-3-learn-1",
        type: "learn-card",
        question: "Finansijski vokabular",
        questionDe: "Die Aktie, die Börse, die Dividende",
        explanation: "die Aktie = deonica 🔴 | die Börse = berza 🔴 | die Dividende = dividenda 🔴 | der Anleger = investitor 🔵 | die Inflation = inflacija 🔴",
        correctAnswer: "continue",
        audioText: "Die Aktien an der Börse sind gestiegen.",
        color: "red"
      },
      {
        id: "c1-3-learn-2",
        type: "learn-card",
        question: "Opisivanje grafikona",
        questionDe: "steigen, fallen, stagnieren, sich erholen",
        explanation: "steigen = rasti | fallen = padati | stagnieren = stagnirati | sich erholen = oporavljati se | einen Höhepunkt erreichen = dostići vrh",
        correctAnswer: "continue",
        audioText: "Laut dem Diagramm stiegen die Exporte um 15 Prozent.",
        color: "yellow"
      },
      {
        id: "c1-3-learn-3",
        type: "learn-card",
        question: "Poslovni pregovori",
        questionDe: "verhandeln, der Kompromiss, die Einigung",
        explanation: "verhandeln = pregovarati | der Kompromiss = kompromis 🔵 | die Einigung = dogovor 🔴 | das Angebot = ponuda 🟢 | die Forderung = zahtev 🔴",
        correctAnswer: "continue",
        audioText: "Nach langen Verhandlungen erreichten sie eine Einigung.",
        color: "yellow"
      },
      {
        id: "c1-3-flash-1",
        type: "flashcard",
        question: "Izrazi za trendove",
        questionDe: "stark/leicht steigen/fallen",
        explanation: "stark steigen = naglo rasti, leicht fallen = blago padati, sich stabilisieren = stabilizovati se, zurückgehen = opadati.",
        correctAnswer: "continue",
        audioText: "Die Arbeitslosigkeit ist leicht zurückgegangen."
      },
      // Vežbe
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
      // Faza učenja - Tehnologija i etika
      {
        id: "c1-4-learn-1",
        type: "learn-card",
        question: "Etički vokabular",
        questionDe: "Die Ethik, die Moral, das Dilemma",
        explanation: "die Ethik = etika 🔴 | die Moral = moral 🔴 | das Dilemma = dilema 🟢 | die Verantwortung = odgovornost 🔴 | das Gewissen = savest 🟢",
        correctAnswer: "continue",
        audioText: "Das ethische Dilemma stellt unsere Moral in Frage.",
        color: "red"
      },
      {
        id: "c1-4-learn-2",
        type: "learn-card",
        question: "Argumentativni veznici",
        questionDe: "einerseits... andererseits, dennoch, hingegen",
        explanation: "einerseits... andererseits = s jedne strane... s druge strane | dennoch = ipak | hingegen = nasuprot tome | zudem = osim toga",
        correctAnswer: "continue",
        audioText: "Einerseits bietet KI Chancen, andererseits birgt sie Risiken.",
        color: "yellow"
      },
      {
        id: "c1-4-learn-3",
        type: "learn-card",
        question: "Idiom: Ein zweischneidiges Schwert",
        questionDe: "Das ist ein zweischneidiges Schwert.",
        explanation: "Ein zweischneidiges Schwert = mač sa dve oštrice. Značenje: nešto ima i prednosti i mane. Koristi se za kompleksne teme.",
        correctAnswer: "continue",
        audioText: "Die künstliche Intelligenz ist ein zweischneidiges Schwert.",
        color: "yellow"
      },
      {
        id: "c1-4-flash-1",
        type: "flashcard",
        question: "Izražavanje kontrasta",
        questionDe: "jedoch, dennoch, allerdings",
        explanation: "jedoch = međutim (formalno), dennoch = ipak/uprkos tome, allerdings = doduše/međutim. Svi izražavaju kontrast.",
        correctAnswer: "continue",
        audioText: "Die Technologie ist nützlich, allerdings nicht ohne Risiken."
      },
      // Vežbe
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
      // Faza učenja - Umetnost i kritika
      {
        id: "c1-5-learn-1",
        type: "learn-card",
        question: "Pridevi za kritiku umetnosti",
        questionDe: "atemberaubend, tiefgründig, bahnbrechend",
        explanation: "atemberaubend = zapanjujuće | tiefgründig = dubokoumno | bahnbrechend = revolucionarno | oberflächlich = površno | eindrucksvoll = impresivno",
        correctAnswer: "continue",
        audioText: "Das Werk ist atemberaubend und bahnbrechend.",
        color: "yellow"
      },
      {
        id: "c1-5-learn-2",
        type: "learn-card",
        question: "Umetnički pravci",
        questionDe: "Der Impressionismus, der Expressionismus, der Surrealismus",
        explanation: "der Impressionismus 🔵 | der Expressionismus 🔵 | der Surrealismus 🔵 | der Kubismus 🔵 | die Abstrakte Kunst = apstraktna umetnost 🔴",
        correctAnswer: "continue",
        audioText: "Der Impressionismus und der Expressionismus sind wichtige Kunstrichtungen.",
        color: "blue"
      },
      {
        id: "c1-5-learn-3",
        type: "learn-card",
        question: "Vokabular za recenzije",
        questionDe: "Das Meisterwerk, die Ausstellung, der Rezensent",
        explanation: "das Meisterwerk = remek-delo 🟢 | die Ausstellung = izložba 🔴 | der Rezensent = recenzent 🔵 | die Handschrift = rukopis/stil 🔴",
        correctAnswer: "continue",
        audioText: "Der Rezensent lobt das Meisterwerk in seiner Kritik.",
        color: "green"
      },
      {
        id: "c1-5-flash-1",
        type: "flashcard",
        question: "Izrazi za opisivanje umetnosti",
        questionDe: "Es ruft Emotionen hervor / Es löst Gefühle aus",
        explanation: "hervorrufen / auslösen = izazvati. Das Kunstwerk ruft starke Emotionen hervor = Umetničko delo izaziva jake emocije.",
        correctAnswer: "continue",
        audioText: "Das Gemälde ruft tiefe Emotionen hervor."
      },
      // Vežbe
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
      // Faza učenja - Istorija ideja
      {
        id: "c1-6-learn-1",
        type: "learn-card",
        question: "Filozofski pravci",
        questionDe: "Der Rationalismus, der Empirismus, der Idealismus",
        explanation: "der Rationalismus = racionalizam 🔵 | der Empirismus = empirizam 🔵 | der Idealismus = idealizam 🔵 | der Nihilismus = nihilizam 🔵 | der Existenzialismus = egzistencijalizam 🔵",
        correctAnswer: "continue",
        audioText: "Kant war ein Vertreter des deutschen Idealismus.",
        color: "blue"
      },
      {
        id: "c1-6-learn-2",
        type: "learn-card",
        question: "Die Aufklärung - dvostruko značenje",
        questionDe: "Die Aufklärung = prosvetiteljstvo ILI objašnjenje",
        explanation: "Die Aufklärung ima dva značenja: 1) Prosvetiteljstvo (18. vek, epoha razuma) 2) Objašnjenje/razjašnjenje (svakodnevni kontekst).",
        correctAnswer: "continue",
        audioText: "Die Aufklärung war eine wichtige Epoche in Europa.",
        color: "red"
      },
      {
        id: "c1-6-learn-3",
        type: "learn-card",
        question: "Poznati nemački filozofi",
        questionDe: "Kant, Hegel, Nietzsche, Schopenhauer",
        explanation: "Immanuel Kant (Kritika čistog uma), G.W.F. Hegel (Fenomenologija duha), Friedrich Nietzsche (Tako je govorio Zaratustra), Arthur Schopenhauer (Svet kao volja i predstava).",
        correctAnswer: "continue",
        audioText: "Kant, Hegel und Nietzsche sind berühmte deutsche Philosophen.",
        color: "yellow"
      },
      {
        id: "c1-6-flash-1",
        type: "flashcard",
        question: "Kognitivne reči",
        questionDe: "denken, erkennen, begreifen, verstehen",
        explanation: "denken = misliti, erkennen = spoznati, begreifen = shvatiti (duboko), verstehen = razumeti. Nivelacija od površnog do dubokog razumevanja.",
        correctAnswer: "continue",
        audioText: "Ich versuche, diese Idee zu begreifen."
      },
      // Vežbe
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
  {
    id: "c1-7",
    title: "Akademsko pisanje i istraživanje",
    titleDe: "Akademisches Schreiben und Forschung",
    description: "Metode istraživanja, citiranje, struktura naučnog rada.",
    level: "C1",
    unit: 2,
    order: 7,
    duration: 65,
    xpReward: 170,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Struktura akademskog teksta", "Naučna metodologija", "Citati i reference"],
    exercises: [
      // Learning Phase
      {
        id: "c1-7-learn-1",
        type: "learn-card",
        question: "Struktura akademskog rada",
        questionDe: "Einleitung, Hauptteil, Schluss",
        explanation: "Struktura: 1) EINLEITUNG (uvod) - teza, ciljevi, pregled. 2) HAUPTTEIL (glavni deo) - argumentacija, analiza, dokazi. 3) SCHLUSS (zaključak) - sinteza, implikacije. Takođe: Abstract, Literaturverzeichnis (bibliografija).",
        correctAnswer: "continue",
        audioText: "Einleitung, Hauptteil, Schluss, Literaturverzeichnis",
        color: "purple"
      },
      {
        id: "c1-7-learn-2",
        type: "learn-card",
        question: "Naučne metode",
        questionDe: "quantitativ, qualitativ, empirisch",
        explanation: "Metode: QUANTITATIV (kvantitativni) - statistika, brojke. QUALITATIV (kvalitativni) - intervjui, opažanje. EMPIRISCH (empirijski) - zasnovano na iskustvu/podacima. THEORETISCH (teorijski) - konceptualna analiza.",
        correctAnswer: "continue",
        audioText: "quantitative Methode, qualitative Forschung, empirische Daten",
        color: "blue"
      },
      {
        id: "c1-7-flash-1",
        type: "flashcard",
        question: "Citiranje",
        questionDe: "laut/nach X, X zufolge, wie X betont",
        explanation: "Načini citiranja: Laut/Nach Schmidt (2020)... = Prema Schmidt-u. Schmidt (2020) zufolge... = Prema Schmidt-u. Wie Schmidt (2020) betont, ... = Kao što Schmidt naglašava. WICHTIG: Plagiat je ozbiljno kršenje!",
        correctAnswer: "continue",
        audioText: "Laut Schmidt, nach der Theorie, wie die Forschung zeigt"
      },
      // Practice Phase
      {
        id: "c1-7-ex1",
        type: "matching",
        question: "Poveži delove naučnog rada.",
        pairs: [
          { de: "die Einleitung", sr: "uvod" },
          { de: "der Hauptteil", sr: "glavni deo" },
          { de: "der Schluss", sr: "zaključak" },
          { de: "das Literaturverzeichnis", sr: "bibliografija" },
          { de: "die Hypothese", sr: "hipoteza" }
        ],
        correctAnswer: "matching-check",
        explanation: "Struktura akademskog teksta."
      },
      {
        id: "c1-7-ex2",
        type: "fill-blank",
        question: "___ Schmidt (2020) sind die Ergebnisse signifikant. (prema)",
        correctAnswer: "Laut",
        hint: "Laut/Nach",
        explanation: "Laut/Nach + ime = Prema nekome."
      },
      {
        id: "c1-7-ex3",
        type: "multiple-choice",
        question: "Koja metoda koristi intervjue i opažanja?",
        options: ["Qualitative Methode", "Quantitative Methode", "Mathematische Methode", "Keine Methode"],
        correctAnswer: "Qualitative Methode",
        explanation: "Qualitative Forschung = kvalitativno istraživanje (intervjui, etnografija)."
      },
      {
        id: "c1-7-ex4",
        type: "matching",
        question: "Poveži metodološke termine.",
        pairs: [
          { de: "die Stichprobe", sr: "uzorak" },
          { de: "die Variable", sr: "promenljiva" },
          { de: "die Korrelation", sr: "korelacija" },
          { de: "die Validität", sr: "validnost" },
          { de: "die Reliabilität", sr: "pouzdanost" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovni naučni termini."
      },
      {
        id: "c1-7-ex5",
        type: "translation",
        question: "Prevedi: 'Ova studija ima za cilj da ispita odnos između X i Y.'",
        correctAnswer: ["Diese Studie zielt darauf ab, die Beziehung zwischen X und Y zu untersuchen", "Das Ziel dieser Studie ist es, den Zusammenhang zwischen X und Y zu erforschen"],
        explanation: "Akademski stil za izražavanje cilja istraživanja."
      },
      {
        id: "c1-7-ex6",
        type: "fill-blank",
        question: "Die ___ zeigt einen signifikanten Zusammenhang. (analiza)",
        correctAnswer: "Analyse",
        explanation: "Die Analyse = analiza (ključan deo istraživanja)."
      },
      {
        id: "c1-7-ex7",
        type: "multiple-choice",
        question: "Wie nennt man eine unbewiesene Annahme?",
        options: ["Hypothese", "Theorie", "Fakt", "Beweis"],
        correctAnswer: "Hypothese",
        explanation: "Die Hypothese = hipoteza (nepotvrđena pretpostavka)."
      },
      {
        id: "c1-7-ex8",
        type: "matching",
        question: "Poveži akademske glagole.",
        pairs: [
          { de: "untersuchen", sr: "ispitati/istražiti" },
          { de: "analysieren", sr: "analizirati" },
          { de: "erörtern", sr: "raspraviti" },
          { de: "belegen", sr: "dokazati" },
          { de: "widerlegen", sr: "opovrgnuti" }
        ],
        correctAnswer: "matching-check",
        explanation: "Glagoli za akademsko pisanje."
      },
      {
        id: "c1-7-ex9",
        type: "fill-blank",
        question: "Die Forschung ___ neue Erkenntnisse. (doneti)",
        correctAnswer: "bringt",
        hint: "Glagol bringen",
        explanation: "Erkenntnisse bringen = doneti saznanja."
      },
      {
        id: "c1-7-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Wie die empirischen Daten belegen, besteht ein signifikanter Zusammenhang zwischen den beiden Variablen, was die anfängliche Hypothese bestätigt.",
        options: ["Kao što empirijski podaci dokazuju, postoji značajna veza između dve promenljive, što potvrđuje početnu hipotezu.", "Nema dokaza za hipotezu.", "Podaci su nevažni.", "Veza ne postoji."],
        correctAnswer: "Kao što empirijski podaci dokazuju, postoji značajna veza između dve promenljive, što potvrđuje početnu hipotezu.",
        explanation: "Belegen = dokazati, der Zusammenhang = veza, bestätigen = potvrditi."
      }
    ]
  },
  {
    id: "c1-8",
    title: "Etika, moral i društvena pravda",
    titleDe: "Ethik, Moral und soziale Gerechtigkeit",
    description: "Etičke dileme, pravda, ljudska prava, bioetika.",
    level: "C1",
    unit: 3,
    order: 8,
    duration: 60,
    xpReward: 165,
    isLocked: true,
    isCompleted: false,
    progress: 0,
    topics: ["Etički pojmovi", "Argumentacija", "Moralni sudovi"],
    exercises: [
      // Learning Phase
      {
        id: "c1-8-learn-1",
        type: "learn-card",
        question: "Etički pojmovi",
        questionDe: "die Ethik, die Moral, die Gerechtigkeit",
        explanation: "Die Ethik = etika (nauka o moralu), die Moral = moral (norma ponašanja), die Gerechtigkeit = pravda, das Gewissen = savest, die Pflicht = dužnost, das Recht = pravo, die Verantwortung = odgovornost.",
        correctAnswer: "continue",
        audioText: "die Ethik, die Moral, die Gerechtigkeit, das Gewissen",
        color: "red"
      },
      {
        id: "c1-8-learn-2",
        type: "learn-card",
        question: "Etički pravci",
        questionDe: "Deontologie, Utilitarismus, Tugendethik",
        explanation: "DEONTOLOGIE (deontologija) - dužnosti, Kant. UTILITARISMUS (utilitarizam) - najveća sreća najvećeg broja. TUGENDETHIK (etika vrline) - razvoj karaktera, Aristotel. Različiti pristupi etičkim pitanjima!",
        correctAnswer: "continue",
        audioText: "Deontologie, Utilitarismus, Tugendethik",
        color: "orange"
      },
      {
        id: "c1-8-flash-1",
        type: "flashcard",
        question: "Bioetika",
        questionDe: "Sterbehilfe, Abtreibung, Klonen",
        explanation: "Kontroverzne teme bioetike: die Sterbehilfe = eutanazija, die Abtreibung = abortus, das Klonen = kloniranje, die Stammzellenforschung = istraživanje matičnih ćelija, die Gentechnik = genetičko inženjerstvo.",
        correctAnswer: "continue",
        audioText: "die Sterbehilfe, die Gentechnik, bioethische Fragen"
      },
      // Practice Phase
      {
        id: "c1-8-ex1",
        type: "matching",
        question: "Poveži etičke pojmove.",
        pairs: [
          { de: "die Gerechtigkeit", sr: "pravda" },
          { de: "das Gewissen", sr: "savest" },
          { de: "die Pflicht", sr: "dužnost" },
          { de: "die Verantwortung", sr: "odgovornost" },
          { de: "die Würde", sr: "dostojanstvo" }
        ],
        correctAnswer: "matching-check",
        explanation: "Ključni etički termini."
      },
      {
        id: "c1-8-ex2",
        type: "fill-blank",
        question: "Jeder Mensch hat eine ___ gegenüber der Gesellschaft. (odgovornost)",
        correctAnswer: "Verantwortung",
        explanation: "Die Verantwortung = odgovornost (moralna ili pravna)."
      },
      {
        id: "c1-8-ex3",
        type: "multiple-choice",
        question: "Koji etički pravac naglašava dužnost?",
        options: ["Deontologie", "Utilitarismus", "Hedonismus", "Nihilismus"],
        correctAnswer: "Deontologie",
        explanation: "Deontologija (Kant) = etika dužnosti."
      },
      {
        id: "c1-8-ex4",
        type: "matching",
        question: "Poveži bioetičke teme.",
        pairs: [
          { de: "die Sterbehilfe", sr: "eutanazija" },
          { de: "das Klonen", sr: "kloniranje" },
          { de: "die Abtreibung", sr: "abortus" },
          { de: "die Gentechnik", sr: "genetičko inženjerstvo" },
          { de: "die Stammzellenforschung", sr: "istraživanje matičnih ćelija" }
        ],
        correctAnswer: "matching-check",
        explanation: "Kontroverzne bioetičke teme."
      },
      {
        id: "c1-8-ex5",
        type: "translation",
        question: "Prevedi: 'Ljudsko dostojanstvo je nepovredivo.'",
        correctAnswer: ["Die Menschenwürde ist unantastbar", "Die menschliche Würde ist unantastbar"],
        explanation: "Prvi član nemačkog Osnovnog zakona. Unantastbar = nepovrediv."
      },
      {
        id: "c1-8-ex6",
        type: "fill-blank",
        question: "Das ___ spielt eine wichtige Rolle bei moralischen Entscheidungen. (savest)",
        correctAnswer: "Gewissen",
        explanation: "Das Gewissen = savest (unutrašnji moralni kompas)."
      },
      {
        id: "c1-8-ex7",
        type: "multiple-choice",
        question: "Was ist das Ziel des Utilitarismus?",
        options: ["Das größte Glück der größten Zahl", "Pflichterfüllung", "Persönliche Tugend", "Absolute Freiheit"],
        correctAnswer: "Das größte Glück der größten Zahl",
        explanation: "Utilitarizam = maksimizacija sreće najvećeg broja."
      },
      {
        id: "c1-8-ex8",
        type: "matching",
        question: "Poveži sa ljudskim pravima.",
        pairs: [
          { de: "die Meinungsfreiheit", sr: "sloboda mišljenja" },
          { de: "das Wahlrecht", sr: "pravo glasa" },
          { de: "die Religionsfreiheit", sr: "sloboda veroispovesti" },
          { de: "das Recht auf Bildung", sr: "pravo na obrazovanje" },
          { de: "die Versammlungsfreiheit", sr: "sloboda okupljanja" }
        ],
        correctAnswer: "matching-check",
        explanation: "Osnovna ljudska prava."
      },
      {
        id: "c1-8-ex9",
        type: "fill-blank",
        question: "Die ___ zwischen Arm und Reich nimmt zu. (nejednakost)",
        correctAnswer: "Ungleichheit",
        hint: "Die Ungleichheit",
        explanation: "Die Ungleichheit = nejednakost (socijalna/ekonomska)."
      },
      {
        id: "c1-8-ex10",
        type: "listening",
        question: "Šta čuješ?",
        audioText: "Nach Kant darf der Mensch niemals bloß als Mittel, sondern muss stets zugleich als Zweck behandelt werden. Dies ist der kategorische Imperativ.",
        options: ["Prema Kantu, čovek nikad ne sme biti tretiran samo kao sredstvo, već uvek i kao cilj. To je kategorički imperativ.", "Kant kaže da ljudi nisu važni.", "Kategorički imperativ ne postoji.", "Čovek je samo sredstvo."],
        correctAnswer: "Prema Kantu, čovek nikad ne sme biti tretiran samo kao sredstvo, već uvek i kao cilj. To je kategorički imperativ.",
        explanation: "Kantov kategorički imperativ - temelj deontološke etike."
      }
    ]
  }
]
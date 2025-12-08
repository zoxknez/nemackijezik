import { Lesson } from '../types'

export const c2Lessons: Lesson[] = [
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
      // Faza učenja - Nemačka književnost
      {
        id: "c2-1-learn-1",
        type: "learn-card",
        question: "Nemačke književne epohe",
        questionDe: "Aufklärung, Sturm und Drang, Romantik",
        explanation: "Die Aufklärung (Prosvetiteljstvo, 1720-1785) → Sturm und Drang (1765-1785) → Weimarer Klassik (1786-1805) → Romantik (1795-1848).",
        correctAnswer: "continue",
        audioText: "Die Aufklärung und die Romantik sind wichtige literarische Epochen.",
        color: "yellow"
      },
      {
        id: "c2-1-learn-2",
        type: "learn-card",
        question: "Goethe i Faust",
        questionDe: "Zwei Seelen wohnen, ach! in meiner Brust.",
        explanation: "Faust je najpoznatije delo Getea. 'Zwei Seelen wohnen in meiner Brust' = Dve duše stanuju u mojim grudima. Izražava unutrašnji konflikt.",
        correctAnswer: "continue",
        audioText: "Zwei Seelen wohnen, ach, in meiner Brust!",
        color: "yellow"
      },
      {
        id: "c2-1-learn-3",
        type: "learn-card",
        question: "Sturm und Drang - Oluja i poriv",
        questionDe: "Gefühle statt Vernunft!",
        explanation: "Sturm und Drang (1765-1785) je književni pokret koji naglašava emocije i individualnost nasuprot racionalnosti prosvetiteljstva. Gete i Šiler su glavni predstavnici.",
        correctAnswer: "continue",
        audioText: "Der Sturm und Drang betonte Gefühle und Individualität.",
        color: "yellow"
      },
      {
        id: "c2-1-flash-1",
        type: "flashcard",
        question: "Kafka i modernost",
        questionDe: "Die Verwandlung - Preobražaj",
        explanation: "Franz Kafka (1883-1924) je autor 'Die Verwandlung' (Preobražaj). Gregor Samsa se budi pretvoren u insekta. Kafkijanski stil = apsurdan, alijeniran.",
        correctAnswer: "continue",
        audioText: "Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte..."
      },
      // Vežbe
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
      // Faza učenja - Dijalekti i lingvistika
      {
        id: "c2-2-learn-1",
        type: "learn-card",
        question: "Regionalni pozdravi",
        questionDe: "Grüezi, Servus, Moin, Grüß Gott",
        explanation: "Grüezi = Zdravo (Švajcarska) | Servus = Zdravo (Bavarska/Austrija) | Moin = Zdravo (Sever) | Grüß Gott = Bog te blagoslovio (Jug)",
        correctAnswer: "continue",
        audioText: "In Bayern sagt man Servus, in der Schweiz Grüezi.",
        color: "yellow"
      },
      {
        id: "c2-2-learn-2",
        type: "learn-card",
        question: "Glavni nemački dijalekti",
        questionDe: "Bairisch, Schwäbisch, Plattdeutsch, Sächsisch",
        explanation: "Bayern → Bairisch | Schwaben → Schwäbisch | Norddeutschland → Plattdeutsch | Sachsen → Sächsisch | Berlin → Berlinerisch",
        correctAnswer: "continue",
        audioText: "Plattdeutsch ist der Dialekt in Norddeutschland.",
        color: "yellow"
      },
      {
        id: "c2-2-learn-3",
        type: "learn-card",
        question: "Razlike: Nemačka vs. Švajcarska vs. Austrija",
        questionDe: "Velo (CH) = Fahrrad (D) = Rad (A)",
        explanation: "Bicikl: Fahrrad (D), Velo (CH), Rad (A). Krompir: Kartoffel (D), Erdäpfel (A). Paradajz: Tomate (D), Paradeiser (A).",
        correctAnswer: "continue",
        audioText: "In der Schweiz sagt man Velo statt Fahrrad.",
        color: "yellow"
      },
      {
        id: "c2-2-flash-1",
        type: "flashcard",
        question: "Hochdeutsch vs. Plattdeutsch",
        questionDe: "Standardni vs. Niskonemački",
        explanation: "Hochdeutsch = standardni nemački (u medijima, obrazovanju). Plattdeutsch = niskonemački dijalekt (Severna Nemačka), zvuči sličnije holandskom i engleskom.",
        correctAnswer: "continue",
        audioText: "Hochdeutsch ist die Standardsprache in Deutschland."
      },
      // Vežbe
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
      // Faza učenja - Napredna retorika
      {
        id: "c2-3-learn-1",
        type: "learn-card",
        question: "Ironija i sarkazam",
        questionDe: "Das Gegenteil sagen von dem, was man meint",
        explanation: "Ironija = reći suprotno od onoga što mislimo. 'Das ist ja ganz toll!' (sarkastično) = To je baš super! (ali zapravo je loše). Ton glasa otkriva značenje.",
        correctAnswer: "continue",
        audioText: "Das ist ja ganz toll! (ironisch)",
        color: "yellow"
      },
      {
        id: "c2-3-learn-2",
        type: "learn-card",
        question: "Napredne stilske figure",
        questionDe: "Hyperbel, Litotes, Euphemismus, Oxymoron",
        explanation: "die Hyperbel = preuveličavanje 🔴 | die Litotes = umanjivanje 🔴 | der Euphemismus = ublažavanje 🔵 | das Oxymoron = kontradikcija (npr. 'bittere Süße') 🟢",
        correctAnswer: "continue",
        audioText: "Ein Oxymoron ist zum Beispiel bittere Süße.",
        color: "red"
      },
      {
        id: "c2-3-learn-3",
        type: "learn-card",
        question: "Die Anspielung - aluzija",
        questionDe: "Eine indirekte Referenz auf etwas",
        explanation: "Anspielung = aluzija, indirektna referenca. Koristi se u književnosti, politici i svakodnevnom govoru da se kaže nešto bez direktnog imenovanja.",
        correctAnswer: "continue",
        audioText: "Der Redner machte eine Anspielung auf den Skandal.",
        color: "red"
      },
      {
        id: "c2-3-flash-1",
        type: "flashcard",
        question: "Retorika u politici",
        questionDe: "überzeugen, argumentieren, appellieren",
        explanation: "überzeugen = ubediti, argumentieren = argumentovati, appellieren = apelovati. Političari koriste retoriku da ubede birače.",
        correctAnswer: "continue",
        audioText: "Der Politiker versucht, die Wähler zu überzeugen."
      },
      // Vežbe
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
      // Faza učenja - Kulturni identitet
      {
        id: "c2-4-learn-1",
        type: "learn-card",
        question: "Termini kulturnog identiteta",
        questionDe: "Die Identität, die Integration, die Zugehörigkeit",
        explanation: "die Identität = identitet 🔴 | die Integration = integracija 🔴 | die Zugehörigkeit = pripadnost 🔴 | die Multikulturalität = multikulturalnost 🔴",
        correctAnswer: "continue",
        audioText: "Die Integration und kulturelle Identität sind wichtige Themen.",
        color: "red"
      },
      {
        id: "c2-4-learn-2",
        type: "learn-card",
        question: "Einwanderungsland Deutschland",
        questionDe: "Deutschland ist ein Einwanderungsland.",
        explanation: "Einwanderungsland = zemlja imigracije. Nemačka je postala značajno multikulturalno društvo sa imigrantima iz Turske, Italije, Istočne Evrope i mnogih drugih zemalja.",
        correctAnswer: "continue",
        audioText: "Deutschland ist ein Einwanderungsland mit vielen Kulturen.",
        color: "yellow"
      },
      {
        id: "c2-4-learn-3",
        type: "learn-card",
        question: "Die Leitkultur - kontroverzan pojam",
        questionDe: "Leitkultur = vodeća kultura",
        explanation: "Leitkultur je politički termin koji se odnosi na 'dominantnu kulturu' društva. Kontroverzan je jer se pitamo: Ko definiše kulturu? Kako se balansira integracija i raznolikost?",
        correctAnswer: "continue",
        audioText: "Die Debatte über Leitkultur ist politisch umstritten.",
        color: "yellow"
      },
      {
        id: "c2-4-flash-1",
        type: "flashcard",
        question: "Nemački mentalitet posle rata",
        questionDe: "Die deutsche Mentalität hat sich verändert.",
        explanation: "Posle Drugog svetskog rata, nemački mentalitet se značajno promenio: Vergangenheitsbewältigung (suočavanje sa prošlošću), pacifizam, evropska integracija.",
        correctAnswer: "continue",
        audioText: "Die deutsche Mentalität hat sich nach dem Krieg stark verändert."
      },
      // Vežbe
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
  },
]
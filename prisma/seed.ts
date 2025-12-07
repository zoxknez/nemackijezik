import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient, Level, Category, PartOfSpeech, Gender } from "@prisma/client"
import { hash } from "bcryptjs"
import { config } from "dotenv"

// Load environment variables
config({ path: ".env.local" })

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("🌱 Seeding database...")

  // Create demo user
  const hashedPassword = await hash("demo123", 12)
  
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@deutschmaster.rs" },
    update: {
      emailVerified: new Date(),
    },
    create: {
      email: "demo@deutschmaster.rs",
      name: "Demo Korisnik",
      password: hashedPassword,
      currentLevel: Level.A1,
      xpPoints: 250,
      streak: 5,
      longestStreak: 7,
      dailyGoal: 30,
      soundEnabled: true,
      emailVerified: new Date(),
    },
  })

  console.log("✅ Demo user created:", demoUser.email)

  // Create additional demo users
  const demoUser2 = await prisma.user.upsert({
    where: { email: "marko@demo.rs" },
    update: { emailVerified: new Date() },
    create: {
      email: "marko@demo.rs",
      name: "Marko Petrović",
      password: hashedPassword,
      currentLevel: Level.A2,
      xpPoints: 1250,
      streak: 12,
      longestStreak: 15,
      dailyGoal: 45,
      soundEnabled: true,
      emailVerified: new Date(),
    },
  })

  const demoUser3 = await prisma.user.upsert({
    where: { email: "ana@demo.rs" },
    update: { emailVerified: new Date() },
    create: {
      email: "ana@demo.rs",
      name: "Ana Jovanović",
      password: hashedPassword,
      currentLevel: Level.B1,
      xpPoints: 3500,
      streak: 25,
      longestStreak: 30,
      dailyGoal: 60,
      soundEnabled: true,
      emailVerified: new Date(),
    },
  })

  const demoUser4 = await prisma.user.upsert({
    where: { email: "test@test.com" },
    update: { emailVerified: new Date() },
    create: {
      email: "test@test.com",
      name: "Test User",
      password: hashedPassword,
      currentLevel: Level.A1,
      xpPoints: 0,
      streak: 0,
      longestStreak: 0,
      dailyGoal: 30,
      soundEnabled: true,
      emailVerified: new Date(),
    },
  })

  console.log("✅ Additional demo users created:", demoUser2.email, demoUser3.email, demoUser4.email)

  // Create units first
  const unit1 = await prisma.unit.upsert({
    where: { level_order: { level: Level.A1, order: 1 } },
    update: {},
    create: {
      title: "Osnove",
      titleDe: "Grundlagen",
      description: "Osnovne fraze i pozdravi na nemačkom jeziku.",
      level: Level.A1,
      order: 1,
    },
  })

  const unit2 = await prisma.unit.upsert({
    where: { level_order: { level: Level.A1, order: 2 } },
    update: {},
    create: {
      title: "Svakodnevica",
      titleDe: "Alltag",
      description: "Svakodnevne aktivnosti i rutine.",
      level: Level.A1,
      order: 2,
    },
  })

  console.log("✅ Units created")

  // Create lessons
  const lesson1 = await prisma.lesson.upsert({
    where: { level_category_order: { level: Level.A1, category: Category.VOCABULARY, order: 1 } },
    update: {},
    create: {
      title: "Pozdravi i predstavljanje",
      titleDe: "Begrüßungen und Vorstellung",
      description: "Nauči kako da se predstaviš i pozdraviš na nemačkom jeziku.",
      level: Level.A1,
      category: Category.VOCABULARY,
      order: 1,
      duration: 15,
      xpReward: 50,
      isPublished: true,
      unitId: unit1.id,
      content: {},
    },
  })

  const lesson2 = await prisma.lesson.upsert({
    where: { level_category_order: { level: Level.A1, category: Category.VOCABULARY, order: 2 } },
    update: {},
    create: {
      title: "Brojevi od 1 do 20",
      titleDe: "Zahlen von 1 bis 20",
      description: "Savladaj osnovne brojeve na nemačkom.",
      level: Level.A1,
      category: Category.VOCABULARY,
      order: 2,
      duration: 12,
      xpReward: 40,
      isPublished: true,
      unitId: unit1.id,
      content: {},
    },
  })

  const lesson3 = await prisma.lesson.upsert({
    where: { level_category_order: { level: Level.A1, category: Category.VOCABULARY, order: 3 } },
    update: {},
    create: {
      title: "Porodica i prijatelji",
      titleDe: "Familie und Freunde",
      description: "Rečnik za članove porodice i opisivanje odnosa.",
      level: Level.A1,
      category: Category.VOCABULARY,
      order: 3,
      duration: 20,
      xpReward: 60,
      isPublished: true,
      unitId: unit1.id,
      content: {},
    },
  })

  console.log("✅ Lessons created")

  // Create vocabulary
  const vocabularyData = [
    { word: "Mutter", translation: "majka", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.FEMININE, plural: "Mütter", level: Level.A1, category: "Porodica", example: "Meine Mutter kocht sehr gut.", exampleTrans: "Moja majka kuva veoma dobro." },
    { word: "Vater", translation: "otac", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.MASCULINE, plural: "Väter", level: Level.A1, category: "Porodica", example: "Der Vater arbeitet im Büro.", exampleTrans: "Otac radi u kancelariji." },
    { word: "Schwester", translation: "sestra", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.FEMININE, plural: "Schwestern", level: Level.A1, category: "Porodica", example: "Ich habe zwei Schwestern.", exampleTrans: "Imam dve sestre." },
    { word: "Bruder", translation: "brat", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.MASCULINE, plural: "Brüder", level: Level.A1, category: "Porodica", example: "Mein Bruder ist älter als ich.", exampleTrans: "Moj brat je stariji od mene." },
    { word: "Großmutter", translation: "baka", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.FEMININE, plural: "Großmütter", level: Level.A1, category: "Porodica", example: "Die Großmutter erzählt Geschichten.", exampleTrans: "Baka priča priče." },
    { word: "Großvater", translation: "deda", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.MASCULINE, plural: "Großväter", level: Level.A1, category: "Porodica", example: "Der Großvater ist schon 80 Jahre alt.", exampleTrans: "Deda ima već 80 godina." },
    { word: "Freund", translation: "prijatelj", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.MASCULINE, plural: "Freunde", level: Level.A1, category: "Ljudi", example: "Er ist mein bester Freund.", exampleTrans: "On je moj najbolji prijatelj." },
    { word: "Kind", translation: "dete", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.NEUTER, plural: "Kinder", level: Level.A1, category: "Ljudi", example: "Das Kind spielt im Park.", exampleTrans: "Dete se igra u parku." },
    { word: "arbeiten", translation: "raditi", partOfSpeech: PartOfSpeech.VERB, level: Level.A1, category: "Glagoli", example: "Ich arbeite jeden Tag.", exampleTrans: "Radim svakog dana." },
    { word: "lernen", translation: "učiti", partOfSpeech: PartOfSpeech.VERB, level: Level.A1, category: "Glagoli", example: "Ich lerne Deutsch.", exampleTrans: "Učim nemački." },
    { word: "sprechen", translation: "govoriti", partOfSpeech: PartOfSpeech.VERB, level: Level.A1, category: "Glagoli", example: "Ich spreche drei Sprachen.", exampleTrans: "Govorim tri jezika." },
    { word: "Hallo", translation: "zdravo", partOfSpeech: PartOfSpeech.INTERJECTION, level: Level.A1, category: "Pozdravi", example: "Hallo, wie geht es dir?", exampleTrans: "Zdravo, kako si?" },
    { word: "Brot", translation: "hleb", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.NEUTER, plural: "Brote", level: Level.A1, category: "Hrana", example: "Ich kaufe frisches Brot.", exampleTrans: "Kupujem svež hleb." },
    { word: "Wasser", translation: "voda", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.NEUTER, level: Level.A1, category: "Hrana", example: "Ein Glas Wasser, bitte.", exampleTrans: "Čašu vode, molim." },
    { word: "Kaffee", translation: "kafa", partOfSpeech: PartOfSpeech.NOUN, gender: Gender.MASCULINE, level: Level.A1, category: "Hrana", example: "Ich trinke jeden Morgen Kaffee.", exampleTrans: "Pijem kafu svakog jutra." },
  ]

  for (const vocab of vocabularyData) {
    await prisma.vocabulary.upsert({
      where: { word_partOfSpeech: { word: vocab.word, partOfSpeech: vocab.partOfSpeech } },
      update: {},
      create: vocab,
    })
  }

  console.log("✅ Vocabulary created:", vocabularyData.length, "words")

  // Create achievements
  const achievementsData = [
    { name: "Prva lekcija", nameDe: "Erste Lektion", description: "Završi svoju prvu lekciju", icon: "🎯", category: "learning", xpReward: 25, condition: { type: "lessons_completed", value: 1 } },
    { name: "Marljivi učenik", nameDe: "Fleißiger Schüler", description: "Završi 10 lekcija", icon: "📚", category: "learning", xpReward: 100, condition: { type: "lessons_completed", value: 10 } },
    { name: "Početnik", nameDe: "Anfänger", description: "Dostini A1 nivo", icon: "🌱", category: "level", xpReward: 50, condition: { type: "level", value: "A1" } },
    { name: "Nedelja učenja", nameDe: "Lernwoche", description: "Održi seriju od 7 dana", icon: "🔥", category: "streak", xpReward: 75, condition: { type: "streak", value: 7 } },
    { name: "Rečnik osnovni", nameDe: "Grundwortschatz", description: "Nauči 50 reči", icon: "📖", category: "vocabulary", xpReward: 50, condition: { type: "vocabulary_mastered", value: 50 } },
    { name: "Perfekcionista", nameDe: "Perfektionist", description: "Završi lekciju bez greške", icon: "⭐", category: "skill", xpReward: 40, condition: { type: "perfect_lesson", value: true } },
  ]

  for (const achievement of achievementsData) {
    await prisma.achievement.upsert({
      where: { name: achievement.name },
      update: {},
      create: achievement,
    })
  }

  console.log("✅ Achievements created:", achievementsData.length)

  // Create user progress for demo user
  await prisma.userProgress.upsert({
    where: { userId_lessonId: { userId: demoUser.id, lessonId: lesson1.id } },
    update: {},
    create: {
      userId: demoUser.id,
      lessonId: lesson1.id,
      completed: true,
      score: 95,
      bestScore: 95,
      timeSpent: 12,
      completedAt: new Date(),
    },
  })

  await prisma.userProgress.upsert({
    where: { userId_lessonId: { userId: demoUser.id, lessonId: lesson2.id } },
    update: {},
    create: {
      userId: demoUser.id,
      lessonId: lesson2.id,
      completed: true,
      score: 88,
      bestScore: 88,
      timeSpent: 10,
      completedAt: new Date(),
    },
  })

  console.log("✅ User progress created")

  // Create streak history for demo user
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    date.setHours(0, 0, 0, 0)
    
    await prisma.streakHistory.upsert({
      where: { userId_date: { userId: demoUser.id, date } },
      update: {},
      create: {
        userId: demoUser.id,
        date,
        xpEarned: Math.floor(Math.random() * 50) + 20,
        goalMet: true,
      },
    })
  }

  console.log("✅ Streak history created")

  console.log("✨ Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

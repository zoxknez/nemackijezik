import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/prijava",
    newUser: "/registracija",
    error: "/greska",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Lozinka", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email i lozinka su obavezni")
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        })

        if (!user || !user.password) {
          throw new Error("Korisnik nije pronađen")
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error("Pogrešna lozinka")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
      }
      
      // Handle session updates
      if (trigger === "update" && session) {
        token = { ...token, ...session }
      }
      
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        
        // Fetch fresh user data from database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: {
            currentLevel: true,
            xpPoints: true,
            streak: true,
            dailyGoal: true,
          },
        })
        
        if (dbUser) {
          Object.assign(session.user, {
            level: dbUser.currentLevel,
            xp: dbUser.xpPoints,
            streak: dbUser.streak,
            dailyGoal: dbUser.dailyGoal,
          });
        }
      }
      return session
    },
    async signIn({ account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true

      // For credentials, always allow (emailVerified is set on registration)
      return true
    },
  },
  events: {
    async createUser({ user }) {
      // Create initial achievements for new users
      const achievements = await prisma.achievement.findMany({
        where: { category: "ONBOARDING" },
      })

      if (achievements.length > 0 && user.id) {
        await prisma.userAchievement.createMany({
          data: achievements.map((a: { id: string }) => ({
            userId: user.id!,
            achievementId: a.id,
          })),
        })
      }
    },
    async signIn({ user, isNewUser }) {
      if (!isNewUser && user.id) {
        // Update streak on sign in
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        
        const lastActivity = await prisma.user.findUnique({
          where: { id: user.id },
          select: { lastActiveAt: true, streak: true },
        })

        if (lastActivity?.lastActiveAt) {
          const lastActive = new Date(lastActivity.lastActiveAt)
          lastActive.setHours(0, 0, 0, 0)
          
          const dayDiff = Math.floor(
            (today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
          )

          if (dayDiff === 1) {
            // Consecutive day - increment streak
            await prisma.user.update({
              where: { id: user.id },
              data: {
                streak: { increment: 1 },
                lastActiveAt: new Date(),
              },
            })
          } else if (dayDiff > 1) {
            // Streak broken - reset
            await prisma.user.update({
              where: { id: user.id },
              data: {
                streak: 1,
                lastActiveAt: new Date(),
              },
            })
          }
        }
      }
    },
  },
  trustHost: true,
})

// Type extensions
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image?: string
      level: string
      xp: number
      streak: number
      dailyGoal: number
    }
  }
}

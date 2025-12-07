import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { BookOpen, Mic, Brain, Award } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Nemački Jezik Platforma
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Od Slova do Rečenice - Audio-First Pristup Učenju
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/lessons">
              <Button size="lg">
                <BookOpen className="w-5 h-5" />
                Počni Lekcije
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="secondary" size="lg">
                Prijavi Se
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-dark-surface rounded-lg border border-dark-border">
            <div className="w-12 h-12 bg-der-blue/20 rounded-lg flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-der-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trening Sluha</h3>
            <p className="text-gray-400">
              Minimalni parovi i kalibracija sluha za razlikovanje nemačkih zvukova
            </p>
          </div>
          
          <div className="p-6 bg-dark-surface rounded-lg border border-dark-border">
            <div className="w-12 h-12 bg-die-red/20 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-die-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Artikulacija</h3>
            <p className="text-gray-400">
              Fizičke vežbe za pravilno izgovaranje nemačkih glasova
            </p>
          </div>
          
          <div className="p-6 bg-dark-surface rounded-lg border border-dark-border">
            <div className="w-12 h-12 bg-das-green/20 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-das-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Interaktivno</h3>
            <p className="text-gray-400">
              AI-powered feedback i personalizovano učenje
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

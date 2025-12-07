'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { lessonsApi } from '@/lib/api'
import { Lesson } from '@/types'
import { Play } from 'lucide-react'

export default function LessonsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadLessons()
  }, [])

  const loadLessons = async () => {
    try {
      const response = await lessonsApi.getAll()
      setLessons(response.data)
    } catch (error) {
      console.error('Error loading lessons:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-gray-400">Učitavanje lekcija...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Lekcije</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lessons/${lesson.id}`}
              className="bg-dark-surface border-2 border-dark-border rounded-lg p-6 hover:border-der-blue transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold mb-2">{lesson.title}</h2>
                  <div className="text-sm text-gray-400">
                    Nivo: {lesson.level} • {lesson.durationMinutes} min
                  </div>
                </div>
                <Play className="w-6 h-6 text-der-blue" />
              </div>
            </Link>
          ))}
        </div>

        {lessons.length === 0 && (
          <div className="text-center text-gray-400 py-16">
            Nema dostupnih lekcija. Kontaktirajte administratora.
          </div>
        )}
      </div>
    </div>
  )
}


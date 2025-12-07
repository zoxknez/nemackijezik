'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { lessonsApi } from '@/lib/api'
import { Lesson, LessonModule } from '@/types'
import { HearingCalibrationModule } from '@/components/modules/HearingCalibrationModule'
import { ArticulationModule } from '@/components/modules/ArticulationModule'
import { WordsModule } from '@/components/modules/WordsModule'
import { SentencesModule } from '@/components/modules/SentencesModule'
import { AlphabetModule } from '@/components/modules/AlphabetModule'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [modules, setModules] = useState<LessonModule[]>([])
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadLesson()
  }, [params.id])

  const loadLesson = async () => {
    try {
      setIsLoading(true)
      const lessonResponse = await lessonsApi.getById(params.id as string)
      setLesson(lessonResponse.data)

      const modulesResponse = await lessonsApi.getModules(params.id as string)
      setModules(modulesResponse.data)
    } catch (error) {
      console.error('Error loading lesson:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleModuleComplete = (score: number) => {
    console.log('Module completed with score:', score)
    // Move to next module or complete lesson
    if (currentModuleIndex < modules.length - 1) {
      setTimeout(() => {
        setCurrentModuleIndex(currentModuleIndex + 1)
      }, 1000)
    }
  }

  const renderModule = () => {
    if (modules.length === 0) return null

    const module = modules[currentModuleIndex]
    const config = module.config as any

    switch (module.moduleType) {
      case 'hearing':
        // Get first exercise from module
        return (
          <HearingCalibrationModule
            exerciseId={config.exercises?.[0]?.id || ''}
            onComplete={handleModuleComplete}
          />
        )
      case 'articulation':
        return <ArticulationModule moduleId={module.id} config={config} />
      case 'words':
        return <WordsModule moduleId={module.id} config={config} />
      case 'sentences':
        return <SentencesModule moduleId={module.id} config={config} />
      case 'alphabet':
        return <AlphabetModule moduleId={module.id} config={config} />
      default:
        return <div>Unknown module type</div>
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-gray-400">Učitavanje lekcije...</div>
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-red-400">Lekcija nije pronađena</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Header */}
      <div className="border-b border-dark-border bg-dark-surface">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              <p className="text-gray-400 text-sm">Nivo: {lesson.level}</p>
            </div>
            <button
              onClick={() => router.push('/lessons')}
              className="px-4 py-2 bg-dark-border rounded-lg hover:bg-dark-border/80"
            >
              Nazad
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="border-b border-dark-border bg-dark-surface">
        <div className="container mx-auto px-4 py-2">
          <div className="flex gap-2">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`h-2 flex-1 rounded ${
                  index < currentModuleIndex
                    ? 'bg-das-green'
                    : index === currentModuleIndex
                    ? 'bg-der-blue'
                    : 'bg-dark-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Module Navigation */}
      {modules.length > 1 && (
        <div className="border-b border-dark-border bg-dark-surface">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentModuleIndex(Math.max(0, currentModuleIndex - 1))}
                disabled={currentModuleIndex === 0}
                className="flex items-center gap-2 px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                Prethodni
              </button>

              <div className="text-sm text-gray-400">
                Modul {currentModuleIndex + 1} od {modules.length}
              </div>

              <button
                onClick={() =>
                  setCurrentModuleIndex(Math.min(modules.length - 1, currentModuleIndex + 1))
                }
                disabled={currentModuleIndex === modules.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-dark-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sledeći
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Module Content */}
      <div className="container mx-auto px-4 py-8">
        {renderModule()}
      </div>
    </div>
  )
}


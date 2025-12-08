'use client'

import { useEffect, useState } from 'react'
import { progressApi } from '@/lib/api'
import { UserProgress } from '@/types'
import { CheckCircle, Circle } from 'lucide-react'

export function ProgressTracker() {
  const [progress, setProgress] = useState<UserProgress[]>([])
  const [statistics, setStatistics] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadProgress()
  }, [])

  const loadProgress = async () => {
    try {
      const [progressResponse, statsResponse] = await Promise.all([
        progressApi.get(),
        progressApi.getStatistics(),
      ])
      setProgress(progressResponse.data)
      setStatistics(statsResponse.data)
    } catch (error) {
      console.error('Error loading progress:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="text-gray-400">Učitavanje progressa...</div>
  }

  return (
    <div className="space-y-6">
      {/* Statistics */}
      {statistics && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-dark-surface rounded-lg p-4">
            <div className="text-2xl font-bold">{statistics.overall?.total_exercises || 0}</div>
            <div className="text-sm text-gray-400">Ukupno Vežbi</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4">
            <div className="text-2xl font-bold text-das-green">
              {statistics.overall?.completed_exercises || 0}
            </div>
            <div className="text-sm text-gray-400">Završeno</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4">
            <div className="text-2xl font-bold text-der-blue">
              {Math.round(statistics.overall?.average_score || 0)}%
            </div>
            <div className="text-sm text-gray-400">Prosečan Rezultat</div>
          </div>
          <div className="bg-dark-surface rounded-lg p-4">
            <div className="text-2xl font-bold">{statistics.overall?.total_attempts || 0}</div>
            <div className="text-sm text-gray-400">Pokušaja</div>
          </div>
        </div>
      )}

      {/* Progress by Module */}
      {statistics?.byModule && (
        <div className="bg-dark-surface rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Progress po Modulima</h3>
          <div className="space-y-4">
            {statistics.byModule.map((module: any) => (
              <div key={module.module_type}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold capitalize">{module.module_type}</span>
                  <span className="text-sm text-gray-400">
                    {module.completed} / {module.total}
                  </span>
                </div>
                <div className="w-full bg-dark-border rounded-full h-2">
                  <div
                    className="bg-der-blue h-2 rounded-full transition-all"
                    style={{
                      width: `${(module.completed / module.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Progress */}
      <div className="bg-dark-surface rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Nedavni Progress</h3>
        <div className="space-y-2">
          {progress.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 bg-dark-border rounded-lg"
            >
              <div className="flex items-center gap-3">
                {item.completed ? (
                  <CheckCircle className="w-5 h-5 text-das-green" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-600" />
                )}
                <div>
                  <div className="text-sm font-semibold">{item.exerciseType || 'Vežba'}</div>
                  <div className="text-xs text-gray-400">
                    {new Date(item.completedAt || item.createdAt || new Date()).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">{Math.round(item.score)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


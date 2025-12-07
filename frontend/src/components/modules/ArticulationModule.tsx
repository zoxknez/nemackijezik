'use client'

import { useState, useRef, useEffect } from 'react'
import { Video, Camera, CheckCircle } from 'lucide-react'

interface ArticulationModuleProps {
  moduleId: string
  config: any
}

export function ArticulationModule({ moduleId, config }: ArticulationModuleProps) {
  const [isMirrorMode, setIsMirrorMode] = useState(false)
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    if (isMirrorMode && videoRef.current) {
      startCamera()
    } else {
      stopCamera()
    }

    return () => {
      stopCamera()
    }
  }, [isMirrorMode])

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false,
      })
      setVideoStream(stream)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      alert('Ne možemo da pristupimo kameri. Proverite dozvole.')
    }
  }

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop())
      setVideoStream(null)
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  // Mock face detection - in production, use MediaPipe
  const checkMouthPosition = () => {
    // Simulate AI detection
    setTimeout(() => {
      setIsCorrect(true)
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Teretana za Usta</h2>
        <p className="text-gray-400">{config.description || 'Fizičke vežbe za pravilno izgovaranje'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instructor Video */}
        <div className="bg-dark-surface rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Instruktor</h3>
          {config.video_url ? (
            <video
              src={config.video_url}
              controls
              className="w-full rounded-lg"
            />
          ) : (
            <div className="aspect-video bg-dark-border rounded-lg flex items-center justify-center">
              <Video className="w-16 h-16 text-gray-600" />
            </div>
          )}
          <div className="mt-4 text-sm text-gray-400">
            {config.instructions || 'Pogledajte kako instruktor izgovara zvuk'}
          </div>
        </div>

        {/* Mirror Mode */}
        <div className="bg-dark-surface rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tvoj Pokušaj</h3>
            <button
              onClick={() => setIsMirrorMode(!isMirrorMode)}
              className={`px-4 py-2 rounded-lg ${
                isMirrorMode ? 'bg-die-red' : 'bg-dark-border'
              } flex items-center gap-2`}
            >
              <Camera className="w-5 h-5" />
              {isMirrorMode ? 'Isključi' : 'Uključi'} Kameru
            </button>
          </div>

          {isMirrorMode ? (
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full rounded-lg"
                style={{ transform: 'scaleX(-1)' }}
              />
              {isCorrect && (
                <div className="absolute inset-0 border-4 border-das-green rounded-lg flex items-center justify-center bg-black/50">
                  <CheckCircle className="w-16 h-16 text-das-green" />
                </div>
              )}
              <button
                onClick={checkMouthPosition}
                className="mt-4 w-full px-4 py-2 bg-der-blue rounded-lg hover:bg-blue-600"
              >
                Proveri Položaj Usana
              </button>
            </div>
          ) : (
            <div className="aspect-video bg-dark-border rounded-lg flex items-center justify-center">
              <Camera className="w-16 h-16 text-gray-600" />
              <p className="text-gray-400 ml-4">Uključi kameru da počneš</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


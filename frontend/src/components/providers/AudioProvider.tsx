'use client'

import { createContext, useContext, useRef, useState, ReactNode } from 'react'
import { Howl } from 'howler'

interface AudioContextType {
  playAudio: (url: string) => Promise<void>
  stopAudio: () => void
  isPlaying: boolean
  currentAudio: Howl | null
  recordAudio: () => Promise<void>
  stopRecording: () => Promise<Blob | null>
  isRecording: boolean
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const currentAudioRef = useRef<Howl | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const playAudio = async (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Stop current audio if playing
      if (currentAudioRef.current) {
        currentAudioRef.current.stop()
      }

      const sound = new Howl({
        src: [url],
        html5: true,
        onplay: () => setIsPlaying(true),
        onend: () => {
          setIsPlaying(false)
          resolve()
        },
        onloaderror: (_id, error) => {
          setIsPlaying(false)
          reject(error)
        },
        onplayerror: (_id, error) => {
          setIsPlaying(false)
          reject(error)
        },
      })

      currentAudioRef.current = sound
      sound.play()
    })
  }

  const stopAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.stop()
      currentAudioRef.current = null
      setIsPlaying(false)
    }
  }

  const recordAudio = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error starting recording:', error)
      throw error
    }
  }

  const stopRecording = (): Promise<Blob | null> => {
    return new Promise((resolve) => {
      if (!mediaRecorderRef.current || !isRecording) {
        resolve(null)
        return
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        setIsRecording(false)
        mediaRecorderRef.current?.stream.getTracks().forEach(track => track.stop())
        resolve(audioBlob)
      }

      mediaRecorderRef.current.stop()
    })
  }

  return (
    <AudioContext.Provider
      value={{
        playAudio,
        stopAudio,
        isPlaying,
        currentAudio: currentAudioRef.current,
        recordAudio,
        stopRecording,
        isRecording,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}


import { useState, useRef, useEffect } from 'react'
import { Howl } from 'howler'

export function useAudioPlayer(url: string | null) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const soundRef = useRef<Howl | null>(null)

  useEffect(() => {
    if (!url) return

    const sound = new Howl({
      src: [url],
      html5: true,
      onload: () => {
        setDuration(sound.duration())
      },
      onplay: () => {
        setIsPlaying(true)
        updateProgress()
      },
      onpause: () => {
        setIsPlaying(false)
      },
      onend: () => {
        setIsPlaying(false)
        setProgress(0)
      },
    })

    soundRef.current = sound

    return () => {
      sound.unload()
    }
  }, [url])

  const updateProgress = () => {
    if (!soundRef.current) return

    const interval = setInterval(() => {
      if (soundRef.current && soundRef.current.playing()) {
        const seek = soundRef.current.seek() as number
        setProgress(seek)
      } else {
        clearInterval(interval)
      }
    }, 100)
  }

  const play = () => {
    soundRef.current?.play()
  }

  const pause = () => {
    soundRef.current?.pause()
  }

  const stop = () => {
    soundRef.current?.stop()
    setProgress(0)
  }

  const seek = (time: number) => {
    soundRef.current?.seek(time)
    setProgress(time)
  }

  return {
    isPlaying,
    progress,
    duration,
    play,
    pause,
    stop,
    seek,
  }
}


import { useState, useEffect } from 'react'

interface GyroscopeData {
  x: number
  y: number
  z: number
}

export function useGyroscope() {
  const [data, setData] = useState<GyroscopeData | null>(null)
  const [isSupported, setIsSupported] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Check if DeviceOrientationEvent is supported
    if (!window.DeviceOrientationEvent) {
      setIsSupported(false)
      setError('Gyroscope not supported')
      return
    }

    setIsSupported(true)

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.beta !== null && event.gamma !== null && event.alpha !== null) {
        setData({
          x: event.beta, // Front-back tilt
          y: event.gamma, // Left-right tilt
          z: event.alpha, // Compass direction
        })
      }
    }

    // Request permission (iOS 13+)
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      ;(DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleOrientation)
          } else {
            setError('Permission denied')
          }
        })
        .catch(() => {
          setError('Permission error')
        })
    } else {
      window.addEventListener('deviceorientation', handleOrientation)
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return { data, isSupported, error }
}


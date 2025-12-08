/**
 * Sound Effects for the app
 * Using Web Audio API for better performance
 */

// Sound effect URLs (using free sound effects)
const SOUNDS = {
  correct: "/sounds/correct.mp3",
  wrong: "/sounds/wrong.mp3",
  levelUp: "/sounds/level-up.mp3",
  click: "/sounds/click.mp3",
  flip: "/sounds/flip.mp3",
  complete: "/sounds/complete.mp3",
  streak: "/sounds/streak.mp3",
} as const

type SoundType = keyof typeof SOUNDS

// Audio context singleton
let audioContext: AudioContext | null = null

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
  }
  return audioContext
}

// Cache for loaded audio buffers
const audioBuffers: Map<string, AudioBuffer> = new Map()

/**
 * Preload sound effects
 */
export async function preloadSounds(): Promise<void> {
  const context = getAudioContext()
  
  for (const [, url] of Object.entries(SOUNDS)) {
    try {
      const response = await fetch(url)
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await context.decodeAudioData(arrayBuffer)
      audioBuffers.set(url, audioBuffer)
    } catch {
      console.warn(`Could not preload sound: ${url}`)
    }
  }
}

/**
 * Play a sound effect
 */
export function playSound(type: SoundType, volume: number = 0.5): void {
  // Check if sounds are enabled in settings
  const soundEnabled = localStorage.getItem('soundEnabled') !== 'false'
  if (!soundEnabled) return

  const url = SOUNDS[type]
  
  // Try cached buffer first
  const buffer = audioBuffers.get(url)
  if (buffer) {
    const context = getAudioContext()
    const source = context.createBufferSource()
    const gainNode = context.createGain()
    
    source.buffer = buffer
    gainNode.gain.value = volume
    
    source.connect(gainNode)
    gainNode.connect(context.destination)
    source.start()
    return
  }
  
  // Fallback to HTML Audio
  try {
    const audio = new Audio(url)
    audio.volume = volume
    audio.play().catch(() => {
      // Silently fail if audio can't play (e.g., user hasn't interacted)
    })
  } catch {
    // Silently fail
  }
}

/**
 * Play success sound with haptic feedback
 */
export function playCorrectSound(): void {
  playSound("correct", 0.6)
  
  // Haptic feedback on mobile
  if ('vibrate' in navigator) {
    navigator.vibrate(50)
  }
}

/**
 * Play error sound with haptic feedback
 */
export function playWrongSound(): void {
  playSound("wrong", 0.5)
  
  // Haptic feedback on mobile - double pulse
  if ('vibrate' in navigator) {
    navigator.vibrate([50, 50, 50])
  }
}

/**
 * Play click sound (for button presses)
 */
export function playClickSound(): void {
  playSound("click", 0.3)
}

/**
 * Play celebration sound (level up, achievement)
 */
export function playCelebrationSound(): void {
  playSound("levelUp", 0.7)
  
  if ('vibrate' in navigator) {
    navigator.vibrate([100, 50, 100, 50, 200])
  }
}

/**
 * Play streak sound
 */
export function playStreakSound(): void {
  playSound("streak", 0.5)
}

/**
 * Synth-generated sounds as fallback
 * These don't require external files
 */
export function playSynthCorrect(): void {
  const soundEnabled = localStorage.getItem('soundEnabled') !== 'false'
  if (!soundEnabled) return

  try {
    const context = getAudioContext()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(context.destination)
    
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(523.25, context.currentTime) // C5
    oscillator.frequency.setValueAtTime(659.25, context.currentTime + 0.1) // E5
    oscillator.frequency.setValueAtTime(783.99, context.currentTime + 0.2) // G5
    
    gainNode.gain.setValueAtTime(0.3, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.4)
    
    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + 0.4)
  } catch {
    // Silently fail
  }
}

export function playSynthWrong(): void {
  const soundEnabled = localStorage.getItem('soundEnabled') !== 'false'
  if (!soundEnabled) return

  try {
    const context = getAudioContext()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(context.destination)
    
    oscillator.type = 'sawtooth'
    oscillator.frequency.setValueAtTime(200, context.currentTime)
    oscillator.frequency.setValueAtTime(150, context.currentTime + 0.15)
    
    gainNode.gain.setValueAtTime(0.2, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3)
    
    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + 0.3)
  } catch {
    // Silently fail
  }
}

export function playSynthClick(): void {
  const soundEnabled = localStorage.getItem('soundEnabled') !== 'false'
  if (!soundEnabled) return

  try {
    const context = getAudioContext()
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(context.destination)
    
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(800, context.currentTime)
    
    gainNode.gain.setValueAtTime(0.1, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.05)
    
    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + 0.05)
  } catch {
    // Silently fail
  }
}

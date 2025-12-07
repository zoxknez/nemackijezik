// Audio utility functions for waveform visualization and processing

export async function loadAudioBuffer(url: string): Promise<AudioBuffer> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const audioContext = new AudioContext()
  return await audioContext.decodeAudioData(arrayBuffer)
}

export function drawWaveform(
  canvas: HTMLCanvasElement,
  audioBuffer: AudioBuffer,
  width: number = canvas.width,
  height: number = canvas.height
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.fillStyle = '#3b82f6'
  ctx.clearRect(0, 0, width, height)

  const data = audioBuffer.getChannelData(0)
  const step = Math.ceil(data.length / width)
  const amp = height / 2

  ctx.beginPath()
  ctx.moveTo(0, amp)

  for (let i = 0; i < width; i++) {
    const index = i * step
    const sample = data[index]
    const x = i
    const y = amp + sample * amp

    ctx.lineTo(x, y)
  }

  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.stroke()
}

export function drawWaveformSegment(
  canvas: HTMLCanvasElement,
  audioBuffer: AudioBuffer,
  startTime: number,
  endTime: number,
  highlightColor: string = '#10b981'
) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const sampleRate = audioBuffer.sampleRate
  const startSample = Math.floor(startTime * sampleRate)
  const endSample = Math.floor(endTime * sampleRate)
  const width = canvas.width
  const height = canvas.height
  const amp = height / 2

  const data = audioBuffer.getChannelData(0)
  const segmentLength = endSample - startSample
  const step = Math.ceil(segmentLength / width)

  ctx.fillStyle = highlightColor
  ctx.beginPath()

  for (let i = 0; i < width; i++) {
    const index = startSample + i * step
    if (index >= endSample) break

    const sample = data[index]
    const x = i
    const y = amp + sample * amp

    if (i === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
  }

  ctx.strokeStyle = highlightColor
  ctx.lineWidth = 3
  ctx.stroke()
}

export function getAudioDuration(url: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url)
    audio.addEventListener('loadedmetadata', () => {
      resolve(audio.duration)
    })
    audio.addEventListener('error', reject)
    audio.src = url
  })
}

export function playAudioSegment(
  audioBuffer: AudioBuffer,
  startTime: number,
  endTime: number,
  audioContext: AudioContext
): Promise<void> {
  return new Promise((resolve) => {
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer

    const gainNode = audioContext.createGain()
    source.connect(gainNode)
    gainNode.connect(audioContext.destination)

    source.start(0, startTime)
    source.stop(audioContext.currentTime + (endTime - startTime))

    source.onended = () => {
      resolve()
    }
  })
}


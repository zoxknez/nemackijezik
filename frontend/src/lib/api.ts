import axios from 'axios'
import { handleApiError } from './errorHandler'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 - Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/auth/login'
    }
    return Promise.reject(error)
  }
)

export default api

// API functions
export const lessonsApi = {
  getAll: () => api.get('/api/lessons'),
  getById: (id: string) => api.get(`/api/lessons/${id}`),
  getModules: (lessonId: string) => api.get(`/api/lessons/${lessonId}/modules`),
}

export const exercisesApi = {
  getById: (id: string) => api.get(`/api/exercises/${id}`),
  submit: (id: string, data: any) => api.post(`/api/exercises/${id}/submit`, data),
  uploadAudio: (id: string, audioBlob: Blob) => {
    const formData = new FormData()
    formData.append('audio', audioBlob, 'recording.wav')
    return api.post(`/api/exercises/${id}/audio`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

export const progressApi = {
  get: () => api.get('/api/progress'),
  update: (data: any) => api.post('/api/progress', data),
  getStatistics: () => api.get('/api/progress/statistics'),
}

export const aiApi = {
  analyzeSpeech: (audioBlob: Blob) => {
    const formData = new FormData()
    formData.append('audio', audioBlob)
    return api.post('/api/ai/analyze-speech', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  compareWaveform: (audioBlob: Blob, referenceUrl: string) => {
    const formData = new FormData()
    formData.append('audio', audioBlob)
    formData.append('reference', referenceUrl)
    return api.post('/api/ai/compare-waveform', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

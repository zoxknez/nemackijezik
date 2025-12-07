// Centralized error handling utilities

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export function handleApiError(error: any): string {
  if (error.response) {
    // API returned an error response
    return error.response.data?.error || error.response.data?.message || 'Greška na serveru'
  } else if (error.request) {
    // Request was made but no response received
    return 'Nema odgovora sa servera. Proverite internet konekciju.'
  } else {
    // Something else happened
    return error.message || 'Nepoznata greška'
  }
}

export function isNetworkError(error: any): boolean {
  return !error.response && error.request
}

export function isServerError(error: any): boolean {
  return error.response?.status >= 500
}

export function isClientError(error: any): boolean {
  return error.response?.status >= 400 && error.response?.status < 500
}


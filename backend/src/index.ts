import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { db } from './db'
import authRoutes from './routes/auth'
import lessonsRoutes from './routes/lessons'
import exercisesRoutes from './routes/exercises'
import progressRoutes from './routes/progress'
import aiRoutes from './routes/ai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/lessons', lessonsRoutes)
app.use('/api/exercises', exercisesRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/ai', aiRoutes)

// Error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error & { status?: number }, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
  })
})

// Start server
async function start() {
  try {
    await db.connect()
    console.log('Database connected')

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

start()


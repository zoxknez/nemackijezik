import express from 'express'
import multer from 'multer'
import { db } from '../db'
import { authenticateToken, AuthRequest } from '../middleware/auth'
import path from 'path'
import fs from 'fs'

const router = express.Router()

// Configure multer for audio uploads
const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/webm']
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type. Only audio files are allowed.'))
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
})

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

// Get exercise by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const result = await db.query(
      `SELECT e.*, em.module_type, em.lesson_id 
       FROM exercises e 
       JOIN lesson_modules em ON e.module_id = em.id 
       WHERE e.id = $1`,
      [id]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Exercise not found' })
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error('Get exercise error:', error)
    res.status(500).json({ error: 'Failed to fetch exercise' })
  }
})

// Submit exercise answer
router.post('/:id/submit', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const { answer, score } = req.body
    const userId = req.userId!

    // Get exercise
    const exerciseResult = await db.query('SELECT * FROM exercises WHERE id = $1', [id])
    if (exerciseResult.rows.length === 0) {
      return res.status(404).json({ error: 'Exercise not found' })
    }

    const exercise = exerciseResult.rows[0]
    const isCorrect = JSON.stringify(answer) === JSON.stringify(exercise.correct_answer)
    const finalScore = score !== undefined ? score : (isCorrect ? 100 : 0)

    // Update or create progress
    await db.query(
      `INSERT INTO user_progress (user_id, exercise_id, completed, score, attempts, completed_at)
       VALUES ($1, $2, $3, $4, 1, CURRENT_TIMESTAMP)
       ON CONFLICT (user_id, exercise_id)
       DO UPDATE SET 
         completed = $3,
         score = $4,
         attempts = user_progress.attempts + 1,
         completed_at = CASE WHEN $3 THEN CURRENT_TIMESTAMP ELSE user_progress.completed_at END`,
      [userId, id, isCorrect, finalScore]
    )

    res.json({
      correct: isCorrect,
      score: finalScore,
      correctAnswer: exercise.correct_answer,
    })
  } catch (error) {
    console.error('Submit exercise error:', error)
    res.status(500).json({ error: 'Failed to submit exercise' })
  }
})

// Upload audio for exercise
router.post('/:id/audio', authenticateToken, upload.single('audio'), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params
    const userId = req.userId!

    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' })
    }

    // Store file path (in production, upload to S3/Cloudinary)
    const audioUrl = `/uploads/${req.file.filename}`

    // Update progress with audio recording
    await db.query(
      `UPDATE user_progress 
       SET audio_recording_url = $1 
       WHERE user_id = $2 AND exercise_id = $3`,
      [audioUrl, userId, id]
    )

    res.json({
      audioUrl,
      message: 'Audio uploaded successfully',
    })
  } catch (error) {
    console.error('Upload audio error:', error)
    res.status(500).json({ error: 'Failed to upload audio' })
  }
})

export default router


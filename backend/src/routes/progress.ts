import express from 'express'
import { db } from '../db'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const router = express.Router()

// Get user progress
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.userId!

    const result = await db.query(
      `SELECT up.*, e.exercise_type, e.module_id, em.module_type, em.lesson_id
       FROM user_progress up
       JOIN exercises e ON up.exercise_id = e.id
       JOIN lesson_modules em ON e.module_id = em.id
       WHERE up.user_id = $1
       ORDER BY up.completed_at DESC`,
      [userId]
    )

    res.json(result.rows)
  } catch (error) {
    console.error('Get progress error:', error)
    res.status(500).json({ error: 'Failed to fetch progress' })
  }
})

// Update progress
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.userId!
    const { exerciseId, completed, score, audioRecordingUrl, aiFeedback } = req.body

    if (!exerciseId) {
      return res.status(400).json({ error: 'Exercise ID is required' })
    }

    await db.query(
      `INSERT INTO user_progress (user_id, exercise_id, completed, score, audio_recording_url, ai_feedback, completed_at)
       VALUES ($1, $2, $3, $4, $5, $6, CASE WHEN $3 THEN CURRENT_TIMESTAMP ELSE NULL END)
       ON CONFLICT (user_id, exercise_id)
       DO UPDATE SET 
         completed = $3,
         score = COALESCE($4, user_progress.score),
         audio_recording_url = COALESCE($5, user_progress.audio_recording_url),
         ai_feedback = COALESCE($6, user_progress.ai_feedback),
         attempts = user_progress.attempts + 1,
         completed_at = CASE WHEN $3 THEN CURRENT_TIMESTAMP ELSE user_progress.completed_at END`,
      [userId, exerciseId, completed || false, score, audioRecordingUrl, aiFeedback ? JSON.stringify(aiFeedback) : null]
    )

    res.json({ message: 'Progress updated successfully' })
  } catch (error) {
    console.error('Update progress error:', error)
    res.status(500).json({ error: 'Failed to update progress' })
  }
})

// Get statistics
router.get('/statistics', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.userId!

    // Get overall stats
    const statsResult = await db.query(
      `SELECT 
         COUNT(*) as total_exercises,
         COUNT(CASE WHEN completed THEN 1 END) as completed_exercises,
         AVG(score) as average_score,
         SUM(attempts) as total_attempts
       FROM user_progress
       WHERE user_id = $1`,
      [userId]
    )

    // Get progress by module type
    const moduleStatsResult = await db.query(
      `SELECT 
         em.module_type,
         COUNT(*) as total,
         COUNT(CASE WHEN up.completed THEN 1 END) as completed,
         AVG(up.score) as avg_score
       FROM user_progress up
       JOIN exercises e ON up.exercise_id = e.id
       JOIN lesson_modules em ON e.module_id = em.id
       WHERE up.user_id = $1
       GROUP BY em.module_type`,
      [userId]
    )

    res.json({
      overall: statsResult.rows[0],
      byModule: moduleStatsResult.rows,
    })
  } catch (error) {
    console.error('Get statistics error:', error)
    res.status(500).json({ error: 'Failed to fetch statistics' })
  }
})

export default router


import express from 'express'
import { db } from '../db'
import { authenticateToken, AuthRequest } from '../middleware/auth'

const router = express.Router()

// Get all lessons
router.get('/', async (req, res) => {
  try {
    const { level } = req.query

    let query = 'SELECT * FROM lessons'
    const params: any[] = []

    if (level) {
      query += ' WHERE level = $1 ORDER BY order_index'
      params.push(level)
    } else {
      query += ' ORDER BY order_index'
    }

    const result = await db.query(query, params)
    res.json(result.rows)
  } catch (error: any) {
    console.error('Get lessons error:', error)
    res.status(500).json({ error: 'Failed to fetch lessons' })
  }
})

// Get lesson by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const result = await db.query('SELECT * FROM lessons WHERE id = $1', [id])

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Lesson not found' })
    }

    res.json(result.rows[0])
  } catch (error: any) {
    console.error('Get lesson error:', error)
    res.status(500).json({ error: 'Failed to fetch lesson' })
  }
})

// Get modules for a lesson
router.get('/:id/modules', async (req, res) => {
  try {
    const { id } = req.params

    const result = await db.query(
      'SELECT * FROM lesson_modules WHERE lesson_id = $1 ORDER BY module_order',
      [id]
    )

    res.json(result.rows)
  } catch (error: any) {
    console.error('Get modules error:', error)
    res.status(500).json({ error: 'Failed to fetch modules' })
  }
})

export default router


import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export interface AuthRequest extends Request {
  userId?: string
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Access token required' })
  }

  jwt.verify(token, JWT_SECRET, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' })
    }
    
    if (decoded && typeof decoded === 'object' && 'userId' in decoded) {
      req.userId = (decoded as JwtPayload).userId
      next()
    } else {
      return res.status(403).json({ error: 'Invalid token payload' })
    }
  })
}


# Deployment Guide

## Frontend (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Run: `vercel`
4. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`

## Backend (Railway/Render)

### Railway:
1. Connect GitHub repository
2. Select backend directory
3. Set environment variables
4. Deploy

### Render:
1. Create new Web Service
2. Connect repository
3. Build command: `cd backend && npm install && npm run build`
4. Start command: `cd backend && npm start`
5. Set environment variables

## AI Service (Railway/Render)

1. Create new Web Service
2. Build command: `cd ai-service && pip install -r requirements.txt`
3. Start command: `cd ai-service && uvicorn main:app --host 0.0.0.0 --port 8000`
4. Set environment variables

## Database (Railway/Render PostgreSQL)

1. Create PostgreSQL database
2. Run migrations: `cd database && npm run migrate`
3. Update backend environment variables with database URL

## Docker Deployment

```bash
docker-compose up -d
```

This will start all services locally.


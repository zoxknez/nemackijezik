# Setup Instructions

## Prerequisites

- Node.js 18+
- Python 3.11+
- PostgreSQL 14+
- npm or yarn

## Local Development Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd nemackijezik
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..

# Install AI service dependencies
cd ai-service && pip install -r requirements.txt && cd ..
```

### 3. Setup Database

```bash
# Start PostgreSQL (or use existing instance)
# Create database
createdb nemacki_jezik

# Run migrations
cd database
npm install
npm run migrate
cd ..
```

### 4. Configure Environment Variables

Create `.env` files in each directory:

**frontend/.env:**
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

**backend/.env:**
```
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nemacki_jezik
DB_USER=postgres
DB_PASSWORD=postgres
JWT_SECRET=your-secret-key-change-in-production
AI_SERVICE_URL=http://localhost:8000
```

**ai-service/.env:**
```
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_KEY_FILE=path/to/key.json
```

### 5. Start Development Servers

In separate terminals:

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run backend:dev

# Terminal 3: AI Service
npm run ai:dev
```

### 6. Access Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- AI Service: http://localhost:8000

## Docker Setup (Alternative)

```bash
docker-compose up -d
```

This will start all services in containers.

## Testing

```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && npm test

# AI service tests
cd ai-service && python test_audio.py
```

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Check database credentials in `.env` files
- Verify database exists: `psql -l | grep nemacki_jezik`

### Port Conflicts
- Change ports in `.env` files if needed
- Ensure ports 3000, 3001, 8000, and 5432 are available

### Audio Permissions
- Browser may require microphone permissions
- Use HTTPS in production for audio features


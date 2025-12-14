/* eslint-disable @typescript-eslint/no-require-imports */
const { Client } = require('pg')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'nemacki_jezik',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
})

async function migrate() {
  try {
    await client.connect()
    console.log('Connected to database')

    const migrationsDir = path.join(__dirname, '..', 'migrations')
    const files = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort()

    // Create migrations table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        version VARCHAR(255) PRIMARY KEY,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Get applied migrations
    const result = await client.query('SELECT version FROM schema_migrations')
    const appliedMigrations = new Set(result.rows.map(row => row.version))

    for (const file of files) {
      if (appliedMigrations.has(file)) {
        console.log(`Skipping ${file} (already applied)`)
        continue
      }

      console.log(`Applying migration: ${file}`)
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8')
      
      await client.query('BEGIN')
      try {
        await client.query(sql)
        await client.query('INSERT INTO schema_migrations (version) VALUES ($1)', [file])
        await client.query('COMMIT')
        console.log(`✓ Applied ${file}`)
      } catch (error) {
        await client.query('ROLLBACK')
        throw error
      }
    }

    console.log('All migrations applied successfully')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  } finally {
    await client.end()
  }
}

migrate()


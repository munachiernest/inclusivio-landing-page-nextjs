// lib/db.ts
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Define your data structure
interface Registration {
    id: string;
    name: string;
    email: string;
    company: string;
    feature: string;
    timestamp: string;
}

interface Data {
    registrations: Registration[];
}

// Set up the database with default data
const defaultData: Data = { registrations: [] }

// Create database instance
const adapter = new JSONFile<Data>('data/db.json')
const db = new Low<Data>(adapter, defaultData)

// Initialize database
async function initDb() {
    try {
        await db.read()
        db.data ||= defaultData
        await db.write()
    } catch (error) {
        console.error('Error initializing database:', error)
        // If file doesn't exist, create it
        db.data = defaultData
        await db.write()
    }
}

// Make sure the database is initialized
initDb()

export { db }
export type { Registration }
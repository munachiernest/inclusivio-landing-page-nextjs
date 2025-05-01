import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// Define your data structure
interface Registration {
    id: string;
    name: string;
    email: string;
    company: string;
    feature: string;
    useCase?: string; // Added useCase field (optional)
    timestamp: string;
}

interface Data {
    registrations: Registration[];
}

// Set up the database with default data
const defaultData: Data = { registrations: [] }

// Create database instance
const adapter = new JSONFile<Data>('data/db.json') // Ensure this path is correct
const db = new Low<Data>(adapter, defaultData)

// Initialize database
async function initDb() {
    try {
        await db.read()
        db.data ||= defaultData
        await db.write()
    } catch (error) {
        console.error('Error initializing database:', error)
        // If file doesn't exist or has issues, create/overwrite it
        db.data = defaultData
        await db.write()
    }
}

// Make sure the database is initialized when the module loads
initDb().catch(console.error); // Handle potential init errors

export { db }
export type { Registration }
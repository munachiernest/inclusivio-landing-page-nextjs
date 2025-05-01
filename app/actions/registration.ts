'use server'

import { db } from '@/lib/db'
import type { Registration } from '@/lib/db' // Import the type
import { revalidatePath } from 'next/cache'

export async function registerUser(formData: FormData) {
    try {
        // Get form data
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const company = formData.get('company') as string || 'Not provided'
        const feature = formData.get('feature') as string || 'Not specified'
        const useCase = formData.get('useCase') as string || 'Not provided'; // Get useCase field

        // Validate data
        if (!name || !email) {
            return {
                success: false,
                message: 'Name and email are required'
            }
        }

        // Load database
        await db.read()

        // Create registration entry
        const registration: Registration = { // Use the imported type
            id: Date.now().toString(),
            name,
            email,
            company,
            feature,
            useCase, // Add useCase here
            timestamp: new Date().toISOString()
        }

        // Add to database (ensure db.data.registrations exists)
        db.data = db.data || { registrations: [] }; // Initialize if null/undefined
        db.data.registrations = db.data.registrations || []; // Initialize if null/undefined
        db.data.registrations.push(registration)

        // Save changes
        await db.write()

        // Revalidate the admin page (optional)
        revalidatePath('/admin/registrations')

        return {
            success: true,
            message: 'Registration successful'
        }
    } catch (error) {
        console.error('Error registering user:', error)
        return {
            success: false,
            message: 'Failed to register user. Please check server logs.' // More informative error
        }
    }
}

export async function getRegistrations() {
    try {
        await db.read()
        // Ensure data structure exists before returning
        db.data = db.data || { registrations: [] };
        db.data.registrations = db.data.registrations || [];
        return {
            success: true,
            data: db.data.registrations
        }
    } catch (error) {
        console.error('Error fetching registrations:', error)
        return {
            success: false,
            message: 'Failed to fetch registrations',
            data: []
        }
    }
}
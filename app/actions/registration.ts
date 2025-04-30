// app/actions/registration.ts
'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function registerUser(formData: FormData) {
    try {
        // Get form data
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const company = formData.get('company') as string || 'Not provided'
        const feature = formData.get('feature') as string || 'Not specified'

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
        const registration = {
            id: Date.now().toString(),
            name,
            email,
            company,
            feature,
            timestamp: new Date().toISOString()
        }

        // Add to database
        db.data.registrations.push(registration)

        // Save changes
        await db.write()

        // Revalidate the admin page
        revalidatePath('/admin/registrations')

        return {
            success: true,
            message: 'Registration successful'
        }
    } catch (error) {
        console.error('Error registering user:', error)
        return {
            success: false,
            message: 'Failed to register user'
        }
    }
}

export async function getRegistrations() {
    try {
        await db.read()
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
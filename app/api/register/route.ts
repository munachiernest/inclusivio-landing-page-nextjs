// app/api/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, feature } = await request.json();

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Create registration entry
        const registration = {
            id: Date.now().toString(), // Simple unique ID
            name,
            email,
            company: company || 'Not provided',
            feature: feature || 'Not specified',
            timestamp: new Date().toISOString(),
        };

        // File path for registrations
        const dataFilePath = path.join(process.cwd(), 'data', 'registrations.json');

        // Read existing registrations
        let registrations = [];
        try {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            registrations = JSON.parse(fileData);
        } catch {
            // If file doesn't exist or has invalid JSON, start with empty array
            registrations = [];
        }

        // Add new registration
        registrations.push(registration);

        // Write back to file
        fs.writeFileSync(dataFilePath, JSON.stringify(registrations, null, 2));

        return NextResponse.json(
            { success: true, message: 'Registration successful' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Failed to process registration' },
            { status: 500 }
        );
    }
}
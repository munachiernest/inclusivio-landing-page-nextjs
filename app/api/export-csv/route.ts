// app/api/admin/export-csv/route.ts
import { NextResponse } from 'next/server'
import { getRegistrations } from '@/app/actions/registration'

export async function GET() {
    const result = await getRegistrations()

    if (!result.success) {
        return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 })
    }

    const registrations = result.data

    // Create CSV content
    let csv = 'Name,Email,Company,Feature,Timestamp\n'

    registrations.forEach((reg) => {
        csv += `"${reg.name}","${reg.email}","${reg.company}","${reg.feature}","${reg.timestamp}"\n`
    })

    // Return as downloadable CSV
    return new NextResponse(csv, {
        headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="registrations-${new Date().toISOString().split('T')[0]}.csv"`,
        },
    })
}
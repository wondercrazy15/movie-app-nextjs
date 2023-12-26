import { ProtectedRoute } from '@/components'
import MovieForm from '@/views/MovieForm'
import React from 'react'

function page() {
    return (
        <ProtectedRoute>
            <MovieForm forEdit={true} />
        </ProtectedRoute>
    )
}

export default page
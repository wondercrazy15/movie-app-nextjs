import { ProtectedRoute } from '@/components'
import { MovieList } from '@/views'
import React from 'react'

function page() {
  return (
    <ProtectedRoute>
      <MovieList />
    </ProtectedRoute>
  )
}

export default page
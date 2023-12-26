'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function EmptyList() {
    const router = useRouter()
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div>
                <h2 className='text-center'>Your movie list is empty</h2>
                <div className='text-center mt-4'>
                    <button className='btn btn-primary btn-lg w-auto' onClick={() => router.push('/movie/add')}>Add a new movie</button>
                </div>
            </div>
        </div>
    )
}

export default EmptyList
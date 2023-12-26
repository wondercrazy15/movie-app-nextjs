'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function Header() {
    const router = useRouter()
    const onLogout = () => {

    }
    return (
        <header>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <h2>My movies</h2>
                    <button className='btn btn-link btn-add-movie' onClick={() => router.push('/movie/add')}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <button className='btn btn-link' onClick={onLogout}>
                    <span className='d-none d-sm-inline'> Logout </span>
                    &nbsp;<i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </div>
        </header>
    )
}

export default Header
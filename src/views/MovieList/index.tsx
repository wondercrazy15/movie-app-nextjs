'use client'
import React, { Fragment, useEffect, useState } from 'react'
import EmptyList from './components/EmptyList'
import Movies from './Movies'
import getMovieAction from './utils/getMovieAction'
import { moviesList } from './types'
import { useSearchParams } from 'next/navigation'

function MovieList() {
    const [movies, setMovies] = useState<moviesList[]>([])
    const [hasMovies, setHasMovies] = useState(false)
    const [loading, setLoading] = useState(true)
    const params = useSearchParams()

    // useEffect(() => {
    //     setLoading(true)
    //     getMovie()
    //     return () => {

    //     }
    // }, [])

    useEffect(() => {
        setLoading(true)
        const page = params.get('page');
        getMovie(parseInt(page || '1'))
        return () => {

        }
    }, [params])


    const getMovie = async (page: number = 1) => {
        await getMovieAction(page).then((res) => {
            if (res.status == 200 && res.data && Array.isArray(res.data.movies)) {
                const resdata = res.data.movies
                setMovies(resdata)
                setHasMovies(true)
            } else {
                setMovies([])
                setHasMovies(false)
            }
            setLoading(false)
        }).catch((error) => {
            console.error('error', error)
            setLoading(false)
        })
    }

    return (
        <Fragment>
            {loading ?
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : hasMovies ?
                    <Movies data={movies} />
                    : <EmptyList />}
        </Fragment>
    )
}

export default MovieList
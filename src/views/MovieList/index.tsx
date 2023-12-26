'use client'
import React, { Fragment, useEffect, useState } from 'react'
import EmptyList from './components/EmptyList'
import Movies from './Movies'
import getMovieAction from './utils/getMovieAction'
import { moviesList } from './types'

function MovieList() {
    const [movies, setMovies] = useState<moviesList[]>([])
    const [hasMovies, setHasMovies] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getMovie()
        return () => {

        }
    }, [])

    const getMovie = async () => {
        await getMovieAction().then((res) => {
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
                    <div>
                        <h2 className='text-center'>We are loading your movie list.</h2>
                    </div>
                </div>
                :
                hasMovies ?
                    <Movies data={movies} />
                    : <EmptyList />}
        </Fragment>
    )
}

export default MovieList
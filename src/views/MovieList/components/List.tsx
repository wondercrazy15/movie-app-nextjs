'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';

function List() {

    const token = localStorage.getItem("Token")
    
    const fetchMovies=async ()=>{
        const response = await axios.get('https://movie-app-backend-j12g.onrender.com/api/movies/list?page=1',{
            headers: { Authorization: `Bearer ${token}` }
        })
        if(response?.data?.movies !== null){
            setMoviesData(response?.data?.movies)
        }
    }

    useEffect(()=>{
        if(token !== null){
            fetchMovies()
        }
    },[])
    
    const [moviesData,setMoviesData]=useState([])

    return (
        <Fragment>
            <div className="row">
                {
                    moviesData.map((movies, index) => (
                        <div key={`movie_no_#` + index} className="col-lg-3 col-6">
                            <Card movieData={movies} />
                        </div>
                    ))
                }

            </div>
        </Fragment>
    )
}

export default List

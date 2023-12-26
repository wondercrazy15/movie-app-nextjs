import React, { Fragment } from 'react'
import Card from './Card'
import { moviesList } from '../types'

function List({
    movies
}: {
    movies: moviesList[]
}) {
    return (
        <Fragment>
            <div className="row">
                {(Array.isArray(movies) && movies.length > 0) &&
                    movies.map((movie, index) => (
                        <div key={`movie_no_#` + index} className="col-lg-3 col-6">
                            <Card data={movie} />
                        </div>
                    ))
                }

            </div>
        </Fragment>
    )
}

export default List

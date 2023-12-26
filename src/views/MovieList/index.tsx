import React, { Fragment } from 'react'
import EmptyList from './components/EmptyList'
import Movies from './Movies'

function MovieList() {
    return (
        <Fragment>
            {true ? <Movies />
                : <EmptyList />}
        </Fragment>
    )
}

export default MovieList
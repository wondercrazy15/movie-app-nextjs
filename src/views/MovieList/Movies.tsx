import React, { Fragment } from 'react'
import List from './components/List'
import Header from './components/Header'
import { moviesList } from './types'
import Pagination from './components/Pagination'


function Movies({
    data
}: {
    data: moviesList[]
}) {
    return (
        <Fragment>
            <div className={`container movie_container`}>
                <Header />
                <List movies={data} />
                <Pagination />
            </div>
        </Fragment>
    )
}

export default Movies
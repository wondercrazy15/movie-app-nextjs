import React, { Fragment } from 'react'
import List from './components/List'
import Header from './components/Header'


function Movies() {
    return (
        <Fragment>
            <div className={`container movie_container`}>
                <Header />
                <List />
            </div>
        </Fragment>
    )
}

export default Movies
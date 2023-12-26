import React from 'react'
import { moviesList } from '../types'
import { useRouter } from 'next/navigation'

function Card({
  data
}: {
  data: moviesList
}) {
  const router = useRouter()

  const onEdit = () => {
    router.push(`/movie/edit/${data._id}`)
  }
  return (
    <div className="card" id={data._id} onClick={onEdit}>
      <img src={data.poster} className="card-img-top" alt="dummy" />
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <h5 className='card-year'> {data.publishingYear} </h5>
      </div>
    </div>
  )
}

export default Card
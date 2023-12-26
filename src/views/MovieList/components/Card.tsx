import { useRouter } from 'next/navigation';
import React from 'react'

function Card(props: any) {

  const { movieData } = props
  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/movie/edit/${id}`)
  }

  return (
    <div className="card" onClick={() => { handleClick(movieData?._id) }}>
      <img src={movieData?.poster ? movieData?.poster : 'dummy.png' } className="card-img-top" alt="dummy" />
      <div className="card-body">
        <h4 className="card-title">{movieData?.title}</h4>
        <h5 className='card-year'> {movieData?.publishingYear} </h5>
      </div>
    </div>
  )
}

export default Card
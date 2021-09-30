import React from 'react'
import { useRouter } from 'next/router'
import { getMovieById } from '../../action'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props

  return(
    <div>Movie id :{id}
      <img src={movie.image} alt="" />
     <p>{movie.name}</p>
     <p>{movie.releaseYear}</p>
     <p>{movie.description}</p>
     <p>{movie.genre}</p>
    </div>
   )

 }

 Movie.getInitialProps = async ({ query }) => {
     const movie = await getMovieById(query.id)
     return { movie}
 }

 export default Movie
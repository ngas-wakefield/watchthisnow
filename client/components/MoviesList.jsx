import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {removie} from '../actions'

function MoviesList () {
  const dispatch = useDispatch()
const movies = useSelector(globalState => globalState.movies)

const handleDelete = (id) => {
  dispatch(removie(id))
  
}

  return (
 <div>
   <h2>Movie List</h2>
   <div className='movie-tile__container'>
        {movies.map(movie => <div key={movie.id} className='movie-tile'>
          <img src={movie.img} />
          <h3>{movie.title}</h3>
          <button>Watched</button>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>)}
      </div>
 </div>
  )
}

export default MoviesList

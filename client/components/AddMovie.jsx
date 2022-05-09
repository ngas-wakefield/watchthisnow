import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import {searchMovie} from '../apis/imdb'
import {saveMovie} from '../actions'


function AddMovie () {

  const dispatch = useDispatch()  
  const movieIds = useSelector(globalState => globalState.movies.map(movie => movie.imdb_id))
 

  const [description, setDescription] = useState('')
  const [results, setResults] = useState([])

  const handleType = (e) => {
      setDescription(e.target.value)
}

  const handleSubmit = (e) => {
      e.preventDefault()
      searchMovie(description) //call imdb.js searchMovie function
      .then(moviesArr => setResults(moviesArr))
      .catch(err => console.log('oops - ' + err.message))

}

  const handleAdd = (movie) => {
    
    //dispatch add thunk
    dispatch(saveMovie(movie))
}

  return (
<div>
      <h2>Add Movie</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='searchDescription'>New Movie:</label>
        <input id='searchDescription' type='text' value={description} onChange={handleType}/>
        <button>Search</button>
    </form>

{results.map(movie => {
  return <div key={movie.id}>
     
    <p>{movie.title} {movie.description}<button onClick={() => handleAdd(movie)} disabled={movieIds.includes(movie.id)}>Add</button></p>
    </div>
})}
<MoviesList/>
</div>
  )
}

export default AddMovie
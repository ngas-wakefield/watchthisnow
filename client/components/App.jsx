import React, {useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { Routes, Route, Link} from 'react-router-dom'

import MoviesList from './MoviesList'
import AddMovie from './AddMovie'

import{getMoviesThunk} from '../actions'

function App () {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getMoviesThunk())

      }, [])

   

  return (
    <>
      <header className="header">
        <h1>My Movies</h1>
    <div>
      <Link to='/'>View List</Link>
      <Link to='/add'>Add a movie</Link>
      </div>

      </header>
      <section className="main">
        <Routes>
          <Route path='/' element={<MoviesList/>}/>
          <Route path='/add' element={<AddMovie/>}/>
        </Routes>
       
      </section>
    </>
  )
}

export default App

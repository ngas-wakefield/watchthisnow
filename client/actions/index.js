import {delMovie, fetchTheMovies, saveTheMovie} from '../apis'


export function saveAllMovies (movies) {
    return {
        type: 'SAVE_ALL_MOVIES',
        movies
    }
}

export function ditchMovie (id) {
    return {
        type:'DEL_MOVIE',
        id
    }
}


export function saveOneMovie (movie) {
    return {
        type: 'SAVE_ONE_MOVIE',
        movie
    }
}



export function sendError(msg) {
    return {
        type: 'ERROR',
        msg
    }
}



export function getMoviesThunk () {

    return(dispatch) => {
        fetchTheMovies()//api call - get all
        .then((movies) => {
            dispatch(saveAllMovies(movies))
        })

        .catch(err => {


        })

                
                //send action to reducer

    }
}


export function saveMovie (movie) {

    return(dispatch) => {

        const newMovie = {
            title: movie.title,
            img: movie.image, 
            imdb_id: movie.id,
            watched: false
        }


        saveTheMovie(newMovie)
        .then((movieFromServer) => {
            dispatch(saveOneMovie(movieFromServer))
        })

        .catch(err => {


        })

                
            

    }
}


export function removie (id) {
    return (dispatch) => {
        delMovie(id)
        .then(() => {
            dispatch(ditchMovie(id))


        })
    }

}
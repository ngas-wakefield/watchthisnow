const initial = []
function reducer (state = initial, action) {
    switch(action.type){
        case 'SAVE_ALL_MOVIES':
        return action.movies
        case 'SAVE_ONE_MOVIE':
        return [...state, action.movie]
        case 'DEL_MOVIE':
            return state.filter(movie => movie.id !== action.id)
        default: 
        return state
    }

}

export default reducer
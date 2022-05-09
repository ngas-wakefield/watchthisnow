import request from 'superagent'
const imdbUrl = 'https://imdb-api.com/en/API'

const key = process.env.IMDB_KEY

//https://imdb-api.com/en/API/SearchMovie/k_sp11d68q/inception 2010



export function searchMovie (str) {
    return request
.get(`${imdbUrl}/SearchMovie/${key}/${str}`)
.then(res => res.body.results)

}             

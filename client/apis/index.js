import request from 'superagent'


export function fetchTheMovies () {
return request
.get('/api/v1/movies')
.then(res => res.body)

}  

export function saveTheMovie (newMovie) {
return request
.post('./api/v1/movies')
.send(newMovie)
.then(res => res.body)
}

export function delMovie (id) {
    return request
    .delete('/api/v1/movies/' + id)
    .then(() => null)


}
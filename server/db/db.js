const conn = require('./connection')

function getAllMovies (db = conn) {
    return db('movies')

}

function addMovie(movie, db = conn) {
    return db('movies')
    .insert(movie, 'id')
}

function delMovie (id, db = conn) {
    return db('movies')
    .where('id', id)
    .del()


}
module.exports = {
    getAllMovies,
    addMovie,
    delMovie
}
const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req,res) => {
    db.getAllMovies()
        .then((movies) => {
        res.json(movies)
    })
    .catch((err) => {
        res.status(500).json({message: err.message})
    })

})


router.post('/', (req,res) => {
    const newMovie = req.body

    db.addMovie(newMovie)
    .then((idArr) => {
        const [id] = idArr
        newMovie.id = id
        // res.json({ newId: id})
        res.json(newMovie)

    })
    .catch((err) => {
        res.status(500).json({message: err.message})
    })

})



router.delete('/:id', (req,res) => {
    const id = req.params.id
    
    db.delMovie(id)
    .then(() => {
        res.sendStatus(200)

    })
    .catch((err) => {
        res.status(500).json({message: err.message})
    })


})




module.exports = router
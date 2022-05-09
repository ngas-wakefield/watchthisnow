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

module.exports = router
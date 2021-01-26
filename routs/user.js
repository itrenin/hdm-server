const express = require('express')
const router = express.Router()

router
  .get('/', (req, res, next) => {
    res.send('Users here!')
  })
  .get('/:id', (req, res, next) => {
    let id = req.params.id
    res.send(`User с параметром: ${id}`)
    //console.log(id)
  })

module.exports = router
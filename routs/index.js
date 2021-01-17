const express = require('express')
const router = express.Router()

router
  .get('/', (req, res) => {
    res.send('Ya!')
  })
  .get('/:id', (req, res) => {
    let id = req.params.id
    res.send(`Отправил данные с параметром: ${id}`)
    console.log(id)
  })

module.exports = router

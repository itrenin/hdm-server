const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Ya!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
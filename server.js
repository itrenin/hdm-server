const express = require('express')
const path = require('path')
const { nextTick } = require('process')
require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

app.use('/', require('./routs/index'))

app.use((req, res, next) =>{
    var err = new Error('Not found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next)=>{
    res.status = err.status || 500
    res.send(`Error! ${err.message}. ${err}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const path = require('path')
const { nextTick } = require('process')
require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()

// db connect and auth
const db = require(path.join(__dirname, '/db'))
db.authenticate()
  .then(() => {
    console.log('DB connection has been established successfuly.')
  })
  .catch(console.error)
// end of db connect
app.use('/', require('./routs/index'))

app.use((req, res, next) => {
  var err = new Error('Not found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status = err.status || 500
  res.send(`Error! ${err.message}. ${err}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  //console.log(process.env.DB_PASS)
})

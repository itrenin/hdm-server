const fs = require('fs')
const path = require('path')

let models ={}
const modelsFolderPath = './models'

console.log(fs.readdirSync(path.join(__dirname, modelsFolderPath)))
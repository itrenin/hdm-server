const fs = require('fs')
const path = require('path')

let models = {}
const modelsFolderPath = './models'

fs
    .readdirSync(path.join(__dirname, modelsFolderPath))
    .forEach((file) => {
        models[file.slice(0,-3)] = file.slice(0,-3)
})

//const returnName = ()
//console.log(file.slice(0,-3))
console.log(models)
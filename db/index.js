const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')

// import models manualy 
const issueModel = require('./models/issue.js')
const statusModel = require('./models/status.js')
const userModel = require('./models/user.js')

const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, 'config.js'))[env]

const sequelize = new Sequelize(
    `postgres://${config.username}:${config.password}@${config.host}:5432/${config.database}`,
    config
  )
const models = {
    User: userModel(sequelize, Sequelize.DataTypes),
    Status: statusModel(sequelize, Sequelize.DataTypes),
    Issue: issueModel(sequelize, Sequelize.DataTypes)
}
//const models = {}
//const modelsFolderPath = './models'


// fs.readdirSync(path.join(__dirname, modelsFolderPath)).forEach((file) => {
//   let model = sequelize['import'](path.join(__dirname, modelsFolderPath, file))
//   models[modelName] = model
// })

// Object.keys(models).forEach((modelName) => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models)
//   }
// })

sequelize.models = models

module.exports = sequelize

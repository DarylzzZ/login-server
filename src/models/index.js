'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import config from '../config'

const basename = path.basename(__filename)

const db = {}

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
  host: config.db_host,
  port: 3306,
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  },
  logging: false
})

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

// module.exports = db
export default db

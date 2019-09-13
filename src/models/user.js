'use strict'

import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  })

  User.beforeCreate((user, options) => {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        user.password = hash
      })
      .catch(err => {
        throw new Error(err.message)
      })
  })

  User.beforeUpdate((user, options) => {
    return bcrypt
      .hash(user.password, 10)
      .then(hash => {
        user.password = hash
      })
      .catch(err => {
        throw new Error(err.message)
      })
  })

  User.prototype.validatePassword = function(password) {
    return bcrypt
      .compare(password, this.password)
      .then(res => res)
      .catch(err => {
        throw new Error(err.message)
      })
  }

  User.associate = models => {}

  return User
}

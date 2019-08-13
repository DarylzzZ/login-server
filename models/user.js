'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },

    password: {
      type: DataTypes.STRING
    }
  });

  User.beforeCreate((user, options) => {
``
    return bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  })

  User.beforeUpdate((user, options) => {

    return bcrypt.hash(user.password, 10)
      .then(hash => {
        user.password = hash;
      })
      .catch(err => {
        throw new Error();
      });
  })

  User.prototype.validatePassword = function (password) {

    return bcrypt.compare(password, this.password).then(function (res) {
      return res
    }).catch(err => {
      console.log(err);
    })
  }

  return User;
};

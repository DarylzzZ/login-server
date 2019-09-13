import express from 'express'
import jwt from 'jsonwebtoken'

import config from '../config'
import db from '../models'

const router = express.Router()

let { User } = db.sequelize.models

/**
 * api get all users
 */
router.get('/', (req, res) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then(users =>
      res.status(200).json({
        success: true,
        users
      })
    )
    .catch(err =>
      res.status(500).json({
        success: false,
        message: err.message
      })
    )
})

/**
 * api login
 *
 */
router.post('/login', (req, res) => {
  let { username, password } = req.body

  User.findOne({ where: { username } })
    .then(user => user.validatePassword(password))
    .then(pass =>
      pass
        ? res.status(200).json({
            success: true,
            token: jwt.sign({ username }, config.jwtsecret)
          })
        : res.status(400).json({
            success: false,
            message: 'incorrect password'
          })
    )
    .catch(err =>
      res.status(500).json({
        success: false,
        message: err.message
      })
    )
})

/**
 * api signup
 *
 */
router.post('/', (req, res) => {
  let { username, password } = req.body

  if (username && password) {
    User.create({ username, password })
      .then(user =>
        res.status(200).json({
          success: true,
          token: jwt.sign({ username: user.username }, config.jwtsecret)
        })
      )
      .catch(err =>
        res.status(500).json({
          success: false,
          message: err.message
        })
      )
  } else {
    res.status(400).json({
      success: false,
      message: 'Invalid request'
    })
  }
})

export default router

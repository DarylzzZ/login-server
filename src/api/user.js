import express from 'express'
import jwt from 'jsonwebtoken'
import passport from 'passport'
import passportLocal from 'passport-local'

import { jwtsecret } from '../config'
import db from '../models'

const router = express.Router()

const { User } = db.sequelize.models

/**
 * api get all users
 */
router.get('/', (req, res) => {
    User.findAll({ attributes: { exclude: ['password'] } })
        .then((users) =>
            res.status(200).json({
                success: true,
                users
            })
        )
        .catch((err) =>
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
passport.use(
    new passportLocal.Strategy(function (username, password, done) {
        User.findOne({ where: { username } })
            .then((user) => {
                if (user) {
                    return user.validatePassword(password)
                } else {
                    throw new Error('User not found.')
                }
            })
            .then((pass) => {
                if (pass)
                    done(null, {
                        success: true,
                        user: { username: username },
                        token: jwt.sign({ username }, jwtsecret)
                    })
                else throw new Error('incorrect password')
            })
            .catch((err) => {
                done(null, { success: false, message: err.message })
            })
    })
)

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    (req, res) => {
        res.status(200).json({ ...req.user })
    }
)

/**
 * api signup
 *
 */
router.post('/', (req, res) => {
    const { username, password } = req.body

    if (username && password) {
        User.create({ username, password })
            .then((user) =>
                res.status(200).json({
                    success: true,
                    user: { username: user.username },
                    token: jwt.sign(
                        { username: user.username },
                        config.jwtsecret
                    )
                })
            )
            .catch((err) =>
                res.status(200).json({
                    success: false,
                    message: err.message
                })
            )
    } else {
        res.status(200).json({
            success: false,
            message: 'Invalid request'
        })
    }
})

export default router

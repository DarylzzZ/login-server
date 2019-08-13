const express = require('express')
// const basicAuth = require('express-basic-auth')
const router = express.Router()

const userApi = require('./user')
const authApi = require('./auth')

// router.use(basicAuth({
//     users: { 'admin': 'admin' },
//     unauthorizedResponse: (req) => {
//         return req.auth
//             ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
//             : 'No credentials provided'
//     }
// }))

router.get('/', (req, res) => {
    res.json({
        message: 'Hello Api'
    })
})

router.use('/user', userApi)
router.use('/auth', authApi)

// router.get('/users/:username', (req, res) => {
//     console.log(req.params);

// })


module.exports = router
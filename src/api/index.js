import express from 'express'
import userApi from './user'

const router = express.Router()

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

router.use('/users', userApi)

export default router

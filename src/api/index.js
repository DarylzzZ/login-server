import express from 'express'
import userApi from './user'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Hello Api'
    })
})

router.use('/users', userApi)

export default router

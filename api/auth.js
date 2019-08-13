const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Axios = require('axios')
const config = require('../config/index')

let { appid, appsecret, secret } = config

/**
 * Endpoint : /api/auth/login
 * @params {code} String
 * 
 */
router.post('/login', (req, res) => {

    let { code } = req.query

    /**
     * 
     * trade code for openid and session_key
     */
    Axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appsecret}&js_code=${code}&grant_type=authorization_code`).then(response => {
        console.log('jscode2session => ', response);
        console.log('jscode2session => ', response.data);

        /**
         *  default expires_in = 7200
         * 
         * */
        let { openid, session_key, expires_in } = response.data
        res.json({
            success: true,
            token: jwt.sign({ openid, session_key }, secret, { expiresIn: '24h' })
        })
    })
})




module.exports = router
const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const cors = require('cors')
const jwt = require('jsonwebtoken');

const apiRouter = require('./api/index')


const models = require('./models').sequelize.models;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {

    console.log(req.method, ' at ', req.path, ' with ', req.query, ' or ', req.body);
    next()
})

/**
     * api router
     */
app.use('/api', apiRouter)


/**
 * 404 route not found
 */
app.use((req, res) => {
    res.json('404 - Not found')
})

/**
 * api get all users
 */
app.get('/users', (req, res) => {
    models.User.findAll().then(users => {
        res.json({
            success: true,
            users

        })
    }).catch(err => {
        res.json({
            success: false
        })
    })
})

/**
 * api login
 * 
 */
app.post('/login', (req, res) => {
    const username = req.body.username || req.query.username
    const password = req.body.password || req.query.password

    username && password ?
        models.User.findOne({ where: { username } }).then(user => {

            user.validatePassword(password).then(v => {
                v ? res.json({
                    success: true,
                    username,
                    token: jwt.sign({ username, password }, 'secret')
                }) :
                    res.json({
                        success: false
                    })

            }).catch(err => {
                res.json({
                    success: false
                })
            })


        }).catch(err => {
            console.log(err);

            res.json({
                success: false
            })
        }) :
        res.json({
            success: false
        })

})

/**
 * api signup
 * 
 */
app.post('/signup', (req, res) => {
    const username = req.body.username || req.query.username
    const password = req.body.password || req.query.password
    username && password ?
        models.User.create({ username, password }).then(user => {
            res.json({
                success: true,
                username,
                token: jwt.sign({ username, password }, 'secret')
            })
        }).catch(err => {
            console.log(err);

            res.json({
                success: false
            })
        }) :
        res.json({
            success: false
        })
})

/**
 * following request a valid token
 * 
 */
app.use((req, res, next) => {
    const token = req.body.token || req.query.token
    jwt.verify(token, 'secret', function (err, decoded) {
        if (err) {
            res.json({
                success: false,
                message: "invalid request"
            })
        } else {
            req.decoded = decoded
            next()
        }

    });
})

/**
 * user dashboard
 * 
 */
app.get('/dashboard', (req, res) => {
    console.log(req.decoded);

    res.json({
        success: true,
        message: `hello  ${req.decoded.username}`
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
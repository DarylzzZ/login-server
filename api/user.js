const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

// const mongoUtil = require('../utils/mongoUtils');


// mongoUtil.connectToServer((err, client) => {

//     if (err) console.log(err);

//     console.log("Connected successfully to server");

//     let db = mongoUtil.getDb();
//     // start the rest of your app here
// });

// router.get('/:username', (req, res) => {
//     console.log(req.params);

//     let username = req.params.username

//     db.collection('users').find({ username }).toArray().then((docs, err) => {


//         if (err) console.log(err);


//         res.json({ success: true, docs })
//     }).catch(err => {
//         console.log(err);
//         res.json({ success: false })
//     })


// })


// router.post('/login', (req, res) => {

//     let { username, password } = req.query


//     db.collection('users').findOne({ username }).then((doc, err) => {
//         if (err) {
//             console.log(err.message);
//             res.json({
//                 success: false,
//                 message: err.message
//             })
//         } else {
//             bcrypt.compare(password, doc.password).then(pass => {
//                 if (pass) {
//                     res.json({
//                         success: true,
//                         token: jwt.sign({ username }, 'phpisshit')
//                     })
//                 }
//             })
//         }
//     })


// })

// router.post('/register', (req, res) => {
//     let { username, password } = req.query
//     bcrypt.hash(password, 10)
//         .then(hash => {
//             db.collection('users').insertOne({ username, password: hash })
//                 .then(result => {
//                     console.log('result => ', result.ops);

//                     res.json({
//                         success: true,
//                         token: jwt.sign({ username }, 'phpisshit')
//                     })
//                 }).catch(e => {
//                     console.log('e=> ', e.message)
//                     res.json({
//                         success: false,
//                         message: e.message
//                     })
//                 })


//         })
//         .catch(err => {
//             console.log('err => ', err.message);

//             res.json({
//                 success: false,
//                 message: err.message
//             })
//         });

// })

// router.use((req, res, next) => {
//     const token = req.body.token || req.query.token
//     jwt.verify(token, 'phpisshit', function (err, decoded) {
//         if (err) {
//             res.json({
//                 success: false,
//                 message: "invalid request"
//             })
//         } else {
//             req.decoded = decoded
//             next()
//         }

//     });
// })
module.exports = router
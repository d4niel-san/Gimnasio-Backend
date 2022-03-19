const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const router = express.Router();
const User = require('../Models/user')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

router.get('/', (req, res) => {
    res.send('Server escuchando en /')
})

router.get('/add'), (req, res) => {

}

router.get('/user', async (req, res) => {
    try {
        const arrayUserDB = await User.find()
        console.log(arrayUserDB)
        res.json(arrayUserDB)
        //res.send(arrayUserDB)
    } catch (error) {
        console.log(error)
    }
})

router.post('/newUser', async (req, res) => {
    console.log("Wenas!!")
    const body = req.body
    console.log(body)
    res.send("recibi")
})

module.exports = router;
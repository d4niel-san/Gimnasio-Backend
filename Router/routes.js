const express = require('express');
const router = express.Router();
const User = require('../Models/user')


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
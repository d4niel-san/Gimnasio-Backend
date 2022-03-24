const express = require('express');
const router = express.Router();
const User = require('../Models/user')

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

router.post('/logUser', async (req, res) => {
    const logUser = req.query
    const email = logUser.email
    const password = logUser.password
    try {
        const userDB = await User.findOne({ email })
        if (userDB.password === password)
            res.send("Password OK")
        else {
            res.send("Password WRONG")
        }
    } catch (error) {
        console.log(error)
    }
})

router.post('/newUser', async (req, res) => {
    const newUser = req.query
    try {
        const userDB = new User(newUser)
        await userDB.save()
    } catch (error) {
        console.log(error)
    }
})

router.get('/', (req, res) => {
    res.send('Server escuchando en /')
})

module.exports = router;
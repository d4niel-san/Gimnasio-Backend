const express = require('express');
const router = express.Router();
const User = require('../Models/user')

router.get('/', (req, res) => {
    res.send('Server escuchando en /')
})

router.get('/user', async (req, res) => {
    try {
        const arrayUserDB = await User.find()
        console.log(arrayUserDB)
        res.send(arrayUserDB)
    } catch (error) {
        console.log(error)
    }

    /* try {
         const arrayUsersDB = await User.find()
             .then((data) => {
                 console.log(arrayUsersDB);
                 console.log(data)
                 return {
                     "nombre": data.name,
                     "correoElectronico": data.mail
                 }
             })
             .catch((error) => console.error(error))
     } catch (error) {
         console.log(error)
     }*/
})

module.exports = router;
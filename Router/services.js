const User = require('../Models/user')

async function getUser(req, res) {
    try {
        const arrayUserDB = await User.find()
        console.log(arrayUserDB)
        res.json(arrayUserDB)
    } catch (error) {
        console.log(error)
    }
}

async function logUser(req, res) {
    const email = req.body.email
    const password = req.body.password
    try {
        const userDB = await User.findOne({ email })
        if (userDB === null) {
            res.send(false)
            return false
        } 
        if (userDB.password === password) {
            res.send(userDB.firstName)
            return false
        }
        res.send(false)
    } catch (error) {
        console.log(error)
    }
}


async function queryUser(req, res) {
    try {
        await (new User(req.body)).save()
        res.send(true)
    } catch (error) {
        console.log(error)
    }
};

function serverStart(req, res) {
    res.send('Server escuchando en /')
}

module.exports = {
    getUser: getUser,
    logUser: logUser,
    queryUser: queryUser,
    serverStart: serverStart
}
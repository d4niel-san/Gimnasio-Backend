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
    const logUser = req.query
    const email = logUser.email
    const password = logUser.password
    try {
        const userDB = await User.findOne({ email })
        if (userDB.password === password)
            res.send(true)
        else {
            res.send(false)
        }
    } catch (error) {
        console.log(error)
    }
}


async function queryUser(req, res) {
    try {
        const userDB = new User(req.body)
        await userDB.save()
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
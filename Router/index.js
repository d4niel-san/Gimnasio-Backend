const express = require('express');
const router = express.Router();

const services = require('./services')

router.get('/', services.serverStart)
router.get('/user', services.getUser) //ruteo y funcion de pruebas
router.post("/newUser", services.queryUser)
router.post('/logUser', services.logUser)

module.exports = router;
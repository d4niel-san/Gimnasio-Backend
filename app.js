const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 5000;

//#region  Conexion a Base de Datos
const mongoose = require('mongoose');

//const user = 'admintest';
//const password = 'boxadmin';
//const dbname = 'LegionGym';
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@legiongym.hmfoq.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;


mongoose.connect(uri)
    .then(() => console.log('Base de datos conectada: ', process.env.DBNAME))
    .catch(e => console.log(e))

//#endregion

app.use('/', require('./Router/routes'));

app.listen(port, () => {
    console.log('Server escuchando en el puerto', port)
})  
const express = require('express');
const app = express();
const port = 5000;


//#region  Conexion a Base de Datos
const mongoose = require('mongoose');

const user = 'admintest';
const password = 'boxadmin';
const dbname = 'LegionGym';
const uri = `mongodb+srv://${user}:${password}@legiongym.hmfoq.mongodb.net/${dbname}?retryWrites=true&w=majority`;


mongoose.connect(uri)
    .then(() => console.log('Base de datos conectada: ', dbname))
    .catch(e => console.log(e))

//#endregion

app.use('/', require('./Router/routes'));

app.listen(port, () => {
    console.log('Server escuchando en el puerto', port)
})  
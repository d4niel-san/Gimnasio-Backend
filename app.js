const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRoutes = require('./Router')
const mongoDB = require('./Conection/mongoDB')

require('dotenv').config()
mongoDB(process.env);
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', userRoutes);

app.listen(PORT, () => console.log('Server escuchando en el puerto', PORT))  


const conectDB = ({USER, PASSWORD, DBNAME}) => {
    require('dotenv').config()
    
    const mongoose = require('mongoose');
    const uri = `mongodb+srv://${USER}:${PASSWORD}@legiongym.hmfoq.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

    mongoose.connect(uri)
        .then(() => console.log('Base de datos conectada: ', DBNAME))
        .catch(e => console.log(e))   

}

module.exports = conectDB;
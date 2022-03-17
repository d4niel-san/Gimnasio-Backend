



export const conectDB = () => {

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

}
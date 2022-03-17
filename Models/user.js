const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userScheme = new Schema({
    name: String,
    lastName: String,
    mail: String,
    pass: String,
    suscribed: Boolean
})


const User = mongoose.model('Users',userScheme);

module.exports = User;
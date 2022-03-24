const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    suscribed: Boolean
}, {
    versionKey: false // You should be aware of the outcome after set to false
});


const User = mongoose.model('Users', userScheme);

module.exports = User;
const mongoose = require('mongoose');
const validate = require('mongoose-validator')
const Schema = mongoose.Schema;
const isEmail = validate({ validator: 'isEmail' })

const userScheme = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, lowercase: true, trim: true, validate: isEmail},
    password: {type: String, required: true},
    suscribed: {type: Boolean, required: true, default: true},
}, {
    versionKey: false // You should be aware of the outcome after set to false
});


const User = mongoose.model('Users', userScheme);

module.exports = User;
const mongoose = require('./DB.js').mongoose;

const userSchema = new mongoose.Schema({
    "email": String,
    "name": String,
    "age": Number,
    "password": String,
    "isAdmain": Boolean
}, {versionKey: false}); // remove __v field from schema
const MyUser = mongoose.model('RUsers', userSchema, 'RUsers');

module.exports = MyUser; 

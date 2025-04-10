const mongoose = require('./DB.js').mongoose;

const foodSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "price": Number,
    "description": String,
    "availability": String
}, {versionKey: false}); // remove __v field from schema
const Food = mongoose.model('Foods', foodSchema, 'Foods'); 
module.exports = Food; 

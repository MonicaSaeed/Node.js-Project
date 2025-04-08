const mongoose = require('mongoose'); 
mongoose.connect('mongodb://127.0.0.1:27017/Restaurant'); 
const DBListener = mongoose.connection;
DBListener.on('error',(err)=>{console.log(err)})
module.exports = {
    DBListener,
    mongoose, 
}; 

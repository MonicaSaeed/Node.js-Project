//#endregion steps
// npm init 
// npm i express ajs ajv -> express for server, ajs for json schema, ajv for validation
// npm i nodemon -> nodemon for auto restart server on changes
// npm i mongoose -> mongoose for mongodb connection and schema
//#endregion

//#region require
const express = require('express'); // import express
const app = express(); // create express instance
const bodyParser = require('body-parser'); // import body-parser
const mongoose = require('mongoose'); // import mongoose
const Ajv = require('ajv'); // import ajv
const ajv = new Ajv(); // create ajv instance
const PORT = process.env.PORT || 7100; // set port
//#endregion


//#region middleware
app.use(bodyParser.json()); // use body-parser to parse json
app.use(bodyParser.urlencoded()); // use body-parser to parse urlencoded data
//#endregion


//#region ajv schema
// create schema
const ajvFoodSchema = {
    type: "object",
    properties: {
        id: {type: "string"},
        name: {type: "string", pattern: "^[A-Za-z\\s'-]{2,50}$"},
        price: {type: "number"},
        description: {type: "string"},
        availability: {type: "string", enum: ["Yes", "No"]}
    },
    required: ["id", "name", "price", "description", "availability"],
    additionalProperties: false
};
const foodValidator = ajv.compile(ajvFoodSchema); 
//#endregion


//#region mongoose connection
mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')
// connect scema -> create schema, query [mongoose.model]
const foodSchema = new mongoose.Schema({
    "id": String,
    "name": String,
    "price": Number,
    "description": String,
    "availability": String
});
const Food = mongoose.model('Foods', foodSchema, 'Foods'); 
// create listener [mongoose.connection]
const DBListener = mongoose.connection;
DBListener.on('error',(err)=>{console.log(err)})
DBListener.once('open',()=>{
    console.log('MongoDB connected');
    //#region handle all requests [end points]
    app.get('/', (req, res) => {
        res.send('Hello World!'); // send response
    });
    app.get('/food', async (req, res) => {
        const food = await Food.find(); // find all food
        res.json(food); // send response
    });
    app.post('/food', async (req, res) => {
        const valid = foodValidator(req.body); // validate request body
        if (!valid) {
            return res.status(400).json({error: foodValidator.errors}); // send error response
        }
        const food = new Food(req.body); // create new food
        await food.save(); // save food to database
        res.json(food); // send response
    });
    //#endregion
}) // once connected
//#endregion


//#endregion listen
app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`); 
}); 
//#endregion
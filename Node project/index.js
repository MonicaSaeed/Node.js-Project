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


//#region mongoose connection
// connect database
// connect scema -> create schema, query [mongoose.model]
// create listener [mongoose.connection]
//#endregion


//#region ajv schema
// create schema
// ajv.compile(schema) -> compile schema
// ajv.validate(schema, data) -> validate data against schema
// ajv.errors -> get errors
//#endregion


//#region handle all requests [end points]
// create end points
app.get('/', (req, res) => {
    res.send('Hello World!'); // send response
});
//#endregion


//#endregion listen
app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`); 
}); 
//#endregion
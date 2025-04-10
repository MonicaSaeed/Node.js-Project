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
const PORT = process.env.PORT || 7100; // set port
app.use(express.static(__dirname+"/Public"));
//#endregion

//#region middleware
app.use(bodyParser.json()); // use body-parser to parse json
app.use(bodyParser.urlencoded()); // use body-parser to parse urlencoded data

const session = require('express-session');
const JWT_SECRET = process.env.JWT_SECRET || 'd6e6d4247ebbb001991a172e46570c56a913c97bb13b41c919dfc24e420b0c3c'; //generate secret with https://jwtsecret.com/generate
app.use(session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: true
}));


//#endregion

//#region mongoose connection
const DBListener = require('./Models/DB.js').DBListener; 
DBListener.once('open',()=>{
    //#region handle all requests [end points]
    app.get(['/','/resturant','/main'], (req, res) => {
        res.render('login.view.ejs'); 
    });

    const foodRoutes = require('./Routes/food.routes.js');
    app.use('/food', foodRoutes);  

    const registerRoutes = require('./Routes/register.routes.js');
    app.use('/register', registerRoutes);

    const loginRoutes = require('./Routes/login.routes.js');
    app.use('/login', loginRoutes);
    //#endregion
}) 
//#endregion

//#endregion listen
app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`); 
}); 
//#endregion
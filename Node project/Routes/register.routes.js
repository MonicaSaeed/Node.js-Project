const express = require('express'); 
let router = express.Router(); 

const registerController = require('../Controllers/register.controllers.js');

router.post('/', registerController.registerUser); 

module.exports = router; 
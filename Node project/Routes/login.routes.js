const express = require('express'); 
let router = express.Router(); 

const loginController = require('../Controllers/login.controllers.js');

router.post('/', loginController.loginUser);

module.exports = router; 
const express = require('express'); 
let router = express.Router(); 

const studentController = require('../Controllers/food.controllers.js');

router.get('/', studentController.getAllFood); 
router.post('/', studentController.setFood); 
router.delete('/:id', studentController.deleteFood);
router.get('/:id', studentController.getFoodById);
router.put('/', studentController.updateFood);

module.exports = router; 
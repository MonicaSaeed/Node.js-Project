const express = require('express'); 
let router = express.Router(); 

const foodController = require('../Controllers/food.controllers.js');

router.get('/', foodController.getAllFood); 
router.post('/', foodController.setFood); 
router.delete('/:id', foodController.deleteFood);
router.get('/add', foodController.addPage); // it must be before the getFoodById route to avoid conflict 
router.get('/:id', foodController.getFoodById);
router.put('/', foodController.updateFood);
router.post('/add', foodController.addFood);

module.exports = router; 
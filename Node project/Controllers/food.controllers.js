const Food = require('../Models/food.models.js'); 

const foodValidator = require('../Utils/food.utils.js'); 

const getAllFood = async (req, res) => {
    const food = await Food.find(); 
    res.json(food); 
};
const setFood = async (req, res) => {
    const valid = foodValidator(req.body); // validate request body
    if (!valid) {
        return res.status(400).json({error: foodValidator.errors}); 
    }
    const food = new Food(req.body); 
    await food.save(); 
    res.json(food); 
}

module.exports = {
    getAllFood,
    setFood
};
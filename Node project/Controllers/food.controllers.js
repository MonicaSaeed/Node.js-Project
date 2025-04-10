const Food = require('../Models/food.models.js'); 

const foodValidator = require('../Utils/food.utils.js'); 

const getAllFood = async (req, res) => {
    const food = await Food.find(); 
    if(!food) {
        return res.status(404).json({error: 'No food found'}); 
    }
    res.status(200).render('food.view.ejs', {food}); 
};
const getFoodById = async (req, res) => {
    const food = await Food.findOne({id: req.params.id}); 
    if(!food) {
        return res.status(404).json({error: 'Food not found'}); 
    }
    res.render('food-update.view.ejs', {food});
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
const deleteFood = async (req, res) => {
    const food = await Food.findOne({id:req.params.id}); 
    if(!food) {
        return res.status(404).json({error: 'Food not found'}); 
    }
    await Food.deleteOne({id:req.params.id});
    res.status(200).json({message: 'Food deleted successfully'}); 
}
const updateFood = async (req, res) => {
    console.log(req.body);
    let price = parseFloat(req.body.price);
    let newFood = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: price,
        availability: req.body.availability
    };
    const valid = foodValidator(newFood); // validate request body
    console.log(valid);
    if (!valid) {
        return res.status(400).json({ error: foodValidator.errors });
    }
    let food = await Food.findOne({id: req.body.id});
    if(!food) {
        return res.status(404).json({error: 'Food not found'}); 
    }
    food.id = req.body.id;
    food.name = req.body.name;
    food.description = req.body.description;
    food.price = price;
    food.availability = req.body.availability;
    await food.save();
    res.status(200).render('food-update.view.ejs', {food});
}
const addPage = async (req, res) => {
    res.render('food-add.view.ejs'); 
}
const addFood = async (req, res) => {
    let price = parseFloat(req.body.price);
    let newFood = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        price: price,
        availability: req.body.availability
    };
    const valid = foodValidator(newFood); // validate request body
    if (!valid) {
        return res.status(400).json({ error: foodValidator.errors });
    }

    const food = new Food(newFood); 
    await food.save(); 
    res.status(200).redirect('/food'); 
}

module.exports = {
    getAllFood,
    getFoodById,
    setFood,
    deleteFood,
    updateFood,
    addPage,
    addFood
};
const MyUser = require('../Models/user.models.js'); 
const userValidator = require('../utils/user.utils');
const bcrypt = require('bcrypt'); // for hashing password

const registerUser = async (req, res) => {
    const user = req.body;
    const valid = userValidator(user); 
    if (!valid) {
        return res.status(400).json({ error: userValidator.errors });
    }
    let foundUser = await MyUser.findOne({ email: user.email.toLowerCase() });
    if (foundUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    let salt = await bcrypt.genSalt(10); // generate salt for hashing
    let hashPassword = await bcrypt.hash(user.password, salt); // hash password using bcrypt
    user.password = hashPassword; 
    user.email = user.email.toLowerCase(); 
    let newUser = new MyUser(user); 
    newUser.save();
    return res.status(200).json({ message: 'User registered successfully' });
}

module.exports = { registerUser }; 
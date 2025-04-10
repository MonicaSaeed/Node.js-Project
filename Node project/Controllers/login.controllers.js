const MyUser = require('../Models/user.models.js'); 
const bcrypt = require('bcrypt'); // for decrypting password
const jwt = require('jsonwebtoken'); // for generating token
const JWT_SECRET = process.env.JWT_SECRET || 'd6e6d4247ebbb001991a172e46570c56a913c97bb13b41c919dfc24e420b0c3c'; //generate secret with https://jwtsecret.com/generate

const loginUser = async (req, res) => {
    let user = req.body;
    let userFound = await MyUser.findOne({ email: user.email.toLowerCase() });
    if (!userFound) {
        return res.status(400).json({ error: 'Invalid Email/Password' });
    }
    let validPassword = await bcrypt.compare(user.password, userFound.password); // compare password with hashed password
    if (!validPassword) {
        return res.status(400).json({ error: 'Invalid Email/Password' });
    }
    let token = await jwt.sign({ email: userFound.email, isAdmain: userFound.isAdmain }, JWT_SECRET); // can add -> { expiresIn: '24h' } to set expiration time
    res.header('x-auth-token', token); 
    res.status(200).json({ message: 'Login successful' }); 
};
module.exports = { loginUser };
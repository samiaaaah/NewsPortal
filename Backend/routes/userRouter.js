const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();



// Create JWT token
const createToken = (email) => {
    return jwt.sign({ email, role: "admin" }, process.env.JWT_Secret_Key, { expiresIn: "1h" });
  };
  
  //admin login

 router.post('/login', async (req, res) => {    
    try {
        const { email, password } = req.body;
        if 
        (
            email== process.env.Admin_Email && password == process.env.Admin_Password){
                const token = createToken(email);
                res.json({ success: true, token });
            } else{
                res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
    
        }
    catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
})
module.exports = router;
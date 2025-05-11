const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();    
const dotenv = require('dotenv');
dotenv.config();


const adminAuth = (req, res, next) => { 
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = adminAuth;
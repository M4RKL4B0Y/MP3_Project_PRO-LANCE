const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');
const dbase = require('../models');
const User = dbase.User;

const verifyToken = (req, res, next) => {
    let token = req.headers['pl-access-token']; // 'pl-access-token' is the token naming convention for pro-lance
    
    if (!token) {
        return res.status(403).send({ message: 'No token provided. Please contact your system admin.' });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            console.error('Token verification failed:', err);
            return res.status(401).send({ message: 'Authentication failed!' });
        }
        
        req.user_id = decoded.id;

    

        console.log('Token verified, user ID:', req.user_id);
        

        next();
    });
};

module.exports = { verifyToken };

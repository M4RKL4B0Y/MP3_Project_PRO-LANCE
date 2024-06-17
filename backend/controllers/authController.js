const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');


exports.register = async (req, res) => {
    try {
        const { name, username, email, password, role_id } = req.body;
        console.log("Received data:", req.body);
  
        const hashedPassword = await bcrypt.hash(password, 10);
        
        
        const user = await User.create({ 
            name, 
            username, 
            email, 
            password: hashedPassword, 
            role_id 
        });

        res.status(201).json({ message: 'Account created', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

       
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        
        const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: '1h' });

        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

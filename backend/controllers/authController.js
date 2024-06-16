const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');

// Signup function
exports.signup = async (req, res) => {
    try {
        const hashPword = bcrypt.hashSync(req.body.password, 8);
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPword,
            role_id: req.body.role_id
        });
        res.send({ message: 'Account created' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received:", email, password);

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ error: 'User not found' });
        }
        console.log("User found:", user.email);

        if (!user.password) {
            console.log("Stored password is undefined");
            return res.status(500).json({ error: 'Internal server error' });
        }

        console.log("Stored Hashed Password:", user.password);
        console.log("Provided Password:", password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password Match Result:", isMatch);

        if (!isMatch) {
            console.log("Password does not match");
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        console.log("Password matches");
        const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).json({ error: err.message });
    }
};

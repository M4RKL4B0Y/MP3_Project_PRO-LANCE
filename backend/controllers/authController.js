const dbase = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/authConfig');
const User = dbase.User;

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
        res.status(500).send({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).send({ message: 'User not found. Check your email or contact support' });
        }

        const pwordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!pwordValid) {
            return res.status(401).send({ message: 'Incorrect password. Try again or contact support' });
        }
        
        const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 }); // 24 hours
        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            accessToken: token
        });
    } catch (err) {
        console.error(err); 
        res.status(500).send({ message: err.message });
    }
};


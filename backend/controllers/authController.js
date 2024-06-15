const { User } = require('../models');
const bcrypt = require('bcryptjs');
<<<<<<< HEAD
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
=======
const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');

exports.register = async (req, res) => {
    try {
        const { name, username, email, password, role_id } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, username, email, password: hashedPassword, role_id });
        res.status(201).json(user);
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
<<<<<<< HEAD
        
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
=======
        const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
    }
};

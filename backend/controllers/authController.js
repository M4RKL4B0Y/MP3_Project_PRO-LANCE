const dbase = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const confq = require('../config/authConfig');
const User = dbase.user;
// const ProlancerUser = require("../../frontend/src/forms/ProlancerForm");
// import Prolancer from "../../frontend/src/forms/ProlancerForm";

exports.signup = async (req,res) => {
    try {
        hashPword = bcrypt.hashSync(req.body.password, 8);
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPword
        });
        res.send({ message: 'Account created'});
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
        // Create a token using the 'sign' method from jsonwebtoken package
        const token = jwt.sign({ id: user.id }, confq.secret, { expiresIn: 10000 });
        res.status(200).send({
            // Omitting the 'id' from the response for security reasons unless needed
            username: user.username,
            email: user.email,
            token: token
        });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).send({ message: err.message });
    }
};

// exports.ProlancerUser = async (req, res) => {
//     try {
//         const user = await User.findOne({ where: { email: req.body.email } });
//         if (!user) {
//             return res.status(404).send({ message: 'User not found. Check your email or contact support' });
//         }

//         const pwordValid = bcrypt.compareSync(req.body.password, user.password);
//         if (!pwordValid) {
//             return res.status(401).send({ message: 'Incorrect password. Try again or contact support' });
//         }
//         // Create a token using the 'sign' method from jsonwebtoken package
//         const token = jwt.sign({ id: user.id }, confq.secret, { expiresIn: 10000 });
//         res.status(200).send({
//             // Omitting the 'id' from the response for security reasons unless needed
//             username: user.username,
//             email: user.email,
//             token: token
//         });
//     }
//     catch (err) {
//         console.error(err); // Log the error for debugging purposes
//         res.status(500).send({ message: err.message });
//     }
// };


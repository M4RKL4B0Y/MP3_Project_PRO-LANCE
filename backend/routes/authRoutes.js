const express = require('express');
const router = express.Router();
// const { signup, login } = require('../controllers/authController');

// router.post('/signup', signup);
// router.post('/login', login);
const { register, login, } = require('../controllers/authController'); 
const { logout } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);


module.exports = router;

const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { signup, login } = require('../controllers/authController');
=======
const { register, login } = require('../controllers/authController'); 
>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059

router.post('/signup', signup);
router.post('/login', login);

<<<<<<< HEAD
=======
router.post('/register', register);
router.post('/login', login);

>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059
module.exports = router;

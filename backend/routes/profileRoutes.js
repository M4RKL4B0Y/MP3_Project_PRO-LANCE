const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const auth = require('../middleware/authMware');

router.post('/profiles', auth, profileController.createProfile);

module.exports = router;
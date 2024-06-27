const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMware.js');
const { createProject, getProjects, getProjectById, updateProject, deleteProject } = require('../controllers/planceController.js');

// Routes with authentication middleware
router.post('/', auth.verifyToken, createProject);
router.get('/', auth.verifyToken, getProjects);
router.get('/:id', auth.verifyToken, getProjectById);
router.put('/:id', auth.verifyToken, updateProject);
router.delete('/:id', auth.verifyToken, deleteProject);


module.exports = router;

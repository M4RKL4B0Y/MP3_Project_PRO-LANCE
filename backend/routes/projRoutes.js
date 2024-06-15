const express = require('express');
const router = express.Router();
const { createProject, getProjects, getProjectById, updateProject, deleteProject } = require('../controllers/planceController');
const auth = require('../middleware/authMware');





router.post('/', auth.verifyToken, createProject);
router.get('/', auth.verifyToken, getProjects);
router.get('/:id', auth.verifyToken, getProjectById);
router.put('/:id', auth.verifyToken, updateProject);
router.delete('/:id', auth.verifyToken, deleteProject);


module.exports = router;
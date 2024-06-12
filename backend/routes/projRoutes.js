const express = require('express');
const router = express.Router();
const planceController = require('../controllers/planceController');



router.post('/projects/', planceController.createProject);
router.get('/projects/', planceController.getProjects);
router.get('/projects/:id', planceController.getProjectById);
router.put('/projects/:id', planceController.updateProject);
router.delete('/projects/:id', planceController.deleteProject);



module.exports = router;
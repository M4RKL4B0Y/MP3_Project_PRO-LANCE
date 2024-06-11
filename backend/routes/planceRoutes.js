const express = require('express');
const router = express.Router();
const planceController = require('../controllers/planceController');

router.post('/', planceController.createProject);
router.get('/', planceController.getProjects);
router.get('/:id', planceController.getProjectsById);
router.put('/:id', planceController.updateProject);
router.delete('/:id', planceController.deleteProject);

router.post('/', planceController.createTask);
router.get('/', planceController.getTasks);
router.get('/:id', planceController.getTasksById);
router.put('/:id', planceController.updateTask);
router.delete('/:id', planceController.deleteTask);

module.exports = router;
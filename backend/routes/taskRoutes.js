const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

router.post('/projects/:projectId/tasks', taskController.createTask);
router.get('/projects/:projectId/tasks', taskController.getTasksByProjectId);
router.get('/projects/:projectId/tasks/:id', taskController.getTaskById);
router.put('/projects/:projectId/tasks/:id', taskController.updateTask);
router.delete('/projects/:projectId/tasks/:id', taskController.deleteTask);

module.exports = router;

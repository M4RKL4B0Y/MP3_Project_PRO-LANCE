const express = require('express');
const router = express.Router();
const { createTask, getTasksByProjectId, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const taskController = require('../controllers/taskController');
const auth = require('../middleware/authMware');

router.post('/projects/:projectId/tasks', auth.verifyToken, createTask);
router.get('/projects/:projectId/tasks', auth.verifyToken, getTasksByProjectId);
router.get('/projects/:projectId/tasks/:id', auth.verifyToken, getTaskById);
router.put('/projects/:projectId/tasks/:id', auth.verifyToken, updateTask);
router.delete('/projects/:projectId/tasks/:id', auth.verifyToken, deleteTask);

module.exports = router;

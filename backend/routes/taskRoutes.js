const express = require('express');
const router = express.Router();
const taskController = ('../controllers/taskControllers.js');


router.post('/projects/:project_id/tasks', planceController.createTask);
router.get('/projects/:project_id/tasks', planceController.getTasks);
router.get('/:id', planceController.getTaskById);
router.put('/projects/:project_id/tasks/:id', planceController.updateTask);
router.delete('/projects/:project_id/tasks/:id', planceController.deleteTask);

module.exports = router;
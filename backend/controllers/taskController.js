const { Task, Estimate, User } = require('../models');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, project_id: req.params.projectId });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id, {
            include: [
                { model: Estimate, as: 'estimates' },
                { model: User, as: 'client', attributes: ['name', 'email'] },
                { model: User, as: 'freelancer', attributes: ['name', 'email'] }
            ]
        });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get tasks by project ID
exports.getTasksByProjectId = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { project_id: req.params.projectId },
            include: [
                { model: Estimate, as: 'estimates' },
                { model: User, as: 'client', attributes: ['name', 'email'] },
                { model: User, as: 'freelancer', attributes: ['name', 'email'] }
            ]
        });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update task
exports.updateTask = async (req, res) => {
    try {
        const [updated] = await Task.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const updatedTask = await Task.findByPk(req.params.id, {
            include: [
                { model: Estimate, as: 'estimates' },
                { model: User, as: 'client', attributes: ['name', 'email'] },
                { model: User, as: 'freelancer', attributes: ['name', 'email'] }
            ]
        });
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete task
exports.deleteTask = async (req, res) => {
    try {
        const deleted = await Task.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

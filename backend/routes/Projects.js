const express = require('express');
const router = express.Router();
const { Prices, Projects, User, Comments, Index, Profiles, Tasks, Worknotes } = require('../models');
const upload = require('../middleware/upload');



router.get('/api/prices', async (req, res) => {
    try {
        const prices = await Prices.findAll();
        res.json(prices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new project
router.post('/api/projects', async (req, res) => {
    try {
        const { title, description, startDate, endDate, client_id, price_id } = req.body;
        const newProject = await Projects.create({ title, description, startDate, endDate, client_id, price_id });
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get projects for freelancers
router.get('/api/projects', async (req, res) => {
    const projects = await Projects.findAll({ where: { freelancer_id: null } });
    res.json(projects);
});

// Project accepted
router.post('/api/projects/accept', async (req, res) => {
    const { id } = req.params; // Get project id
    const { freelancer_id } = req.body; // Get user id
    const project = await Projects.findByPk(id); // Get project
    if (project) {
        project.freelancer_id = freelancer_id; // Set project to be accepted
        await project.save();
        res.json(project);
    } else {
        res.status(404).json({ error: 'Project not found' });
    }
});

// Delete a project
router.delete('/api/projects/:id', async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Projects.findByTesPk(projectId);

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        await project.destroy();
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

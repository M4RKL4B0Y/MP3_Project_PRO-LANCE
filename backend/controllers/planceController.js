const { Project, Estimate } = require('../models');


exports.createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll({
            include: [{ model: Estimate, as: 'estimates' }]
        });
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id, {
            include: [{ model: Estimate, as: 'estimates' }]
        });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.updateProject = async (req, res) => {
    try {
        const [updated] = await Project.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Project not found' });
        }
        const updatedProject = await Project.findByPk(req.params.id, {
            include: [{ model: Estimate, as: 'estimates' }]
        });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const deleted = await Project.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

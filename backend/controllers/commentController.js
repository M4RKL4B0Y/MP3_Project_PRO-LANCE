const { Comment, User } = require('../models');

exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [{ model: User, as: 'user', attributes: ['name'] }],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.id, {
            include: [{ model: User, as: 'user', attributes: ['name'] }]
        });
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateComment = async (req, res) => {
    try {
        const [updated] = await Comment.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        const updatedComment = await Comment.findByPk(req.params.id);
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        const deleted = await Comment.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

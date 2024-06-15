const { Comment, User } = require('../models');

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll({
            include: [
                { model: User, as: 'user', attributes: ['name'] }
            ],
            order: [['createdAt', 'DESC']]
        })
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
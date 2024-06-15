const express = require('express');
const router = express.Router();
const { createComment, getComments, getCommentById, updateComment, deleteComment } = require('../controllers/commentController');
const auth = require('../middleware/authMware');


router.post('/comments', auth.verifyToken, createComment);
router.get('/comments', auth.verifyToken, getComments);
router.get('/comments/:id', auth.verifyToken, getCommentById);
router.put('/comments/:id', auth.verifyToken, updateComment);
router.delete('/comments/:id', auth.verifyToken, deleteComment);

module.exports = router;
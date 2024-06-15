const express = require('express');
const router = express.Router();
const { createProject, getProjects, getProjectById, updateProject, deleteProject } = require('../controllers/planceController');
<<<<<<< HEAD



router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
=======
const auth = require('../middleware/authMware');



>>>>>>> 2cbf268ff8565b8c1da04b8db0268998fe5e6059


router.post('/', auth.verifyToken, createProject);
router.get('/', auth.verifyToken, getProjects);
router.get('/:id', auth.verifyToken, getProjectById);
router.put('/:id', auth.verifyToken, updateProject);
router.delete('/:id', auth.verifyToken, deleteProject);


module.exports = router;
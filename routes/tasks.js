const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks_controller');

router.get('/',taskController.tasks);

// router.post('/:id',taskController.completeTasks);

module.exports = router;
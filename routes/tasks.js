const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks_controller');

router.get('/',taskController.tasks);

module.exports = router;
const express = require('express');

const router = express.Router();

const addTaskController = require('../controllers/setTask_controller');

router.get('/',addTaskController.addTask);

module.exports = router;
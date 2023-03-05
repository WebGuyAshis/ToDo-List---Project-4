const express = require('express')
const router = express.Router();

const taskDisplayController = require('../controllers/taskDisplay_controller');

router.get('/',taskDisplayController.taskDisplay);

module.exports = router;
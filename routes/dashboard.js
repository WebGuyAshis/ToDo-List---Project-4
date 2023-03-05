const express = require('express');

const router = express.Router()
const dashboardController = require('../controllers/dashboard_controller');

router.get('/', dashboardController.dashBoard);

module.exports = router;
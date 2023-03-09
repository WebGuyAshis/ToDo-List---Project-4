const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log("Router Loaded.");

// For Welcome Page
router.get('/', homeController.home);

// For Dashboard Page
router.use('/dashboard', require("./dashboard"));

// For tasks List Page
router.use('/tasks',require("./tasks"))

// To Create task
router.use('/addtodo', require('./createTask'));

// To update value of Completed in Database.
router.use('/delete-contact', require('./deleteTask'));

// To update value of Completed in Database.
router.use('/update', require('./update'));

module.exports = router;
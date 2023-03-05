const express = require("express");

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log("Router Loaded.");

router.get('/', homeController.home);

router.use('/dashboard', require("./dashboard"));

router.use('/tasks',require("./tasks"))

router.use('/taskDisplay', require('./taskDisplay'))

router.use('/addTask', require('./addTask'));

module.exports = router
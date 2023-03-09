const express = require('express');

const Todo = require('../models/todo')

const router = express.Router();

router.post('/', function (req, res) {
    Todo.create({
        title: req.body.title,
        description: req.body.description,
        myDate: req.body.myDate,
        myTime: req.body.myTime,
        categoryChoosed: req.body.categoryChoosed,
        completed_task: req.body.completed,
    })
    .then(newTask => {
        console.log("Successfully Created Task!", newTask);
        res.redirect('/tasks');
    })
    .catch(err => {
        console.log("Error Creating Task!!", err);
        res.send("Error Creating Task!!");
    })
});

module.exports = router;
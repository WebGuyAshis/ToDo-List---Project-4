const express = require('express')
const router = express.Router();

const Todo = require('../models/todo');

router.get('/', function (req, res) {
    let id = req.query.id;
    let value = req.query.value;
    console.log("id", id);
    console.log("Value in Db",value);
        Todo.findByIdAndUpdate(id, { $set: { completed: value } })
        .then(updatedTask => {
            console.log(`Task with ID ${updatedTask._id} has been updated.`);
            res.redirect('/tasks');
        })
        .catch(err => {
            console.log(`Error updating task: ${err}`);
            res.send(`Error updating task: ${err}`);
        });

});


module.exports = router;
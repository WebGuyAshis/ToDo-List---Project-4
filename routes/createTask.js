const express = require('express');
const app = express();

const Todo = require('../models/todo')

const router = express.Router();

router.post('/addtodo', function (req, res) {
    console.log("req.bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",req);
    // return res.redirect('/dashboard')
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

// router.post('/completetask/:id',async function(req,res){
//     const id = req.params._id;
//     const data = await Todo.findOne({id});
//     console.log("Data++++++++++++",data);
//     return;
// })

module.exports = router;
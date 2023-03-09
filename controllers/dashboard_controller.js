const Todo = require('../models/todo');

module.exports.dashBoard = function(req,res){
    Todo.find({})
    .then(function(todos){
        return res.render('dashboard',{
            title: "DashBoard",
            Todo_List: todos
        });
    })
    .catch(function(err){
        console.log("Error in fetching Data")
    });
}

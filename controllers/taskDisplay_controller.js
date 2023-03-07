
const Todo = require('../models/todo');
module.exports.taskDisplay = function(req,res){
    Todo.find({})
    .then(function(todos) {
      return res.render('taskDisplay', {
        Todo_list: todos,
      });
    })
    .catch(function(err) {
      return res.send('Error in fetching Todos from db.');
    });
};


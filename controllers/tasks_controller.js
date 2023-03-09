const Todo = require('../models/todo');

module.exports.tasks = function (req, res) {
  Todo.find({})
    .then(function (todos) {
      console.log("Tasks Loaded Successfully");
      return res.render('tasks', {
        Todo_list: todos,
      });
    })
    .catch(function (err) {
      return res.send('Error in fetching Todos from db.');
    });
};
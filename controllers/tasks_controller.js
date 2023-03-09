const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];
const date = today.getDate();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth = months[today.getMonth()];
const currentYear = today.getFullYear();

const Todo = require('../models/todo');

module.exports.tasks = function (req, res) {
  Todo.find({})
    .then(function (todos) {
      console.log("Tasks Loaded Successfully");
      return res.render('tasks', {
        current_Year: currentYear,
        todays_Date: date,
        current_Month: currentMonth,
        day: dayOfWeek,
        Todo_list: todos,
      });
    })
    .catch(function (err) {
      return res.send('Error in fetching Todos from db.');
    });
};
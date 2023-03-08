const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];
const date = today.getDate();
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth = months[today.getMonth()];
const currentYear = today.getFullYear();

const { response } = require('express');
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

// module.exports.completeTasks = async function (req, res) {
//   const id = req.params.id;
//   const updatedData = await Todo.findOneAndUpdate({ _id:req.params.id }, { $set: { completed: true } }, { new: true })
//   if (!updatedData) {
//     return res.status(404).json({ message: "Data Not Found!!" });
//   }
//   else {
//     console.log("IDDDDDDDDDDDDD",id);
//     return res.status(200).json({message: "Successfull"});
//   }
// }

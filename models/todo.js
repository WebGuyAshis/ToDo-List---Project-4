const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    myDate:{
        type: String,
        required: true,
    },
    myTime:{
        type:String
    }

});

const Todo = mongoose.model('Todo', toDoSchema);

module.exports =Todo;
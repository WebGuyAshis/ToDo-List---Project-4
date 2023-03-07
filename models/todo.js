const today = new Date();
// const current_time = today.getHours() + ':' + today.getMinutes();

const current_time = `${today.getHours()}:${today.getMinutes()}`;


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
    },
    categoryChoosed:{
        type:String,
        required: true,
    },
    currentTime : {
        type: String,
        default: current_time
    },
    completed : {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', toDoSchema);

module.exports =Todo;
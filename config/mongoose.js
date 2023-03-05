const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo-development');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error Connectimg to Database!'));

db.once('open',function(){
    console.log("Successfully Connected to Database :: MongoDB")
});

module.exports = db;
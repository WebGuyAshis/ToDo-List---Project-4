const express = require('express');
const app = express();
const port = 8000; //by default browser runs on port 80;

const db = require('./config/mongoose');
const Todo = require('./models/todo');

app.use(express.urlencoded()); 1
app.use(express.static('./assets'));
// Use Router
app.use('/', require("./routes"));


// Setting Up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views');


// app.post('/addtodo', function(req,res){
//     console.log(req.body);
//     Todo.create({
//         title: req.body.title,
//         description: req.body.description,
//         myDate: req.body.myDate,
//         myTime: req.body.myTime
//     })
//     .then(newTask => {
//         console.log("Successfully Created Task!", newTask);
//         res.redirect('/addTask');
//     })
//     .catch(err => {
//         console.log("Error Creating Task!!", err);
//         res.status(500).send("Error Creating Task!!");
//     });    
// });

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`);
})
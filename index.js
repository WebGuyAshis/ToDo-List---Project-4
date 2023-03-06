const express = require('express');
const app = express();
const port = 8000; //by default browser runs on port 80;

const db = require('./config/mongoose');

app.use(express.urlencoded()); 1
app.use(express.static('./assets'));
// Use Router
app.use('/', require("./routes"));


// Setting Up the View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`);
})
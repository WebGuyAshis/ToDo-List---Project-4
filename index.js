const express = require('express');
const app = express();
const port = 6000; //by default browser runs on port 80;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`)
    }
    console.log(`Server is running on port: ${port}`);
})
const mongoose = require('mongoose');

mongoose.connect(process.env.sir);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;

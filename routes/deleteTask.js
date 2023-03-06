const express = require('express')
const app = express();
const router = express.Router();

const Todo = require('../models/todo');

router.get('/', function(req, res) {
    let id = req.query.id;
    Todo.findByIdAndDelete(id)
      .then(() => {
        return res.redirect('back');
      })
      .catch(err => {
        console.log("Error in Deleting from DB: ", err);
        return res.send("Error in Deleting from DB");
      });
  });
  

module.exports = router;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];

module.exports.home = function(req,res){
    // res.end ("<h1> Express is up for TODO List</h1>");
    return res.render('welcome',{
        title:`${dayOfWeek}`
    })
}

console.log("Home Controller Loaded");
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];

module.exports.home = function(req,res){
    return res.render('welcome',{
        title:`${dayOfWeek}`
    })
}

console.log("Home Controller Loaded");
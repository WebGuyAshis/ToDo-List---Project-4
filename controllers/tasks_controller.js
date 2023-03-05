const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];


module.exports.tasks = function(req,res){
    return res.render('tasks',{
        day:`${dayOfWeek}`
    })
}

console.log("TAsks Loaded Successfully");
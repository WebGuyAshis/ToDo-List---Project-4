const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];

let greetMsg;
if(dayOfWeek == "Sunday"){
    greetMsg = 'Its "Lazy Sunday"! Take a break and relax!';
}else if(dayOfWeek == "Monday"){
    greetMsg = "Enjoy your Monday and start the week off strong";
}else if(dayOfWeek == "Tuesday"){
    greetMsg = "Have a wonderful Tuesday!";
}else if(dayOfWeek == "Wednesday"){
    greetMsg = "Wishing you a productive Wednesday!";
}else if(dayOfWeek == "Thursday"){
    greetMsg = 'Have a Thrilling Thursday!';
}else if(dayOfWeek == "Friday"){
    greetMsg = "Happy Friday! Have a great weekend ahead";
}else{
    greetMsg = 'Have a Social Saturday!';
}

module.exports.home = function(req,res){
    return res.render('welcome',{
        title:greetMsg
    })
}

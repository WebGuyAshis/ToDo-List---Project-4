const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date();
const dayOfWeek = days[today.getDay()];
const date = today.getDate();
const months = ['Jan', 'Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const currentMonth = months[today.getMonth()];
const currentYear = today.getFullYear();

const hours = today.getHours();


let greet;
if(Number(hours) >11 && Number(hours) <=15){
    greet = "Good Afternoon"
}else if(Number(hours) > 15 && Number(hours) <=23){
    greet = "Good Evening"
}else if(Number(hours)>=4 && Number(hours)<12){
    greet = "Good Morning"
}else{
    greet = "Rest for a while"
}

module.exports.dashBoard = function(req,res){
    return res.render('dashboard',{
        title: "DashBoard",
        current_Date: date,
        current_Month: currentMonth,
        current_Year: currentYear,
        day: dayOfWeek,
        greet_Msg: greet
    });
}

console.log("Users is Loaded Successfully")
const dashboardTasks = document.getElementById("progress-box");

let count = dashboardTasks.dataset.count;
let total = dashboardTasks.dataset.total;

let percent = (count/total) * 100;

document.getElementById("completed-num").innerText = count;
document.getElementById("pending-num").innerText = total-count;

const dashboardTaskList = document.getElementsByClassName("dashboard-task-list");


window.onload = function() {
    document.getElementById("completed-percent").style.width = percent + "%";
    for(let i = 0; i<dashboardTaskList.length; i++){
      dashboardTaskList[i].style.width = "48%";
      dashboardTaskList[i].style.height = "250px";
    }
  };


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const today = new Date();
const dayOfWeek = days[today.getDay()];
const date = today.getDate();
const currentMonth = months[today.getMonth()];
const currentYear = today.getFullYear();

const hours = today.getHours();
const seconds = today.getSeconds();

let greet;
if(Number(hours) >11 && Number(hours) <=15){
    greet = "Good Afternoon,"
}else if(Number(hours) > 15 && Number(hours) <=23){
    greet = "Good Evening,"
}else if(Number(hours)>=4 && Number(hours)<12){
    greet = "Good Morning,"
}else{
    greet = "Rest for a while,"
}

document.getElementById("tasks-date").innerText = date;
document.getElementById("tasks-month").innerText = currentMonth;
document.getElementById("tasks-year").innerText = currentYear;
document.getElementById("tasks-day").innerText = dayOfWeek;

document.getElementById("greet-msg").innerText = greet;

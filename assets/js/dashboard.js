
const dashboardTasks = document.getElementById("progress-box");


let count = dashboardTasks.dataset.count;
let total = dashboardTasks.dataset.total;

let percent = (count/total) * 100;

console.log(count);
console.log(total);

console.log("Percentage:", percent);
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
  

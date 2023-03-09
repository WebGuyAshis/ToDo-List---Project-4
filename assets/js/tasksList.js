const addTask = document.getElementById("add-task-container");
const mainContainer = document.getElementById("main-container");
const closeContainer = document.getElementById("close-container");
const tasksBox = document.getElementsByClassName("tasks-list");


let taskCompleted = false;
document.addEventListener("click", function (event) {
    let target = event.target;
    console.log(target);
    let fetchId = target.id;
    let fetchClass = target.className;

    if (fetchId == "add-tasks" || fetchClass == "bi bi-plus-lg") {
        openAddTask();
    } else if (fetchId == "close-container") {
        addTask.style.width = "0vw";
        addTask.style.height = "0vh";
        mainContainer.classList.remove('blur');
    }
});

function openAddTask() {
    addTask.style.width = "70vw";
    addTask.style.height = "40vh";
    mainContainer.classList.toggle('blur');
}   

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function (event) {
        let target = event.target;
        console.log(target);
        let dataId = target.dataset.id;
        if (this.checked) {
            console.log(`${dataId} is checked`);
            window.location.href = `/update/?id=${dataId}&&value=true`;
        } else {
            console.log(`${dataId} is unchecked`);
            window.location.href = `/update/?id=${dataId}&&value=false`;
        }
    });
}

// for Time

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const today = new Date();
const dayOfWeek = days[today.getDay()];
const date = today.getDate();
const currentMonth = months[today.getMonth()];
const currentYear = today.getFullYear();

document.getElementById("tasks-date").innerText = date;
document.getElementById("tasks-month").innerText = currentMonth;
document.getElementById("tasks-year").innerText = currentYear;
document.getElementById("tasks-day").innerText = dayOfWeek;




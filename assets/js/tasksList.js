const addTask = document.getElementById("add-task-container");
const mainContainer = document.getElementById("main-container");
const closeContainer = document.getElementById("close-container");


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


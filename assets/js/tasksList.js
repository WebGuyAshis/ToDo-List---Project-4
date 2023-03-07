const addTask = document.getElementById("add-task-container");
const mainContainer = document.getElementById("main-container");
const closeContainer = document.getElementById("close-container");
const completed = document.getElementById("completed");

let taskCompleted = false;
document.addEventListener("click", function (event) {
    let target = event.target;
    console.log(target);
    let fetchId = target.id;
    // let fetchClass = target.classList;
    let fetchClass = target.className;
    console.log("ID:", fetchId);
    console.log("Class:", fetchClass);

    if (fetchId == "add-tasks" || fetchClass == "bi bi-plus-lg") {
        console.log("Button Selected");

        openAddTask();
    } else if (fetchId == "close-container") {
        addTask.style.width = "0vw";
        addTask.style.height = "0vh";
        mainContainer.classList.remove('blur');
    }else if(fetchClass == "check-mark"){
        completed.style.backgroundColor = "green";
        taskCompleted = true;
    }
});


openAddTask = () => {
    addTask.style.width = "70vw";
    addTask.style.height = "40vh";
    mainContainer.classList.toggle('blur');
}


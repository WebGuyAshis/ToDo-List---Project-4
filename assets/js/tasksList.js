const addTask = document.getElementById("add-task-container");
const mainContainer = document.getElementById("main-container");
const closeContainer = document.getElementById("close-container");
// const completed = document.getElementById("completed");


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
        // addTask.style.bottom = "40px";
        // addTask.style.right = "40px";
        mainContainer.classList.remove('blur');
    }
    // else if(fetchId == "completed"){
    //     let dataId = target.dataset.id;
    //     console.log("Data iD", dataId)
    //     updateList(dataId);
    // }
});

openAddTask = () => {
    addTask.style.width = "70vw";
    addTask.style.height = "40vh";
    // addTask.style.top = "50%";
    // addTask.style.left = "50%";
    mainContainer.classList.toggle('blur');
}

// updateList = (dataId) =>{

//     if(completed.checked){
//         console.log("Checked");
//         setTimeout(() => {
//             window.location.href = `/update/?id=${dataId}&&value=true`;
//         }, 5000);
//     }
//     else{
//         console.log("Unchecked");
//         setTimeout(() => {
//         window.location.href = `/update/?id=${dataId}&&value=false`;

//         }, 4000);
//     }
// }

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function (event) {
        let target = event.target;
        console.log(target);
        let dataId = target.dataset.id;
        if (this.checked) {
            console.log(`${dataId} is checked`);
            window.location.href = `/update/?id=${dataId}&&value=true`;
            // Do something when the checkbox is checked
        } else {
            console.log(`${dataId} is unchecked`);
            window.location.href = `/update/?id=${dataId}&&value=false`;
            // Do something when the checkbox is unchecked
        }
    });
}

let taskForm = document.querySelector("#taskForm");
function showForm(){
    let task = document.querySelector("#task");
    let date = document.querySelector("#date");
    let description = document.querySelector("#description");
    let importance = document.querySelector("#importance");
    task.value = "";
     date.value = "";
    description.value = "";
    importance.value = document.querySelector(".impt").value;
    taskForm.classList.remove("hidden");
    taskForm.classList.add("flex");
}

function removeForm(){
    taskForm.classList.add("hidden");
    taskForm.classList.remove("flex");

}

export {showForm,removeForm};
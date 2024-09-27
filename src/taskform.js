let taskForm = document.querySelector("#taskForm");
function showForm(){
    taskForm.classList.remove("hidden");
    taskForm.classList.add("flex");
}

function removeForm(){
    taskForm.classList.add("hidden");
    taskForm.classList.remove("flex");

}

export {showForm,removeForm};
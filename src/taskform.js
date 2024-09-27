let taskForm = document.querySelector("#taskForm");
function showForm(){
    taskForm.classList.remove("hidden");
    taskForm.classList.add("flex");
}

export {showForm};
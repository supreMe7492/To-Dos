let taskForm = document.querySelector("#taskForm");
let detailForm = document.querySelector("#showDetails");

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

function showDetails(item){
    let taskDet = document.querySelector("#taskDet");
    let dateDet = document.querySelector("#dateDet");
    let descriptionDet = document.querySelector("#descriptionDet");
    let importanceDet = document.querySelector("#importanceDet");

   
        taskDet.value = item.task;
        dateDet.value = item.date;

        if(item.description == ""){
            descriptionDet.placeholder = "Add a Description";
        }else{
            descriptionDet.value = item.description;

        }


        
        importanceDet.value = item.importance;


    detailForm.classList.remove("hidden");
    detailForm.classList.add('flex');

}

function changeDetails(item){
    let taskDet = document.querySelector("#taskDet");
    let dateDet = document.querySelector("#dateDet");
    let descriptionDet = document.querySelector("#descriptionDet");
    let importanceDet = document.querySelector("#importanceDet");

   
        item.task = taskDet.value;
        item.date = new Date(dateDet.value);
        item.description = descriptionDet.value;
        item.importance = importanceDet.value;
  

    removeForm();
}

function removeForm(){
    taskForm.classList.add("hidden");
    taskForm.classList.remove("flex");
    detailForm.classList.add("hidden");
    detailForm.classList.remove('flex');
}

export {showForm,showDetails,changeDetails,removeForm};
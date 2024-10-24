import { tasksArr } from "./addTasks";
let taskForm = document.querySelector("#taskForm");
let detailForm = document.querySelector("#showDetails");

let selected = null;
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

function showDetails(item,index){
    let taskDet = document.querySelector("#taskDet");
    let dateDet = document.querySelector("#dateDet");
    let descriptionDet = document.querySelector("#descriptionDet");
    let importanceDet = document.querySelector("#importanceDet");

   
        taskDet.value = item.task;
        dateDet.value = new Date(item.date).toISOString().slice(0, 10);
        if(item.description == ""){
            descriptionDet.placeholder = "Add a Description";
        }else{
            descriptionDet.value = item.description;

        }


        
        importanceDet.value = item.importance;


    detailForm.classList.remove("hidden");
    detailForm.classList.add('flex');

     selected = index;
    console.log(selected) ;

}

function changeDetails(){
    let taskDet = document.querySelector("#taskDet").value;
    let dateDet = document.querySelector("#dateDet").value;
    let descriptionDet = document.querySelector("#descriptionDet").value;
    let importanceDet = document.querySelector("#importanceDet").value;

    if(selected !== null){
        tasksArr[selected].task = taskDet;
        tasksArr[selected].date = new Date(dateDet);
        tasksArr[selected].description = descriptionDet;
        tasksArr[selected].importance = importanceDet;

    }
   removeForm();
}

function removeForm(){
    taskForm.classList.add("hidden");
    taskForm.classList.remove("flex");
    detailForm.classList.add("hidden");
    detailForm.classList.remove('flex');
}

export {showForm,showDetails,changeDetails,removeForm};
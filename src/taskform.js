import { tasksArr,saveToLocalStorage } from "./addTasks";
import { projectOption } from "./renderTasks";
let taskForm = document.querySelector("#taskForm");
let projectForm = document.querySelector("#projectForm")
let detailForm = document.querySelector("#showDetails");
let projectDetailForm = document.querySelector("#showprojectDetails");

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

function showProjectForm(){
    let project = document.querySelector("#project");
    let projectDesc = document.querySelector("#project-description");
    project.value = "";
    projectDesc.value = "";
    projectForm.classList.remove("hidden");
    projectForm.classList.add("flex");
}

function showDetails(item,index){
    let taskDet = document.querySelector("#taskDet");
    let dateDet = document.querySelector("#dateDet");
    let descriptionDet = document.querySelector("#descriptionDet");
    let projectDet = document.querySelector("#projectDetSelect");
    
    projectOption(projectDet);
    let importanceDet = document.querySelector("#importanceDet");

    
        taskDet.value = item.task;
        dateDet.value = new Date(item.date).toISOString().slice(0, 10);
        if(item.description == ""){
            descriptionDet.placeholder = "Add a Description";
        }else{
            descriptionDet.value = item.description;

        }


        projectDet.value = item.projectName;
        importanceDet.value = item.importance;


    detailForm.classList.remove("hidden");
    detailForm.classList.add('flex');

     selected = index;
    console.log(selected) ;

}

function showProjectDetails(item){


    let projectDet = document.querySelector("#projectDet");
    let projectDesc = document.querySelector("#project-description-detail");

    projectDet.value = item.projectName;
    projectDesc.value = item.projectDesc;

    projectDetailForm.classList.remove("hidden");
    projectDetailForm.classList.add('flex');

}

function changeDetails(){
    let taskDet = document.querySelector("#taskDet").value;
    let dateDet = document.querySelector("#dateDet").value;
    let descriptionDet = document.querySelector("#descriptionDet").value;
    let projecDet = document.querySelector("#projectDetSelect").value
    let importanceDet = document.querySelector("#importanceDet").value;

    if(selected !== null){
        tasksArr[selected].task = taskDet;
        tasksArr[selected].date = new Date(dateDet);
        tasksArr[selected].description = descriptionDet;
        tasksArr[selected].projectName = projecDet;
        tasksArr[selected].importance = importanceDet;

    }
    saveToLocalStorage("tasksArr",tasksArr);
   removeForm();
}

function removeForm(){
    taskForm.classList.add("hidden");
    taskForm.classList.remove("flex");
    detailForm.classList.add("hidden");
    detailForm.classList.remove('flex');
    projectForm.classList.add("hidden");
    projectForm.classList.remove('flex');
    projectDetailForm.classList.add("hidden");
    projectDetailForm.classList.remove('flex');

}

export {showForm,showDetails,showProjectDetails, changeDetails,removeForm,showProjectForm};
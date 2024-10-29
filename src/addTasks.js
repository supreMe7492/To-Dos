import { removeForm } from "./taskform";

let tasksArr = getFromLocalStorage("tasksArr");
let projectArr = getFromLocalStorage("projectArr");


export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : []; 
}


class Project {
    constructor(projectName,projectDesc){
        this.projectName = projectName;
        this.projectDesc = projectDesc;
    }
    
}

class tasks {
    constructor(task,date,description,projectName,importance,completed){
        this.task = task;
        this.date = new Date(date);
        this.description = description;
        this.projectName = projectName
        this.importance = importance;
        this.completed = completed;
    }
}

function addTask(){
    let task = document.querySelector("#task").value;
    let date = document.querySelector("#date").value;
    let description = document.querySelector("#description").value;
    let projectName = document.querySelector("#projectSelect").value;
    let importance = document.querySelector("#importance").value;
    let completed = false;
    let todo = new tasks(task,date,description,projectName,importance,completed);
   
    if(todo.task !== "" && !isNaN(todo.date)){
    removeForm();
    tasksArr.push(todo);
    saveToLocalStorage("tasksArr",tasksArr);
     console.log(tasksArr);

}


}

function addProject(){
    
    let projectName = document.querySelector("#project").value;
    let projectDesc = document.querySelector("#project-description").value;
    
    let project = new Project(projectName,projectDesc);
    if(project.projectName !== ""){
        removeForm();
        projectArr.push(project);
        saveToLocalStorage("projectArr",projectArr);
    }
 

}

export {addTask,tasksArr,addProject,projectArr};
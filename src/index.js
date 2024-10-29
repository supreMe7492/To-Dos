import "./styles.css";
import { renderProjectMenu,projectOption } from "./renderTasks.js";
import {effect} from "./menueffect.js";
import { showForm,removeForm,showProjectForm } from "./taskform.js";
import { addTask,addProject } from "./addTasks.js";
import { myTasks,todayTask,renderAddTask,weeklyTask,pastTask,importantTask } from "./menuFunc.js";

effect();
window.addEventListener('DOMContentLoaded', () => {
    myTasks();
    renderProjectMenu();
    renderAddTask();
});



let addProjectBtn = document.querySelector(".addProjectBtn");
addProjectBtn.addEventListener("click",()=>{
    addProject();
    renderProjectMenu();
})

let addOption = document.querySelector("#projectSelect");

let addTaskBtn = document.querySelector(".addTasks");
let projectForm = document.querySelector(".addProject");
let removeIcon = document.querySelectorAll(".removeIcon");
projectForm.addEventListener("click",showProjectForm)
addTaskBtn.addEventListener("click",()=>{
    
    
    showForm();
    projectOption(addOption);
   
         let selectedProject = document.querySelector("#projectSelectDefault").selected = true;

   
});
removeIcon.forEach(a=>{
          a.addEventListener("click",removeForm);
});



let userTasks = document.querySelector(".myTasks");

userTasks.addEventListener("click",myTasks);

let today = document.querySelector(".today");
today.addEventListener("click",todayTask);

let weekly = document.querySelector(".weekly");
weekly.addEventListener("click",weeklyTask);

let past = document.querySelector(".past");
past.addEventListener("click",pastTask);

let important = document.querySelector(".important");
important.addEventListener("click",importantTask);







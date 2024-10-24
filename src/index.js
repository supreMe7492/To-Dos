import "./styles.css";
import { renderActiveArr } from "./renderTasks.js";
import {effect} from "./menueffect.js";
import { showForm,removeForm,changeDetails } from "./taskform.js";
import { addTask,tasksArr } from "./addTasks.js";
import { myTasks,todayTask,renderAddTask } from "./menuFunc.js";

effect();
window.addEventListener('DOMContentLoaded', () => {
    myTasks();

    renderAddTask();
});




let addTaskBtn = document.querySelector(".addTasks");
let removeIcon = document.querySelectorAll(".removeIcon");
addTaskBtn.addEventListener("click",showForm);
removeIcon.forEach(a=>{
          a.addEventListener("click",removeForm);
});



let userTasks = document.querySelector(".myTasks");

userTasks.addEventListener("click",myTasks);

let today = document.querySelector(".today");
today.addEventListener("click",todayTask);
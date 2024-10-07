import "./styles.css";
import { render } from "./renderTasks.js";
import {effect} from "./menueffect.js";
import { showForm,removeForm,changeDetails } from "./taskform.js";
import { addTask,tasksArr } from "./addTasks.js";
import { myTasks } from "./myTasks.js";

effect();
myTasks();


let addTaskBtn = document.querySelector(".addTasks");
let removeIcon = document.querySelectorAll(".removeIcon");
let addBtn = document.querySelector(".addBtn");
addTaskBtn.addEventListener("click",showForm);
removeIcon.forEach(a=>{
          a.addEventListener("click",removeForm);
});

addBtn.addEventListener("click",()=>{
    addTask();
    render(tasksArr);
});

let userTasks = document.querySelector(".myTasks");

userTasks.addEventListener("click",myTasks);




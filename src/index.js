import "./styles.css";
import {effect} from "./menueffect.js";
import { showForm,removeForm } from "./taskform.js";
import { addTask } from "./addTasks.js";

effect();

let addTaskBtn = document.querySelector(".addTasks");
let removeIcon = document.querySelector(".removeIcon");
let addBtn = document.querySelector(".addBtn");
addTaskBtn.addEventListener("click",showForm);
removeIcon.addEventListener("click",removeForm);
addBtn.addEventListener("click",addTask);
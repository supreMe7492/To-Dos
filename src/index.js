import "./styles.css";
import {effect} from "./menueffect.js";
import { showForm,removeForm } from "./taskform.js";

effect();

let addTaskBtn = document.querySelector(".addTasks");
let removeIcon = document.querySelector(".removeIcon");
addTaskBtn.addEventListener("click",showForm);
removeIcon.addEventListener("click",removeForm);
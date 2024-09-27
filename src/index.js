import "./styles.css";
import {effect} from "./menueffect.js";
import { showForm } from "./taskform.js";

effect();

let addTaskBtn = document.querySelector(".addTasks");
addTaskBtn.addEventListener("click",showForm);
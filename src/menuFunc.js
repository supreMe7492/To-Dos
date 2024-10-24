import { tasksArr } from "./addTasks";
import {differenceInDays,startOfDay } from 'date-fns';

import { render } from "./renderTasks";

let addBtn = document.querySelector(".addBtn");
let activeMenu = "myTasks";


function renderAddTask(){
    addBtn.addEventListener("click",()=>{
        if(activeMenu === "todayTasks"){
            todayTask()
        }else{
            myTasks();
        }
    })
}

function myTasks(){
    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "My Tasks ";
    
        render(tasksArr);
  
    
}

function todayTask(){
    let todayTaskArr = tasksArr.filter(task=>differenceInDays(startOfDay(new Date(task.date)),startOfDay(new Date())) === 0);

    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "Today Tasks ";

   
      
        render(todayTaskArr);
        activeMenu = "todayTasks";
        console.log(activeMenu);
    
   
}

export {myTasks,todayTask,renderAddTask};
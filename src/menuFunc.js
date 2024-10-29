import { tasksArr } from "./addTasks";
import {differenceInDays,startOfDay } from 'date-fns';

import { render,selectedProject } from "./renderTasks";

let addBtn = document.querySelector(".addBtn");
let activeMenu = "myTasks";



function renderAddTask(){
    addBtn.addEventListener("click",()=>{
        if(activeMenu === "todayTasks"){
            todayTask()
        }else if(activeMenu === "weeklyTasks"){
            weeklyTask();
        }else if(activeMenu === "pastTasks"){
            pastTask();
        }else if(activeMenu === "importantTasks"){
            importantTask();
        }else if(activeMenu === "projectTasks"){
           projectTask(selectedProject);

        }

        else{
            myTasks();
        }
    })
}





function myTasks(){
    
    let myTasksArr = tasksArr.filter(task=>task.projectName === "projectOption" || task.projectName === "" )

    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "My Tasks ";
    
        render(myTasksArr);
  
    
}

function todayTask(){
    let todayTaskArr = tasksArr.filter(task=>differenceInDays(startOfDay(new Date(task.date)),startOfDay(new Date())) === 0 && task.projectName === "projectOption" || task.projectName === "");

    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "Today Tasks ";

   
      
        render(todayTaskArr);
        activeMenu = "todayTasks";
        console.log(activeMenu);
    
   
}

function weeklyTask(){
    let weeklyTaskArr = tasksArr.filter(task=>differenceInDays(startOfDay(new Date(task.date)),startOfDay(new Date())) <= 7 && differenceInDays(startOfDay(new Date(task.date)),startOfDay(new Date())) >= 0 && task.projectName === "projectOption" || task.projectName === "");

    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "Weekly Tasks ";

   
      
        render(weeklyTaskArr);
        activeMenu = "weeklyTasks";
}

function pastTask(){
    let pastTaskArr = tasksArr.filter(task=>differenceInDays(startOfDay(new Date(task.date)),startOfDay(new Date())) < 0 && task.projectName === "projectOption" || task.projectName === "");
    
    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "Past Tasks ";

   
      
        render(pastTaskArr);
        activeMenu = "pastTasks";
}

const imprtanceOrder = {high:1, medium:2, low:3};

function importantTask(){
    let importantTaskArr = tasksArr.filter(task=>task.importance !== "importance").sort((a,b)=> imprtanceOrder[a.importance] - imprtanceOrder[b.importance] && task.projectName === "projectOption" || task.projectName === "");

    
    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "Important Tasks ";

   
      
        render(importantTaskArr);
        activeMenu = "importantTasks";
    
}


function projectTask(projectMenu){
    let projectArr = tasksArr.filter(task=>task.projectName === projectMenu);

    let expHead = document.querySelector(".exp-head");
    expHead.textContent = projectMenu;

    render(projectArr);
    activeMenu = "projectTasks";

  

}

export {myTasks,todayTask,renderAddTask,weeklyTask,pastTask,importantTask,projectTask};
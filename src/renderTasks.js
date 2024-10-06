import {differenceInDays } from 'date-fns';

let taskItems = document.querySelector(".task-items");


function render(tasksArr){
    taskItems.innerHTML = ``;

tasksArr.forEach(todos=>{
    let tasks = document.createElement("div");
    tasks.classList.add("tasks");
    taskItems.append(tasks);

    let checkSpan = document.createElement("span");
    checkSpan.classList.add("check-span");
     tasks.append(checkSpan);

     let checkInput = document.createElement("input");
     checkInput.type = "checkbox";
     checkInput.classList.add("check-input");
     checkSpan.append(checkInput);
     

     let dateTask = document.createElement("div");
     dateTask.classList.add("date-task");
     tasks.append(dateTask);


     let taskDisp = document.createElement("div");
     taskDisp.classList.add("task-disp");
     dateTask.append(taskDisp);

     let taskSpan = document.createElement("span");
     taskSpan.textContent = todos.task;
     taskDisp.append(taskSpan);

     let dateDisp = document.createElement("div");
     dateDisp.classList.add("date-disp");
     dateTask.append(dateDisp);

     let dateSpan = document.createElement("span");
        const today = new Date();
        const remainingDays = differenceInDays(todos.date,today);

        if(remainingDays>0){
            dateSpan.textContent = `remaining : ${remainingDays} days`;

        }else if(remainingDays === 0){
            dateSpan.textContent = "Today!";
        }

        else{
            dateSpan.textContent = "Task date is past";
        }

    
     dateDisp.append(dateSpan);

    









})
 }


 export {render};

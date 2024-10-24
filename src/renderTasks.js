import {differenceInDays,startOfDay } from 'date-fns';
import { showDetails,changeDetails } from './taskform';
import { addTask } from './addTasks';
import { tasksArr } from './addTasks';
import { deleteTasks } from './updateTasks';

let taskItems = document.querySelector(".task-items");
let addBtn = document.querySelector(".addBtn");
let changeBtn = document.querySelector(".changeBtn");



function render(listArr){
    
    taskItems.innerHTML = ``;
  
listArr.forEach((todos,i)=>{
    const taskArrIndex = tasksArr.indexOf(todos);  



    let tasks = document.createElement("div");
    tasks.classList.add("tasks");
    taskItems.append(tasks);

    if(todos.importance == 'high'){
        tasks.classList.add("border-r-4","border-r-red-500");
    }
    else if(todos.importance == 'medium'){
        tasks.classList.add("border-r-4","border-r-blue-500");

}else if(todos.importance == 'low'){
    tasks.classList.add("border-r-4","border-r-green-500");

}else{
    tasks.classList.add("border-r-4","border-r-slate-500");

}

   
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

     checkInput.addEventListener('change', function () {
        if (this.checked) {
            dateTask.classList.add("line-strike");
        } else {
            dateTask.classList.remove("line-strike");
        }
    });


     let taskSpan = document.createElement("span");
     taskSpan.textContent = todos.task;
     taskDisp.append(taskSpan);

     let dateDisp = document.createElement("div");
     dateDisp.classList.add("date-disp");
     dateTask.append(dateDisp);

     let dateSpan = document.createElement("span");
        const today = startOfDay(new Date());
        const remainingDays = differenceInDays(startOfDay(new Date(todos.date)),today);

        if(remainingDays>0){
            dateSpan.textContent = `remaining : ${remainingDays} days`;

        }else if(remainingDays === 0){
            dateSpan.textContent = "Today!";
        }

        else{
            dateSpan.textContent = "Task date is past";
        }

    
     dateDisp.append(dateSpan);

     let delIcon = document.createElement("i");
     delIcon.classList.add("bi","bi-trash","del-icon");
     tasks.append(delIcon);
        
      delIcon.addEventListener("click",()=>{
        deleteTasks(taskArrIndex);
        console.log(taskArrIndex);
        tasks.remove();
      })


     let detailIcon = document.createElement("i");
     detailIcon.classList.add("bi","bi-three-dots","detail-icon");
     tasks.append(detailIcon);
        
      
     detailIcon.addEventListener("click",()=>{
       showDetails(todos, taskArrIndex); 
     })
})


changeBtn.addEventListener("click",()=>{
    changeDetails();
    render(listArr);
})
 

}



 addBtn.addEventListener("click",()=>{
    addTask();
   
 });

 export {render};

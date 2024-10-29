import {differenceInDays,startOfDay } from 'date-fns';
import { effect } from './menueffect';
import { showDetails,changeDetails,showProjectDetails } from './taskform';
import { addTask } from './addTasks';
import { tasksArr,projectArr,saveToLocalStorage } from './addTasks';
import { projectTask} from './menuFunc';
import { deleteTasks,deleteProject } from './updateTasks';

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
     checkInput.checked = todos.completed;
     

     let dateTask = document.createElement("div");
     dateTask.classList.add("date-task");
     tasks.append(dateTask);


     let taskDisp = document.createElement("div");
     taskDisp.classList.add("task-disp");
     dateTask.append(taskDisp);

     if(todos.completed){

        dateTask.classList.add("line-strike");


     }

     checkInput.addEventListener('change', function () {
        todos.completed = this.checked;
        if (this.checked) {
            dateTask.classList.add("line-strike");
        } else {
            dateTask.classList.remove("line-strike");
        }
        saveToLocalStorage("tasksArr", tasksArr);
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

let selectedProject = null;

function renderProjectMenu(){
    let projectItems = document.querySelector(".project-items");
    projectItems.innerHTML = ``;
    projectArr.forEach((project,i)=>{
        let projectMenus = document.createElement("div");
        projectMenus.classList.add("project-menus","menus");
        projectItems.append(projectMenus);

        let folderIcon = document.createElement("i");
        folderIcon.classList.add("bi","bi-folder2","text-xl");
        projectMenus.append(folderIcon);

        let projectSpan = document.createElement("span");
        projectSpan.classList.add("project-span");
        projectSpan.textContent = project.projectName;
        selectedProject = projectSpan.textContent;
        projectMenus.append(projectSpan);
        
        projectMenus.addEventListener("click",()=>{
            projectTask(projectSpan.textContent);
        })
    let projectDeleteIcon = document.createElement("i");
    projectDeleteIcon.classList.add("bi", "bi-trash", "mr-4","active:text-red-500");
    projectDeleteIcon.addEventListener('click',()=>{
        deleteProject(i);
        projectMenus.remove(); 
      
    })
    projectMenus.append(projectDeleteIcon);

    let projectDetailsIcon = document.createElement("i");
    projectDetailsIcon.classList.add("bi", "bi-three-dots","active:text-green-500");
    projectDetailsIcon.addEventListener("click",()=>{
        showProjectDetails(project);
    });
    projectMenus.append(projectDetailsIcon)
    saveToLocalStorage("projectArr",projectArr);

    })
    
    effect();
}

function projectOption(addOption){
    addOption.innerHTML = `<option value="projectOption" id="projectSelectDefault" disabled>Project</option>`
    //let detailOption = document.querySelector("#projectDetSelect");
    //detailOption.innerHTML = `<option value="projectOption"  disabled>Project</option>`
    projectArr.forEach(project=>{
         let selectOption = document.createElement("option");
         selectOption.textContent = project.projectName;
         selectOption.value = project.projectName;
         addOption.append(selectOption);
        //detailOption.append(selectOption);
    })
}


 addBtn.addEventListener("click",()=>{
    addTask();
   
 });

 export {render,renderProjectMenu,projectOption,selectedProject};

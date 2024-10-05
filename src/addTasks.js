import { removeForm } from "./taskform";

let tasksArr = [];

class tasks {
    constructor(task,date,description,importance){
        this.task = task;
        this.date = date;
        this.description = description;
        this.importance = importance;
    }
}

function addTask(){
    let task = document.querySelector("#task").value;
    let date = document.querySelector("#date").value;
    let description = document.querySelector("#description").value;
    let importance = document.querySelector("#importance").value;
    let todo = new tasks(task,date,description,importance);
   
    if(todo.task !== "" && todo.date !== ""){
    removeForm();
    tasksArr.push(todo);

}
tasksArr.forEach((a)=>{
    console.log(a.task);
})

    console.log(tasksArr);
}

export {addTask};
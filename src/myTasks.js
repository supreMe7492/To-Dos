import { tasksArr } from "./addTasks";
import { render } from "./renderTasks";

function myTasks(){
    let expHead = document.querySelector(".exp-head");
    expHead.textContent = "My Tasks ";
    if(tasksArr !== ""){
        render(tasksArr);
    }
    
}

export {myTasks};
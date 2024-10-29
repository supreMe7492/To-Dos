import { tasksArr,projectArr,saveToLocalStorage } from "./addTasks";
import { myTasks } from "./menuFunc";
function deleteTasks(i){

        tasksArr.splice(i,1);
        saveToLocalStorage("tasksArr",tasksArr)

}

function deleteProject(index){
        const projectToDelete = projectArr[index];
        projectArr.splice(index,1);
        for (let i = tasksArr.length - 1; i >= 0; i--) {
                if (tasksArr[i].projectName === projectToDelete.projectName) {
                    tasksArr.splice(i, 1);  
                }
            }
            
            
            saveToLocalStorage("tasksArr",tasksArr);
           saveToLocalStorage("projectArr",projectArr);
           myTasks();
}



export {deleteTasks,deleteProject};
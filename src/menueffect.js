let menus = document.querySelectorAll('.menus');
function effect(){
    
    menus.forEach((menu)=>{
    menu.addEventListener('click',()=>{
        
    menus.forEach((i)=>{
        i.classList.remove("bg-slate-300", "bg-opacity-10");
    })
    menu.classList.add("bg-slate-300", "bg-opacity-10");
})
})}


export {effect};
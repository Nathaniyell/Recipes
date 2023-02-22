const hamburgger = document.getElementById('burger');
const menu = document.getElementById('menu')

hamburgger.addEventListener('click', ()=>{
    if(menu.classList.contains("hidden")){
        menu.classList.remove('hidden')
        // console.log("clicked remove")
    }else{
        menu.classList.add('hidden')
        // console.log("clicked add")
    }
    
})
const toggle_btn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.header .menu')

toggle_btn.addEventListener('click', ()=>{
    if(!(menu.classList.contains('active'))){
        menu.classList.add('active')
        menu.style.display = "block";
        
    } else{
        menu.classList.remove('active')
        menu.style.display = "none";
        var x = document.getElementById("icon-close.svg").style.width = "50px"; innerHeight = "50px";
    }
}
)


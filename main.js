const toggle_btn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.header .menu')

toggle_btn.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    } else{
        menu.classList.add('active')
    }
})
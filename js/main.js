const navToggle = document.querySelector(".toggle-menu");
const navMenu = document.querySelector(".menu");


navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("menu_oculto");
});

const navLink = document.querySelectorAll('.menu_nav_link')
const linkAction = () =>{navMenu.classList.toggle("menu_oculto")}
navLink.forEach(n => n.addEventListener('click',linkAction))

window.addEventListener('load', ()=>{
    if(NavigationPreloadManager.geolocalization){
        
    }
})
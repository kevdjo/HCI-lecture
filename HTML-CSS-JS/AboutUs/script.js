const hamburgerMenu = document.querySelector(".ham-menu")
const slideNav = document.querySelector(".nav-menu")

hamburgerMenu.addEventListener("click", () =>{
    hamburgerMenu.classList.toggle("active")
    slideNav.classList.toggle("open")
})

window.addEventListener("resize",()=>{
    if(window.innerWidth >= 1024){
        slideNav.classList.remove("open")
        hamburgerMenu.classList.remove("active")
    }
})
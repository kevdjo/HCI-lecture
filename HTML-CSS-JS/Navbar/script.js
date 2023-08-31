const hamburgerMenu = document.querySelector(".ham-menu")
const slideNav = document.querySelector(".nav-menu")
const clothes = document.querySelector(".clothes-drop")
const dropDown = document.querySelector(".drop-down")

hamburgerMenu.addEventListener("click", () =>{
    hamburgerMenu.classList.toggle("active")
    slideNav.classList.toggle("open")
})

window.addEventListener("resize",()=>{
    if(window.innerWidth >= 1024){
        slideNav.classList.remove("open")
        hamburgerMenu.classList.remove("active")
        dropDown.classList.remove("active")
    }
})



clothes.addEventListener("click", ()=>{
    dropDown.classList.toggle("active")
})

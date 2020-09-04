 const makeNavSlide = () => {
     const burger = document.querySelector(".burger")
     const nav = document.querySelector(".nav-list")
     const navItems = document.querySelectorAll(".nav-list li")

     burger.addEventListener("click", () => {
         nav.classList.toggle("nav-active")
         navItems.forEach((item, index) => {
             if (item.style.animation) {
                 item.style.animation = ''
             } else {
                item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
             }
             
        })
        burger.classList.toggle("toggleBurger")
     })
 }

 const app = () => {
     makeNavSlide()
 }

 app()
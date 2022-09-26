let open = true

const navbar = document.querySelector(".navbar")
const closeNavbar = document.querySelector(".burguer-btn")
const menuMobile = document.querySelector(".menu-mobile")

const menuHamburguer = () => {
    closeNavbar.classList.toggle("close", open)
    navbar.classList.toggle("open", open)
    open = !open
}
menuMobile.addEventListener("click", menuHamburguer)
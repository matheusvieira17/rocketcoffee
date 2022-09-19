let open = true
const navbar = document.querySelector(".navbar")
const closeNavbar = document.querySelector(".burguer-btn")
const menuMobile = document.querySelector(".menu-mobile")

menuMobile.addEventListener("click", () => {
    closeNavbar.classList.toggle("close", open)
    navbar.classList.toggle("open", open)
    open = !open
})
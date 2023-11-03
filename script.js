const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

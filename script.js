const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-menu");
const topoIcons = document.querySelector(".topo-icons")

menuToggle.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	menuToggle.classList.toggle("active");

	if (navLinks.classList.contains("active")) {
		topoIcons.style.display = "none";
	} else {
		topoIcons.style.display = "";
	}
});

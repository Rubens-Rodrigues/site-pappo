const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-menu");
const topoIcons = document.querySelector(".topo-icons");

menuToggle.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	menuToggle.classList.toggle("active");

	if (navLinks.classList.contains("active")) {
		topoIcons.style.display = "none";
	} else {
		topoIcons.style.display = "";
	}
});


//slider blog

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;
  let slidesToShow = 1;

  const slideWidth = slides[0].offsetWidth;

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex -= slidesToShow;
      if (currentIndex < 0) {
        currentIndex = 0;
      }
      updateSlider();
    }
  }

  function nextSlide() {
    if (currentIndex < slides.length - slidesToShow) {
      currentIndex += slidesToShow;
      updateSlider();
    }
  }

  function updateSlider() {
    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-menu");
const topoIcons = document.querySelector(".topo-icons");
const body = document.querySelector("body");

menuToggle.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	menuToggle.classList.toggle("active");

	if (navLinks.classList.contains("active")) {
		topoIcons.style.display = "none";
    body.classList.add("no-scroll");
	} else {
		topoIcons.style.display = "";
    body.classList.remove("no-scroll");
	}
});

document.addEventListener('click', (event) => {
  if (
    navLinks.classList.contains("active") &&
    event.target !== menuToggle
  ) {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    topoIcons.style.display = "";
    body.classList.remove("no-scroll");
  }
});

// Mudar cor menu
addEventListener("load", function () {
  addEventListener("scroll", function () {
    var specialSections = document.querySelectorAll('[data="special"]');
    var maxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    window.addEventListener("scroll", function () {
      var isSpecialVisible = false;
      for (var i = 0; i < specialSections.length; i++) {
        if (
          specialSections[i].getBoundingClientRect().top < window.innerHeight &&
          specialSections[i].getBoundingClientRect().bottom > 0
        ) {
          isSpecialVisible = true;
          break;
        }
      }
      if (isSpecialVisible) {
        document.getElementById("menu-right").style.color = "#000";
        document.getElementById("bar-color1").style.backgroundColor = "#000";
        document.getElementById("bar-color2").style.backgroundColor = "#000";
        document.getElementById("border-color").style.borderColor = "#000";
    
      } else {
        document.getElementById("menu-right").style.color = "#fff";
        document.getElementById("bar-color1").style.backgroundColor = "#fff";
        document.getElementById("bar-color2").style.backgroundColor = "#fff";
        document.getElementById("border-color").style.borderColor = "#fff";
      }
    });
  });
});

// Dropdow
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');

  items.forEach((item) => {
    const title = item.querySelector('.title');
    const arrow = item.querySelector('.arrow');
    const description = item.querySelector('.description');

    item.addEventListener('click', () => {
      description.classList.toggle('active');
      arrow.textContent = description.classList.contains('active') ? 'v' : '>';
    });
  });
});



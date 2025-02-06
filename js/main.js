// Start TYPE JS
var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
});
// End TYPE JS

// Start SCROLL NAVBAR JS
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 870) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// End SCROLL NAVBAR JS

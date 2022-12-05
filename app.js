const burgerMenu = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-link");

burgerMenu.addEventListener("click", (e) => {
  console.log("clicked menu");
  navLinks.classList.toggle("hide-links");
});

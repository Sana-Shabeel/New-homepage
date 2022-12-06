const burgerMenu = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-link");
const hideSidemenu = document.querySelector(".fa-x");
const sidemenu = document.querySelector("aside");
// const sidemenu = document.querySelector(".side-bar-links ");

burgerMenu.addEventListener("click", (e) => {
  console.log("clicked menu");
  sidemenu.classList.toggle("hide");
});

hideSidemenu.addEventListener("click", (e) => {
  sidemenu.classList.toggle("hide");
});

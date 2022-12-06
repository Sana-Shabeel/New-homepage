const burgerMenu = document.querySelector(".fa-bars");
const hideSidemenu = document.querySelector(".fa-x");
const sidemenu = document.querySelector("aside");

burgerMenu.addEventListener("click", (e) => {
  console.log("clicked menu");
  sidemenu.classList.toggle("hide");
});

hideSidemenu.addEventListener("click", (e) => {
  sidemenu.classList.toggle("hide");
});

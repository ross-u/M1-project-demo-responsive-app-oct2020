const menuButton = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", function () {
  navMenu.classList.toggle("hide-menu");
});

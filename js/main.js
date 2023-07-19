const menu = document.querySelector(".nav__link");
const openMenuBtn = document.querySelector(".nav__menu");
const closeMenuBtn = document.querySelector(".nav__close");
function click() {
  menu.classList.toggle("nav__opened");
}

openMenuBtn.addEventListener("click",click);
closeMenuBtn.addEventListener("click",click);
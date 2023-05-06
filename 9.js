// Aside DropDown

const dropdown = document.querySelector(".main-section__aside-dropdown");
const dropdownList = document.querySelector("#getting-started-list");
const arrow = document.querySelector(".fa-caret-right");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("is-active");
  dropdownList.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

// Hamburger

const toggleButton = document.querySelector(".header-toggle");
const menu = document.querySelector(".header-menu");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("open");
  menu.classList.toggle("clicked");
  body.classList.toggle("scroll");
});

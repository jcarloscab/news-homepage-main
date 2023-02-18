// variables
openMenu = document.getElementById("open-menu");
closeMenu = document.getElementById("close-menu");
itemsBackground = document.getElementById("main-menu-items-background");
items = document.getElementById("main-menu-items");

//  listeners
openMenu.addEventListener("click", () => {
  itemsBackground.classList.add("main-menu__items-background--visible");
  items.classList.add("main-menu__items--open");
});

closeMenu.addEventListener("click", () => {
  itemsBackground.classList.remove("main-menu__items-background--visible");
  items.classList.remove("main-menu__items--open");
});

itemsBackground.addEventListener("click", () => {
  itemsBackground.classList.remove("main-menu__items-background--visible");
  items.classList.remove("main-menu__items--open");
});

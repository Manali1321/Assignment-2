var menuToggle = document.querySelector(".menu-toggle");
menuToggle.onclick = toggleMenu;
function toggleMenu() {
    var menu = document.querySelector("#main-menu .menu");
    menu.classList.toggle("show-small");
}
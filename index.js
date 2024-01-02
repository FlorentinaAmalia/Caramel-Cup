const menuBtn = document.querySelector("nav.navbar .menu");
const menuCloseBtn = document.querySelector(".menu-close");

const listLink = document.querySelector("nav.navbar ul");
let menuClicked = false;

menuBtn.addEventListener("click", () => {
    showMenu("block");
});
menuCloseBtn.addEventListener("click", () => {
    showMenu("none");
});

function showMenu(display) {
    if (display == "block") {
        menuClicked = true;
    } else {
        menuClicked = false;
    }
    listLink.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
    menuCloseBtn.classList.toggle("hidden");
}
changeMenuColumn();
windowResize();
window.addEventListener("resize", windowResize);

function windowResize() {
    changeMenuColumn();
    if (window.innerWidth < 1050) {
        // show buttons for width < 1000
        document.querySelector(".buttons").classList.remove("hidden");
    } else {
        //  hide buttons if width > 1000
        document.querySelector(".buttons").classList.add("hidden");
        // show links
        listLink.classList.remove("hidden");
    }
}

function changeMenuColumn() {
    // menu is hidden on width < 1000 if menu button is not clicked
    if (!menuClicked) {
        listLink.classList.add("hidden");
    }
}

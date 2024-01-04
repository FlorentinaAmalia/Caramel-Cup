const menuBtn = document.querySelector("nav.navbar .menu");
const menuCloseBtn = document.querySelector(".menu-close");

const listLink = document.querySelector("nav.navbar ul");
// const links = listLink.querySelectorAll("a");

let menuClicked = false;

// form

const formContact = document.querySelector(".form-contact");
const submitButton = formContact.querySelector("button");

const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");

const inputs = document.querySelectorAll(".form-contact input");
const textArea = document.querySelector("#message");
// const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    for (let input of inputs) {
        console.log(input);
        checkFill(input);
    }
    checkFill(textArea);
});

function checkFill(input) {
    let err = document.querySelector(`.error-${input.name}`);
    if (!input.value.trim() && input.name !== "email") {
        err.classList.remove("hidden");
    } else if (input.name === "email") {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
            err.classList.add("hidden");
        } else {
            err.classList.remove("hidden");
        }
    } else {
        err.classList.add("hidden");
    }
}

// navbar

menuBtn.addEventListener("click", () => {
    showMenu("block");
});
menuCloseBtn.addEventListener("click", () => {
    showMenu("none");
});

function showMenu(display) {
    menuClicked = display === "block";

    // document.querySelector("section.hero").classList.toggle("menu");
    listLink.classList.toggle("hidden");
    menuBtn.classList.toggle("hidden");
    menuCloseBtn.classList.toggle("hidden");
}
changeMenuColumn();
windowResize();
window.addEventListener("resize", windowResize);

function windowResize() {
    changeMenuColumn();
    if (window.innerWidth <= 1050) {
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

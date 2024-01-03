const menuBtn = document.querySelector("nav.navbar .menu");
const menuCloseBtn = document.querySelector(".menu-close");

const listLink = document.querySelector("nav.navbar ul");
// const links = listLink.querySelectorAll("a");

let menuClicked = false;

// carousel
const innerCarousel = document.querySelector(".carousel-inner");
const imagesCarousel = document.querySelectorAll(".carousel-inner img");
const nextCarousel = document.querySelector(".next-carousel");
const prevCarousel = document.querySelector(".prev-carousel");

let currentCarouselImage = 0;

nextCarousel.addEventListener("click", () => {
    resetInterval();
    currentCarouselImage++;
    changeImage();
});

prevCarousel.addEventListener("click", () => {
    resetInterval();
    currentCarouselImage--;
    changeImage();
});

function changeImage() {
    if (currentCarouselImage > imagesCarousel.length - 1) {
        currentCarouselImage = 0;
    } else if (currentCarouselImage < 0) {
        currentCarouselImage = imagesCarousel.length - 1;
    }
    innerCarousel.style.transform = `translateX(${
        -currentCarouselImage * 100
    }%)`;
}

let intervalCarousel = setInterval(() => {
    currentCarouselImage++;
    changeImage();
}, 3000);

function resetInterval() {
    clearInterval(intervalCarousel);
    intervalCarousel = setInterval(() => {
        currentCarouselImage++;
        changeImage();
    }, 3000);
}

// carousel end

menuBtn.addEventListener("click", () => {
    showMenu("block");
});
menuCloseBtn.addEventListener("click", () => {
    showMenu("none");
});

function showMenu(display) {
    menuClicked = display === "block";

    document.querySelector("section.hero").classList.toggle("menu");

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

// for (let link of links) {
//     link.addEventListener("click", closeMenu);
// }

// function closeMenu() {
//     if (window.innerWidth < 1050) {
//         showMenu("none");
//     }
// }

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

const hero = document.getElementById("hero");

const backgrounds = [
    "image/hero1.png",
    "image/hero2.png",
    "image/hero3.png"
];

let current = 0;

function changeHeroBackground() {
    hero.style.backgroundImage = `url('${backgrounds[current]}')`;
    current = (current + 1) % backgrounds.length;
}

changeHeroBackground();

setInterval(changeHeroBackground, 3000);
/* headder */
const hamburger = document.getElementById("hamburger");
const navList = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");
    const nav = document.querySelector("nav");
    if (navList.classList.contains("show")) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

/* Slider effect */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
function showSlide(index) {
    const offset = -index * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(index);
    });
});

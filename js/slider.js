let currentSlide = 0;
let slides, dots;
let interval;

function initSlider() {
    slides = document.querySelectorAll(".slide");
    dots = document.querySelectorAll(".dot");

    showSlide(currentSlide);

    interval = setInterval(nextSlide, 5000);

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            clearInterval(interval);
            goToSlide(i);
            interval = setInterval(nextSlide, 5000);
        });
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(index);
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".slider-container")) {
        initSlider();
    }
});
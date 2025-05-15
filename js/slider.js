let currentSlide = 0;
let slides, dots, slider, totalSlides;
let interval;

function initSlider() {
  slider = document.querySelector(".slider");
  slides = document.querySelectorAll(".slide");
  dots = document.querySelectorAll(".dot");
  totalSlides = slides.length;

  const firstClone = slides[0].cloneNode(true);
  slider.appendChild(firstClone);

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
  currentSlide++;
  showSlide(currentSlide);

  if (currentSlide === totalSlides) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentSlide = 0;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;

      setTimeout(() => {
        slider.style.transition = "transform 1s ease-in-out";
      }, 50);
    }, 1000); 
  }
}

function showSlide(index) {
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (index < totalSlides && dots[index]) {
    dots[index].classList.add("active");
  } else {
    dots[0].classList.add("active"); 
  }
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

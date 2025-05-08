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

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightboxOverlay");
const lightboxImg = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("lightboxClose");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

const navLinks = document.querySelectorAll("nav a");
const popups = {
  "About Us": document.getElementById("About Us-popup"),
  "Services": document.getElementById("Services-popup"),
  "Projects": document.getElementById("Projects-popup"),
  "NewsRoom": document.getElementById("NewsRoom-popup"),
  "Contact Us": document.getElementById("Contact Us-popup"),
};

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.trim();
    Object.values(popups).forEach(p => p.style.display = "none");
    if (popups[text]) {
      popups[text].style.display = "block";
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav") && !e.target.closest(".popup")) {
    Object.values(popups).forEach(p => p.style.display = "none");
  }
});

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

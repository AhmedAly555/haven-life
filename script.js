const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const subtext = document.getElementById('subtext');
const currentCounter = document.getElementById('current');
const totalCounter = document.getElementById('total');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Array of subtexts for each slide
const subtexts = [
    "Decades of experience have laid out the path for a local family-owned business to become...",
    "We create sustainable landmarks that stand the test of time and enrich communities...",
    "Innovation, dedication, and excellence drive every project we bring to life..."
];

let currentIndex = 0;

// Initialize total slides
totalCounter.textContent = `0${slides.length}`;

function updateSlider() {
    // تحريك السلايدر باستخدام transform
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    subtext.textContent = subtexts[currentIndex];
    currentCounter.textContent = `0${currentIndex + 1}`;
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

// Auto Slide every 2 seconds
setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
}, 5000);

// Initial state
updateSlider();
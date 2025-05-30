// Scroll animation for main image
window.addEventListener('scroll', function() {
    const mainImage = document.getElementById("main-image");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate scale and opacity based on scroll position
    const scale = Math.max(0, 1 - scrollPosition / windowHeight); // Scale from 1 to 0
    const opacity = Math.max(0, 1 - scrollPosition / windowHeight); // Opacity from 1 to 0

    // Apply transform and opacity
    mainImage.style.transform = `scale(${scale})`;
    mainImage.style.opacity = opacity;
});
///////////////////////
const fadeElements = document.querySelectorAll('.fade-in');

function handleScrollFade() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);
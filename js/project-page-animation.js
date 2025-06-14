window.addEventListener('scroll', function() {
    const mainImage = document.getElementById("main-image");
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    const scale = Math.max(0, 1 - scrollPosition / windowHeight); 
    const opacity = Math.max(0, 1 - scrollPosition / windowHeight); 

    mainImage.style.transform = `scale(${scale})`;
    mainImage.style.opacity = opacity;
});
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
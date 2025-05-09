function revealServices() {
    const services = document.querySelectorAll('.service');
    const triggerBottom = window.innerHeight * 0.85;

    services.forEach(service => {
        const serviceTop = service.getBoundingClientRect().top;

        if (serviceTop < triggerBottom) {
            service.classList.add('visible');
        } else {
            service.classList.remove('visible'); // عشان يحصل تفاعل دايمًا مش مرة واحدة
        }
    });
}

window.addEventListener('scroll', revealServices);
window.addEventListener('load', revealServices);


const services = document.querySelectorAll('.service');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

services.forEach(service => {
    observer.observe(service);
});
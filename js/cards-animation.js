function initStaggeredAnimation(selectors, options = {}) {
    const {
        delay = 100,
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px'
    } = options;

    const elements = selectors.flatMap(selector =>
        [...document.querySelectorAll(selector)]
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * delay);
            }
        });
    }, { threshold, rootMargin });

    elements.forEach(el => observer.observe(el));
}

// الاستخدام
document.addEventListener('DOMContentLoaded', () => {
    initStaggeredAnimation(['.news-card', '.projects-card'], {
        delay: 150,
        threshold: 0.05
    });
});
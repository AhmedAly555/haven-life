
function setupHorizontalScroll(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let isDown = false;
    let startX;
    let scrollLeft;
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // mobile scroll
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].clientX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    }, { passive: false });
    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].clientX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    }, { passive: false });
    container.addEventListener('touchend', () => {
        isDown = false;
    });
}
setupHorizontalScroll('scrollableNews');
setupHorizontalScroll('scrollableProjects');
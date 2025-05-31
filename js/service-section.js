document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const dynamicBg = document.getElementById('dynamicBackground');
    const serviceItems = document.querySelectorAll('.service-item');
    const defaultBg = '../assets/pic/3d.png';
//construction -- interior design -- real estate development -- 3D decoration and finishing technologies
    // Preload Images
    function preloadImages() {
        const imageUrls = [defaultBg];
        serviceItems.forEach(item => {
            if (item.dataset.bg) {
                imageUrls.push(item.dataset.bg);
            }
        });

        imageUrls.forEach(url => {
            new Image().src = url;
        });
    }

    // Set Default Background
    function setDefaultBackground() {
        dynamicBg.style.backgroundImage = `url(${defaultBg})`;
        dynamicBg.classList.add('active');
    }

    // Setup Service Hover Effects
    function setupServiceHover() {
        serviceItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const bgImage = this.dataset.bg || defaultBg;
                dynamicBg.style.backgroundImage = `url(${bgImage})`;
            });

            item.addEventListener('mouseleave', function() {
                dynamicBg.style.backgroundImage = `url(${defaultBg})`;
            });
        });
    }

    // Initialize
    function initServices() {
        preloadImages();
        setDefaultBackground();
        setupServiceHover();
    }

    // Start
    initServices();
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.getElementById("nav-links");
    const currentPath = window.location.pathname;

    // تبسيط الشرط للتحقق إذا كنا في صفحة غير الرئيسية
    if (currentPath !== "home.html" && currentPath !== "/") {
        const homeLink = document.createElement("li");
        homeLink.innerHTML = '<a href="/html/home.html">Home</a>';
        navLinks.insertBefore(homeLink, navLinks.firstChild);
    }

    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector("nav ul");

    if (hamburger && navList) {
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
    }
});

document.querySelectorAll('#nav-links a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
        link.addEventListener('click', (e) => e.preventDefault());
    }
});

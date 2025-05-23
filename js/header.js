document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll('#nav-links a').forEach(link => {
        const linkHref = link.getAttribute("href");
        const linkPage = linkHref.split("/").pop();

        if (linkPage === currentPage || (currentPage === "" && linkPage === "home.html")) {
            link.classList.add('active');
        }
    });

    // إضافة رابط Home إن لم يكن موجود
    const navLinks = document.getElementById("nav-links");
    const hasHome = Array.from(navLinks.children).some(li =>
        li.querySelector("a")?.getAttribute("href")?.includes("home.html")
    );

    if (currentPage !== "home.html" && currentPage !== "" && !hasHome) {
        const homeLink = document.createElement("li");
        homeLink.innerHTML = '<a href="/html/home.html">Home</a>';
        navLinks.insertBefore(homeLink, navLinks.firstChild);
    }

    // القائمة الجانبية
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector("nav ul");
    const nav = document.querySelector("nav");

    if (hamburger && navList) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navList.classList.toggle("show");

            nav.style.display = navList.classList.contains("show") ? "block" : "none";
        });
    }

    // إغلاق القائمة عند الضغط على رابط
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            hamburger.classList.remove('active');
            nav.style.display = "none";
        });
    });
});

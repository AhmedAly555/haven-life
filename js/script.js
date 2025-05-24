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
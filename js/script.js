document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const navList = document.getElementById("nav-links");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    nav.classList.toggle("show");
    header.classList.toggle("menu-open");
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");

    document.body.style.overflow = navList.classList.contains("show") ? "hidden" : "auto";
  });

  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("show") &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      nav.classList.remove("show");
      navList.classList.remove("show");
      hamburger.classList.remove("active");
      header.classList.remove("menu-open");
      document.body.style.overflow = "auto";
    }
  });

  window.addEventListener("load", () => {
    if (window.innerWidth <= 768) {
      header.classList.add("center-logo");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      header.classList.remove("center-logo");
      nav.classList.remove("show");
      navList.classList.remove("show");
      hamburger.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });


});

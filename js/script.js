
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navList.classList.toggle("show");

      if (navList.classList.contains("show")) {
        document.body.style.overflow = "hidden"; // إخفاء سكرول
      } else {
        document.body.style.overflow = "auto";
      }
    });
  });

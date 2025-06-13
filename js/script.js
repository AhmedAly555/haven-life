document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const navList = document.getElementById("nav-links");

  // عند الضغط على زر الهامبورجر
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();

    // Toggle classes
    nav.classList.toggle("show");
    header.classList.toggle("center-logo");
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");

    // التحكم في scroll الجسم
    document.body.style.overflow = navList.classList.contains("show") ? "hidden" : "auto";
  });

  // عند الضغط في أي مكان خارج القائمة أو زر الهامبورجر
  document.addEventListener("click", (e) => {
    if (
      nav.classList.contains("show") &&
      !nav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      nav.classList.remove("show");
      navList.classList.remove("show");
      hamburger.classList.remove("active");
      header.classList.add("center-logo");
      document.body.style.overflow = "auto";
    }
  });

  // عند تحميل الصفحة على الموبايل
  window.addEventListener("load", () => {
    if (window.innerWidth <= 768) {
      header.classList.add("center-logo");
    }
  });

  // عند تغيير حجم الشاشة
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

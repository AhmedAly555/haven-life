
document.addEventListener("DOMContentLoaded", function () {
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
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navList.classList.toggle("show");

    if (navList.classList.contains("show")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});

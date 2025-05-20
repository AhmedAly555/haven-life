window.addEventListener("load", () => {
  const galleryImages = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImage");
  const closeBtn = document.getElementById("lightboxClose");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      lightboxImg.src = img.src;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("show");
    });
  }
});

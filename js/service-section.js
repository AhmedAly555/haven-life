
const serviceRows = document.querySelectorAll('.service-item');
const bgCurrent = document.querySelector('.bg-image.current');
const bgNext = document.querySelector('.bg-image.next');

const defaultBackground = "../assets/pic/3d.webp";
const Background2 = "../assets/pic/construction.webp";
const Background3 = "../assets/pic/interiorDesign.webp";
const Background4 = "../assets/pic/maintenance.webp";
const Background5 = "../assets/pic/sSafety.webp";
let currentBackground = defaultBackground;

let isTransitioning = false;

function switchBackground(newBg) {
  if (newBg === currentBackground || isTransitioning) return;

  isTransitioning = true;

  bgNext.style.backgroundImage = `url('${newBg}')`;
  bgNext.style.opacity = 1;
  bgNext.style.zIndex = 2;
  bgCurrent.style.zIndex = 1;

  const onTransitionEnd = () => {
    bgCurrent.style.backgroundImage = `url('${newBg}')`;
    bgCurrent.style.opacity = 1;
    bgNext.style.opacity = 0;
    currentBackground = newBg;
    isTransitioning = false;

    bgNext.removeEventListener('transitionend', onTransitionEnd);
  };

  bgNext.addEventListener('transitionend', onTransitionEnd);
}

serviceRows.forEach((row) => {
  row.addEventListener('mouseenter', () => {
    const newBg = row.getAttribute('data-bg');
    if (newBg) switchBackground(newBg);
  });

  row.addEventListener('mouseleave', () => {
    switchBackground(defaultBackground);
  });
});

/* ===== ANIMACION POR SCROLL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
const bottomHidden = document.querySelectorAll('.bottom-hidden');
const hiddenHeader = document.querySelectorAll('.hidden-header');
const hiddenRightElements = document.querySelectorAll('.right-hidden');
const hiddenLeftElements = document.querySelectorAll('.left-hidden');
const hiddenBackElements = document.querySelectorAll('.back-hidden');
hiddenElements.forEach((el) => observer.observe(el));
bottomHidden.forEach((el) => observer.observe(el));
hiddenHeader.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));
hiddenBackElements.forEach((el) => observer.observe(el));
hiddenLeftElements.forEach((el) => observer.observe(el));
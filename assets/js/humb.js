document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav__links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav__active');
    hamburger.classList.toggle('toggle');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav__active');
    hamburger.classList.toggle('toggle');
  });
});
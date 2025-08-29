const bodyMob = document.body;
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('.mobile-menu-open-button');
const closeButton = document.querySelectorAll('.mobile-menu-close-button');

const mobileMenuToggle = () => mobileMenu.classList.toggle('is-open');
const bodyScrollToggle = () => bodyMob.classList.toggle('is-open');

burgerButton.addEventListener('click', mobileMenuToggle);
closeButton.forEach(button => {
  button.addEventListener('click', mobileMenuToggle);
});
burgerButton.addEventListener('click', bodyScrollToggle);
closeButton.forEach(button => {
  button.addEventListener('click', bodyScrollToggle);
});

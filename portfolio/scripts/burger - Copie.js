const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
burger.classList.toggle('active');
});

const button = document.querySelector('.menu-toggler');
const menu = document.querySelector('.top-nav');

button.addEventListener('click', () => {
button.classList.toggle('open');
menu.classList.toggle('open');
});
const hamburger = document.querySelector('.hamburger');
const menuBar = document.querySelector('.navbar-menu .menu-bar');
hamburger.addEventListener('click', () => {
  menuBar.classList.toggle('show');
})

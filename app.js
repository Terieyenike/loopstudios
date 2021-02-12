const hamburger = document.getElementById('hamburger');
let menuOpen = false;
const navList = document.getElementById('nav__list');

hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuOpen = true;
    navList.classList.add('show');
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
    navList.classList.remove('show');
  }
});

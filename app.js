// const hamburger = document.getElementById('hamburger');
// let menuOpen = false;
// const navList = document.getElementById('nav__list');

// hamburger.addEventListener('click', () => {
//   if (!menuOpen) {
//     hamburger.classList.add('open');
//     menuOpen = true;
//     navList.classList.add('show');
//   } else {
//     hamburger.classList.remove('open');
//     menuOpen = false;
//     navList.classList.remove('show');
//   }
// });

const menu = document.getElementById('nav__list');
const hamburger = document.getElementById('hamburger');

const toggleMenu = () => {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    hamburger.classList.remove('open');
  } else {
    menu.classList.add('showMenu');
    hamburger.classList.add('open');
  }
};

let menuLinks = document.querySelectorAll('.nav__link');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleMenu);
});

hamburger.addEventListener('click', toggleMenu);

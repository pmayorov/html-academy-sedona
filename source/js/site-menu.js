let navButton = document.querySelector('.nav-button');
let siteMenu = document.querySelector('.site-menu');
let headerLogo = document.querySelector('.header__logo');

navButton.classList.remove('nav-button--nojs');
siteMenu.classList.remove('site-menu--nojs');
headerLogo.classList.remove('header__logo--nojs');

navButton.onclick = function () {
  navButton.classList.toggle('nav-button--active');
  siteMenu.classList.toggle('site-menu--opened');
}


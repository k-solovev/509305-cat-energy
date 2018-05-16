var menuBtn = document.querySelector(".btn--toggle");
var mobileMenu = document.querySelector(".main-nav__list");

menuBtn.addEventListener("click", function (evt) {

  if (mobileMenu.classList.contains('main-nav__list--close')) {
    mobileMenu.classList.remove('main-nav__list--close');
    mobileMenu.classList.add('main-nav__list--open');

    if (menuBtn.classList.contains('btn--close')) {
      menuBtn.classList.remove('btn--close');
      menuBtn.classList.add('btn--open');
    }}

    else {
    mobileMenu.classList.add('main-nav__list--close');
    mobileMenu.classList.remove('main-nav__list--open');

    if (menuBtn.classList.contains('btn--open')) {
      menuBtn.classList.remove('btn--open');
      menuBtn.classList.add('btn--close');
    }
  }
});

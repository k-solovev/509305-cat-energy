var menuBtn = document.querySelector(".btn--toggle");
var mobileMenu = document.querySelector(".main-nav__list");

menuBtn.addEventListener("click", function (evt) {

  if (mobileMenu.classList.contains('main-nav--close')) {
    mobileMenu.classList.remove('main-nav--close');
    mobileMenu.classList.add('main-nav--open');

    if (menuBtn.classList.contains('btn--close')) {
      menuBtn.classList.remove('btn--close');
      menuBtn.classList.add('btn--open');
    }}

    else {
    mobileMenu.classList.add('main-nav--close');
    mobileMenu.classList.remove('main-nav--open');

    if (mobilMenu.classList.contains('btn-open')) {
      menuBtn.classList.remove('btn--open');
      menuBtn.classList.add('btn--close');
    }
  }
});

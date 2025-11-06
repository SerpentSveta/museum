export function openBurgerMenu() {
  const body = document.querySelector('body');
  const headerBurger = document.querySelector('.header__burger');
  const header = document.querySelector('.header');
  const welcomeContent = document.querySelector('.welcome__content');
  const menuLink = document.querySelectorAll('.menu a');

  const openBurgerMenuByHeaderBurger = () => {
    headerBurger.addEventListener('click', function () {
      header.classList.toggle('open');

      if (!header.classList.contains('open')) {
        headerBurger.classList.remove('header__burger_close');

        header.addEventListener('transitionend', function handler() {
          welcomeContent.classList.remove('hidden');
          header.removeEventListener('transitionend', handler);
        });
      } else {
        welcomeContent.classList.add('hidden');
        headerBurger.classList.add('header__burger_close');
      }
    });
  };

  const closeBurgerMenuByLink = () => {
    menuLink.forEach((link) => {
      link.addEventListener('click', function () {
        header.classList.remove('open');
        welcomeContent.classList.remove('hidden');
        headerBurger.classList.remove('header__burger_close');
      });
    });
  };

  const closeBurgerMenuByClick = () => {
    body.addEventListener('click', function () {
      if (header.classList.contains('open')) {
        header.classList.remove('open');
        welcomeContent.classList.remove('hidden');
        headerBurger.classList.remove('header__burger_close');
      }
    });

    body.querySelector('header').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  };

  openBurgerMenuByHeaderBurger();
  closeBurgerMenuByLink();
  closeBurgerMenuByClick();
}

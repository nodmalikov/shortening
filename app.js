const elJsMenu = document.querySelector('.js-menu');
const elJsBtnMenu = document.querySelector('.js-btn__menu');

elJsBtnMenu.addEventListener('click', function () {
    elJsMenu.classList.toggle('mobile-menu__active');
});
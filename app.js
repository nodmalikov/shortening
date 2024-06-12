const elJsMenu = document.querySelector('.js-menu');
const elJsBtn = document.querySelector('.js-btn');

elJsBtn.addEventListener('click', function () {
    elJsMenu.classList.toggle('mobile-header__active');
});
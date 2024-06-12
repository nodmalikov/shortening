const elJsMenu = document.querySelector('.js-menu');
const elJsBtn = document.querySelector('.js-btn');
const elJsForm = document.querySelector('.js-form');
const elResult = document.querySelector('.statistics__result');

elJsBtn.addEventListener('click', function () {
    elJsMenu.classList.toggle('mobile-header__active');
});

elJsForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
elResult.classList.add('statistics-open')    
});
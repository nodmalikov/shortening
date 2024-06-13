const elJsMenu = document.querySelector('.js-menu');
const elJsBtn = document.querySelector('.js-btn');
const elJsForm = document.querySelector('.js-form');
const elResult = document.querySelector('.statistics__result');
const elJsStatistics = document.querySelector('.js-statistics');

if (elJsBtn) {
    elJsBtn.addEventListener('click', function () {
        elJsMenu.classList.toggle('mobile-header__active');
    });
}

if (elJsForm) {
    elJsForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        
    elResult.classList.add('statistics-open');  
    });
}

if (elJsStatistics) {
    elJsStatistics.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-result-btn')) {
            // CHANGE-BUTTON-TEXT
            evt.target.textContent = 'Copied!';

            // CHANGE-BUTTON-BGCOLOR
            evt.target.classList.add('result-btn-active');

            // SETTIMEOUT
            setTimeout(function () {
                evt.target.textContent = 'Copy';
                evt.target.classList.remove('result-btn-active');
            }, 1000);
        }
    });
}
const elJsMenu = document.querySelector('.js-menu');
const elJsBtn = document.querySelector('.js-btn');
const elJsForm = document.querySelector('.js-form');
const elResult = document.querySelector('.statistics__result');
const elJsStatistics = document.querySelector('.js-statistics');
const elJsClose = document.querySelector('.js-close');
const elHeader = document.querySelector('.header');
const elMainContent = document.querySelector('.main');

if (elJsBtn) {
    elJsBtn.addEventListener('click', function () {
        elJsMenu.classList.toggle('mobile-header__active');
    });
}

if (elJsClose) {
    elJsClose.addEventListener('click', function () {
        elJsMenu.classList.remove('mobile-header__active');
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
            
            // COPY-LINK-CLIPBOARD
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
            
            // SETTIMEOUT
            setTimeout(function () {
                evt.target.textContent = 'Copy';
                evt.target.classList.remove('result-btn-active');
            }, 1000);
        }
    });
}

// SCROLL
window.onscroll = function() {
    const offset = elHeader.offsetHeight;
    if (window.scrollY > offset - 20) {
        elHeader.classList.add('header-border');
    } else if (window.scrollY < offset - 20) {
        elHeader.classList.remove('header-border');
    }
}

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);

// AOS
 AOS.init();

// LOADER
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

let chooseBtn = document.getElementById('burger__button'),
    burgerMenu = document.querySelector('.popup'),
    header = document.querySelector ('.header__div');

chooseBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('popup-on')
});
chooseBtn.addEventListener('click', function() {
    header.classList.toggle('header__active')
});

chooseBtn.addEventListener('click', function() {
    chooseBtn.classList.toggle('burger__button-close')
});

(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());
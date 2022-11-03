let chooseBtn = document.getElementById('burger__button'),
    burgerMenu = document.querySelector('.popup'),
    header = document.querySelector ('.header__div'),
    opened = false;

chooseBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('popup-on')
});
chooseBtn.addEventListener('click', function() {
    if (window.pageYOffset < 50){
    header.classList.toggle('header__active')}
});

chooseBtn.addEventListener('click', function() {
    chooseBtn.classList.toggle('burger__button-close')
});

(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');} 
        else if (burgerMenu.classList.contains('popup-on')) {
            
        }
        else {
            header.classList.remove('header__active');
        }
    };
}());
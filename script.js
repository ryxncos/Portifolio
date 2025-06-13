document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const menuH = document.querySelector('.menuH');
    const main = document.querySelector('main');

    menuH.addEventListener('click', function(){
        menuH.classList.toggle('active');
        nav.classList.toggle('active');

});

    main.addEventListener('click', function(){
        menuH.classList = ("menuH");
        nav.classList = ("nav")
});

})
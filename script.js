document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    const menuH = document.querySelector('.menuH');

    menuH.addEventListener('click', function(){
        menuH.classList.toggle('active');
        nav.classList.toggle('active');

});
})
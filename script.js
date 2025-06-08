document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.menuHamburguer');
    const menu = document.querySelector('.menu'); 

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Opcional: Fechar o menu quando um link é clicado (útil em Single Page Applications)
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se a largura da janela é menor ou igual ao breakpoint de mobile
            if (window.innerWidth <= 768) {
                hamburgerMenu.classList.remove('active');
                menu.classList.remove('active');       
            }
        });
    });
});
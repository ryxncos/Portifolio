document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const nav = document.querySelector('.nav'); // Seu menu de navegação
    const menuH = document.querySelector('.menuH'); // Seu botão de hambúrguer

    // Verifica se os elementos essenciais existem antes de adicionar listeners
    if (nav && menuH) {

        // 1. Lógica para abrir/fechar o menu ao clicar no hambúrguer
        menuH.addEventListener('click', function(event) {
            event.stopPropagation(); // Impede que o clique no hambúrguer propague para o 'document'
            menuH.classList.toggle('active'); // Alterna a classe para animar o hambúrguer (ex: para X)
            nav.classList.toggle('active');   // Alterna a classe para mostrar/esconder o menu
        });

        // 2. Lógica para fechar o menu ao clicar em um link dentro dele
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Se o menu estiver aberto, remove a classe 'active' de ambos
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuH.classList.remove('active'); // Garante que o hambúrguer volte ao normal
                }
            });
        });

        // 3. Lógica para fechar o menu ao clicar FORA do menu ou do botão do hambúrguer
        document.addEventListener('click', function(event) {
            // Se o menu estiver aberto E o clique não foi no nav E não foi no menuH
            if (nav.classList.contains('active') && !nav.contains(event.target) && !menuH.contains(event.target)) {
                nav.classList.remove('active');
                menuH.classList.remove('active'); // Garante que o hambúrguer volte ao normal
            }
        });

    } else {
        console.warn("Elementos '.nav' ou '.menuH' não encontrados. Verifique seu HTML.");
    }
});
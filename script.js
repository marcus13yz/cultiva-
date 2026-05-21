// --- 0. FORÇA O SITE A SEMPRE CARREGAR NO TOPO ---
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);


document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNCIONAMENTO DO MENU MOBILE ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navActions = document.getElementById('nav-actions');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-outline');

    if (mobileMenuBtn && navActions) {
        mobileMenuBtn.addEventListener('click', () => {
            navActions.classList.toggle('active');
        });

        // Fecha o menu ao clicar em algum link (no celular)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navActions.classList.remove('active');
            });
        });
    }

    // --- 2. FUNCIONAMENTO DE MÚLTIPLOS CARROSSÉIS ---
    // Pega todos os carrosséis que existirem na página
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        let slides = carousel.querySelectorAll('.carousel-slide');
        let slideIndex = 0;

        if (slides.length > 0) {
            // Cria uma função exclusiva para cada carrossel
            function changeSlide() {
                // Esconde todas as fotos
                slides.forEach(slide => slide.classList.remove('active'));
                
                // Pula para a próxima
                slideIndex++;
                
                // Se chegou na última foto, volta para a primeira
                if (slideIndex >= slides.length) { 
                    slideIndex = 0; 
                }
                
                // Mostra a foto atual
                slides[slideIndex].classList.add('active');
            }

            // Inicia o temporizador (Muda a foto a cada 3 segundos)
            setInterval(changeSlide, 3000);
        }
    });
});
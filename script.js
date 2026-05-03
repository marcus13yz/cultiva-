document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FUNCIONAMENTO DO MENU MOBILE ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navActions = document.getElementById('nav-actions');
    const navLinks = document.querySelectorAll('.nav-links a, .btn-outline');

    if (mobileMenuBtn && navActions) {
        mobileMenuBtn.addEventListener('click', () => {
            navActions.classList.toggle('active');
        });

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
                slides.forEach(slide => slide.classList.remove('active'));
                slideIndex++;
                
                if (slideIndex >= slides.length) { 
                    slideIndex = 0; 
                }
                
                slides[slideIndex].classList.add('active');
            }

            // Inicia o temporizador (Muda a cada 3 segundos)
            setInterval(changeSlide, 3000);
        }
    });

});
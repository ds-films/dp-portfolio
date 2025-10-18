document.addEventListener('DOMContentLoaded', () => {

    function initPreloader() { /* ... be pakeitimų ... */ }
    function initFooter() { /* ... be pakeitimų ... */ }
    function initActiveNav() { /* ... be pakeitimų ... */ }
    function initScrollAnimations() { /* ... be pakeitimų ... */ }
    function handleMainPage() { /* ... be pakeitimų ... */ }
    function initLightbox() { /* ... be pakeitimų ... */ }
    function handleBiographyCarousel() { /* ... be pakeitimų ... */ }

    // NAUJA FUNKCIJA HERO ANIMACIJAI
    function initHeroSlider() {
        const slider = document.querySelector('.hero-slider');
        if (!slider) return; // Vykdyti tik jei yra hero-slider elementas

        const slides = slider.querySelectorAll('.hero-slide');
        if (slides.length <= 1) return; // Nėra prasmės keisti, jei tik viena nuotrauka

        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Keisti nuotrauką kas 5 sekundes
    }

    // --- Paleidimas ---
    window.addEventListener('load', () => {
        initPreloader();
        initFooter();
        initActiveNav();
        initScrollAnimations();
        handleMainPage();
        handleBiographyCarousel();
        initLightbox(); 
        initHeroSlider(); // Įjungiame hero animaciją
    });
});

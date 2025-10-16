document.addEventListener('DOMContentLoaded', () => {
    // ... (kitos funkcijos, pvz., hidePreloader, initFooter, lieka tokios pačios)

    function handleBiographyPage() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer) return;

        const track = carouselContainer.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        const slideWidth = slides[0].getBoundingClientRect().width;
        let currentSlide = 0;

        const moveToSlide = (targetSlide) => {
            track.style.transform = 'translateX(-' + slides[targetSlide].style.left + ')';
            currentSlide = targetSlide;
        };

        slides.forEach((slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        });

        nextButton.addEventListener('click', () => {
            const nextSlide = (currentSlide + 1) % slides.length;
            moveToSlide(nextSlide);
        });

        prevButton.addEventListener('click', () => {
            const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
            moveToSlide(prevSlide);
        });
    }

    function handleAlbumPage() {
        // ... (senas kodas)
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxCounter = document.querySelector('.lightbox-counter');
        
        function updateLightboxImage() {
            const item = photoItems[currentImageIndex];
            lightboxImg.src = item.dataset.src;
            lightboxCaption.textContent = item.querySelector('img').alt; // Gauname pavadinimą iš alt
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${photoItems.length}`;
        }
        // ... (likęs kodas be pakeitimų)
    }

    // --- Paleidimas ---
    // ...
    handleBiographyPage();
    // ...
});

document.addEventListener('DOMContentLoaded', () => {

    function initPreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
        document.body.classList.add('loaded');
    }

    function initFooter() {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    function initActiveNav() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    }

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animated');
        if (animatedElements.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    function handleMainPage() {
        const albumGrid = document.getElementById('album-grid');
        if (!albumGrid) return;
        
        async function fetchAlbums() {
            try {
                const response = await fetch('gallery-data.json');
                const data = await response.json();
                renderAlbums(data);
            } catch (error) {
                console.error('Error fetching albums:', error);
                albumGrid.innerHTML = '<p>Nepavyko įkelti albumų.</p>';
            }
        }

        function renderAlbums(albums) {
            albumGrid.innerHTML = albums.map(album => `
                <a href="albums/${album.id}.html" class="album-card animated">
                    <div class="album-card-image"><img src="${album.coverImage}" alt="${album.title}" loading="lazy"></div>
                    <h3>${album.title}</h3>
                </a>
            `).join('');
            initScrollAnimations();
        }
        fetchAlbums();
    }

    function initLightbox() {
        const galleryItems = Array.from(document.querySelectorAll('.lightbox-trigger'));
        const lightbox = document.getElementById('lightbox');
        if (galleryItems.length === 0 || !lightbox) return;

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.querySelector('.lightbox-close');
        const lightboxPrev = document.querySelector('.lightbox-prev');
        const lightboxNext = document.querySelector('.lightbox-next');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxCounter = document.querySelector('.lightbox-counter');
        let currentImageIndex = 0;
        let touchStartX = 0;

        // NAUJAS PAKEITIMAS: Paimame albumo pavadinimą iš H1 antraštės
        const albumTitle = document.querySelector('.page-title-section h1')?.textContent || document.querySelector('.bio-name')?.textContent || 'Galerija';

        function updateLightbox() {
            const item = galleryItems[currentImageIndex];
            lightboxImg.src = item.dataset.src;
            lightboxCaption.textContent = albumTitle; // Visada rodomas albumo pavadinimas
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${galleryItems.length}`;
        }

        function openLightbox(index) {
            currentImageIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
        }
        
        function closeLightbox() { lightbox.classList.remove('active'); }
        function showNextImage() { currentImageIndex = (currentImageIndex + 1) % galleryItems.length; updateLightbox(); }
        function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(index);
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
            }
        });

        lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
        lightbox.addEventListener('touchend', (e) => {
            if (touchStartX === 0) return;
            const touchEndX = e.changedTouches[0].clientX;
            const swipeDiff = touchEndX - touchStartX;
            if (swipeDiff > 50) showPrevImage();
            else if (swipeDiff < -50) showNextImage();
            touchStartX = 0;
        });
    }

    function handleBiographyCarousel() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer) return;

        const track = carouselContainer.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        if (slides.length <= 1) {
            if(nextButton) nextButton.style.display = 'none';
            if(prevButton) prevButton.style.display = 'none';
            return;
        };
        let currentSlide = 0;

        const moveToSlide = (targetSlide) => {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${slideWidth * targetSlide}px)`;
            currentSlide = targetSlide;
        };

        nextButton.addEventListener('click', () => {
            const nextSlide = (currentSlide + 1) % slides.length;
            moveToSlide(nextSlide);
        });

        prevButton.addEventListener('click', () => {
            const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
            moveToSlide(prevSlide);
        });
        
        window.addEventListener('resize', () => moveToSlide(currentSlide));
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
    });
});

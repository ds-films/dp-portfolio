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

    function handleAlbumPage() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        const photoItems = Array.from(document.querySelectorAll('.photo-item'));
        if (photoItems.length === 0) return;

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxClose = document.querySelector('.lightbox-close');
        const lightboxPrev = document.querySelector('.lightbox-prev');
        const lightboxNext = document.querySelector('.lightbox-next');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxCounter = document.querySelector('.lightbox-counter');
        let currentImageIndex = 0;

        function updateLightbox() {
            const item = photoItems[currentImageIndex];
            lightboxImg.src = item.dataset.src;
            lightboxCaption.textContent = item.querySelector('img').alt;
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${photoItems.length}`;
        }

        function showNextImage() { currentImageIndex = (currentImageIndex + 1) % photoItems.length; updateLightbox(); }
        function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + photoItems.length) % photoItems.length; updateLightbox(); }
        function closeLightbox() { lightbox.classList.remove('active'); }

        photoItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentImageIndex = index;
                updateLightbox();
                lightbox.classList.add('active');
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        lightbox.addEventListener('click', (e) => { if (e.target === lightboxContent) return; closeLightbox(); });

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
            }
        });
    }

    function handleBiographyPage() {
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer) return;

        const track = carouselContainer.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = carouselContainer.querySelector('.carousel-button.next');
        const prevButton = carouselContainer.querySelector('.carousel-button.prev');
        let currentSlide = 0;

        const moveToSlide = (targetSlide) => {
            track.style.transform = 'translateX(-' + slides[targetSlide].offsetLeft + 'px)';
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

        window.addEventListener('resize', () => {
            slides.forEach((slide, index) => {
                const slideWidth = slide.getBoundingClientRect().width;
                slide.style.left = slideWidth * index + 'px';
            });
            moveToSlide(currentSlide);
        });
    }

    // --- Paleidimas ---
    window.addEventListener('load', () => {
        initPreloader();
        initFooter();
        initActiveNav();
        initScrollAnimations();
        handleMainPage();
        handleAlbumPage();
        handleBiographyPage();
    });
});

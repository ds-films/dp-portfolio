document.addEventListener('DOMContentLoaded', () => {

    function hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
        document.body.classList.add('loaded');
    }

    function setupFooter() {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    function handleMainPage() {
        const albumGrid = document.getElementById('album-grid');
        if (!albumGrid) return;

        const views = document.querySelectorAll('.view');
        const navLinks = document.querySelectorAll('.nav-link');

        async function initGallery() {
            try {
                const response = await fetch('gallery-data.json');
                const galleryData = await response.json();
                renderAlbumGrid(galleryData);
            } catch (error) {
                console.error('Klaida įkeliant galerijos duomenis:', error);
                albumGrid.innerHTML = '<p>Nepavyko įkelti albumų.</p>';
            }
        }

        function renderAlbumGrid(albums) {
            albumGrid.innerHTML = '';
            albums.forEach(album => {
                const card = document.createElement('a');
                card.className = 'album-card';
                card.href = `albums/album-${album.id}.html`;
                card.innerHTML = `<img src="${album.coverImage}" alt="${album.title}" loading="lazy"><div class="album-title"><h3>${album.title}</h3></div>`;
                albumGrid.appendChild(card);
            });
        }

        function setupNavigation() {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        switchView(link.dataset.nav);
                        document.getElementById(href.substring(1)).scrollIntoView();
                    }
                });
            });
            handleInitialHash();
        }

        function switchView(viewId) {
            views.forEach(view => view.style.display = 'block'); // Rodyti viską, kad scroll veiktų
            navLinks.forEach(l => l.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[data-nav="${viewId}"]`);
            if (activeLink) activeLink.classList.add('active');
        }

        function handleInitialHash() {
            const hash = window.location.hash.substring(1);
            if (hash === 'about' || hash === 'contact') {
                switchView(hash);
                document.getElementById(hash).scrollIntoView();
            } else {
                switchView('albums');
            }
        }

        initGallery();
        setupNavigation();
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
        const lightboxCounter = document.querySelector('.lightbox-counter');
        let currentImageIndex = 0;
        let touchStartX = 0;

        function updateLightboxImage() {
            const item = photoItems[currentImageIndex];
            lightboxImg.src = item.dataset.src;
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${photoItems.length}`;
        }

        function showNextImage() { currentImageIndex = (currentImageIndex + 1) % photoItems.length; updateLightboxImage(); }
        function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + photoItems.length) % photoItems.length; updateLightboxImage(); }
        function closeLightbox() { lightbox.classList.remove('active'); }

        photoItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentImageIndex = index;
                updateLightboxImage();
                lightbox.classList.add('active');
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
        
        // --- Свайпы ---
        lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
        lightbox.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const swipeDiff = touchEndX - touchStartX;
            if (swipeDiff > 50) showPrevImage();
            if (swipeDiff < -50) showNextImage();
        });
    }

    // --- Запуск ---
    hidePreloader();
    setupFooter();
    handleMainPage();
    handleAlbumPage();
});

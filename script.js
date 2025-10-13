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

    function highlightActiveNav() {
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop() || 'index.html';
            if (linkPath === currentPath) {
                link.classList.add('active');
            }
        });
    }

    function handleMainPage() {
        const albumGrid = document.getElementById('album-grid');
        if (!albumGrid) return;

        async function initGallery() {
            try {
                const response = await fetch('gallery-data.json');
                const galleryData = await response.json();
                renderAlbumGrid(galleryData);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
                albumGrid.innerHTML = '<p>Nepavyko įkelti albumų.</p>';
            }
        }

        function renderAlbumGrid(albums) {
            albumGrid.innerHTML = '';
            albums.forEach(album => {
                const card = document.createElement('a');
                card.className = 'album-card';
                card.href = `albums/${album.id}.html`;
                card.innerHTML = `<img src="${album.coverImage}" alt="${album.title}" loading="lazy"><div class="album-title"><h3>${album.title}</h3></div>`;
                albumGrid.appendChild(card);
            });
        }
        initGallery();
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
        const lightboxInfo = document.querySelector('.lightbox-info');
        let currentImageIndex = 0;
        let touchStartX = 0;

        function updateLightboxImage() {
            const item = photoItems[currentImageIndex];
            const author = item.dataset.author || 'N/A';
            const camera = item.dataset.camera || 'N/A';
            lightboxImg.src = item.dataset.src;
            lightboxInfo.innerHTML = `<span>${author}</span> &bull; <span>${camera}</span>`;
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
        
        lightbox.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
        lightbox.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            if (touchEndX - touchStartX > 50) showPrevImage();
            if (touchStartX - touchEndX > 50) showNextImage();
        });
    }

    // --- Запуск всех функций ---
    hidePreloader();
    setupFooter();
    highlightActiveNav();
    handleMainPage();
    handleAlbumPage();
});

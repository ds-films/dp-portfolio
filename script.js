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
                    <img src="${album.coverImage}" alt="${album.title}" loading="lazy">
                    <div class="album-title"><h3>${album.title}</h3></div>
                </a>
            `).join('');
            initScrollAnimations(); // Повторно запускаем для добавленных элементов
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
        const lightboxInfo = document.querySelector('.lightbox-info');
        const lightboxCounter = document.querySelector('.lightbox-counter');
        let currentImageIndex = 0;

        function updateLightbox() {
            const item = photoItems[currentImageIndex];
            const author = item.dataset.author || 'N/A';
            const camera = item.dataset.camera || 'N/A';
            lightboxImg.src = item.dataset.src;
            lightboxInfo.innerHTML = `<span>${author} &bull; ${camera}</span>`;
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${photoItems.length}`;
        }
        
        // ... (остальной код для lightbox без изменений)
    }

    // --- Запуск всех функций ---
    window.addEventListener('load', () => {
        initPreloader();
        initFooter();
        initActiveNav();
        initScrollAnimations();
        handleMainPage();
        handleAlbumPage();
    });
});

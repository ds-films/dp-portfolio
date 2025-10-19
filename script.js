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
            yearSpan.textContent = '2025';
        }
    }
    
    function initStickyHeader() {
        const header = document.querySelector('header');
        if (!header) return;

        // Veikia visuose puslapiuose
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    function initMobileNav() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });
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
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                renderAlbums(data);
            } catch (error) {
                console.error('Error fetching albums:', error);
                albumGrid.innerHTML = '<p>Nepavyko įkelti albumų. Bandykite perkrauti puslapį.</p>';
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
    
    function initHeroSlider() { /* ... be pakeitimų ... */ }
    function initLightbox() { /* ... be pakeitimų ... */ }
    function handleBiographyCarousel() { /* ... be pakeitimų ... */ }

    // --- Paleidimas ---
    initPreloader();
    initFooter();
    initMobileNav();
    initActiveNav();
    initScrollAnimations();
    handleMainPage();
    initHeroSlider();
    handleBiographyCarousel();
    initLightbox();
    initStickyHeader();
});

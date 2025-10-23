document.addEventListener('DOMContentLoaded', () => {

    function initPreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
    }

    function initSideNav() {
        const navToggle = document.getElementById('nav-toggle');
        const sideNav = document.getElementById('side-nav');
        const body = document.body;

        if (!navToggle || !sideNav) return;

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            sideNav.classList.toggle('open');
            body.classList.toggle('nav-open');
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

    function handleMainPage() {
        const albumGrid = document.getElementById('album-grid');
        if (!albumGrid) return;
        
        async function fetchAlbums() {
            try {
                const response = await fetch('gallery-data.json');
                const data = await response.json();
                albumGrid.innerHTML = data.map(album => `
                    <a href="albums/${album.id}.html" class="album-card">
                        <img src="${album.coverImage}" alt="${album.title}" loading="lazy">
                        <div class="album-title"><h3>${album.title}</h3></div>
                    </a>
                `).join('');
            } catch (error) {
                console.error('Error fetching albums:', error);
                albumGrid.innerHTML = '<p>Nepavyko įkelti albumų.</p>';
            }
        }
        fetchAlbums();
    }

    function initHeroSlider() {
        const slider = document.querySelector('.hero-slider');
        if (!slider) return;

        const slides = slider.querySelectorAll('.hero-slide');
        if (slides.length <= 1) return;

        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // --- Paleidimas ---
    initPreloader();
    initSideNav();
    initActiveNav();
    handleMainPage();
    initHeroSlider();
});

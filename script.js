document.addEventListener('DOMContentLoaded', () => {
    
    // --- Bazinės funkcijos ---
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

    // --- Pagrindinio puslapio specifinė logika ---
    const albumGrid = document.getElementById('album-grid');
    if (albumGrid) { // Vykdyti tik pagrindiniame puslapyje
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
                card.innerHTML = `
                    <img src="${album.coverImage}" alt="${album.title}" loading="lazy">
                    <div class="album-title"><h3>${album.title}</h3></div>
                `;
                albumGrid.appendChild(card);
            });
        }

        function setupNavigation() {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (link.getAttribute('href').startsWith('#')) {
                        e.preventDefault();
                        switchView(link.dataset.nav);
                    }
                });
            });

            handleInitialHash();
        }
        
        function switchView(viewId) {
            views.forEach(view => view.style.display = 'none');
            const targetView = document.getElementById(`${viewId}-view`);
            if (targetView) {
                targetView.style.display = 'block';
                targetView.classList.add('active');
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[data-nav="${viewId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        function handleInitialHash() {
            const hash = window.location.hash.substring(1);
            if (hash === 'about' || hash === 'contact') {
                switchView(hash);
            } else {
                switchView('albums');
            }
        }
        
        // Vykdyti viską
        initGallery();
        setupNavigation();
    }

    // Bendros funkcijos, veikiančios visuose puslapiuose
    setupFooter();
    hidePreloader(); 
});

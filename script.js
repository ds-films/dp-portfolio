document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementai
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('nav a, .logo');
    const albumGrid = document.getElementById('album-grid');

    // --- Pagrindinė funkcija ---
    async function init() {
        if (!albumGrid) return;
        try {
            const response = await fetch('gallery-data.json');
            const galleryData = await response.json();
            renderAlbumGrid(galleryData);
        } catch (error) {
            console.error('Klaida įkeliant galerijos duomenis:', error);
            albumGrid.innerHTML = '<p>Nepavyko įkelti albumų. Bandykite vėliau.</p>';
        }
    }

    // --- Albumų tinklelio generavimas ---
    function renderAlbumGrid(albums) {
        albumGrid.innerHTML = '';
        albums.forEach(album => {
            const card = document.createElement('a');
            card.className = 'album-card';
            card.href = `albums/album-${album.id}.html`; 

            card.innerHTML = `
                <img src="${album.coverImage}" alt="${album.title}" loading="lazy">
                <div class="album-title">
                    <h3>${album.title}</h3>
                </div>
            `;
            albumGrid.appendChild(card);
        });
    }

    // --- Navigacijos valdymas ---
    function setupNavEventListeners() {
        navLinks.forEach(link => {
            link.addEventListener('click', e => {
                const targetViewId = e.currentTarget.dataset.nav;
                if (!targetViewId) return;

                e.preventDefault();
                switchView(targetViewId);
                
                navLinks.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                // Atnaujinti URL, kad būtų galima kopijuoti nuorodą
                history.pushState(null, null, targetViewId === 'albums' ? window.location.pathname : `#${targetViewId}`);
            });
        });

        // NAUJA DALIS: Tikriname URL puslapio įkrovimo metu
        handleInitialHash();
    }
    
    function switchView(viewId) {
        views.forEach(view => view.classList.remove('active'));
        const targetViewElement = document.getElementById(`${viewId}-view`);
        if (targetViewElement) {
            targetViewElement.classList.add('active');
        }
    }

    function handleInitialHash() {
        const hash = window.location.hash.substring(1);
        if (hash === 'about' || hash === 'contact') {
            switchView(hash);
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`nav a[data-nav="${hash}"]`).classList.add('active');
        } else {
            switchView('albums');
        }
    }

    init();
    setupNavEventListeners();
});

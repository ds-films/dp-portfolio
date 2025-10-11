document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementai
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('nav a, .logo');
    const albumGrid = document.getElementById('album-grid');
    const photoGrid = document.getElementById('photo-grid');
    const galleryTitle = document.getElementById('gallery-title');
    const backToAlbumsBtn = document.getElementById('back-to-albums');

    // Lightbox elementai
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const exifToggle = document.getElementById('exif-toggle');
    const exifDataContainer = document.getElementById('exif-data');

    let galleryData = [];
    let currentAlbumImages = [];
    let currentImageIndex = 0;

    // --- Pagrindinė funkcija ---
    async function init() {
        try {
            const response = await fetch('gallery-data.json');
            galleryData = await response.json();
            renderAlbumGrid(galleryData);
            setupEventListeners();
        } catch (error) {
            console.error('Klaida įkeliant galerijos duomenis:', error);
            albumGrid.innerHTML = '<p>Nepavyko įkelti albumų. Bandykite vėliau.</p>';
        }
    }

    // --- Rodinių generavimas ---
    function renderAlbumGrid(albums) {
        albumGrid.innerHTML = '';
        albums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.dataset.albumId = album.id;
            card.innerHTML = `
                <img src="${album.coverImage}" alt="${album.title}" loading="lazy">
                <div class="album-title">
                    <h3>${album.title}</h3>
                </div>
            `;
            albumGrid.appendChild(card);
        });
    }

    function renderGalleryView(albumId) {
        const album = galleryData.find(a => a.id === albumId);
        if (!album) return;

        currentAlbumImages = album.images;
        galleryTitle.textContent = album.title;
        photoGrid.innerHTML = '';

        album.images.forEach((image, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.dataset.index = index;
            
            const aspectRatioClass = image.aspectRatio === '1:1' ? 'aspect-1-1' : 'aspect-3-2';
            photoItem.classList.add(aspectRatioClass);

            photoItem.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
            photoGrid.appendChild(photoItem);
        });
        
        switchView('gallery-view');
    }

    // --- Rodinių valdymas ---
    function switchView(viewId) {
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(`${viewId}-view`).classList.add('active');
        window.scrollTo(0, 0);
    }
    
    function handleNavClick(e) {
        e.preventDefault();
        const targetView = e.currentTarget.dataset.nav;
        switchView(targetView);
        
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelectorAll(`[data-nav="${targetView}"]`).forEach(el => el.classList.add('active'));
    }

    // --- Įvykių klausytojai (Event Listeners) ---
    function setupEventListeners() {
        // Navigacija
        navLinks.forEach(link => link.addEventListener('click', handleNavClick));

        // Albumo paspaudimas
        albumGrid.addEventListener('click', e => {
            const card = e.target.closest('.album-card');
            if (card) {
                renderGalleryView(card.dataset.albumId);
            }
        });

        // Grįžimas į albumus
        backToAlbumsBtn.addEventListener('click', () => switchView('albums'));

        // Nuotraukos paspaudimas galerijoje
        photoGrid.addEventListener('click', e => {
            const item = e.target.closest('.photo-item');
            if (item) {
                currentImageIndex = parseInt(item.dataset.index, 10);
                openLightbox();
            }
        });

        // Lightbox valdymas
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);
        exifToggle.addEventListener('click', () => {
            exifDataContainer.classList.toggle('visible');
        });

        // Uždarymas paspaudus už nuotraukos ribų
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Valdymas klaviatūra
        document.addEventListener('keydown', e => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'ArrowRight') showNextImage();
            }
        });
    }

    // --- Lightbox logika ---
    function openLightbox() {
        updateLightboxImage();
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        exifDataContainer.classList.remove('visible');
    }

    function updateLightboxImage() {
        const image = currentAlbumImages[currentImageIndex];
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;

        // Atnaujinti EXIF informaciją
        if (image.exif) {
            exifDataContainer.innerHTML = `
                <p><strong>Kamera:</strong> ${image.exif.camera || 'N/A'}</p>
                <p><strong>Data:</strong> ${image.exif.date || 'N/A'}</p>
                <p><strong>Vieta:</strong> ${image.exif.location || 'N/A'}</p>
            `;
            exifToggle.style.display = 'inline-block';
        } else {
            exifDataContainer.innerHTML = '';
            exifToggle.style.display = 'none';
        }
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentAlbumImages.length) % currentAlbumImages.length;
        updateLightboxImage();
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentAlbumImages.length;
        updateLightboxImage();
    }
    
    // --- Pradėti ---
    init();
});

document.addEventListener('DOMContentLoaded', () => {
    // --- BENDRA INICIALIZACIJA ---
    AOS.init({ duration: 1000, once: true, mirror: false });
    const categoriesData = { /* ... Jūsų kategorijų duomenys lieka tie patys ... */ };

    // --- NAUJA: HERO SLIDESHOW LOGIKA ---
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
        const heroImages = [
            "https://i.postimg.cc/FKJ0hGDh/Love.jpg", // Pakeiskite į savo geriausias nuotraukas
            "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg",
            "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg",
            "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg"
        ];
        
        heroImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            slideshowContainer.appendChild(img);
        });

        let currentSlide = 0;
        const slides = slideshowContainer.querySelectorAll('img');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Keičiasi kas 5 sekundes
    }

    // --- NAUJA: IŠRINKTŲ DARBŲ GALERIJOS LOGIKA ---
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        const featuredImages = [
            // Įdėkite serijines/geriausias nuotraukas
            "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg",
            "https://i.postimg.cc/FFbXn4bx/sventa-03.jpg",
            "https://i.postimg.cc/cJVGP15F/sventa-06.jpg",
            "https://i.postimg.cc/qMtg3gH7/sventa-16.jpg",
            "https://i.postimg.cc/YSjmbRJ1/cirkliskis-10-Glorija-Jancauskaite.jpg",
            "https://i.postimg.cc/bvbqy2n7/Egle.jpg",
            "https://i.postimg.cc/1zKzQqwv/bird-02.jpg",
            "https://i.postimg.cc/d1BZ4f5t/Gandras-06.jpg"
        ];
        
        featuredImages.forEach(src => {
            const link = document.createElement('a');
            link.href = '#'; // Arba galite nukreipti į konkrečią galeriją
            link.classList.add('featured-item');
            link.innerHTML = `<img src="${src}" alt="Išrinktas darbas">`;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Atidaryti lightbox su viena nuotrauka
                openLightbox([src], 0);
            });
            featuredGrid.appendChild(link);
        });
    }

    // --- PAGRINDINĖS GALERIJOS LOGIKA (ATNAUJINTA) ---
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        Object.keys(categoriesData).forEach((categoryKey, index) => {
            const category = categoriesData[categoryKey];
            const link = document.createElement('a');
            link.href = `gallery.html?category=${categoryKey}`;
            link.classList.add('gallery-item-link');
            link.setAttribute('data-aos', 'zoom-in');
            link.setAttribute('data-aos-delay', (index % 3) * 100);

            // ATNAUJINTA: Overlay dabar neturi pavadinimo
            link.innerHTML = `
                <div class="gallery-item">
                    <img src="${category.cover}" alt="${category.name} nuotraukų viršelis">
                    <div class="overlay no-title"></div>
                </div>`;
            categoryGrid.appendChild(link);
        });
    }

    // --- LIKUSI SKRIPTO DALIS (SLAPUKAI, LIGHTBOX, GALERIJOS PUSLAPIS) LIEKA TA PATI ---
    
    // Slapukų sutikimas...
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptBtn = document.getElementById('accept-cookies-btn');
    if(consentBanner) { /* ... visas slapukų kodas ... */ }

    // Lightbox funkcionalumas...
    let currentGalleryImages = [];
    let currentImageIndex = 0;
    const lightbox = createLightbox();
    function createLightbox() { /* ... visas lightbox kūrimo kodas ... */ }
    function openLightbox(images, index) { /* ... visas lightbox atidarymo kodas ... */ }
    // ir t.t. ...

    // Galerijos puslapio logika...
    const galleryCategoryTitle = document.getElementById('galleryCategoryTitle');
    if (galleryCategoryTitle) { /* ... visas galerijos puslapio kodas ... */ }
});

// PASTABA: Į šį laukelį reikia įklijuoti visą likusį script.js kodą iš ankstesnio atsakymo, 
// kad veiktų slapukai, lightbox ir galerijos puslapis.
// Aš jį sutrumpinau, kad atsakymas nebūtų per ilgas.

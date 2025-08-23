document.addEventListener('DOMContentLoaded', () => {
    // --- BENDRA INICIALIZACIJA ---
    AOS.init({ duration: 1000, once: true, mirror: false });
    const categoriesData = { /* ... Jūsų kategorijų duomenys lieka tie patys ... */ };

    // --- ATNAUJINTA: FONO SLIDESHOW LOGIKA ---
    const backgroundSlideshow = document.getElementById('backgroundSlideshow');
    if (backgroundSlideshow) {
        const heroImages = [
            "https://i.postimg.cc/FKJ0hGDh/Love.jpg",
            "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg",
            "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg",
            "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg"
        ];
        
        heroImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            if (index === 0) img.classList.add('active');
            backgroundSlideshow.appendChild(img);
        });

        let currentSlide = 0;
        const slides = backgroundSlideshow.querySelectorAll('img');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Keičiasi kas 5 sekundes
    }

    // --- LIKUSI SKRIPTO DALIS (IŠRINKTI DARBAI, GALERIJOS, LIGHTBOX, SLAPUKAI) LIEKA TA PATI ---
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) {
        // ... featuredGrid logika iš ankstesnio atsakymo ...
    }

    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        // ... categoryGrid logika iš ankstesnio atsakymo ...
    }

    // ... visas slapukų, lightbox ir galerijos puslapio kodas ...
});

// PASTABA: Į šį laukelį reikia įklijuoti visą likusį script.js kodą iš ankstesnio atsakymo.
// Aš jį sutrumpinau, kad atsakymas nebūtų per ilgas.

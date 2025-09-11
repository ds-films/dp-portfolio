document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true, mirror: false });

    const categoriesData = {
        "moletu-observatorija": { name: "Molėtų Observatorija", cover: "https://i.postimg.cc/PrnGqrgJ/Moletu-Observatory.png" },
        "sirvetos-regioninis-parkas": { name: "Sirvėtos Regioninis parkas", cover: "https://i.postimg.cc/X7gd6GTN/srp-01.jpg" },
        "fotosesija": { name: "Fotosesija", cover: "https://i.postimg.cc/BbnWtfcD/fotosesija-01.jpg" },
        "miko-kipro-petrausku-namai": { name: "Miko ir Kipro Petrauskų Namai", cover: "https://i.postimg.cc/8k0XLvTx/miko-ir-kipro-petrausku-namai-01.jpg" },
        "baltoji-kiele": { name: "Baltoji kielė", cover: "https://i.postimg.cc/KYbYwNkK/bird-01.jpg" },
        "cirkliskis-lithuania": { name: "CIRKLIŠKIS | LITHUANIA", cover: "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg" },
        "geles": { name: "Gėlės", cover: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg" },
        "gandras": { name: "GANDRAS", cover: "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg" },
        "sventa-lithuania": { name: "ŠVENTA | LITHUANIA", cover: "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg" },
        "vdu-botanikos-sodas": { name: "VDU | BOTANIKOS SODAS", cover: "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg" },
        "ivairios-akimirkos": { name: "Įvairios Akimirkos", cover: "https://i.postimg.cc/Zq9CrRdH/image.jpg" }
    };
    
    const filmsData = [
        { key: 'katinas-su-baime', name: 'Katinas su baime', cover: 'https://i.postimg.cc/PxYjxnd4/Katinas-su-baime.png' },
        { key: 'ruduo-prie-gimnazijos', name: 'Ruduo Prie Gimnazijos', cover: 'https://i.postimg.cc/RVP2pk9v/ktg-ruduo.png' },
        { key: 'all-videos', name: 'DP | ALL VIDEOS', cover: 'https://i.postimg.cc/MTXGDDsC/dp-all-videos.jpg' },
        { key: 'exit-2024', name: 'Exit (2024)', cover: 'https://i.postimg.cc/y8ktMLYc/exit.jpg' },
        { key: 'srp', name: 'SRP', cover: 'https://i.postimg.cc/1txkcDS6/srp.jpg' }
    ];
    
    // Galerijų sąrašo generavimas (galerijos.html)
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        Object.keys(categoriesData).forEach((key, index) => {
            const category = categoriesData[key];
            const link = document.createElement('a');
            link.href = `galerijos/${key}.html`;
            link.classList.add('gallery-item-link');
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', (index % 3) * 100);
            link.innerHTML = `<div class="gallery-item"><img src="${category.cover}" alt="${category.name}"><div class="overlay"><h3>${category.name}</h3></div></div>`;
            categoryGrid.appendChild(link);
        });
    }

    // Filmų sąrašo generavimas (filmai.html)
    const filmsGrid = document.getElementById('filmsGrid');
    if (filmsGrid) {
        filmsData.forEach((film, index) => {
            const link = document.createElement('a');
            link.href = `filmai/${film.key}.html`;
            link.classList.add('gallery-item-link');
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', (index % 3) * 100);
            link.innerHTML = `<div class="gallery-item"><img src="${film.cover}" alt="${film.name}"><div class="overlay"><span class="overlay-icon">▶</span><h3>${film.name}</h3></div></div>`;
            filmsGrid.appendChild(link);
        });
    }
    
    // Lightbox logika
    const imageGrid = document.querySelector('.image-grid');
    if (imageGrid) {
        const images = Array.from(imageGrid.querySelectorAll('img'));
        const imageUrls = images.map(img => img.src);
        if (imageUrls.length > 0) {
            const lightbox = createLightbox();
            images.forEach((img, index) => {
                img.addEventListener('click', () => openLightbox(lightbox, imageUrls, index));
            });
        }
    }

    function createLightbox() {
        const lightboxElement = document.createElement('div');
        lightboxElement.id = 'lightbox';
        lightboxElement.classList.add('lightbox');
        lightboxElement.innerHTML = `<div class="lightbox-content"><img src="" class="lightbox-image" alt="Didelė nuotrauka"></div><button class="lightbox-close" aria-label="Uždaryti">&times;</button><button class="lightbox-prev" aria-label="Ankstesnė nuotrauka">&#10094;</button><button class="lightbox-next" aria-label="Kita nuotrauka">&#10095;</button><div class="lightbox-counter"></div>`;
        document.body.appendChild(lightboxElement);
        return lightboxElement;
    }

    let currentGalleryImages = [], currentImageIndex = 0;
    function openLightbox(lightbox, images, index) {
        currentGalleryImages = images;
        currentImageIndex = index;
        document.addEventListener('keydown', handleKeydown);
        lightbox.classList.add('visible');
        showImage(lightbox, currentImageIndex);
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        document.removeEventListener('keydown', handleKeydown);
        lightbox.classList.remove('visible');
    }

    function showImage(lightbox, index) {
        const imageElement = lightbox.querySelector('.lightbox-image');
        const counterElement = lightbox.querySelector('.lightbox-counter');
        imageElement.classList.remove('loaded');
        setTimeout(() => {
            imageElement.src = currentGalleryImages[index];
            imageElement.onload = () => imageElement.classList.add('loaded');
        }, 150);
        counterElement.textContent = `${index + 1} / ${currentGalleryImages.length}`;
    }

    function showNextImage() { currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length; showImage(document.getElementById('lightbox'), currentImageIndex); }
    function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length; showImage(document.getElementById('lightbox'), currentImageIndex); }
    
    function handleKeydown(e) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeLightbox();
    }

    // Priskiriame mygtukų veiksmus tik vieną kartą
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrevImage);
        lightbox.querySelector('.lightbox-next').addEventListener('click', showNextImage);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // --- BENDRA INICIALIZACIJA ---
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    const BASE_URL = "https://portfolio.dominikphotofficial.lt/";
    const globalKeywords = "dominikphotofficial, dominikphotofficial.lt, portfolio, dp-portfolio, dp, dominik šuškevič, photos dominik šuškevič";
    
    // Duomenų bazė visoms kategorijoms
    const categoriesData = {
        "baltoji-kiele": { name: "Baltoji kielė", cover: "https://i.postimg.cc/KYbYwNkK/bird-01.jpg", images: [ "https://i.postimg.cc/KYbYwNkK/bird-01.jpg", "https://i.postimg.cc/1zKzQqwv/bird-02.jpg", "https://i.postimg.cc/1tf4rzVM/bird-03.jpg", "https://i.postimg.cc/Xv2p55qp/bird-04.jpg", "https://i.postimg.cc/gJQjSPvp/bird-05.jpg", "https://i.postimg.cc/GtvLXTLP/bird-06.jpg", "https://i.postimg.cc/hPqPfss2/bird-07.jpg", "https://i.postimg.cc/9FtXT9NC/bird-08.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) fotografijų galerija: Baltoji kielė. Unikalūs paukščių kadrai gamtoje.", keywords: `Baltoji kielė, paukščiai, gamtos fotografija, ${globalKeywords}` },
        "cirkliskis-lithuania": { name: "CIRKLIŠKIS | LITHUANIA", cover: "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg", images: [ "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg", "https://i.postimg.cc/6QzGhSj6/cirkliskis-02.jpg", "https://i.postimg.cc/g0pvs3Gs/cirkliskis-03.jpg", "https://i.postimg.cc/Hxx8v2Rw/cirkliskis-04.jpg", "https://i.postimg.cc/25jxmng6/cirkliskis-05.jpg", "https://i.postimg.cc/fRCxHJkh/cirkliskis-06.jpg", "https://i.postimg.cc/J4b3kTL0/cirkliskis-07.jpg", "https://i.postimg.cc/sx5W52bq/cirkliskis-08.jpg", "https://i.postimg.cc/MKbRTv7j/cirkliskis-09.jpg", "https://i.postimg.cc/YSjmbRJ1/cirkliskis-10-Glorija-Jancauskaite.jpg", "https://i.postimg.cc/D03JfTmg/cirkliskis-11.jpg", "https://i.postimg.cc/C1k5QQJf/cirkliskis-12.jpg", "https://i.postimg.cc/XJSdqFzd/cirkliskis-13.jpg", "https://i.postimg.cc/JhtPZbxF/cirkliskis-14.jpg", "https://i.postimg.cc/bvbqy2n7/Egle.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) nuotraukos iš Cirkliškio, Lietuvos. Paslaptingas kraštovaizdis ir portretai.", keywords: `Cirkliškis, Lietuva, gamta, peizažai, portretai, ${globalKeywords}` },
        "geles": { name: "Gėlės", cover: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", images: [ "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", "https://i.postimg.cc/mrM1vkgD/Flower-02.jpg", "https://i.postimg.cc/zXthW4QJ/Flower-03.jpg", "https://i.postimg.cc/J08N6J3M/Flower-04.jpg", "https://i.postimg.cc/VNSWdzLQ/Flower-05.jpg", "https://i.postimg.cc/x887dW7X/Flower-06.jpg", "https://i.postimg.cc/7YTsQMyr/Flower-07.jpg", "https://i.postimg.cc/L6nK41Kx/Flower-08.jpg", "https://i.postimg.cc/bJgcr0wB/Flower-09.jpg", "https://i.postimg.cc/SsD3kyZ0/Flower-10.jpg", "https://i.postimg.cc/sXVqkB49/Flower-11.jpg", "https://i.postimg.cc/9FK3DQcC/Flower-12.jpg", "https://i.postimg.cc/DZn37pnG/Flower-13.jpg", "https://i.postimg.cc/rs5hzMjF/Flower-14.jpg", "https://i.postimg.cc/V6xGYdjV/Flower-15.jpg", "https://i.postimg.cc/SxhB6tYv/Flower-16.jpg", "https://i.postimg.cc/SQ1JRC55/Flower-17.jpg", "https://i.postimg.cc/SsyJ2rm0/Flower-18.jpg", "https://i.postimg.cc/GmG2XN2w/Flower-19.jpg", "https://i.postimg.cc/sgjWZsmH/Flower-20.jpg", "https://i.postimg.cc/c44YvdX9/Flower-21.jpg", "https://i.postimg.cc/02J2N37M/Flower-22.jpg", "https://i.postimg.cc/cJ5LCNk3/Flower-23.jpg", "https://i.postimg.cc/qBcXtb0R/Flower-24.jpg", "https://i.postimg.cc/nrWW93b0/Flower-25.jpg", "https://i.postimg.cc/zBnF5pp9/flower-26.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) gėlių grožio galerija. Makro ir artimos gėlių fotografijos.", keywords: `gėlės, makro fotografija, gamta, botanika, ${globalKeywords}` },
        "gandras": { name: "GANDRAS", cover: "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg", images: [ "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg", "https://i.postimg.cc/L67YCL3f/Gandras-02.jpg", "https://i.postimg.cc/NFsmttKH/Gandras-03.jpg", "https://i.postimg.cc/9Q74v0Lk/Gandras-04.jpg", "https://i.postimg.cc/s2PMg8d9/Gandras-05.jpg", "https://i.postimg.cc/d1BZ4f5t/Gandras-06.jpg", "https://i.postimg.cc/501F5JqR/Gandras-07.jpg", "https://i.postimg.cc/Nj9TBpjp/Gandras-08.jpg", "https://i.postimg.cc/ZYH6cWQF/Gandras-09.jpg", "https://i.postimg.cc/CLKk6FTy/Gandras-10.jpg", "https://i.postimg.cc/RVbfkj4W/Gandras-11.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) gandrų fotografijos. Sugauti grakštūs paukščių skrydžiai.", keywords: `gandras, paukščiai, Lietuvos gamta, ${globalKeywords}` },
        "sventa-lithuania": { name: "ŠVENTA | LITHUANIA", cover: "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg", images: [ "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg", "https://i.postimg.cc/FFbXn4bx/sventa-03.jpg", "https://i.postimg.cc/28wbYgYQ/sventa-04.jpg", "https://i.postimg.cc/vZTBsB3y/sventa-05.jpg", "https://i.postimg.cc/cJVGP15F/sventa-06.jpg", "https://i.postimg.cc/QdCLtK26/sventa-07.jpg", "https://i.postimg.cc/jqck7dQB/sventa-08.jpg", "https://i.postimg.cc/d35HP4VJ/sventa-09.jpg", "https://i.postimg.cc/QChwrFgJ/sventa-10.jpg", "https://i.postimg.cc/LXzw7tPs/sventa-11.jpg", "https://i.postimg.cc/FzpqFhD5/sventa-12.jpg", "https://i.postimg.cc/jqhdnN1K/sventa-13.jpg", "https://i.postimg.cc/k4FKLGgC/sventa-14.jpg", "https://i.postimg.cc/pLcHYJQb/sventa-15.jpg", "https://i.postimg.cc/qMtg3gH7/sventa-16.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) fotografijų galerija: Šventa, Lietuva.", keywords: `Šventa, Lietuva, kraštovaizdis, gamta, ${globalKeywords}` },
        "vdu-botanikos-sodas": { name: "VDU | BOTANIKOS SODAS", cover: "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg", images: [ "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg", "https://i.postimg.cc/FKvBSf85/vdu-botanikos-sodas-02.jpg", "https://i.postimg.cc/W4SXJ50g/vdu-botanikos-sodas-03.jpg", "https://i.postimg.cc/Wzx91tgy/vdu-botanikos-sodas-04.jpg", "https://i.postimg.cc/vBH2PJG0/vdu-botanikos-sodas-05.jpg", "https://i.postimg.cc/RV3yxxK8/vdu-botanikos-sodas-06.jpg", "https://i.postimg.cc/pLf0PWT0/vdu-botanikos-sodas-07.jpg", "https://i.postimg.cc/zXfwXTxL/vdu-botanikos-sodas-08.jpg", "https://i.postimg.cc/6QCn1cpP/vdu-botanikos-sodas-09.jpg", "https://i.postimg.cc/L60tqhWx/vdu-botanikos-sodas-10.jpg", "https://i.postimg.cc/kg6xWq3q/vdu-botanikos-sodas-11.jpg", "https://i.postimg.cc/zvGhv1Fm/vdu-botanikos-sodas-12.jpg", "https://i.postimg.cc/XJ8FnvFc/vdu-botanikos-sodas-13.jpg", "https://i.postimg.cc/4NntTs3V/vdu-botanikos-sodas-14.jpg", "https://i.postimg.cc/TYSbdFyS/vdu-botanikos-sodas-15.jpg", "https://i.postimg.cc/Z5ddCHpq/vdu-botanikos-sodas-16.jpg", "https://i.postimg.cc/13kDH2s6/vdu-botanikos-sodas-17.jpg", "https://i.postimg.cc/501LczH2/vdu-botanikos-sodas-18.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) fotografijų galerija: VDU Botanikos sodas Kaune.", keywords: `VDU Botanikos sodas, Kaunas, botanika, ${globalKeywords}` },
        "ivairios-akimirkos": { name: "Įvairios Akimirkos", cover: "https://i.postimg.cc/Zq9CrRdH/image.jpg", images: [ "https://i.postimg.cc/Zq9CrRdH/image.jpg", "https://i.postimg.cc/ZR83dRGg/Latvija-riga-namas.jpg", "https://i.postimg.cc/FKJ0hGDh/Love.jpg" ], description: "Dominik Šuškevič (Dominikphotofficial) įvairių akimirkų kolekcija.", keywords: `įvairios akimirkos, menas, kelionės, meilė, ${globalKeywords}` }
    };

    // --- SLAPUKŲ SUTIKIMO LOGIKA ---
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptBtn = document.getElementById('accept-cookies-btn');

    if (!localStorage.getItem('cookie_consent')) {
        if(consentBanner) consentBanner.classList.remove('hidden');
    } else if (typeof initGA === 'function') {
        initGA();
    }
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'true');
            consentBanner.classList.add('hidden');
            if (typeof initGA === 'function') {
                initGA();
            }
        });
    }

    // --- LIGHTBOX LOGIKA ---
    // (Visas lightbox kodas iš ankstesnio atsakymo lieka čia, nepakitęs)
    let currentGalleryImages = [];
    let currentImageIndex = 0;
    const lightbox = createLightbox();
    function createLightbox() {
        const lightboxElement = document.createElement('div');
        lightboxElement.id = 'lightbox';
        lightboxElement.classList.add('lightbox');
        lightboxElement.innerHTML = `
            <div class="lightbox-content">
                <img src="" class="lightbox-image" alt="Didelė nuotrauka">
            </div>
            <button class="lightbox-close" aria-label="Uždaryti">&times;</button>
            <button class="lightbox-prev" aria-label="Ankstesnė nuotrauka">&#10094;</button>
            <button class="lightbox-next" aria-label="Kita nuotrauka">&#10095;</button>
            <div class="lightbox-counter"></div>
        `;
        document.body.appendChild(lightboxElement);
        const closeBtn = lightboxElement.querySelector('.lightbox-close');
        const prevBtn = lightboxElement.querySelector('.lightbox-prev');
        const nextBtn = lightboxElement.querySelector('.lightbox-next');
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);
        return lightboxElement;
    }
    function openLightbox(images, index) {
        currentGalleryImages = images;
        currentImageIndex = index;
        document.addEventListener('keydown', handleKeydown);
        lightbox.classList.add('visible');
        showImage(currentImageIndex);
    }
    function closeLightbox() {
        document.removeEventListener('keydown', handleKeydown);
        lightbox.classList.remove('visible');
    }
    function showImage(index) {
        const imageElement = lightbox.querySelector('.lightbox-image');
        const counterElement = lightbox.querySelector('.lightbox-counter');
        imageElement.classList.remove('loaded');
        setTimeout(() => {
            imageElement.src = currentGalleryImages[index];
            imageElement.onload = () => { imageElement.classList.add('loaded'); };
        }, 150);
        counterElement.textContent = `${index + 1} / ${currentGalleryImages.length}`;
    }
    function showNextImage() { currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length; showImage(currentImageIndex); }
    function showPrevImage() { currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length; showImage(currentImageIndex); }
    function handleKeydown(e) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') closeLightbox();
    }

    // --- SCROLL DOWN ARROW LOGIKA ---
    const scrollDownArrow = document.querySelector('.scroll-down');
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', () => {
            document.getElementById('galleries').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // --- BENDRA PUSLAPIŲ LOGIKA ---
    // (Visas likęs kodas iš ankstesnio atsakymo, susijęs su meta žymėmis, galerijų generavimu ir t.t., lieka čia)
    function updateMetaTag(property, content, isOgOrName = 'name') {
        const selector = `meta[${isOgOrName}="${property}"]`;
        let metaTag = document.querySelector(selector);
        if (metaTag) metaTag.setAttribute('content', content);
    }
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        Object.keys(categoriesData).forEach((categoryKey, index) => {
            const category = categoriesData[categoryKey];
            const link = document.createElement('a');
            link.href = `gallery.html?category=${categoryKey}`;
            link.classList.add('gallery-item-link');
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', (index % 3) * 100);
            link.innerHTML = `
                <div class="gallery-item">
                    <img src="${category.cover}" alt="${category.name} nuotraukų viršelis">
                    <div class="overlay"><h3>${category.name}</h3></div>
                </div>`;
            categoryGrid.appendChild(link);
        });
    }
    const galleryCategoryTitle = document.getElementById('galleryCategoryTitle');
    const imageGrid = document.getElementById('imageGrid');
    const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
    if (galleryCategoryTitle && imageGrid && breadcrumbsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryKey = urlParams.get('category');
        const category = categoriesData[categoryKey];
        if (category) {
            const pageUrl = `${BASE_URL}gallery.html?category=${categoryKey}`;
            document.title = `${category.name} | DP.PORTFOLIO`;
            updateMetaTag('description', category.description);
            updateMetaTag('keywords', category.keywords);
            document.querySelector('link[rel="canonical"]').setAttribute('href', pageUrl);
            updateMetaTag('og:title', `${category.name} | DP.PORTFOLIO`, 'property');
            updateMetaTag('og:description', category.description, 'property');
            updateMetaTag('og:url', pageUrl, 'property');
            updateMetaTag('og:image', category.cover, 'property');
            updateMetaTag('twitter:title', `${category.name} | DP.PORTFOLIO`);
            updateMetaTag('twitter:description', category.description);
            updateMetaTag('twitter:image', category.cover);
            breadcrumbsContainer.innerHTML = `
                <a href="index.html">Pagrindinis</a>
                <span class="separator">/</span>
                <a href="index.html">Galerijos</a>
                <span class="separator">/</span>
                <span>${category.name}</span>
            `;
            galleryCategoryTitle.textContent = category.name;
            category.images.forEach((imageUrl, index) => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${category.name} nuotrauka ${index + 1}`;
                img.setAttribute('data-aos', 'fade-up');
                img.setAttribute('data-aos-delay', index * 50);
                img.addEventListener('click', () => openLightbox(category.images, index));
                imageGrid.appendChild(img);
            });
        } else {
            galleryCategoryTitle.textContent = "Kategorija nerasta";
            imageGrid.innerHTML = "<p style='text-align: center; font-size: 1.2em;'>Atsiprašome, ši kategorija nerasta.</p>";
        }
    }
});

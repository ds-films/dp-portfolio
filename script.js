document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, once: true, mirror: false });
    
    const categoriesData = {
        "noka": { name: "NOKA", cover: "https://i.postimg.cc/28SthTZg/noka-car-01.jpg", images: ["https://i.postimg.cc/28SthTZg/noka-car-01.jpg", "https://i.postimg.cc/8zqn8S0V/noka-car-02.jpg", "https://i.postimg.cc/xTp4RHG8/noka-car-03.jpg"] },
        "bmw-e36": { name: "BMW E36", cover: "https://i.postimg.cc/vTpSGtSm/BMWE36-01.jpg", images: ["https://i.postimg.cc/vTpSGtSm/BMWE36-01.jpg", "https://i.postimg.cc/wxPr59Td/BMWE36-02.jpg", "https://i.postimg.cc/C1x271qw/BMWE36-03.jpg", "https://i.postimg.cc/bJVBBhxk/BMWE36-04.jpg", "https://i.postimg.cc/6px1Szvj/BMWE36-05.jpg", "https://i.postimg.cc/mkc5x5jq/BMWE36-06.jpg"] },
        "moletu-observatorija": { name: "Molėtų Observatorija", cover: "https://i.postimg.cc/PrnGqrgJ/Moletu-Observatory.png", images: [ "https://i.postimg.cc/PrnGqrgJ/Moletu-Observatory.png", "https://i.postimg.cc/3x3PgfJH/Teleskopas-165-cm.png", "https://i.postimg.cc/RV7kJxmR/Teleskopas-165-cm-02.png", "https://i.postimg.cc/JzKSK3GH/Teleskopas-165-cm-03.png" ] },
        "sirvetos-regioninis-parkas": { name: "Sirvėtos Regioninis parkas", cover: "https://i.postimg.cc/X7gd6GTN/srp-01.jpg", images: [ "https://i.postimg.cc/X7gd6GTN/srp-01.jpg", "https://i.postimg.cc/NF6TM5F4/srp-02.jpg", "https://i.postimg.cc/8ztRMJHX/srp-03.jpg", "https://i.postimg.cc/TPKDbkhh/srp-04.jpg", "https://i.postimg.cc/SxT9J0Sw/srp-05.jpg", "https://i.postimg.cc/wvsLCWdn/srp-06.jpg", "https://i.postimg.cc/Nftmn7CP/srp-07.jpg", "https://i.postimg.cc/WzLgTMNz/srp-08.jpg", "https://i.postimg.cc/0NjpfkXk/srp-09.jpg", "https://i.postimg.cc/QMzcY2vp/srp-10.jpg", "https://i.postimg.cc/Wpg0Sf8k/srp-11.jpg", "https://i.postimg.cc/mDM1XtYs/srp-12.jpg", "https://i.postimg.cc/VN2bWjbg/srp-13.jpg" ], videoUrl: 'https://ds-films.github.io/srp/', videoCredits: { author: 'Dominik Šuškevič', screenwriter: 'Dominik Šuškevič', director: 'Dominik Šuškevič' } },
        "fotosesija": { name: "Fotosesija", cover: "https://i.postimg.cc/BbnWtfcD/fotosesija-01.jpg", images: [ "https://i.postimg.cc/BbnWtfcD/fotosesija-01.jpg", "https://i.postimg.cc/MK4kZ4cM/fotosesija-02.jpg", "https://i.postimg.cc/rmq3Y2Hb/fotosesija-03.jpg", "https://i.postimg.cc/YCm5v3gX/fotosesija-04.jpg", "https://i.postimg.cc/25RPhZ7C/fotosesija-05.jpg", "https://i.postimg.cc/TwQSzHMP/fotosesija-06.jpg", "https://i.postimg.cc/8cK26XtY/fotosesija-07.jpg", "https://i.postimg.cc/nV3bgMp1/fotosesija-08.jpg", "https://i.postimg.cc/TYhM6GPv/fotosesija-09.jpg" ] },
        "baltoji-kiele": { name: "Baltoji kielė", cover: "https://i.postimg.cc/KYbYwNkK/bird-01.jpg", images: [ "https://i.postimg.cc/KYbYwNkK/bird-01.jpg", "https://i.postimg.cc/1zKzQqwv/bird-02.jpg", "https://i.postimg.cc/1tf4rzVM/bird-03.jpg", "https://i.postimg.cc/Xv2p55qp/bird-04.jpg", "https://i.postimg.cc/gJQjSPvp/bird-05.jpg", "https://i.postimg.cc/GtvLXTLP/bird-06.jpg", "https://i.postimg.cc/hPqPfss2/bird-07.jpg", "https://i.postimg.cc/9FtXT9NC/bird-08.jpg" ] },
        "geles": { name: "Gėlės", cover: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", images: [ "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", "https://i.postimg.cc/mrM1vkgD/Flower-02.jpg", "https://i.postimg.cc/zXthW4QJ/Flower-03.jpg", "https://i.postimg.cc/J08N6J3M/Flower-04.jpg", "https://i.postimg.cc/VNSWdzLQ/Flower-05.jpg", "https://i.postimg.cc/x887dW7X/Flower-06.jpg", "https://i.postimg.cc/7YTsQMyr/Flower-07.jpg", "https://i.postimg.cc/L6nK41Kx/Flower-08.jpg", "https://i.postimg.cc/bJgcr0wB/Flower-09.jpg", "https://i.postimg.cc/SsD3kyZ0/Flower-10.jpg", "https://i.postimg.cc/sXVqkB49/Flower-11.jpg", "https://i.postimg.cc/9FK3DQcC/Flower-12.jpg", "https://i.postimg.cc/DZn37pnG/Flower-13.jpg", "https://i.postimg.cc/rs5hzMjF/Flower-14.jpg", "https://i.postimg.cc/V6xGYdjV/Flower-15.jpg", "https://i.postimg.cc/SxhB6tYv/Flower-16.jpg", "https://i.postimg.cc/SQ1JRC55/Flower-17.jpg", "https://i.postimg.cc/SsyJ2rm0/Flower-18.jpg", "https://i.postimg.cc/GmG2XN2w/Flower-19.jpg", "https://i.postimg.cc/sgjWZsmH/Flower-20.jpg", "https://i.postimg.cc/c44YvdX9/Flower-21.jpg", "https://i.postimg.cc/02J2N37M/Flower-22.jpg", "https://i.postimg.cc/cJ5LCNk3/Flower-23.jpg", "https://i.postimg.cc/qBcXtb0R/Flower-24.jpg", "https://i.postimg.cc/nrWW93b0/Flower-25.jpg", "https://i.postimg.cc/zBnF5pp9/flower-26.jpg", "https://i.postimg.cc/QM6Nbm4p/venta-0.jpg", "https://i.postimg.cc/Gp3hGVQL/venta-2.jpg" ] },
        // ... ir visos kitos jūsų kategorijos ...
    };
    
    // GALERIJŲ SĄRAŠŲ GENERAVIMAS
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        generateCategoryLinks(Object.keys(categoriesData), categoryGrid);
    }

    function generateCategoryLinks(keys, gridElement) {
        keys.forEach((key, index) => {
            const category = categoriesData[key];
            const link = document.createElement('a');
            link.href = `galerija.html?id=${key}`;
            link.classList.add('gallery-item-link');
            link.setAttribute('data-aos', 'fade-up');
            link.setAttribute('data-aos-delay', (index % 3) * 50);
            link.innerHTML = `<div class="gallery-item"><img src="${category.cover}" alt="${category.name}"><div class="overlay"><h3>${category.name}</h3></div></div>`;
            gridElement.appendChild(link);
        });
    }

    // VIENOS GALERIJOS PUSLAPIO LOGIKA
    const galleryPage = document.getElementById('imageGrid');
    if (galleryPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryId = urlParams.get('id');
        const category = categoriesData[categoryId];
        if (category) {
            document.title = `${category.name} | DP.PORTFOLIO`;
            document.getElementById('galleryCategoryTitle').textContent = category.name;
            document.getElementById('breadcrumbs-container').innerHTML = `<a href="index.html">Pagrindinis</a><span class="separator">/</span><a href="galerijos.html">Galerijos</a><span class="separator">/</span><span>${category.name}</span>`;
            
            category.images.forEach((imgUrl, index) => {
                const img = document.createElement('img');
                img.src = imgUrl;
                img.alt = `${category.name} nuotrauka ${index + 1}`;
                img.setAttribute('data-aos', 'fade-up');
                galleryPage.appendChild(img);
            });
        } else {
            window.location.href = '404.html';
        }
    }
    
    // LIGHTBOX LOGIKA
    const imageGridForLightbox = document.querySelector('.image-grid');
    if (imageGridForLightbox) {
        const images = Array.from(imageGridForLightbox.querySelectorAll('img'));
        const imageUrls = images.map(img => img.src);
        if (imageUrls.length > 0) {
            const lightbox = createLightbox();
            images.forEach((img, index) => {
                img.addEventListener('click', () => openLightbox(lightbox, imageUrls, index));
            });
        }
    }
    
    let currentGalleryImages = [], currentImageIndex = 0;
    function createLightbox() {
        const lightboxElement = document.createElement('div');
        lightboxElement.id = 'lightbox';
        lightboxElement.classList.add('lightbox');
        lightboxElement.innerHTML = `<div class="lightbox-content"><img src="" class="lightbox-image" alt="Didelė nuotrauka"></div><button class="lightbox-close" aria-label="Uždaryti">&times;</button><button class="lightbox-prev" aria-label="Ankstesnė nuotrauka">&#10094;</button><button class="lightbox-next" aria-label="Kita nuotrauka">&#10095;</button><div class="lightbox-counter"></div>`;
        document.body.appendChild(lightboxElement);
        return lightboxElement;
    }
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
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', showPrevImage);
        lightbox.querySelector('.lightbox-next').addEventListener('click', showNextImage);
    }
});

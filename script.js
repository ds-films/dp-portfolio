document.addEventListener('DOMContentLoaded', () => {
    // Scroll animacija pagrindiniame puslapyje
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = scrollDownBtn.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Kategorijų duomenys
    const categoriesData = {
        "baltoji-kiele": {
            title: "Baltoji kielė",
            images: [
                "https://i.postimg.cc/KYbYwNkK/bird-01.jpg",
                "https://i.postimg.cc/1zKzQqwv/bird-02.jpg",
                "https://i.postimg.cc/1tf4rzVM/bird-03.jpg",
                "https://i.postimg.cc/Xv2p55qp/bird-04.jpg",
                "https://i.postimg.cc/gJQjSPvp/bird-05.jpg",
                "https://i.postimg.cc/GtvLXTLP/bird-06.jpg",
                "https://i.postimg.cc/hPqPfss2/bird-07.jpg",
                "https://i.postimg.cc/9FtXT9NC/bird-08.jpg"
            ]
        },
        "cirkliskis-lithuania": {
            title: "CIRKLIŠKIS | LITHUANIA",
            images: [
                "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg",
                "https://i.postimg.cc/6QzGhSj6/cirkliskis-02.jpg",
                "https://i.postimg.cc/g0pvs3Gs/cirkliskis-03.jpg",
                "https://i.postimg.cc/Hxx8v2Rw/cirkliskis-04.jpg",
                "https://i.postimg.cc/25jxmng6/cirkliskis-05.jpg",
                "https://i.postimg.cc/fRCxHJkh/cirkliskis-06.jpg",
                "https://i.postimg.cc/J4b3kTL0/cirkliskis-07.jpg",
                "https://i.postimg.cc/sx5W52bq/cirkliskis-08.jpg",
                "https://i.postimg.cc/MKbRTv7j/cirkliskis-09.jpg",
                "https://i.postimg.cc/YSjmbRJ1/cirkliskis-10-Glorija-Jancauskaite.jpg",
                "https://i.postimg.cc/D03JfTmg/cirkliskis-11.jpg",
                "https://i.postimg.cc/C1k5QQJf/cirkliskis-12.jpg",
                "https://i.postimg.cc/XJSdqFzd/cirkliskis-13.jpg",
                "https://i.postimg.cc/JhtPZbxF/cirkliskis-14.jpg",
                "https://i.postimg.cc/bvbqy2n7/Egle.jpg"
            ]
        },
        "geles": {
            title: "Gėlės",
            images: [
                "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg",
                "https://i.postimg.cc/mrM1vkgD/Flower-02.jpg",
                "https://i.postimg.cc/zXthW4QJ/Flower-03.jpg",
                "https://i.postimg.cc/J08N6J3M/Flower-04.jpg",
                "https://i.postimg.cc/VNSWdzLQ/Flower-05.jpg",
                "https://i.postimg.cc/x887dW7X/Flower-06.jpg",
                "https://i.postimg.cc/7YTsQMyr/Flower-07.jpg",
                "https://i.postimg.cc/L6nK41Kx/Flower-08.jpg",
                "https://i.postimg.cc/bJgcr0wB/Flower-09.jpg",
                "https://i.postimg.cc/SsD3kyZ0/Flower-10.jpg",
                "https://i.postimg.cc/sXVqkB49/Flower-11.jpg",
                "https://i.postimg.cc/9FK3DQcC/Flower-12.jpg",
                "https://i.postimg.cc/DZn37pnG/Flower-13.jpg",
                "https://i.postimg.cc/rs5hzMjF/Flower-14.jpg",
                "https://i.postimg.cc/V6xGYdjV/Flower-15.jpg",
                "https://i.postimg.cc/SxhB6tYv/Flower-16.jpg",
                "https://i.postimg.cc/SQ1JRC55/Flower-17.jpg",
                "https://i.postimg.cc/SsyJ2rm0/Flower-18.jpg",
                "https://i.postimg.cc/GmG2XN2w/Flower-19.jpg",
                "https://i.postimg.cc/sgjWZsmH/Flower-20.jpg",
                "https://i.postimg.cc/c44YvdX9/Flower-21.jpg",
                "https://i.postimg.cc/02J2N37M/Flower-22.jpg",
                "https://i.postimg.cc/cJ5LCNk3/Flower-23.jpg",
                "https://i.postimg.cc/qBcXtb0R/Flower-24.jpg",
                "https://i.postimg.cc/nrWW93b0/Flower-25.jpg",
                "https://i.postimg.cc/zBnF5pp9/flower-26.jpg"
            ]
        },
        "gandras": {
            title: "GANDRAS",
            images: [
                "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg",
                "https://i.postimg.cc/L67YCL3f/Gandras-02.jpg",
                "https://i.postimg.cc/NFsmttKH/Gandras-03.jpg",
                "https://i.postimg.cc/9Q74v0Lk/Gandras-04.jpg",
                "https://i.postimg.cc/s2PMg8d9/Gandras-05.jpg",
                "https://i.postimg.cc/d1BZ4f5t/Gandras-06.jpg",
                "https://i.postimg.cc/501F5JqR/Gandras-07.jpg",
                "https://i.postimg.cc/Nj9TBpjp/Gandras-08.jpg",
                "https://i.postimg.cc/ZYH6cWQF/Gandras-09.jpg",
                "https://i.postimg.cc/CLKk6FTy/Gandras-10.jpg",
                "https://i.postimg.cc/RVbfkj4W/Gandras-11.jpg",
                "https://i.postimg.cc/Zq9CrRdH/image.jpg",
                "https://i.postimg.cc/ZR83dRGg/Latvija-riga-namas.jpg",
                "https://i.postimg.cc/FKJ0hGDh/Love.jpg"
            ]
        },
        "sventa-lithuania": {
            title: "ŠVENTA | LITHUANIA",
            images: [
                "https://i.postimg.cc/sventa-01.jpg", // Pakeistas, kad atitiktų formatą
                "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg",
                "https://i.postimg.cc/FFbXn4bx/sventa-03.jpg",
                "https://i.postimg.cc/28wbYgYQ/sventa-04.jpg",
                "https://i.postimg.cc/vZTBsB3y/sventa-05.jpg",
                "https://i.postimg.cc/cJVGP15F/sventa-06.jpg",
                "https://i.postimg.cc/QdCLtK26/sventa-07.jpg",
                "https://i.postimg.cc/jqck7dQB/sventa-08.jpg",
                "https://i.postimg.cc/d35HP4VJ/sventa-09.jpg",
                "https://i.postimg.cc/QChwrFgJ/sventa-10.jpg",
                "https://i.postimg.cc/LXzw7tPs/sventa-11.jpg",
                "https://i.postimg.cc/FzpqFhD5/sventa-12.jpg",
                "https://i.postimg.cc/jqhdnN1K/sventa-13.jpg",
                "https://i.postimg.cc/k4FKLGgC/sventa-14.jpg",
                "https://i.postimg.cc/pLcHYJQb/sventa-15.jpg",
                "https://i.postimg.cc/qMtg3gH7/sventa-16.jpg"
            ]
        },
        "vdu-botanikos-sodas": {
            title: "VDU | BOTANIKOS SODAS",
            images: [
                "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg",
                "https://i.postimg.cc/FKvBSf85/vdu-botanikos-sodas-02.jpg",
                "https://i.postimg.cc/W4SXJ50g/vdu-botanikos-sodas-03.jpg",
                "https://i.postimg.cc/Wzx91tgy/vdu-botanikos-sodas-04.jpg",
                "https://i.postimg.cc/vBH2PJG0/vdu-botanikos-sodas-05.jpg",
                "https://i.postimg.cc/RV3yxxK8/vdu-botanikos-sodas-06.jpg",
                "https://i.postimg.cc/pLf0PWT0/vdu-botanikos-sodas-07.jpg"
            ]
        }
    };

    // Dinaminės galerijos įkėlimas
    const galleryContainer = document.getElementById('gallery-container');
    const galleryTitleElement = document.querySelector('.gallery-title');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentImages = [];
    let currentIndex = 0;

    if (galleryContainer && galleryTitleElement) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');

        if (categoryParam && categoriesData[categoryParam]) {
            const category = categoriesData[categoryParam];
            galleryTitleElement.textContent = category.title;
            currentImages = category.images; // Išsaugojam dabartines nuotraukas lightbox'ui

            currentImages.forEach((imageUrl, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${category.title} nuotrauka ${index + 1}`;
                galleryItem.appendChild(img);

                galleryItem.addEventListener('click', () => {
                    openLightbox(index);
                });
                galleryContainer.appendChild(galleryItem);
            });
        } else {
            galleryTitleElement.textContent = 'Galerija nerasta';
            galleryContainer.innerHTML = '<p style="text-align: center; color: var(--text-color); font-size: 1.2em;">Kategorija nerasta arba klaidinga nuoroda.</p>';
        }
    }

    // Lightbox funkcionalumas
    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = 'block';
        lightboxImg.src = currentImages[currentIndex];
        // Atnaujinam meta title, kad atspindėtų rodomą nuotrauką (neprivaloma, bet gerina UX)
        document.title = `${galleryTitleElement.textContent} - Nuotrauka ${currentIndex + 1} | DP.PORTFOLIO`;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        // Atstatom pradinį meta title
        document.title = `${galleryTitleElement.textContent} | DP.PORTFOLIO`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        lightboxImg.src = currentImages[currentIndex];
        document.title = `${galleryTitleElement.textContent} - Nuotrauka ${currentIndex + 1} | DP.PORTFOLIO`;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        lightboxImg.src = currentImages[currentIndex];
        document.title = `${galleryTitleElement.textContent} - Nuotrauka ${currentIndex + 1} | DP.PORTFOLIO`;
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', showPrevImage);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', showNextImage);
    }
    
    // Uždaryti lightbox paspaudus ESC klavišą
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            closeLightbox();
        }
        if (e.key === 'ArrowRight' && lightbox.style.display === 'block') {
            showNextImage();
        }
        if (e.key === 'ArrowLeft' && lightbox.style.display === 'block') {
            showPrevImage();
        }
    });

    // Uždaryti lightbox paspaudus už nuotraukos ribų
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Animacija nuotraukoms (gali būti padaryta ir CSS)
    // Kai nuotraukos įkeliamos, galima pridėti klasę, kad suveiktų animacija
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up'); // Pridėti CSS animacijos klasę
    });
});

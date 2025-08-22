document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    const categoriesData = {
        "baltoji-kiele": {
            name: "Baltoji kielė",
            cover: "https://i.postimg.cc/KYbYwNkK/bird-01.jpg",
            images: [
                "https://i.postimg.cc/KYbYwNkK/bird-01.jpg",
                "https://i.postimg.cc/1zKzQqwv/bird-02.jpg",
                "https://i.postimg.cc/1tf4rzVM/bird-03.jpg",
                "https://i.postimg.cc/Xv2p55qp/bird-04.jpg",
                "https://i.postimg.cc/gJQjSPvp/bird-05.jpg",
                "https://i.postimg.cc/GtvLXTLP/bird-06.jpg",
                "https://i.postimg.cc/hPqPfss2/bird-07.jpg",
                "https://i.postimg.cc/9FtXT9NC/bird-08.jpg"
            ],
            description: "Baltoji kielė – Dominikphotofficial fotografijų galerija. Unikalūs kielių paukščių kadrai gamtoje.",
            keywords: "Baltoji kielė, paukščiai, gamtos fotografija, dominikphotofficial, nuotraukos, paukščių kadrai"
        },
        "cirkliskis-lithuania": {
            name: "CIRKLIŠKIS | LITHUANIA",
            cover: "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg",
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
            ],
            description: "Cirkliškio apylinkių grožis Dominikphotofficial nuotraukose. Lietuvos gamta ir peizažai.",
            keywords: "Cirkliškis, Lietuva, gamta, peizažai, Dominikphotofficial, fotografija, Lietuvos kraštovaizdis"
        },
        "geles": {
            name: "Gėlės",
            cover: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg",
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
            ],
            description: "Gėlių grožis Dominikphotofficial kadruose. Makro ir artimos gėlių fotografijos.",
            keywords: "gėlės, makro fotografija, gamta, botanika, Dominikphotofficial, nuotraukos, žiedai"
        },
        "gandras": {
            name: "GANDRAS",
            cover: "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg",
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
                "https://i.postimg.cc/RVbfkj4W/Gandras-11.jpg"
            ],
            description: "Gandrai Lietuvos kraštovaizdyje. Dominikphotofficial paukščių fotografijos.",
            keywords: "gandras, paukščiai, Lietuvos gamta, paukščių fotografija, Dominikphotofficial, nuotraukos"
        },
        "sventa-lithuania": {
            name: "ŠVENTA | LITHUANIA",
            // Pakeista viršelio nuotrauka, nes pirmoji ištrinta
            cover: "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg",
            images: [
                // Pirmos nuotraukos "sventa-01.jpg" nebėra
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
            ],
            description: "Šventos miestelio ir apylinkių grožis Dominikphotofficial fotografijose.",
            keywords: "Šventa, Lietuva, kraštovaizdis, miestelis, gamta, Dominikphotofficial, fotografija"
        },
        "vdu-botanikos-sodas": {
            name: "VDU | BOTANIKOS SODAS",
            cover: "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg",
            images: [
                "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg",
                "https://i.postimg.cc/FKvBSf85/vdu-botanikos-sodas-02.jpg",
                "https://i.postimg.cc/W4SXJ50g/vdu-botanikos-sodas-03.jpg",
                "https://i.postimg.cc/Wzx91tgy/vdu-botanikos-sodas-04.jpg",
                "https://i.postimg.cc/vBH2PJG0/vdu-botanikos-sodas-05.jpg",
                "https://i.postimg.cc/RV3yxxK8/vdu-botanikos-sodas-06.jpg",
                "https://i.postimg.cc/pLf0PWT0/vdu-botanikos-sodas-07.jpg"
            ],
            description: "VDU Botanikos sodo grožis Dominikphotofficial nuotraukose. Augalų ir gamtos detalės.",
            keywords: "VDU Botanikos sodas, Kaunas, botanika, augalai, gamtos fotografija, Dominikphotofficial, nuotraukos"
        },
        "ivairios-akimirkos": { // Nauja kategorija "Įvairios Akimirkos"
            name: "Įvairios Akimirkos",
            cover: "https://i.postimg.cc/Zq9CrRdH/image.jpg",
            images: [
                "https://i.postimg.cc/Zq9CrRdH/image.jpg",
                "https://i.postimg.cc/ZR83dRGg/Latvija-riga-namas.jpg",
                "https://i.postimg.cc/FKJ0hGDh/Love.jpg"
            ],
            description: "Dominikphotofficial įvairių akimirkų kolekcija. Kadrai, neatrasti kategorijos, bet kupini istorijos.",
            keywords: "įvairios akimirkos, fotografija, menas, Dominikphotofficial, nuotraukos, kelionės, meilė, Latvija"
        }
    };

    // --- Lightbox functionality (reusable across all pages) ---
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classList.add('lightbox', 'hidden');
    document.body.appendChild(lightbox);

    function openLightbox(imageUrl) {
        lightbox.innerHTML = `<img src="${imageUrl}" class="lightbox-content" alt="Didelė nuotrauka">`;
        lightbox.classList.remove('hidden');
    }

    lightbox.addEventListener('click', () => {
        lightbox.classList.add('hidden');
        lightbox.innerHTML = '';
    });

    // --- Logic for index.html ---
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        Object.keys(categoriesData).forEach((categoryKey, index) => {
            const category = categoriesData[categoryKey];

            const galleryLink = document.createElement('a');
            galleryLink.href = `gallery.html?category=${categoryKey}`; // Link to gallery.html with category parameter
            galleryLink.classList.add('gallery-item-link');
            galleryLink.setAttribute('data-aos', 'zoom-in');
            galleryLink.setAttribute('data-aos-delay', index * 100);

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');

            galleryItem.innerHTML = `
                <img src="${category.cover}" alt="${category.name} nuotraukų viršelis">
                <div class="overlay">
                    <h3>${category.name}</h3>
                </div>
            `;
            galleryLink.appendChild(galleryItem);
            categoryGrid.appendChild(galleryLink);
        });
    }

    // --- Logic for gallery.html ---
    const galleryCategoryTitle = document.getElementById('galleryCategoryTitle');
    const imageGrid = document.getElementById('imageGrid');

    if (galleryCategoryTitle && imageGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryKey = urlParams.get('category');
        const category = categoriesData[categoryKey];

        if (category) {
            // Set dynamic page title
            document.title = `${category.name} | DP.PORTFOLIO`;

            // Update meta tags for SEO
            document.querySelector('meta[name="description"]').setAttribute('content', category.description);
            document.querySelector('meta[name="keywords"]').setAttribute('content', category.keywords);
            document.querySelector('link[rel="canonical"]').setAttribute('href', `https://portfolio.dominikphotofficial.lt/gallery.html?category=${categoryKey}`);

            galleryCategoryTitle.textContent = category.name;
            category.images.forEach((imageUrl, index) => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `${category.name} nuotrauka ${index + 1}`;
                img.setAttribute('data-aos', 'fade-up');
                img.setAttribute('data-aos-delay', index * 50); // Staggered animation
                img.addEventListener('click', () => openLightbox(imageUrl)); // Attach lightbox
                imageGrid.appendChild(img);
            });
        } else {
            galleryCategoryTitle.textContent = "Kategorija nerasta";
            imageGrid.innerHTML = "<p style='text-align: center; font-size: 1.2em; margin-top: 50px;'>Atsiprašome, ši kategorija nerasta.</p>";
            // Reset meta for "not found" state
            document.title = "Kategorija nerasta | DP.PORTFOLIO";
            document.querySelector('meta[name="description"]').setAttribute('content', "Kategorija, kurią bandėte pasiekti, neegzistuoja Dominikphotofficial portfolio.");
            document.querySelector('meta[name="keywords"]').setAttribute('content', "kategorija nerasta, klaida, fotografija, portfolio");
            document.querySelector('link[rel="canonical"]').setAttribute('href', `https://portfolio.dominikphotofficial.lt/gallery.html`);
        }
    }
});

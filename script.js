document.addEventListener('DOMContentLoaded', () => {
    // --- BENDRA INICIALIZACIJA ---
    AOS.init({ duration: 1000, once: true, mirror: false });

    const BASE_URL = "https://portfolio.dominikphotofficial.lt/";
    const globalKeywords = "dominikphotofficial, dominikphotofficial.lt, portfolio, dp-portfolio, dp, dominik šuškevič, photos dominik šuškevič";
    
    // Duomenų bazė visoms kategorijoms
    const categoriesData = {
        "sirvetos-regioninis-parkas": { 
            name: "Sirvėtos Regioninis parkas", 
            cover: "https://i.postimg.cc/X7gd6GTN/srp-01.jpg", 
            images: [ "https://i.postimg.cc/X7gd6GTN/srp-01.jpg", "https://i.postimg.cc/NF6TM5F4/srp-02.jpg", "https://i.postimg.cc/8ztRMJHX/srp-03.jpg", "https://i.postimg.cc/TPKDbkhh/srp-04.jpg", "https://i.postimg.cc/SxT9J0Sw/srp-05.jpg", "https://i.postimg.cc/wvsLCWdn/srp-06.jpg", "https://i.postimg.cc/Nftmn7CP/srp-07.jpg", "https://i.postimg.cc/WzLgTMNz/srp-08.jpg", "https://i.postimg.cc/0NjpfkXk/srp-09.jpg", "https://i.postimg.cc/QMzcY2vp/srp-10.jpg", "https://i.postimg.cc/P5rZXfjW/srp-11.jpg", "https://i.postimg.cc/mDM1XtYs/srp-12.jpg", "https://i.postimg.cc/VN2bWjbg/srp-13.jpg" ], 
            description: "Dominik Šuškevič (Dominikphotofficial) fotografijos ir filmas iš Sirvėtos regioninio parko.", 
            keywords: `Sirvėtos regioninis parkas, filmas, video, gamta, peizažas, Lietuva, ${globalKeywords}`,
            videoUrl: 'https://ds-films.github.io/srp/',
            videoCredits: {
                author: 'Dominik Šuškevič',
                screenwriter: 'Dominik Šuškevič',
                director: 'Dominik Šuškevič'
            }
        },
        "fotosesija": { name: "Fotosesija", /* ... */ },
        "miko-kipro-petrausku-namai": { name: "Miko ir Kipro Petrauskų Namai", /* ... */ },
        "baltoji-kiele": { name: "Baltoji kielė", /* ... */ },
        "cirkliskis-lithuania": { name: "CIRKLIŠKIS | LITHUANIA", /* ... */ },
        "geles": { name: "Gėlės", /* ... */ },
        "gandras": { name: "GANDRAS", /* ... */ },
        "sventa-lithuania": { name: "ŠVENTA | LITHUANIA", /* ... */ },
        "vdu-botanikos-sodas": { name: "VDU | BOTANIKOS SODAS", /* ... */ },
        "ivairios-akimirkos": { name: "Įvairios Akimirkos", /* ... */ }
    };

    // ... (Slapukų sutikimo ir Lightbox logika lieka nepakitusi) ...

    // --- BENDRA PUSLAPIŲ LOGIKA ---
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        // ... (Kategorijų kūrimo logika lieka nepakitusi) ...
    }

    const galleryCategoryTitle = document.getElementById('galleryCategoryTitle');
    const imageGrid = document.getElementById('imageGrid');
    const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
    const videoContainer = document.getElementById('video-container');

    if (galleryCategoryTitle && imageGrid && breadcrumbsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryKey = urlParams.get('category');
        const category = categoriesData[categoryKey];

        if (category) {
            // ... (Meta žymių ir breadcrumbs kūrimo logika lieka nepakitusi) ...
            galleryCategoryTitle.textContent = category.name;

            // ATNAUJINTA: VAIZDO ĮRAŠO LOGIKA
            if (category.videoUrl && videoContainer) {
                const credits = category.videoCredits;
                videoContainer.innerHTML = `
                    <div class="video-wrapper" data-aos="fade-up">
                        <iframe src="${category.videoUrl}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="video-credits" data-aos="fade-up" data-aos-delay="100">
                        <dl>
                            <dt>Autorius:</dt><dd>${credits.author}</dd>
                            <dt>Scenaristas:</dt><dd>${credits.screenwriter}</dd>
                            <dt>Režisierius:</dt><dd>${credits.director}</dd>
                        </dl>
                    </div>
                `;
            }

            // Nuotraukų tinklelio kūrimas (lieka nepakitęs)
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
            // ... (Kategorijos neradimo logika) ...
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true, mirror: false });
    const BASE_URL = "https://portfolio.dominikphotofficial.lt/";
    const globalKeywords = "dominikphotofficial, ...";
    const categoriesData = { /*... Visas jūsų kategorijų sąrašas ...*/ };
    const consentBanner = document.getElementById('cookie-consent-banner');
    if (!localStorage.getItem('cookie_consent')) {
        if(consentBanner) consentBanner.classList.remove('hidden');
    } else if (typeof initGA === 'function') {
        initGA();
    }
    const acceptBtn = document.getElementById('accept-cookies-btn');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookie_consent', 'true');
            if(consentBanner) consentBanner.classList.add('hidden');
            if (typeof initGA === 'function') initGA();
        });
    }
    let currentGalleryImages = [], currentImageIndex = 0;
    const lightbox = createLightbox();
    function createLightbox() { /*... Lightbox kūrimo funkcija ...*/ }
    function openLightbox(images, index) { /*... Lightbox atidarymo funkcija ...*/ }
    // ... ir visos kitos Lightbox funkcijos
    function updateMetaTag(property, content, isOgOrName = 'name') { /* ... */ }
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) { /*... Galerijų tinklelio kūrimo kodas ...*/ }
    const galleryPageElements = document.getElementById('galleryCategoryTitle');
    if (galleryPageElements) { /*... Vieno galerijos puslapio kūrimo kodas ...*/ }
});

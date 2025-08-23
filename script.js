document.addEventListener('DOMContentLoaded', () => {
    // --- BENDRA INICIALIZACIJA ---
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
    });

    const BASE_URL = "https://portfolio.dominikphotofficial.lt/";
    const globalKeywords = "dominikphotofficial, dominikphotofficial.lt, portfolio, dp-portfolio, dp, dominik šuškevič, photos dominik šuškevič";
    
    // Kategorijų duomenys su vertimais
    const categoriesData = {
        "geles": { 
            name: { lt: "Gėlės", en: "Flowers", ru: "Цветы", ko: "꽃" }, 
            cover: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", 
            images: [ "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", "https://i.postimg.cc/mrM1vkgD/Flower-02.jpg", "https://i.postimg.cc/zXthW4QJ/Flower-03.jpg", "https://i.postimg.cc/J08N6J3M/Flower-04.jpg", "https://i.postimg.cc/VNSWdzLQ/Flower-05.jpg", "https://i.postimg.cc/x887dW7X/Flower-06.jpg", "https://i.postimg.cc/7YTsQMyr/Flower-07.jpg", "https://i.postimg.cc/L6nK41Kx/Flower-08.jpg", "https://i.postimg.cc/bJgcr0wB/Flower-09.jpg", "https://i.postimg.cc/SsD3kyZ0/Flower-10.jpg", "https://i.postimg.cc/sXVqkB49/Flower-11.jpg", "https://i.postimg.cc/9FK3DQcC/Flower-12.jpg", "https://i.postimg.cc/DZn37pnG/Flower-13.jpg", "https://i.postimg.cc/rs5hzMjF/Flower-14.jpg", "https://i.postimg.cc/V6xGYdjV/Flower-15.jpg", "https://i.postimg.cc/SxhB6tYv/Flower-16.jpg", "https://i.postimg.cc/SQ1JRC55/Flower-17.jpg", "https://i.postimg.cc/SsyJ2rm0/Flower-18.jpg", "https://i.postimg.cc/GmG2XN2w/Flower-19.jpg", "https://i.postimg.cc/sgjWZsmH/Flower-20.jpg", "https://i.postimg.cc/c44YvdX9/Flower-21.jpg", "https://i.postimg.cc/02J2N37M/Flower-22.jpg", "https://i.postimg.cc/cJ5LCNk3/Flower-23.jpg", "https://i.postimg.cc/qBcXtb0R/Flower-24.jpg", "https://i.postimg.cc/nrWW93b0/Flower-25.jpg", "https://i.postimg.cc/zBnF5pp9/flower-26.jpg", "https://i.postimg.cc/QM6Nbm4p/venta-0.jpg", "https://i.postimg.cc/Gp3hGVQL/venta-2.jpg" ], 
            description: "Dominik Šuškevič (Dominikphotofficial) gėlių grožio galerija.", 
            keywords: `gėlės, makro fotografija, gamta, botanika, ${globalKeywords}` 
        },
        // ... čia įterpkite visas kitas savo kategorijas su vertimais ...
    };

    // --- KALBOS NUSTATYMO LOGIKA ---
    const supportedLangs = ['lt', 'en', 'ru', 'ko'];
    let currentLang = 'lt'; // Numatytasis

    const getInitialLanguage = () => {
        const urlLang = new URLSearchParams(window.location.search).get('lang');
        if (urlLang && supportedLangs.includes(urlLang)) return urlLang;

        const storedLang = localStorage.getItem('language');
        if (storedLang && supportedLangs.includes(storedLang)) return storedLang;

        const browserLang = navigator.language.split('-')[0];
        if (supportedLangs.includes(browserLang)) return browserLang;

        return 'lt'; // Grąžiname numatytąją
    };

    const setLanguage = (lang) => {
        if (!supportedLangs.includes(lang)) return;
        currentLang = lang;
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        // Atnaujiname visus tekstus puslapyje
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Atnaujiname kalbų perjungiklio būseną
        document.querySelectorAll('.lang-link').forEach(link => {
            link.classList.toggle('active', link.dataset.lang === lang);
        });

        // Atnaujiname dinaminį turinį (jei toks yra puslapyje)
        updateDynamicContent(lang);
    };

    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = e.target.dataset.lang;
            if (currentLang !== selectedLang) {
                setLanguage(selectedLang);
                // Atnaujiname URL be perkrovimo
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('lang', selectedLang);
                window.history.pushState({}, '', newUrl);
            }
        });
    });

    // --- DINAMINIO TURINIO ATNAUJINIMAS ---
    const updateDynamicContent = (lang) => {
        const categoryGrid = document.getElementById('categoryGrid');
        if (categoryGrid) {
            categoryGrid.innerHTML = ''; // Išvalome senas kategorijas
            Object.keys(categoriesData).forEach((categoryKey, index) => {
                const category = categoriesData[categoryKey];
                const link = document.createElement('a');
                link.href = `gallery.html?category=${categoryKey}&lang=${lang}`;
                link.classList.add('gallery-item-link');
                link.setAttribute('data-aos', 'fade-up');
                link.setAttribute('data-aos-delay', (index % 3) * 100);
                link.innerHTML = `
                    <div class="gallery-item">
                        <img src="${category.cover}" alt="${category.name[lang]} nuotraukų viršelis">
                        <div class="overlay"><h3>${category.name[lang]}</h3></div>
                    </div>`;
                categoryGrid.appendChild(link);
            });
        }

        const breadcrumbsContainer = document.getElementById('breadcrumbs-container');
        if (breadcrumbsContainer) {
            const urlParams = new URLSearchParams(window.location.search);
            const categoryKey = urlParams.get('category');
            if (categoryKey && categoriesData[categoryKey]) {
                const categoryName = categoriesData[categoryKey].name[lang];
                breadcrumbsContainer.innerHTML = `
                    <a href="index.html?lang=${lang}">${translations[lang].breadcrumb_home}</a>
                    <span class="separator">/</span>
                    <a href="index.html?lang=${lang}">${translations[lang].breadcrumb_galleries}</a>
                    <span class="separator">/</span>
                    <span>${categoryName}</span>`;
            }
        }
    };

    // --- INICIALIZAVIMAS ---
    currentLang = getInitialLanguage();
    setLanguage(currentLang);
    // Visi kiti skriptai (slapukai, lightbox, etc.) lieka čia...
});

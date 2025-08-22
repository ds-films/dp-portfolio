// Galerijų duomenys (visos nuotraukos ir pavadinimai)
const galleriesData = {
    "baltoji-kiele": {
        title: "Baltoji Kielė",
        images: [
            { src: "https://i.postimg.cc/KYbYwNkK/bird-01.jpg", alt: "Baltoji Kielė 1", title: "Baltoji Kielė 1" },
            { src: "https://i.postimg.cc/1zKzQqwv/bird-02.jpg", alt: "Baltoji Kielė 2", title: "Baltoji Kielė 2" },
            { src: "https://i.postimg.cc/1tf4rzVM/bird-03.jpg", alt: "Baltoji Kielė 3", title: "Baltoji Kielė 3" },
            { src: "https://i.postimg.cc/Xv2p55qp/bird-04.jpg", alt: "Baltoji Kielė 4", title: "Baltoji Kielė 4" },
            { src: "https://i.postimg.cc/gJQjSPvp/bird-05.jpg", alt: "Baltoji Kielė 5", title: "Baltoji Kielė 5" },
            { src: "https://i.postimg.cc/GtvLXTLP/bird-06.jpg", alt: "Baltoji Kielė 6", title: "Baltoji Kielė 6" },
            { src: "https://i.postimg.cc/hPqPfss2/bird-07.jpg", alt: "Baltoji Kielė 7", title: "Baltoji Kielė 7" },
            { src: "https://i.postimg.cc/9FtXT9NC/bird-08.jpg", alt: "Baltoji Kielė 8", title: "Baltoji Kielė 8" }
        ]
    },
    "cirkliskis-lietuva": {
        title: "CIRKLIŠKIS | LIETUVA",
        images: [
            { src: "https://i.postimg.cc/x8pRF86C/cirkliskis-01.jpg", alt: "Cirkliškis 1", title: "Cirkliškis 1" },
            { src: "https://i.postimg.cc/6QzGhSj6/cirkliskis-02.jpg", alt: "Cirkliškis 2", title: "Cirkliškis 2" },
            { src: "https://i.postimg.cc/g0pvs3Gs/cirkliskis-03.jpg", alt: "Cirkliškis 3", title: "Cirkliškis 3" },
            { src: "https://i.postimg.cc/Hxx8v2Rw/cirkliskis-04.jpg", alt: "Cirkliškis 4", title: "Cirkliškis 4" },
            { src: "https://i.postimg.cc/25jxmng6/cirkliskis-05.jpg", alt: "Cirkliškis 5", title: "Cirkliškis 5" },
            { src: "https://i.postimg.cc/fRCxHJkh/cirkliskis-06.jpg", alt: "Cirkliškis 6", title: "Cirkliškis 6" },
            { src: "https://i.postimg.cc/J4b3kTL0/cirkliskis-07.jpg", alt: "Cirkliškis 7", title: "Cirkliškis 7" },
            { src: "https://i.postimg.cc/sx5W52bq/cirkliskis-08.jpg", alt: "Cirkliškis 8", title: "Cirkliškis 8" },
            { src: "https://i.postimg.cc/MKbRTv7j/cirkliskis-09.jpg", alt: "Cirkliškis 9", title: "Cirkliškis 9" },
            { src: "https://i.postimg.cc/YSjmbRJ1/cirkliskis-10-Glorija-Jancauskaite.jpg", alt: "Cirkliškis 10 - Glorija Jancauskaitė", title: "Cirkliškis 10 - Glorija Jancauskaitė" },
            { src: "https://i.postimg.cc/D03JfTmg/cirkliskis-11.jpg", alt: "Cirkliškis 11", title: "Cirkliškis 11" },
            { src: "https://i.postimg.cc/C1k5QQJf/cirkliskis-12.jpg", alt: "Cirkliškis 12", title: "Cirkliškis 12" },
            { src: "https://i.postimg.cc/XJSdqFzd/cirkliskis-13.jpg", alt: "Cirkliškis 13", title: "Cirkliškis 13" },
            { src: "https://i.postimg.cc/JhtPZbxF/cirkliskis-14.jpg", alt: "Cirkliškis 14", title: "Cirkliškis 14" },
            { src: "https://i.postimg.cc/bvbqy2n7/Egle.jpg", alt: "Eglė (Cirkliškis)", title: "Eglė (Cirkliškis)" }
        ]
    },
    "geles": {
        title: "Gėlės",
        images: [
            { src: "https://i.postimg.cc/Dy2Q1ryc/Flower-01.jpg", alt: "Gėlė 1", title: "Gėlė 1" },
            { src: "https://i.postimg.cc/mrM1vkgD/Flower-02.jpg", alt: "Gėlė 2", title: "Gėlė 2" },
            { src: "https://i.postimg.cc/zXthW4QJ/Flower-03.jpg", alt: "Gėlė 3", title: "Gėlė 3" },
            { src: "https://i.postimg.cc/J08N6J3M/Flower-04.jpg", alt: "Gėlė 4", title: "Gėlė 4" },
            { src: "https://i.postimg.cc/VNSWdzLQ/Flower-05.jpg", alt: "Gėlė 5", title: "Gėlė 5" },
            { src: "https://i.postimg.cc/x887dW7X/Flower-06.jpg", alt: "Gėlė 6", title: "Gėlė 6" },
            { src: "https://i.postimg.cc/7YTsQMyr/Flower-07.jpg", alt: "Gėlė 7", title: "Gėlė 7" },
            { src: "https://i.postimg.cc/L6nK41Kx/Flower-08.jpg", alt: "Gėlė 8", title: "Gėlė 8" },
            { src: "https://i.postimg.cc/bJgcr0wB/Flower-09.jpg", alt: "Gėlė 9", title: "Gėlė 9" },
            { src: "https://i.postimg.cc/SsD3kyZ0/Flower-10.jpg", alt: "Gėlė 10", title: "Gėlė 10" },
            { src: "https://i.postimg.cc/sXVqkB49/Flower-11.jpg", alt: "Gėlė 11", title: "Gėlė 11" },
            { src: "https://i.postimg.cc/9FK3DQcC/Flower-12.jpg", alt: "Gėlė 12", title: "Gėlė 12" },
            { src: "https://i.postimg.cc/DZn37pnG/Flower-13.jpg", alt: "Gėlė 13", title: "Gėlė 13" },
            { src: "https://i.postimg.cc/rs5hzMjF/Flower-14.jpg", alt: "Gėlė 14", title: "Gėlė 14" },
            { src: "https://i.postimg.cc/V6xGYdjV/Flower-15.jpg", alt: "Gėlė 15", title: "Gėlė 15" },
            { src: "https://i.postimg.cc/SxhB6tYv/Flower-16.jpg", alt: "Gėlė 16", title: "Gėlė 16" },
            { src: "https://i.postimg.cc/SQ1JRC55/Flower-17.jpg", alt: "Gėlė 17", title: "Gėlė 17" },
            { src: "https://i.postimg.cc/SsyJ2rm0/Flower-18.jpg", alt: "Gėlė 18", title: "Gėlė 18" },
            { src: "https://i.postimg.cc/GmG2XN2w/Flower-19.jpg", alt: "Gėlė 19", title: "Gėlė 19" },
            { src: "https://i.postimg.cc/sgjWZsmH/Flower-20.jpg", alt: "Gėlė 20", title: "Gėlė 20" },
            { src: "https://i.postimg.cc/c44YvdX9/Flower-21.jpg", alt: "Gėlė 21", title: "Gėlė 21" },
            { src: "https://i.postimg.cc/02J2N37M/Flower-22.jpg", alt: "Gėlė 22", title: "Gėlė 22" },
            { src: "https://i.postimg.cc/cJ5LCNk3/Flower-23.jpg", alt: "Gėlė 23", title: "Gėlė 23" },
            { src: "https://i.postimg.cc/qBcXtb0R/Flower-24.jpg", alt: "Gėlė 24", title: "Gėlė 24" },
            { src: "https://i.postimg.cc/nrWW93b0/Flower-25.jpg", alt: "Gėlė 25", title: "Gėlė 25" },
            { src: "https://i.postimg.cc/zBnF5pp9/flower-26.jpg", alt: "Gėlė 26", title: "Gėlė 26" }
        ]
    },
    "gandras": {
        title: "Gandras",
        images: [
            { src: "https://i.postimg.cc/KYtMgjLT/Gandras-01.jpg", alt: "Gandras 1", title: "Gandras 1" },
            { src: "https://i.postimg.cc/L67YCL3f/Gandras-02.jpg", alt: "Gandras 2", title: "Gandras 2" },
            { src: "https://i.postimg.cc/NFsmttKH/Gandras-03.jpg", alt: "Gandras 3", title: "Gandras 3" },
            { src: "https://i.postimg.cc/9Q74v0Lk/Gandras-04.jpg", alt: "Gandras 4", title: "Gandras 4" },
            { src: "https://i.postimg.cc/s2PMg8d9/Gandras-05.jpg", alt: "Gandras 5", title: "Gandras 5" },
            { src: "https://i.postimg.cc/d1BZ4f5t/Gandras-06.jpg", alt: "Gandras 6", title: "Gandras 6" },
            { src: "https://i.postimg.cc/501F5JqR/Gandras-07.jpg", alt: "Gandras 7", title: "Gandras 7" },
            { src: "https://i.postimg.cc/Nj9TBpjp/Gandras-08.jpg", alt: "Gandras 8", title: "Gandras 8" },
            { src: "https://i.postimg.cc/ZYH6cWQF/Gandras-09.jpg", alt: "Gandras 9", title: "Gandras 9" },
            { src: "https://i.postimg.cc/CLKk6FTy/Gandras-10.jpg", alt: "Gandras 10", title: "Gandras 10" },
            { src: "https://i.postimg.cc/RVbfkj4W/Gandras-11.jpg", alt: "Gandras 11", title: "Gandras 11" },
            { src: "https://i.postimg.cc/Zq9CrRdH/image.jpg", alt: "Gandras (papildoma)", title: "Gandras (papildoma)" },
            { src: "https://i.postimg.cc/ZR83dRGg/Latvija-riga-namas.jpg", alt: "Latvija, Ryga namas (Gandras kategorija)", title: "Latvija, Ryga namas (Gandras kategorija)" }, 
            { src: "https://i.postimg.cc/FKJ0hGDh/Love.jpg", alt: "Meilė (Gandras kategorija)", title: "Meilė (Gandras kategorija)" } 
        ]
    },
    "sventa-lietuva": {
        title: "ŠVENTA | LIETUVA",
        images: [
            // { src: "sventa-01.jpg", alt: "Šventa 1", title: "Šventa 1" }, // Nėra URL, praleidžiu
            { src: "https://i.postimg.cc/2Sr6XGB1/sventa-02.jpg", alt: "Šventa 2", title: "Šventa 2" },
            { src: "https://i.postimg.cc/FFbXn4bx/sventa-03.jpg", alt: "Šventa 3", title: "Šventa 3" },
            { src: "https://i.postimg.cc/28wbYgYQ/sventa-04.jpg", alt: "Šventa 4", title: "Šventa 4" },
            { src: "https://i.postimg.cc/vZTBsB3y/sventa-05.jpg", alt: "Šventa 5", title: "Šventa 5" },
            { src: "https://i.postimg.cc/cJVGP15F/sventa-06.jpg", alt: "Šventa 6", title: "Šventa 6" },
            { src: "https://i.postimg.cc/QdCLtK26/sventa-07.jpg", alt: "Šventa 7", title: "Šventa 7" },
            { src: "https://i.postimg.cc/jqck7dQB/sventa-08.jpg", alt: "Šventa 8", title: "Šventa 8" },
            { src: "https://i.postimg.cc/d35HP4VJ/sventa-09.jpg", alt: "Šventa 9", title: "Šventa 9" },
            { src: "https://i.postimg.cc/QChwrFgJ/sventa-10.jpg", alt: "Šventa 10", title: "Šventa 10" },
            { src: "https://i.postimg.cc/LXzw7tPs/sventa-11.jpg", alt: "Šventa 11", title: "Šventa 11" },
            { src: "https://i.postimg.cc/FzpqFhD5/sventa-12.jpg", alt: "Šventa 12", title: "Šventa 12" },
            { src: "https://i.postimg.cc/jqhdnN1K/sventa-13.jpg", alt: "Šventa 13", title: "Šventa 13" },
            { src: "https://i.postimg.cc/k4FKLGgC/sventa-14.jpg", alt: "Šventa 14", title: "Šventa 14" },
            { src: "https://i.postimg.cc/pLcHYJQb/sventa-15.jpg", alt: "Šventa 15", title: "Šventa 15" },
            { src: "https://i.postimg.cc/qMtg3gH7/sventa-16.jpg", alt: "Šventa 16", title: "Šventa 16" }
        ]
    },
    "vdu-botanikos-sodas": {
        title: "VDU | Botanikos Sodas",
        images: [
            { src: "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg", alt: "VDU Botanikos Sodas 1", title: "VDU Botanikos Sodas 1" },
            { src: "https://i.postimg.cc/FKvBSf85/vdu-botanikos-sodas-02.jpg", alt: "VDU Botanikos Sodas 2", title: "VDU Botanikos Sodas 2" },
            { src: "https://i.postimg.cc/W4SXJ50g/vdu-botanikos-sodas-03.jpg", alt: "VDU Botanikos Sodas 3", title: "VDU Botanikos Sodas 3" },
            { src: "https://i.postimg.cc/Wzx91tgy/vdu-botanikos-sodas-04.jpg", alt: "VDU Botanikos Sodas 4", title: "VDU Botanikos Sodas 4" },
            { src: "https://i.postimg.cc/vBH2PJG0/vdu-botanikos-sodas-05.jpg", alt: "VDU Botanikos Sodas 5", title: "VDU Botanikos Sodas 5" },
            { src: "https://i.postimg.cc/RV3yxxK8/vdu-botanikos-sodas-06.jpg", alt: "VDU Botanikos Sodas 6", title: "VDU Botanikos Sodas 6" },
            { src: "https://i.postimg.cc/pLf0PWT0/vdu-botanikos-sodas-07.jpg", alt: "VDU Botanikos Sodas 7", title: "VDU Botanikos Sodas 7" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Nustatome esamus metus footer'yje
    const currentYearElements = document.querySelectorAll('[id^="current-year"]');
    currentYearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // Priklausomai nuo to, kuriame puslapyje esame (index.html ar gallery.html)
    // vykdoma atitinkama logika.
    if (document.body.classList.contains('gallery-page')) {
        // Logika skirta gallery.html puslapiui
        const params = new URLSearchParams(window.location.search);
        const galleryId = params.get('id');
        const galleryData = galleriesData[galleryId];

        // Dinamiškai nustatome canonical URL
        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink && galleryId) {
            canonicalLink.href = `https://portfolio.dominikphotofficial.lt/gallery.html?id=${galleryId}`;
        } else if (canonicalLink) {
             // Jei nėra galleryId, nukreipiame į bendrą gallery.html
            canonicalLink.href = `https://portfolio.dominikphotofficial.lt/gallery.html`;
        }

        if (galleryData) {
            document.title = `${galleryData.title} - DP.PORTFOLIO`;
            document.getElementById('gallery-title').textContent = galleryData.title;
            const imageGrid = document.getElementById('image-grid');
            
            galleryData.images.forEach(image => {
                const link = document.createElement('a');
                link.href = image.src;
                link.setAttribute('data-lightbox', galleryId); // Unikalus lightbox ID galerijai
                link.setAttribute('data-title', image.title);
                
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                
                link.appendChild(img);
                imageGrid.appendChild(link);
            });

            // Inicijuojame SimpleLightbox po to, kai nuotraukos yra įkeltos
            new SimpleLightbox('.image-grid a', {
                captionsData: 'title', // Naudojame data-title atributą caption'ui
                captionPosition: 'bottom',
                overlayOpacity: 0.8,
                fadeSpeed: 300,
                animationSpeed: 300,
                navText: ['&lsaquo;', '&rsaquo;']
            });
        } else {
            document.getElementById('gallery-title').textContent = "Galerija nerasta.";
            document.getElementById('image-grid').innerHTML = "<p style='text-align: center;'>Atsiprašome, ši galerija neegzistuoja.</p>";
        }
    }
    // Fade-in animacija elementams įvyksta per CSS.
    // Nereikia jokios specialios JS logikos jai inicijuoti DOMContentLoaded.
});

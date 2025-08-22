document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS library for scroll animations
    AOS.init({
        duration: 1000,
        once: true, // Animations will only happen once
        mirror: false, // Whether elements should animate out while scrolling past them
    });

    const categories = {
        "Baltoji kielė": {
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
            ]
        },
        "CIRKLIŠKIS | LITHUANIA": {
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
            ]
        },
        "Gėlės": {
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
            ]
        },
        "GANDRAS": {
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
            ]
        },
        "ŠVENTA | LITHUANIA": {
            cover: "https://i.postimg.cc/NfKjF0z5/sventa-01.jpg",
            images: [
                "https://i.postimg.cc/NfKjF0z5/sventa-01.jpg",
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
        "VDU | BOTANIKOS SODAS": {
            cover: "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg",
            images: [
                "https://i.postimg.cc/HL0Fv0Xk/vdu-botanikos-sodas-01.jpg",
                "https://i.postimg.cc/FKvBSf85/vdu-botanikos-sodas-02.jpg",
                "https://i.postimg.cc/W4SXJ50g/vdu-botanikos-sodas-03.jpg",
                "https://i.postimg.cc/Wzx91tgy/vdu-botanikos-sodas-04.jpg",
                "https://i.postimg.cc/vBH2PJG0/vdu-botanikos-sodas-05.jpg",
                "https://i.postimg.cc/RV3yxxK8/vdu-botanikos-sodas-06.jpg",
                "https://i.postimg.cc/pLf0PWT0/vdu-botanikos-sodas-07.jpg"
            ]
        },
        "Įvairios Akimirkos": { // New category for miscellaneous images
            cover: "https://i.postimg.cc/Zq9CrRdH/image.jpg", // Choose a cover image
            images: [
                "https://i.postimg.cc/Zq9CrRdH/image.jpg",
                "https://i.postimg.cc/ZR83dRGg/Latvija-riga-namas.jpg",
                "https://i.postimg.cc/FKJ0hGDh/Love.jpg"
            ]
        }
    };

    const categoryGrid = document.getElementById('categoryGrid');
    const fullGalleriesContainer = document.getElementById('fullGalleries');
    let currentGallery = null; // To keep track of the currently open gallery

    // Function to create category cover elements
    function createCategoryCovers() {
        Object.keys(categories).forEach((categoryName, index) => {
            const categoryData = categories[categoryName];
            const safeCategoryName = categoryName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();

            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.dataset.category = safeCategoryName;
            galleryItem.setAttribute('data-aos', 'zoom-in');
            galleryItem.setAttribute('data-aos-delay', index * 100);

            galleryItem.innerHTML = `
                <img src="${categoryData.cover}" alt="${categoryName} nuotraukų viršelis">
                <div class="overlay">
                    <h3>${categoryName}</h3>
                </div>
            `;
            categoryGrid.appendChild(galleryItem);

            // Create and append the full gallery for each category (initially hidden)
            const fullGalleryDiv = document.createElement('div');
            fullGalleryDiv.id = `gallery-${safeCategoryName}`;
            fullGalleryDiv.classList.add('full-gallery', 'hidden');

            const backButton = document.createElement('button');
            backButton.classList.add('back-to-categories');
            backButton.textContent = 'Grįžti į kategorijas';
            backButton.addEventListener('click', showCategoryGrid);
            fullGalleryDiv.appendChild(backButton);

            const galleryTitle = document.createElement('h3');
            galleryTitle.classList.add('gallery-title');
            galleryTitle.textContent = categoryName;
            fullGalleryDiv.appendChild(galleryTitle);

            const imageGrid = document.createElement('div');
            imageGrid.classList.add('image-grid');

            categoryData.images.forEach((imageUrl, imgIndex) => {
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.alt = `${categoryName} nuotrauka ${imgIndex + 1}`;
                imgElement.setAttribute('data-aos', 'fade-up');
                imgElement.setAttribute('data-aos-delay', imgIndex * 50 + 100); // Staggered animation
                imgElement.addEventListener('click', () => openLightbox(imageUrl));
                imageGrid.appendChild(imgElement);
            });
            fullGalleryDiv.appendChild(imageGrid);
            fullGalleriesContainer.appendChild(fullGalleryDiv);
        });
    }

    // Function to show a specific full gallery
    function showFullGallery(safeCategoryName) {
        categoryGrid.classList.add('hidden'); // Hide category covers
        document.querySelectorAll('.full-gallery').forEach(gallery => {
            gallery.classList.add('hidden'); // Hide all full galleries
        });

        const galleryToShow = document.getElementById(`gallery-${safeCategoryName}`);
        if (galleryToShow) {
            galleryToShow.classList.remove('hidden'); // Show the selected gallery
            currentGallery = galleryToShow;
            window.scrollTo({ top: document.querySelector('.gallery-sections').offsetTop, behavior: 'smooth' });
            AOS.refresh(); // Refresh AOS to trigger animations on newly visible elements
        }
    }

    // Function to show the category grid again
    function showCategoryGrid() {
        if (currentGallery) {
            currentGallery.classList.add('hidden');
            currentGallery = null;
        }
        categoryGrid.classList.remove('hidden'); // Show category covers
        window.scrollTo({ top: document.querySelector('.gallery-sections').offsetTop, behavior: 'smooth' });
        AOS.refresh(); // Refresh AOS to ensure category covers animate in if needed
    }

    // Event listeners for category covers
    categoryGrid.addEventListener('click', (event) => {
        const galleryItem = event.target.closest('.gallery-item');
        if (galleryItem) {
            const category = galleryItem.dataset.category;
            showFullGallery(category);
        }
    });

    // Lightbox functionality
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

    // Initial setup
    createCategoryCovers();

    // Handle back button behavior for browser history (optional but good UX)
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.category) {
            showFullGallery(event.state.category);
        } else {
            showCategoryGrid();
        }
    });
});

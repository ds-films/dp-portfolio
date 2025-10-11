document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return; 

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const exifToggle = document.getElementById('exif-toggle');
    const exifDataContainer = document.getElementById('exif-data');
    
    const photoItems = Array.from(document.querySelectorAll('.photo-item'));
    if (photoItems.length === 0) return;

    let currentImageIndex = 0;

    photoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        updateLightboxImage();
        lightbox.classList.add('active');
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        exifDataContainer.classList.remove('visible');
    }

    function updateLightboxImage() {
        const currentItem = photoItems[currentImageIndex];
        const imageSrc = currentItem.dataset.src;
        const author = currentItem.dataset.author;
        const camera = currentItem.dataset.camera;

        lightboxImg.src = imageSrc;
        lightboxImg.alt = currentItem.querySelector('img').alt;

        if (author || camera) {
            exifDataContainer.innerHTML = `
                <p><strong>Autorius:</strong> ${author || 'N/A'}</p>
                <p><strong>Kamera:</strong> ${camera || 'N/A'}</p>
            `;
            exifToggle.style.display = 'inline-block';
        } else {
            exifDataContainer.innerHTML = '';
            exifToggle.style.display = 'none';
        }
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + photoItems.length) % photoItems.length;
        updateLightboxImage();
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % photoItems.length;
        updateLightboxImage();
    }

    // Lightbox valdymas
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    exifToggle.addEventListener('click', () => exifDataContainer.classList.toggle('visible'));

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
});

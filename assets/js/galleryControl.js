// Image schema for 3D Gallery
const gallery3DSchema = [
    { src: 'assets/3D/Armour.png', href: 'assets/3D/Armour.png', alt: 'Armour' },
    { src: 'assets/3D/StylizedSmoke.gif', href: 'assets/3D/StylizedSmoke.gif', alt: 'StylizedSmoke' },
    { src: 'assets/3D/WireSenosh.png', href: 'assets/3D/WireSenosh.png', alt: 'SenoshWireframe' },
    { src: 'assets/3D/Vroom.gif', href: 'assets/3D/Vroom.gif', alt: 'Vroom' },
    { src: 'assets/3D/WireSteering.gif', href: 'assets/3D/WireSteering.gif', alt: 'SteeringWireframe' },
    { src: 'assets/3D/TVHead.gif', href: 'assets/3D/TVHead.gif', alt: 'TVHead' }
];

// Image schema for Photo Gallery
const galleryPhotoSchema = [
    { src: 'assets/art/StylizedPortrait_LOW.jpg', href: 'assets/art/StylizedPortrait.png', alt: 'StylizedPortrait' },
    { src: 'assets/animation/GunSpinPoster_LOW.gif', href: 'assets/animation/GunSpinPoster.gif', alt: 'GunSpinPoster' },
    { src: 'assets/art/Reimagine_LOW.jpg', href: 'assets/art/Reimagine.png', alt: 'Reimagine' },
    { src: 'assets/animation/DoUSeeIt_LOW.gif', href: 'assets/animation/DoUSeeIt.gif', alt: 'DoUSeeIt' },
    { src: 'assets/art/HondaExpress_LOW.jpg', href: 'assets/art/HondaExpress.png', alt: 'HondaExpress' },
    { src: 'assets/art/Deora3_LOW.jpg', href: 'assets/art/Deora3.png', alt: 'Deora3' }
];

// Caching rendered content for optimization
let cachedMobileGallery = { '3d-gallery-container': null, 'photo-gallery-container': null };
let cachedDesktopGallery = { '3d-gallery-container': null, 'photo-gallery-container': null };
let currentLayout = null; // Keeps track of the current layout state

// Set up event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Event Listeners for "View More" buttons
    document.getElementById('more-3d-button').addEventListener('click', function () {
        toggleGalleryView('3d-gallery-container', 'more-3d-button', '600px');
    });

    document.getElementById('more-gallery-button').addEventListener('click', function () {
        toggleGalleryView('photo-gallery-container', 'more-gallery-button', '600px');
    });

    // Run on load and on resize with debounce
    checkScreenSize();
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkScreenSize, 200); // Debounce delay
    });
});

// View More Button for 3D and Photo Galleries
function toggleGalleryView(galleryId, buttonId, initialHeight) {
    var gallery = document.getElementById(galleryId);
    var button = document.getElementById(buttonId);

    if (button.textContent === 'View More') {
        button.textContent = 'View Less';
        gallery.style.overflow = 'visible';
        gallery.style.height = 'auto';
    } else {
        button.textContent = 'View More';
        gallery.style.overflow = 'hidden';
        gallery.style.height = initialHeight; // Reset to initial height
    }
}

// General render function for mobile layout (1 column)
function renderMobileGallery(galleryId, schema) {
    const galleryContainer = document.getElementById(galleryId);

    // Use cached content if available
    if (cachedMobileGallery[galleryId]) {
        galleryContainer.innerHTML = cachedMobileGallery[galleryId];
        return;
    }

    // Otherwise, render and cache it
    galleryContainer.innerHTML = '';
    const gallery = document.createElement('div');
    gallery.classList.add('photo-gallery');

    const singleColumn = document.createElement('div');
    singleColumn.classList.add('gallery-column');
    singleColumn.style.maxWidth = '100%';

    schema.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-image');
        imgDiv.innerHTML = `<a target="_blank" href="${image.href}"><img src="${image.src}" alt="${image.alt}" loading="lazy"></a>`;
        singleColumn.appendChild(imgDiv);
    });

    gallery.appendChild(singleColumn);
    galleryContainer.appendChild(gallery);

    // Cache the rendered mobile gallery
    cachedMobileGallery[galleryId] = galleryContainer.innerHTML;
}

// General render function for desktop layout (3 columns)
function renderDesktopGallery(galleryId, schema) {
    const galleryContainer = document.getElementById(galleryId);

    // Use cached content if available
    if (cachedDesktopGallery[galleryId]) {
        galleryContainer.innerHTML = cachedDesktopGallery[galleryId];
        return;
    }

    // Otherwise, render and cache it
    galleryContainer.innerHTML = '';
    const gallery = document.createElement('div');
    gallery.classList.add('photo-gallery');

    const columns = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    columns[0].classList.add('gallery-column');
    columns[1].classList.add('middle-gallery-column');
    columns[2].classList.add('gallery-column');

    schema.forEach((image, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-image');
        imgDiv.innerHTML = `<a target="_blank" href="${image.href}"><img src="${image.src}" alt="${image.alt}" loading="lazy"></a>`;

        if (index % 3 === 0) {
            columns[0].appendChild(imgDiv);
        } else if (index % 3 === 1) {
            columns[1].appendChild(imgDiv);
        } else {
            columns[2].appendChild(imgDiv);
        }
    });

    columns.forEach(column => gallery.appendChild(column));
    galleryContainer.appendChild(gallery);

    // Cache the rendered desktop gallery
    cachedDesktopGallery[galleryId] = galleryContainer.innerHTML;
}

// Function to check screen size and switch layouts
function checkScreenSize() {
    const isMobile = window.innerWidth <= 768;

    // Prevent unnecessary re-renders
    if (isMobile && currentLayout === 'mobile') return;
    if (!isMobile && currentLayout === 'desktop') return;

    // Update currentLayout state
    currentLayout = isMobile ? 'mobile' : 'desktop';

    if (isMobile) {
        renderMobileGallery('3d-gallery-container', gallery3DSchema);
        renderMobileGallery('photo-gallery-container', galleryPhotoSchema);
    } else {
        renderDesktopGallery('3d-gallery-container', gallery3DSchema);
        renderDesktopGallery('photo-gallery-container', galleryPhotoSchema);
    }
}

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
    { src: 'assets/animation/GunspinPoster_Low.gif', href: 'assets/animation/GunspinPoster.gif', alt: 'GunspinPoster' },
    { src: 'assets/art/Reimagine_LOW.jpg', href: 'assets/art/Reimagine.png', alt: 'Reimagine' },
    { src: 'assets/animation/DoUSeeIt_LOW.gif', href: 'assets/animation/DoUSeeIt.gif', alt: 'DoUSeeIt' },
    { src: 'assets/art/HondaExpress_LOW.jpg', href: 'assets/art/HondaExpress.png', alt: 'HondaExpress' },
    { src: 'assets/art/Deora3_LOW.jpg', href: 'assets/art/Deora3.png', alt: 'Deora3' }
];

// Set up event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Event Listeners for "View More" buttons
    document.getElementById('more-3d-button').addEventListener('click', function () {
        toggleGalleryView('3d-gallery-container', 'more-3d-button', '600px');
    });

    document.getElementById('more-gallery-button').addEventListener('click', function () {
        toggleGalleryView('photo-gallery-container', 'more-gallery-button', '600px');
    });

    // Run on load and on resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
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
    galleryContainer.innerHTML = ''; // Clear current gallery

    const gallery = document.createElement('div');
    gallery.classList.add('photo-gallery');

    // Create a single column
    const singleColumn = document.createElement('div');
    singleColumn.classList.add('gallery-column');
    singleColumn.style.maxWidth = '100%';

    // Append all images in order
    schema.forEach(image => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-image');
        imgDiv.innerHTML = `<a target="_blank" href="${image.href}"><img src="${image.src}" alt="${image.alt}" loading="lazy"></a>`;
        singleColumn.appendChild(imgDiv);
    });

    gallery.appendChild(singleColumn);
    galleryContainer.appendChild(gallery);
}

// General render function for desktop layout (3 columns)
function renderDesktopGallery(galleryId, schema) {
    const galleryContainer = document.getElementById(galleryId);
    galleryContainer.innerHTML = ''; // Clear current gallery

    const gallery = document.createElement('div');
    gallery.classList.add('photo-gallery');

    // Create 3 columns
    const columns = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    columns[0].classList.add('gallery-column');
    columns[1].classList.add('middle-gallery-column');
    columns[2].classList.add('gallery-column');

    // Append images into columns based on index (1st and 4th in first column, 2nd and 5th in second, etc.)
    schema.forEach((image, index) => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-image');
        imgDiv.innerHTML = `<a target="_blank" href="${image.src}"><img src="${image.src}" alt="${image.alt}" loading="lazy"></a>`;

        // Distribute images into 3 columns
        if (index % 3 === 0) {
            columns[0].appendChild(imgDiv); // First column: img1, img4
        } else if (index % 3 === 1) {
            columns[1].appendChild(imgDiv); // Second column: img2, img5
        } else {
            columns[2].appendChild(imgDiv); // Third column: img3, img6
        }
    });

    // Append columns to the gallery
    columns.forEach(column => gallery.appendChild(column));
    galleryContainer.appendChild(gallery);
}

// Function to check screen size and switch layouts
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        renderMobileGallery('3d-gallery-container', gallery3DSchema);  // Mobile layout for 3D gallery
        renderMobileGallery('photo-gallery-container', galleryPhotoSchema);  // Mobile layout for Photo gallery
    } else {
        renderDesktopGallery('3d-gallery-container', gallery3DSchema); // Desktop layout for 3D gallery
        renderDesktopGallery('photo-gallery-container', galleryPhotoSchema); // Desktop layout for Photo gallery
    }
}

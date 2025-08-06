// Update these import paths
// import lightGallery from '/eraarconstruction/node_modules/lightgallery/lightgallery.es5.js';

// import lgThumbnail from '/eraarconstruction/node_modules/lg-thumbnail/dist/lg-thumbnail.es5.js';
// import lgZoom from '/eraarconstruction/node_modules/lg-zoom/dist/lg-zoom.es5.js';
// import lgFullscreen from '/eraarconstruction/node_modules/lg-fullscreen/dist/lg-fullscreen.es5.js';
// import lgAutoplay from '/eraarconstruction/node_modules/lg-autoplay/dist/lg-autoplay.es5.js';

// ... (rest of your script.js code)
// ... (rest of your script.js code remains the same)

document.addEventListener('DOMContentLoaded', function() {
    const galleryElement = document.getElementById('lightgallery');

    if (galleryElement) {
        lightGallery(galleryElement, {
            plugins: [
                lgThumbnail,
                lgZoom,
                lgFullscreen,
                lgAutoplay
            ],
            speed: 500,
            selector: 'img',
            download: false,
        });
    }
});
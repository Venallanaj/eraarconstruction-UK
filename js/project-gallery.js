$(document).ready(function(){
    // Reusable Slick Slider Settings
    const defaultSlickSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Initialize "Gallery Project" Slider
    $('#slick-gallery-project').slick(defaultSlickSettings);

    // Initialize LightGallery for "Gallery Project" Slider
    lightGallery(document.getElementById('slick-gallery-project'), {
        plugins: [lgZoom],
        selector: 'img', // LightGallery targets images within the slider
        download: false,
    });


    // Initialize "Before & After" Sliders
    $('#slick-gallery-after').slick(defaultSlickSettings);
    $('#slick-gallery-before').slick(defaultSlickSettings);

    // Initialize LightGallery for "Before & After" Sliders
    lightGallery(document.getElementById('slick-gallery-after'), {
        plugins: [lgZoom],
        selector: 'img',
        download: false,
    });
    lightGallery(document.getElementById('slick-gallery-before'), {
        plugins: [lgZoom],
        selector: 'img',
        download: false,
    });
});
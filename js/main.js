var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    }
});

var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    }
});

document.addEventListener('keydown', swipe);

function swipe(e) {
    if (e.key == "ArrowLeft") {
        hotelSlider.slidePrev();
    }
    if (e.key == "ArrowRight") {
        hotelSlider.slideNext();
    }
    
};




  


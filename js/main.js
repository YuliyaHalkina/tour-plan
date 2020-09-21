var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slider-button--next',
      prevEl: '.slider-button--prev',
    }
  });

document.addEventListener('keydown', swipe);

function swipe(e) {
    if (e.key == "ArrowLeft") {
        mySwiper.slidePrev();
    }
    if (e.key == "ArrowRight") {
        mySwiper.slideNext();
    }
    
};




  


$(document).ready(function() {
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
    
    document.addEventListener('keydown', onKeydown);
    
    $('.newsletter').parallax({imageSrc: './img/newsletter-bg.jpg', speed: 0.2});
    
    var menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', function () {
        document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
    });

    var modalButton = $('[data-toggle=modal]');
    var closeButton = $('.modal__close');
    var modalOverlay = $('.modal__overlay');
    var modalDialog= $('.modal__dialog');
    modalButton.on('click', openModal);
    closeButton.on('click', closeModal);

    function openModal() {
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible')
    };

    function closeModal(event) {
        event.preventDefault();
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible')
    };

    function onKeydown(e) {
        if (e.key == "ArrowLeft") {
            hotelSlider.slidePrev();
        }
        if (e.key == "ArrowRight") {
            hotelSlider.slideNext();
        }
        if (e.key == "Escape") {
            closeModal(e);
        }
    };
});
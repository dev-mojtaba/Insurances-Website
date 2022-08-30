const swiper = new Swiper('.swiper', {
    pagination: false,
    navigation: false,
    scrollbar: false,
    loop: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
            spaceBetween: 15
        },
        // when window width is >= 540px
        540: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1440: {
            slidesPerView: 3.6,
            spaceBetween: 30
        },
    }
});
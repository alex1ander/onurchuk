document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".sliderNumber-1", {
        slidesPerView: 1.8,
        spaceBetween: 16,
        freeMode: true,
        navigation: {
            prevEl: ".arrow-slider-prev-1",
            nextEl: ".arrow-slider-next-1",
        },
        breakpoints: {
            769: {
                slidesPerView: 2.5,
                spaceBetween: 32,
            },
            1201: {
                slidesPerView: 3.5,
            },

        },
    });
});

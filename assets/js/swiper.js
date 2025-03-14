document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".sliderNumber-1", {
        slidesPerView: 1.8,
        spaceBetween: 16,
        freeMode: true,
        navigation: {
            prevEl: ".sliderNumber-1-top-part .arrow-slider-prev",
            nextEl: ".sliderNumber-1-top-part .arrow-slider-next",
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



    var swiper2 = new Swiper(".sliderNumber-2", {
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            prevEl: ".sliderNumber-2 .arrow-slider-prev",
            nextEl: ".sliderNumber-2 .arrow-slider-next",
        },
        pagination: {
            el: ".sliderNumber-2 .swiper-pagination-c",
            type: "fraction",
        },
        scrollbar: {
            el: ".sliderNumber-2 .swiper-scrollbar-c",
            hide: true,
        },
    });

    var swiper3 = new Swiper(".sliderNumber-3", {
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            prevEl: ".sliderNumber-3 .arrow-slider-prev",
            nextEl: ".sliderNumber-3 .arrow-slider-next",
        },
        scrollbar: {
            el: ".sliderNumber-3 .swiper-scrollbar-c",
            hide: true,
        },
    });

    var swiper4 = new Swiper(".sliderNumber-4", {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            769: {
                spaceBetween: 30,
                slidesPerView: 6,
            },
            1201: {
                spaceBetween: 40,
                slidesPerView: 8,
            },

        },
    });


});

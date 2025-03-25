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



    // siper 3

    var swiper3thumbs = new Swiper(".sliderNumber-3-thumbs.picture", {
        spaceBetween: 20,
        slidesPerView: 4, // Автоматическая ширина
        freeMode: true, // Позволяет слайдам быть на одной линии без перелистывания
        watchSlidesProgress: true,
        allowTouchMove: false, // Запрещает ручную прокрутку
        watchOverflow: true, // Отключает ненужные возможности, если слайдов мало
        loop: false, // Отключает дублирование слайдов
    });

    var swiper3 = new Swiper(".sliderNumber-3.picture", {
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            prevEl: ".sliderNumber-3.picture .arrow-slider-prev",
            nextEl: ".sliderNumber-3.picture .arrow-slider-next",
        },
        scrollbar: {
            el: ".sliderNumber-3.picture .swiper-scrollbar-c",
            hide: true,
        },
        thumbs: {
            swiper: swiper3thumbs,
        },
    });




    var swiper3thumbsComparison = new Swiper(".sliderNumber-3-thumbs.comparison", {
        spaceBetween: 20,
        slidesPerView: 4, // Автоматическая ширина
        freeMode: true, // Позволяет слайдам быть на одной линии без перелистывания
        watchSlidesProgress: true,
        allowTouchMove: false, // Запрещает ручную прокрутку
        watchOverflow: true, // Отключает ненужные возможности, если слайдов мало
        loop: false, // Отключает дублирование слайдов
    });

    var swiper3Comparison = new Swiper(".sliderNumber-3.comparison", {
        spaceBetween: 20,
        autoHeight: true,
        navigation: {
            prevEl: ".sliderNumber-3.comparison .arrow-slider-prev",
            nextEl: ".sliderNumber-3.comparison .arrow-slider-next",
        },
        scrollbar: {
            el: ".sliderNumber-3.comparison .swiper-scrollbar-c",
            hide: true,
        },
        thumbs: {
            swiper: swiper3thumbsComparison,
        },
    });




    //swiper 4
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

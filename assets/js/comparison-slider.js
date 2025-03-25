document.addEventListener("DOMContentLoaded", function () {
    const imageComparisonSliders = document.querySelectorAll('[data-component="image-comparison-slider"]');

    function setSliderstate(e, element) {
        const sliderRange = element.querySelector('[data-image-comparison-range]');

        if (e.type === 'input') {
            sliderRange.classList.add('image-comparison__range--active');
            return;
        }

        sliderRange.classList.remove('image-comparison__range--active');
    }


    function moveSliderRange(e, element) {
        const value = e.target.value;
        const slider = element.querySelector('[data-image-comparison-slider]');
        const imageWrapperOverlay = element.querySelector('[data-image-comparison-overlay]');

        slider.style.left = `${value}%`;
        imageWrapperOverlay.style.width = `${value}%`;


        setSliderstate(e, element);
    }

    function init(element) {
        const sliderRange = element.querySelector('[data-image-comparison-range]');

        if (!('ontouchstart' in window)) {
            sliderRange.addEventListener('mouseup', e => setSliderstate(e, element));
        }

        sliderRange.addEventListener('input', e => moveSliderRange(e, element));
        sliderRange.addEventListener('change', e => moveSliderRange(e, element));
    }

    imageComparisonSliders.forEach(init);


});





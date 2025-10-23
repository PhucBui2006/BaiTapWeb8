$(document).ready(function() {
    const slideContainer = $('.slideshow-slide');
    const images = slideContainer.find('img');
    const imageCount = images.length;
    const imageWidth = images.outerWidth(true); 
    let currentIndex = 0;
    let autoSlideInterval;
    function moveToSlide(index) {
        if (index > imageCount - 5) {
            index = 0; 
        }
        if (index < 0) {
            index = imageCount - 5; 
        }
        slideContainer.css('transform', `translateX(-${index * imageWidth}px)`);
        currentIndex = index;
    }
    $('.next').click(function() {
        moveToSlide(currentIndex + 1);
    });
    $('.prev').click(function() {
        moveToSlide(currentIndex - 1);
    });
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            $('.next').click(); 
        }, 3000); 
    }
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    startAutoSlide();
    $('.slideshow-container').mouseenter(function() {
        stopAutoSlide();
    });
    $('.slideshow-container').mouseleave(function() {
        startAutoSlide();
    });
});
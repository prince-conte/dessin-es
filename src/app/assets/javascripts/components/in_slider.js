$(function() {

    $('.js-in-slider').slick({
        variableWidth: true,
        slidesToShow: 4,
        arrows: false
    });


    $('.js-in-slider-next').on('click',function(){
        $('.js-in-slider').slick('slickNext');
        return false;
    });

});

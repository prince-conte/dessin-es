$(function() {

    $('.js-menu-popular-slider').slick({
        arrows: false,
        infinite: false,
        variableWidth: true,
        slidesToShow: 5,
        slidesToScroll: 2
    });



    $('.js-promo-slider-next').css('top', $('.js-menu-popular-slide img').outerHeight() / 2);

    $('.js-promo-slider-next').on('click',function(){
        $('.js-menu-popular-slider').slick('slickNext');
        return false;
    });


    // two slider


    $('.js-menu-popular-slider-stuf').slick({
        arrows: false,
        infinite: false,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 2
    });



    $('.js-promo-slider-stuf-next').css('top', $('.js-menu-popular-slide-stuf img').outerHeight() / 2);

    $('.js-promo-slider-stuf-next').on('click',function(){
        $('.js-menu-popular-slider-stuf').slick('slickNext');
        return false;
    });

});

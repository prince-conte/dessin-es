$(function() {

    $('.js-menu-popular-slider').slick({
        arrows: false,
        slidesToShow: 5
    });



    $('.js-promo-slider-next').css('top', $('.js-menu-popular-slide > img').outerHeight() / 2);

    $('.js-promo-slider-next').on('click',function(){
        $('.js-menu-popular-slider').slick('slickNext');
        return false;
    });


    // two slider



    $('.js-menu-popular-slider-stuf').slick({
        arrows: false,
        slidesToShow: 4
    });



    $('.js-promo-slider-stuf-next').css('top', $('.js-menu-popular-slide-stuf img').outerHeight() / 2);

    $('.js-promo-slider-stuf-next').on('click',function(){
        $('.js-menu-popular-slider-stuf').slick('slickNext');
        return false;
    });

});

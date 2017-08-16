$(function() {

    $('.js-new-magazine').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px'
                }
            }
        ]
    });


    $('.js-magazine-catalog-slider-prev').css('top', $('.magazine-catalog__item-image img').outerHeight() / 2);
    $('.js-magazine-catalog-slider-next').css('top', $('.magazine-catalog__item-image img').outerHeight() / 2);

    $('.js-magazine-catalog-slider-next').on('click',function(){
        $('.js-new-magazine').slick('slickNext');
        return false;
    });

    $('.js-magazine-catalog-slider-prev').on('click',function(){
        $('.js-new-magazine').slick('slickPrev');
        return false;
    });

});

$(function () {

    $('.js-shares-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


    $('.js-shares-slider-next').css('top', $('.js-shares-slide img').outerHeight() / 2);

    $('.js-shares-slider-prev').css('top', $('.js-shares-slide img').outerHeight() / 2);


    $('.js-shares-slider-next').on('click',function(){
        $('.js-shares-slider').slick('slickNext');
        return false;
    });

    $('.js-shares-slider-prev').on('click',function(){
        $('.js-shares-slider').slick('slickPrev');
        return false;
    });

});

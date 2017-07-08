$(function() {

    $('.js-card-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
        asNavFor: '.js-card-slider-nav',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]

    });


    $('.js-card-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        asNavFor: '.js-card-slider',
        focusOnSelect: true
    });


});

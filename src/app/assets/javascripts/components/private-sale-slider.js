
$(function() {

    if (Modernizr.mq(mq.xs.str)) {

        $('.js-private-sale-slider').slick({
            variableWidth: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '100px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        var currentSlide = $('.js-private-sale-slider').find('.is-current').data('slick-index');

        $('.js-private-sale-slider').slick('slickGoTo',currentSlide);

    }

});

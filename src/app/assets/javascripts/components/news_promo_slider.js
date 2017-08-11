
if (Modernizr.mq(mq.xs.str)) {

    $('.js-promo-news-slider').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
    });
}


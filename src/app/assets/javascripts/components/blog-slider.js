if (Modernizr.mq(mq.xs.str)) {

    $('.js-blog-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        customPaging: function(slider, i) {
            return $('<span></span>');
        },
    });
}

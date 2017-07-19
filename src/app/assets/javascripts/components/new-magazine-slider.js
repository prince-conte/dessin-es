$(function() {

    $('.js-new-magazine').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
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


});

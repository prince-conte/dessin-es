$(function() {


    $('.js-filter-slider').slick({
        variableWidth: true,
        slidesToShow: 7,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '65px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.js-filter-slider-next').on('click',function(){
        $('.js-filter-slider').slick('slickNext');
        return false;
    });





});

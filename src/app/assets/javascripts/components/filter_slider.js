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
                    centerMode: false,
                    centerPadding: '65px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-filter-slider-universe').slick({
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
                    centerMode: false,
                    centerPadding: '65px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // On before slide change
    $('.js-filter-slider').on('init', function(event, slick, currentSlide, nextSlide){
        $('.slick-center').addClass('is-active');
    });


    $('.js-filter-slider a').on('click',function(){

        $('.filter-slider__item').removeClass('is-active');

        $(this).addClass('is-active');

    });

    $('.js-filter-slider-universe a').on('click',function(){

        $('.filter-slider__item')
            .removeClass('is-all')
            .removeClass('is-active');

        $(this).addClass('is-active');

    });

    $('.js-filter-all').on('click',function(){

        $('.filter-slider__item')
            .removeClass('is-active')
            .addClass('is-all');

        $(this).addClass('is-active');

    });



    $('.js-filter-slider-next').on('click',function(){

        $('.js-filter-slider').slick('slickNext');
        $('.js-filter-slider-universe').slick('slickNext');

        return false;
    });





});

$(function() {

    function mobileMenuInit() {

        var pageHeight = $(window).outerHeight();
        var headerHeight = $('.site-header').outerHeight();
        var menuHeight = pageHeight - headerHeight;

        $('.js-mobile-menu').css('height' , menuHeight);
        console.log(menuHeight);

    }



    $('.js-open-mobile-menu').on('click',function() {

        mobileMenuInit()

        $(this).toggleClass('is-active');

        $('.js-mobile-menu').toggleClass('is-active');

        if ($('.js-mobile-menu').hasClass('is-active')) {

            $('html').css('overflow','hidden');
            $('body').css('overflow','hidden');

        } else {
            $('html').css('overflow','');
            $('body').css('overflow','');
        }

        return false;
    });

    $('.js-open-sub-menu').on('click',function() {

        $(this).toggleClass('is-active');
        $(this).next('ul').toggleClass('is-active');

    });





    $(window).on('load', function() {
        mobileMenuInit();
    });

});

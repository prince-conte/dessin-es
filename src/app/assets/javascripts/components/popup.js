$(function(){

    $('.js-open-popup-form').magnificPopup({
        type:'inline',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">Закрыть</button>',

        callbacks: {
            elementParse: function(item) {
                $('.js-open-mobile-menu').removeClass('is-active');
                $('.js-mobile-menu').removeClass('is-active');
                $('.js-open-sub-menu').removeClass('is-active');
                $('.js-open-sub-menu').next('ul').removeClass('is-active');

                $('html').css('overflow','');
                $('body').css('overflow','');

            }
        }
    });

});

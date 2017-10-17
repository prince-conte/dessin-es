$(function(){


    if (Modernizr.mq(mq.sm.str)) {

        var lightbox = $('.js-card-slider a').simpleLightbox({
            nav: true,
            closeText: '<img src="img/svg/close.svg" alt="close">',
            swipeTolerance: 20,
            heightRatio: 1,
            widthRatio: 1,
            swipeClose: true,
            showCounter: false,
            history: true
        });

    } else {

        $(document).on('click', '.js-card-slider a', function () {
            return false
        })

    }




});

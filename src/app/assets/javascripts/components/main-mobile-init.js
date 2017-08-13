$(function() {

    if (Modernizr.mq(mq.xs.str)) {

        var headerHeight = $('.site-header').outerHeight();

        $('main').css('margin-top' , headerHeight);

    }

});

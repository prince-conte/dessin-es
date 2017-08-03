$(function () {

    $(document).on('click touchend', '.js-hide-txt',function() {

        $(this).addClass('is-active');

        return false;
    });

});

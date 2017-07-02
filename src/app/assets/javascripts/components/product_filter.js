$(function() {

    $(document).on('click' , '.js-product-filer-item' ,  function() {

        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
        } else {
            $('.js-product-filer-item').removeClass('is-active');
            $(this).addClass('is-active');
        }
        return false
    });

    $(document).click(function(event) {
        if (!$(event.target).is(".js-product-filer-item")) {
            $('.js-product-filer-item').removeClass('is-active');
        }
    });

});

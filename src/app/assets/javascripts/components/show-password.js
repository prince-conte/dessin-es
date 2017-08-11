$(function(){


    $(document).on('click', '.js-show-password', function () {

        var $el = $(this).prev('input.js-input-password');

        if ($el.hasClass('is-visible')) {

            $el.attr('type' , 'password' );
            $el.removeClass('is-visible');
            $(this).removeClass('is-visible');

        }

        else {

            $el.addClass('is-visible');
            $el.attr('type' , 'text' );
            $(this).addClass('is-visible');

        }

    });

});

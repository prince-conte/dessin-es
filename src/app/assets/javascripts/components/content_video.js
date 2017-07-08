$(function() {


    // Video (Youtube, Vimeo, Rutube)
    function contentVideoResponsive() {
        $(document)
            .find('.wysiwyg iframe[src*="vimeo"], .wysiwyg iframe[src*="rutube"], .wysiwyg iframe[src*="youtube"]')
            .each(function () {
                $(this).wrap('<div class="wysiwyg__video"/>');
            });
    };

    $(window)
        .on('load', function() {
            contentVideoResponsive();
        })
});



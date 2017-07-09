$(function () {

    var $selectmenu = $('.js-select-menu');

    function selectmenuClose() {
        $selectmenu.selectmenu('close');
    }

    $selectmenu.selectmenu( {

        // disabled: true,

        open: function(event, ui) {
            $(document)
                .find('.ui-selectmenu-menu.ui-selectmenu-open .ui-menu')
                .css('width', $(event.currentTarget).width());
        },

        change: function () {
            window.location.href = $(this).val();
        }
    });


    $(window).smartresize(function() {
        selectmenuClose();
    });

});

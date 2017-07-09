$(function () {

    var $selectmenu = $('.js-select-menu');

    function selectmenuClose() {
        $selectmenu.selectmenu('close');
    }

    $selectmenu.selectmenu( {

        open: function(event, ui) {
            $(document)
                .find('.ui-selectmenu-menu.ui-selectmenu-open .ui-menu')
                .css('width', $(event.currentTarget).width());
        }

    });


    $(window).smartresize(function() {
        selectmenuClose();
    });

});

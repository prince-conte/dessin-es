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
        },

        create: function(event, ui) {
            const $select = $(event.target);

            if (
                $select
                    .find('option:first-child')
                    .is(':disabled')
            ) {
                $select
                    .next('.ui-selectmenu-button')
                    .find('.ui-selectmenu-text')
                    .addClass('ui-state-placeholder');
            }
        }

    });


    $(window).smartresize(function() {
        selectmenuClose();
    });

});

$(function () {

    $('.js-open-delivery-point-hide').on('click',function(){

        $(this).prev('.basket-delivery__delivery-point-hide').css('display','block');
        $(this).css('display','none');

        return false;
    });

});

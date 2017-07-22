$(function () {

    $('.js-link-open').on('click',function(){

        $(this).next('.movies-about__hidden-content').addClass('is-active')
        $(this).css('display','none');

        return false;
    });

});

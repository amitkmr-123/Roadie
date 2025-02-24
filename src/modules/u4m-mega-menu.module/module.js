

$('.cmMegaMenuWrap span.cmMbTrigger').click(function() {
    $(this).parent().siblings().find('.cmMbTrigger').removeClass('childOpen');
    $(this).parent().siblings().find('.cmSecondLevel').slideUp();
    $(this).next('.cmSecondLevel').slideToggle();
    $(this).next('.cmSecondLevel').children('.cmSecondLevel').slideUp();
    $(this).next('.cmSecondLevel').children('.cmSecondLevel').find('.cmMbTrigger').removeClass('childOpen');
    $(this).toggleClass('childOpen');
    return false;
});
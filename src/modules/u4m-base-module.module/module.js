$('.accTtl').click(function () {
  $(this).next('.accContent').slideToggle(500);
  $(this).parent().toggleClass('active');
})
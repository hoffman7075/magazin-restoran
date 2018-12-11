$(document).ready(function() {

  // tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  if ($(".owl-carousel").length > 0) {
    $(".owl-carousel").owlCarousel({
      items: 4,
      autoplay: true,
      dots: true
    });
  }
});

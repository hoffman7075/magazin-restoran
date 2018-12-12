$(document).ready(function() {

  // tabs
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  if ($(".owl-carousel").length > 0) {
    $(".products-slider").owlCarousel({
      items: 4,
      autoplay: true,
      dots: true
    });

    $(".clients-slider").owlCarousel({
      items: 5,
      autoplay: true,
      dots: true
    });
  }
});

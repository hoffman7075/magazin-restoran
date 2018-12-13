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

  if ($(".products-filter").length > 0) {
    var priceMin = $(".products-filter .price-min");
    var priceMax = $(".products-filter .price-max");
    var priceSlider = $(".products-filter .price-slider");

    $(".filter-button").on("click", "span", function() {
      $(".products-filter").toggleClass("active");
    });

    priceSlider.slider({
      range: true,
      min: 2245,
      max: 69854,
      values: [ 11245, 39854 ],
      slide: function( event, ui ) {
        priceMin.text(ui.values[0]);
        priceMax.text(ui.values[1]);
      }
    });

    priceMin.text(priceSlider.slider("values", 0));
    priceMax.text(priceSlider.slider("values", 1));

  }
});

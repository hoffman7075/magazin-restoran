$(document).ready(function() {

  // tabs
  $('.tabs:not(.vertical) > ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  // tabs vacancy
  $('.tabs.vertical ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.vacancy').find('div.vacancy__tabs-content div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

  // owl carousel
  if ($(".products-slider").length > 0) {
    $(".products-slider").owlCarousel({
      items: 4,
      autoplay: true,
      dots: true
    });
  }

  if ($(".clients-slider").length > 0) {
    $(".clients-slider").owlCarousel({
      items: 5,
      autoplay: true,
      dots: true
    });
  }

  if ($(".clients-projects").length > 0) {
    $(".clients-projects").owlCarousel({
      items: 1,
      dots: true
    });
  }

  // js filter
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
      values: [11245, 39854],
      slide: function(event, ui) {
        priceMin.text(ui.values[0]);
        priceMax.text(ui.values[1]);
      }
    });

    priceMin.text(priceSlider.slider("values", 0));
    priceMax.text(priceSlider.slider("values", 1));

  }

  // accordion
  if ($(".accordion").length > 0) {
    $(".accordion").on("click", function() {
      $(this).toggleClass("active");
      $(this).next().slideToggle(200);
    })
  }

  // bxslider product
  if ($(".bxslider").length > 0) {
    // https://gist.github.com/tarikcayir/c9851b6253e4688bd4544e1677ee4fc5

    // Cache the thumb selector for speed
    var thumb = $('#gallery-thumbs').find('.thumb');

    // How many thumbs do you want to show & scroll by
    var visibleThumbs = 4;

    // Put slider into variable to use public functions
    var gallerySlider = $('.bxslider').bxSlider({
      controls: false,
      pager: false,
      easing: 'easeInOutQuint',
      infiniteLoop: false,
      speed: 500,

      onSlideAfter: function($slideElement, oldIndex, newIndex) {
        thumb.removeClass('pager-active');
        thumb.eq(newIndex).addClass('pager-active');
        // Action next carousel slide on one before the end, so newIndex + 1
        slideThumbs(newIndex + 1, visibleThumbs);
      }
    });

    // When clicking a thumb
    thumb.click(function(e) {

      // -6 as BX slider clones a bunch of elements
      gallerySlider.goToSlide($(this).closest('.thumb-item').index());

      // Prevent default click behaviour
      e.preventDefault();
    });

    // Function to calculate which slide to move the thumbs to
    function slideThumbs(currentSlideNumber, visibleThumbs) {

      // Calculate the first number and ignore the remainder
      var m = Math.floor(currentSlideNumber / visibleThumbs);
      // Multiply by the number of visible slides to calculate the exact slide we need to move to
      var slideTo = m;

      // Tell the slider to move
      thumbsSlider.goToSlide(slideTo);
    }

    // When you click on a thumb
    $('#gallery-thumbs').find('.thumb').click(function() {
      // Remove the active class from all thumbs
      $('#gallery-thumbs').find('.thumb').removeClass('pager-active');

      // Add the active class to the clicked thumb
      $(this).addClass('pager-active');
    });

    // Thumbnail slider
    var thumbsSlider = $('#gallery-thumbs').bxSlider({
      mode: 'vertical',
      controls: true,
      pager: false,
      easing: 'easeInOutQuint',
      //displaySlideQty: visibleThumbs,
      //moveSlideQty: visibleThumbs,
      infiniteLoop: false,
      slideWidth: 100,
      minSlides: visibleThumbs,
      maxSlides: visibleThumbs,
      nextText: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="12px" transform="rotate(180)"><path fill-rule="evenodd" stroke="rgb(104, 104, 105)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M1.011,7.661 L7.999,1.011 L14.989,7.661 "></path></svg>',
      prevText: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17px" height="12px"><path fill-rule="evenodd" stroke="rgb(104, 104, 105)" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M1.011,7.661 L7.999,1.011 L14.989,7.661 "></path></svg>',
    });
  }

  // custom scroll
  if ($(".list-projects").length > 0) {
    var ps = new PerfectScrollbar('.list-projects', {
        suppressScrollY: true,
        useBothWheelAxes: true,
        wheelSpeed: 2
      }
    );
  }

  // show more
  if ($(".show-more-block").length > 0) {
    $(".show-more").on("click", function() {
      $(".show-more-block").toggleClass("active");
      $(".show-more-block+.hidden-text").slideToggle();
    });
  }

  // fancybox
  if ($('[data-fancybox="reviews"]').length > 0) {
    $('[data-fancybox="reviews"]').fancybox({
      baseClass: "reviews-view",
      wheel: false,
      buttons: [
        "close"
      ],
      btnTpl: {
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '<div><img src="/img/fancybox-left.png" /></div>' +
          "</button>",
        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<div><img src="/img/fancybox-right.png" /></div>' +
          "</button>",
        }
    });
  }

  if ($('[data-fancybox="ajax-gallery"]').length > 0) {
    $('[data-fancybox="ajax-gallery"]').fancybox({
      baseClass: "ajax-view",
      wheel: false,
      buttons: [
        "close"
      ]
    });
  }

  // styling upload button
  if ($("input[type='file']").length > 0) {
    $("input[type='file']").on("change", function() {
      var file = $(this).val();
      file = file.replace(/\\/g, '/').split ('/').pop ();
      $(this).parents(".order-docs").append('<p>Имя файла: ' + file + '</p>');
    });
  }
});

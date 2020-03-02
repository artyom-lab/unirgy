$(document).ready(function () {

  $(".owl-1").owlCarousel({
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
    },
    nav: true,
    navText: ["", ""],
    dots: false,
    smartSpeed : 1000,
    margin: 15,
    loop: true,
  });
  $(".owl-3").owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
        margin: 22,
      },
    },
    nav: true,
    margin: 28,
    navText: ["", ""],
    dots: false,
    smartSpeed : 1000,
  });

  if($("nav").is(".navbar-2")) {
    var target = $('.navbar-2');
    var targetHeight = target.height();
    var scrollToElem = target.offset().top + targetHeight;
  }
  $(window).on("scroll", function() {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem)
      $('.navbar-2').addClass("fixed-top");
    else 
      $('.navbar-2').removeClass("fixed-top");
  });

  $('form.form').validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      name: {
        required: "You need to add your full name",
      },
      email: {
        required: "You need to add your email",
      },
    }
  });
  $('form.form-login').validate({
    rules: {
      email: {
        required: true,
        minlength: 6,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      email: {
        required: "You need to add your email",
      },
      password: {
        required: "You need to add your password",
      },
    }
  });

  $(".scroll-id").mPageScroll2id({
    offset: 70
  });
  $(".scroll-id").on("click", function () {
    $(this).closest(".navbar-nav").siblings(".close").trigger("click");
  });

  $(".product-content").on("click", ".more, .product-title > a", function(e) {
    e.preventDefault();
    var link = $(this).attr("href");
    $(this).closest(".product-content").find(".product-item-wrap").removeClass("active");
    $(this).closest(".product-content").find(".tab-pane").removeClass("active");
    $(this).closest(".product-item-wrap").addClass("active");
    $(link).addClass("active");
  });
  $(".product-content .tab-pane").on("click", ".close", function() {
    $(this).closest(".product-content").find(".product-item-wrap").removeClass("active");
    $(this).closest(".product-content").find(".tab-pane").removeClass("active");
  });
  var disabled = $(".product-content .tab-pane");
  disabled.first().find(".owl-prev").addClass("disabled");
  disabled.last().find(".owl-next").addClass("disabled");
  $(".product-content .tab-pane").on("click", ".owl-prev:not(.disabled)", function() {
    $(".product-content").find(".product-item-wrap.active").prevAll(".product-item-wrap").first().find(".more").trigger("click");
  });
  $(".product-content .tab-pane").on("click", ".owl-next:not(.disabled)", function() {
    $(".product-content").find(".product-item-wrap.active").nextAll(".product-item-wrap").first().find(".more").trigger("click");
  });

});
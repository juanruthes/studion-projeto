$(document).ready(function () {
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next">Next</button>',
  };
  $(".slider").slick(slickOptions);
});

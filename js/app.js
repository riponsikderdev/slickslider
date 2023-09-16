$(function () {
  // * SLICK SLIDER STARTS HERE
  $('.slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    prevArrow: '.leftArrow',
    nextArrow: '.rightArrow',
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    dots: true,
    dotsClass: 'sliderDots',
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})
// * SLICK SLIDER ENDS HERE
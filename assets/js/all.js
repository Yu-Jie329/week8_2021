"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$(function () {
  $("#my-date").datepicker();
});
var swiper = new Swiper(".mySwiper-pagination-dynamic", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    dynamicBullets: true
  }
});
var swiper = new Swiper(".mySwiper-freemode", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpointsInverse: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    //當寬度大於等於640
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map

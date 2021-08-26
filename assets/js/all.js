"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$(function () {
  $("#my-date").datepicker();
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiper = new Swiper(".mySwiper-freemode", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map

"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var _Swiper;

  $('.js-burger').on('click', function (e) {
    console.log("yes");
    e.preventDefault();
    $('.js-menu-mobile').toggleClass('hidden');
  });
  var swiper = new Swiper(".mySwiper", (_Swiper = {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".el01"
    },
    navigation: {
      nextEl: ".nextEl01",
      prevEl: ".prevEl01"
    }
  }, _defineProperty(_Swiper, "pagination", false), _defineProperty(_Swiper, "navigation", false), _defineProperty(_Swiper, "autoplay", {
    delay: 3000
  }), _Swiper));
  var swiper01 = new Swiper(".shareSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".el02"
    },
    navigation: {
      nextEl: ".nextEl02",
      prevEl: ".prevEl02"
    },
    loop: true,
    autoplay: {
      delay: 3000
    }
  });
});
//# sourceMappingURL=all.js.map

$(function () {

  $('.js-burger').on('click', function (e) {
    console.log(`yes`);
    e.preventDefault();
    $('.js-menu-mobile').toggleClass('hidden')
  })

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".el01",
    },
    navigation: {
      nextEl: ".nextEl01",
      prevEl: ".prevEl01",
    },
    pagination: false,
    navigation: false,
    autoplay: {
      delay: 3000,
    },
  });

  var swiper01 = new Swiper(".shareSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".el02",
    },
    navigation: {
      nextEl: ".nextEl02",
      prevEl: ".prevEl02",
    },
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

});
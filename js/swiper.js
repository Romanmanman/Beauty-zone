const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
  },

  navigation: {
    nextEl: '.procedures-section__scroll-button.next',
    prevEl: '.procedures-section__scroll-button.prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

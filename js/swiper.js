const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
  },

  navigation: {
    nextEl: '.procedures-section__scroll-button.next',
    prevEl: '.procedures-section__scroll-button.prev',
  },
});

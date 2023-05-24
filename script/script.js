// var swiper = new Swiper(".swiper1", {
//   slidesPerView: 4.5,
//   spaceBetween: 12,
//   loop: true,
//   centeredSlides: true,
//   autoHeight : true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4.5,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    center: true,
  });

  $('.owl-carousel').trigger('play.owl.autoplay',[2000]);

  function setSpeed(){
      $('.owl-carousel').trigger('play.owl.autoplay',[6000]);
  }

  setTimeout(setSpeed, 1000);
});
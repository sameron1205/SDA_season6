// 슬라이드 1
const sw1 = new Swiper(".sw1", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 4.8,
      speed: 6000,
      autoplay: { delay: 0 },
    },
    1024: {
      slidesPerView: 4.8,
      spaceBetween: 20,
      speed: 6000,
      autoplay: { delay: 0 },
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
});

// 슬라이드 2
const sw2 = new Swiper(".sw2", {
	effect : 'fade',
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
  pagination : {
		el : '.sw2-pagination',
		clickable : true,
	},
});

// 슬라이드 3
const sw3 = new Swiper(".sw3", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  speed: 750,
  breakpoints: {
    768: {
      // loopFillGroupWithBlank : true,
      slidesPerGroup : 4,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 3000,
      autoplay: { delay: 6000 },
    },
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination : {
		el : '.sw3-pagination',
		clickable : true,
	},
});
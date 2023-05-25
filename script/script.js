const sw1 = new Swiper(".sw1", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
});

const sw2 = new Swiper( '.sw2', {
	effect : 'fade',
	loop : true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
	navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
});

const sw3 = new Swiper(".sw3", {
  slidesPerGroup : 4,
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  // loopFillGroupWithBlank : true,
  speed: 3000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination : {
		el : '.sw3-pagination',
		clickable : true,
	},
});

var cal = new FullCalendar.Calendar($('#cal')[0], {
  initialView: 'dayGridMonth',
  height: '550px',
  headerToolbar: {
    left: 'title prev,next',
    center: '',
    right: ''
    },
  });
cal.render();
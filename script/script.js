// 슬라이드 1
const sw1 = new Swiper(".sw1", {
  slidesPerView: 4.5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
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
});

// 슬라이드 3
const sw3 = new Swiper(".sw3", {
  slidesPerGroup : 4,
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  // loopFillGroupWithBlank : true,
  speed: 3000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination : {
		el : '.sw3-pagination',
		clickable : true,
	},
});

// 스케줄러
const textColor = '#212121';
const color = {
  apply: '#D4F0CB',
  interview: '#B2EAFF',
  pass: '#F2DCF7',
  orientation: '#FFE0DF',
  lecture: '#FAE7A5',
  completion: '#C9F2D3'
};

const calendar = new FullCalendar.Calendar($('#calendar')[0], {
  initialView: 'dayGridMonth',
  locale: 'ko',
  height: '550px',

  headerToolbar: {
    left: 'title prev,next',
    center: '',
    right: ''
  },

  eventDidMount: function(info) {
    tippy(info.el, {
        content: info.event.extendedProps.description,
    });
  },

  events: [
    {
      title: "SDA 5기 지원접수",
      description: 'SDA 5기 지원접수',
      start: "2022-12-26",
      end: "2023-01-10",
      color: color.apply,
      textColor: textColor
    },
    {
      title: "SDA 5기 인터뷰 전형",
      description: 'SDA 인터뷰 전형',
      start: "2023-01-12",
      end: "2023-01-21",
      color: color.interview,
      textColor: textColor
    },
    {
      title: "SDA 5기 합격자 발표",
      description: 'SDA 5기 합격자 발표',
      start: "2023-01-30",
      end: "2023-01-31",
      color: color.pass,
      textColor: textColor
    },
    {
      title: "SDA 5기 오리엔테이션",
      description: 'SDA 5기 오리엔테이션',
      start: "2023-02-03",
      end: "2023-02-04",
      color: color.orientation,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 1주차",
      description: 'SDA 5기 강의 1주차',
      start: "2023-02-06",
      end: "2023-02-11",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 2주차",
      description: 'SDA 5기 강의 2주차',
      start: "2023-02-13",
      end: "2023-02-18",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 3주차",
      description: 'SDA 5기 강의 3주차',
      start: "2023-02-20",
      end: "2023-02-25",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 4주차",
      description: 'SDA 5기 강의 4주차',
      start: "2023-02-27",
      end: "2023-03-04",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 5주차",
      description: 'SDA 5기 강의 5주차',
      start: "2023-03-06",
      end: "2023-03-11",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 6주차",
      description: 'SDA 5기 강의 6주차',
      start: "2023-03-13",
      end: "2023-03-18",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 7주차",
      description: 'SDA 5기 강의 7주차',
      start: "2023-03-20",
      end: "2023-03-25",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 8주차",
      description: 'SDA 5기 강의 8주차',
      start: "2023-03-27",
      end: "2023-04-01",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 9주차",
      description: 'SDA 5기 강의 9주차',
      start: "2023-04-03",
      end: "2023-04-08",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 10주차",
      description: 'SDA 5기 강의 10주차',
      start: "2023-04-10",
      end: "2023-04-15",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 11주차",
      description: 'SDA 5기 강의 11주차',
      start: "2023-04-17",
      end: "2023-04-22",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 5기 강의 12주차",
      description: 'SDA 5기 강의 12주차',
      start: "2023-04-24",
      end: "2023-04-29",
      color: color.lecture,
      textColor: textColor
    },
    {
        title: "SDA 5기 수료식",
        description: 'SDA 5기 수료식',
        start: "2023-05-02",
        end: "2023-05-03",
        color: color.completion,
        textColor: textColor
    },
    {
      title: "SDA 6기 지원접수",
      description: 'SDA 6기 지원접수',
      start: "2023-05-15",
      end: "2023-05-30",
      color: color.apply,
      textColor: textColor
    },
    {
      title: "SDA 6기 인터뷰 전형",
      description: 'SDA 6기 인터뷰 전형',
      start: "2023-06-07",
      end: "2023-06-10",
      color: color.interview,
      textColor: textColor
    },
    {
      title: "SDA 6기 합격자 발표",
      description: 'SDA 6기 합격자 발표',
      start: "2023-06-12",
      end: "2023-06-13",
      color: color.pass,
      textColor: textColor
    },
    {
      title: "SDA 6기 오리엔테이션",
      description: 'SDA 6기 오리엔테이션',
      start: "2023-06-16",
      end: "2023-06-17",
      color: color.orientation,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 1주차",
      description: 'SDA 6기 강의 1주차',
      start: "2023-06-19",
      end: "2023-06-24",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 2주차",
      description: 'SDA 6기 강의 2주차',
      start: "2023-06-26",
      end: "2023-07-01",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 3주차",
      description: 'SDA 6기 강의 3주차',
      start: "2023-07-03",
      end: "2023-07-08",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 4주차",
      description: 'SDA 6기 강의 4주차',
      start: "2023-07-10",
      end: "2023-07-15",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 5주차",
      description: 'SDA 6기 강의 5주차',
      start: "2023-07-17",
      end: "2023-07-22",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 6주차",
      description: 'SDA 6기 강의 6주차',
      start: "2023-07-24",
      end: "2023-07-29",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 7주차",
      description: 'SDA 6기 강의 7주차',
      start: "2023-07-31",
      end: "2023-08-05",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 8주차",
      description: 'SDA 6기 강의 8주차',
      start: "2023-08-07",
      end: "2023-08-12",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 9주차",
      description: 'SDA 6기 강의 9주차',
      start: "2023-08-14",
      end: "2023-08-19",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 10주차",
      description: 'SDA 6기 강의 10주차',
      start: "2023-08-21",
      end: "2023-08-26",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 11주차",
      description: 'SDA 6기 강의 11주차',
      start: "2023-08-28",
      end: "2023-09-02",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 강의 12주차",
      description: 'SDA 6기 강의 12주차',
      start: "2023-09-04",
      end: "2023-09-09",
      color: color.lecture,
      textColor: textColor
    },
    {
      title: "SDA 6기 수료식",
      description: 'SDA 6기 수료식',
      start: "2023-09-11",
      end: "2023-09-12",
      color: color.completion,
      textColor: textColor
    },
  ],
});
calendar.render();

// 팝업
const bt = $('#popup-bt')[0];
const exit = () => {
  const popup = $('#popup')[0];

  popup.style.display = 'none';
};

bt.onmouseout = function() { this.src = 'css/image/popup_bt1.png'; };
bt.onmouseover = function() { this.src = 'css/image/popup_bt2.png'; };
// 슬라이드 1
const sw1 = new Swiper(".sw1", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 4.5,
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
      spaceBetween: 20,
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
  height: '450px',

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

// 섹션 1
function changeSec1() {
  const sec1 = [$('#sec1-head'), $('#sec1-text'), $('#sec1-tail')];
  const sec3 = [$('#sec3-head'), $('#sec3-text')];
  const title = [$('.t1'), $('.t2')];
  const footer = $('#footer-inner');

  if(window.innerWidth > 768) {
    sec1[0].html("미래의 도트 아티스트 여러분 환영해요!");
    sec1[1].html(`슈퍼캣 도트 아카데미는 도트 기초 이론부터 실무형 과제에 이르기까지,<br>
      도트 아티스트로서의 역량을 키워나가는 교육 프로그램입니다.<br>
      <br>
      현업에 종사하는 강사진의 수업을 통해,<br>
      12주 동안 도트 아티스트로의 경험치를 쌓아갑니다.`);
    sec1[2].html("지금, 슈퍼캣 도트 아카데미의 문을 열어주세요.");

    sec3[0].html("채용연계 프로그램으로 <span style='color: black;'>슈퍼피플</span>이 되어보세요");
    sec3[1].html(`우수한 성적으로 도트 아카데미를 수료한 수강생에게는<br>
      슈퍼캣 도트 아티스트 정규 채용 기회가 제공됩니다.`);

    title[0].html("SDA<br>다양한 혜택이 준비되어 있어요");
    title[1].html("SDA<br>수강생 작품을 만나보세요");

    footer.html(`<div id="info">
        <div id="copyright">©SUPERCAT Inc. All Rights Reserved.</div>
        <ul id="policy">
          <li><a href="#">이용약관</a></li>
          <li><a href="#" style="font-weight: bold;">개인정보처리방침</a></li>
          <li><a href="#">슈퍼캣 채용</a></li>
        </ul>
      </div>
      <a href="#">슈퍼캣 홈페이지</a>`);
  }
  else {
    sec1[0].html("미래의 도트 아티스트<br>여러분 환영해요!");
    sec1[1].html(`슈퍼캣 도트 아카데미는 도트 기초 이론부터<br>
      실무형 과제에 이르기까지, 도트 아티스트로서의<br>
      역량을 키워나가는 교육 프로그램입니다.<br>
      <br>
      현업에 종사하는 강사진의 수업을 통해,<br>
      12주 동안 도트 아티스트로의<br>
      경험치를 쌓아갑니다.`);
    sec1[2].html("지금, 슈퍼캣 도트 아카데미의<br>문을 열어주세요.");

    sec3[0].html("채용연계 프로그램으로<br><span style='color: black;'>슈퍼피플</span>이 되어보세요");
    sec3[1].html(`우수한 성적으로 도트 아카데미를<br>
      수료한 수강생에게는 슈퍼캣 도트 아티스트<br>
      정규 채용 기회가 제공됩니다.`);

    title[0].html("SDA<br>다양한 혜택이<br>준비되어 있어요");
    title[1].html("SDA<br>수강생 작품을<br>만나보세요");

    footer.html(`<ul id="policy">
          <li><a href="#">이용약관</a></li>
          <li><a href="#" style="font-weight: bold;">개인정보처리방침</a></li>
          <li><a href="#">슈퍼캣 채용</a></li>
        </ul>
      <a href="#">슈퍼캣 홈페이지</a>
      <div id="copyright">©SUPERCAT Inc. All Rights Reserved.</div>`);
  }

  // $('html').css('font-size', `${window.innerWidth / 24}px`)
}

window.onload = function() { changeSec1(); }
window.onresize = function() { changeSec1(); }
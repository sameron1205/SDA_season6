# SDA_season6

[![Static Badge](https://img.shields.io/badge/npm-9.6.5-orange?style=flat-square)](https://www.npmjs.com/package/npm/v/9.6.5)
[![Static Badge](https://img.shields.io/badge/state-running-green?style=flat-square)](https://sameron1205.github.io/SDA_season6/)

```
https://sameron1205.github.io/SDA_season6/
```

## 1. 개요
`SDA_season6`는 [슈퍼캣 도트 아카데미](https://sda.supercat.co.kr/) 6기 수강생 모집 페이지와 유사하게 제작한 포트폴리오용 페이지입니다. 또한 반응형 페이지로서 `스마트폰`, `태블릿`, `데스크탑` 해상도를 지원합니다.



## 2. 시작 가이드
`SDA_season6`에 사용된 라이브러리 및 `clone` 절차는 다음과 같습니다:

### 2.1. 라이브러리
- [Swiper 8.4.7](https://v8.swiperjs.com/)
- [FullCalendar 5.8.0](https://fullcalendar.io/)
- [Popper.js 2.11.8](https://popper.js.org/)
- [Tippy.js 6.3.7](https://atomiks.github.io/tippyjs/)

### 2.2. clone 절차
#### Installation
```
$ git clone https://github.com/sameron1205/SDA_season6.git
$ cd SDA_season6
```
#### Run
```
press alt+shift+b
```


## 3. 주요 기능
### 3.1. 이미지 슬라이드
`Swiper` 라이브러리를 이용하여 3가지 스타일의 이미지 슬라이드를 작성하였습니다.

```
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
```
```
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
```
```
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
```

### 3.2. 일정 캘린더
`FullCalendar` 및 `Popper.js`, `Tippy.js` 라이브러리를 통해 일정 안내에 필요한 캘린더를 작성하였습니다.

```
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
    // 중략
  ],
});
calendar.render();
```

### 3.3. Modal UI
스마트폰 해상도에서 상단 내비게이션을 `Modal`을 이용한 사이드 내비게이션으로 구성하였습니다.

#### HTML
```
<div id="header-bg">
  <div id="header">
    <div id="logo-wrap">
      <div id="logo"></div>
    </div>
    <div id="icon-wrap"><div id="side-icon" onclick="sideOpen()">☰</div></div>
    <ul id="nav">
      <a href="#"><li>SDA</li></a>
      <a href="#"><li>모집안내</li></a>
      <a href="#"><li>지원하기</li></a>
    </ul>
  </div>
</div>
```

#### CSS
```
#header-bg {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 999;
}
#header {
  width: 100%; height: 45px;
  padding: 5px 26px;
  display: flex;
  justify-content: space-between;
}
#logo-wrap {
  width: 150px;
  display: flex;
  align-items: center;
}
#logo {
  width: 100%; height: 100%;
  background-image: url('image/logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
#nav {
  display: none;
}
#icon-wrap {
  display: flex;
  align-items: center;
}
#side-icon {
  font-size: 22px;
  cursor: pointer;
}
#side-bg {
  position: fixed;
  width: 100%; height: 100%;
  top: 0; right: 0;
  background-color: rgba(0,0,0,.6);
  z-index: 999;
  display: none;
}
#side-inner {
  position: fixed;
  z-index: 999;
}
#side-x {
  position: fixed;
  top: 13px; right: 270px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  display: none;
}
#side-nav {
  position: fixed;
  width: 255px; height: 100%;
  top: 0; right: -255px;
  font-size: 14.2px;
  background-color: white;
}
.side-el {
  width: 100%;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(60,60,60,.1);
  cursor: pointer;
}
.slide-in { animation: slide-in .5s forwards; }
@keyframes slide-in {
  0% {
    right: -255px;
  }
  100% {
    right: 0;
  }
}
.slide-out { animation: slide-out .5s forwards; }
@keyframes slide-out {
  0% {
    right: 0px;
  }
  100% {
    right: -255px;
  }
}
```

const sec1 = ["미래의 도트 아티스트 여러분 환영해요!", 
              `슈퍼캣 도트 아카데미는 도트 기초 이론부터 실무형 과제에 이르기까지,<br>
              도트 아티스트로서의 역량을 키워나가는 교육 프로그램입니다.<br>
              <br>
              현업에 종사하는 강사진의 수업을 통해,<br>
              12주 동안 도트 아티스트로의 경험치를 쌓아갑니다.`, 
              "지금, 슈퍼캣 도트 아카데미의 문을 열어주세요."];
const sec1_m = ["미래의 도트 아티스트<br>여러분 환영해요!", 
                `슈퍼캣 도트 아카데미는 도트 기초 이론부터<br>
                실무형 과제에 이르기까지, 도트 아티스트로서의<br>
                역량을 키워나가는 교육 프로그램입니다.<br>
                <br>
                현업에 종사하는 강사진의 수업을 통해,<br>
                12주 동안 도트 아티스트로의<br>
                경험치를 쌓아갑니다.`, 
                "지금, 슈퍼캣 도트 아카데미의<br>문을 열어주세요."];

const sec3 = ["채용연계 프로그램으로 <span style='color: black;'>슈퍼피플</span>이 되어보세요", 
              `우수한 성적으로 도트 아카데미를 수료한 수강생에게는<br>
              슈퍼캣 도트 아티스트 정규 채용 기회가 제공됩니다.`];
const sec3_m = ["채용연계 프로그램으로<br><span style='color: black;'>슈퍼피플</span>이 되어보세요", 
                `우수한 성적으로 도트 아카데미를<br>
                수료한 수강생에게는 슈퍼캣 도트 아티스트<br>
                정규 채용 기회가 제공됩니다.`];

const t = ["SDA<br>다양한 혜택이 준비되어 있어요", "SDA<br>수강생 작품을 만나보세요"];
const t_m = ["SDA<br>다양한 혜택이<br>준비되어 있어요", "SDA<br>수강생 작품을<br>만나보세요"];

const footer = `<div id="info">
  <div id="copyright">©SUPERCAT Inc. All Rights Reserved.</div>
  <ul id="policy">
    <li><a href="#">이용약관</a></li>
    <li><a href="#" style="font-weight: bold;">개인정보처리방침</a></li>
    <li><a href="#">슈퍼캣 채용</a></li>
  </ul>
  </div>
  <a href="#">슈퍼캣 홈페이지</a>`;
const footer_m = `<ul id="policy">
  <li><a href="#">이용약관</a></li>
  <li><a href="#" style="font-weight: bold;">개인정보처리방침</a></li>
  <li><a href="#">슈퍼캣 채용</a></li>
  </ul>
  <a href="#">슈퍼캣 홈페이지</a>
  <div id="copyright">©SUPERCAT Inc. All Rights Reserved.</div>`;

let isMobile = window.innerWidth < 768 ? false : true;

function changeEl() {
  if(isMobile && window.innerWidth >= 768) {
    isMobile = false;

    $('#sec1-head').html(sec1[0]);
    $('#sec1-text').html(sec1[1]);
    $('#sec1-tail').html(sec1[2]);

    $('#sec3-head').html(sec3[0]);
    $('#sec3-text').html(sec3[1]);

    $('.t1').html(t[0]);
    $('.t2').html(t[1]);

    $('#footer-inner').html(footer);
    
    $('#side-bg').css('display', 'none');
    $('#side-x').css('display', 'none');
    $('#side-nav').attr('class', '');

    // console.log('not mobile');
  }
  if(!isMobile && window.innerWidth < 768) {
    isMobile = true;

    $('#sec1-head').html(sec1_m[0]);
    $('#sec1-text').html(sec1_m[1]);
    $('#sec1-tail').html(sec1_m[2]);

    $('#sec3-head').html(sec3_m[0]);
    $('#sec3-text').html(sec3_m[1]);

    $('.t1').html(t_m[0]);
    $('.t2').html(t_m[1]);

    $('#footer-inner').html(footer_m);

    // console.log('mobile');
  }
}

window.onload = () => changeEl();
window.onresize = () => changeEl();
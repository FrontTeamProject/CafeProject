import header from './header_color.js';
import mainHome from './mainHome_color.js';
import body from './body_color.js';

/* 버튼 이벤트*/
darkModeBtn.addEventListener('click', nightDayHandler);

darkModeBtn.addEventListener('mouseover', function(){
  let btnIcon = document.querySelector(".header .fa-moon");
  if (darkModeBtn.value === 'night'){
    darkModeBtn.style.background = "#333";
    btnIcon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4"
  }else{
    darkModeBtn.style.background = "#f4f4f4";
    btnIcon.style.color = "black";
    darkModeBtn.style.color = "#333"
  }
});

darkModeBtn.addEventListener('mouseout', function(){
  let btnIcon = document.querySelector(".header .fa-moon");
  if (darkModeBtn.value === 'night'){
    darkModeBtn.style.background = "#f4f4f4";
    btnIcon.style.color = "black";
    darkModeBtn.style.color = "#333"
  }else{
    darkModeBtn.style.background = "#333";
    btnIcon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4"
  }
});


function nightDayHandler(){
  if(darkModeBtn.value === 'night'){
    /* 헤더 */
    header.setFontColor('powderblue');
    header.setBgColor('black');
    header.setBtnBgColor('#333');
    header.setBtnFontColor('#f4f4f4');
    header.setBtnIcon('yellow');

    /* 메인 홈 */
    mainHome.setMainBgColor('black');
    mainHome.setMainFontColor('powderblue');

    /* 전체 바디 */
    body.setBgColor('black');
    body.setFontColor('powderblue');

    darkModeBtn.value = 'day';
    
  }else{
    /* 헤더 */
    header.setFontColor('#333');
    header.setBgColor('#eedeff')
    header.setBtnBgColor('#f4f4f4');
    header.setBtnFontColor('#333');
    header.setBtnIcon('black');

    /* 메인 홈 */
    mainHome.setMainBgColor('#eedeff');
    mainHome.setMainFontColor('#333');

    /* 전체 바디 */
    body.setBgColor('none');
    body.setFontColor('#333');
    
    darkModeBtn.value = 'night';
  }
}
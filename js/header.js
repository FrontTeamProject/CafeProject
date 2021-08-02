let header__bg = document.querySelector(".header");
let darkModeBtn = document.querySelector(".header .header__btn");
let TopNum_header = 600;
let direction_header = '';
document.addEventListener('scroll',function(){
  let currentPos = document.documentElement.scrollTop;
  if(currentPos > TopNum_header){
    if(direction_header != 'down'){
      direction_header = 'down';
      if(darkModeBtn.value==='night'){
        header__bg.style.background = '#EEDEFF';
      }else{
        header__bg.style.background = 'black';
      }
      
    }
  }else{
    if(direction_header != 'up'){
      direction_header = 'up';
      header__bg.style.background = 'none';
    }
  }
});


darkModeBtn.addEventListener('click', function(){
  let currentPos = document.documentElement.scrollTop;
  if(currentPos > TopNum_header){
    if(darkModeBtn.value==='night'){
      header__bg.style.background = '#EEDEFF';
    }else{
      header__bg.style.background = 'black';
    }
  }
});

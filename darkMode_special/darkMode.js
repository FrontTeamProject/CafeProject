import header from "../darkMode_main/object/header_color.js";
import body from "../darkMode_main/object/body_color.js";
import mainHome from "../darkMode_main/object/mainHome_color.js";
import mainHome_detail from "../darkMode_special/object/detailInfo.js";
import category from "../darkMode_special/object/categoryColor.js";
import content from "../darkMode_special/object/content_color.js";
import footer from "../darkMode_main/object/footer_color.js";

/* 버튼 아이콘 */
let moon = document.querySelector(".header .fa-moon");
let sun = document.querySelector(".header .fa-sun");

/* 버튼 이벤트*/
let darkModeBtn = document.querySelector(".header .header__btn");
darkModeBtn.addEventListener("click", nightDayHandler);

darkModeBtn.addEventListener("mouseover", function () {
  if (darkModeBtn.value === "night") {
    darkModeBtn.style.background = "#3D4044";
    moon.style.color = "yellow";
    darkModeBtn.style.color = "#f4f4f4";
  } else {
    darkModeBtn.style.background = "#f4f4f4";
    sun.style.color = "green";
    darkModeBtn.style.color = "#333";
  }
});

darkModeBtn.addEventListener("mouseout", function () {
  if (darkModeBtn.value === "night") {
    darkModeBtn.style.background = "#f4f4f4";
    moon.style.color = "black";
    darkModeBtn.style.color = "#333";
  } else {
    darkModeBtn.style.background = "#3D4044";
    sun.style.color = "black";
    darkModeBtn.style.color = "#f4f4f4";
  }
});

function nightDayHandler() {
  let currentPos = document.documentElement.scrollTop;
  let mainHomeHeight = document.querySelector(".main__home").clientHeight;
  let button_value = document.querySelector(".header__btn .header__btn--right");

  if (darkModeBtn.value === "night") {
    button_value.innerHTML = "라이트모드";
    moon.style.display = "none";
    sun.style.display = "block";
    /* 헤더 */
    if (currentPos > mainHomeHeight) {
      header.setBgColor("#292a2d");
    }
    if (matchMedia("screen and (max-width: 1024px)").matches) {
      header.setMenuBg("#46405860"); //헤더 mobile, tablet 메뉴
    }

    header.setFontColor("#F1F1F1");
    header.setBtnBgColor("#3D4044");
    header.setBtnFontColor("#f4f4f4");
    header.setBtnIcon("yellow");

    /* 메인 홈 */
    mainHome.setMainBgColor("#464058");
    mainHome.setMainFontColor("#F1F1F1");

    /* 디테일 메인홈 */
    mainHome_detail.setBgColor("#464058");
    mainHome_detail.setFontColor("#F1F1F1");

    /* 디테일 컨테이너 */
    mainHome_detail.setContainerColor("#3D4044");
    mainHome_detail.setCenterBgColor("#464058");
    mainHome_detail.setFontColor("#F1F1F1");

    /* 디테일 아래 정보 박스 */
    mainHome_detail.setDetailInfoBgColor("#464058");
    mainHome_detail.setDetailInfoFontColor("#F1F1F1");
    mainHome_detail.setDetailInfoLinkColor("#F1F1F1");

    /*  버튼 */
    mainHome_detail.setBtnBgColot("#464058");
    mainHome_detail.setBtnFontColot("white");

    /* 전체 바디 */
    body.setBgColor("#292a2d");
    body.setFontColor("#F1F1F1");
    body.setHighLightColor("white");

    /* 카테고리 */
    category.setMainCategory("white");

    /* content */
    content.setBgColor("#464058");
    content.setFontColor("#F1F1F1");
    content.setImgTextBox("#292a2d");

    /* footer */
    footer.setAtagColor("#F1F1F1");

    darkModeBtn.value = "day";
  } else {
    sun.style.display = "none";
    moon.style.display = "block";
    button_value.innerHTML = "다크모드";
    /* 헤더 */
    if (currentPos > mainHomeHeight) {
      header.setBgColor("white");
    }
    if (matchMedia("screen and (max-width: 1024px)").matches) {
      header.setMenuBg("#ffffffcc"); //헤더 mobile, tablet 메뉴
    }

    header.setFontColor("#333");
    header.setBtnBgColor("#f4f4f4");
    header.setBtnFontColor("#333");
    header.setBtnIcon("black");

    /* 메인 홈 */
    mainHome.setMainBgColor("#eedeff");
    mainHome.setMainFontColor("#333");

    /* 디테일 메인홈 */
    mainHome_detail.setBgColor("#eedeff");
    mainHome_detail.setFontColor("#333");

    /* 디테일 컨테이너 */
    mainHome_detail.setContainerColor("#f4f4f4");
    mainHome_detail.setCenterBgColor("white");
    mainHome_detail.setFontColor("#333");

    /* 디테일 아래 정보 박스 */
    mainHome_detail.setDetailInfoBgColor("white");
    mainHome_detail.setDetailInfoFontColor("#333");
    mainHome_detail.setDetailInfoLinkColor("#333");

    /*  버튼 */
    mainHome_detail.setBtnBgColot("#eedeff");
    mainHome_detail.setBtnFontColot("black");

    /* 전체 바디 */
    body.setBgColor("none");
    body.setFontColor("#333");
    body.setHighLightColor("#8d91eb");

    /* 카테고리 */
    category.setMainCategory("#333");

    /* content */
    content.setBgColor("#f4f4f4");
    content.setFontColor("#333");
    content.setImgTextBox("#47405a");

    /* footer */
    footer.setAtagColor("#333");

    darkModeBtn.value = "night";
  }
}

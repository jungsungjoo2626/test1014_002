$(document).ready(function(){ // 실행틀 시작

  // gnb
  $(".depth2, .depth2-bg").hide();

  $(".gnb > li").mouseenter(function(){
    $(".depth2-bg").stop().fadeIn();
    $(this).children(".depth2").stop().fadeIn();
  });

  $(".gnb > li").mouseleave(function(){
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });
  // gnb 끝

   // 모바일 메뉴
  $(".dim").hide();

  $(".ham").click(function(){
    $(".mgnb-wrap").animate({right : "0"});
    $(".dim").fadeIn();
  });

  $(".mgnb-close").click(function(){
    $(".mgnb-wrap").animate({right : "-100%"});
    $(".dim").fadeOut();
  });

  $(".mdepth2").hide();
  // 모바일 메뉴 끝

  // 모바일 2차 메뉴
  $(".mgnb > li").click(function(){
    $(this).children(".mdepth2").slideToggle();
    $(this).siblings().children(".mdepth2").slideUp();
    $(this).siblings().children(".arrow").removeClass("active");
  });


  // 메인 배너 슬라이드

  //메뉴바

  
  
});//실행틀 끝
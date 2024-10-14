$(document).ready(function(){  //실행틀 시작

  $(".past-box").hide();
  $(".tour-box").hide();

  $(".btn-now").click(function(){
    $(".now-box").fadeIn();
    $(".past-box").fadeOut();
    $(".tour-box").fadeOut();
  });

  $(".btn-past").click(function(){
    $(".past-box").fadeIn(),
    $(".now-box").fadeOut();
  });

  $(".btn-tour").click(function(){
    $(".tour-box").fadeIn(),
    $(".past-box").fadeOut();
  });



});  //실행틀 끝
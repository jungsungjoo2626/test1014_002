$(document).ready(function(){ // 실행틀 시작

  AOS.init();


  // 메인 배너 슬라이드
  var mb = new Swiper(".mb", {
    loop: true,  //반복
    effect: "fade",
    direction: "vertical",  //슬라이드방향
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },  //자동실행

  });



  //섹션2 슬라이드
  var sc = new Swiper(".sc", {
    loop: true,  //반복
    autoplay: {
      delay: 0,
      stopOnLastSlide: false,      
      disableOnInteraction: true,
    },  //자동실행
    speed:5000,
    slidesPerView: "6",  
  });

  //모바일섹션2 슬라이드
  var msc = new Swiper(".msc", {
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    centeredSlides: false,
    loop: true,  //반복
    slidesPerView: "1",  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });

      //섹션3 슬라이드
    var rec = new Swiper(".rec", {
      effect: "cube",
      grabCursor: true,
      loop: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

      //모바일섹션3 슬라이드
    var mrec = new Swiper(".mrec", {
      grabCursor: true,
      loop: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

  
});//실행틀 끝
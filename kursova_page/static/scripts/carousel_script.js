var winWidth = $(window).width();
function sidebarWidth(){
  if(winWidth > 1120){
    $('.swiper').removeClass('mySwiper-mob');
    $('.swiper').addClass('mySwiper');
  } else {
    $('.swiper').removeClass('mySwiper');
    $('.swiper').addClass('mySwiper-mob');
  };
};

sidebarWidth();

$(document).resize(function(){
  sidebarWidth();
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  grabCursor: true,
  navigation: {
    nextEl: ".destinations .arrow-right",
    prevEl: ".destinations .arrow-left",
  },

});

var swiperMob = new Swiper(".mySwiper-mob", {
  slidesPerView: 1,
  spaceBetween: 32,
  grabCursor: true,
  navigation: {
    nextEl: ".destinations .arrow-right",
    prevEl: ".destinations .arrow-left",
  },

});



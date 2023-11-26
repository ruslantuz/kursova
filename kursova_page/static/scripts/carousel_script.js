

function sidebarWidth(){
  var winWidth = $(window).width();
  if(winWidth > 1120){
    $('.destinations .swiper').removeClass('mySwiper-mob').addClass('mySwiper');
    // $('.destinations .swiper').addClass('mySwiper');
    $('.special-offers .swiper').removeClass('offerSwiper-mob').addClass('offerSwiper');
    // $('.special-offers .swiper').addClass('offerSwiper');
  } else {
    $('.destinations .swiper').removeClass('mySwiper').addClass('mySwiper-mob');
    // $('.destinations .swiper').addClass('mySwiper-mob');
    $('.special-offers .swiper').removeClass('offerSwiper').addClass('offerSwiper-mob');
    // $('.special-offers .swiper').addClass('offerSwiper-mob');
  };
};

sidebarWidth();
window.onresize = sidebarWidth;
$(document).resize(function(){
  sidebarWidth();
});

// TEST DYNAMIC CHANGE:
// 
// function sidebarWidth(){
//   var winWidth = $(window).width();
//   if(winWidth > 1120){
//     console.log("more")
//     $('.destinations .swiper').removeClass('mySwiper-mob');
//     $('.destinations .swiper').addClass('mySwiper');
//     $('.special-offers .swiper').removeClass('offerSwiper-mob');
//     $('.special-offers .swiper').addClass('offerSwiper');
//   } else {
//     console.log("less")
//     $('.destinations .swiper').removeClass('mySwiper');
//     $('.destinations .swiper').addClass('mySwiper-mob');
//     $('.special-offers .swiper').removeClass('offerSwiper');
//     $('.special-offers .swiper').addClass('offerSwiper-mob');
//   };
// };


// Destinations:
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

// Offers:
var offerSwiper = new Swiper(".offerSwiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  grabCursor: false,
  navigation: {
    nextEl: ".special-offers .arrow-right",
    prevEl: ".special-offers .arrow-left",
  },
});
var offerSwiperMob = new Swiper(".offerSwiper-mob", {
  slidesPerView: 1,
  spaceBetween: 32,
  grabCursor: false,
  navigation: {
    nextEl: ".special-offers .arrow-right",
    prevEl: ".special-offers .arrow-left",
  },
});

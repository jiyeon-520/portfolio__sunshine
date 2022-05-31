$('body').imagesLoaded(function() {
  $('.loading').remove();
  new AOS.init();
  new WOW().init();
  const $cursor = $('.cursor');

$(window).mousemove(function(e) {
  $cursor.css({
    top:e.clientY,
    left:e.clientX
  });
});
$('.cursor-big').mouseenter(function(){
  $('html').addClass('need-to-cursor-big');
});
$('.cursor-big').mouseleave(function() {
  $('html').removeClass('need-to-cursor-big');
});

var swiper = new Swiper('.swiper-container', {
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev"
   },
  loop:"auto",
   speed: 1000,
});

var swiper2 = new Swiper(".swiper-box-1 .swiper", {
  pagination: {
    el: ".swiper-box-1  .swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-box-1  .swiper-button-next",
    prevEl: ".swiper-box-1  .swiper-button-prev"
  },
  loop:"auto",
   speed: 1000,
});
});



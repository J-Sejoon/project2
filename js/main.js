//Main banner
const swiper = new Swiper('.swiper', {
  autoplay: {
    disableOnInteraction:false,
  },
  loopAdditionalSlides: 1,

pagination: {
  el:'.swiper-pagination',
  type: 'bullets',
  clickable: true,
},
});

//resize
$(window).resize(function(){
  const winWidth = $(window).width();
  const boxWidth = $('.banner_container').width();
  if(winWidth <= 768){
    $('.banner_container').height(boxWidth*0.75);
  }
});

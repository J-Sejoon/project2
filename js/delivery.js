//Delivery
const $btn = $('.nav li a');

$btn.click(function(){
  $btn.removeClass('active');
  $(this).addClass('active');
})

$('.btn_menu').click(function(){
  $('.all').hide();
  $('.menu').fadeIn(500);
})

$('.btn_chicken').click(function(){
  $('.all').hide();
  $('.chicken').fadeIn(500);
})

$('.btn_burger').click(function(){
  $('.all').hide();
  $('.burger').fadeIn(500);
})

$('.btn_drink').click(function(){
  $('.all').hide();
  $('.drink').fadeIn(500);
})

$('.btn_snack').click(function(){
  $('.all').hide();
  $('.snack').fadeIn(500);
});
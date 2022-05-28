// HEADER
$(document).ready(function() {
  $('.menu__icon').click(function(event) {
    $('.menu__icon,.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
  })
});
// HEADER

// ibg 
// function ibg(){

//   $.each($('.ibg'), function(index, val) {
//   if($(this).find('img').length>0){
//   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
//   }
//   });
//   }
  
//   ibg();
// ibg 
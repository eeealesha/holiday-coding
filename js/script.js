$(document).on('click', '.toggle-menu__link', function(){
  $(this).toggleClass('on');
  $('.hidden-menu').slideToggle();
  return false; 
});
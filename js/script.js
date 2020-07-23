$(document).on('click', '.toggle-menu__link', function(){
  $(this).toggleClass('on');
  $('.hidden-menu').slideToggle();
  return false; 
});

$("a").click(function(){
    
    $("a.menu__link_active").removeClass("menu__link_active");
     $(this).addClass('menu__link_active');

 });
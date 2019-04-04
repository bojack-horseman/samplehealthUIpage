$(document).ready(function(){

  $('.section-category').click(function(){
    $('.section-category').removeClass('active');
    $(this).addClass('active');
  });
  $('.navbar-title').click(function(){
    $('.navbar-title').removeClass('active');
    $(this).addClass('active');
  });

});

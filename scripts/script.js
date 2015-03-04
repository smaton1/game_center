$(function(){
  $('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
  });
  $(window).load(function(){
  $('.blueberry').blueberry();
});
})


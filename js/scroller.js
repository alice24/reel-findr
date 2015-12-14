$('.scroll.left').mouseenter(function() {
  $('.items').animate({
    left: '100%'
  },3000);
});

$('.scroll.right').mouseenter(function() {
  $('.items').animate({
    left: '-100%'
  },3000);
});

$('.scroll').mouseleave(function() {
  $('.items').stop();
});

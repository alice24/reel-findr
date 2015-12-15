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

window.onload = function() {
      document.querySelector('item').onclick = function(ev) {
      console.log("clicking");
      var display = document.createElement('div');
      display.setAttribute('class', 'dialog');
      item.appendChild(display);
      }
}

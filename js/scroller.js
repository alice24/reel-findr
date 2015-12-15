var minWidth;
var maxWidth;

window.addEventListener('load',function(){
  console.log("loaded");
  //var test = document.getElementsByClassName("items");
  var cols= document.querySelectorAll('.item');

  fixWindow();

  for ( var i = 0; i< cols.length; i++){
    console.log(cols[i]);
    cols[i].addEventListener('click',showInfo);
  }
});

$(window).resize(function() {
  fixWindow();
});

function fixWindow(){
  var windSize = $( window ).width() / 2;
  var indiItem = document.querySelectorAll('.item');
  var exSize = indiItem[0].clientWidth / 2;

  minWidth = windSize - exSize + "px";

  maxWidth = document.querySelector(".items").offsetWidth * -1
  maxWidth = maxWidth + windSize + exSize + "px"
}

function showInfo(ev){
  console.log("clicking");

	//get the current target
	var target = ev.currentTarget;

  console.log(target);

  var display = document.createElement('div');
  display.setAttribute('class', 'dialog');
  target.style.backgroundColor = "blue";
  target.appendChild(display);
}

$('.scroll.left').mouseenter(function() {
  $('.items').animate({
    left: minWidth
  },2000);
});

$('.scroll.right').mouseenter(function() {
  $('.items').animate({
    left: maxWidth
  },2000);
});

$('.scroll').mouseleave(function() {
  $('.items').stop();
});

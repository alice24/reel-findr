var minWidth;
var maxWidth;

window.addEventListener('load',function(){
  console.log("loaded");
  //var test = document.getElementsByClassName("items");

  fixWindow();

//  for ( var i = 0; i< cols.length; i++){
  //  console.log(cols[i]);
    //cols[i].addEventListener('click',showInfo);
  //}


  var body = document.querySelector( '.results' );

    var all=document.querySelectorAll('.item');

    for (i=0; i<all.length; i++){
      // console.log(all[i].dataset.title);
              all[i].onclick = function(ev) {
                // var x= all[i];
                // console.log(x.dataset.year;

                // delete existing dialog
                var dialog = document.querySelector('.dialog');
                if( dialog ) {
                  dialog.remove();
                }

                // var item=all[i];
                var target=ev.currentTarget;

                // var item=document.querySelector('.item');
                console.log(target.dataset.title);
                console.log(target.dataset.year);
                console.log(target.dataset.genre);


                var display = document.createElement('div');
                display.setAttribute('class', 'dialog');
                var node = document.createTextNode(target.dataset.title);  //add space
                var node1 = document.createTextNode(target.dataset.year);
                var node2 = document.createTextNode(target.dataset.genre);

                display.appendChild(node);
                display.appendChild(node1);
                display.appendChild(node2);

                body.appendChild(display);
                console.log(display);
                // console.log("clicking");
                  //delete previous child
                }
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

  console.log(maxWidth);
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

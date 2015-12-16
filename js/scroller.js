var minWidth;
var maxWidth;

window.addEventListener('load',function(){
  console.log("loaded");
  //var test = document.getElementsByClassName("items");

  fixWindow();
document.getElementById("items").style.left = minWidth;
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
                var title = document.querySelector('.title');
                if( title ) {
                  title.remove();
                }

                var dir = document.querySelector('.dir');
                if( dir ) {
                  dir.remove();
                }

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

                title = document.createElement('div');
                title.setAttribute('class', 'title');

                dir = document.createElement('div');
                dir.setAttribute('class', 'dir');

                dialog = document.createElement('div');
                dialog.setAttribute('class', 'dialog');
                var node = document.createTextNode(target.dataset.title);  //add space
                var node1 = document.createTextNode(" (" + target.dataset.year + ")");
                var node2 = document.createTextNode(target.dataset.director);
                var node3 = document.createTextNode(target.dataset.sum);

                title.appendChild(node);
                title.appendChild(node1);

                dir.appendChild(node2);

                dialog.appendChild(node3);

                body.appendChild(title);
                body.appendChild(dir);
                body.appendChild(dialog);
                console.log(dialog);
                // console.log("clicking");
                  //delete previous child
                }
  }

});

function br(){
  return document.createElement('br');
}

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
  },2000, "linear");
});

$('.scroll.right').mouseenter(function() {
  $('.items').animate({
    left: maxWidth
  },2000, "linear");
});

$('.scroll').mouseleave(function() {
  $('.items').stop();
});

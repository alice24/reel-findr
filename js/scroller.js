window.onload= function() {
  console.log("inside");

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


$('.scroll.left').mouseenter(function() {
  $('.items').animate({
    left: '100%'   //all.width
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

}

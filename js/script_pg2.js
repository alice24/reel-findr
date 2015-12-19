//GLOBAL VARIABLES
//variables for functions
//will be explained when they are used
var minWidth;
var maxWidth;

var windSize;
var exSize;

var time;

var previous;
var prevLeft = 0;

//window on load function
window.addEventListener('load',function(){
  //adjusts the window so the scroller won't be offscreen
  //(minimum for the first/last item is center of the page)
  fixWindow();

  //adds the class scroll to the items initially so the scroll to center animation exists
  document.getElementById('items').classList.add("scrollMiddle");

  //set the scroller to start with the first element in the center
  document.getElementById('items').style.left = minWidth;

  //the 'body' of the results is the results div, so we get that
  var body = document.querySelector('.results');

  //select all the individual movie items (which have been made via PHP)
  var foundMovies=document.querySelectorAll('.item');

  //for all the movies, add an onclick function that displays info about them
  for (i=0; i<foundMovies.length; i++){
    foundMovies[i].onclick = function(ev) {
      //if previous exists, it means the user previously clicked on a different movie
      //which makes the movie image large. we only want the current clicked movie to be larger
      //so this will shrink the previously clicked on movie.
      if (previous){
        previous.style.width = '150px';
        previous.style.height = '221px';
      }

      //similarly, if the user has clicked something, they have pulled up some info.
      //we need to remove this info (a total of 3 divs)
      var title = document.querySelector('.title'); // title of movie and year
      if( title ) { title.remove(); }

      var dir = document.querySelector('.dir'); //director of movie
      if( dir ) { dir.remove(); }

      var summary = document.querySelector('.summary'); //summary of movie
      if( summary ) { summary.remove(); }

      //now that the old stuff has been taken care of, focus on the new content to be displayed
      //target is the div currently clicked on (holds the movie pic)
      var target=ev.currentTarget;

      //make the image bigger, which is the same as the hover size
      //basically makes it seem like the hover freezes in large position
      target.style.width = "182px";
      target.style.height = "268px";

      // the window size differs slightly so a slight offset is added to make sure that the
      // select image is properly centered in the window!
      if (prevLeft > target.offsetLeft){ //moving left
        document.getElementById("items").style.left =target.offsetLeft*-1 + windSize - 130 + "px";
      }
      else{ //moving right
        document.getElementById("items").style.left =target.offsetLeft*-1 + windSize - 100 + "px";
      }

      //creates a div to display the title/year of the movie
      title = document.createElement('div');
      title.setAttribute('class', 'title');

      //creates a div to display the director of the movie
      dir = document.createElement('div');
      dir.setAttribute('class', 'dir');

      //creates a div to display the summary of the movie
      summary = document.createElement('div');
      summary.setAttribute('class', 'summary');

      //these nodes get the necessary data that was received from the database
      var node = document.createTextNode(target.dataset.title);  //add space
      var node1 = document.createTextNode(" (" + target.dataset.year + ")");
      var node2 = document.createTextNode(target.dataset.director);
      var node3 = document.createTextNode(target.dataset.sum);

      //div title gets node and node1 (title and year)
      title.appendChild(node);
      title.appendChild(node1);

      //div dir gets node 2 (director)
      dir.appendChild(node2);

      //div summary gets node 3 (summary)
      summary.appendChild(node3);

      //append all these to body (which is div results)
      body.appendChild(title);
      body.appendChild(dir);
      body.appendChild(summary);

      //this code is used below for the selecting movie animation
      //records the previously clicked movie and offset (for the scrolling animation)
      previous = target;
      prevLeft = target.offsetLeft;
    }
  }
});

//helper function that fixes the scroller positions when the window is resized
function fixWindow(){
  //this gets half the window width (so, the middle)
  windSize = $( window ).width() / 2;

  //this is half the regular box (for centering purposes too)
  exSize = 75;

  //this sets how fast the scroller moves depending on how many movies there are
  time = document.querySelector(".items").offsetWidth * 2;

  //this is the far left side of the items div
  minWidth = windSize - exSize + "px";

  //this is the far right side of the items div
  maxWidth = document.querySelector(".items").offsetWidth * -1
  maxWidth = maxWidth + windSize + exSize + "px"
}

//helper function; when you hover over the title, you can restart the quiz on click
function goBack(){
  window.location.href = 'index.html';
}


//JQUERY!! KIND OF!!
// when the window resizes
$(window).resize(function() {
  //fix the scroller so it doesn't go offscreen
  fixWindow();

  //get the min width of the items div (without the px)
  var minW = windSize - exSize;

  //get the max width of the items div (without the px)
  var maxW = (document.querySelector(".items").offsetWidth * -1) + windSize + exSize;

  //if the scroller is offscreen on resize (too right), move it left
  if (document.getElementById("items").offsetLeft < maxW){
    document.getElementById("items").style.left = maxW + "px";
  }

  //same code that moves it left
  if (document.getElementById("items").offsetLeft > minW){
    document.getElementById("items").style.left = minW + "px";
  }
});

//hovering over the title will show a different div (start over)
$(".toggle").hover(
  function(e){
    $("#mTitle").fadeOut(0);
    $("#mRestart").fadeIn(0);
  },
  function(e){
    $("#mRestart").fadeOut(0);
    $("#mTitle").fadeIn(0);
  }
);

//the code to scroll the items div when hovering over the scroller div
$('.scroll.left').mouseenter(
  function() {
    //this code adjusts the centering for the scrolling left/right code above
    var x = $('.items').offset();
    prevLeft = x.left * -1;
    $('.items')
      .removeClass( "scrollMiddle" ) //while scrolling, remove the transition that scrolls left on click
      .animate({left: minWidth},time, "linear"); //because this is replacing it
  }
);

//same thing but for scroll right
$('.scroll.right').mouseenter(
  function() {
    var x = $('.items').offset();
    prevLeft = x.left * 1;
    $('.items')
      .removeClass( "scrollMiddle" )
      .animate({left: maxWidth},time, "linear");
  }
);

//this stops scrolling when you stop hovering over the slider divs
$('.scroll').mouseleave(
  function() {
    $('.items')
      .addClass( "scrollMiddle" ) //add the scroll on click transition back
      .stop();
  }
);

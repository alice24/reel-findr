//GLOBAL VARIABLES
//page0 is the start page
//page1-page4 are the questions
//page5 is the submit button
//this array is used to keep track of which page is which
var pages = ["page0","page1","page2","page3","page4", "page5"];

//the page has invisible input boxes which are named the same
//as the values of this array
//this allows us to set the value of the input box depending on
//which button the user presses!
var forms = ["","genre","","sfx","pg"];

//keeps track of what part of the form/page we're on (see below)
var counter = 0;

//reorganizes the page (see below)
var reverseCounter = 10;

//the variable that references the overflow div
var container;

//these two get the height of the inner div (page0,page1, etc.)
//that is currently being called; client is the div and clientHeight is the height
//of the div that needs to be displayed
var client;
var clientHeight;

//the value pulled from the button (onclick) that is saved to the appropriate input
var selection;

//when the window loads, adjust the height of the div to only show the first page
window.onload = function() {
	adjustHeight();
	document.getElementById('myCanvas').classList.add("hideCanvas");
}

//when the window is resized, also adjust the height of the div
$(window).resize(function() {
	adjustHeight();
});

//this function is linked to all the clickable buttons with an answer
//on click, grab the value set to the button and fill the invisible input with it
//then toggle to the next question, which is another function
function chooseAnswer(){
	selection = event.currentTarget.value;

	document.getElementById(forms[counter]).value =selection;
	nextQuestion();
}

//this function changes the question
function nextQuestion(){
	//set the current page's order to the value of the reverse counter, which should make it the lowest div on the page
	document.getElementById(pages[counter]).style.order = reverseCounter;

	//increment both counters
	reverseCounter ++;
	counter++; //as this counter has been incremented, a new page is now set to be shown

	//move this new div to the top
	document.getElementById(pages[counter]).style.order = "-1";

	//adjust the height of the div to show the new page
	adjustHeight();

	// ------Adding this code to call the animations only on the required pages----//
 	if (pages[counter]=="page3"){
		vader();
		document.getElementById('myCanvas').classList.remove("hideCanvas");
 	}

 	if (pages[counter]=="page4"){
		cont.removeChild(darth);
 		lorean();
 	}

 	if (pages[counter]=="page5"){
		cont.removeChild(car);
		cont.removeChild(mouse);
		fg();
 	}
}

//this div adjusts the height of the overflow div so that only the proper div is shown
function adjustHeight(){
	//get the div overflow object and the div to be displayed
	container = document.getElementById('overflow');
	client = document.getElementById(pages[counter]);

	//get the new height...
	clientHeight = client.clientHeight;

	//and set it.
	container.style.height = clientHeight+"px";
}

//helper function; when you hover over the title, you can restart the quiz on click
function goBack(){
  window.location.href = 'index.html';
}

//JQUERY!!
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

//SLIDER JQUERY!!
//This eases the slider slightly when it moves (via arrow keys + mouse click only)
//this effect is not shown on mouse drag
$.extend($.ui.slider.prototype.options,{animate: 300});

//more slider
$("#flat-slider")
	.slider({
		//slider min/max values
  	min: 1985,
    max: 2015,

		//range:true fills the rest of the ticks in the middle
    range: true,
		//what values the two handle start on
    values: [1985, 2015],

		//when the sliding happens, get the value that the slider handles are on
		//which is tracked by the array ui
		//minYear is handle 1, the lower year, so it's set to min year
		//maxYear is handle 2, the higher year, so it's set to max year
		//chosen years displays what year the user's chosen and is a div
    slide: function(event, ui){
    	$("#minYear").val(ui.values[0]);
      $("#maxYear").val(ui.values[1]);
      $('#chosenYears').html(ui.values[0]+" - "+ui.values[1]);
    }
  })
  //pips are the little ticks under the main bar of the slider
	//we set the first and last to show a value, and the rest to be pips so it doesn't look cluttered
	//labels for the first and last are set as their respective year
  .slider("pips", {
  	first:"label",
    last:"label",
    rest: "pips",
    labels: { first: "1985", last: "2015" }
  });

var pages = ["page0","page1","page2","page3","page4", "page5"];

var forms = ["","genre","","sfx","pg"];

var counter = 0;
var reverseCounter = 10;

var container;
var client;
//height of div thats being called (page1/page2 etc)
var clientHeight;

var selection;

window.onload = function() {
	adjustHeight();
}

$(window).resize(function() {
	adjustHeight();
});

function chooseAnswer(){
	selection = event.currentTarget.value;

	document.getElementById(forms[counter]).value =selection;
	nextQuestion();
}


function nextQuestion(){
	document.getElementById(pages[counter]).style.order = reverseCounter;
	reverseCounter ++;
	counter++;
	document.getElementById(pages[counter]).style.order = "-1";
	adjustHeight();
}

function adjustHeight(){
	container = document.getElementById('overflow');
	client = document.getElementById(pages[counter]);

	clientHeight = client.clientHeight;

	container.style.height = clientHeight+"px";
	console.log(container.clientHeight);
}

/*slider's animation; eases a bit when it moves*/
$.extend($.ui.slider.prototype.options, {
    animate: 300
});

//the slider values
$("#flat-slider")
    .slider({
        min: 1985,
        max: 2015,
        //fills the middle based on range (if true)
        range: true,
        values: [1985, 2015],

        slide: function(event, ui){
          $("#minYear").val(ui.values[0]);
          $("#maxYear").val(ui.values[1]);
          $('#chosenYears').html(ui.values[0]+" - "+ui.values[1]);
        }
    })
    /*the ticks at the bottom*/
    .slider("pips", {
        first:"label",
        last:"label",
        rest: "pips",
        labels: { first: "1985", last: "2015" }
    });

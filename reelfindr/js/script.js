var pages = ["page0","page1","page2","page3","page4"];

var forms = ["","genre","decade","sfx"];

var counter = 0;
var reverseCounter = 3;

var container;
var client;
var clientHeight;

var selection;

window.onload = function() {
	if (document.getElementById('overflow')){
		adjustHeight();
	}
};

function chooseAnswer(){
	selection = event.currentTarget.id;

	document.getElementById(forms[counter]).value =selection;
	nextQuestion();
}

function nextQuestion(){
	document.getElementById(pages[counter]).style.order = reverseCounter;
	reverseCounter --;
	console.log("next question!");
	counter++;

	console.log(pages[counter]);

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
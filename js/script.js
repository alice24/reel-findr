var pages = ["page1","page2","page3"];
var counter = 0;
var reverseCounter = 3;

var container;
var client;
var clientHeight;

window.onload = function() {
	if (document.getElementById('overflow')){
		adjustHeight();
	}
};

function nextQuestion(){
	document.getElementById(pages[counter]).style.order = reverseCounter;
	reverseCounter --;
	console.log("next question!");
	counter++;
	
	if (counter == pages.length){
		window.location.href = "results.html";
		return;
	}
	
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
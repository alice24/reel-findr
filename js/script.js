<<<<<<< HEAD
var pages = ["page0","page1","page2","page3","page4"];

var forms = ["","genre","decade","sfx"];
=======
var pages = ["page1","page2","page3","page4"];

var forms = ["genre","decade","sfx"];
>>>>>>> a5a06f295ebbc5c3b82c9362c63f748a9a3b3412

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
<<<<<<< HEAD
//console.log();
=======

>>>>>>> a5a06f295ebbc5c3b82c9362c63f748a9a3b3412
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
<<<<<<< HEAD

	console.log(pages[counter]);

	document.getElementById(pages[counter]).style.order = "-1";

=======
	
	console.log(pages[counter]);
	
	document.getElementById(pages[counter]).style.order = "-1";
	
>>>>>>> a5a06f295ebbc5c3b82c9362c63f748a9a3b3412
	adjustHeight();
}

function adjustHeight(){
	container = document.getElementById('overflow');
	client = document.getElementById(pages[counter]);
<<<<<<< HEAD

	clientHeight = client.clientHeight;

	container.style.height = clientHeight+"px";
	console.log(container.clientHeight);
}
=======
	
	clientHeight = client.clientHeight;
	
	container.style.height = clientHeight+"px";
	console.log(container.clientHeight);
}
>>>>>>> a5a06f295ebbc5c3b82c9362c63f748a9a3b3412

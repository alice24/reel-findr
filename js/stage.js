var stage = new createjs.Stage("myCanvas"); //new createjs stage object
stage.enableMouseOver(10); //10 times per second

var cont = new createjs.Container(); //holds things, like a div
stage.addChild(cont);

var layers = [];
var t;
var size;
var moveX;
var moveY;

//decalaring public variables
var darth;
var car;
var bench;
var fg;
var mouse;

// declaring image paths for preloaded images
var imagePath = "img/";
var manifest = [{
  id: "darth",
  src: "dv.png"
}, {
  id: "car",
  src: "delorean.png"
}, {
  id: "mouse",
  src: "mouse.gif"
}, {
  id: "bench",
  src: "bench.png"
}, {
  id: "fg",
  src: "fg.png"
}];

// preloading images
var preload = new createjs.LoadQueue(false, imagePath);
preload.loadManifest(manifest);
preload.on("complete", load);

// making function that summons darth vader *cue imperial march*
function vader() {
  // adding darth image to global variable
  darth = new createjs.Bitmap(preload.getResult("darth"));
  zim.scale(darth, 0.1);
  darth.x = 400;
  cont.addChild(darth);
  stage.update();

// mouse hints to user to move mouse on canvas area..preloading mouse below
  mouse = new createjs.Bitmap(preload.getResult("mouse"));
  cont.addChild(mouse);
  zim.scale(mouse, 0.25);
  mouse.x = 150;
  mouse.y = 90;
  mouse.alpha = 0;

//tweening darth to the appear from the dephts of the backgroud
  createjs.Tween.get(darth)
    .to({
      scaleX: 0.75,
      scaleY: 0.75
    }, 2000)
    .call(parallaxGo);

//mouse highlight tweens only after darth has made his presence felt
  setTimeout(function() {
    createjs.Tween.get(mouse)
      .to({
        x: 350,
        alpha: 1
      }, 250)
      .to({
        x: 180
      }, 250)
      .to({
        x: 350
      }, 250)
      .to({
        x: 180
      }, 250)
      .to({
        x: 350
      }, 250)
      .to({
        x: 180,
        alpha: 0
      }, 250);
  }, 2000)

  stage.update();
}
//this function calls the delorean to year 2015. Not really...just calls in on screen
function lorean() {
  //adding delorean image to global variable car
  car = new createjs.Bitmap(preload.getResult("car"));
  cont.addChild(car);
  zim.scale(car, 0.5);
  car.x = 900;
  car.y = 150;


  // mouse hints to user to move mouse on canvas area..preloading mouse below
  mouse = new createjs.Bitmap(preload.getResult("mouse"));
  cont.addChild(mouse);
  zim.scale(mouse, 0.25);
  mouse.x = 750;
  mouse.y = 90;
  mouse.alpha = 0;

  //mouse highlight tweens only after the delorean has zoomed in on screen...from the future
  setTimeout(function() {
    createjs.Tween.get(mouse)
      .to({
        x: 750,
        alpha: 1
      }, 250)
      .to({
        x: 580
      }, 250)
      .to({
        x: 750
      }, 250)
      .to({
        x: 580
      }, 250)
      .to({
        x: 750
      }, 250)
      .to({
        x: 580,
        alpha: 0
      }, 250);
  }, 1000)

  // animation
  createjs.Tween.get(car)
    .to({
      x: 200,
      y: 150
    }, 800, createjs.Ease.bounceOut)
    .call(parallaxGod);//after tween is done run a parallax on it
  stage.update();
}

//this function calls calls Forest Gump on screen
function fg() {
  //adding bench image to global variable bench
  bench = new createjs.Bitmap(preload.getResult("bench"));
  cont.addChild(bench);
  zim.scale(bench, 0.11);
  bench.x = 200;
  bench.y = 60;

  //adding Forest Gump image to global variable fg
  fg = new createjs.Bitmap(preload.getResult("fg"));
  cont.addChild(fg);
  zim.scale(fg, 0.2);
  fg.x = 300;
  fg.alpha = 0;
  // fg.y = 10;

  createjs.Tween.get(fg)
    .to({
      alpha: 1
    }, 2000)
    .call(parallaxRunF);  //after tween is done, run a parallax on it

  stage.update();
}

//parallax for darth
function parallaxGo() {
  setTimeout(function() {
    var parallax = new zim.Parallax(stage, .1, [{
      obj: darth,
      prop: "x",
      propChange: -650,
      input: "mouseX",
      inMin: 0,
      inMax: 500
    }]);
  }, 500)
  console.log("parallax");
}

function load() {
  createjs.Ticker.on("tick", stage);
}

//parallax for delorean
function parallaxGod() {
  setTimeout(function() {
    var parallax = new zim.Parallax(stage, .1, [{
      obj: car,
      prop: "x",
      propChange: -450,
      input: "mouseX",
      inMin: 0,
      inMax: 500
    }]);
  }, 2000)
  console.log("parallax2");
}

//parallax for Forest....run forest!!
function parallaxRunF() {
  setTimeout(function() {
    var parallax = new zim.Parallax(stage, .1, [{
      obj: fg,
      prop: "x",
      propChange: -150,
      input: "mouseX",
      inMin: 0,
      inMax: 500
    }]);
  }, 2000)
  console.log("parallax3");
}

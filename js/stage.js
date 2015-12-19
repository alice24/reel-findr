//GLOBAL VARIABLES
var canvas = document.getElementById("myCanvas")
var stage = new createjs.Stage(canvas); //new createjs stage object
stage.enableMouseOver(10); //10 times per second

//parallax container
var cont = new createjs.Container();
stage.addChild(cont);

var layers = [];
var t;
var size;
var moveX;
var moveY;

//declaring public variables (images)
var darth;
var car;
var bench;
var fg;
var mouse;

// declaring image paths for preloaded images
var imagePath = "img/";
var manifest = [
  {
    id: "darth",
    src: "dv.png"
  },
  {
    id: "car",
    src: "delorean.png"
  },
  {
    id: "mouse",
    src: "mouse.gif"
  },
  {
    id: "bench",
    src: "bench.png"
  },
  {
    id: "fg",
    src: "fg.png"
  }
];

// preloading images
var preload = new createjs.LoadQueue(false, imagePath);
preload.loadManifest(manifest);
preload.on("complete", load);

function load() {
  createjs.Ticker.on("tick", stage);
}

// making function that summons darth vader *cue imperial march*
function vader() {
  // adding darth image to global variable
  darth = new createjs.Bitmap(preload.getResult("darth"));
  zim.scale(darth, 0.1);
  darth.x = 300;
  cont.addChild(darth);
  stage.update();

  // mouse hints to user to move mouse on canvas area..draw mouse below
  mouse = new createjs.Bitmap(preload.getResult("mouse"));
  cont.addChild(mouse);
  zim.scale(mouse, 0.25);
  mouse.x = 150;
  mouse.y = 90;
  mouse.alpha = 0;

  //tweening darth to the appear from the depths of the background
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

//this function calls the delorean to year 2015. Not really...just calls in onscreen
function lorean() {
  //adding delorean image to global variable car
  car = new createjs.Bitmap(preload.getResult("car"));
  cont.addChild(car);
  zim.scale(car, 0.5);
  car.x = 900;
  car.y = 175;

  // mouse hints to user to move mouse on canvas area..drawing mouse below
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

  // animation (entering)
  createjs.Tween.get(car)
    .to({
      x: 200,
      y: 175
    }, 800, createjs.Ease.bounceOut)
    .call(parallaxGod);//after tween is done run a parallax on it

  stage.update();
}

//this function calls calls Forrest Gump on screen
function fg() {
  //adding bench image to global variable bench
  bench = new createjs.Bitmap(preload.getResult("bench"));
  cont.addChild(bench);
  zim.scale(bench, 0.11);
  bench.x = 200;
  bench.y = 70;

  //adding Forest Gump image to global variable fg
  fg = new createjs.Bitmap(preload.getResult("fg"));
  cont.addChild(fg);
  zim.scale(fg, 0.2);
  fg.x = 300;
  fg.y =20;
  fg.alpha = 0;

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
    darth.x = 100;
    var parallax = new zim.Parallax(stage, .1, [{
      obj: darth,
      prop: "x",
      propChange: -400,
      input: "mouseX",
      inMin: 0,
      inMax: 500
    }]);
  }, 500)
}

//parallax for delorean
function parallaxGod() {
  setTimeout(function() {
    var parallax = new zim.Parallax(stage, .1, [{
      obj: car,
      prop: "x",
      propChange: -400,
      input: "mouseX",
      inMin: 0,
      inMax: 500
    }]);
  }, 2000)
}

//parallax for Forrest....run Forrest!!
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
}

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function top_anim_init() {
  canvas = document.getElementById("top_mv_canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp=AdobeAn.getComposition("06F9780395164588B8D0A7AD103BAFB2");
  var lib=comp.getLibrary();
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
  loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
  var lib=comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
  var images=comp.getImages();
  if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib=comp.getLibrary();
  var ss=comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for(i=0; i<ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
  }
  exportRoot = new lib.topanim();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

window.addEventListener('load', top_anim_init);

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,189);


(lib.table = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8,9.4).lineTo(-6,8.9).lineTo(-6,6.9).curveTo(-5.9,6.3,-5.6,6.3).curveTo(-5.3,6.1,-5,6.2).lineTo(1.6,7.3).curveTo(1.3,6.7,0.7,6.1).lineTo(-5.3,0.2).curveTo(-5.8,-0.3,-5.8,-0.5).lineTo(-5.6,-1).lineTo(-5.2,-1.6).lineTo(-4.7,-2.1).lineTo(-4.3,-2.2).curveTo(-2.4,-1.9,-0.9,-1.9).curveTo(0.6,-1.8,1.7,-2.1).curveTo(2.9,-2.4,3.4,-2.9).curveTo(4,-3.5,4.2,-4.5).curveTo(4.3,-5.5,4,-6.5).curveTo(3.6,-7.6,2.9,-8.7).curveTo(3.1,-9,3.4,-9.3).curveTo(3.7,-9.5,4,-9.5).lineTo(4.4,-9.3).lineTo(5,-8.4).curveTo(5.6,-7.1,5.9,-5.7).curveTo(6.2,-4.3,6,-3.2).curveTo(5.8,-2,5.3,-1.2).curveTo(4.8,-0.4,3.8,0.1).curveTo(2.8,0.5,1.2,0.7).curveTo(-0.4,0.8,-2.7,0.5).curveTo(-1.5,1.9,-0,3.2).lineTo(2.9,5.8).curveTo(3.8,6.6,3.9,7.2).curveTo(4.1,7.7,4,8.4).curveTo(4,9.3,3.5,9.4).lineTo(2.8,9.5).lineTo(1.8,9.4).closePath();
	this.shape.setTransform(136.3639,8.2212,0.8708,0.8708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.6,7.3).curveTo(-2.7,6.8,-3.7,6).curveTo(-4.7,5,-5.2,4).curveTo(-5.7,3,-5.8,1.7).curveTo(-5.8,0.6,-5.4,-0.7).curveTo(-5,-1.6,-4.6,-2.1).curveTo(-3.9,-2.7,-3.6,-2.9).curveTo(-3,-3.2,-2.5,-3.2).curveTo(-2,-3.3,-1.5,-3).curveTo(-0.2,-2.5,0.1,-0.5).curveTo(0.3,1.6,-0.3,4.9).curveTo(1,5.2,2.1,4.5).curveTo(3.1,3.9,3.8,2.2).curveTo(4.3,0.9,4.4,-0.2).curveTo(4.5,-1.4,4.2,-2.5).curveTo(4,-3.6,3.5,-4.8).lineTo(2.5,-7).lineTo(3.1,-7.6).curveTo(3.4,-7.8,3.7,-7.7).lineTo(4.1,-7.5).lineTo(4.3,-7).lineTo(5.2,-4.8).curveTo(5.6,-3.4,5.7,-2.2).curveTo(5.9,-0.8,5.7,0.7).curveTo(5.6,2.3,4.9,3.9).curveTo(3.9,6.4,2.2,7.3).curveTo(1.3,7.7,0.4,7.7).curveTo(-0.6,7.7,-1.6,7.3).closePath().moveTo(-3.4,-0.4).curveTo(-3.9,-0.1,-4.2,0.5).curveTo(-4.4,1.1,-4.3,1.6).curveTo(-4.2,2.2,-3.9,2.7).curveTo(-3.6,3.2,-2.9,3.8).curveTo(-2.4,4.2,-1.5,4.6).curveTo(-1,2.3,-1.2,1.1).curveTo(-1.3,-0,-2.1,-0.4).lineTo(-2.8,-0.5).lineTo(-3.4,-0.4).closePath();
	this.shape_1.setTransform(132.354,23.0642,0.8708,0.8708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.3,10.2).lineTo(1.9,9.6).lineTo(-10.4,2.1).curveTo(-12.3,0.7,-12.6,-0.4).curveTo(-13,-1.5,-12.3,-2.4).curveTo(-11.9,-3,-11.4,-3.2).curveTo(-10.8,-3.4,-10.1,-2.9).lineTo(-9.7,-2.5).lineTo(-9.1,-1.7).lineTo(-9.3,-1.1).curveTo(-9.4,-0.8,-9.2,-0.5).lineTo(-8.6,0.3).lineTo(-7.4,1.4).lineTo(2.3,7.3).lineTo(1.9,6.2).lineTo(1.5,5).lineTo(-0.5,-2.1).curveTo(-0.6,-2.8,-0.4,-3).lineTo(-0.1,-3.3).lineTo(0.5,-3.6).lineTo(1.1,-3.7).curveTo(1.4,-3.7,1.8,-3.4).lineTo(4.7,-1.5).curveTo(6,-0.8,7,-0.6).curveTo(8.1,-0.4,8.8,-0.7).curveTo(9.5,-0.9,10.2,-1.9).curveTo(10.9,-2.8,11.1,-3.7).curveTo(11.3,-4.5,11.3,-5.7).curveTo(11.3,-6.8,11.1,-7.7).lineTo(10.6,-9.7).lineTo(11.3,-10.2).curveTo(11.7,-10.3,12,-10.1).lineTo(12.3,-9.8).lineTo(12.4,-9.2).lineTo(12.7,-6.9).curveTo(12.8,-5.7,12.7,-4.5).curveTo(12.6,-3.2,12.2,-2).curveTo(12,-0.9,11.1,0.2).curveTo(10.7,0.9,10.1,1.4).curveTo(9.6,1.9,8.9,2).curveTo(8.3,2.2,7.3,2.1).curveTo(6.6,2,5.4,1.5).lineTo(1.9,-0.2).lineTo(1.6,-0.3).lineTo(1.6,0.2).lineTo(1.8,1.5).lineTo(2.2,3).lineTo(2.8,4.4).lineTo(4,6.4).lineTo(5.1,7.7).lineTo(5.4,8.1).curveTo(5.5,8.2,5.5,8.2).curveTo(5.5,8.3,5.5,8.4).curveTo(5.4,8.4,5.4,8.5).curveTo(5.4,8.5,5.3,8.6).lineTo(4.9,9.1).lineTo(3.7,10.1).lineTo(3.3,10.2).lineTo(3.3,10.2).closePath();
	this.shape_2.setTransform(121.1796,37.6884,0.8708,0.8708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,5.3).curveTo(-6,4,-6.3,2.4).curveTo(-6.7,0.8,-6.5,-0.7).curveTo(-6.2,-2.4,-5.7,-3.6).curveTo(-4.9,-5,-4.1,-5.7).curveTo(-3.4,-6.3,-2.7,-6.3).curveTo(-2.2,-6.4,-1.8,-5.9).curveTo(-1.5,-5.5,-1.5,-5.2).lineTo(-1.5,-4.3).lineTo(-2.5,-4.1).curveTo(-3.3,-3.9,-3.6,-3.5).curveTo(-4.2,-3.1,-4.5,-2.3).curveTo(-4.9,-1.5,-4.9,-0.7).curveTo(-4.9,0.2,-4.5,1.1).curveTo(-4.2,2.1,-3.6,2.8).curveTo(-2.5,4.1,-1.2,4.1).curveTo(0.1,4.1,1.4,3).curveTo(2.6,2.1,3.2,0.9).curveTo(3.8,-0.2,4.3,-1.7).curveTo(4.7,-3.1,4.9,-4.3).curveTo(5.1,-5.5,4.9,-6.6).lineTo(5.8,-6.8).curveTo(6.1,-6.9,6.4,-6.6).lineTo(6.5,-6.3).curveTo(6.6,-6.1,6.5,-5.5).lineTo(6.2,-3.2).curveTo(6,-1.9,5.5,-0.5).curveTo(4.9,0.9,3.9,2.5).curveTo(2.9,4,1.4,5.2).curveTo(-0.3,6.7,-1.8,6.9).lineTo(-2,6.9).curveTo(-3.5,6.9,-4.9,5.3).closePath();
	this.shape_3.setTransform(115.1693,50.2935,0.8708,0.8708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.1,6.9).curveTo(-0.9,6.6,-1.9,5).curveTo(-2.1,4.7,-2.4,3.9).lineTo(-4.8,-1.1).lineTo(-6.7,0.2).lineTo(-7.2,-0.2).lineTo(-7.5,-0.7).curveTo(-7.6,-0.7,-7.6,-0.8).curveTo(-7.6,-0.8,-7.6,-0.8).curveTo(-7.7,-0.9,-7.7,-1).curveTo(-7.7,-1,-7.6,-1.1).curveTo(-7.6,-1.3,-7.4,-1.5).lineTo(-5.6,-2.5).lineTo(-7.1,-4.4).lineTo(-7.7,-5.1).lineTo(-7.5,-5.7).lineTo(-7,-6.2).lineTo(-6.4,-6.7).curveTo(-5.9,-7,-5.5,-6.8).curveTo(-5,-6.6,-4.7,-6.1).lineTo(-3.6,-3.8).lineTo(-1.4,-5.4).lineTo(-0.4,-6.4).lineTo(0,-6.1).lineTo(0.5,-5.6).curveTo(0.5,-5.5,0.6,-5.4).curveTo(0.6,-5.4,0.6,-5.3).curveTo(0.6,-5.3,0.6,-5.2).curveTo(0.6,-5.2,0.6,-5.1).curveTo(0.6,-4.9,0.3,-4.5).lineTo(-0.8,-3.6).lineTo(-2.9,-2.2).lineTo(-0.5,2.9).curveTo(-0,3.7,0.4,4).curveTo(0.7,4.3,1.2,4.4).curveTo(1.6,4.5,1.9,4.4).lineTo(2.7,4).curveTo(3.5,3.7,4.1,2.8).curveTo(4.8,1.9,5.1,1).curveTo(5.6,-0,5.9,-1).lineTo(6.2,-3.1).lineTo(7.1,-3.2).curveTo(7.5,-3.2,7.7,-2.9).lineTo(7.8,-2.7).lineTo(7.8,-2.1).lineTo(7.1,0.1).curveTo(6.9,1.1,6.1,2.4).curveTo(5.5,3.6,4.6,4.5).curveTo(3.8,5.5,2.6,6.2).curveTo(1.5,6.9,0.5,6.9).lineTo(0.1,6.9).closePath();
	this.shape_4.setTransform(104.3281,56.235,0.8708,0.8708);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,8.6).lineTo(-2.9,8).lineTo(-3.4,7).lineTo(-3.9,5.3).lineTo(-4.4,-0).curveTo(-4.4,-0.5,-4.3,-0.7).curveTo(-4.2,-0.9,-3.8,-1.1).lineTo(-2.8,-1.3).lineTo(-1.8,-1.2).lineTo(-2.1,1.5).lineTo(-2,3.4).curveTo(-2,4.2,-1.6,5.1).curveTo(-1.3,5.9,-0.6,6.3).curveTo(-0,6.5,0.8,6.2).curveTo(2.3,5.5,3.3,4.1).curveTo(4.4,2.5,5.2,-0.1).lineTo(6.1,-0.1).curveTo(6.4,-0.1,6.6,0.3).lineTo(6.6,0.7).lineTo(6.4,1.2).curveTo(6.1,2.1,5.4,3.4).curveTo(4.8,4.6,4.1,5.5).curveTo(3.3,6.6,2.4,7.3).curveTo(1.5,8.1,0.3,8.5).curveTo(-0.4,8.8,-1,8.8).curveTo(-1.7,8.8,-2.1,8.6).closePath().moveTo(-5.9,-5.1).curveTo(-6.3,-5.3,-6.4,-5.8).curveTo(-6.6,-6.2,-6.6,-6.6).curveTo(-6.6,-7.1,-6.4,-7.4).lineTo(-5.9,-8.2).curveTo(-5.6,-8.5,-5.2,-8.6).curveTo(-4,-9.1,-3.5,-8.1).lineTo(-3.4,-7.5).lineTo(-3.6,-6.6).lineTo(-4.1,-5.7).curveTo(-4.5,-5.3,-5,-5.1).lineTo(-5.5,-5).lineTo(-5.9,-5.1).closePath();
	this.shape_5.setTransform(96.5739,58.6904,0.8708,0.8708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,10).curveTo(-4,9.9,-4.2,9.4).lineTo(-7.9,-1.7).curveTo(-8.5,-3.7,-8.8,-5.3).curveTo(-9,-6.4,-9,-7.3).curveTo(-8.9,-8.2,-8.6,-8.6).curveTo(-8.4,-9.1,-7.9,-9.5).curveTo(-7.3,-9.9,-6.8,-9.9).curveTo(-5.8,-10.2,-4.7,-9.9).curveTo(-3.8,-9.6,-3.7,-9).curveTo(-3.6,-8.6,-3.8,-8.3).lineTo(-4.2,-7.5).lineTo(-4.9,-7.7).lineTo(-5.7,-7.7).curveTo(-6.1,-7.6,-6.4,-7).curveTo(-6.7,-6.4,-6.4,-5).lineTo(-4,3.7).lineTo(-2.9,6.4).curveTo(-2.6,4.9,-1.8,3.1).curveTo(-1.2,1.6,-0.4,0.2).curveTo(0.4,-1.2,1.1,-1.9).curveTo(1.8,-2.7,2.3,-2.8).curveTo(3.1,-3,3.5,-2.5).curveTo(3.9,-2,4,-1.3).curveTo(2.8,-0.8,1.5,0.6).curveTo(0.4,2,-0.5,3.7).lineTo(0.9,4.3).lineTo(3.2,5.2).lineTo(5.5,6.1).lineTo(7.1,6.6).lineTo(8.3,6.9).lineTo(9,7).curveTo(9.1,7.7,8.8,8.2).curveTo(8.6,8.8,8.1,8.9).lineTo(7.5,8.9).lineTo(6.4,8.7).lineTo(-1.1,5.3).curveTo(-1.6,6.6,-1.6,7.5).curveTo(-1.8,8.7,-1.6,9.6).lineTo(-2.9,10).lineTo(-3.4,10.1).lineTo(-3.7,10).closePath();
	this.shape_6.setTransform(84.7205,61.2556,0.8708,0.8708);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(8.5,13.2).curveTo(8.1,13.1,7.2,12.5).lineTo(5.6,11.1).lineTo(3.8,8.9).lineTo(1.8,6.3).lineTo(-2.2,7.9).lineTo(-4.6,8.7).curveTo(-5.9,9.1,-6.7,9.1).curveTo(-7.6,9.2,-8.7,9).curveTo(-9.9,8.8,-10.6,7.9).curveTo(-11.3,7,-11,5.6).curveTo(-10.9,4.6,-10.4,3.9).curveTo(-10,3.3,-9,2.3).lineTo(-6.5,0.3).lineTo(-3,-2.3).curveTo(-3.9,-4.4,-4.4,-6.5).curveTo(-4.8,-8.5,-4.5,-10.1).curveTo(-4.4,-10.9,-3.9,-11.6).curveTo(-3.4,-12.2,-2.6,-12.7).curveTo(-1.7,-13.1,-0.9,-13.2).curveTo(0.2,-13.3,1.2,-13.1).curveTo(2.3,-12.9,3.5,-12.4).curveTo(4.4,-11.9,5.1,-11.3).curveTo(5.7,-10.7,6,-9.9).curveTo(6.2,-9.1,6.1,-8.4).curveTo(5.9,-7.4,5.5,-6.7).curveTo(5,-5.8,4.2,-5.1).lineTo(2.3,-3.4).lineTo(-0.4,-1.5).lineTo(2.9,3.9).lineTo(8.1,1.4).lineTo(9.3,1).lineTo(10.1,1).curveTo(10.7,1.1,10.9,1.4).curveTo(11.2,1.8,11.1,2.3).lineTo(10.8,3).lineTo(10.6,3.4).lineTo(9.4,3.4).lineTo(8.1,3.8).lineTo(4,5.4).curveTo(5.6,7.5,7.3,9.1).curveTo(9,10.8,10.4,11.6).curveTo(10,12.5,9.6,12.8).curveTo(9.1,13.2,8.7,13.2).lineTo(8.5,13.2).closePath().moveTo(-4.8,1.7).curveTo(-5.7,2.4,-6.5,3.2).curveTo(-7.1,3.7,-7.5,4.3).curveTo(-7.8,4.8,-7.9,5.2).curveTo(-7.9,5.9,-7.7,6.3).curveTo(-7.4,6.8,-6.7,7).lineTo(-5.6,7).curveTo(-5.1,7,-4.2,6.8).curveTo(-3.1,6.5,-2.1,6.1).lineTo(0.8,4.8).curveTo(0.1,3.8,-0.7,2.3).lineTo(-2.1,-0.3).lineTo(-4.8,1.7).closePath().moveTo(-1.4,-11).curveTo(-2.2,-10.5,-2.3,-9.4).curveTo(-2.5,-8.3,-2.2,-6.7).curveTo(-1.9,-5,-1.2,-3.5).lineTo(2,-6).curveTo(2.4,-6.4,2.8,-7.1).curveTo(3.2,-7.7,3.2,-8.3).curveTo(3.4,-9.4,2.7,-10.3).curveTo(1.8,-11.1,0.4,-11.4).lineTo(-0.1,-11.4).curveTo(-0.9,-11.4,-1.4,-11).closePath();
	this.shape_7.setTransform(59.2172,62.139,0.8708,0.8708);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.5,6).curveTo(0.1,5.9,-1.3,5.5).curveTo(-2.8,5,-4.3,4.1).curveTo(-6.7,2.5,-7.2,0.8).curveTo(-7.7,-1.1,-6.5,-2.9).curveTo(-5.8,-4,-4.8,-4.8).curveTo(-3.9,-5.5,-2.7,-5.8).curveTo(-1.6,-6.2,-0.3,-6).curveTo(0.8,-5.9,2,-5.2).curveTo(2.9,-4.7,3.3,-4.1).curveTo(3.8,-3.4,3.9,-3).curveTo(4,-2.4,4,-1.9).curveTo(3.9,-1.4,3.6,-1).curveTo(2.8,0.3,0.9,0.1).curveTo(-1.1,0.1,-4.4,-1.2).curveTo(-4.9,-0,-4.4,1.2).curveTo(-4,2.4,-2.4,3.3).curveTo(-1.3,4,-0.2,4.3).curveTo(1,4.6,2.1,4.6).curveTo(3.1,4.6,4.5,4.3).lineTo(6.8,3.7).lineTo(7.3,4.4).curveTo(7.4,4.7,7.3,5).lineTo(7,5.3).lineTo(6.5,5.5).lineTo(4.1,5.9).curveTo(3.3,6.1,2.5,6.1).lineTo(1.5,6).closePath().moveTo(-1.6,-4.4).curveTo(-2.4,-4,-2.8,-3.6).curveTo(-3.4,-3.1,-3.9,-2.4).curveTo(-1.7,-1.5,-0.5,-1.4).curveTo(0.7,-1.3,1.1,-2.1).curveTo(1.5,-2.7,1.4,-3.3).curveTo(1.2,-3.9,0.6,-4.3).curveTo(0.2,-4.6,-0.4,-4.6).curveTo(-1.1,-4.6,-1.6,-4.4).closePath();
	this.shape_8.setTransform(36.6918,56.6998,0.8708,0.8708);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,9.6).curveTo(-3.5,9.3,-4.7,8.8).curveTo(-5.9,8.3,-6.7,7.6).curveTo(-7.6,6.7,-7.6,5.1).curveTo(-7.5,3.5,-6.6,1.5).curveTo(-5.8,-0.5,-4.3,-2.7).curveTo(-2.9,-4.8,-0.8,-7.1).curveTo(0.2,-8.2,1.3,-9).curveTo(2.4,-9.7,3.2,-9.8).curveTo(4.1,-10,4.9,-9.7).curveTo(5.7,-9.5,6.4,-8.8).curveTo(7,-8.3,7.3,-7.6).curveTo(7.6,-7,7.6,-6.2).curveTo(7.6,-5.4,7.2,-4.5).curveTo(6.8,-3.5,6,-2.7).curveTo(5.1,-1.7,3.7,-0.8).curveTo(2.3,-0.1,1,0.4).curveTo(-0.5,0.9,-1.7,1.1).lineTo(-4.1,1.4).curveTo(-5,3.4,-5.2,4.6).curveTo(-5.3,6.1,-4.5,6.8).curveTo(-3.8,7.5,-2.8,7.8).curveTo(-1.9,8.2,-0.8,8.3).curveTo(0.4,8.5,1.4,8.4).lineTo(3.7,8.2).lineTo(4,9).curveTo(4.1,9.4,3.9,9.6).lineTo(3.5,9.8).lineTo(2.9,9.9).lineTo(0.5,9.9).curveTo(-1,9.8,-2.2,9.6).closePath().moveTo(3.7,-8).lineTo(2.7,-7.3).lineTo(1.2,-5.8).curveTo(-0.6,-3.8,-1.6,-2.5).lineTo(-3.1,-0.3).lineTo(-1.5,-0.6).lineTo(0.2,-1.3).curveTo(1.2,-1.8,2,-2.4).curveTo(2.9,-3,3.7,-3.9).curveTo(4.4,-4.6,4.7,-5.2).curveTo(5.1,-5.8,5.2,-6.4).curveTo(5.4,-6.9,5.3,-7.3).curveTo(5.2,-7.6,5,-7.8).curveTo(4.7,-8.1,4.5,-8.1).lineTo(4.3,-8.1).lineTo(3.7,-8).closePath();
	this.shape_9.setTransform(28.831,46.4067,0.8708,0.8708);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,8.6).curveTo(-4.9,7.9,-6.2,6.7).curveTo(-7.6,5.4,-8.6,3.9).curveTo(-9.1,3.3,-9.2,2.9).curveTo(-9.4,2.3,-9.3,2.1).curveTo(-9.2,1.7,-8.9,1.3).lineTo(-8.1,0.6).lineTo(-5.3,-1.9).lineTo(2.2,-7.8).curveTo(4.3,-9.4,6.2,-9.3).curveTo(7.9,-9.1,9,-7.7).curveTo(9.3,-7.2,9.3,-6.7).curveTo(9.4,-6.2,8.7,-5.8).lineTo(8.1,-5.4).lineTo(7.8,-5.3).lineTo(6.8,-6.2).curveTo(6.3,-6.6,5.7,-6.5).curveTo(5,-6.5,4.3,-6.2).curveTo(3.4,-5.8,2.4,-5.1).lineTo(-3.5,-0.4).curveTo(-2.3,-0.8,-0.9,-0.8).curveTo(0.3,-0.8,1.2,-0.5).curveTo(2.1,-0.2,2.9,0.4).curveTo(3.7,1,4.1,1.6).curveTo(5.4,3.4,5,5.2).curveTo(4.7,6.9,2.9,8.2).curveTo(1.4,9.3,-0.2,9.3).lineTo(-0.4,9.3).curveTo(-1.8,9.3,-3.3,8.6).closePath().moveTo(-3.6,1).curveTo(-4.9,1.5,-5.8,2.2).lineTo(-6.8,3.1).lineTo(-6.6,3.7).lineTo(-6.1,4.6).curveTo(-5.4,5.7,-4.4,6.3).curveTo(-3.5,6.9,-2.6,7.2).curveTo(-1.6,7.3,-0.7,7.2).curveTo(0.2,7,1.1,6.3).curveTo(2.3,5.5,2.6,4.3).curveTo(3,3.2,2.2,2.1).curveTo(1.6,1.3,0.7,0.9).curveTo(-0.2,0.6,-1.3,0.6).curveTo(-2.4,0.6,-3.6,1).closePath();
	this.shape_10.setTransform(18.3999,36.0347,0.8708,0.8708);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.3,10.4).lineTo(3.3,9.5).curveTo(2.3,9,1.3,8.4).curveTo(0.3,7.7,-0.5,6.7).curveTo(-1.2,5.9,-1.8,4.5).curveTo(-2.5,2.7,-2,1.2).curveTo(-1.4,-0.2,-0.1,-1.2).lineTo(-3.7,-3.3).curveTo(-4.6,-4,-5.3,-4.7).curveTo(-6,-5.6,-6.3,-6.4).curveTo(-6.8,-7.8,-6.2,-8.6).curveTo(-5.7,-9.6,-4.5,-10).curveTo(-3.2,-10.4,-1.6,-10.4).curveTo(0.1,-10.3,1.5,-9.8).curveTo(2.8,-9.3,4.2,-8.2).curveTo(5.4,-7.1,5.9,-5.5).curveTo(6.2,-4.8,6.3,-3.9).lineTo(6.2,-2.5).curveTo(6.1,-1.8,5.8,-1.3).lineTo(5.2,-0.4).lineTo(4,-0.3).lineTo(2.8,0.1).curveTo(1.9,0.4,1.5,0.8).curveTo(1,1.2,0.5,1.8).curveTo(0.2,2.4,0.1,3.1).curveTo(0.1,3.8,0.4,4.6).curveTo(0.7,5.5,1.3,6.2).curveTo(1.9,7,2.8,7.5).curveTo(3.6,8,4.6,8.5).curveTo(5.4,8.8,6.6,9).lineTo(6.5,9.9).curveTo(6.4,10.3,6.1,10.4).lineTo(5.9,10.4).closePath().moveTo(-2.8,-8).lineTo(-3.4,-7.7).lineTo(-4,-7.3).lineTo(-4.2,-6.7).curveTo(-4.3,-6.4,-4.2,-6.1).curveTo(-3.9,-5.2,-2.9,-4.6).curveTo(-1.9,-3.9,-0.7,-3.3).curveTo(0.5,-2.9,1.6,-2.7).curveTo(2.7,-2.4,3.3,-2.5).curveTo(3.9,-2.9,4.2,-3.8).curveTo(4.6,-4.6,4.2,-5.5).curveTo(3.9,-6.2,3.2,-6.9).curveTo(2.4,-7.6,1.5,-7.9).curveTo(0.5,-8.3,-0.6,-8.4).lineTo(-0.9,-8.4).curveTo(-1.8,-8.4,-2.8,-8).closePath();
	this.shape_11.setTransform(7.4054,25.5212,0.8708,0.8708);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.5,7.4).lineTo(-2,7.2).lineTo(-3.8,5.8).curveTo(-4.6,5.1,-5.5,4).curveTo(-6.2,3.1,-6.9,1.8).curveTo(-7.5,0.7,-7.7,-0.7).curveTo(-7.9,-2.4,-7.3,-3.3).curveTo(-6.8,-4.1,-4.9,-4.4).lineTo(1.9,-4.7).lineTo(1.4,-7).lineTo(2,-7.3).lineTo(2.6,-7.5).lineTo(3,-7.4).curveTo(3.1,-7.3,3.1,-7.3).curveTo(3.2,-7.3,3.2,-7.2).curveTo(3.2,-7.1,3.2,-7.1).curveTo(3.2,-7,3.2,-6.9).lineTo(3.5,-4.9).lineTo(5.8,-5.5).lineTo(6.7,-5.9).lineTo(7.5,-4.8).lineTo(7.7,-4).curveTo(7.8,-3.4,7.4,-3.1).curveTo(7,-2.7,6.5,-2.7).lineTo(3.9,-2.5).curveTo(4.3,-0.6,4.6,0).lineTo(5.1,1.3).lineTo(4.6,1.7).lineTo(4,1.9).lineTo(3.5,1.8).curveTo(3.3,1.8,3.1,1.3).lineTo(2.6,-0.1).lineTo(2.2,-2.5).lineTo(-0.7,-2.5).lineTo(-3.4,-2.3).curveTo(-4.3,-2.2,-4.8,-2).lineTo(-5.5,-1.4).curveTo(-5.7,-1.1,-5.8,-0.6).lineTo(-5.7,0.2).curveTo(-5.6,1.1,-5.1,1.9).curveTo(-4.7,2.8,-3.9,3.6).lineTo(-2.3,5.1).curveTo(-1.3,5.8,-0.5,6.2).lineTo(-0.7,7).curveTo(-0.9,7.4,-1.2,7.4).lineTo(-1.3,7.5).lineTo(-1.5,7.4).closePath();
	this.shape_12.setTransform(6.7309,10.2501,0.8708,0.8708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.7,73.7);


(lib.knife = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#181719").beginStroke().moveTo(-4.7,105.7).curveTo(-7.5,100.9,-7,94.5).curveTo(-6.6,89.6,-6,57.7).lineTo(-5.4,26).curveTo(-5.2,24.4,-4.7,23.6).lineTo(-4.1,23.2).lineTo(-5,23.1).lineTo(-4.9,18.4).curveTo(-4.9,18,-2.9,17.9).curveTo(-3.1,12.3,-4.7,7.9).curveTo(-6.4,3.4,-8.7,2.8).curveTo(-11,2.2,-11.7,-1.7).lineTo(-12.2,-8.5).curveTo(-14.5,-97.9,3.8,-109.8).curveTo(6.4,-111.5,7.8,-109.7).curveTo(8.9,-108.3,8.6,-105.7).curveTo(8.4,-104,8.5,-87.6).lineTo(8.6,-63.2).curveTo(8.6,-22.1,8.3,17.8).curveTo(10.4,18,10.4,18.4).lineTo(10.4,23.1).lineTo(9.6,23.2).lineTo(10.1,23.6).curveTo(10.7,24.4,10.8,26).lineTo(11.5,57.7).curveTo(12.1,89.6,12.4,94.5).curveTo(12.9,100.9,10.1,105.7).curveTo(7.2,110.6,2.7,110.6).curveTo(-1.8,110.6,-4.7,105.7).closePath();
	this.shape.setTransform(10.5473,93.5187,0.8475,0.8455);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.1,187.1);


(lib.fork = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#181719").beginStroke().moveTo(-7.4,96.8).curveTo(-10.2,92,-9.7,85.6).curveTo(-9.3,80.7,-8.7,48.8).lineTo(-8.1,17.1).curveTo(-8,15.5,-7.4,14.7).lineTo(-6.9,14.3).lineTo(-7.7,14.2).lineTo(-7.7,9.5).curveTo(-7.7,9.1,-5.7,9).curveTo(-2.9,-16.8,-4.6,-20.6).curveTo(-5.2,-22.1,-10.1,-28.5).curveTo(-14.3,-34,-15,-37.9).curveTo(-16,-43.2,-14.3,-72.1).curveTo(-12.6,-101.2,-11,-101.7).curveTo(-9.8,-102.1,-9.4,-78.8).curveTo(-9.1,-54.4,-8.9,-53.9).curveTo(-8.4,-52.7,-7.1,-52.9).curveTo(-5.8,-53,-5.8,-54.6).curveTo(-5.8,-63.3,-5.4,-79).curveTo(-4.8,-101.7,-3.8,-101.7).curveTo(-3,-101.7,-2.7,-78.8).curveTo(-2.4,-55.5,-2,-54.9).curveTo(-1.5,-54.2,-0,-53.5).curveTo(1.5,-54.2,2,-54.9).curveTo(2.4,-55.5,2.7,-78.8).curveTo(3,-101.7,3.8,-101.7).curveTo(4.8,-101.7,5.4,-79).curveTo(5.8,-63.3,5.8,-54.6).curveTo(5.8,-53,7.1,-52.9).curveTo(8.4,-52.7,8.9,-53.9).curveTo(9.1,-54.4,9.4,-78.8).curveTo(9.8,-102.1,11,-101.7).curveTo(12.6,-101.2,14.3,-72.1).curveTo(16,-43.2,15,-37.9).curveTo(14.3,-34,10.1,-28.5).curveTo(5.2,-22,4.6,-20.6).curveTo(3.6,-18.3,4.2,-8).curveTo(4.6,-0.7,5.7,9).curveTo(7.7,9.1,7.7,9.5).lineTo(7.7,14.2).lineTo(6.9,14.3).lineTo(7.4,14.7).curveTo(8,15.5,8.1,17.1).lineTo(8.7,48.8).curveTo(9.3,80.6,9.7,85.6).curveTo(10.2,92,7.4,96.8).curveTo(4.5,101.7,-0,101.7).curveTo(-4.5,101.7,-7.4,96.8).closePath();
	this.shape.setTransform(12.8591,85.0007,0.8371,0.836);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,170);


(lib.eris = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.4,9.3).curveTo(-6.7,8.6,-6.9,7.3).lineTo(-7.1,4.6).curveTo(-7.1,4.1,-6.3,4.1).lineTo(-5.8,4.2).lineTo(-5.5,4.6).curveTo(-4.7,7,-3.4,8.2).curveTo(-2,9.4,-0.3,9.4).curveTo(1.1,9.4,2,8.5).curveTo(2.9,7.5,2.9,6.2).curveTo(2.9,4.9,2,3.9).curveTo(1.2,3.1,-1,1.7).curveTo(-3.7,0.2,-4.9,-1.3).curveTo(-6.2,-2.8,-6.2,-4.9).curveTo(-6.2,-7.6,-4.2,-9.4).curveTo(-2.3,-11.1,1.2,-11.1).curveTo(2.6,-11.1,3.8,-10.8).curveTo(5,-10.5,5.6,-10.1).curveTo(6,-9.6,6.3,-8.3).curveTo(6.6,-7,6.6,-5.7).curveTo(6.6,-5.6,6.6,-5.6).curveTo(6.5,-5.5,6.5,-5.5).curveTo(6.5,-5.5,6.5,-5.4).curveTo(6.4,-5.4,6.4,-5.4).lineTo(5.9,-5.3).curveTo(5.5,-5.3,5.2,-5.5).curveTo(4.9,-5.6,4.8,-5.8).curveTo(3.4,-9.5,0.7,-9.5).curveTo(-0.4,-9.5,-1.5,-8.7).curveTo(-2.4,-7.9,-2.4,-6.6).curveTo(-2.4,-5.5,-1.6,-4.6).curveTo(-0.8,-3.7,1.1,-2.6).curveTo(4.5,-0.7,5.7,0.7).curveTo(7.1,2.2,7.1,4.6).curveTo(7.1,7.6,4.9,9.3).curveTo(2.9,11.1,-0.8,11.1).curveTo(-4.3,11.1,-6.4,9.3).closePath();
	this.shape.setTransform(67.9264,21.6603,0.8708,0.8708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.3).curveTo(-4.4,5.7,-3.6,5.6).curveTo(-1.6,5.1,-0.2,3.8).curveTo(1.2,2.6,1.2,0.4).curveTo(1.2,-0.3,0.5,-1).curveTo(-0.1,-1.7,-0.9,-1.9).curveTo(-2,-2,-2.5,-2.6).curveTo(-3.2,-3.3,-3.2,-4.3).curveTo(-3.2,-5.4,-2.3,-6.1).curveTo(-1.4,-6.9,-0.2,-6.9).curveTo(1.9,-6.9,3.1,-5.5).curveTo(4.4,-4.1,4.4,-1.9).curveTo(4.4,0.7,3.1,2.7).curveTo(1.9,4.6,0.1,5.8).curveTo(-1.8,6.9,-3.4,6.9).curveTo(-4.4,6.9,-4.4,6.3).closePath();
	this.shape_1.setTransform(59.6758,6.0299,0.8708,0.8708);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.3,15.9).lineTo(-2.2,15.9).curveTo(-3.3,16.1,-4.7,16.1).curveTo(-5.7,16.1,-5.7,15.5).curveTo(-5.7,15,-4.6,14.7).curveTo(-3.3,14.3,-2.9,13.9).curveTo(-2.3,13.5,-2.3,12.7).lineTo(-2.3,1.7).curveTo(-2.3,-1.5,-4.6,-2).curveTo(-5.2,-2,-5.1,-2.7).curveTo(-5.1,-3.3,-4.7,-3.3).curveTo(-1.3,-4.1,1.6,-6).lineTo(2.4,-6.5).curveTo(2.9,-6.5,2.9,-6).lineTo(2.6,-3.7).curveTo(2.3,-0.6,2.3,1.1).lineTo(2.3,12.7).curveTo(2.3,13.4,2.9,13.9).curveTo(3.3,14.4,4.6,14.7).curveTo(5.7,15,5.7,15.5).curveTo(5.7,16.1,4.8,16.1).curveTo(3.5,16.1,2.3,15.9).closePath().moveTo(-2.3,-10.8).curveTo(-3.2,-11.7,-3.2,-13).curveTo(-3.2,-14.4,-2.3,-15.2).curveTo(-1.4,-16.1,-0.2,-16.1).curveTo(1.2,-16.1,2.1,-15.2).curveTo(3.1,-14.3,3.1,-13).curveTo(3.1,-11.8,2.1,-10.8).curveTo(1.2,-10,-0.2,-9.9).curveTo(-1.4,-10,-2.3,-10.8).closePath();
	this.shape_2.setTransform(48.5299,16.8057,0.8708,0.8708);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.5,11).lineTo(-4.9,11).curveTo(-6,11.2,-7.4,11.2).curveTo(-8.5,11.2,-8.5,10.6).curveTo(-8.5,10.2,-8.2,10).curveTo(-7.9,9.8,-7.3,9.7).curveTo(-6.3,9.5,-5.8,9).curveTo(-5.4,8.5,-5.4,7.7).lineTo(-5.4,-3.5).curveTo(-5.4,-5,-5.8,-5.7).curveTo(-6.1,-6.5,-7.2,-6.8).lineTo(-7.6,-7.1).lineTo(-7.8,-7.6).curveTo(-7.8,-8.1,-7.3,-8.3).curveTo(-5.7,-8.7,-4.4,-9.4).lineTo(-1.6,-10.7).curveTo(-0.9,-11.2,-0.7,-11.2).curveTo(-0.3,-11.2,-0.3,-10.7).lineTo(-0.5,-6.8).curveTo(-0.5,-6.8,-0.5,-6.7).curveTo(-0.5,-6.7,-0.5,-6.7).curveTo(-0.4,-6.7,-0.4,-6.6).curveTo(-0.4,-6.6,-0.4,-6.6).curveTo(1,-8.3,2.6,-9.4).curveTo(4.2,-10.4,5.7,-10.4).curveTo(7.1,-10.4,7.8,-9.9).curveTo(8.5,-9.3,8.5,-8.5).curveTo(8.5,-7.5,7.7,-6.5).curveTo(7,-5.4,6.1,-5.4).curveTo(5.8,-5.4,4.5,-5.9).lineTo(3.7,-6.3).curveTo(3.1,-6.5,2.8,-6.5).curveTo(1.4,-6.5,0.4,-5.5).curveTo(-0.6,-4.5,-0.6,-2).lineTo(-0.6,7.6).curveTo(-0.6,8.3,0,8.8).curveTo(0.8,9.3,2,9.7).curveTo(2.7,9.9,2.9,10.1).curveTo(3.2,10.3,3.2,10.6).curveTo(3.2,11.2,2.2,11.2).curveTo(0.8,11.2,-0.5,11).closePath();
	this.shape_3.setTransform(33.226,21.0943,0.8708,0.8708);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.5,16.5).lineTo(-8.5,16.7).lineTo(-11.8,16.8).curveTo(-13.1,16.8,-13.1,16.2).curveTo(-13.1,15.6,-11.7,15.3).curveTo(-9.8,14.8,-8.9,14.1).curveTo(-8.1,13.2,-8.1,11.6).lineTo(-8.1,-11.5).curveTo(-8.1,-13.2,-8.8,-13.9).curveTo(-9.5,-14.7,-11.4,-15.1).curveTo(-12.9,-15.4,-12.9,-16.1).curveTo(-12.9,-16.4,-12.5,-16.6).curveTo(-12.2,-16.8,-11.6,-16.8).lineTo(9.6,-16.8).curveTo(10,-16.8,10.3,-16.7).curveTo(10.5,-16.5,10.6,-16.2).lineTo(10.9,-14.7).curveTo(11.4,-11.6,11.4,-10.5).curveTo(11.4,-10,11.2,-9.8).curveTo(11,-9.6,10.7,-9.6).curveTo(10.3,-9.6,10,-10.2).lineTo(9.1,-12.5).lineTo(8.6,-13.4).curveTo(7.3,-14.8,5.2,-14.8).lineTo(-0.6,-14.8).curveTo(-1.4,-14.8,-2,-14.2).curveTo(-2.7,-13.7,-2.7,-12.9).lineTo(-2.7,-2.5).curveTo(-2.7,-2,-2.4,-1.7).curveTo(-2.1,-1.4,-1.6,-1.4).lineTo(3.2,-1.4).curveTo(4.5,-1.4,5.1,-2).curveTo(5.8,-2.7,6.1,-4.1).curveTo(6.5,-5.1,7.1,-5.1).curveTo(7.4,-5.1,7.6,-4.9).curveTo(7.8,-4.6,7.8,-4.2).lineTo(7.7,3.7).curveTo(7.7,4.5,7.3,4.5).curveTo(6.5,4.5,6,3.1).curveTo(5.7,1.7,5.1,1.1).curveTo(4.6,0.4,3.6,0.4).lineTo(-1.1,0.4).curveTo(-1.9,0.4,-2.3,0.7).curveTo(-2.7,1,-2.7,1.7).lineTo(-2.7,11.5).curveTo(-2.7,13.2,-2,13.9).curveTo(-1.3,14.6,0.4,14.6).lineTo(4.4,14.6).curveTo(7.5,14.6,8.8,13.7).curveTo(9.6,13.2,10.3,12.2).curveTo(10.9,11.3,11.7,9.7).curveTo(12.1,9.1,12.6,9.1).curveTo(13.1,9.1,13.1,9.9).curveTo(13.1,10.5,12.6,12.6).lineTo(11.5,16).curveTo(11.2,16.8,10.7,16.8).closePath();
	this.shape_4.setTransform(11.4132,16.2615,0.8708,0.8708);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.1,31.3);


(lib.en = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#181719").beginStroke().moveTo(-34.1,80.7).curveTo(-49.8,74.1,-62,62).curveTo(-74.1,49.8,-80.7,34.1).curveTo(-87.6,17.8,-87.6,0).curveTo(-87.6,-17.8,-80.7,-34.1).curveTo(-74.1,-49.8,-62,-62).curveTo(-49.8,-74.1,-34.1,-80.8).curveTo(-17.8,-87.6,-0,-87.6).curveTo(17.8,-87.6,34.1,-80.8).curveTo(49.8,-74.1,62,-62).curveTo(74.1,-49.8,80.8,-34.1).curveTo(87.6,-17.8,87.6,0).curveTo(87.6,17.8,80.8,34.1).curveTo(74.1,49.8,62,62).curveTo(49.8,74.1,34.1,80.7).curveTo(17.8,87.6,-0,87.6).curveTo(-17.8,87.6,-34.1,80.7).closePath();
	this.shape.setTransform(87.625,87.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.3,175.3);


(lib.dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.Path();
	this.instance.setTransform(0,0,0.8708,0.8708);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({rotation:180,x:164.6,y:164.6},0).wait(15).to({rotation:0,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.6,164.6);


(lib.enmov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.en = new lib.dot("synched",0);
	this.en.name = "en";
	this.en.setTransform(82.3,82.3,1,1,0,0,0,82.3,82.3);

	this.timeline.addTween(cjs.Tween.get(this.en).to({rotation:360,startPosition:29},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-34.1,232.7,232.79999999999998);


// stage content:
(lib.topanim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [119];
	// timeline functions:
	this.frame_119 = function() {
		this.stop();
		top_mv_anim_end();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(119).call(this.frame_119).wait(5));

	// dot
	this.en = new lib.dot("synched",29);
	this.en.name = "en";
	this.en.setTransform(150,100,1,1,0,0,0,82.3,82.3);

	this.instance = new lib.enmov();
	this.instance.setTransform(150,100,1,1,0,0,0,82.3,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.en}]},71).to({state:[{t:this.instance}]},46).wait(7));

	// フォーク
	this.instance_1 = new lib.fork("synched",0);
	this.instance_1.setTransform(41.8,106.3,1,1,0,0,0,12.8,85);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({regX:12.9,scaleX:1.0447,scaleY:1.0471,x:42.4,y:107.8,alpha:1},7).to({regX:12.8,scaleX:1,scaleY:1,x:41.8,y:106.3},3).wait(6).to({startPosition:0},0).to({rotation:-21.2325,x:41.85,y:106.35},9,cjs.Ease.quartOut).to({rotation:0,x:41.8,y:106.3},10,cjs.Ease.quintIn).wait(6));

	// ナイフ
	this.instance_2 = new lib.knife("synched",0);
	this.instance_2.setTransform(256.4,97.75,1,1,0,0,0,10.5,93.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(83).to({_off:false},0).to({regX:10.6,scaleX:1.0378,scaleY:1.0425,x:256.85,y:99.15,alpha:1},7).to({regX:10.5,scaleX:1,scaleY:1,x:256.4,y:97.75},3).wait(6).to({startPosition:0},0).to({rotation:18.9406,x:256.45},9,cjs.Ease.quartOut).to({rotation:0,x:256.4},10,cjs.Ease.quintIn).wait(6));

	// eri's
	this.instance_3 = new lib.eris("synched",0);
	this.instance_3.setTransform(149.7,100.2,0.5945,0.5945,0,0,0,37.1,15.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({regY:15.7,scaleX:1,scaleY:1,x:149.65,y:100.15,alpha:1},9,cjs.Ease.backOut).wait(59));

	// table
	this.instance_4 = new lib.table("synched",0);
	this.instance_4.setTransform(149.55,139.35,1,1,0,0,0,70.8,36.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({alpha:1},12).wait(47));

	// 円
	this.instance_5 = new lib.en("synched",0);
	this.instance_5.setTransform(149.55,100,0.0285,0.0285,0,0,0,91.2,89.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({regX:92.5,regY:90.9,scaleX:0.9999,scaleY:0.9999,x:154.85,y:103.75},20,cjs.Ease.bounceOut).wait(2).to({regX:87.6,regY:87.6,scaleX:1,scaleY:1,x:149.95,y:100.45},0).wait(73));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,196.9);
// library properties:
lib.properties = {
	id: '06F9780395164588B8D0A7AD103BAFB2',
	width: 300,
	height: 200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"/_assets/images/Path.png", id:"Path"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['06F9780395164588B8D0A7AD103BAFB2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
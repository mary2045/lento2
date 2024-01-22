(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lento_atlas_1", frames: [[0,0,1739,1282]]},
		{name:"lento_atlas_2", frames: [[931,0,1055,1589],[0,0,929,1941]]},
		{name:"lento_atlas_3", frames: [[0,0,888,1763]]},
		{name:"lento_atlas_4", frames: [[0,0,1399,1056]]},
		{name:"lento_atlas_5", frames: [[0,0,1399,1056]]},
		{name:"lento_atlas_6", frames: [[0,0,1372,1032],[0,1034,1428,735]]},
		{name:"lento_atlas_7", frames: [[0,1026,1030,751],[0,0,1024,1024]]},
		{name:"lento_atlas_8", frames: [[1032,0,842,595],[0,0,1030,751],[0,753,1030,751],[1032,597,842,595],[1032,1194,842,595]]},
		{name:"lento_atlas_9", frames: [[0,0,1075,462],[0,464,1068,455]]}
];


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



(lib.adios = function() {
	this.initialize(ss["lento_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avanzar = function() {
	this.initialize(ss["lento_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia = function() {
	this.initialize(ss["lento_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.avanzarpngcopia2 = function() {
	this.initialize(ss["lento_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bniña = function() {
	this.initialize(img.bniña);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1754,2207);


(lib.bniño = function() {
	this.initialize(img.bniño);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2451,1904);


(lib.bocadillo1pngcopia2 = function() {
	this.initialize(ss["lento_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bocadillo2 = function() {
	this.initialize(ss["lento_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bocadillo3pngcopia = function() {
	this.initialize(ss["lento_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.camara = function() {
	this.initialize(ss["lento_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.elige = function() {
	this.initialize(ss["lento_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.felizzz = function() {
	this.initialize(ss["lento_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.genial = function() {
	this.initialize(ss["lento_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.movil = function() {
	this.initialize(ss["lento_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.niña = function() {
	this.initialize(img.niña);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1031,2118);


(lib.niñapngcopia = function() {
	this.initialize(img.niñapngcopia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1031,2118);


(lib.piscinafondo = function() {
	this.initialize(ss["lento_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.portada = function() {
	this.initialize(ss["lento_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tristepngcopia2 = function() {
	this.initialize(ss["lento_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.undiaenlapiscina = function() {
	this.initialize(ss["lento_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.upsspngcopia = function() {
	this.initialize(ss["lento_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.portada();
	this.instance.setTransform(-400,-300.45,0.9501,1.01);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(-400,-300.4,800,600.9), null);


(lib.Símbolo13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia2();
	this.instance.setTransform(-48.9,-47.3,0.0949,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-48.9,-47.3,97.8,94.69999999999999), null);


(lib.Símbolo12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzarpngcopia();
	this.instance.setTransform(51.65,46.8,0.1002,0.1246,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-51.6,-46.7,103.30000000000001,93.5), null);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bniño();
	this.instance.setTransform(-74,-57.5,0.0604,0.0604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-74,-57.5,148.1,115), null);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.niñapngcopia();
	this.instance.setTransform(0,0,0.3798,0.3798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391.6,804.4);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.camara();
	this.instance.setTransform(0,0,0.0847,0.0847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.bniña();
	this.instance.setTransform(-63.05,-79.35,0.0719,0.0719);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-63,-79.3,126.1,158.7), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.niña();
	this.instance.setTransform(0,0,0.1865,0.1865);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.3,395);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.avanzar();
	this.instance.setTransform(0,0,0.0958,0.1263);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.movilb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.movil();
	this.instance.setTransform(0,0,0.0941,0.0941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_2 = new lib.Símbolo5();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(63.05,79.35);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,158.7);


(lib.Símbolo45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_6 = new lib.Símbolo6();
	this.button_6.name = "button_6";
	this.button_6.setTransform(73.7,54.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.3,108.6);


(lib.Símbolo44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_5 = new lib.movilb();
	this.button_5.name = "button_5";
	this.button_5.setTransform(49.6,74.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99.3,149.5);


(lib.Símbolo43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_4 = new lib.Símbolo11();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(74,57.5);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148.1,115);


(lib.Símbolo42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_8 = new lib.Símbolo13();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.setTransform(48.9,47.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.movieClip_7 = new lib.Símbolo12();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.setTransform(51.6,46.75);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.Símbolo48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_18 = new lib.Símbolo14();
	this.button_18.name = "button_18";
	this.button_18.setTransform(51.6,46.8,1,1,0,0,0,51.6,46.8);
	new cjs.ButtonHelper(this.button_18, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,93.6);


(lib.Símbolo47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_26 = new lib.Símbolo31();
	this.button_26.name = "button_26";
	this.button_26.setTransform(48.9,47.3,1,1,0,0,0,48.9,47.3);
	new cjs.ButtonHelper(this.button_26, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,94.7);


(lib.Símbolo24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_9 = new lib.Símbolo15();
	this.button_9.name = "button_9";
	this.button_9.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_19 = new lib.Símbolo24();
	this.button_19.name = "button_19";
	this.button_19.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_19, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


(lib.Símbolo41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.button_27 = new lib.Símbolo32();
	this.button_27.name = "button_27";
	this.button_27.setTransform(49.4,47.4,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_27, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_27).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,94.9);


// stage content:
(lib.lento = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [7,109,200,212,225,229];
	// timeline functions:
	this.frame_7 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(6);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_35.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_54.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_54()
		{
			this.gotoAndPlay(7);
		}
	}
	this.frame_109 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(109);
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		
		this.button_36.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_55.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_55()
		{
			this.gotoAndPlay(110);
		}
		
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(109);
	}
	this.frame_200 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(200);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_37.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_56.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_56()
		{
			this.gotoAndPlay(213);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_38.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_57.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_57()
		{
			this.gotoAndPlay(213);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_39.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_58.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_58()
		{
			this.gotoAndPlay(213);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_40.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_59.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_59()
		{
			this.gotoAndPlay(201);
		}
	}
	this.frame_212 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(212);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_41.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_63.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_63()
		{
			this.gotoAndPlay(227);
		}
	}
	this.frame_225 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(225);
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_42.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_61.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_61()
		{
			this.gotoAndPlay(135);
		}
	}
	this.frame_229 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop(229);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(102).call(this.frame_109).wait(91).call(this.frame_200).wait(12).call(this.frame_212).wait(13).call(this.frame_225).wait(4).call(this.frame_229).wait(1));

	// adios
	this.instance = new lib.adios();
	this.instance.setTransform(0,0,0.9526,1.0107);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(226).to({_off:false},0).wait(4));

	// Capa_3
	this.button_42 = new lib.Símbolo48();
	this.button_42.name = "button_42";
	this.button_42.setTransform(81.6,530.8,1,1,0,0,0,51.6,46.8);
	this.button_42._off = true;
	new cjs.ButtonHelper(this.button_42, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_42).wait(225).to({_off:false},0).to({_off:true},1).wait(4));

	// triste
	this.instance_1 = new lib.tristepngcopia2();
	this.instance_1.setTransform(88,246,0.3287,0.3287);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(213).to({_off:false},0).to({_off:true},13).wait(4));

	// Capa_8
	this.instance_2 = new lib.upsspngcopia();
	this.instance_2.setTransform(133,54,0.5788,0.5788);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(221).to({_off:false},0).to({_off:true},5).wait(4));

	// Capa_6
	this.button_41 = new lib.Símbolo47();
	this.button_41.name = "button_41";
	this.button_41.setTransform(728.9,529.3,1,1,0,0,0,48.9,47.3);
	this.button_41._off = true;
	new cjs.ButtonHelper(this.button_41, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_41).wait(212).to({_off:false},0).to({_off:true},1).wait(17));

	// feliz
	this.instance_3 = new lib.felizzz();
	this.instance_3.setTransform(62,258,0.3838,0.3894);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(201).to({_off:false},0).to({_off:true},12).wait(17));

	// genial
	this.instance_4 = new lib.genial();
	this.instance_4.setTransform(174,54,0.499,0.662);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(208).to({_off:false},0).to({_off:true},5).wait(17));

	// b_niña
	this.movieClip_2 = new lib.Símbolo5();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(713.05,407.35);

	this.button_40 = new lib.Símbolo46();
	this.button_40.name = "button_40";
	this.button_40.setTransform(713.1,407.4,1,1,0,0,0,63.1,79.4);
	new cjs.ButtonHelper(this.button_40, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_2}]},185).to({state:[{t:this.button_40}]},15).to({state:[]},1).wait(29));

	// camara
	this.button_6 = new lib.Símbolo6();
	this.button_6.name = "button_6";
	this.button_6.setTransform(668.7,117.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_39 = new lib.Símbolo45();
	this.button_39.name = "button_39";
	this.button_39.setTransform(668.7,117.3,1,1,0,0,0,73.7,54.3);
	new cjs.ButtonHelper(this.button_39, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_6}]},168).to({state:[{t:this.button_39}]},32).to({state:[]},1).wait(29));

	// movil
	this.button_5 = new lib.movilb();
	this.button_5.name = "button_5";
	this.button_5.setTransform(413.6,124.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.button_38 = new lib.Símbolo44();
	this.button_38.name = "button_38";
	this.button_38.setTransform(413.6,124.8,1,1,0,0,0,49.6,74.8);
	new cjs.ButtonHelper(this.button_38, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_5}]},151).to({state:[{t:this.button_38}]},49).to({state:[]},1).wait(29));

	// bañador_niño
	this.movieClip_4 = new lib.Símbolo11();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.setTransform(183,114.5);

	this.button_37 = new lib.Símbolo43();
	this.button_37.name = "button_37";
	this.button_37.setTransform(183,114.5,1,1,0,0,0,74,57.5);
	new cjs.ButtonHelper(this.button_37, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieClip_4}]},136).to({state:[{t:this.button_37}]},64).to({state:[]},1).wait(29));

	// niña
	this.instance_5 = new lib.Símbolo2("synched",0);
	this.instance_5.setTransform(-148,404.15,1,1,0,0,0,96.1,197.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).wait(1).to({x:-135,y:403.2},0).wait(1).to({x:-122.05,y:402.25},0).wait(1).to({x:-109.05,y:401.3},0).wait(1).to({x:-96.1,y:400.4},0).wait(1).to({x:-83.15,y:399.45},0).wait(1).to({x:-70.15,y:398.5},0).wait(1).to({x:-57.2,y:397.55},0).wait(1).to({x:-44.2,y:396.65},0).wait(1).to({x:-31.25,y:395.7},0).wait(1).to({x:-18.3,y:394.75},0).wait(1).to({x:-5.3,y:393.85},0).wait(1).to({x:7.65,y:392.9},0).wait(1).to({x:20.65,y:391.95},0).wait(1).to({x:33.6,y:391},0).wait(1).to({x:46.55,y:390.1},0).wait(1).to({x:59.55,y:389.15},0).wait(1).to({x:72.5,y:388.2},0).wait(1).to({x:85.5,y:387.3},0).wait(1).to({x:98.4,y:386.35},0).wait(1).to({x:111.4,y:385.4},0).wait(1).to({x:124.35,y:384.45},0).wait(1).to({x:137.3,y:383.55},0).wait(1).to({x:150.3,y:382.6},0).wait(1).to({x:163.25,y:381.65},0).wait(1).to({x:176.25,y:380.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(29));

	// Capa_2
	this.instance_6 = new lib.elige();
	this.instance_6.setTransform(199,183,0.3394,0.3394);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(196).to({_off:false},0).to({_off:true},5).wait(29));

	// f_piscina
	this.instance_7 = new lib.undiaenlapiscina();
	this.instance_7.setTransform(0,0,0.7813,0.5859);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(110).to({_off:false},0).to({_off:true},116).wait(4));

	// Capa_11
	this.button_1 = new lib.Símbolo1();
	this.button_1.name = "button_1";
	this.button_1.setTransform(737.25,546.55,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_36 = new lib.Símbolo42();
	this.button_36.name = "button_36";
	this.button_36.setTransform(737.25,546.55,1,1,0,0,0,49.4,47.4);
	new cjs.ButtonHelper(this.button_36, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_1}]},105).to({state:[{t:this.button_36}]},4).to({state:[]},1).wait(120));

	// niña
	this.instance_8 = new lib.Símbolo8("synched",0);
	this.instance_8.setTransform(286.15,658.2,1,1,0,0,0,195.8,402.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({x:281.75,y:652.3},0).wait(1).to({x:277.35,y:646.4},0).wait(1).to({x:272.95,y:640.5},0).wait(1).to({x:268.6,y:634.65},0).wait(1).to({x:264.2,y:628.75},0).wait(1).to({x:259.8,y:622.85},0).wait(1).to({x:255.4,y:617},0).wait(1).to({x:251.05,y:611.1},0).wait(1).to({x:246.65,y:605.2},0).wait(1).to({x:242.25,y:599.35},0).wait(1).to({x:237.85,y:593.45},0).wait(1).to({x:233.5,y:587.55},0).wait(1).to({x:229.1,y:581.7},0).wait(1).to({x:224.7,y:575.8},0).wait(1).to({x:220.3,y:569.9},0).wait(1).to({x:215.95,y:564.05},0).wait(1).to({x:215.9},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:215.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:215.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:215.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:215.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:215.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(120));

	// Capa_9
	this.instance_9 = new lib.bocadillo3pngcopia();
	this.instance_9.setTransform(350,30,0.3279,0.3279);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(83).to({_off:false},0).to({_off:true},27).wait(120));

	// explicacion
	this.instance_10 = new lib.bocadillo2();
	this.instance_10.setTransform(340,41,0.3274,0.3445);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},0).to({_off:true},26).wait(147));

	// saludo
	this.instance_11 = new lib.bocadillo1pngcopia2();
	this.instance_11.setTransform(330,50,0.3425,0.3425);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},0).to({_off:true},30).wait(173));

	// entrada
	this.instance_12 = new lib.piscinafondo();
	this.instance_12.setTransform(0,0,0.9501,1.0084);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(8).to({_off:false},0).to({_off:true},102).wait(120));

	// flecha
	this.button_35 = new lib.Símbolo41();
	this.button_35.name = "button_35";
	this.button_35.setTransform(726.4,534.4,1,1,0,0,0,49.4,47.4);
	this.button_35._off = true;
	new cjs.ButtonHelper(this.button_35, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_35).wait(7).to({_off:false},0).to({_off:true},1).wait(222));

	// Portada
	this.movieClip_10 = new lib.Símbolo16();
	this.movieClip_10.name = "movieClip_10";
	this.movieClip_10.setTransform(400,301.45);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_10).to({_off:true},8).wait(222));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(155.9,300,652.8000000000001,760.4000000000001);
// library properties:
lib.properties = {
	id: '0A35B6DA732CB14F9FD7BCC85A5105D7',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bniña.png", id:"bniña"},
		{src:"images/bniño.png", id:"bniño"},
		{src:"images/niña.png", id:"niña"},
		{src:"images/niñapngcopia.png", id:"niñapngcopia"},
		{src:"images/lento_atlas_1.png", id:"lento_atlas_1"},
		{src:"images/lento_atlas_2.png", id:"lento_atlas_2"},
		{src:"images/lento_atlas_3.png", id:"lento_atlas_3"},
		{src:"images/lento_atlas_4.png", id:"lento_atlas_4"},
		{src:"images/lento_atlas_5.png", id:"lento_atlas_5"},
		{src:"images/lento_atlas_6.png", id:"lento_atlas_6"},
		{src:"images/lento_atlas_7.png", id:"lento_atlas_7"},
		{src:"images/lento_atlas_8.png", id:"lento_atlas_8"},
		{src:"images/lento_atlas_9.png", id:"lento_atlas_9"}
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
an.compositions['0A35B6DA732CB14F9FD7BCC85A5105D7'] = {
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
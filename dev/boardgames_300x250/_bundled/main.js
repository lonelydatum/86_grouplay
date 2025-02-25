(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

var READ = {
	boardgames: {
		t1: 1.8,
		t2: 2.5
	},
	pickleball: {
		t1: 1.8,
		t2: 2.5
	},
	ski: {
		t1: 1.2,
		t2: 2.5
	}

};

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	tl.set("#olg", { opacity: 1 });
	// tl.set("#olg #bluewedge1", {scale:1})
	return tl;
}

function stag(vh) {
	return _extends({ duration: .3, opacity: 0, stagger: .15 }, vh);
}

function start_landscape(barOptions, barOptions2) {
	var vh = arguments.length <= 2 || arguments[2] === undefined ? { x: -size.w } : arguments[2];
}

function start() {

	var vh = size.w / size.h > 1.5 ? { y: size.h } : { x: -size.w };

	var tl = init();
	// return

	tl.add("start");

	tl.from('.t1', stag(vh), "start");

	tl.to(".t1", { opacity: 0, duration: .3 }, "+=" + READ[universalBanner.name].t1);
	tl.from('.t2', stag(vh));
	tl.from('.frame1 .logo_group', { scale: 0, duration: .35, ease: "back.out" }, "+=.2");

	tl.add("f2", "+=" + READ[universalBanner.name].t2);
	tl.set(".frame1", { opacity: 0 }, "f2");

	tl.set(".frame2", { opacity: 1 }, "f2");

	// tl.set("#olg", {opacity:0})
	// tl.set(["#bluewedge2", "#redwedge2"], {visibility:"hidden"})
	// tl.set(["#bluewedge1", "#redwedge1"], {transformOrigin:"0% 100%", x:0, y:0, scaleX:1, scaleY:0})

	tl.from('.end_text', { opacity: 0, duration: .3 }, "+=.3");
	tl.add(phone());
	tl.add("ender", "+=.5");
	tl.to(".end_text", { x: 0, y: 0, duration: .3 }, "ender");
	tl.from(['.end_legal', '.end_cta'], { opacity: 0 });

	tl.add((0, _proline.olg)());
	// tl.play("f2")
}

function phone() {
	var tl = new TimelineMax();

	tl.from('.phone', { y: "+=" + size.h });

	var TIME = .3;
	var SCREEN_WIDTH = 73;
	tl.from(".end_screen_1_max", { duration: .3, scale: 0 });

	tl.add("screen2", "+=.5");
	tl.to(".end_screen_1_max", { duration: .3, opacity: 0 }, "screen2");
	tl.to(".screen .items", { duration: TIME, x: -SCREEN_WIDTH }, "screen2");
	tl.from(".end_screen_2_649", { duration: .3, scale: 0 });

	tl.add("screen3", "+=.5");
	tl.to(".end_screen_2_649", { duration: .3, opacity: 0 }, "screen3");
	tl.to(".screen .items", { duration: TIME, x: -SCREEN_WIDTH * 2 }, "screen3");
	tl.from(".end_screen_3_group", { duration: .3, scale: 0 });

	return tl;
}

exports.size = size;
exports.init = init;
exports.start = start;
exports.start_landscape = start_landscape;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.start)();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map

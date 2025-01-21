import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ = {
	boardgames:{
		t1: 1.8,
		t2: 2.5,		
	},
	pickleball:{
		t1: 1.8,
		t2: 2.5,		
	},
	ski:{
		t1: 1.2,
		t2: 2.5,		
	},
	
}

let SCREEN_WIDTH = 74

function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .15, ...vh }
}


function start_landscape(barOptions, barOptions2, vh={x:-size.w}){
	

}

function start(){

	const vh = size.w/size.h>1.5?{y:size.h}:{x:-size.w};
	
	const tl = init()	
	
	tl.add("start")
	

	tl.from('.t1', stag(vh), "start");	
	
	
	tl.to(".t1", {opacity:0, duration:.3}, `+=${READ[universalBanner.name].t1}`)
	tl.from('.t2', stag(vh));		
	tl.from('.frame1 .logo_group', {scale:0, duration:.35, ease:"back.out"}, "+=.2");		

	tl.add("f2", `+=${READ[universalBanner.name].t2}`)
	tl.set(".frame1", {opacity:0}, "f2")


	tl.set(".frame2", {opacity:1}, "f2")
	tl.from('.end_text', {opacity:0, duration:.3}, "+=.3");		
	tl.add(phone())
	tl.add("ender", "+=.5")
	tl.to(".end_text", {x:0, y:0, duration:.3}, "ender")
	tl.from( [ '.end_legal', '.end_cta'], {opacity:0});		
	
	
	tl.add(olg())
	// tl.play("f2")
}

function phone(){
	const tl = new TimelineMax()

	tl.from('.phone', {y:`+=${size.h}`});

	
	tl.from(".end_screen_1_max", {duration:.3, scale:0})


	tl.add("screen2", "+=.5")
	tl.to(".end_screen_1_max", {duration:.3, opacity:0}, "screen2")
	tl.to(".screen .items", {duration:.3, x:-SCREEN_WIDTH}, "screen2")
	tl.from(".end_screen_2_649", {duration:.3, scale:0})

	tl.add("screen3", "+=.5")
	tl.to(".end_screen_2_649", {duration:.3, opacity:0}, "screen3")
	tl.to(".screen .items", {duration:.3, x:-SCREEN_WIDTH*2}, "screen3")
	tl.from(".end_screen_3_group", {duration:.3, scale:0})

	return tl
}




export {size, init, start, start_landscape}




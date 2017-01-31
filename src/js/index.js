import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

console.log('start'); //スタート

let controller = new ScrollMagic.Controller(); 

let scene = new ScrollMagic.Scene({triggerElement: "#target"})
	.setPin("#target")
	.addTo(controller);
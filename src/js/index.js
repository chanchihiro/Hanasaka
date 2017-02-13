import { TweenMax, TweenLite, ScrollToPlugin, CSSPlugin } from 'gsap'
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import setTween from './components/animation.js' //ルート./は絶対いるよ！
import Indicator from './components/indicator.js'

console.log('start'); //スタート

let controller = new ScrollMagic.Controller();
let txts = [];
txts = document.getElementsByClassName('txt');
console.log(txts);
let hanasaka = document.getElementById('hanasaka');
console.log(hanasaka);

let txtshow = TweenMax.staggerTo(txts, 50, {opacity:1, transform:'matrix(1,0,0,1,0,0)'}, 20); //対象,かかる時間,
let txtmove = TweenMax.to(hanasaka, 30, {right: "-200%"}, 100);

let scene = new ScrollMagic.Scene({
	triggerElement: '#story', 
	duration: 80000, 
	triggerHook: 'onLeave'
	})
	.setTween(txtshow)
	.addTo(controller)
	.addIndicators({name: 'txtshow'});

let scene2 = new ScrollMagic.Scene({
	triggerElement: '#story',
	duration: 208000,
	triggerHook: 'onLeave'
	})
	.setTween(txtmove)
	.setPin('#story')
	.addTo(controller)
	.addIndicators({name: 'txtmove'});

// $.each(txts, function(i, text) {
// 	new ScrollMagic.Scene({
// 		triggerElement: text,
// 		duration: $(text).width() * 2,
// 		offset: $(text).width() * (-2)
// 	})
// 	.setTween(TweenMax.fromTo( text, 1, 
// 		{css: {x: $(text).width()}},
// 		{css: {x: 0}}
// 	))
// 	.setPin('#story')
// 	.addTo(controller);
// });
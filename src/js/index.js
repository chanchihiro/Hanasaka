import { TweenMax, TweenLite, ScrollToPlugin, CSSPlugin } from 'gsap'
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import setTween from './components/animation.js' //ルート./は絶対いるよ！

console.log('start'); //スタート

let controller = new ScrollMagic.Controller();
let txts = [];
txts = document.getElementsByClassName('txt');
console.log(txts);

let txtshow = TweenMax.staggerTo(txts, 2, {opacity:1}, 0.5);
let tween = TweenMax.fromTo("#rect", 1, {opacity: 0}, {opacity: 1}); //ターゲット、秒数?
// let movep = TweenMax.to('#hanasaka', 2, {right: -200},5);

let scene = new ScrollMagic.Scene({triggerElement: "#target", duration: 2000, triggerHook: 'onLeave' })
	.setPin("#target")
	.setTween(tween)
	.addTo(controller);
let scene2 = new ScrollMagic.Scene({triggerElement: '#container', duration: 8000, triggerHook: 'onLeave'})
	.setPin('#container')
	.setTween(txtshow)
	.addTo(controller);
// let scene3 = new ScrollMagic.Scene({triggerElement: '#container', duration: 10000, triggerHook: 'onLeave'})
// 	.setPin('#container')
// 	.addTo(controller);
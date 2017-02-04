import { TweenMax, TweenLite, ScrollToPlugin, CSSPlugin } from 'gsap'
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import setTween from './components/animation.js' //ルート./は絶対いるよ！

console.log('start'); //スタート

let controller = new ScrollMagic.Controller();
let txts = [];
txts = document.getElementsByClassName('txt');
console.log(txts);

let txtshow = TweenMax.staggerTo(txts, 30, {opacity:1}, 10); //対象,かかる時間,

let scene2 = new ScrollMagic.Scene({triggerElement: '#story', duration: 1000, triggerHook: 'onLeave'})
	.setTween(txtshow)
	.setPin('#story')
	.addTo(controller);
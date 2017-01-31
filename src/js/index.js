import { TweenMax, TweenLite, ScrollToPlugin, CSSPlugin } from 'gsap'
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import setTween from './components/animation.js' //ルート./は絶対いるよ！

console.log('start'); //スタート

let controller = new ScrollMagic.Controller();

let tween = TweenMax.fromTo("#rect", 1, {opacity: 0}, {opacity: 1}); //ターゲット、秒数?

let scene = new ScrollMagic.Scene({triggerElement: "#target", duration: 2000, triggerHook: 'onLeave' })
	.setPin("#target")
	.setTween(tween)
	.addTo(controller);
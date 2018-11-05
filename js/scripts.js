var carousel = document.querySelector('.carousel_container');
var	figure = carousel.querySelector('#crsl');
var	nav = carousel.querySelector('nav');
var	numImages = figure.childElementCount;
var	theta =  2 * Math.PI / numImages;
var	currImage = 0;
	
setInterval(
	function() {
		currImage++;
		figure.style.transform = `rotateY(${currImage * -theta}rad)`;
	}, 2500
);

jQuery(document).ready(function ($) {
	
	$("a.scroll_down").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#section_trade").offset().top
		}, 400);
	});
	$("a.cta_trade").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#toForm").offset().top
		}, 400);
	});

});
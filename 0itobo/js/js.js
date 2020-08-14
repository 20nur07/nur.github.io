$(document).ready(function(){
	$('.slider').slick({
  			slidesToShow: 3,
  			slidesToScroll: 1,
  			autoplay: true,
 			autoplaySpeed: 1500,
 			adaptiveHeight: true,
 			infinite: true,
 			touchThreshold: 10,
 			waitForAnimate: true,
 			centerMode: true,
 			nextArrow: '.next_caro',
 			prevArrow: '.previous_caro',
 			dots: false,
 			swiping: true,
	});
});
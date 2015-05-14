// JavaScript Document

//Mobile Menu
jQuery(document).ready(function($){
	var navigation = $('#navigation'),
	main = navigation.find('ul.menu');
	$('.nav-trigger').on('click', function(){
		$(this).toggleClass('open');
		main.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
	});
});
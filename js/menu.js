$(document).ready(mainmenu);
 
var count = 1;
 
function mainmenu () {
	$('.menu_bar').click(function(){
		if (count == 1) {
			$('nav').animate({
				left: '0'
			});
			count = 0;
		} else {
			count = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// show and hide submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	// show and hide submenu for service icons
	/*$('.services').click(function(){
		$(this).children('.child').slideToggle();
	}); */

}

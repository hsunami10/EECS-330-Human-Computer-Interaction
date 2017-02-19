// Javascript file for User Interaction and JQuery

$(document).ready(function() {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();

	var part1 = $('#names').css('width').substring(0,7);
	var part2 = $('#scores').css('width').substring(0,7);
	var totalWidth = parseFloat(part1) + parseFloat(part2);
	var remainder = screenWidth - totalWidth;
	var margins = Math.floor(remainder/2);

	$('#names').css('margin-left', (margins-8-40) + 'px');


	// Side navigation menu
	$('#menu_button').on({
		mouseenter: function() {
			$('#menu_button div').animate({
				backgroundColor: '#D3D3D3'
			}, 200);
		},
		mouseleave: function() {
			$('#menu_button div').animate({
				backgroundColor: 'white'
			}, 200);
		},
		mousedown: function() {
			$('#menu_button div').css('background-color', '#707070');
		},
		mouseup: function() {
			$('#names').animate({
				marginLeft: (margins-8-40-125) + 'px'
			});
		}
	});
	$('#closeNavButton').click(function() {
		$('#names').animate({
			marginLeft: (margins-8-40) + 'px'
		});
	});
});
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
			$('#mySidenav').animate({
				width: '250px'
			});
			$('#main').animate({
				marginLeft: '250px'
			});
			$('body').animate({
				backgroundColor: '#b28443'
			});
			$('#menu_button div').css('background-color', 'white');
			$('#names').animate({
				marginLeft: (margins-8-40-125) + 'px'
			});
		}
	});
	$('#closeNavButton').click(function() {
		$('#mySidenav').animate({
			width: '0px'
		});
		$('#main').animate({
			marginLeft: '0px'
		});
		$('body').animate({
			backgroundColor: '#F2B35C'
		});
		$('#names').animate({
			marginLeft: (margins-8-40) + 'px'
		});
	});
	$('.sidenav a').on({
		mouseenter: function() {
			$(this).animate({color: 'white'},250);
		},
		mouseleave: function() {
			$(this).animate({color: '#818181'},250);
		}
	});
});
// Javascript file for User Interaction and JQuery
var screenWidth = $(window).width();
var screenHeight = $(window).height();

$(document).ready(function() {
	// Get browser window width and height

	// Main menu
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
			$('li').animate({
				marginLeft: '5%',
				marginRight: '5%'
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
		$('li').animate({
			marginLeft: '7.2%',
			marginRight: '7.2%'
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
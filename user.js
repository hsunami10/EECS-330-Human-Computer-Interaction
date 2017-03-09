// Javascript file for User Interaction and JQuery

$(document).ready(function() {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();

	// Account for different screen size
	var margLeft = $('#one1').css('marginLeft');
	var str = margLeft.substring(0,7);
	var percent = Math.ceil(parseFloat(str)/screenWidth * 100);
	var halfPercent = percent/2;


	// Side navigation menu
	$('#menu_button').on({
		mouseenter: function() {
			$('#menu_button div').animate({
				backgroundColor: '#D3D3D3'
			}, 200);
		},
		mouseleave: function() {
			$('#menu_button div').animate({
				backgroundColor: 'black'
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
				backgroundColor: '#DCDCDC'
			});
			$('#menu_button div').css('background-color', 'black');
			$('li').animate({
				marginLeft: halfPercent.toString() + '%'
			});
			$('#arrow').remove();
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
			backgroundColor: 'white'
		});

		if(percent == 10) {
			$('#one1').animate({
				marginLeft: '10%'
			});
			$('#two1').animate({
				marginLeft: '10%'
			});
		}
		else if(percent == 13) {
			$('#one1').animate({
				marginLeft: '13%'
			});
			$('#two1').animate({
				marginLeft: '13%'
			});
		}
		else if(percent == 16) {
			$('#one1').animate({
				marginLeft: '16%'
			});
			$('#two1').animate({
				marginLeft: '16%'
			});
		}
		else if(percent == 19) {
			$('#one1').animate({
				marginLeft: '19%'
			});
			$('#two1').animate({
				marginLeft: '19%'
			});
		}
		else {
			$('#one1').animate({
				marginLeft: '10%'
			});
			$('#two1').animate({
				marginLeft: '10%'
			});
		}

		$('#one2').animate({marginLeft: '7.2%'});
		$('#one3').animate({marginLeft: '7.2%'});
		$('#two2').animate({marginLeft: '7.2%'});
		$('#two3').animate({marginLeft: '7.2%'});
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
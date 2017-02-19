// Javascript file for User Interaction and JQuery

$(document).ready(function() {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();

	// Home
	var margLeft = $('#one1').css('marginLeft');
	var str = margLeft.substring(0,7);
	var percent = Math.ceil(parseFloat(str)/screenWidth * 100);
	var halfPercent = percent/2;

	// Statistics
	var margins = $('#one').css('margin-left');
	var numMarg = parseInt(margins.substring(0,3));
	var changeMenu = numMarg - 125;

	// Friends
	var part1 = $('#names').css('width').substring(0,7);
	var part2 = $('#scores').css('width').substring(0,7);
	var totalWidth = parseFloat(part1) + parseFloat(part2);
	var remainder = screenWidth - totalWidth;
	var marginsF = Math.floor(remainder/2);
	$('#names').css('margin-left', (marginsF-8-40) + 'px');

	// Settings
	var count = 0;
	$('#swap').click(function(event) {
		count++;
		// Odd for text, even for voice
		if(count % 2 != 0)
			alert('You have turned on text tracking!');
		else
			alert('You have turned on speech tracking!');
	});

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

			// Main menu
			$('#main_menu li').animate({
				marginLeft: halfPercent.toString() + '%'
			});

			// Statistics main menu
			$('#statistics_main a').animate({marginLeft: changeMenu + 'px'}, {duration: 100, queue: false});
			$('#statistics_main a').animate({marginRight: changeMenu + 'px'}, {duration: 100, queue: false});

			// Friends main menu
			$('#names').animate({
				marginLeft: (marginsF-8-40-125) + 'px'
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

		// Main menu
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

		// Statistics main menu
		$('#statistics_main a').animate({marginLeft: margins}, {duration: 100, queue: false});
		$('#statistics_main a').animate({marginRight: margins}, {duration: 100, queue: false});

		// Friends main menu
		$('#names').animate({
			marginLeft: (marginsF-8-40) + 'px'
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
	$('.sidenav button').on({
		mouseenter: function() {
			$(this).animate({color: 'white'},250);
		},
		mouseleave: function() {
			$(this).animate({color: '#818181'},250);
		},




		// Copy from closeNavButton
		mouseup: function() {
		$('#mySidenav').animate({
			width: '0px'
		});
		$('#main').animate({
			marginLeft: '0px'
		});
		$('body').animate({
			backgroundColor: '#F2B35C'
		});

		// Main menu
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

		// Statistics main menu
		$('#statistics_main a').animate({marginLeft: margins}, {duration: 100, queue: false});
		$('#statistics_main a').animate({marginRight: margins}, {duration: 100, queue: false});

		// Friends main menu
		$('#names').animate({
			marginLeft: (marginsF-8-40) + 'px'
		});
		}
	});
});
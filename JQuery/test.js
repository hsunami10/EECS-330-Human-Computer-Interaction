/* JQuery Example */

/*

	$("selector").action()
	The "action" is also called an event

	fadeIn, fadeOut, fadeToggle, fadeTo
		speed -> "slow", "fast", "milliseconds"

*/

// Only runs when document is loaded
$(document).ready(function() {

	// Multiple events to one element (object literals)
	$("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }
	});

	// Show/Hide
	$("#paragraph").click(function() {
		$("p").toggle();
	});

	// Animate (size)
	$(".expandbutton").click(function() {
		// Literal
		$(".square").animate({width: "500px",
							 height: "500px"});
	});
	$(".resetbutton").click(function() {
		$(".square").animate({width: "100px", height: "100px"});
	});

	// Fading
	$("#fadeinout").click(function() {

		// Fades between in and out
		$("img").fadeToggle("slow");
	});

	// Sliding - can also use slideToggle() for both
	$("#slidedown").click(function() {
		$("#panel").slideDown();
	});
	$("#slideup").click(function() {
		$("#panel").slideUp();
	});



});
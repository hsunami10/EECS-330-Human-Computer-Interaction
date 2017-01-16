/* JQuery Example */

/*

	$("selector").action()
	The "action" is also called an event

	fadeIn, fadeOut, fadeToggle, fadeTo

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

	// Paragraph
	$("#paragraph").click(function() {
		$("p").toggle();
	});

	// Box
	$(".expandbutton").click(function() {
		$("#square").animate({width: "500px", height: "500px"});
	});
	$(".resetbutton").click(function() {
		$("#square").animate({width: "100px", height: "100px"});
	});

	// Image
	$("#fadeinout").click(function() {

		// Fades between in and out
		$("img").fadeToggle("slow");
	});
});

$(document).ready(function() {
	if (annyang) {
  		var greeting = function() {
  			$("h1").text("Hello world!");
  			$("h1").toggle();
  		};

  		var search = function(tag) {
  			window.location.href = "https://www.google.com/#q=" + tag;
  		};

  		// Let's define a command.
  		var commands = {
    		'hello': greeting,
    		'abort': function() {
    			annyang.abort();
    		},
    		'go to google': function() {
          window.location.href = "https://www.google.com/";
    		},
    		'search (up) *tag': search
  		};

  		// Add our commands to annyang
  		annyang.addCommands(commands);

  		// Start listening.
  		annyang.start();
	}
});
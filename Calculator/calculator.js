var append = false;
var negative = false;
var zero = true;

window.onload = function() {
	var interface = document.getElementById("interface");

	// Clear button
	document.getElementById("C").onclick = function(e) {
		interface.innerHTML = '0';
		append = false;
	};

	// Decimal button
	document.getElementById("decimal").onclick = function(e) {
		interface.innerHTML += '.';
		append = true;
	};

	// Toggle negative/positive
	document.getElementById("sign").onclick = function(e) {
		if(interface.innerHTML !== '0') {
			if(!negative) {
				interface.innerHTML = '-' + interface.innerHTML;
				negative = true;
			}
			else {
				interface.innerHTML = interface.innerHTML.substring(1);
				negative = false;
			}
		}
	};

	// Numbers
	for(var i = 0; i < 10; i++) {
		var button = document.getElementById(i);

		if(button !== null) {
			button.onclick = function(e) {

				if(append && interface.innerHTML != '0')
      				interface.innerHTML += e.target.id;
      			else
      				interface.innerHTML = e.target.id;

      			append = true;
      		};
		}
	}
};
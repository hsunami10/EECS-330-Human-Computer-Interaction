var append = false;
var negative = false;
var countOp = 0;
var begin = true;
var value = 0;
var operator = "";

var operators = function(operate) {
	document.getElementById("op").innerHTML = operate.target.id;
	if(operate.target.id != operator && operator.length !== 0)
		operator = operate.target.id;
	if(countOp > 0)
		return;
	if(begin)
		value = parseInt(interface.innerHTML);
	else if(operator == "+")
		value += parseInt(interface.innerHTML);
	else if(operator == "-")
		value -= parseInt(interface.innerHTML);
	else if(operator == "x")
		value *= parseInt(interface.innerHTML);
	else if(operator == "÷")
		value /= parseInt(interface.innerHTML);
	else
		value = parseInt(interface.innerHTML);
	countOp++;
	interface.innerHTML = value.toString();
	begin = false;
	operator = operate.target.id;
	append = false;
};

window.onload = function() {
	var interface = document.getElementById("interface");
	var op = document.getElementById("op");

	// Clear button
	document.getElementById("C").onclick = function(e) {
		interface.innerHTML = '0';
		append = false;
		begin = true;
		value = 0;
		operator = "";
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

	// Operators
	document.getElementById("+").onclick = function(e) {
		operators(e);
	};
	document.getElementById("-").onclick = function(e) {
		operators(e);
	};
	document.getElementById("x").onclick = function(e) {
		operators(e);
	};
	document.getElementById("÷").onclick = function(e) {
		operators(e);
	};

	// Equal
	document.getElementById("=").onclick = function(e) {
		if(operator == "+")
			value += parseInt(interface.innerHTML);
		else if(operator == "-")
			value -= parseInt(interface.innerHTML);
		else if(operator == "x")
			value *= parseInt(interface.innerHTML);
		else if(operator == "÷")
			value /= parseInt(interface.innerHTML);

		interface.innerHTML = value.toString();
		begin = false;
		operator = "";
		append = false;
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
      			countOp = 0;
      			append = true;
      		};
		}
	}
};
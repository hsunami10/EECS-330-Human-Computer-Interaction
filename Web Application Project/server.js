// Node.js Server
var express = require('express');
var app = express();
var path = require('path');

// Routing
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337, function() {
	console.log('Server listening on port 1337');
}); 
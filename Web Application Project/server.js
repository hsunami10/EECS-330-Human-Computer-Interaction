// Node.js Server
var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var server = http.createServer(app);

// Use middleware
app.use(express.static(path.join(__dirname + '/public')));

// Routing
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/mainmenu.html'));
});
app.get('/mainmenu.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/mainmenu.html'));
});
app.get('/settings.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/settings.html'));
});
app.get('/friends.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/friends.html'));
});
app.get('/statistics.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/statistics.html'));
});

server.listen(1337, function() {
	console.log('Server listening on port 1337');
});
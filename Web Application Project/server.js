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
app.get('/progressday.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/progressday.html'));
});
app.get('/progressweek.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/progressweek.html'));
});
app.get('/progressmonth.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/progressmonth.html'));
});
app.get('/progressyear.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/progressyear.html'));
});
app.get('/calendar.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/calendar.html'));
});
app.get('/favoritesday.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/favoritesday.html'));
});
app.get('/favoritesweek.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/favoritesweek.html'));
});
app.get('/favoritesmonth.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/favoritesmonth.html'));
});
app.get('/favoritesyear.html', function(req, res) {
	res.sendFile(path.join(__dirname + '/favoritesyear.html'));
});

server.listen(1337, function() {
	console.log('Server listening on port 1337');
});
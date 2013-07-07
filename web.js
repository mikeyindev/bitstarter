//var express = require('express');

//var app = express.createServer(express.logger());

//app.get('/index.html', function(request, response) {
	//response.send(Hello World!);
	//});

//var fs = require('fs');
//var http = require('http');
//var index = fs.readFileSync('index.html'); 

var http = require('http');
var fs = require('fs');
http.createServer(function (request, response)) {
	console.log('request starting...');
	
	fs.readFile('./index.html', function(error, content)) {
		if(error) {
			response.writeHead(500);
			response.end(;)
		}
		else {
			response.writeHEad(200, {'Content-Type': 'text/html'});
			response.end(content, 'utf-8');
		}
	}
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
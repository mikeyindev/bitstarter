var express = require('express');

var app = express.createServer(express.logger());

app.get('/index.html', function(request, response) {
	//response.send(Hello World!);
});

//var fs = require('fs');
//var http = require('http');
//var index = fs.readFileSync('index.html'); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
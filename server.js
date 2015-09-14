var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
})

http.listen(12102, function(){
	console.log('listening on 12102');
})
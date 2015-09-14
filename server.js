var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.send('<h1>Hello World</h1>');
})

http.listen(12102, function(){
	console.log('listening on 12102');
})
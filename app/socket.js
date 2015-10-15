// app/socket.js

// load up the user model
var User = require('./models/user');

module.exports = function(io)
{
	io.on('connection', function(socket){
		console.log('a user connected');
		
		socket.on('username registration', function(username){
			console.log('Username registered: ' + username)
			
			// Get all logged in users
			User.find({'IsLoggedIn' : true},"username",function(err,docs){
				connectedUsers = docs;
				io.emit('user login',connectedUsers);
			});
		});
		
		socket.on('disconnect', function(){
			console.log('user disconnected');
		});
		
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			io.emit('chat message', msg);
		});
	})
}
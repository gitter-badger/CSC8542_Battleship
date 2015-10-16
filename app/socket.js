// app/socket.js

// load up the user model
var User = require('./models/user');
var connectedUsers = [];

module.exports = function(io)
{
	io.on('connection', function(socket){
		console.log('a user connected');
		var thisUser;
		
		// User sent username
		socket.on('username registration', function(username){
			console.log('Username registered: ' + username)
			thisUser = username;
			
			// Get all logged in users
			User.find({'IsLoggedIn' : true},"username",function(err,docs){
				connectedUsers = docs;
				io.emit('user login',docs);
			});
		});
		
		// User closed browser
		socket.on('disconnect', function(){
			console.log(thisUser + ' disconnected');
			
			// Find the user associated with this connection and mark him as logged off
			User.update({'username' : thisUser},{'IsLoggedIn' : false},function(err,numAffected){
				connectedUsers = connectedUsers.filter(function(user){
					return user.username !== thisUser; // Remove the connected user matching "thisUser" from the array
				});
				io.emit('user login',connectedUsers);				
			});
		});
		
		// User sent a chat message
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			io.emit('chat message', msg);
		});
	})
}
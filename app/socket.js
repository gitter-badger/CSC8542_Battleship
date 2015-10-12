// app/socket.js

var connectedUsers = [];

module.exports = function(io)
{
	io.on('connection', function(socket){
		console.log('a user connected');
		
		socket.on('username registration', function(username){
			console.log('Username registered: ' + username)
			connectedUsers.push(username);
			io.emit('user login',connectedUsers)
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
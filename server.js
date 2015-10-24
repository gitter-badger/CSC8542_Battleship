// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var http  	 = require('http').Server(app);
var io       = require('socket.io')(http)
var port     = process.env.PORT || 12102;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'csc8542_battleship' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//Handle serving static pages (css, js files)
app.use(express.static('public'));

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// socket.io ===================================================================
require('./app/socket.js')(io) // Load the socket io callbacks, pass in socket.io object

// launch ======================================================================
http.listen(12102, function(){
	console.log('listening on 12102');
})

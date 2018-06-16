// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configuration ===========================================


var port = process.env.PORT || 5000; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port, function () {
   // require('./app/routes')(app); // pass our application into our routes
});
console.log('Magic happens on port ' + port); // shoutout to the user
exports = module.exports = app; // expose app
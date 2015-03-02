// Load required packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var customers = require('./routes/customers');
var devices = require('./routes/devices');

// Express application initialize
var app = express();

// Connect to the database
var dbName = 'webadoo-passbook-db';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

// Use the body-parser package in the application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Register routes with /api
app.use('/api', customers);
app.use('/api', devices);

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
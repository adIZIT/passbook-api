var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var customers = require('./routes/customers');
var app = express();

var dbName = 'webadoo-passbook-db';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', customers);

//module.exports = app;

//app.set('port', process.env.PORT || 8000);

var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
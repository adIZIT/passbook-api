// Load the required packages
var mongoose = require('mongoose');
require('./account.js')
require('./device.js')

// Define the customer schema
var customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	},
	internet_details: {
		internet_provider: String,
		wan_ip: String,
		wan_dns: String
	},
	accounts: [ mongoose.model('Account').schema ],
	devices: [ mongoose.model('Device').schema ]
});

// Exports the mongoose model
module.exports = mongoose.model('Customer', customerSchema);
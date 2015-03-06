// Load required packages
var mongoose = require('mongoose');

// Define the device schema
var DeviceSchema = new mongoose.Schema({
	_customer: { type: Number, ref: 'Customer' },
	name: {
		type: String, 
		required: true
	},
	device_name: String,
	ipv4_address: String,
	ipv6_address: String,
	mac_address: String,
	web_interface_url: String,
	telnet: String,
	netBIOS: String,
	user_name: String,
	password: String,
	notes: String,
	category: String,
	vendor: String,
	productNumber: String,
	serialNumber: String,	
	device_type: String,
	firmware_version: String,
	location: {
		name: String,
	},
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	},
	created_by: { 
		type: Number, 
		ref: 'User' 
	}
});

// Exports the mongoose model
module.exports = mongoose.model('Device', DeviceSchema);
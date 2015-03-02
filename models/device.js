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
	ip_address: String,
	user_name: String,
	password: String,
	notes: String,
	brand: String,
	productNumber: String,
	serialNumber: String,	
	device_type: String,
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	}
});

// Exports the mongoose model
module.exports = mongoose.model('Device', DeviceSchema);
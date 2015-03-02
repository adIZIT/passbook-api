// Load required packages
var mongoose = require('mongoose');

// Define the account schema
var AccountSchema = new mongoose.Schema({
	_customer: { type: Number, ref: 'Customer' },
	account_name: { 
		type: String,
		required: true
	},
	account_username: String,
	account_password: String,
	account_type: String,
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
module.exports = mongoose.model('Account', AccountSchema);
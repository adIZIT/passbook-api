// Load required packages
var mongoose = require('mongoose');

// Define the user schema
var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	username: String,
	password: String,
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
module.exports = mongoose.model('User', UserSchema);
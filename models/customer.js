var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
	customer_name: String,
	date_created: { 
		type: Date, 
		default: Date.now 
	},
	internet_details: {
		internet_provider: String,
		wan_ip: String,
		wan_dns: String
	},
	accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
	devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }]
});

var accountSchema = new Schema({
	_customer: { type: Number, ref: 'Customer' },
	account_name: String,
	account_username: String,
	account_password: String,
	account_type: String,
	date_created: { 
		type: Date, 
		default: Date.now 
	}
});

var deviceSchema = new Schema({
	_customer: { type: Number, ref: 'Customer' },
	name: String,
	device_name: String,
	ip_address: String,
	user_name: String,
	password: String,
	notes: String,
	device_type: String,
	date_created: { 
		type: Date, 
		default: Date.now 
	}
});

var userSchema = new Schema({
	first_name: String,
	last_name: String,
	email: String
	username: String,
	password: String,
	is_active: Boolean,
	date_created: { 
		type: Date, 
		default: Date.now 
	}
});

module.exports = mongoose.model('Customer', customerSchema);
module.exports = mongoose.model('Account', accountSchema);
module.exports = mongoose.model('Device', deviceSchema);
module.exports = mongoose.model('User', userSchema);
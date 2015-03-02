var Device = require('../models/device');
var express = require('express');
var router = express.Router();

// GET: /devices/
// return a list of all devices
router.route('/devices').get(function(req, res) {
	Device.find(function(err, devices) {
		if (err) {
			return res.send(err);
		}
		res.json(devices);
	});
});

// GET: /devices/
// return a Device with the id that is passed
router.route('/devices/:id').get(function(req, res) {
	Device.findOne({ _id: req.params.id}, function(err, device) {
		if (err) {
			return res.send(err);
		}
		res.json(device);
	});
});

// POST: /devices
// Inserts a device
router.route('/devices').post(function(req, res) {
	var device = new Device(req.body);
	
	device.save(function(err) {
		if (err) {
			return res.send(err);
		}
		
		res.send({ message: 'Deivce added' });
	});
});

// PUT: /devices/:id
// Updates a device 
router.route('/devices/:id').put(function(req, res) {
	Device.findOne({ _id: req.params.id }, function(err, device) {
		if (err) {
			return res.send(err);
		}
		
		// Loop through each property and assign the new value to it
		for (prop in req.body) {
			device[prop] = req.body[prop];
		}
		
		// Save the device
		device.save(function(err) {
			if (err) {
				return res.send(err);
			}			
			res.json({ message: 'Device updated!' });
		});
	});
});

module.exports = router;
var Customer = require('../models/customer');
var express = require('express');
var router = express.Router();

// GET: /customers/
// Geeft een lijst van alle klanten terug
router.route('/customers').get(function(req, res) {
	
	console.log('GET /customers/');
	console.log(req.query);	
	
	
	// Kijken of er een filter aanwezig is in de request
	console.log('Filter: ' + req.query.filter);
	
	var filters = req.query.filter.split(';');
	for (var f in filters) {
		console.log('Filter: ' + f);
	}
	
	console.log('ip address: ' + req.ip);
	console.log('hostname: ' + req.hostname);
	console.log('baseUrl: ' + req.baseUrl);
	console.log('originalUrl: ' + req.originalUrl);
	console.log('path: ' + req.path);
	console.log('protocol: ' + req.protocol);
	console.log('query: ' + req.query);
	console.log('route:' + req.route);
	
	// var filter = {};
	// for (var f in req.query.filter) {
		// filter[f] = req.query.filter[f];
		// console.log('Filter: ' + f);
	// }

	Customer.find(function(err, customers) {
		if (err) {
			return res.send(err);
		}
		res.json(customers);
	});
});

router.route('/customers').post(function(req, res) {
	console.log('POST: ' + req.body);
	console.log('CustomerName: ' + req.body.customerName);
	console.log(req.ip);
	var customer = new Customer(req.body);
	
	customer.save(function(err) {
		if (err) {
			return res.send(err);
		}
		
		res.send({ message: 'Customer added' });
	});
});

router.route('/customers/:id').put(function(req, res) {
	Customer.findOne({ _id: req.params.id }, function(err, customer) {
		if (err) {
			return res.send(err);
		}
		
		for (prop in req.body) {
			customer[prop] = req.body[prop];
		}
		
		// Save the customer
		customer.save(function(err) {
			if (err) {
				return res.send(err);
			}
			
			res.json({ message: 'Customer updated!' });
		});
	});
});

router.route('/customers/:id').get(function(req, res) {
	Customer.findOne({ _id: req.params.id}, function(err, customer) {
		if (err) {
			return res.send(err);
		}
		res.json(customer);
	});
});

router.route('/customers/:id').delete(function(req, res) {
	Customer.remove({
		_id: req.params.id
	}, function(err, customer) {
		if (err) {
			return res.send(err);
		}
		res.json({ message: 'Successfully deleted' });
	});
});

module.exports = router;
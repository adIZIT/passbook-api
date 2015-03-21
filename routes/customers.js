var Customer = require('../models/customer');
var express = require('express');
var router = express.Router();

// GET: /customers/
// Geeft een lijst van alle klanten terug
router.route('/customers').get(function(req, res) {
	
	console.log('GET /customers/');
	console.log(req.query);	

	Customer.find(req.query, function(err, customers) {
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
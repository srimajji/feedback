const express = require('express');
const log = require('winston');
const router = express.Router();

const Company = require('../models/company.model.js');

router.route('/:id')
	.get((req, res) => {
		const id = req.params.id;
		Company.findById(id, (err, company) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Not a valid id' });
			} else {
				res.json(company);
			}
		});
	})
	.put((req, res) => {
		const id = req.params.id;
		const conditions = { _id: req.params.id };
		const options = { new: true, fields: '-__v' };
		Company.findOneAndUpdate(conditions, req.body, options, (err, company) => {
			if(err) {
				log.error(err);
				res.status(400).json(err);
			} else {
				res.json(company);
			}
		});
	})
	.delete((req, res) => {
		const id = req.params.id;
		Company.findByIdAndRemove(is, (err) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Not a valid id' });
			} else {
				res.send(200);
			}
		});
	});


router.route('/')
	.get((req, res) => {
		Company.find((err, companies) => {
			if(err) {
				log.error(err)
				res.send(500);
			} else {
				res.json(companies);
			}
		});
	})
	.post((req, res) => {
		const company = new Company(Object.assign({}, req.body));
		// save company
		company.save((err) => {
			if(err) {
				log.error('Error saving company ', err);
				res.status(400).send(err);
			} else {
				log.info('Succesfully saved company ', company._id);
				res.status(201).json(company);
			}
		});
	});

module.exports = router;
const express = require('express');
const log = require('winston');
const router = express.Router();

const Response = require('../models/response.model.js');

router.route('/:id')
	.get((req, res) => {
		const id = req.params.id;
		Response.findById(id, (err, response) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Not a valid id' });
			} else {
				res.json(response);
			}
		});
	})
	.put((req, res) => {
		const id = req.params.id;
		const conditions = { _id: req.params.id };
		const options = { new: true, fields: '-__v' };
		Response.findOneAndUpdate(conditions, req.body, options, (err, response) => {
			if(err) {
				log.error(err);
				res.status(400).json(err);
			} else {
				res.json(response);
			}
		});
	})
	.delete((req, res) => {
		const id = req.params.id;
		Response.findByIdAndRemove(is, (err) => {
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
		Response.find((err, companies) => {
			if(err) {
				log.error(err)
				res.send(500);
			} else {
				res.json(companies);
			}
		});
	})
	.post((req, res) => {
		const response = new Response(Object.assign({}, req.body));
		// save response
		response.save((err) => {
			if(err) {
				log.error('Error saving response ', err);
				res.send(err);
			} else {
				log.info('Succesfully saved response ', response._id);
				res.status(201).json(response);
			}
		});
	});

module.exports = router;
const express = require('express');
const log = require('winston');
const router = express.Router();

const Feedback = require('../models/feedback.model.js');

router.route('/:id')
	.get((req, res) => {
		const id = req.params.id;
		Feedback.findById(id, (err, feedback) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Invalid id'});
			} else {
				res.json(feedback);
			}
		});
	})
	.put((req, res) => {
		const id = req.params.id;
		const conditions = { _id: req.params.id };
		const options = { new: true, fields: '-__v' };
		Feedback.findOneAndUpdate(conditions, req.body, options, (err, feedback) => {
			if(err) {
				log.error(err);
				res.status(400).json(err);
			} else {
				res.json(feedback);
			}
		});
	})
	.delete((req, res) => {
		const id = req.params.id;
		Feedback.findByIdAndRemove(id, (err) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Invalid id'});
			} else {
				res.send(200);
			}
		});
	});

router.route('/:id/shallow')
	.get((req, res) => {
		const id = req.params.id;
		Feedback.findOne({ _id: id })
			.populate('company')
			.populate('response')
			.exec((err, feedback) => {
				if(err) {
					log.error(err);
					res.status(400).json({ message: 'Invalid id'});	
				} else {
					res.json(feedback);
				}
			});
	});

router.route('/')
	.get((req, res) => {
		Feedback.find((err, feedbacks) => {
			if(err) {
				log.error(err);
				res.status(500).json({ message: 'Internal Error' });
			} else {
				res.json(feedbacks);
			}
		});
	})
	.post((req, res) => {
		const feedback = new Feedback(Object.assign({}, req.body));
		feedback.save((err) => {
			if(err) {
				log.error(err);
				res.status(400).json({ message: 'Invalid object', error: err });
			} else {
				res.status(201).json(feedback);
			}
		});
	});

module.exports = router;
